import "../../../styles/components/Location.scss"

export function Location(props){

    return(
        <div className="location">
            <div className="location__img">
                <img src="assets/images/earth-img.png" alt=""/>
            </div>
            <div className="location__title">
                <h3>Земля С-137</h3>
                <p>Мир - Измерение С-137</p>
            </div>
        </div>
    );
}