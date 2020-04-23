
//alert("Hello World !");
//confirm("souhaitez vous confirmez?");

//if(confirm("souhaitez vous confirmez?")){
//    //Oui
//     alert("ok");
// }
// else{
//     //Non
//     alert("annulation")
//
// const age=prompt("entrez votre age:");
// alert("votre age est de"+ " " +age);
//
//}
//}function direBonjour(){
//     alert ("bonjour toi");
//
// let choix=prompt("que souhaitez-vous faire?\n\n 1- Addition\n 2 -Multiplikation \n 3 -Soustraction \n 4- Division")
//
//  if (choix=="1"){
//      var a=prompt("nombre1");
//      a=parseInt(a);
//      var b=prompt("nombre2");
//      b=parseInt(b)
//      alert(addition(a,b));
// direBonjour()

function sum1(nombre){
    if(nombre==1){
        return 1;
    }
    return nombre+ sum1(nombre-1);

}


function addition(nbre1,nbre2){
    result=nbre1+nbre2;
    return result;

}

function multiplication(nbre1,nbre2){
    result=nbre1*nbre2;
    return result;

}

function soustraction(nbre1,nbre2){
    result=nbre1-nbre2;
    return result;

}

function division(nbre1,nbre2){
    if(nbre2==0){
        throw new Error("impossible de diviser par zero:")
    }
    result=nbre1/nbre2;
    return result;

}

let restart = true; // Cette variable vaut false ce qui veut dire que par défaut, nous ne reproposons par un calcul.

do{
    var choix=Number(prompt("que souhaitez-vous faire?\n\n 1- Addition\n 2 -Multiplikation \n 3 -Soustraction \n 4- Division"));

}while(choix!=1 && choix!=2 && choix!=3 && choix!=4);


do{
    var number1=Number(prompt("entrez votre nombre"));
    var number2=Number(prompt("entrez votre deuxieme nombre"));

}while(isNaN(number1)||isNaN(number2));


try {

    switch (choix) {
        case 1:
            var resultat = addition(number1, number2);
            break;

        case 2:
            var resultat = multiplication(number1, number2);
            break;

        case 3:
            var resultat = soustraction(number1, number2);
            break;

        case 4:
            var resultat = division(number1, number2);
            break;

        default:
            throw new Error("une erreur est survenue")
    }
    alert("voici le resultat " +resultat)

}

catch(error){
    alert(error);
}

do{
restart = confirm("Souhaitez-vous recommencer un calcul ?"); // On demande grâce à la boîte de dialogue confirm() si l'utilisateur veut recommencer

}while(restart);




console.log(sum1(5));