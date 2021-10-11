import {Search} from "../components/ui/base/Search";
import {Character} from "../components/ui/base/Character";
import {Navigation} from "../components/ui/base/Navigation";
import '../styles/components/Characters.scss'
import {useEffect, useState} from "react";
import {changeLayoutCharacters} from "../scripts";
import {CharacterProfile} from "./CharacterProfile";
import PrivateRoute from "../router/PrivateRoutes";
import {Link} from "react-router-dom";
export function Characters(props){

    const [buffer, setBuffer] = useState([]);
    const [isLayout, setIsLayout] = useState(false);

    const [search,setSearch] = useState("");
    const [array,setArray] = useState([]);
    const [isCharacterProfile,setIsCharacterProfile] = useState(false);
    const [characterProfileProps,setCharacterProfileProps] = useState({});

    async function fetchCharacters (){
     const response = await fetch("http://173.249.20.184:7001/api/Characters/GetAll?PageNumber=1&PageSize=100")
        const responseJson = response.json()
        await responseJson.then(data => {
            const responseArray = data.data;

            responseArray.forEach(item => {
                buffer.push(
                    <Character
                        characterData={item}
                        key={item.id}
                        callback={() => {
                            setCharacterProfileProps(item);
                            setIsCharacterProfile(!isCharacterProfile);
                        }}
                    />
                );
            });
        })
     }



    useEffect(
        async () => {
            if(buffer.length === 0) {
                await fetchCharacters();
                setArray(buffer);
                changeLayoutCharacters(isLayout)
            }
            if (search) {
                let filteredArray = buffer.filter(item => item.props.characterData.fullName.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase()));
                changeLayoutCharacters(isLayout)
                setArray(filteredArray);
            }else{
                changeLayoutCharacters(isLayout)
                setArray(buffer);
            }
        },[search]);



    return (

            <div className="container">
                {
                    isCharacterProfile?
                        <CharacterProfile
                            characterProfiledata={characterProfileProps}
                            callback={() => {setIsCharacterProfile(!isCharacterProfile)}}
                        />
                        :
                    <section>
                        <Search placeHolder="Найти Персонажа" callback={setSearch}/>
                        <div className="characters">
                            <div className="characters__info">
                                <div className="characters__counter">Всего Персонажей: {array.length}</div>
                                <div className="characters__layout">
                                    <img src="assets/images/layout-icon.svg" alt="" onClick={() => {
                                        setIsLayout(!isLayout);
                                        changeLayoutCharacters(isLayout)
                                    }}/>
                                </div>
                            </div>

                            <div className="characters__blocks">
                                {array}
                            </div>

                        </div>
                        <Navigation/>
                    </section>
                }
            </div>

    );

}