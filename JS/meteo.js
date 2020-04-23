let villeChoisie = "Duisburg";
recevoirTemperature(villeChoisie);

let changerDeVille = document.querySelector('#changer');
changerDeVille.addEventListener('click', () => {
    villeChoisie = prompt('Quelle ville souhaitez-vous voir ?');
    recevoirTemperature(villeChoisie);
});

let menu   = document.createElement('div');

menu.innerHTML = "<a href='../templates/index.html'>Homepage</a> / <a href='#'>Another page</a> /  <a href='../templates/about.html'>Lebenslauf</a> / <a href=\"#\">Help </a>";
menu.style.padding = "15px";
menu.style.position = "fixed";
menu.style.top="0px";
menu.style.left="0px";
menu.style.border="1px solid black";
menu.style.background="black";
menu.style.width="100%";
menu.style.zIndex="1";

document.body.append(menu);

function recevoirTemperature(ville) {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric';
    let requete = new XMLHttpRequest(); // Nous créons un objet qui nous permettra de faire des requêtes
    requete.open('GET', url); // Nous récupérons juste des données
    requete.responseType = 'json'; // Nous attendons du JSON
    requete.send(); // Nous envoyons notre requête

    // Dès qu'on reçoit une réponse, cette fonction est executée
    requete.onload = function() {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200) {
                let reponse = requete.response;
                // console.log(reponse);
                let temperature = reponse.main.temp;
                let ville       = reponse.name;
                // console.log(temperature);
                document.querySelector('#temperature_label').textContent =parseInt(temperature);
                document.querySelector('#ville').textContent = ville;
            }
            else {
                alert('Un problème est intervenu, merci de revenir plus tard.');
            }
        }
    }
}

let button = document.querySelector('#mode');
let span   = document.querySelector('span');

if(localStorage.getItem('theme')){
    if(localStorage.getItem('theme') == 'sombre') {
        modeSombre();
    }
}

button.addEventListener('click', () => {
    if(document.body.classList.contains('dark')) {
        document.body.className = '';
        span.textContent = 'Thème sombre';
        localStorage.setItem('theme', 'clair');
    }
    else {
        modeSombre();
    }
});

function modeSombre() {
    document.body.className = 'dark';
    span.textContent = 'Thème clair';
    localStorage.setItem('theme', 'sombre');
}

if(sessionStorage.getItem('status')) {


    document.querySelector('h1').innerHTML += "  " + localStorage.getItem('username');
}


    var logout = document.getElementById('logout');

    logout.addEventListener('click', (event) => {
        event.preventDefault();
        if (sessionStorage.getItem('status')) {
            if (confirm("are you short you want logout?")) {
                sessionStorage.clear();
                localStorage.clear();
                window.location.href = "index.html"
            }
        } else {
            alert("you are not logIn please login before logout")
        }


    });
