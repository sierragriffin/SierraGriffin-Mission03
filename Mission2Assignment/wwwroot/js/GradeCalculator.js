//Javascript using jQuery selectors
//logic for the grade calculator


$("#btnSend").click(function () {
//$("#submit").click(function () {
    //calculation for final grade percentage
    var finalPercentage = (($("#assignmentPercent").val() * .55)
        + ($("#groupProjPercent").val() * .05)
        + ($("#quizPercent").val() * .10)
        + ($("#examPercent").val() * .20)
        + ($("#intexPercent").val() * .10));

    //calculation for final letter grade
    var finalLetterGrade = ""
    if (finalPercentage >= 94) {
        finalLetterGrade = "A"
    }
    else if (finalPercentage >= 90 && finalPercentage < 94) {
        finalLetterGrade = "A-"
    }
    else if (finalPercentage >= 87 && finalPercentage < 90) {
        finalLetterGrade = "B+"
    }
    else if (finalPercentage >= 84 && finalPercentage < 87) {
        finalLetterGrade = "B"
    }
    else if (finalPercentage >= 80 && finalPercentage < 84) {
        finalLetterGrade = "B-"
    }
    else if (finalPercentage >= 77 && finalPercentage < 80) {
        finalLetterGrade = "C+"
    }
    else if (finalPercentage >= 74 && finalPercentage < 77) {
        finalLetterGrade = "C"
    }
    else if (finalPercentage >= 70 && finalPercentage < 74) {
        finalLetterGrade = "C-"
    }
    else if (finalPercentage >= 67 && finalPercentage < 70) {
        finalLetterGrade = "D+"
    }
    else if (finalPercentage >= 64 && finalPercentage < 67) {
        finalLetterGrade = "D"
    }
    else if (finalPercentage >= 60 && finalPercentage < 64) {
        finalLetterGrade = "D-"
    }
    else {
        finalLetterGrade = "E"
    }

    //output to user
    alert("Final Grade Percentage: " + finalPercentage.toFixed(2) + "%\nFinal Letter Grade: " + finalLetterGrade)
}) 

