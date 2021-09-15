import {Search} from "../components/ui/base/Search";
import {Character} from "../components/ui/base/Character";
import {Navigation} from "../components/ui/base/Navigation";
import '../styles/components/Characters.scss'
import {useEffect, useState} from "react";
export function Characters(props){

    const [buffer, setBuffer] = useState([]);

    const [search,setSearch] = useState("");
    const [array,setArray] = useState([]);


    async function fetchCharacters (){
     const response = await fetch("http://173.249.20.184:7001/api/Characters/GetAll?PageNumber=1&PageSize=20")
        const responseJson = response.json()
        await responseJson.then(data => {
            const responseArray = data.data;

            responseArray.forEach(item => {
                const status = item.status?"живой":"мертвый";
                const gender = item.gender?"женский":"мужской";
                buffer.push(
                    <Character
                        link={item["imageName"]}
                        status={status}
                        fullName={item.fullName}
                        gender={gender}
                        species={item.race}
                        key={item.id}
                    />
                );
            });



            console.log("data has taken up!")
        })
     }



    useEffect(
        async () => {
            if(buffer.length === 0) {
                await fetchCharacters();
                setArray(buffer);
                console.log("fetched")
            }
            if (search) {
                console.log(buffer.length)
                let filteredArray = buffer.filter(item => item.props.fullName.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase()));
                setArray(filteredArray);
            }else{
                console.log(buffer.length)
                setArray(buffer);
            }
        },[search]);



    return (
        <div className="container">
            <Search placeHolder="Найти Персонажа" callback={setSearch}/>
            <div className="characters">
                <div className="characters__info">
                        <div className="characters__counter">Всего Персонажей:  {array.length}</div>
                        <div className="characters__layout"><img src="assets/images/layout-icon.svg" alt=""/></div>
                </div>

                <div className="characters__blocks">
                        {array}
                </div>
            </div>
        </div>
    );

}