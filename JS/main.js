window.addEventListener("load", function () {
  function login() {
      var log= {


          username: document.getElementById('username').value,
          pwd: document.getElementById('pwd').value,

      };

      const jsonfy=JSON.stringify(log);
    var XHR = new XMLHttpRequest();

    //XHR.setRequestHeader('Access-Control-Allow-Origin', )
    // Liez l'objet FormData et l'élément form

    // Définissez ce qui se passe si la soumission s'est opérée avec succès
    XHR.addEventListener("load", function(event) {
      alert(event.target.responseText);
    });

    // Definissez ce qui se passe en cas d'erreur
    XHR.addEventListener("error", function(event) {
      alert('Oups! Quelque chose s\'est mal passé.');
    });

    // Configurez la requête
    XHR.open("POST", "http://localhost:3306/login",true);

    //XHR.withCredentials = true;

    //XHR.setRequestHeader('X-PINGOTHER', 'http://localhost:63342');

    XHR.setRequestHeader('Content-type', 'application/json');

    //XHR.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:63342');
    // Les données envoyées sont ce que l'utilisateur a mis dans le formulaire
    //XHR.responseType=type;

    XHR.send(jsonfy);
  }

  // Accédez à l'élément form …
  var form = document.getElementById("myForm1");

  // … et prenez en charge l'événement submit.
  form.addEventListener("click", function (event) {
    event.preventDefault();
    login();

  });
});

















/*

//let url = "http://localhost:5001/api/allUsers";
function submit_by_id() {
var username = document.getElementById("username").value;
var email = document.getElementById("email").value;
var pwd = document.getElementById("pwd").value;

if (validation()) // Calling validation function
{
document.getElementById("myForm").submit(); //form submission
alert(" Name : " + username + " n Email : " + email + " n Form Id : " + document.getElementById("form_id").getAttribute("id") + "nn Form Submitted Successfully......");
}
}







// Name and Email validation Function.
function validation() {

var username = document.getElementById("username").value;
var email = document.getElementById("email").value;
var pwd=document.getElementById("pwd").value;
var emailReg = /^([w -.]+@([w-]+.)+[w-]{2,4})?$/;
if (username === '' || pwd===''|| email === '') {
alert("Please fill all fields...!!!!!!");
return false;
} else if (!(email).match(emailReg)) {
alert("Invalid Email...!!!!!!");
return false;
} else {
return true;
}
}



*/


/*
function sendJSON() {

    let result = document.querySelector(".result");
    let username = document.querySelector('#username');
    let email = document.querySelector("#email");
    let pwd = document.querySelector("#pwd");
    // Creating a XHR object
    let xhr = new XMLHttpRequest();
    let url = "api/register";

    // open a connection
    xhr.open("POST", url, true);

    // Set the request header i.e. which type of content you are sending
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // Create a state change callback
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {

            // Print received data from server
            result.innerHTML = this.responseText;

        }
    };

    // Converting JSON data to string
    var data = JSON.stringify({"name": username.value, "email": email.value,"pwd":pwd.value});

    // Sending data with the request
    xhr.send(data);


}

var username=document.getElementById("username").value;
var email=document.getElementById("email").value;
var pwd=document.getElementById("pwd").value;
var button=document.getElementById("mode");
var emailReg = /^([w -.]+@([w-]+.)+[w-]{2,4})?$/;

button.addEventListener("click",()=>{
    if(username===''|| email===''||pwd===''){
        alert("please full all the field");

    }else if(!(email).match(emailReg)){

        alert("Invalid Email...!!!!!!");
    }

    else{

         sendJSON()
    }


});
 */




