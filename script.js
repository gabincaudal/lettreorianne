/* =========================================
   MOT DE PASSE
========================================= */


const password = "marspoland";


const passwordInput = document.getElementById("passwordInput");

const loginButton = document.getElementById("loginButton");

const errorMessage = document.getElementById("errorMessage");


const loginScreen = document.getElementById("loginScreen");

const mainPage = document.getElementById("mainPage");



loginButton.addEventListener("click", checkPassword);



passwordInput.addEventListener("keydown", function(event){


    if(event.key === "Enter"){

        checkPassword();

    }


});



function checkPassword(){


    if(passwordInput.value.toLowerCase() === password){


        loginScreen.style.display = "none";


        mainPage.style.display = "block";



    }

    else {


        errorMessage.textContent = "Mot de passe incorrect.";

        passwordInput.value = "";


    }


}




/* =========================================
   NEIGE
========================================= */


const snowContainer = document.getElementById("snow");



function createSnowflake(){


    const snowflake = document.createElement("div");


    snowflake.classList.add("snowflake");



    const size = Math.random() * 6 + 3;



    snowflake.style.width = size + "px";

    snowflake.style.height = size + "px";



    snowflake.style.left = Math.random() * 100 + "vw";



    snowflake.style.animationDuration =

        Math.random() * 8 + 6 + "s";



    snowflake.style.opacity =

        Math.random();



    snowContainer.appendChild(snowflake);



    setTimeout(function(){


        snowflake.remove();


    },15000);



}



setInterval(createSnowflake,180);






/* =========================================
   MUSIQUE
========================================= */


const music = document.getElementById("music");

const musicButton = document.getElementById("musicButton");


let musicPlaying = false;



musicButton.addEventListener("click", function(){



    if(musicPlaying === false){


        music.play();


        musicButton.textContent = "❚❚ Pause";

        musicPlaying = true;


    }


    else{


        music.pause();


        musicButton.textContent = "▶ Lancer la musique";

        musicPlaying = false;


    }



});
