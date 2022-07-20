const header = document.querySelector("header");
const hamburger = document.querySelector(".hamb-on");
const navLinks = document.querySelector(".nav-links");
let hamburguerOpen = false;

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky", window.scrollY>0);
})

hamburger.addEventListener("click", function(){
    if(!hamburguerOpen){
        navLinks.classList.toggle("show-navlinks");
        hamburger.classList.toggle("hamb-off")
    } else{
        navLinks.classList.remove("show-navlinks");
        hamburger.classList.remove("hamb-off")
        hamburguerOpen = false;

    }
})


// galleryfilter

 const btns = document.querySelectorAll('.buttons button')
 const imgs = document.querySelectorAll('.images img')

 for(let i=1; i < btns.length; i++) {
    btns[i].addEventListener('click', filterImg)
 }

 function setActiveBtn(e){
    btns.forEach(btn => {
      btn.classList.remove('btn-clicked')
    })

    e.target.classList.add('btn-clicked')

 }

 function filterImg(e){
        setActiveBtn(e)

        imgs.forEach(img => {
            img.classList.remove('img-shrink')
            img.classList.add('img-expand')

            const imgType = parseInt(img.dataset.img)
            const btnType = parseInt(e.target.dataset.btn)

            if(imgType !== btnType) {
                img.classList.remove('img-expand')
                img.classList.add('img-shrink')
            }

        });
}

btns[0].addEventListener('click', (e) => {
    setActiveBtn(e)
    imgs.forEach(img => {
        img.classList.remove('img-shrink')
        img.classList.add('img-expanded')

    })
})


// sendemail

