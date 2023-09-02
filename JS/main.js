let navBar_toggler = document.querySelector(".navbar-toggler");
navBar_toggler.all
navBar_toggler.addEventListener("click", function() {changeFigure(this)});
function changeFigure(btn) {
    if (btn.ariaExpanded == "true") {
        btn.classList.add("change");
    } else {
        btn.classList.remove("change");
    }
}

window.addEventListener("scroll", function() {changeNavAndAnimation(this)});
function changeNavAndAnimation(window) {
    let windowTopPosition = window.scrollY;

    // Navbar change
    let navbar = document.querySelector(".navbar");
    if(windowTopPosition >= 200) {
        navbar.classList.add("navbar-scroll");
    } else {
        navbar.classList.remove("navbar-scroll");
    }

    // Awards animation
    let awardsText = document.querySelector(".awards-text");
    let awardsImage = document.querySelector(".awards-img");
    if(windowTopPosition >= 600) {
        awardsText.classList.add("awards-text-anim");
        awardsImage.classList.add("awards-img-anim");
    } else {
        awardsText.classList.remove("awards-text-anim");
        awardsImage.classList.remove("awards-img-anim");
    }

    // Plans animation
    let card1 = document.querySelector(".card-1");
    let card2 = document.querySelector(".card-2");
    let card3 = document.querySelector(".card-3");
    if(windowTopPosition >= 3800) {
        card1.classList.add("card-1-anim");
        card2.classList.add("card-2-anim");
        card3.classList.add("card-3-anim");
    } else {
        card1.classList.remove("card-1-anim");
        card2.classList.remove("card-2-anim");
        card3.classList.remove("card-3-anim");
    }
}

let galleryCategories = document.querySelectorAll(".list-inline-item");
galleryCategories.forEach(galleryCategory => {
    galleryCategory.firstElementChild.addEventListener("click", function() {showCategory(this, this.dataset.target)})
}); 
function showCategory(btn, dataTarget) {
    document.querySelector(".active-btn").classList.remove("active-btn");
    btn.classList.add("active-btn")
    let unShownImages = document.querySelectorAll(".categ-all");
    unShownImages.forEach(value => {
        value.style.display = "none";
    })

    let shownImages = document.querySelectorAll("." + dataTarget);
    shownImages.forEach(value => {
        value.style.display = "block";
    })
}