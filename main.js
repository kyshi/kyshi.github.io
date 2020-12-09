var is_changed = 1;
function change_theme(){
    if(is_changed == 0){
        var root = document.querySelector(":root"); 
        root.style.setProperty("--main-color", "#222831");
        root.style.setProperty("--text-color", "#FFF");
        document.getElementById("discord").src = "media/discord_white.png";
        document.getElementById("github").src = "media/github_white.png";
        document.getElementById("email").src = "media/email_white.png";
        is_changed = 1
    }
    else if(is_changed == 1){
        var root = document.querySelector(":root");
        root.style.setProperty("--main-color", "##FFF");
        root.style.setProperty("--text-color", "#000");
        document.getElementById("discord").src = "media/discord_black.png";
        document.getElementById("github").src = "media/github_black.png";
        document.getElementById("email").src = "media/email_black.png";
        is_changed = 0
    }
}