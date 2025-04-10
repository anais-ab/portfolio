window.addEventListener("scroll", function(){
    let header = document.querySelector("header")
    if(window.scrollY > 1){
        header.classList.add("scroll-active")
    }
    else {
        header.classList.remove("scroll-active");
    }
})