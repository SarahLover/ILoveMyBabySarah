const imgl = document.getElementById("leftp");
const img2 = document.getElementById("rightp");


const box = document.getElementById("box");
const at = document.getElementById("at");
const ht = document.getElementById("ht");

const slider = document.getElementById("slider");
const slider1 = document.getElementById("slider1");

var audiotest = new Audio('audio.mp3')



imgl.addEventListener("click",() => {
    imgl.classList.add("leftanime")
    img2.classList.add("rightanime")
    setTimeout(() => {
        imgl.classList.add("nodis");
        img2.classList.add("nodis");

        ht.style.display="block";
        at.style.display="block";
        box.style.display="block";
        box.classList.add("animetext")
        ht.classList.add("animetext");
        at.classList.add("animetext");

        slider.style.display="flex";
     
        slider1.style.display="flex";

        audiotest.volume = 0.1;
        audiotest.loop = true
        audiotest.play();
        
    }, 3000);
})

img2.addEventListener("click",() => {
    imgl.classList.add("leftanime")
    img2.classList.add("rightanime")
    setTimeout(() => {
        imgl.classList.add("nodis");
        img2.classList.add("nodis");

        ht.style.display="block";
        at.style.display="block";
        box.style.display="block";
        box.classList.add("animetext")
        ht.classList.add("animetext");
        at.classList.add("animetext");

        slider.style.display="flex";
     
        slider1.style.display="flex";
    
        audiotest.volume = 0.1;
        audiotest.loop = true
        audiotest.play();
 

    }, 3000);
})