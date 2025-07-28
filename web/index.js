// capturando elemento para criar interação

const botao = document.querySelector('.botao-noturno');

// criando evento de click no botão para alternar entre os modos
botao.addEventListener('click', () => {
// adicionando ou removendo a classe 'dark-mode' do body que ativa o modo noturno e altera o tema do site
    document.body.classList.toggle('dark-mode');

// verificando se o modo noturno está ativo para alterar o ícone do botão
    
    if (document.body.classList.contains('dark-mode')) {
        botao.innerHTML = '<img src="../img/sun.png" width="30" height="30" alt="">';
        
    } else {
        botao.innerHTML = '<img src="../img/night.png" width="30" height="30" alt="">';
    }
});

// capturando elementos do menu para criar interação
// selecionando o menu mobile e o menu principal

const menuMobile = document.querySelector('.header-menu-mobile');
const menu = document.querySelector('.header-menu');

// adicionando evento de click no menu mobile para alternar a visibilidade do menu principal
// e alterar o ícone do menu mobile

menuMobile.addEventListener('click', () => {
    menu.classList.toggle('active');


    if (menu.classList.contains('active') && window.innerWidth <= 570) {
        menuMobile.innerHTML = '<ion-icon name="close-outline"></ion-icon>';
        menu.style.display = 'flex';
        menu.style.flexDirection = 'column';
        
    } else{
        menuMobile.innerHTML = '<ion-icon name="reorder-three-outline"></ion-icon>';
        menu.style.display = 'none';
        menu.style.flexDirection = 'row';

    }
});