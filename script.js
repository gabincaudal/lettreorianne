/*==================================================
    MOT DE PASSE
==================================================*/

const PASSWORD = "marspoland";

const loginButton = document.getElementById("loginButton");
const passwordInput = document.getElementById("passwordInput");
const errorMessage = document.getElementById("errorMessage");

const loginScreen = document.getElementById("loginScreen");
const mainPage = document.getElementById("mainPage");

loginButton.addEventListener("click", verifyPassword);

passwordInput.addEventListener("keydown", function(event){

    if(event.key === "Enter"){

        verifyPassword();

    }

});

function verifyPassword(){

    if(passwordInput.value.trim() === PASSWORD){

        loginScreen.style.opacity = "0";

        setTimeout(function(){

            loginScreen.style.display = "none";

            mainPage.style.display = "block";

            setTimeout(function(){

                mainPage.style.opacity = "1";

            },50);

            launchLetterAnimation();

        },700);

    }

    else{

        errorMessage.textContent = "Mot de passe incorrect.";

        passwordInput.value = "";

    }

}

/*==================================================
    MUSIQUE
==================================================*/

const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");

music.volume = 0;

let playing = false;

musicButton.addEventListener("click", function(){

    if(!playing){

        music.play();

        fadeIn();

        musicButton.textContent = "❚❚ Pause";

    }

    else{

        fadeOut();

        musicButton.textContent = "▶ Lancer la musique";

    }

    playing = !playing;

});

function fadeIn(){

    let volume = 0;

    music.volume = 0;

    const interval = setInterval(function(){

        volume += 0.05;

        if(volume >= 1){

            volume = 1;

            clearInterval(interval);

        }

        music.volume = volume;

    },120);

}

function fadeOut(){

    let volume = music.volume;

    const interval = setInterval(function(){

        volume -= 0.05;

        if(volume <= 0){

            volume = 0;

            clearInterval(interval);

            music.pause();

        }

        music.volume = volume;

    },120);

}

/*==================================================
    FLOCONS DE NEIGE
==================================================*/

const snow = document.getElementById("snow");

function createSnowflake(){

    const flake = document.createElement("div");

    flake.classList.add("snowflake");

    const size = Math.random()*6+2;

    flake.style.width = size+"px";
    flake.style.height = size+"px";

    flake.style.left = Math.random()*100+"vw";

    flake.style.animationDuration =
        (Math.random()*8+6)+"s";

    flake.style.opacity =
        Math.random();

    snow.appendChild(flake);

    setTimeout(function(){

        flake.remove();

    },15000);

}

setInterval(createSnowflake,180);

/*==================================================
    CURSEUR DANS LE CHAMP
==================================================*/

window.onload = function(){

    passwordInput.focus();

};
