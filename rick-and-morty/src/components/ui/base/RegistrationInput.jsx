import "../../../styles/components/RegistrationInput.scss";
import {LoginIcon} from "./LoginIcon";

export function RegistrationInput(props){


    let icon = props.icon;

    let eyeIcon = props.eyeIcon

    return(

        <div className="registration-input">
            <label className="registration-input__label" htmlFor={props.id}>{props.labelText}</label>
            <span className="registration-input__wrapper">
                        {icon}
                        <input type="text" id={props.id} className="registration-input__input" placeholder={props.placeholder}/>
                        {eyeIcon}
            </span>
        </div>
    );
}