import "../../../styles/components/arrow-back.scss"

export function ArrowBack(props){

    return(
        <div className="arrow-back-wrapper" onClick={() => {props.callback()}}>
            <svg className="arrow-back" width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={props.onClick}>
                <path d="M1.5 9H22.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 1.5L1.5 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 16.5L1.5 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>

    );
}