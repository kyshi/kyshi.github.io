var is_changed = 0;
function change_theme(){
    is_changed += 1

    if(is_changed == 0){
        var root = document.querySelector(":root"); 
        root.style.setProperty("--main-color", "#222831");
        root.style.setProperty("--text-color", "#FFF");
    }else if(is_changed == 1){
        var root = document.querySelector(":root");
        root.style.setProperty("--main-color", "#1B262C");
        root.style.setProperty("--text-color", "#FFF");
    }
    else{
        var root = document.querySelector(":root");
        root.style.setProperty("--main-color", "#002C40");
        root.style.setProperty("--text-color", "#FFF");
    }

    if(is_changed >= 2){
        is_changed = -1
    }
}