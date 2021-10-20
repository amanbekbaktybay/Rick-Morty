export const submitHandle = () => {
    let $button = document.querySelector("#form")
    $button.addEventListener("submit",event => {
        event.preventDefault();
    })

}

export const showOrHidePassword = (elementId) => {
    const element = document.querySelector(elementId) ;
    element.type === "password"?element.type = "text":element.type = "password";
}

export const changeLayoutCharacters = (isLayout) => {
    const characterImg = document.getElementsByClassName("character__img");
    const character = document.getElementsByClassName("character");
    const characterWrapper = document.getElementsByClassName("character__wrapper");
    const info = document.getElementsByClassName("character__info");
    const characterFullName = document.getElementsByClassName("character__full-name");

    for (let i = 0; i < characterImg.length; i++) {
        if (isLayout){
            characterImg[i].classList.add("two-in-line");
            characterWrapper[i].classList.add("fl-col");
            character[i].classList.add("hl-width");
            info[i].classList.add("align-center");
            characterFullName[i].classList.add("txt-stl-character-status")
        }else{
            characterImg[i].classList.remove("two-in-line");
            characterWrapper[i].classList.remove("fl-col");
            character[i].classList.remove("hl-width");
            info[i].classList.remove("align-center");
            characterFullName[i].classList.remove("txt-stl-character-status")
        }
    }
}


export function sortArray(arr){

    let bool = true;

    while (bool){
        bool = false;

        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i].props.series > arr[i + 1].props.series){
                [arr[i],arr[i + 1]] = [arr[i + 1],arr[i]];
                bool = true;
            }
        }
    }
}

