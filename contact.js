function response(){
    
let name=document.getElementById("name").value
let mail=document.getElementById("mail").value
let service=document.getElementById("subject").value
let message=document.getElementById("message").value


if(name!="" && mail !="" && subject!="" && message!=""){

localStorage.setItem("UserName",name)
localStorage.setItem("UserEmail",mail)
localStorage.setItem("subject",subject)
localStorage.setItem("Message",message)

Swal.fire({
  title: "Thanks For Submiting Your Feedback..!",
  text: "Your Feedback Have Been Saved In Your LocalStorage",
  icon: "success"
});

}
else{
Swal.fire({
  icon: "error",
  title: "Empty Inputs Feilds ...",
  text: "Please Fillout All Input Feilds!",
  footer: "<a href=\"feedback.html\">Why do I have this issue?</a>"
});
}


}