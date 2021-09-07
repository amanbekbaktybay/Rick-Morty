import "../styles/components/Locations.scss";
import {Search} from "../components/ui/base/Search";
import {Location} from "../components/ui/base/Location";
import {Navigation} from "../components/ui/base/Navigation";
import {useEffect, useState} from "react";
import {Character} from "../components/ui/base/Character";

export function Locations(props){
    const locationsArray = [];

    const [array,setArray] = useState([]);


    async function fetchLocations (){
        const response = await fetch("http://173.249.20.184:7001/api/Locations/GetAll?PageNumber=1&PageSize=10")
        const responseJson = response.json()
        await responseJson.then(data => {
            const responseArray = data.data;

            responseArray.forEach(item => {

                locationsArray.push(
                    <Location
                        link={item["imageName"]}
                        fullName={item.name}
                        type={item.type}
                        measurements={item.measurements}
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
            await fetchLocations();
            console.log(array)
            console.log(array.length)
            setArray(locationsArray)
        },[]);
    return(
        <div className="locations container">
            <Search placeHolder="Найти локацию"/>
            <div className="locations__wrapper">

                <div className="locations__info">
                    <div className="locations__counter">Всего Локаций:  {array.length}</div>

                </div>
                <div className="locations__location-block">
                    {array}
                </div>

            </div>

        </div>
    );
}