$(document).ready(function(){
    var manche = 1;
    var chrono = [];
    chrono.minute = 0;
    chrono.seconde = 0;
    
    var commencer = 0;

    var club_rouge = "";
    localStorage.setItem('club_rouge', club_rouge);
    var club_bleu = "";
    localStorage.setItem('club_bleu', club_bleu);

    var nom_lutteur_rouge = "";
    localStorage.setItem('lutteur_rouge', nom_lutteur_rouge);
    var nom_lutteur_bleu = "";
    localStorage.setItem('lutteur_bleu', nom_lutteur_bleu);
//   Detecte les touche du clavier pour action
window.onkeydown = function (event) {
    switch (event.keyCode) {
        case 32:
            commencer++
            if (commencer == 1) {
                $(".seconde").html(chrono.seconde);
            } else if (commencer == 2) {
                commencer = 0;
            }
            break;
        case 82:
            chrono.minute = 0;
            $(".minute").html(chrono.minute);
            chrono.seconde = 0;
            $(".seconde").html(chrono.seconde);
            commencer = 0;
            break;
    }
};

function timer() {
    if (commencer == 0) {

    } else {
        chrono.seconde++;
    }
    $(".seconde").html(chrono.seconde);
    if (chrono.seconde > 59) {
        chrono.seconde = 0;
        chrono.minute++;
        $(".minute").html(chrono.minute);
    }

};
function chrono (){
    if(commencer == 1){
        seconde++;
        console.log(seconde);
        if(seconde == 60)
        {
            minute++;
        }
    }else{
        commencer = 0;
    }
}

function afficher_chrono(){
    localStorage.setItem('minute', chrono.minute);
    localStorage.setItem('seconde', chrono.seconde);
}

$('.commencer').click (function(){
    commencer++;
    if(commencer == 1){
        $('.commencer').html("Mettre en pause");
    }else{
        commencer = 0;
        $('.commencer').html("Continuer");
    }
});



$(".nom_lutteur_rouge").change(function(){
    nom_lutteur_rouge = $('.nom_lutteur_rouge').val();
    localStorage.setItem('lutteur_rouge', nom_lutteur_rouge);
});

$(".nom_lutteur_bleu").change(function(){
    nom_lutteur_rouge = $('.nom_lutteur_bleu').val();
    localStorage.setItem('lutteur_bleu', nom_lutteur_rouge);
});

$( ".club_rouge" ).change(function(){
    club_rouge = $('.club_rouge').val();
    localStorage.setItem('club_rouge', club_rouge);
});

$( ".club_bleu" ).change(function(){
    club_bleu = $('.club_bleu').val();
    localStorage.setItem('club_bleu', club_bleu);
});

setInterval(chrono, 1000);
setInterval(afficher_chrono, 100);
setInterval(timer, 1000);
});
