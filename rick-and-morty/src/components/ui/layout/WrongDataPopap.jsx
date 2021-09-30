import "../../../styles/components/WrongDataPopap.scss"

export function WrongDataPopap(props){

    const handleClick = () => {
        props.toggle();
    }


    return (
        <div id="wrap">
            <div className="popap-wrapper" id="popap__wrapper">
                <div className="popap">
                    <h2>Ошибка</h2>
                    <p>Введен неверный логин или пароль</p>
                    <button className="popap__button" id="popap__button" onClick={handleClick}>
                        Ok
                    </button>
                </div>
            </div>
        </div>
    );
}