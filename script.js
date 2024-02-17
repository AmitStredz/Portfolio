const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 200);
    
    // if(this.window.scrollY > 200){
    //     header.style.width = "90%";
    //     header.style.marginLeft = "5%";
    // }
    // else{
    //     header.style.width = "";
    //     header.style.marginLeft = "";

    // }
});

let menu = document.querySelector('.menu-icon');
let slider = document.querySelector('.slider');
let icon = document.querySelectorAll('.slider li');
menu.onclick = () => {
    // menu.classList.toggle('menu-icon');
    slider.classList.toggle('active');
}

icon.forEach(icons => {
    icons.onclick = () => {
        slider.classList.toggle('active');
    }
})

