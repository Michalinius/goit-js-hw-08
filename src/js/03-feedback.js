import throttle from "lodash.throttle";

const form = document.querySelector("form");

let data = {
    email:"",
    message:""
}
try {
test = JSON.parse(localStorage.getItem("feedback-form-state"));
form.elements.email.value=data.email;
form.elements.message.value=data.message;
data = test;}
catch {console.log("data is null")}


form.addEventListener("input",(event) => {

        data.email = form.elements.email.value; 
        data.message = form.elements.message.value; 
    
    
    console.log(data);
    //console.log(event.currentTarget);
    localStorage.setItem("feedback-form-state", JSON.stringify(data));
    console.log(localStorage.getItem("feedback-form-state"));
})

form.addEventListener("submit", (event) => {
    console.log(data)
    form.reset();
    event.preventDefault;
})

