// public/chat.js
$(document).ready(function(){




var socket = io.connect("http://localhost:5000");

socket.on('connect',function(){

  socket.send('User has connected!');
  socket.send('that is mein userName');

});

socket.addEventListener('message',function(msg ,msg1){
  document.getElementById('messages').append(msg +    +msg1);
  console.log('Received message');

});


document.getElementById('send').addEventListener('click',function(event){
  event.preventDefault();
  socket.send(document.getElementById('userName').value);
  socket.send(document.getElementById('message').value);
  document.getElementById('message').value="";
  document.getElementById('userName').value="";

});



});
























/*

var message = document.getElementById("message");
var userName = document.getElementById("userName");
var sendBtn = document.getElementById("send");
var messages = document.getElementById("messages");
// add another dom reference
var typing = document.getElementById("typing");

sendBtn.addEventListener("click", function() {
  socket.emit("chat", {
    message: message.value,
    userName: userName.value
  });
});

socket.on("chat", function(data) {
  messages.innerHTML +=
    "<p><strong>" + data.userName + ": </strong>" + data.message + "</p>";
  // clear the typing indicator when we receive a message
  typing.innerHTML = "";
});

// emit a “typing” event when we start typing
message.addEventListener("keypress", function() {
  socket.emit("typing", userName.value);
});

// when we receive a typing event, show that a user is typing
socket.on("typing", function(data) {
  typing.innerHTML = "<p><em>" + data + " is typing</em></p>";
});
 */