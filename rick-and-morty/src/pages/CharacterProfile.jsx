import "../styles/components/CharacterProfile.scss";
import {Episode} from "../components/ui/base/Episode";
import {Episodes} from "./Episodes";
import {ArrowBack} from "../components/ui/base/ArrowBack";
import {Link} from "react-router-dom";
import {useState} from "react";
import {EpisodesProfile} from "./EpisodesProfile";

export function CharacterProfile(props){

    let characterProfileData = props.characterProfiledata;
    const status = characterProfileData.status?"живой":"мертвый";
    const gender = characterProfileData.gender?"женский":"мужской";
    const episodes = [];
    const [isEpisodesProfile,setIsEpisodesProfile] = useState(false);
    const [episodesProps,setEpisodesProps] = useState({});

    const episodesPropsById = async (id)=> {
        const response =  await fetch(`http://173.249.20.184:7001/api/Episodes/GetById?Id=${id}`).then(res => res);
        const responseJson =  response.json();

        await responseJson.then(data1 => {
            setEpisodesProps(data1.data);
        })
    }

        characterProfileData.episodes?.forEach(item => {
            episodes.push(
            <Episode
                episodesData={item}
                isMoreButton={true}
                key={item.id}
                callback={() => {

                    episodesPropsById(item.id)
                    setIsEpisodesProfile(!isEpisodesProfile)
                }}
            />
            );
        })



    return(
        <div className="container">
            {
                isEpisodesProfile?
                    <EpisodesProfile
                        callback={() => {setIsEpisodesProfile(!isEpisodesProfile)}}
                        episodesData={episodesProps}
                    />
                    :
                <div className="character-profile">
                    <div className="character-profile__arrow-back-wrapper">
                        <ArrowBack className="character-profile__arrow-back"
                                   callback={() => {
                                       props.callback()
                                   }}
                        />
                    </div>
                    <div className="person">
                        <div className="person__ava">
                            <div className="person__ava-bg">
                                <div className="person__ava-bg-wrapper">
                                    <img src={characterProfileData.imageName} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="person__personal-data">
                            <div className="person__fullName-status">
                                <h1 className="person__fullName">{characterProfileData.fullName}</h1>
                                <p className="person__status">{status}</p>
                            </div>

                            <p className="person__description">
                                {characterProfileData.about}
                            </p>

                            <div className="person__gender-Race">
                            <span>
                                <h5 className="person__heading">Пол</h5>
                                <p className="person__after-heading">{gender}</p>
                            </span>
                                <span>
                                <h5 className="person__heading">Расса</h5>
                                <p className="person__after-heading">{characterProfileData.race}</p>
                            </span>
                            </div>

                            <div className="person__place-birth">
                                <h5 className="person__heading">Место рождение</h5>
                                <p className="person__after-heading">{characterProfileData.location?.name}</p>
                            </div>
                            <div className="person__location">
                                <h5 className="person__heading">Местоположение</h5>
                                <p className="person__after-heading">{characterProfileData.placeOfBirth?.name}</p>
                            </div>
                        </div>
                    </div>
                    <div className="episodes-visited">
                        <div className="episodes-visited__title">
                            <h2>Эпизоды</h2>
                            <p>Все эпизоды</p>
                        </div>

                        <div className="episodes-visited__block">
                            {episodes}
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}