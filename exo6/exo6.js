var mavarint = prompt('entrez une valeur') ;
var resultat = mavarint

for(let i=1;i<mavarint;i++)
{
    resultat+=i
}


alert(resultat)
// Fonction qui vérifie la largeur de la fenêtre
function checkWindowSize() {
    if (window.innerWidth < 300) {
        alert('fenêtre inférieure à 300px !');
    }
}
// Ajout d'un écouteur d'événement pour détecter les redimensionnements
window.addEventListener('resize', checkWindowSize);
// Vérifie immédiatement si la fenêtre est déjà inférieure à 300px
checkWindowSize();
