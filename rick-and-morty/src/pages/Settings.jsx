import "../styles/components/Settings.scss";
import {ArrowBack} from "../components/ui/base/ArrowBack";
import {Link} from "react-router-dom";
import {useState} from "react";

export function Settings(props){

    const userName = sessionStorage.getItem("userName");
    const [fullName,setFullName] = useState("");

   async function fetchUserDataByUserName(){
       const response = await fetch(`http://173.249.20.184:7001/api/Account/GetProfile?userName=${userName}`);

      const responseJson =  response.json();
      responseJson
          .then(data => {
                 setFullName(data["data"].firstName + " " + data["data"].lastName);
          })

   }


    fetchUserDataByUserName();


    return(
        < div className="settings container">
            <div className="settings__wrapper">
                <nav>
                    <ArrowBack
                        callback={() => {
                            window.history.back();
                        }}
                    />
                    <h2>Настройки</h2>
                </nav>
                <div className="settings__profile">
                    <div className="settings__profile-info">
                        <img src="assets/images/settings-ava.png" alt="" className="settings__ava"/>
                        <div className="settings__fullName">
                            <h3>{fullName}</h3>
                            <p>{userName}</p>
                        </div>
                    </div>
                    <button className="settings__button">
                        Редактировать
                    </button>
                </div>

                <div className="settings__facade">
                    <h2>Внешний вид</h2>
                    <div className="settings__dark-thema">
                        <img src="assets/images/paint.svg" alt=""/>
                        <span>
                            <h3>Темная тема</h3>
                            <p>Велючена</p>
                        </span>
                        <img src="assets/images/info-arrow.svg" alt=""/>
                    </div>
                </div>

                <div className="settings__about-app">
                    <h2>О ПРИЛОЖЕНИЙ</h2>
                    <p>Зигерионцы помещают Джерри и Рика в симуляцию, чтобы узнать секрет изготовления концен-трирован- ной темной материи.</p>
                </div>
                <div className="settings__app-version">
                    <h2>Версия Приложение</h2>
                    <p>Rick & Morty  v1.0.0</p>
                </div>
            </div>
        </div>
    );
}