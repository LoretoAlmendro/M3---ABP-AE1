var region =  ["Arica y Parinacota", "Tarapacá", "Antofagasta", "Atacama", "Coquimbo", "Valparaíso", 
                "Metropolitana", "O'Higgins", "Maule", "Ñuble", "Biobío", "Araucanía", "Los Ríos",
                "Los Lagos", "Aysén", "Magallanes"];
var atractivos = ["Valle de Azapa", "Playa Cavancha", "La Portada","Desierto Florido", "Valle del Elqui",
                   "Dunas de Concon","Parque Metropolitano","Pichilemu","Radal de 7 Tazas","Rio San Fabian",
                   "Salto del Laja", "Volcan Villarica", "Rio Calle calle", "Saltos del Petrohue",
                   "Glaciar San Quintin", "Dientes de Navarino"]

var images = ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Arica011.jpg/1200px-Arica011.jpg",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Iquique_night_skyline.jpg/300px-Iquique_night_skyline.jpg",
              "https://upload.wikimedia.org/wikipedia/commons/4/46/Monumento_Natural_La_Portada.JPG",
              "https://upload.wikimedia.org/wikipedia/commons/3/30/Desierto_florido.jpg",
              "https://upload.wikimedia.org/wikipedia/commons/b/bc/Valle_del_Elqui.jpg",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Panoramica_Las_Dunas.jpg/1920px-Panoramica_Las_Dunas.jpg"
              ,"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/J25_322_Cerro_San_Crist%C3%B3bal.jpg/1024px-J25_322_Cerro_San_Crist%C3%B3bal.jpg",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Costanera_de_Pichilemu.jpg/1024px-Costanera_de_Pichilemu.jpg",
              "https://www.conaf.cl/wp-content/files_mf/cache/th_4adc6ebe3e2b0d2fbfea201316181ee9_NUEVA-Radal-7-tazas3.jpg",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Rio_en_San_Fabian.jpg/800px-Rio_en_San_Fabian.jpg"
              ,"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Soledad_en_el_Salto_del_Laja.jpg/800px-Soledad_en_el_Salto_del_Laja.jpg",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Villarrica.jpg/1024px-Villarrica.jpg",
              "https://upload.wikimedia.org/wikipedia/commons/c/c7/Valdivia_Chilean_Capture_Costanera.jpg",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Volcano_Osorno_and_Petrohu%C3%A9_waterfalls.JPG/800px-Volcano_Osorno_and_Petrohu%C3%A9_waterfalls.JPG"
              ,"https://upload.wikimedia.org/wikipedia/commons/9/93/San_Quintin_Glacier_1.jpg",
              "https://upload.wikimedia.org/wikipedia/commons/c/cd/Puerto_Williams1.JPG"];
            

function Region (valor) {
    let show = document.getElementById ("caja")
    show.style.display= "flex"
    show.style.justifyContent= "center"

document.getElementById("pictures").setAttribute("src", images[valor]);
document.getElementById("nombreregion").innerText = "Región: " + region[valor];
document.getElementById("informacion").innerText = "Atractivos: " + atractivos[valor];
}

function Regionfuera() {
document.getElementById("caja").style.display = "none";
} 