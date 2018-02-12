$(document).ready(function () {
    var manche = 0;
    localStorage.setItem('manche', manche);

    var pause = 0;
    localStorage.setItem('pause', pause);

    var fini = 0;

    var avertissement_bleu = 0;
    localStorage.setItem('avertissement_bleu', avertissement_bleu);

    var avertissement_rouge = 0;
    localStorage.setItem('avertissement_rouge', avertissement_rouge);

    var point_bleu = 0;
    localStorage.setItem('point_bleu', point_bleu);

    var point_rouge = 0;
    localStorage.setItem('point_rouge', point_rouge);

    var style = "";
    localStorage.setItem('style', style);

    var poids = "";
    localStorage.setItem('poids', poids);
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
            case 17:
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
                manche = 0;
                pause = 0;
                point_rouge = 0;
                point_bleu = 0;
                break;
        }
    };

    function timer() {
        if (commencer == 0) {

        } else {
            chrono.seconde++;
        }
        $(".seconde").html(chrono.seconde);
        if (chrono.seconde >= 60) {
            chrono.seconde = 0;
            chrono.minute++;
            $(".seconde").html(chrono.seconde);
            $(".minute").html(chrono.minute);
        }

    };
    function temps_reset(){
        chrono.minute = 0;
        $(".minute").html(chrono.minute);
        chrono.seconde = 0;
        $(".seconde").html(chrono.seconde);
    }
    function afficher_chrono() {
        localStorage.setItem('minute', chrono.minute);
        localStorage.setItem('seconde', chrono.seconde);
    }

    $('.commencer').click(function () {
        commencer++;
        if (commencer == 1) {
            $('.commencer').html("Mettre en pause");
        } else {
            commencer = 0;
            $('.commencer').html("Continuer");
        }
    });

    function temps_chrono (){
        var minute_manche = $('.minute_manche').val();
        var seconde_manche = $('.seconde_manche').val();
        var minute_pause =$('.minute_pause').val();
        var seconde_pause = $('.seconde_pause').val();


        if (chrono.minute >= minute_manche && chrono.seconde >= seconde_manche && manche == 0) {
            manche++;
            pause++;
            chrono.minute = 0;
            $(".minute").html(chrono.minute);
            chrono.seconde = 0;
            $(".seconde").html(chrono.seconde);
            $('.manche').html('2');
            console.log('Première manche');
            localStorage.setItem('manche', manche);
            localStorage.setItem('pause', pause);
        }
        if (pause == 1) {
            if (chrono.minute >= minute_pause && chrono.seconde >= seconde_pause) {
                temps_reset();
                commencer = 0;
                pause++;
                localStorage.setItem('pause', pause);
                console.log(manche);
            }
        }
        if (pause == 2 && chrono.minute >= minute_manche && chrono.seconde >= seconde_manche && manche == 1) {
            manche++;
            pause ++;
            fini++;
            temps_reset();
            commencer = 0;
            $('.manche').html('1');
            localStorage.setItem('manche', manche);
            localStorage.setItem('pause', pause);
        }
    }


    // #################
    // Avertissement
    // #################

    $('.bleu_plus_avert').click(function () {
        avertissement_bleu++;
        if (avertissement_bleu == 1) {
            $('.bleu_avertissement_3').css('color', 'red');
            localStorage.setItem('avertissement_bleu', avertissement_bleu);
        } else if (avertissement_bleu == 2) {
            $('.bleu_avertissement_2').css('color', 'red');
            localStorage.setItem('avertissement_bleu', avertissement_bleu);
        } else if (avertissement_bleu == 3) {
            $('.bleu_avertissement_1').css('color', 'red');
            localStorage.setItem('avertissement_bleu', avertissement_bleu);
        } else if (avertissement_bleu >= 3) {
            avertissement_bleu = 3;
        }
    });

    $('.bleu_moins_avert').click(function () {
        avertissement_bleu--;
        if (avertissement_bleu == 2){
            $('.bleu_avertissement_1').css('color', 'white');
            localStorage.setItem('avertissement_bleu', avertissement_bleu);
        } else   if (avertissement_bleu == 1){
            $('.bleu_avertissement_2').css('color', 'white');
            localStorage.setItem('avertissement_bleu', avertissement_bleu);
        } else if(avertissement_bleu == 0){
            $('.bleu_avertissement_3').css('color', 'white');
            localStorage.setItem('avertissement_bleu', avertissement_bleu);
        } else if (avertissement_bleu <= 0){
            avertissement_bleu = 0;
        }
    });

    $('.rouge_plus_avert').click(function () {
        avertissement_rouge++;
        if (avertissement_rouge == 1) {
            $('.rouge_avertissement_1').css('color', 'rgb(133, 0, 0)');
            localStorage.setItem('avertissement_rouge', avertissement_rouge);
        } else if (avertissement_rouge == 2) {
            $('.rouge_avertissement_2').css('color', 'rgb(133, 0, 0)');
            localStorage.setItem('avertissement_rouge', avertissement_rouge);
        } else if (avertissement_rouge == 3) {
            $('.rouge_avertissement_3').css('color', 'rgb(133, 0, 0)');
            localStorage.setItem('avertissement_rouge', avertissement_rouge);
        } else if (avertissement_rouge >= 3) {
            avertissement_rouge = 3;
        }
    });

    $('.rouge_moins_avert').click(function () {
        avertissement_rouge--;
        if (avertissement_rouge == 2){
            $('.rouge_avertissement_3').css('color', 'white');
            localStorage.setItem('avertissement_rouge', avertissement_rouge);
        } else   if (avertissement_rouge == 1){
            $('.rouge_avertissement_2').css('color', 'white');
            localStorage.setItem('avertissement_rouge', avertissement_rouge);
        } else if(avertissement_rouge == 0){
            $('.rouge_avertissement_1').css('color', 'white');
            localStorage.setItem('avertissement_rouge', avertissement_rouge);
        } else if (avertissement_rouge <= 0){
            avertissement_rouge = 0;
        }
    });

    // ###################
    // Point en moins bleu
    // ###################

    $('.moins_1_bleu').click(function () {
        point_bleu--;
        if (point_bleu <= 0) {
            point_bleu = 0;
        }
        $('.point_bleu').html(point_bleu);
        localStorage.setItem('point_bleu', point_bleu);
    });

    $('.moins_2_bleu').click(function () {
        point_bleu = point_bleu - 2;
        if (point_bleu <= 0) {
            point_bleu = 0;
        }
        $('.point_bleu').html(point_bleu);
        localStorage.setItem('point_bleu', point_bleu);
    });

    $('.moins_3_bleu').click(function () {
        point_bleu = point_bleu - 3;
        if (point_bleu <= 0) {
            point_bleu = 0;
        }
        $('.point_bleu').html(point_bleu);
        localStorage.setItem('point_bleu', point_bleu);
    });

    $('.moins_4_bleu').click(function () {
        point_bleu = point_bleu - 4;
        if (point_bleu <= 0) {
            point_bleu = 0;
        }
        $('.point_bleu').html(point_bleu);
        localStorage.setItem('point_bleu', point_bleu);
    });

    $('.moins_5_bleu').click(function () {
        point_bleu = point_bleu - 5;
        if (point_bleu <= 0) {
            point_bleu = 0;
        }
        $('.point_bleu').html(point_bleu);
        localStorage.setItem('point_bleu', point_bleu);
    });

    // rouge
    $('.moins_1').click(function () {
        point_rouge--;
        if (point_rouge <= 0) {
            point_rouge = 0;
        }
        $('.point_rouge').html(point_rouge);
        localStorage.setItem('point_rouge', point_rouge);
    });

    $('.moins_2').click(function () {
        point_rouge = point_rouge - 2;
        if (point_rouge <= 0) {
            point_rouge = 0;
        }
        $('.point_rouge').html(point_rouge);
        localStorage.setItem('point_rouge', point_rouge);
    });
    $('.moins_3').click(function () {
        point_rouge = point_rouge - 3;
        if (point_rouge <= 0) {
            point_rouge = 0;
        }
        $('.point_rouge').html(point_rouge);
        localStorage.setItem('point_rouge', point_rouge);
    });
    $('.moins_4').click(function () {
        point_rouge = point_rouge - 4;
        if (point_rouge <= 0) {
            point_rouge = 0;
        }
        $('.point_rouge').html(point_rouge);
        localStorage.setItem('point_rouge', point_rouge);
    });
    $('.moins_5').click(function () {
        point_rouge = point_rouge - 5;
        if (point_rouge <= 0) {
            point_rouge = 0;
        }
        $('.point_rouge').html(point_rouge);
        localStorage.setItem('point_rouge', point_rouge);
    });

    // ###################
    // Point en plus bleu
    // ###################

    $('.plus_1_bleu').click(function () {
        point_bleu++;
        $('.point_bleu').html(point_bleu);
        localStorage.setItem('point_bleu', point_bleu);
    });

    $('.plus_2_bleu').click(function () {
        point_bleu = point_bleu + 2;
        $('.point_bleu').html(point_bleu);
        localStorage.setItem('point_bleu', point_bleu);
    });

    $('.plus_3_bleu').click(function () {
        point_bleu = point_bleu + 3;
        $('.point_bleu').html(point_bleu);
        localStorage.setItem('point_bleu', point_bleu);
    });

    $('.plus_4_bleu').click(function () {
        point_bleu = point_bleu + 4;
        $('.point_bleu').html(point_bleu);
        localStorage.setItem('point_bleu', point_bleu);
    });

    $('.plus_5_bleu').click(function () {
        point_bleu = point_bleu + 5;
        $('.point_bleu').html(point_bleu);
        localStorage.setItem('point_bleu', point_bleu);
    });

    //rouge 
    $('.plus_1').click(function () {
        point_rouge = point_rouge + 1;
        $('.point_rouge').html(point_rouge);
        localStorage.setItem('point_rouge', point_rouge);
    });

    $('.plus_2').click(function () {
        point_rouge = point_rouge + 2;
        $('.point_rouge').html(point_rouge);
        localStorage.setItem('point_rouge', point_rouge);
    });

    $('.plus_3').click(function () {
        point_rouge = point_rouge + 3;
        $('.point_rouge').html(point_rouge);
        localStorage.setItem('point_rouge', point_rouge);
    });

    $('.plus_4').click(function () {
        point_rouge = point_rouge + 4;
        $('.point_rouge').html(point_rouge);
        localStorage.setItem('point_rouge', point_rouge);
    });

    $('.plus_5').click(function () {
        point_rouge = point_rouge + 5;
        $('.point_rouge').html(point_rouge);
        localStorage.setItem('point_rouge', point_rouge);
    });




    // verification données et envoi

    $(".nom_lutteur_rouge").change(function () {
        nom_lutteur_rouge = $('.nom_lutteur_rouge').val();
        localStorage.setItem('lutteur_rouge', nom_lutteur_rouge);
    });

    $(".nom_lutteur_rouge").keyup(function () {
        nom_lutteur_rouge = $('.nom_lutteur_rouge').val();
        localStorage.setItem('lutteur_rouge', nom_lutteur_rouge);
    });

    $(".nom_lutteur_bleu").change(function () {
        nom_lutteur_bleu = $('.nom_lutteur_bleu').val();
        localStorage.setItem('lutteur_bleu', nom_lutteur_bleu);
    });

    $(".nom_lutteur_bleu").keyup(function () {
        nom_lutteur_bleu = $('.nom_lutteur_bleu').val();
        localStorage.setItem('lutteur_bleu', nom_lutteur_bleu);
    });

    $(".club_rouge").change(function () {
        club_rouge = $('.club_rouge').val();
        $('.nom_lutteur_rouge').val();
        localStorage.setItem('club_rouge', club_rouge);
    });

    $(".club_bleu").change(function () {
        club_bleu = $('.club_bleu').val();
        localStorage.setItem('club_bleu', club_bleu);
    });

    $('input:text').focus(
        function(){
            $(this).val('');
        });

    $(".style_l").change(function () {
        style = $('.style_l').val();
        console.log(style);
        localStorage.setItem('style', style);
    });

    $('.poids_lutteur').keyup(function () {
        poids = $('.poids_lutteur').val();
        localStorage.setItem('poids', poids);
    });

    $('.poids_lutteur').change(function () {
        poids = $('.poids_lutteur').val();
        localStorage.setItem('poids', poids);
    });

    setInterval(temps_chrono, 1000);
    setInterval(chrono, 1000);
    setInterval(afficher_chrono, 100);
    setInterval(timer, 1000);
});