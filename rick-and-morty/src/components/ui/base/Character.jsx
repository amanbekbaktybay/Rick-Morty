import '../../../styles/components/Character.scss'
import {CharacterProfile} from "../../../pages/CharacterProfile";
import {useState} from "react";
export function Character(props){
    const status = props.characterData.status?"живой":"мертвый";
    const gender = props.characterData.gender?"женский":"мужской";
    return (
                <div className="character" onClick={() => {props.callback()}}>
                            <section className="character__wrapper">
                                <img src={props.characterData.imageName} alt="" className="character__img"/>
                                <div className="character__info">
                                    <p className="character__status">{status}</p>
                                    <h2 className="character__full-name">{props.characterData.fullName}</h2>
                                    <p className="character__gender-species">{gender}, {props.characterData.race}</p>
                                </div>
                            </section>
                </div>
    );
}