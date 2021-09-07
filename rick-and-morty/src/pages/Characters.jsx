import {Search} from "../components/ui/base/Search";
import {Character} from "../components/ui/base/Character";
import {Navigation} from "../components/ui/base/Navigation";
import '../styles/components/Characters.scss'
import {useEffect, useState} from "react";
export function Characters(props){

    const charactersArray = [];

    const [array,setArray] = useState([]);


    async function fetchCharacters (){
     const response = await fetch("http://173.249.20.184:7001/api/Characters/GetAll?PageNumber=1&PageSize=20")
        const responseJson = response.json()
        await responseJson.then(data => {
            const responseArray = data.data;

            responseArray.forEach(item => {
                const status = item.status?"живой":"мертвый";
                const gender = item.gender?"женский":"мужской";
                charactersArray.push(
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


            // setArray(charactersArray);
            console.log("data has taken up!")
        })
     }



    useEffect(
        async () => {
            await fetchCharacters();
            console.log(array)
            console.log(array.length)
            setArray(charactersArray)
        },[]);



    return (
        <div className="container">
            <Search placeHolder="Найти Персонажа"/>
            <div className="characters">
                <div className="characters__info">
                        <div className="characters__counter">Всего Персонажей:  {array.length}</div>
                        <div className="characters__layout"><img src="assets/layout-icon.svg" alt=""/></div>
                </div>
                    <div className="characters__blocks">
                        {array}
                    </div>
                </div>
        </div>
    );

}