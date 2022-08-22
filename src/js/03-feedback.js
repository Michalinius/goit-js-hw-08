import throttle from "lodash.throttle";

const form = document.querySelector("form");
const button =document.querySelector("button")

let data = {
    email:"",
    message:""
}

data = JSON.parse(localStorage.getItem("feedback-form-state"));
if (data !== null) {
form.elements.email.value=data.email;
form.elements.message.value=data.message;}
else {data = {email:"", message:""}}


form.addEventListener("input",throttle((event) => {

        data.email = form.elements.email.value; 
        data.message = form.elements.message.value; 
    
    localStorage.setItem("feedback-form-state", JSON.stringify(data));
},500))

form.addEventListener("submit", (event) => {
  event.preventDefault();
    console.log(data);
    localStorage.clear();
    form.reset();
})


