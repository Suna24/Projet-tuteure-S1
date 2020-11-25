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