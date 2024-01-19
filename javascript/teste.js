// alert('Olá, Mundo!');

// let divMenu = window.document.getElementsByTagName('div')[0];
// let divIcon = window.document.getElementById('icon');
// let divHome = window.document.querySelector('div#home');
// let divTerreno = window.document.getElementById('terreno');
// let divNoticias = window.document.getElementById('noticias');
// let divAjuda = window.document.getElementById('ajuda');

let mudar = 0

function Menu(){
    mudar = 0
    if(mudar == 0){
        window.document.getElementsByTagName('nav')[0].style.height = '158px';
        window.document.getElementById('menu').style.marginLeft = '-100px';
        window.document.getElementById('menu').style.transitionDuration = '1.2s';
        window.document.getElementById('menus').style.display = 'flex';
        window.document.getElementById('menus').style.marginLeft = '0px';
        window.document.getElementById('menus').style.marginTop = '-20px'; 
        window.document.getElementById('menus').style.transitionDuration = '1.2s';
        window.document.getElementById('icon').style.display = 'block'; 
        window.document.getElementById('icon').style.transitionDuration = '1.2s'; 

    }
}

function fecharMenu(){
    mudar = 1
        if(mudar == 1){
            window.document.getElementsByTagName('nav')[0].style.height = '20px';
            window.document.getElementById('menu').style.marginLeft = '0px';
            window.document.getElementById('menu').style.transitionDuration = '1.2s';
            window.document.getElementById('menus').style.marginLeft = '-200px';
            window.document.getElementById('icon').style.display = 'none';
        }
}

// function voltarMenu(){
//     window.document.getElementById('menu').style.display = 'none';
//     window.document.getElementById('menus').style.display = 'flex';
// }