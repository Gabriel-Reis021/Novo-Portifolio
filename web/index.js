botao = document.querySelector('.botao-noturno');
botao.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        botao.innerHTML = '<img src="../img/sun.png" width="30" height="30" alt="">';
       
    } else {
        botao.innerHTML = '<img src="../img/night.png" width="30" height="30" alt="">';
    }
});