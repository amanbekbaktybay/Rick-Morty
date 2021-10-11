import "../../../styles/components/Location.scss"

export function Location(props){

    const locationData = props.locationData;
    return(
        <div className="location" onClick={()=>{props.callback()}}>
            <div className="location__img">
                <img src={locationData.imageName} alt=""/>
            </div>
            <div className="location__title">
                <h3>{locationData.name}</h3>
                <p>{locationData.type} - {locationData.measurements}</p>
            </div>
        </div>
    );
}