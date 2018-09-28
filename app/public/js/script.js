$("#submit").on( "click", function() {
    event.preventDefault();

    var userData = {
        name: $("#nameInput").val(),
        photo: $("#photoInput").val(),
        scores: [$("#q1").val(),
                $("#q2").val(),
                $("#q3").val(),
                $("#q4").val(),
                $("#q5").val(),
                $("#q6").val(),
                $("#q7").val(),
                $("#q8").val(),
                $("#q9").val(),
                $("#q10").val(),
    ]
    }


    $.post("/api/friends", userData,
    function(data) {
        $("#match-name").text(data.name);
        $("#match-image").attr("src", data.photo);
        $("#match-img").height(200);
        $("#match-img").height(200);

    });



    $("#resultsModal").modal({
        show: "true"
    });
  })