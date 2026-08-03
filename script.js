const PASSWORD = "marspoland";

function checkPassword(){

    const input = document
    .getElementById("password")
    .value;

    if(input === PASSWORD){

        document.getElementById("password-screen").style.display="none";

        document.getElementById("letter-page").style.display="block";

    }

    else{

        document.getElementById("error").innerHTML="Mot de passe incorrect.";

    }

}

const music=document.getElementById("music");

const btn=document.getElementById("musicBtn");

btn.addEventListener("click",()=>{

    if(music.paused){

        music.play();

        btn.innerHTML="❚❚ Pause";

    }

    else{

        music.pause();

        btn.innerHTML="▶ Lancer la musique";

    }

});
