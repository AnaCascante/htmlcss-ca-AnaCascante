

const userName = document.querySelector("name")
const email =  document.querySelector("email")
const message = document.querySelector("message")

userName.onsubmit (){
    if(userName.value == ""){
        message.innerHTML ="we are missing your name";
    } else { 
        message.innerHTML = ""; 
        return true; 
    }
}

email.onsubmit (){
    if(userName.value == ""){
        message.innerHTML ="we are missing your name";
    } else { 
        message.innerHTML = ""; 
        return true; 
    }
}

message.onsubmit (){
    if(userName.value == ""){
        message.innerHTML ="we are missing your name";
    } else { 
        message.innerHTML = ""; 
        return true; 
    }
}