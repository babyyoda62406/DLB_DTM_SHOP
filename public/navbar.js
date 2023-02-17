const navbar = document.getElementById("navbar")
const flipTranslate = () => {
    navbar.style.opacity = "1"
    document.getElementById('navDTM').classList.toggle('translatex')
    document.getElementById('search').classList.toggle('translateIx')
    document.getElementById('name').classList.toggle('translateIx')
    document.getElementById('close').classList.toggle('dNone')
    document.getElementById('close').classList.toggle('translatex')
    document.getElementById('open').classList.toggle('translatex')
}


let scroll = 0

$(window).scroll(function() {
    console.log(navbar)
    if ($(this).scrollTop() > scroll ) {
        navbar.style.opacity = "0.7"
    } else {
        navbar.style.opacity = "1"
    }
    scroll = $(this).scrollTop()
})