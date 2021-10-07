import "../../../styles/components/Episode.scss";
import {ArrowMore} from "./ArrowMore";

export function Episode(props){

    // console.log(props.episodesData)
    return (
        <div className="episode">
            <div className="episode__wrapper">
                <img src={props.episodesData["imageName"]} alt="" className="episode__img"/>
                <div className="episode__info">
                    <p className="episode__series">Серия {props.episodesData.series}</p>
                    <h2 className="episode__name">{props.episodesData.name}</h2>
                    <p className="episode__date">{props.episodesData.premiere}</p>
                </div>
            </div>

            {props.isMoreButton?<ArrowMore></ArrowMore>:null}
        </div>
    );
}