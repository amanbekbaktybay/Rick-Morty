import "../styles/components/CharacterProfile.scss";
import {Episode} from "../components/ui/base/Episode";

export function CharacterProfile(props){

    return(
        <div className="container">
            <div className="character-profile">
                <div className="person">
                    <div className="person__ava">
                        <div className="person__ava-bg">
                            <div className="person__ava-bg-wrapper">
                                <img src="assets/images/rick.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="person__personal-data">
                        <div className="person__fullName-status">
                            <h1 className="person__fullName">Рик Санчез</h1>
                            <p className="person__status">Живой</p>
                        </div>

                        <p className="person__description">
                            Главный протагонист мультсериала «Рик и Морти». Безумный ученый, чей алкоголизм, безрассудность
                            и социопатия заставляют беспокоиться семью его дочери.
                        </p>

                        <div className="person__gender-Race">
                            <span>
                                <h5 className="person__heading">Пол</h5>
                                <p className="person__after-heading">Мужской</p>
                            </span>
                            <span>
                                <h5 className="person__heading">Расса</h5>
                                <p className="person__after-heading">Человек</p>
                            </span>
                        </div>

                        <div className="person__place-birth">
                            <h5 className="person__heading">Место рождение</h5>
                            <p className="person__after-heading">Земля С-137</p>
                        </div>
                        <div className="person__location">
                            <h5 className="person__heading">Местоположение</h5>
                            <p className="person__after-heading">Земля(Измерение подменны)</p>
                        </div>
                    </div>
                </div>
                <div className="episodes-visited">
                    <div className="episodes-visited__title">
                        <h2>Эпизоды</h2>
                        <p>Все эпизоды</p>
                    </div>
                    <div className="episodes-visited__block">
                        <Episode
                            link="assets/images/rick.png"
                            name={"qwe"}
                            series={"qeqw"}
                            date={"Qeqwe"}
                            key={"qeqw"}
                            isMoreButton={true}
                        /><Episode
                            link="assets/images/rick.png"
                            name={"qwe"}
                            series={"qeqw"}
                            date={"Qeqwe"}
                            key={"qeqw"}
                            isMoreButton={true}
                        /><Episode
                            link="assets/images/rick.png"
                            name={"qwe"}
                            series={"qeqw"}
                            date={"Qeqwe"}
                            key={"qeqw"}
                            isMoreButton={true}
                        /><Episode
                            link="assets/images/rick.png"
                            name={"qwe"}
                            series={"qeqw"}
                            date={"Qeqwe"}
                            key={"qeqw"}
                            isMoreButton={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}