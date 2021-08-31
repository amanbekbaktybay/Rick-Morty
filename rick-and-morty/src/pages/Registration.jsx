import "../styles/components/registration.scss";
import {ArrowBack} from "../components/ui/base/ArrowBack";
import {RegistrationInput} from "../components/ui/base/RegistrationInput";
import {LoginIcon} from "../components/ui/base/LoginIcon";
import {PasswordIcon} from "../components/ui/base/PasswordIcon";
import {Eye} from "../components/ui/base/Eye-icon";
import {submitHandle,showOrHidePassword} from "../scripts"
import {Button} from "../components/ui/base/Button";

export function Registration(props){

    return(
        <div className="registration container">
            <div className="registration__wrapper">
                    <div className="registration__arrow-back-wrapper">
                        <ArrowBack/>
                    </div>
                <form className="registration__form">
                    <div className="registration__title-wrapper">
                        <h1 className="registration__title">Создать аккаунт</h1>
                    </div>
                    <div action="" className="registration__block registration__block_personal-data">
                        <RegistrationInput labelText="Имя" id="name" placeholder="Имя"/>
                        <RegistrationInput labelText="Фамилия" id="surname" placeholder="Фамилия"/>
                        <RegistrationInput labelText="Отчество" id="patronymic" placeholder="Отчество"/>
                    </div>
                    <div action="" className="registration__block registration__block_authorization-data">
                        <RegistrationInput labelText="Логин" id="login" placeholder="Логин" icon={<LoginIcon/>}/>
                        <RegistrationInput labelText="Пароль" id="password" placeholder="Пароль" icon={<PasswordIcon/>} eyeIcon={<Eye callback={() => {
                            showOrHidePassword("#password");
                        }}/>}/>
                    </div>
                    <Button text="Создать"></Button>
                </form>
            </div>
        </div>
    );
}