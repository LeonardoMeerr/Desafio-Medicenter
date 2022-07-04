document.querySelector('.menuMobile').addEventListener('click', ()=>{
    let menuArea = document.querySelector(".menu nav ul");

    if (menuArea.style.display == 'block') {
        menuArea.style.display = 'none';
    } else {
        menuArea.style.display = 'block';
    }
});