function game() {
    var user = prompt("Where do you want to go? NORTH, WEST, EAST, SOUTH?").toUpperCase();
    switch (user) {
        case "NORTH":
            alert("Nothing there!");
            break;
        case 'SOUTH':
            alert("Nothing there either");
            break;
        case 'EAST':
            var east = prompt("You really want to go east??? YES or NO").toUpperCase();
            if (east === "YES") {
                var eastt = prompt("Surely east??").toUpperCase();
                if (east === "YES" && eastt === "YES") {
                    alert("Wow, going east ...");
                } else
                    alert("You wrote some shit after 2 yeses");
            } else
                alert("You wrote some shit after first yes");
            break;
        case 'WEST':
            var west = prompt("You want to go west for sure? YES or NO?").toUpperCase();
            if (west === "YES") {
                alert("WEST BEST BRO!");
                var westt = prompt("I think you are making right choice! YES or NO?").toUpperCase();
                if (west === "YES" || westt === "YES") {
                    alert("Lucky you!");
                }
            } else
                alert("Baaaaah!");
            break;
        default:
            alert("Game over!");
            break;
    }
}

//$(document).ready(function() {
//    $('.center').click(function(game) {
//
//    }
//    );
//});
