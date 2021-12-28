


function getAllQuestions(){
    $.ajax({
        url:"http://150.136.122.75:8080/api/question/all",
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

function saveQuestion(id){
    let idQuestionVal = id,
        questionVal = $('#input-question').val(),
        prizeVal = $('#input-prize').val(),
        levelVal = $('#input-level').val(),
        sendInfo = {
            idQuestion: idQuestionVal,
            question: questionVal,
            prize: prizeVal,
            level: levelVal
        };
    
    let datajson = JSON.stringify(sendInfo);
    console.log('Los datos de la petición son: ' + datajson);

        $.ajax({
            url: "http://150.136.122.75:8080/api/question/new",
            type: "POST",
            contentType: "application/JSON",
            data: datajson,
            success: function(respuesta){
                console.log("Respuesta creada, datos: " + respuesta[0]);
                
            },
            error(xhr, status){
                console.log("No se pudo crear la pregunta: " + status);
                alert("No se pudo crear la pregunta: " + status);
            }
        });
}

function getLastQuestion(){

    sessionStorage.setItem('idQuestionVal', "");
    $.ajax({
        url:"http://150.136.122.75:8080/api/question/last",
        type: 'GET',
        contentType: "application/JSON",

        success: function(respuesta){
            let response = respuesta[0]['idQuestion'];
            console.log("la última respuesta registrada es " + response);
            sessionStorage.setItem('idQuestionVal', response);
            let param = parseInt( sessionStorage.getItem('idQuestionVal'));
            saveQuestion(param+1);
            
            let idQuestOpt1 = parseInt( sessionStorage.getItem('idQuestionVal'))+1,
                optValOpt1 = $('#opt-txt-1').val(),
                valiValOpt1 = $('#opt-slc-1').val(),
                idQuestOpt2 = parseInt( sessionStorage.getItem('idQuestionVal'))+1,
                optValOpt2 = $('#opt-txt-2').val(),
                valiValOpt2 = $('#opt-slc-2').val(),
                idQuestOpt3 = parseInt( sessionStorage.getItem('idQuestionVal'))+1,
                optValOpt3 = $('#opt-txt-3').val(),
                valiValOpt3 = $('#opt-slc-3').val(),
                idQuestOpt4 = parseInt( sessionStorage.getItem('idQuestionVal'))+1,
                optValOpt4 = $('#opt-txt-4').val(),
                valiValOpt4 = $('#opt-slc-4').val();

            saveOption(idQuestOpt1, optValOpt1, valiValOpt1);
            saveOption(idQuestOpt2, optValOpt2, valiValOpt2);
            saveOption(idQuestOpt3, optValOpt3, valiValOpt3);
            saveOption(idQuestOpt4, optValOpt4, valiValOpt4);
            alert('pregunta registrada correctamente');
            location.reload();
        },
        error: function(xhr, status){
            console.log("Error al consultar las preguntas " + status);
        }
    });
}

function getQuestionByLevel(level){
    let levelScr = level;
    $.ajax({
        url:"http://150.136.122.75:8080/api/question/level/" + level,
        type: 'GET',
        contentType: "application/JSON",

        success: function(respuesta){
            console.log(respuesta);
            let limit = respuesta.length - 1;
            const rndInt = randomIntFromInterval(0, limit);
            console.log(rndInt);
            console.log(respuesta[rndInt]);
            let preguntaHtml = respuesta[rndInt]['question'],
                idQuestionReq = respuesta[rndInt]['idQuestion'],
                prizeReq = respuesta[rndInt]['prize'];
            if (levelScr == 1){
                $('#pregunta-r1').html(preguntaHtml);
            } else if(levelScr == 2){
                $('#pregunta-r2').html(preguntaHtml);
            } else if(levelScr == 3){
                $('#pregunta-r3').html(preguntaHtml);
            } else if(levelScr == 4){
                $('#pregunta-r4').html(preguntaHtml);
            } else if(levelScr == 5){
                $('#pregunta-r5').html(preguntaHtml);
            }
            sessionStorage.setItem('prizeValue', prizeReq);               
            getOptionsByIdQuestion(idQuestionReq, levelScr);
            
        },
        error: function(xhr, status){
            console.log("Error al consultar las preguntas " + status);
        }
    });
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}