const hamburger = document.getElementById('hamburger')

const navBar = document.querySelector('.nav-mod')

hamburger.addEventListener('click', ()=>{
    navBar.classList.toggle('show')
})