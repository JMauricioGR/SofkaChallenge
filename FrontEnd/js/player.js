

function getAllPlayers(){
    $.ajax({
        url:"http://localhost:8080/api/player/all",
        type: 'GET',
        contentType: "application/JSON",

        success: function(respuesta){
            console.log(respuesta);

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
                alert("Jugador creado, datos: " + respuesta);
            },
            error(xhr, status){
                console.log("No se pudo crear el jugador: " + status);
                alert("No se pudo crear el jugador: " + status);
            }
        });
}

