const botao = document.querySelector('.botao-noturno');
botao.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        botao.innerHTML = '<img src="../img/sun.png" width="30" height="30" alt="">';
        
    } else {
        botao.innerHTML = '<img src="../img/night.png" width="30" height="30" alt="">';
    }
});

const menuMobile = document.querySelector('.header-menu-mobile');
const menu = document.querySelector('.header-menu');

menuMobile.addEventListener('click', () => {
    menu.classList.toggle('active');


    if (menu.classList.contains('active')) {
        menuMobile.innerHTML = '<ion-icon name="close-outline"></ion-icon>';
        menu.style.display = 'flex';
        menu.style.flexDirection = 'column';
        
    } else {
        menuMobile.innerHTML = '<ion-icon name="reorder-three-outline"></ion-icon>';
        menu.style.display = 'none';
        menu.style.flexDirection = 'row';

    }
});