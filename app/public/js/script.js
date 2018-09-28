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
        $("#match-image").height(250);
        $("#match-image").height(250);

    });



    $("#resultsModal").modal("show");
  })