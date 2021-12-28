

function saveOption(idQuest, optVal, valiVal) {

    let idQuestionVal = idQuest,
        optionVal = optVal,
        validateVal = valiVal,
        sendInfo = {
            idquestion: idQuestionVal,
            option: optionVal,
            validate: validateVal
        };
    let datajson = JSON.stringify(sendInfo);

    $.ajax({
        url: "http://150.136.122.75:8080/api/options/new",
        type: "POST",
        contentType: "application/JSON",
        data: datajson,
        success: function (respuesta) {
            console.log("Respuesta creada, datos: " + respuesta);
        },
        error(xhr, status) {
            console.log("No se pudo crear la opción: " + status);
        }
    });
}

function getOptionsByIdQuestion(id, level) {
    let levelNum = level;
    $.ajax({
        url: "http://150.136.122.75:8080/api/options/" + id,
        type: 'GET',
        contentType: "application/JSON",

        success: function (respuesta) {

            console.log(respuesta);
            listOptions(respuesta, levelNum);
        },
        error: function (xhr, status) {
            console.log("Error al consultar las opciones " + status);
        }
    });
}

function listOptions(items, ronda) {
    let htmlInsert = '';

    for (let i = 0; i < items.length; i++) {
        htmlInsert += `<div class="row mb-1">
                            <div class="input-group input-group-sm mb-2">
                                <div class="input-group-text input-group-sm">
                                    <select class="form-select form-select-sm" aria-label="Default select example" id="opt-slc${ronda}-${i}">
                                        <option selected value="false">Incorrecta</option>
                                        <option value="${items[i].option}">Correcta</option>
                                    </select>
                                </div>
                                <textarea class="form-control " disabled>${items[i].option}"</textarea>
                            </div>
                        </div>`;
        if (items[i].validate == true){
            sessionStorage.setItem('optionValidate', items[i].option);
        }
    }
    if (ronda == 1) {
        $('#opciones-r1').html(htmlInsert)
    } else if (ronda == 2) {
        $('#opciones-r2').html(htmlInsert)
    } else if (ronda == 3) {
        $('#opciones-r3').html(htmlInsert)
    } else if (ronda == 4) {
        $('#opciones-r4').html(htmlInsert)
    }else if(ronda == 5){
        $('#opciones-r5').html(htmlInsert)
    }
}


function selectedOption(id){
    
    let idSelected0 = "opt-slc"+id+"-0",
        idSelected1 = "opt-slc"+id+"-1",
        idSelected2 = "opt-slc"+id+"-2",
        idSelected3 = "opt-slc"+id+"-3",
        elemId0 = document.getElementById(idSelected0),
        elemId1 = document.getElementById(idSelected1),
        elemId2 = document.getElementById(idSelected2),
        elemId3 = document.getElementById(idSelected3),
        option0 = elemId0.options[elemId0.selectedIndex],
        option1 = elemId1.options[elemId1.selectedIndex],
        option2 = elemId2.options[elemId2.selectedIndex],
        option3 = elemId3.options[elemId3.selectedIndex];

    console.log(option0.value);
    console.log(option1.value);
    console.log(option2.value);
    console.log(option3.value);

    sessionStorage.setItem('globalPrize', 0);

    if (option0.value != "false"){
        if(option0.value == sessionStorage.getItem('optionValidate')){
            getQuestionByLevel(id+1);
            gameControl(id);
            points();
        } else {
            alert('Lo sentimos has perdido :(');
            sessionStorage.clear();
            location.reload();
        }
    } else if(option1.value != "false"){
        if(option1.value == sessionStorage.getItem('optionValidate')){
            getQuestionByLevel(id+1);
            gameControl(id);
            points();
        } else {
            alert('Lo sentimos has perdido :(');
            sessionStorage.clear();
            location.reload();
        }
    } else if(option2.value != "false"){
        if(option2.value == sessionStorage.getItem('optionValidate')){
            getQuestionByLevel(id+1);
            gameControl(id);
            points();
        } else {
            alert('Lo sentimos has perdido :(');
            sessionStorage.clear();
            location.reload();
        }
    } else if(option3.value != "false"){
        if(option3.value == sessionStorage.getItem('optionValidate')){
            getQuestionByLevel(id+1);
            gameControl(id);
            points();
        } else {
            alert('Lo sentimos has perdido :(');
            sessionStorage.clear();
            location.reload();
        }
    } 
}