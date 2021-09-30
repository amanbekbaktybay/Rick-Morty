import "../styles/components/authorization.scss";
import {Button} from "../components/ui/base/Button";
import {PasswordIcon} from "../components/ui/base/PasswordIcon";
import {LoginIcon} from "../components/ui/base/LoginIcon";
import {Eye} from "../components/ui/base/Eye-icon";
import {RegistrationInput} from "../components/ui/base/RegistrationInput";
import {submitHandle, showOrHidePassword, closeOrOpenPopup} from "../scripts"
import {Link} from "react-router-dom";
import {Redirect, useHistory} from "react-router";
import {WrongDataPopap} from "../components/ui/layout/WrongDataPopap";
import {useEffect, useState} from "react";
export function LogIn(props){

    let userName = "";
    let password = "";

    const [isOpen, setIsOpen] = useState(false);

    const makeAuthorisation = async () =>{
        if (userName && password){
            const response =  await fetch("http://173.249.20.184:7001/api/Account/Login", {
                method: 'post',
                body: JSON.stringify({
                    "userName": userName,
                    "password": password,
                }),
                headers: {
                    'content-type': 'application/json'
                }
            }).then((response) => {
                if (response.ok) {
                    console.log("successfully");
                    sessionStorage.setItem("isLoggedIn", "true");
                    sessionStorage.setItem("userName", userName);
                    window.location.assign("/settings");
                }else {
                    setIsOpen(true);
                }



            })
        }
        else {
        }
        setIsOpen(true);
    }



    return(
        <div className="log-in">

            {isOpen?<WrongDataPopap toggle={() => { setIsOpen(false)}}/>:null}

            <div className="log-in__img-wrapper">
                <img src="assets/images/log-in-img.png" alt="" className="log-in__img"/>
            </div>
            <div className="log-in__form-wrapper">
                <form action="" id="form" className="log-in__form">
                    <RegistrationInput labelText="Логин" icon={<LoginIcon/>} id="login" placeholder="Логин" onChange={value => userName = value} />
                    <RegistrationInput labelText="Пароль" icon={<PasswordIcon/>} eyeIcon={<Eye callback={() => {showOrHidePassword("#password");}}/>} id="password" placeholder="Пароль" onChange={value => password = value}/>


                    <span>
                        <Link to="/settings">
                        <Button
                            callback={() => {
                            makeAuthorisation().then();
                            }}
                            text="Войти"
                        />
                        </Link>
                    </span>
                </form>
                <div className="log-in__offer"><p>У вас еще нет аккаунта? <Link to="/registration">Создать</Link></p></div>
            </div>

        </div>
    );

}