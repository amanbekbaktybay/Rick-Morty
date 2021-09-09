import "../styles/components/authorization.scss";
import {Button} from "../components/ui/base/Button";
import {PasswordIcon} from "../components/ui/base/PasswordIcon";
import {LoginIcon} from "../components/ui/base/LoginIcon";
import {Eye} from "../components/ui/base/Eye-icon";
import {RegistrationInput} from "../components/ui/base/RegistrationInput";
import {submitHandle,showOrHidePassword} from "../scripts"
import {Link} from "react-router-dom";
export function LogIn(props){



    return(
        <div className="log-in container">
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
                <div className="log-in__offer"><p>У вас еще нет аккаунта? <Link to="/registration"><a href="">Создать</a></Link></p></div>
            </div>

        </div>
    );

}