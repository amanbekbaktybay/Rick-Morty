import "../../../styles/components/arrow-more.scss"

export function ArrowMore(props){

    return(
        <div className="arrow-more-wrapper" onClick={props.callback}>
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9L5 5L1 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>

    );
}