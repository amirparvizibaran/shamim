// let more=document.getElementById("more-photos");
// let showP=document.getElementById("showP");
// function showPic(){
//     if (showP.innerHTML=="More Photos") {
//         showP.innerHTML="Close Photos";
//         more.style.display="flex";
//     }
//     else{
//         showP.innerHTML="More Photos";
//         more.style.display="none";
//     }
// }
let flag = true;
$("#showP").click(function(){
    $("#more-photos").slideToggle("fast");
    $("#more-photos").css("display","flex");
    if (flag) {
        $("#showP").text("Close photos");
        flag = false;
    } else {
        $("#showP").text("More photos");
        flag = true;
    };
});