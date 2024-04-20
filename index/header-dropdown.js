const openBtn = document.querySelector('.open-btn');
const navContent = document.querySelector('.navbar');

openBtn.addEventListener('click', () => {
    navContent.classList.toggle('opened');
    openBtn.classList.toggle('opened');    
    openBtn.innerHTML = navContent.classList.contains('opened')? `&#10005;` : `&#x2630;`;
})
