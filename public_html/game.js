/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$('.center').click(function game() {
    var user = prompt("Where do you want to go? NORTH, WEST, EAST, SOUTH?").toUpperCase();
    switch (user) {
        case 'NORTH':
            console.log("Nothing there!");
            break;
        case 'SOUTH':
            console.log("Nothing there either");
            break;
        case 'EAST':
            var east = prompt("You really want to go east??? YES or NO").toUpperCase();
            if (east === "YES") {
                var eastt = prompt("Surely east??").toUpperCase();
                if (east === "YES" && eastt === "YES") {
                    console.log("Wow, going east ...");
                } else
                    ("Gtfo...");
            } else
                ("Gtfo!");
            break;
        case 'WEST':
            var west = prompt("You want to go west for sure? YES or NO?").toUpperCase();
            if (west === "YES") {
                console.log("WEST BEST BRO!");
                var westt = prompt("I think you are making right choice! YES or NO?").toUpperCase();
                if (west === "YES" || westt === "YES") {
                    console.log("Lucky you!");
                }
            } else
                ("Baaaaah!");
            break;
        default:
            console.log("Game over!");
            break;
    }
});

