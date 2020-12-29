// Liste question
let question = ["Comment lire le jour du mois dans une date ?", 
"Que fait tableau.push(3) ?", 
"Que signifie NaN ?", 
"i += 1 est équivalent à", 
"Que renvoie ch1.slice(-3, -1) si ch1 = 'ABCDE' ?", 
"Pour tester de nombreuses conditions sur la même variable on va utiliser", 
"De quelle façon déclare-t-on un tableau T1 de 20 éléments ?", 
"parseInt('101 dalmatiens'); renvoie :", 
"Qu'est-ce que JSON par rapport au JavaScript ?", 
"window.confirm() affichge une boite de dialogue avec :", 
"Que contient document.images[1] ?",
"Si ch1 = 'ABCED', que retourne ch1.chartAt(3)",
"Quel est l'inverse de la fonction split()",
"Que retourne typeof(1>2) ?",
"Quel est syntaxe correcte pour tester la valeur ch1 ?",
"Math.floor(-3.4) affiche",
"JavaScript",
"Quelle est la syntaxe correcte ?",
"Quelle fonction permet de temporiser l'exécution d'une commande ?",
"Avec quoi peut-on créer une instance d'un nouvel objet ?"];

// Liste réponse
let reponse1 = ["getDate()", 
"décale tous les indices de 3 positions", 
"Not at NULL", 
"i >= 1", 
"ABCDE", 
"Switch()", 
"var T1 = array(20)", 
"18", 
"un langage de requêtes", 
"un message et le bouton OK seul", 
"les images de l'en tête du document", 
"true", 
"append()", 
"true", 
"if (ch1='Chat')then {} else {}", 
"N'existe pas en JavaScript", 
"s'exécute sur le serveur uniquement", 
"window.getElementById('MonId');",
"sleep()",
"new"];

let reponse2 = ["getDay()",
"ajoute l’élément 3",
"Not area Negative",
"n’existe pas en JS",
"AB",
"if()",
"var T1(20)",
"NaN",
"un format d’échange de données texte",
"n’existe pas en JS",
"la deuxième image du document",
"E",
"unite()",
"integer",
"if (ch1==“Chat”) { } else { }",
"3,4",
"doit être compilé avant d’être exécuté",
"getElementById(window.[“MonId”]);",
"setTimeout()",
"this"];

let reponse3 = ["Day()",
"Retire l’élément en 3e position",
"Number area NULL",
"i = i + 1",
"CD",
"while()",
"T1=newArray(20)",
"101",
"un langage de programmation dérivé",
"un message et les boutons OK Annuler",
"la première image du document",
"C",
"join()",
"boolean",
"if (ch1=“Chat”) { } else { }",
"-4",
"s’exécute sur le client",
"getElementById(document.[“MonId”]);",
"wait()",
"add"];

let reponse4 = ["Date.parse()",
"Retire les 3 derniers éléments",
"Not a Number",
"i > 1",
"BC",
"for()",
"var T1[20]",
"une erreur",
"une variable d’environnement système",
"un message, un champ de saisie et les boutons OK Annuler",
"cela n’existe pas en JS",
"Error",
"concat()",
"false",
"if (ch1==“Chat”) then { } else { }",
"-3",
"est un langage dérivé de l’ADA",
"document.getElementById(“MonId”);",
"SetTimer()",
"instance"];

let response = [1, 2, 4, 3, 3, 1, 3, 3, 2, 3, 2, 2, 3, 3, 2, 3, 3, 4, 2, 1];

// Déclaration des éléments
let input1 = document.getElementById("check1");
let input2 = document.getElementById("check2");
let input3 = document.getElementById("check3");
let input4 = document.getElementById("check4");
let inputArray = document.getElementsByTagName("input");

let label = document.getElementsByTagName("label");
let phraseQuestion = document.querySelector("p");

let nbQuestion = document.getElementById("question1");
let nbPoint = document.getElementById("score1");
let nbPointQuestion = document.getElementById("score2");

let btnSend = document.getElementById("send");
let btnRestart = document.getElementById("restart");
let phraseReponse = document.getElementById("phraseReponse");

let compt = 0;

// Event
btnSend.addEventListener("click", function(){
    if(btnSend.innerHTML == "Envoyer"){
        btnSend.innerHTML = "Suivant";
        for (let i = 0; i < inputArray.length; i++) {
            if(inputArray[i].checked){
                if(inputArray[i].value == response[compt]){
                    label[i].style.color = "green";
                    nbPoint.innerHTML = Number(nbPoint.innerHTML) + 1;
                    phraseReponse.innerHTML = "Bonne réponse";
                    phraseReponse.style.color = "green";
                } else {
                    inputArray[i].style.color = "red";
                    label[response[compt]].style.color = "green";
                };
                nbPointQuestion.innerHTML = Number(nbPointQuestion.innerHTML) + 1;
            } else {
                // Mauvaise réponse
            }
        };
    } else {
        btnSend.innerHTML = "Envoyer";
        phraseReponse.innerHTML = "";
        // compt ++;
    };
});