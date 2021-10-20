import '../../../styles/components/navigation.scss'
import {Link} from "react-router-dom";
import {React} from "react";


export function Navigation(props){

    let charactersColor = "#5B6975";
    let locationsColor = "#5B6975";
    let episodesColor = "#5B6975";
    let settingsColor = "#5B6975";
    switch (props.iconNumber){
        case 1: charactersColor = "#43D049";break;
        case 2: locationsColor = "#43D049";break;
        case 3: episodesColor = "#43D049";break;
        case 4: settingsColor = "#43D049";break;
    }
    return(

        <div className="wrapper">
            <div className="navigation">
                <div className="navigation__wrapper">
                    <Link to="/characters">
                        <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.46591 0C4.45278 0 0.375 4.03793 0.375 8.99984L0.426516 16.9997C0.673991 18.6907 2.13359 19.9996 3.91035 19.9996C5.09621 19.9996 6.0053 19.5826 6.60934 18.8257C6.98499 19.199 7.43162 19.4951 7.92346 19.6966C8.4153 19.8982 8.9426 20.0013 9.47492 20C10.0072 19.9987 10.534 19.893 11.0248 19.689C11.5157 19.4851 11.9608 19.1869 12.3346 18.8117C12.9417 19.5736 13.8538 19.9996 15.0215 19.9996C16.971 19.9996 18.5568 18.4297 18.5568 16.4997V8.99984C18.5568 4.03793 14.479 0 9.46591 0ZM6.29839 10.9661C7.52569 10.9661 8.52062 9.97122 8.52062 8.74392C8.52062 7.51662 7.52569 6.5217 6.29839 6.5217C5.07109 6.5217 4.07617 7.51662 4.07617 8.74392C4.07617 9.97122 5.07109 10.9661 6.29839 10.9661ZM15.1871 8.74392C15.1871 9.97122 14.1922 10.9661 12.9649 10.9661C11.7376 10.9661 10.7427 9.97122 10.7427 8.74392C10.7427 7.51662 11.7376 6.5217 12.9649 6.5217C14.1922 6.5217 15.1871 7.51662 15.1871 8.74392Z" fill={charactersColor}/>
                        </svg>

                        <h5 className="navigation__title selected" id="characters-title" style={{color:`${charactersColor}`}}>Персонажи</h5>
                    </Link>
                </div>
                <div className="navigation__wrapper">
                    <Link to="/location">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.1708 10.0302C22.9916 12.2938 24.5604 14.2948 24.0189 15.2315C23.1636 16.7097 17.3691 14.9689 11.0768 11.3431C4.78447 7.71733 0.376191 3.57978 1.23101 2.10205C1.76576 1.17823 4.2296 1.51173 7.53868 2.77719" stroke={locationsColor} strokeWidth="2" strokeMiterlimit="10"/>
                            <path d="M12.6252 16.3331C16.8593 16.3331 20.2918 12.9007 20.2918 8.66656C20.2918 4.43244 16.8593 1 12.6252 1C8.39107 1 4.95863 4.43244 4.95863 8.66656C4.95863 12.9007 8.39107 16.3331 12.6252 16.3331Z" stroke={locationsColor} strokeWidth="2" strokeMiterlimit="10"/>
                        </svg>
                        <h5 className="navigation__title" id="location-title" style={{color:`${locationsColor}`}}>Локации</h5>
                    </Link>
                </div>
                <div className="navigation__wrapper">
                    <Link to="/episodes">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="navigation__episodes navigation-icon">
                            <path d="M18.075 5.5H3.675C2.68089 5.5 1.875 6.30589 1.875 7.3V17.2C1.875 18.1941 2.68089 19 3.675 19H18.075C19.0691 19 19.875 18.1941 19.875 17.2V7.3C19.875 6.30589 19.0691 5.5 18.075 5.5Z" stroke={episodesColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M15.3755 1L10.8755 5.5L6.3755 1" stroke={episodesColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                        <h5 className="navigation__title" style={{color:`${episodesColor}`}}>Эпизоды</h5>
                    </Link>
                </div>
                <div className="navigation__wrapper">
                    <Link to="/settings">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.5342 10.0907C15.5886 11.1452 15.5886 12.8547 14.5342 13.9091C13.4798 14.9635 11.7702 14.9635 10.7158 13.9091C9.6614 12.8547 9.6614 11.1452 10.7158 10.0907C11.7702 9.03632 13.4798 9.03632 14.5342 10.0907" stroke={settingsColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M5.87499 12C5.87499 12.297 5.90199 12.594 5.93799 12.882L4.34999 14.124C3.99799 14.4 3.90199 14.893 4.12599 15.28L5.53799 17.723C5.76099 18.11 6.23499 18.273 6.64999 18.107L8.07199 17.536C8.35299 17.423 8.66599 17.468 8.91799 17.635C9.13799 17.781 9.36599 17.915 9.60199 18.035C9.87199 18.172 10.068 18.417 10.111 18.717L10.328 20.23C10.391 20.672 10.77 21 11.216 21H14.033C14.479 21 14.858 20.672 14.921 20.23L15.138 18.718C15.181 18.418 15.379 18.171 15.65 18.035C15.885 17.917 16.112 17.784 16.331 17.639C16.585 17.471 16.899 17.423 17.181 17.537L18.6 18.107C19.014 18.273 19.488 18.11 19.712 17.723L21.124 15.28C21.348 14.893 21.252 14.399 20.9 14.124L19.312 12.882C19.348 12.594 19.375 12.297 19.375 12C19.375 11.703 19.348 11.406 19.312 11.118L20.9 9.876C21.252 9.6 21.348 9.107 21.124 8.72L19.712 6.277C19.489 5.89 19.015 5.727 18.6 5.893L17.181 6.463C16.899 6.576 16.585 6.529 16.331 6.361C16.112 6.216 15.885 6.083 15.65 5.965C15.379 5.829 15.181 5.582 15.138 5.282L14.922 3.77C14.859 3.328 14.48 3 14.034 3H11.217C10.771 3 10.392 3.328 10.329 3.77L10.111 5.284C10.068 5.583 9.87099 5.829 9.60199 5.966C9.36599 6.086 9.13799 6.221 8.91799 6.366C8.66499 6.532 8.35199 6.577 8.07099 6.464L6.64999 5.893C6.23499 5.727 5.76099 5.89 5.53799 6.277L4.12599 8.72C3.90199 9.107 3.99799 9.601 4.34999 9.876L5.93799 11.118C5.90199 11.406 5.87499 11.703 5.87499 12V12Z" stroke={settingsColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <h5 className="navigation__title" style={{color:`${settingsColor}`}}>Настройки</h5>
                    </Link>
                </div>
            </div>


        </div>



    );
}