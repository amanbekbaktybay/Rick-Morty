import "../../../styles/components/Episode.scss";

export function Episode(props){

    return (
        <div className="episode">
            <img src={props.link} alt="" className="episode__img"/>
            <div className="episode__info">
                <p className="episode__series">Серия {props.series}</p>
                <h2 className="episode__name">{props.name}</h2>
                <p className="episode__date">{props.date}</p>
            </div>
        </div>
    );
}