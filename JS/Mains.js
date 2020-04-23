
// if you don't have a account you need to create a account but if the account already exist you receive a notification
// that this account is already  created.

window.addEventListener("load", function () {
  function sendData() {
      var form= {


          username: document.getElementById('username').value,
          email: document.getElementById('email').value,
          pwd: document.getElementById('pwd').value,

      };

      const jsonString=JSON.stringify(form);
    var XHR = new XMLHttpRequest();

    //XHR.setRequestHeader('Access-Control-Allow-Origin', )
    // Liez l'objet FormData et l'élément form

    //  define what happen when the request was successfull
    XHR.addEventListener("load", function(event) {
      alert(event.target.responseText);
    });

    // when the operation was not successfull
    XHR.addEventListener("error", function(event) {
      alert('Oups! something was wrong.');
    });

    //configuration  of the request
    XHR.open("POST", "http://localhost:3306/register",true);

    //XHR.withCredentials = true;

    //XHR.setRequestHeader('X-PINGOTHER', 'http://localhost:63342');

    XHR.setRequestHeader('Content-type', 'application/json');

    //XHR.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:63342');
    // Les données envoyées sont ce que l'utilisateur a mis dans le formulaire
    //XHR.responseType=type;

    XHR.send(jsonString);
  }

  // Accédez à l'élément form …
  var form = document.getElementById("myForm");

  // … et prenez en charge l'événement submit.
  form.addEventListener("click", function (event) {
    event.preventDefault();

    sendData();
                    //window.location.href = 'success.html';

  });
});

window.addEventListener("load", function () {


var checkbox=document.getElementById('check');
var password= document.getElementById('pwd');

checkbox.addEventListener("click", function () {

    if(checkbox.checked){
        password.setAttribute("type","text");
    }else{

        password.setAttribute("type","password");
    }
});
});


  document.addEventListener('DOMContentLoaded', () => {

                  // Change the color of the heading when dropdown changes
                  document.querySelector('#color-change').onchange = function() {
                      document.querySelector('#hello').style.color = this.value;
                  };


              });


    /*
var form = document.querySelector('form');
var button=document.
form.addEventListener('submit', function (event) {
   event.preventDefault();
   var data = new FormData(form);
   check(data);
});

function check (data) {
    var request = new XMLHttpRequest();
    request.addEventListener('load', function (event) {
        if (request.status >= 200 && request.status < 300) {
            console.log(request.responseText);
        } else {
            console.warn(request.statusText, request.responseText);
        }
    });
    request.open("POST", "http://localhost:5001/api/register");
    request.send(data);
}

 */



/*

const url = '/register';

let requete = new XMLHttpRequest();

// Get
// requete.open('GET', url);
// requete.responseType = 'json';
// requete.send();

// Post
requete.open('POST', url);
requete.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
requete.responseType = 'json';
requete.send('prenom=John');

requete.onload = function() {
    if (requete.readyState === XMLHttpRequest.DONE) {
        if (requete.status === 200) {
            let reponse = requete.response;
            console.log(reponse);
        }
        else {
            alert('Un problème est intervenu, merci de revenir plus tard.');
        }
    }
}








readystatechange: wenn sich der Status geändert hat
loadstart: Anfrage wurde gestartet.
progress: Daten werden gesendet oder empfangen.
abort: Anfrage wurde abgebrochen (z.B. durch abort())
error: Anfrage ist gescheitert.
load: Anfrage wurde erfolgreich abgeschlossen
timeout: Timeout-Zeit wurde überschritten (obsolet)
loadend: Anfrage wurde beendet (egal ob erfolgreich oder gescheitert)



Le mixin Body définit les méthodes suivantes pour extraire le corps (implémenté autant par la Request que par la Response). Elles retournent toutes une promesse qui sera éventuellement résolue avec le contenu actuel.

    arrayBuffer()
    blob()
    json()
    text()
    formData()



 */






