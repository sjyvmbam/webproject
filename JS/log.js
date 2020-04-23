 /*
var username = document.getElementById('username').value;
var pwd = document.getElementById('pwd').value;


       const form = document.getElementById("myForm1");

       // … et prenez en charge l'événement submit.
       form.addEventListener("click", function (event) {

           event.preventDefault();

               fetch('http://localhost:5001/login', {
                    method: 'POST',
                    //mode:'no-cors',
                    headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'},


                    body: JSON.stringify({
                      username: document.getElementById('username').value,

                      pwd: document.getElementById('pwd').value,
                         })

                          }).then((response) => {
                               let resp = response;
                               let result= response.message;
                               console.log(result.message);
                               //var result=resp.message;
                               console.log(resp);
                               //let username = resp.username;
                               //console.log(username);

                               if (result.message==="login done"){
                                    let data = {"username": document.getElementById('username').value};
                                     console.log(data);
                                      localStorage.setItem("username",document.getElementById('username').value);
                                        if (localStorage){
                                            alert("the connection was successfull"+ " " +localStorage.getItem('username'));
                                            window.location.href = "success.html";

                                        }

                                  }


                                   // console.log(resp);
                                  // console.log(idUser);


                                return response.json();

                            }).then((data) =>

                            console.log(data))

                                .catch(error => console.log('ERROR', error));


                    });

*/



 // this fuction is use ta create a login when the user has a account

 async function postToBackend(data){
        //let url = "http://lvh.me:5001/api/addProjekt";
        let url = "http://localhost:3306/login";
        //let url = "https://5cc5c462f24a0f0014cd1f2d.mockapi.io/api/v1/Post";
        let response = await fetch(url, {
        method: 'post',
        headers: {'Content-Type': 'application/json'}, //'application/json;charset=utf-8'
        body: JSON.stringify(data)
          });

        let result = await response.json();
        //alert(result.message);
        return result;

 }


const form = document.getElementById("myForm1");

                    // … et prenez en charge l'événement submit.
      form.addEventListener("click", function (event) {
             event.preventDefault();

            postToBackend({username: document.getElementById('username').value,

                                pwd: document.getElementById('pwd').value,})

                    .then((response) => {

                        //return response;
                         let resp = response;
                                 var resulte=resp.message;
                                 //console.log(resulte);
                               //console.log(resp);
                               //let username = resp.username;
                               //console.log(username);

                                  if (resulte==="login done"){
                                      sessionStorage.setItem('status','loggedIn') ;
                                       let data = {"username": document.getElementById('username').value};
                                       console.log(data);
                                       localStorage.setItem("username",document.getElementById('username').value);

                                        if (localStorage) {
                                            if (sessionStorage) {

                                                alert("you are"+ " "+ sessionStorage.getItem('status'));
                                                alert("the connection was successfull" + "  " + localStorage.getItem('username'));
                                                window.location.href = "success.html";
                                            }


                                        }



                                 }else{
                                      alert("your username or password ist wrong please try again");

                                  }

                                return response;

                            }).then((data) =>

                            console.log(data))

                                .catch(error => console.log('ERROR', error));


                    });



