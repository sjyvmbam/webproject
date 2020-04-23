let a = document.querySelector('a');
let button = document.querySelector('button');

a.addEventListener('click', (e) => {
  if(confirm('Etes-vous sûr ?')) {
    location.href = "https://believemy.com";
  }
});

button.addEventListener('mouseover', () => {
  document.body.style.backgroundColor = 'orange';
});

function backgroundWhite() {
  document.body.style.backgroundColor = 'white';
}

button.addEventListener('mouseout', backgroundWhite);
button.addEventListener('mouseout', () => {
  document.body.style.fontFamily = 'arial';
});

button.removeEventListener('mouseout', backgroundWhite);



let article = document.querySelector('article');
let h1      = document.querySelector('h1');

article.addEventListener('click', () => {
  alert('article cliqué');
});

h1.addEventListener('click', (e) => {
  alert('titre cliqué');
  e.stopPropagation(); // On stop la propagation
});



let btn = document.querySelector('button');
let secondes = 10;
let interval;

btn.addEventListener('click', start);

function start() {
  interval = setInterval(decompte, 1000);
}

function stop() {
  clearInterval(interval);
  document.body.innerHTML += "Stop !";
}

function decompte() {

  secondes--;
  if(secondes == 0) {
    stop();
  }
  else {
    document.body.innerHTML += secondes + '<br>';
  }

}

let btn       = document.querySelector('button');
let div       = document.querySelector('div');
let hidden    = true;

// Cacher le message
div.style.display = "none";

// Détecter le clic
btn.addEventListener('click', () => {

  if(hidden) {
    btn.textContent = "Cacher";
    div.style.display = "block";
    hidden = false;
  }
  else {
    btn.textContent = "Afficher";
    div.style.display = "none";
    hidden = true;
  }

});