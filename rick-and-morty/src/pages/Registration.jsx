import "../styles/components/registration.scss";
import {ArrowBack} from "../components/ui/base/ArrowBack";
import {RegistrationInput} from "../components/ui/base/RegistrationInput";
import {LoginIcon} from "../components/ui/base/LoginIcon";
import {PasswordIcon} from "../components/ui/base/PasswordIcon";
import {Eye} from "../components/ui/base/Eye-icon";
import {submitHandle,showOrHidePassword} from "../scripts"
import {Button} from "../components/ui/base/Button";
import {useEffect} from "react";
import {
    Route,
    Redirect
} from 'react-router-dom';
import {Settings} from "./Settings";
import {Link} from "react-router-dom";
import {browserHistory} from 'react-router';
export function Registration(...props){



    let userName = "";
    let password = "";
    let firstName = "";
    let lastName = "";
    let patronymic = "";



    const makeRegistration = async () =>{
      const response =  await fetch("http://173.249.20.184:7001/api/Account/Register", {
            method: 'post',
            body: JSON.stringify({
                "userName": userName,
                "password": password,
                "firstName": firstName,
                "lastName": lastName,
                "patronymic": patronymic
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
            }
      })

    }

    useEffect(() => {
        document.getElementById("registration__form").addEventListener("submit",event => event.preventDefault());
    },[]);
    return(
        <div className="registration">
            <div className="registration__wrapper">
                    <div className="registration__arrow-back-wrapper">
                        <ArrowBack
                            callback={() => {
                                window.history.back();
                            }}
                        />
                    </div>
                <div className="registration__title-wrapper">
                    <h1 className="registration__title">?????????????? ??????????????</h1>
                </div>
                <form className="registration__form" id="registration__form" >
                    <div action="" className="registration__block registration__block_personal-data">
                        <RegistrationInput labelText="??????" id="name" placeholder="??????" onChange={value => firstName = value}/>
                        <RegistrationInput labelText="??????????????" id="surname" placeholder="??????????????" onChange={value => lastName = value}/>
                        <RegistrationInput labelText="????????????????" id="patronymic" placeholder="????????????????" onChange={value => patronymic = value}/>
                    </div>
                    <div action="" className="registration__block registration__block_authorization-data">
                        <RegistrationInput labelText="??????????" id="login" placeholder="??????????" icon={<LoginIcon/>} onChange={value => userName = value}/>
                        <RegistrationInput labelText="????????????" id="password" placeholder="????????????" icon={<PasswordIcon/>} eyeIcon={<Eye callback={() => {
                            showOrHidePassword("#password");
                        }}/>}
                            onChange={value => password = value}
                        />
                    </div>
                    <Button text="??????????????" callback={() => {
                        makeRegistration()
                    }}/>
                </form>
            </div>
        </div>
    );
}