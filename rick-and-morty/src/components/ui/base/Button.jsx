import "../../../styles/components/Button.scss";

export function Button(props) {

    return(
        <div className="button">
            <button className="button__button"  onClick={props.callback}>{props.text}</button>
        </div>
    );
}