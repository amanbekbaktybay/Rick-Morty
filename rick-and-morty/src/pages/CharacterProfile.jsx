import "../styles/components/CharacterProfile.scss";
import {Episode} from "../components/ui/base/Episode";
import {Episodes} from "./Episodes";
import {ArrowBack} from "../components/ui/base/ArrowBack";

export function CharacterProfile(props){

    let characterProfileData = props.characterProfiledata;
    const status = characterProfileData.status?"живой":"мертвый";
    const gender = characterProfileData.gender?"женский":"мужской";
    const episodes = [];


        characterProfileData.episodes.forEach(item => {
            episodes.push(
            <Episode
                episodesData={item}
                isMoreButton={true}
                key={item.id}
            />
            );
        })



    return(
        <div className="container">
            <div className="character-profile">
                <div className="person">
                    <div className="person__ava">
                        <div className="person__ava-bg">
                            <div className="person__ava-bg-wrapper">
                                <div className="person__arrow-back-wrapper">
                                    <ArrowBack className="character-profile__arrow-back"
                                               callback={()=>{
                                                   props.callback()
                                               }}
                                    />
                                </div>


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
                            <p className="person__after-heading">{characterProfileData.location.name}</p>
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
        </div>
    );
}