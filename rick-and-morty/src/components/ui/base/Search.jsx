import '../../../styles/components/search.scss'
export function Search(props){
    return(
        <div className="wrapper">
            <div className="search" >
                        <img src="assets/search-icon.svg" alt="" className="search__search-icon"/>
                        <input className="search__input" type="text" placeholder={props.placeHolder} onChange={event => {props.callback(event.target.value)}}/>
                        <img src="assets/filter-icon.svg" alt="" className="search_filter-icon"/>
            </div>
        </div>
    );
}