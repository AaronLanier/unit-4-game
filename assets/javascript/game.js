$(document).ready(function () {

    console.log("test")

    var computerChoice = Math.floor(Math.random() * 120 + 19);



    //wins
    var wins = 0;
    //losses
    var losses = 0;
    //users compounded choices
    var score = 0;

    var j1 = Math.floor(Math.random() * 11 + 1);
    var j2 = Math.floor(Math.random() * 11 + 1);
    var j3 = Math.floor(Math.random() * 11 + 1);
    var j4 = Math.floor(Math.random() * 11 + 1);
    $("#numberText").text("Number: " + computerChoice)
    $("#wins").text("Wins: " + score);
    $("#losses").text("Losses: " + losses);
    $("#yourScore").text("Your score is: " + score);


    function reset() {
        computerChoice = [Math.floor(Math.random() * 120) + 19];
        j1 = Math.floor(Math.random() * 11 + 1);
        j2 = Math.floor(Math.random() * 11 + 1);
        j3 = Math.floor(Math.random() * 11 + 1);
        j4 = Math.floor(Math.random() * 11 + 1);
        score = 0;
        $("#wins").text("Wins: " + wins);
        $("#losses").text("Losses: " + losses);
        $("#yourScore").text("Your score is: " + score);
        $("#numberText").text(computerChoice)
    };


    function win() {
        wins++;
        alert("You win!")
        $("#wins").text("wins: " + wins);
        reset();
    };

    function lose() {
        losses++;
        alert("Loser!")
        $("#losses").text("losses: " + losses)
        reset();
    }

    $("#jewelOne").click(function () {
        score = score + j1;
        console.log("Your score is: " + score);
        $("#yourScore").text("Your score is: " + score);

        if (score == computerChoice) {
            win();
        }
        else if (score > computerChoice) {
            lose();
        }
    });


    $("#jewelTwo").click(function () {
        score = score + j2;
        console.log("Your score is: " + score);
        $("#yourScore").text("Your score is: " + score);

        if (score == computerChoice) {
            win();
        }
        else if (score > computerChoice) {
            lose();
        }
    });


    $("#jewelThree").click(function () {
        score = score + j3;
        console.log("Your score is: " + score);
        $("#yourScore").text("Your score is: " + score);

        if (score == computerChoice) {
            win();
        }
        else if (score > computerChoice) {
            lose();
        }
    });


    $("#jewelFour").click(function () {
        score = score + j4;
        console.log("Your score is: " + score);
        $("#yourScore").text("Your score is: " + score);

        if (score == computerChoice) {
            win();
        }
        else if (score > computerChoice) {
            lose();
        }
    });



});