import "../../../styles/components/Location.scss"

export function Location(props){

    return(
        <div className="location">
            <div className="location__img">
                <img src={props.link} alt=""/>
            </div>
            <div className="location__title">
                <h3>{props.name}</h3>
                <p>{props.type} - {props.measurements}</p>
            </div>
        </div>
    );
}