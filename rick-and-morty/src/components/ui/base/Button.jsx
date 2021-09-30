import "../../../styles/components/Button.scss";

export function Button(props) {

    const handleClick = (e) => {
        e.preventDefault();
    }


    return(
        <div className="button">
            <button className="button__button" id="button__jsx"  onClick={(event) => {
                handleClick(event)
                props.callback();
            }}
            type="submit"
            >{props.text}</button>
        </div>
    );
}