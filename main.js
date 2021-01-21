function change_theme(){
    if(theme == 0){
        var root = document.querySelector(":root"); 
        root.style.setProperty("--main-color", "#222831");
        root.style.setProperty("--text-color", "#FFF");
        setTimeout(function(){ 
            document.getElementById("discord").src = "media/discord_white.png";
            document.getElementById("github").src = "media/github_white.png";
            document.getElementById("email").src = "media/email_white.png";
        }, 1); 
        theme = 1;
        localStorage.setItem("theme", 0);
        console.log(theme);
    }
    else if(theme == 1){
        var root = document.querySelector(":root");
        root.style.setProperty("--main-color", "##FFF");
        root.style.setProperty("--text-color", "#000");
        setTimeout(function(){ 
            document.getElementById("discord").src = "media/discord_black.png";
            document.getElementById("github").src = "media/github_black.png";
            document.getElementById("email").src = "media/email_black.png";
        }, 1); 
        theme = 0;
        localStorage.setItem("theme", 1);
        console.log(theme);
    }
}

var theme = 0;
if(!localStorage.getItem("theme")) {
    localStorage.setItem("theme", 0);
    theme = localStorage.getItem("theme");
    change_theme();
}
else{
    theme = localStorage.getItem("theme");
    change_theme();
}
