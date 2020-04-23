
 async function addcomment(data){
        //let url = "http://lvh.me:5001/api/addProjekt";
        let url = "http://localhost:3306/menu";
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

 async function allComment(){
        //let url = "http://lvh.me:5001/api/addProjekt";
        let url = "http://localhost:3306/allcomment";
        //let url = "https://5cc5c462f24a0f0014cd1f2d.mockapi.io/api/v1/Post";
        let response = await fetch(url);

        let comment = await response.json();
        //alert(result.message);
             return comment;

 }



 const send = document.getElementById("send");

                    // … et prenez en charge l'événement submit.
      send.addEventListener("click", function (event) {
          event.preventDefault();

          if (document.getElementById('comment').value.trim() ==="") {

              alert("please field your text area")
          }

          else if (sessionStorage.getItem('status')) {


                  addcomment({
                      comment: document.getElementById('comment').value,

                      username: localStorage.getItem('username')

                  }).then((response) => {
                      console.log(response);

                      return response;

                  }).then((data) => {
                      console.log("data", data)

                  }).catch((error) => {
                      console.log("error", error)

                  });


                var newMessage=document.createElement("div");
                  newMessage.innerHTML='<li>'+localStorage.getItem('username')+ ": "+document.getElementById('comment').value +'</li';
                  document.getElementById('messages').append(newMessage);
                  alert("message was successfull added");
                  document.getElementById('comment').value = ""
              }


          else {

              alert("your are not LogIn please login before you sent your comment thank you!");
              document.getElementById('comment').value=""

          }

      });



      window.addEventListener('load',function(){
          if (sessionStorage.getItem('status')) {


              allComment().then((response) => {
                  console.log(response);
                  for( var i = 0; i < response.length; i++){
                      var user=response[i].username;
                      var chat=response[i].commentary;

                      console.log(user);
                      //console.log(chat);

                      var newMessages=document.createElement("div");
                  newMessages.innerHTML='<li>'+'<b>'+user+'</b>'+ ":" +chat+ '<br/>'+'</li';

                  document.getElementById('messages').append(newMessages);
                  document.getElementById('messages').append("  ");
                      console.log(response[i]);


                  }

            //  }).then((data) => {

             //     console.log('data', data)
              }).catch((error) => {
                  console.log('error', error)
              })
          }
      });


      var log=document.getElementById('logo');
 log.addEventListener("click", function (event) {
     event.preventDefault();

     if(sessionStorage.getItem('status')){

         alert("you are already connected");
         window.location.reload(true);

     }
     else{
         window.location.href="login.html"

     }

 });


 var suchen=document.getElementById('suchen');
   var search=document.getElementById('searche');


window.addEventListener('load',function(){
     suchen.addEventListener('click',function(e){
                    e.preventDefault();
            if(!sessionStorage.getItem('status')) {


                var filter = search.value.toLowerCase();

                allComment().then((response) => {
                    console.log(response);
                    for (var i = 0; i < response.length; i++) {
                        var user = response[i].username;
                        var chat = response[i].commentary.toLowerCase();
                        console.log(response[i].commentary);


                        if (chat.indexOf(filter) > -1) {
                            var newMessages = document.createElement("div");
                            newMessages.innerHTML = '<li>' + '<b>' + user + '</b>' + ":" + chat + '<br/>' + '</li';
                            document.getElementById('messages').append(newMessages);


                        }


                    }
                    //  }).then((data) => {

                    //     console.log('data', data)
                }).catch((error) => {
                    console.log('error', error)
                })
            }
      });
      });










/*


var url= fetch('http://localhost:5001/allcomment');


url.then((response)=>{
    return(response)

});

let resp=allComment().then((response) => {
        console.log(response);
        for (var i = 0; i < response.length; i++) {
            var user = response[i].username;
            var chat = response[i].commentary;

            return chat;

        }
    }).catch((error) => {
        console.log('error', error)
    });

console.log(resp);

window.addEventListener('load',function(){
     suchen.addEventListener('click',function(e){
                    e.preventDefault();

                  var filter = search.value.toLowerCase();

                  allComment().then((response) => {
                      console.log(response);
                      for (var i = 0; i < response.length; i++) {
                          var user = response[i].username;
                          var chat = response[i].commentary.toLowerCase();
                          console.log(response[i].commentary);


                          if(chat.indexOf(filter)>-1){
                              var newMessages = document.createElement("div");
                              newMessages.innerHTML = '<li>' + '<b>' + user + '</b>' + ":" + chat + '<br/>' + '</li';
                              document.getElementById('messages').append(newMessages);


                          }



                      }
                      //  }).then((data) => {

                      //     console.log('data', data)
                  }).catch((error) => {
                      console.log('error', error)
                  })

      });
      });
 */