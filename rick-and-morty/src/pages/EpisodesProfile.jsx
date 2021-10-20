import "../styles/components/Episodes-profile.scss"
import * as url from "url";
import {ArrowBack} from "../components/ui/base/ArrowBack";
import {useState} from "react";
import {Character} from "../components/ui/base/Character";
import {CharacterProfile} from "./CharacterProfile";

export function EpisodesProfile(props){

    const [isCharacterProfile,setIsCharacterProfile] = useState(false);
    const [characterProfileProps,setCharacterProfileProps] = useState({});
    const characters = []
    const characterPropsById = async (id)=> {
        const response =  await fetch(`http://173.249.20.184:7001/api/Characters/GetById?Id=${id}`).then(res => res);
         const responseJson = response.json();

        await responseJson.then(data => {
            setCharacterProfileProps(data.data);
        })
    }

    props.episodesData.characters?.forEach(item => {
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



    return(
        <div className="container">
            {
                isCharacterProfile?
                    <CharacterProfile
                        characterProfiledata={characterProfileProps}
                        callback={() => {setIsCharacterProfile(!isCharacterProfile)}}
                    />
                    :
                <div className="episodes-profile">
                    <div className="episodes-profile__arrow-back">
                        <ArrowBack callback={() => {
                            props.callback()
                        }}/>
                    </div>
                    <div className="episodes-profile-data">
                        <div className="episodes-profile-data__ava">

                            <div className="episodes-profile-data__plug">
                                <div className="episodes-profile-data__play-button">
                                    <img src="assets/images/play-button.png" alt=""/>
                                </div>
                                <div className="episodes-profile-data__img-wrapper">
                                    <div className="episodes-profile-data__img" style={
                                        {backgroundImage: `url(${props.episodesData.imageName})`}
                                    }>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="episodes-profile-data__info">
                            <div className="episodes-profile-data__info-wrapper">
                                <div className="episodes-profile-data__name-and-number">
                                    <h2>{props.episodesData.name}</h2>
                                    <p>серия {props.episodesData.series}</p>
                                </div>

                                <div className="episodes-profile-data__description-wrapper">
                                    <p className="episodes-profile-data__description">{props.episodesData.plot}</p>
                                </div>
                                <div className="episodes-profile-data__date-wrapper">
                                    <h2 className="episodes-profile-data__date-wrapper-title">Премеьра</h2>
                                    <p className="episodes-profile-data__date">{props.episodesData.premiere}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="episodes-profile-characters">
                        <div className="episodes-profile-characters__wrapper">
                            <div className="episodes-profile-characters__title">
                                <h2>Персонажи</h2>
                            </div>

                            <div className="episodes-profile-characters__block">
                                {characters}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}