(function () {
    let result = Math.floor((Math.random() * 20) + 1);
    let attemps = 0;
    let html_input_entries = document.querySelector("#kick");
    let html_result_text_update = document.querySelector("#status");
    let html_text_attemps = document.querySelector("#attemp");

    function test() {

        if (html_input_entries.value == result) {
            html_result_text_update.innerHTML = "Acertou, viado! Ta passada?";

        } else {
            html_result_text_update.innerHTML = "Tenta novamente, raimundão";
            attemps++;
            html_text_attemps.innerHTML = `Tentativas: ${attemps}`;
            html_input_entries.value = 0;
        }

    }

    function reset_test() {
        attemps = 0;
        html_input_entries.value = 0;
        html_result_text_update.innerHTML = "Advinha o número";
        html_text_attemps.innerHTML = `Tentativas: ${attemps}`;
        result = Math.floor((Math.random() * 20) + 1);
    }



    reset = reset_test;
    verification = test;

})()