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




