import '../../../styles/components/Character.scss'
export function Character(props){
    return (
        <div className="character">
            <img src={props.link} alt="" className="character__img"/>
            <div className="character__info">
                <p className="character__status">{props.status}</p>
                <h2 className="character__full-name">{props.fullName}</h2>
                <p className="character__gender-species">{props.gender}, {props.species}</p>
            </div>
        </div>
    );
}