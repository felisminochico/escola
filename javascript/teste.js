let mudarMenu = false;

function Menu(){
    mudarMenu = !mudarMenu;

    if(mudarMenu == true){
        window.document.getElementById('menu-telefone').style.minHeight = '180px';
        window.document.getElementById('btn-menu').style.transform = 'translateX(-600px)';
        window.document.getElementById('menus-telefone').style.transform = 'translate(0px, -35px)';
        window.document.getElementsByTagName('main')[0].style.filter = 'blur(1.7px)';
    }else if(mudarMenu == false){
        window.document.getElementById('menu-telefone').style.minHeight = '58px';
        window.document.getElementById('btn-menu').style.transform = 'translateX(0px)';
        window.document.getElementById('menus-telefone').style.transform = 'translate(-700px, 35px)';
        window.document.getElementsByTagName('main')[0].style.filter = 'none';
    }
}

function fecharMenu(){
    mudarMenu = !mudarMenu;

    if(mudarMenu == true){
        window.document.getElementById('menu-telefone').style.minHeight = '58px';
        window.document.getElementById('btn-menu').style.transform = 'translateX(0px)';
        window.document.getElementById('menus-telefone').style.transform = 'translate(-700px, 35px)';
        // window.document.getElementsByTagName('main')[0].style.filter = 'none';
    }else if(mudarMenu == false){
        window.document.getElementById('menu-telefone').style.minHeight = '58px';
        window.document.getElementById('btn-menu').style.transform = 'translateX(0px)';
        window.document.getElementById('menus-telefone').style.transform = 'translate(-700px, 35px)';
        window.document.getElementsByTagName('main')[0].style.filter = 'none';
    }
}

function mudarTamanho(){
    mudarMenu = !mudarMenu;

    if(mudarMenu == true){
        window.document.getElementById('menu-telefone').style.minHeight = '58px';
        window.document.getElementById('btn-menu').style.transform = 'translateX(0px)';
        window.document.getElementById('menus-telefone').style.transform = 'translate(-700px, 35px)';
        window.document.getElementsByTagName('main')[0].style.filter = 'none'; 
    }else if(mudarMenu == false){
        window.document.getElementById('menu-telefone').style.minHeight = '58px';
        window.document.getElementById('btn-menu').style.transform = 'translateX(0px)';
        window.document.getElementById('menus-telefone').style.transform = 'translate(-700px, 35px)';
        window.document.getElementsByTagName('main')[0].style.filter = 'none';
    }
}





