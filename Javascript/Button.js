/* Boutons pour la page la cécité c'est quoi?*/
function toggle_text(id) {
    var span = document.getElementById("aveugle");
    var span1 = document.getElementById("nonaveugle");
    // Première partie
    if(id == "span_txt"){
        span.innerHTML ="Cécité absolue : Pas de perception de lumière";  
    }
    if(id == "span1_txt"){
        span.innerHTML ="Cécité grave : Perception faible de la lumière, Champ visuel &lsaquo; 5° et Acuité visuelle &lsaquo; 1/50";       
    }
    if(id == "span2_txt"){
        span.innerHTML ="Déficience profonde : 5° &lsaquo; champ visuel &lsaquo; 10° et 1/50 &lsaquo; Acuité visuelle &lsaquo; 1/20";  
    }
    // Seconde partie
    if(id == "span3_txt"){
        span1.innerHTML ="Déficience sévère : 1/20 &lsaquo; acuité visuelle &lsaquo; 1/10";
    }
    if(id == "span4_txt"){
        span1.innerHTML ="Déficience moyenne : 1/10 &lsaquo; acuité visuelle &lsaquo; 3/10 et Champ visuel &rsaquo; 20°";
    }
}

/* Boutons pour la page Solutions informatiques, synthèse vocale */
/* Premier bouton */
document.addEventListener('DOMContentLoaded', function () {
	let cache = document.getElementById("bouton1");
	cache.addEventListener('click', cacheTexte);
	document.getElementById('togg1').style.display = 'none';

	function cacheTexte() {
		let affiche = document.getElementById('togg1');
		if (affiche.style.display == 'none') {
      affiche.style.display = 'block';
      document.getElementById('bouton1').innerHTML = 'Cacher';
		} else {
      affiche.style.display = 'none';
      document.getElementById('bouton1').innerHTML = 'En savoir plus';
		}
	}
});

/* Deuxième bouton */
document.addEventListener('DOMContentLoaded', function () {
	let cache = document.getElementById("bouton2");
	cache.addEventListener('click', cacheTexte);
	document.getElementById('togg2').style.display = 'none';

	function cacheTexte() {
		let affiche = document.getElementById('togg2');
		if (affiche.style.display == 'none') {
      affiche.style.display = 'block';
      document.getElementById('bouton2').innerHTML = 'Cacher';
		} else {
      affiche.style.display = 'none';
      document.getElementById('bouton2').innerHTML = 'En savoir plus';
		}
	}
});

/* Troisième bouton */
document.addEventListener('DOMContentLoaded', function () {
	let cache = document.getElementById("bouton3");
	cache.addEventListener('click', cacheTexte);
	document.getElementById('togg3').style.display = 'none';

	function cacheTexte() {
		let affiche = document.getElementById('togg3');
		if (affiche.style.display == 'none') {
      affiche.style.display = 'block';
      document.getElementById('bouton3').innerHTML = 'Cacher';
		} else {
      affiche.style.display = 'none';
      document.getElementById('bouton3').innerHTML = 'En savoir plus';
		}
	}
});

/* Quatrième bouton */
document.addEventListener('DOMContentLoaded', function () {
	let cache = document.getElementById("bouton4");
	cache.addEventListener('click', cacheTexte);
	document.getElementById('togg4').style.display = 'none';

	function cacheTexte() {
		let affiche = document.getElementById('togg4');
		if (affiche.style.display == 'none') {
      affiche.style.display = 'block';
      document.getElementById('bouton4').innerHTML = 'Cacher';
		} else {
      affiche.style.display = 'none';
      document.getElementById('bouton4').innerHTML = 'En savoir plus';
		}
	}
});