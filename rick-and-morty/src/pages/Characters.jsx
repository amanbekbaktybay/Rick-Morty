import {Search} from "../components/ui/base/Search";
import {Character} from "../components/ui/base/Character";
import {Navigation} from "../components/ui/base/Navigation";
import '../styles/components/Characters.scss'
export function Characters(props){



    return (
        <div className="container">
            <Search placeHolder="Найти Персонажа"/>
            <div className="characters">
                <div className="characters__info">
                        <div className="characters__counter">Всего Персонажей:  200</div>
                        <div className="characters__layout"><img src="assets/layout-icon.svg" alt=""/></div>
                </div>
                    <div className="characters__blocks">
                            <Character
                                link=".\assets\rick.png"
                                status="живой"
                                fullName="Рик Санчез"
                                gender="Мужской"
                                species="Человек"
                            />
                            <Character
                                link=".\assets\rick.png"
                                status="живой"
                                fullName="Рик Санчез"
                                gender="Мужской"
                                species="Человек"
                            />
                            <Character
                                link=".\assets\rick.png"
                                status="живой"
                                fullName="Рик Санчез"
                                gender="Мужской"
                                species="Человек"
                            />
                            <Character
                                link=".\assets\rick.png"
                                status="живой"
                                fullName="Директор Агенства"
                                gender="Мужской"
                                species="Человек"
                            />
                            <Character
                                link=".\assets\rick.png"
                                status="живой"
                                fullName="Морти Смит"
                                gender="Мужской"
                                species="Человек"
                            />
                        <Character
                            link=".\assets\rick.png"
                            status="живой"
                            fullName="Морти Смит"
                            gender="Мужской"
                            species="Человек"
                        />
                        <Character
                            link=".\assets\rick.png"
                            status="живой"
                            fullName="Морти Смит"
                            gender="Мужской"
                            species="Человек"
                        />
                        <Character
                            link=".\assets\rick.png"
                            status="живой"
                            fullName="Морти Смит"
                            gender="Мужской"
                            species="Человек"
                        />
                    </div>



                </div>
            <Navigation/>
        </div>
    );
}