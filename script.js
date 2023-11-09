const botonmenu=document.querySelector(".icon-menu");
const listamenu=document.querySelector(".menu ul");
const botonmenurotar=document.querySelector(".icon-menu img");

botonmenu=addEventListener("click",()=>{
    listamenu.classList.toggle("vistamenu");
    botonmenurotar.classList.toggle("rotar");
});

