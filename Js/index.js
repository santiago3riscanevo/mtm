const pretina = document.querySelector(".pretina>img");
console.log(pretina)

const pretinaDescription = document.querySelector(".pretina_description");
console.log(pretinaDescription)

pretina.addEventListener("mouseenter",function(){
    pretinaDescription.style.transition = "1s"
    pretinaDescription.style.color = "rgba(142, 158, 245, 0)";
    pretinaDescription.style.background = "none"
})

pretina.addEventListener("mouseout",function(){
    pretinaDescription.style.transition = "1.5s"
    pretinaDescription.style.color = "black";
    pretinaDescription.style.background = "#dededecf"
})

const etiqueta2 = document.querySelector(".etiqueta2>img");
console.log(etiqueta2)

const etiqueta2Description = document.querySelector(".etiqueta2>p");
console.log(etiqueta2Description)

etiqueta2.addEventListener("mouseenter",function(){
    etiqueta2Description.style.transition = "1s"
    etiqueta2Description.style.color = "rgba(142, 158, 245, 0)";
    etiqueta2Description.style.background = "none"
})

etiqueta2.addEventListener("mouseout",function(){
    etiqueta2Description.style.transition = "1.5s"
    etiqueta2Description.style.color = "black";
    etiqueta2Description.style.background = "#dededecf"
})

const marquilla = document.querySelector(".marquilla>img");
console.log(marquilla)

const marquillaDescription = document.querySelector(".marquilla>p");
console.log(marquillaDescription)

marquilla.addEventListener("mouseenter",function(){
    marquillaDescription.style.transition = "1s"
    marquillaDescription.style.color = "rgba(142, 158, 245, 0)";
    marquillaDescription.style.background = "none"
})

marquilla.addEventListener("mouseout",function(){
    marquillaDescription.style.transition = "1.5s"
    marquillaDescription.style.color = "black";
    marquillaDescription.style.background = "#dededecf"
})


// responsive menu

const menu = document.getElementById("menu");
console.log(menu);

const media = document.getElementById("media")
console.log(media);

menu.addEventListener("click",function(){
    if(media.style.display === "none"){
        media.style.display = "flex";
    }else{
        media.style.display = "none";
    }
})