// Get Data
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const subject = document.querySelector("#subject");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

// Validate data
function validateForm(){

    clearMessages();
    let errorFlag = false;

    if(nameInput.value.length < 1){
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }

    if(!emailIsValid(email.value)){
        errorNodes[1].innerText = "Invalid email address";
        email.classList.add("error-border");
        errorFlag = true;
    }

    if(message.value.length < 1){
        errorNodes[2].innerText = "Please enter message";
        message.classList.add("error-border");
        errorFlag = true;
    }
    if(!errorFlag){
        success.innerText="Success!";
    }

}

// Clear error / success messages
function clearMessages(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }
    success.innerText= " ";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}

// check if mail is valid
function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}

function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "enquiry@citychoiceoilwell.com",
        Password : "EDCABC5F6FDE15723FA75CD9AC52BE8E0D7F",
        To : 'enquiries@citychoiceoilwell.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name: " + document.getElementById("name").value
            +"<br> Email:" + document.getElementById("email").value
            +"<br> Subject:" + document.getElementById("subject").value
            +"<br> Message:" + document.getElementById("message").value
    }).then(
      message => alert(message)
    );
   
}