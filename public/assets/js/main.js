function rollEncounters() {

    let morning = Math.floor(Math.random() * 6) + 1;
    let afternoon = Math.floor(Math.random() * 6) + 1;
    let evening = Math.floor(Math.random() * 6) + 1;
    let dusk = Math.floor(Math.random() * 6) + 1;
    let midnight = Math.floor(Math.random() * 6) + 1;
    let predawn = Math.floor(Math.random() * 6) + 1;

    let encounterTimes = [morning, afternoon, evening, dusk, midnight, predawn]
    let encounterStrings = ["Morning", "Afternoon", "Evening", "Dusk", "Midnight", "Pre-dawn"]

    let danger = parseInt($("#danger").val());

    $("#encounters").empty();

    let isEncounter = false;

    let n = 6;
    for (let i = 0; i < n; i++) {
        if (encounterTimes[i] <= danger) {
            isEncounter = true;
            $("#encounters").append(`<p>${encounterStrings[i]} encounter!</p>`)
        }
    }

    if (!isEncounter) {
        $("#encounters").append(`<p>No encounters!</p>`)
    }

}

$("#submit-travel").on("click", function() {

    let newRoute = {
        name: $("#route-name").val(),
        days: $("#days").val(),
        danger: $("#danger").val(),
        navigation: $("#navigation").val(),
        resources: $("#resources").val()
    };
    $.ajax("/api/route", {
        type: "POST",
        data: newRoute
    }).then(
        function (data) {
            console.log(data);
        }
    );

    rollEncounters();
});