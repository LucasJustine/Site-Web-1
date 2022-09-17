    document.addEventListener("scroll", function () {
        if(document.documentElement.scrollTop > 1 ){
            document.getElementById("bouton").style.height = "30px";
        }else{
            document.getElementById("bouton").style.height = "0px";
        }
    });

    document.getElementsByTagName("i");//
var question = document.querySelectorAll('.questions i'); 
         
question.forEach(x => {
    x.addEventListener('click', function() {
        var bouton = this.parentNode.parentNode.childNodes[3];
        if( bouton.style.maxHeight == "50em"){
            bouton.style.maxHeight = 0;
        
            this.textContent = "add";
        }
        else{
            bouton.style.maxHeight = "50em";
            this.textContent = "remove";
        }
    });
});

var suite = document.querySelectorAll('.bouton');

suite.forEach(x => {
    x.addEventListener('click', function() {
        var liresuite = this.parentNode.childNodes[7];
        var dots = this.parentNode.childNodes[5];
        if( liresuite.style.display === "block"){
            liresuite.style.display = "none";   
            this.textContent = "Voir plus";
            dots.style.display = "block";
        }
        else{
            liresuite.style.display = "block";
            this.textContent = "Voir moins";
            dots.style.display = "none";
        }
    });
});
/* Fonction pour imprimer */

var imprimer = document.querySelectorAll('.imprimer');

imprimer.forEach(x => {
    x.addEventListener('click', function() {
        var image = this.parentNode.childNodes[1];
        document.getElementById("thomas").style.display = "none";
        document.getElementById("lucas").style.display = "none";
        document.getElementById("claire").style.display = "none";
        document.getElementById("victor").style.display = "none";
        image.style.display = "block";
        window.print();
        document.getElementById("thomas").style.display = "block";
        document.getElementById("lucas").style.display = "block";
        document.getElementById("claire").style.display = "block";
        document.getElementById("victor").style.display = "block";

    });
});


/* Fonction pour ouvrir le menu */
function ouvremenu(){
    document.getElementById("Menu").style.width = "30%";
    document.getElementById("main").style.marginLeft= "30%";
    document.getElementById("header").style.marginLeft= "30%";
    document.getElementById("footer").style.marginLeft= "30%";
}

/* Fonction pour fermer le menu */
function fermemenu(){
    document.getElementById("Menu").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("header").style.marginLeft= "0";
    document.getElementById("footer").style.marginLeft= "0";
    document.getElementById("menuburger").style.display = "block";
}

function burger1(){
    if (document.getElementById("sous-liste1").style.maxHeight == "7em"){
        document.getElementById("sous-liste1").style.maxHeight = "0em";
    }
    else{
        document.getElementById("sous-liste1").style.maxHeight = "7em";
    }
  }

function cv() {
    document.querySelectorAll('.cv img').print();
}

function up() {
    document.documentElement.scrollTop = 0; 
}   
