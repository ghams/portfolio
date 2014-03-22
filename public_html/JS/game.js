//$(document).ready(function() {
//    $('.test').draggable();
//});

$(document).ready(function() {
    $('.center').click(function() {
        game();
    });
});

function game() {
    var options1 = "\n - [1] SCREAM\n\ - [2] SCRATCH YOUR BALLS\n\ - [3] LOOK AROUND";

    var options2 = "\n - [1] YES\n - [2] NO";
    var options3 = "";
    var options4 = "";
    var user = prompt("You woke up in a forest without pants. What do you do?" + "\n" + options1 + "\n\n" + "1, 2 or 3?");

    switch (user) {
        case "1":
            var scream1 = prompt("Why would you scream??? You stupid?" + options2 + "\n\n" + "1,2 or 3?");
            if (scream1 === "1") {

            }
            //alert("Why would you scream???");
            break;
        case "2":
            alert();
            break;
        case "3":
            alert();
            break;
        default:
            alert("Try again!");
            break;
    }
}
//function game() {
//    var user = prompt("Where do you want to go? NORTH, WEST, EAST, SOUTH?").toUpperCase();
//    switch (user) {
//        case "NORTH":
//            alert("Nothing there!");
//            break;
//        case 'SOUTH':
//            alert("Nothing there either");
//            break;
//        case 'EAST':
//            var east = prompt("You really want to go east??? YES or NO").toUpperCase();
//            if (east === "YES") {
//                var eastt = prompt("Surely east??").toUpperCase();
//                if (east === "YES" && eastt === "YES") {
//                    alert("Wow, going east ...");
//                } else
//                    alert("You wrote some shit after 2 yeses");
//            } else
//                alert("You wrote some shit after first yes");
//            break;
//        case 'WEST':
//            var west = prompt("You want to go west for sure? YES or NO?").toUpperCase();
//            if (west === "YES") {
//                alert("WEST BEST BRO!");
//                var westt = prompt("I think you are making right choice! YES or NO?").toUpperCase();
//                if (west === "YES" || westt === "YES") {
//                    alert("Lucky you!");
//                }
//            } else
//                alert("Baaaaah!");
//            break;
//        default:
//            alert("Game over!");
//            break;
//    }
//}

