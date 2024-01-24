function Menu(){
    window.document.getElementById('links-cabecalho').style.left = '0px';
    window.document.getElementById('imagem-cabecalho').style.filter = 'blur(1px)';
    window.document.getElementById('btn-menu').style.filter = 'blur(1px)';
    window.document.getElementsByTagName('main')[0].style.filter = 'blur(1.5px)';
    window.document.getElementsByTagName('footer')[0].style.filter = 'blur(1.5px)';
}

function fecharMenu(){
    window.document.getElementById('links-cabecalho').style.left = '-300px';
    window.document.getElementById('imagem-cabecalho').style.filter = 'none';
    window.document.getElementById('btn-menu').style.filter = 'none';
    window.document.getElementsByTagName('main')[0].style.filter = 'none';
    window.document.getElementsByTagName('footer')[0].style.filter = 'none';
}

function opacidadeImagem(){
    window.document.getElementsByTagName('span')[0].style.transition = 'opacity 1.5s';
}





