import "../styles/components/Locations.scss";
import {Search} from "../components/ui/base/Search";
import {Location} from "../components/ui/base/Location";
import {Navigation} from "../components/ui/base/Navigation";
import {useEffect, useState} from "react";
import {Character} from "../components/ui/base/Character";
import {LocationProfile} from "./LocationProfile";

export function Locations(props){

    const [buffer,setBuffer] = useState([]);
    const [array,setArray] = useState([]);
    const [search,setSearch] = useState("");
    const [isLocationProfile,setIsLocationProfile] = useState(false);
    const [locationProfileProps,setLocationProfileProps] = useState({});

    async function fetchLocations (){
        const response = await fetch("http://173.249.20.184:7001/api/Locations/GetAll?PageNumber=1&PageSize=13")
        const responseJson = response.json()
        await responseJson.then(data => {
            const responseArray = data.data;

            responseArray.forEach(item => {
                buffer.push(
                    <Location
                        locationData={item}
                        key={item.id}
                        callback={() => {
                            setLocationProfileProps(item);
                            setIsLocationProfile(!isLocationProfile);
                        }}
                    />
                );
            });
        })
    }




    useEffect(
        async () => {
            if (buffer.length === 0){
                await fetchLocations();
            }

            if (search) {
                let filteredArray = buffer.filter(item => item.props.fullName.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase()));
                setArray(filteredArray);
            }else{
                setArray(buffer);
            }
        },[search]);

    return(
        <div className="locations">
            {
                isLocationProfile?<LocationProfile locationProfileData={locationProfileProps} callback={()=>{setIsLocationProfile(!isLocationProfile)}}/>
                :
                <section>
                    <Search placeHolder="Найти локацию" callback={setSearch}/>
                    <div className="locations__wrapper">

                        <div className="locations__info">
                            <div className="locations__counter">Всего Локаций: {array.length}</div>

                        </div>
                        <div className="locations__location-block">
                            {array}
                        </div>

                    </div>
                    <Navigation iconNumber={2}/>
                </section>
            }
        </div>

    );
}