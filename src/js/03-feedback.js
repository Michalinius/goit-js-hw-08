import throttle from "lodash.throttle";

const form = document.querySelector("form");

let data = {
    email:"",
    message:""
}
data = JSON.parse(localStorage.getItem("feedback-form-state"));
form.elements.email.value=data.email;
form.elements.message.value=data.message;



form.addEventListener("input",(event) => {

        data.emailemail = form.elements.email.value; 
        data.message = form.elements.message.value; 
    
    
    console.log(data);
    //console.log(event.currentTarget);
    localStorage.setItem("feedback-form-state", JSON.stringify(data));
    console.log(localStorage.getItem("feedback-form-state"));
})

form.addEventListener("submit", (event) => {
    event.preventDefault;
    console.log(data)
    form.reset();
})

