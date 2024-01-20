let mudarMenu = false;


function Menu(){
    mudarMenu = !mudarMenu;

    if(mudarMenu == true){
        window.document.getElementsByTagName('nav')[0].style.height = '158px';
        window.document.getElementById('menus').style.marginLeft = '0px';
        window.document.getElementById('menu-telefone').style.marginTop = '-20px';
        window.document.getElementById('icon').style.textAlign = 'end';
        window.document.getElementById('menu').style.marginLeft = '-200px'
        window.document.getElementsByTagName('main')[0].style.filter = 'blur(1px)';
    }else if(mudarMenu == false){
        window.document.getElementById('menu').style.marginLeft = '0px';
        window.document.getElementById('menus').style.marginLeft = '-200px';
        window.document.getElementById('menus').style.marginTop = '20px';
        window.document.getElementById('icon').style.textAlign = 'start';
        window.document.getElementsByTagName('nav')[0].style.height = '20px'
        window.document.getElementsByTagName('main')[0].style.filter = 'blur(0px)';
    }
}

function fecharMenu(){
    // mudarMenu = !mudarMenu

    if(window.document.body.style.width <= 600 && mudarMenu == true){
        window.document.getElementById('menu').style.marginLeft = '0px';
        window.document.getElementById('menus').style.marginLeft = '-400px';
        window.document.getElementById('menus').style.marginTop = '20px';
        window.document.getElementById('icon').style.textAlign = 'start';
        window.document.getElementsByTagName('nav')[0].style.height = '20px'
        window.document.getElementsByTagName('main')[0].style.filter = 'blur(0px)';
    }
}

function mudarTamanho(){

    // if(window.document.body.style.width >= 601 && mudarMenu == false){
    //     window.document.getElementsByTagName('nav')[0].style.height = '20px'
    //     window.document.getElementById('menus').style.display = 'flex';
    //     window.document.getElementById('menus').style.columnGap = '22px';
    //     window.document.getElementById('menus').style.paddingTop = '30px';
    //     window.document.getElementById('menu').style.display = 'none';
    //     window.document.getElementById('icon').style.display = 'none';
    // }
}





