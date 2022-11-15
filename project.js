let btn=document.querySelector(".nav-btn");
let flag=true

let btn1=document.querySelector(".nav-btn__line");
let menu=document.querySelector(".menu")
let cover=document.querySelector(".cover")
 

 btn.addEventListener("click" , function(){


    if(flag){
        btn.classList.add("nav-btn--open")
        menu.classList.add("menu--open")
        cover.classList.add("cover--show")
        flag=false;
    }else{
      
        btn.classList.remove("nav-btn--open")
        menu.classList.remove("menu--open")
        cover.classList.remove("cover--show")
        flag=true;
    }
    })


 
