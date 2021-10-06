import "../styles/components/CharacterProfile.scss";

export function CharacterProfile(props){

    return(
        <div className="container">
            <div className="character-profile">
                <div className="character-profile__person">
                    <div className="character-profile__ava">
                        <div className="character-profile__ava-bg">
                            <div className="character-profile__ava-bg-wrapper">
                                <img src="assets/images/rick.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="character-profile__personal-data">
                        <h1 className="character-profile__fullName">Рик Санчез</h1>
                        <p className="character-profile__status">Живой</p>

                        <p className="character-profile__description">
                            Главный протагонист мультсериала «Рик и Морти». Безумный ученый, чей алкоголизм, безрассудность
                            и социопатия заставляют беспокоиться семью его дочери.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}