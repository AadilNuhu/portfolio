let menulist = document.getElementById("menulist")
menulist.style.maxHeight = "0px"
function togglemenu(){
    if(menulist.style.maxHeight == "0px"){
        menulist.style.maxHeight = "100%";
    }
    else{
        menulist.style.maxHeight = "0px";
    }
}