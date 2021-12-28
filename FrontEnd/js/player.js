$(document).ready(function(){
    getAllPlayers();
})

function getAllPlayers(){
    $.ajax({
        url:"http://localhost:8080/api/player/all",
        type: 'GET',
        contentType: "application/JSON",

        success: function(respuesta){
            console.log(respuesta);
            rankingList(respuesta);
        },
        error: function(xhr, status){
            console.log("Error al consultar las preguntas " + status);
        }
    });
}

function savePlayer( name, prize, level){
    let nameVal = name,
        prizeVal = prize,
        levelVal = level,
        sendInfo = {
            name: nameVal,
            prize: prizeVal,
            level: levelVal
        };
    let datajson = JSON.stringify(sendInfo);

        $.ajax({
            url: "http://localhost:8080/api/player/new",
            type: "POST",
            contentType: "application/JSON",
            data: datajson,
            success: function(respuesta){
                console.log("Jugador creado, datos: " + respuesta);
            },
            error(xhr, status){
                console.log("No se pudo crear el jugador: " + status);
                alert("No se pudo crear el jugador: " + status);
            }
        });
}

function rankingList(items){
    $('#tableContainer').html('');
    
    let table = `<table class="table">
    <tr>
    <th>Nombre</th>
    <th>Último nivel</th>
    <th>Premio</th>
    </tr>
    `
    for (let i = 0; i < items.length; i++) {
        table += `<tr>
        <td>${items[i].name}</td>
        <td>${items[i].level}</td>
        <td>${items[i].prize}</td>
        </tr>`;        
    }
    
    table += `</table>`;
    
    $('#tableContainer').html(table);
    
}