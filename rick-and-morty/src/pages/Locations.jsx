import "../styles/components/Locations.scss";
import {Search} from "../components/ui/base/Search";
import {Location} from "../components/ui/base/Location";
import {Navigation} from "../components/ui/base/Navigation";

export function Locations(props){
    return(

        <div className="locations container">
            <Search placeHolder="Найти локацию"/>
            <div className="locations__wrapper">

                <div className="locations__info">
                    <div className="locations__counter">Всего Локаций:  200</div>

                </div>
                <div className="locations__location-block">
                    <Location></Location>
                    <Location></Location>
                    <Location></Location>
                    <Location></Location>
                    <Location></Location>
                    <Location></Location>
                </div>
                {/*<Navigation></Navigation>*/}
            </div>

        </div>
    );
}