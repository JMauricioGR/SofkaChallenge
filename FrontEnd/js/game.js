
function primeraRonda(){
    let userName = $('#userName').val(),
        regZone = document.querySelector("#register-zone"),
        r1Zone = document.querySelector("#ronda1");
        pointsZone = document.querySelector("#pointsZone");
    
    sessionStorage.setItem('userName', userName);
    
    regZone.classList.remove('visible');
    regZone.classList.add('hide');
    r1Zone.classList.remove('hide');
    r1Zone.classList.add('visible');
    pointsZone.classList.remove('hide');
    pointsZone.classList.add('visible');
}

function segundaRonda(){
    let r2Zone = document.querySelector("#ronda2"),
        r1Zone = document.querySelector("#ronda1");
    
    r1Zone.classList.remove('visible');
    r1Zone.classList.add('hide');
    r2Zone.classList.remove('hide');
    r2Zone.classList.add('visible');
    
}

function terceraRonda(){
    let r2Zone = document.querySelector("#ronda2"),
        r3Zone = document.querySelector("#ronda3");
    
    r2Zone.classList.remove('visible');
    r2Zone.classList.add('hide');
    r3Zone.classList.remove('hide');
    r3Zone.classList.add('visible');
}

function cuartaRonda(){
    let r3Zone = document.querySelector("#ronda3"),
        r4Zone = document.querySelector("#ronda4");
    
    r3Zone.classList.remove('visible');
    r3Zone.classList.add('hide');
    r4Zone.classList.remove('hide');
    r4Zone.classList.add('visible');
}

function quintaRonda(){
    let r5Zone = document.querySelector("#ronda5"),
        r4Zone = document.querySelector("#ronda4");
    
    r4Zone.classList.remove('visible');
    r4Zone.classList.add('hide');
    r5Zone.classList.remove('hide');
    r5Zone.classList.add('visible');
}


function ganarJuego(){
    let r5Zone = document.querySelector("#ronda5"),
        ganarZone = document.querySelector("#ganar");
    
    r5Zone.classList.remove('visible');
    r5Zone.classList.add('hide');
    ganarZone.classList.remove('hide');
    ganarZone.classList.add('visible');
}

function gameControl(id){
    if (id == 1) {
        segundaRonda(id+1);
        sessionStorage.setItem('playerLevel', id+1);
    } else if (id == 2){
        terceraRonda(id+1);
        sessionStorage.setItem('playerLevel', id+1);
    }else if (id == 3){
        cuartaRonda(id+1);
        sessionStorage.setItem('playerLevel', id+1);
    }else if (id == 4){
        quintaRonda(id+1);
        sessionStorage.setItem('playerLevel', id+1);
    }else if (id == 5){
        ganarJuego();
    }
}

function playerEnd(){
    alert('El jugador termina la partida');
    let name = sessionStorage.getItem('userName'),
        prize = sessionStorage.getItem('globalPrize'),
        level = sessionStorage.getItem('playerLevel');

    savePlayer(name, prize, level);
    alert('Gracias por jugar tus puntos fueron: '+ prize +', puedes volver a jugar, te esperamos.');
    location.reload();
}

function points(){
    let gPrize = parseInt($('#userPoints').val());

    gPrize += parseInt(sessionStorage.getItem('prizeValue'));
    sessionStorage.setItem('globalPrize', gPrize);
    $('#userPoints').val(sessionStorage.getItem('globalPrize'));
}