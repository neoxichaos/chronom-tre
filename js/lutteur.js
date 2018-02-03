var lutteur = {
    "club": {
        "Besançon": {
            "lutteur": {
                "Lutteur besançon 01": {
                    "feminine": true
                },
                "Lutteur besançon 02": {
                    "feminine": false
                },
                "Lutteur besançon 03": {
                    "feminine": false
                },
                "Lutteur besançon 04": {
                    "feminine": true
                },
            }
        },
        "Pontarlier": {
            "lutteur": {
                "lutteur_01": {},
                "lutteur_02": {},
            }
        },
        "Vesoul": {
            "lutteur": {
                "Marie": {},
                "Aric": {},
            }
        },
    }
};

function nom_lutteur(club, lutteur_nom){

    club = $('.'+club+'').val();
    if (club == "") {
        $('.'+lutteur_nom+'').html('');
        $('.'+lutteur_nom+'').value = "";
    } else {
        $('.'+lutteur_nom+'').value = "";
        $('.'+lutteur_nom+'').html('');
        jQuery.each(lutteur.club[club].lutteur, function (i, val) {
            if (lutteur.club[club_rouge].lutteur[i].feminine == true) {
                $('.'+lutteur_nom+'').append('<option value="[F] ' + i + '">');
            } else {
                $('.'+lutteur_nom+'').append('<option value="[M] ' + i + '">');
            }
        });
    }
}

var club_rouge = "";
jQuery.each(lutteur.club, function (i, val) {
    $('.club_rouge').append('<option value="' + i + '">' + i + '</option>');
    $('.club_bleu').append('<option value="' + i + '">' + i + '</option>');
});

$('.club_rouge').change(function () {


    club_rouge = $('.club_rouge').val();
    if (club_rouge == "") {
        $('.lutteur_nom').html('');
        $('.lutteur_nom').value = "";
    } else {
        $('.lutteur_nom').value = "";
        $('.lutteur_nom').html('');
        jQuery.each(lutteur.club[club_rouge].lutteur, function (i, val) {
            if (lutteur.club[club_rouge].lutteur[i].feminine == true) {
                $('.lutteur_nom').append('<option value="[F] ' + i + '">');
            } else {
                $('.lutteur_nom').append('<option value="[M] ' + i + '">');
            }
        });
    }

});

$('.club_bleu').change(function () {


    club_bleu = $('.club_bleu').val();
    if (club_bleu == "") {
        $('.lutteur_nom_b').html('');
        $('.lutteur_nom_b').value = "";
    } else {
        $('.lutteur_nom_b').value = "";
        $('.lutteur_nom_b').html('');
        jQuery.each(lutteur.club[club_bleu].lutteur, function (i, val) {
            if (lutteur.club[club_bleu].lutteur[i].feminine == true) {
                $('.lutteur_nom_b').append('<option value="[F] ' + i + '">');
            } else {
                $('.lutteur_nom_b').append('<option value="[M] ' + i + '">');
            }
        });
    }

});