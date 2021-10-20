import "../styles/components/LocationsProfile.scss"
import {ArrowBack} from "../components/ui/base/ArrowBack";
import {Character} from "../components/ui/base/Character";
import {useState} from "react";
import {CharacterProfile} from "./CharacterProfile";

export function LocationProfile(props){

    const locationProfileData = props.locationProfileData;

    const characters = []
    const [isCharacterProfile,setIsCharacterProfile] = useState(false);
    // const [characterProps,setCharacterProps] = useState({});
    const [characterProfileProps,setCharacterProfileProps] = useState({});
    const characterPropsById = async (id)=> {
        const response =  await fetch(`http://173.249.20.184:7001/api/Characters/GetById?Id=${id}`).then(res => res);
        const responseJson = response.json();

        responseJson.then(data => {
            setCharacterProfileProps(data.data);
        })
    }


    locationProfileData.characters.forEach(item => {
        characters.push(
        <Character
            characterData={item}
            key={item.id}
            isMoreButton={true}
            callback={() => {
                characterPropsById(item.id);
                setIsCharacterProfile(!isCharacterProfile);
            }}
        />
        );
    })

    return (
        <div className="container">
            {
                isCharacterProfile?
                    <CharacterProfile
                        characterProfiledata={characterProfileProps}
                        callback={() => {setIsCharacterProfile(!isCharacterProfile)}}
                    />
                    :
                <div className="location-profile">
                    <div className="location-profile__arrow-back">
                        <ArrowBack callback={() => {
                            props.callback();
                        }}/>
                    </div>
                    <div className="location-info">
                        <div className="location-info__plug">
                            <img src={locationProfileData?.imageName} alt="" className="location-info__img"/>
                        </div>

                        <div className="location-info__data">
                            <div className="location-info__data-wrapper">
                                <div className="location-info__title">
                                    <h3 className="location-info__name">{locationProfileData?.name}</h3>
                                    <p className="location-info__type">{locationProfileData?.type} - {locationProfileData.measurements}</p>
                                </div>
                                <div className="location-info__description">
                                    <p>
                                        {locationProfileData.about}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="location-characters">
                        <div className="location-characters__wrapper">
                            <div className="location-characters__title">
                                <h2>Персонажи</h2>
                            </div>
                            <div className="location-characters__block">
                                {characters}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}