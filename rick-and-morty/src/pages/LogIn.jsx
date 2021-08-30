import "../styles/components/LogIn.scss";
import {Button} from "../components/ui/base/Button";
import {PasswordIcon} from "../components/ui/base/PasswordIcon";
import {LoginIcon} from "../components/ui/base/LoginIcon";
import {Eye} from "../components/ui/base/Eye-icon";
import {RegistrationInput} from "../components/ui/base/RegistrationInput";

export function LogIn(props){

    const submitHandle = () => {
        let $button = document.querySelector("#form")
        $button.addEventListener("submit",event => {
            event.preventDefault();
        })
    }

    const showOrHidePassword = (elementId) => {
        const element = document.querySelector(elementId) ;
        element.type === "password"?element.type = "text":element.type = "password";
    }

    return(
        <div className="log-in">
            <div className="log-in__img-wrapper">
                <img src="assets/log-in-img.png" alt="" className="log-in__img"/>
            </div>
            <div className="log-in__form-wrapper">
                <form action="" id="form" className="log-in__form">
                    <RegistrationInput labelText="Логин" icon={<LoginIcon/>} id="login" placeholder="Логин"/>
                    <RegistrationInput labelText="Пароль" icon={<PasswordIcon/>} eyeIcon={<Eye callback={() => {showOrHidePassword("#password");}}/>} id="password" placeholder="Пароль"/>


                    <span>
                        <Button
                            callback={() => {
                            submitHandle();
                            }}
                                text="Войти"
                        >

                        </Button>
                    </span>
                </form>
                <div className="log-in__offer"><p>У вас еще нет аккаунта? <a href="">Создать</a></p></div>
            </div>

        </div>
    );

}