//$(document).ready(function() {
//    $('.test').draggable();
//});

$(document).ready(function() {
    $('.center').click(function() {
        game();
    });
});

function game() {
    var options_user = "\n - [1] SCREAM\n\ - [2] SCRATCH YOUR BALLS\n\ - [3] LOOK AROUND";
    var options_stupid = "\n - [1] YES\n - [2] NO";
    var options_stupid2 = "\n - [1] SCRATCH ...\n\ - [2] LOOK AROUND";
    var options_look = "\n\ - [1] ENTRANCE TO VILLAGE\n\ - [2] DEEPER FOREST PATH\n\ - [3] RUNNING CAR\n\ - [4] GHOST\n\n\ ";
    var options_xroads = "\n\ - [1] LEFT\n\ - [2] RIGHT\n\ - [3] FORWARD\n\ - [4] BACK";
    var options_village1 = "\n\ - [1] RIGHT\n\ - [2] FORWARD\n\ - [3] BACK";
    var options_villageright = "\n\ - [1] FORWARD\n\ - [2] SIT DOWN AND CRY\n\ - [3] BACK";
    var options_villageforward = "\n\ - [1] ENTER\n - [2] GO BACK";
    var optionscar = "\n - [1] ENTER AND DRIVE\n - [2] DISREGARD THE CAR";
    var options_ghost = "\n - [1] SPEAK TO IT\n - [2] TRY TO HIT IT HARD\n - [3] DISREGARD THE GHOST";
    var options_scratch ="\n - [1] OH YEAH\n - [2] NAH, DON'T THINK SO";
    
    var user = prompt("You woke up in a forest without pants. What do you do?" + "\n" + options_user + "\n\n" + "1, 2 or 3?");
    switch (user) {
        case "1":
            var scream1 = prompt("Why would you scream??? You stupid?" + options_stupid + "\n\n" + "1,2 or 3?");
            if (scream1 === "1") {
                alert("Stupid & screaming? Game over for you, son!");
            } else {
                var scream2 = prompt("Then don't do this stupid stuff, so what do you do?" + options_stupid2);
            }
                switch (scream2) {
                    case "1":
                        alert("You gotta be kidding me .. another dumb decision\n\ Game over!");
                        break;
                    case "2":
                        var look = prompt("Finally something promising!! You can see" + options_look + "WHERE DO YOU HEAD?");
                        switch (look) {
                            case "1":
                                var village = prompt("You are at crossroads. Where do you go?" + options_xroads);
                                switch (village) {
                                    case "1":
                                        var left = prompt("There is blockade, you can only go back I'm afraid!\n\ - [1] BACK");
                                        switch (left) {
                                            case "1":
                                                var village1 = prompt("Back to crossroads." + options_village1);
                                                switch (village1) {
                                                    case "1":
                                                        var right = prompt("SEA BITCH. Where do you go from crossroads now?" + options_villageright);
                                                        switch (right) {
                                                            case "1":
                                                                var forward = prompt("There is monstrous portal! Do you?" + options_villageforward);
                                                                switch (forward) {
                                                                    case "1":
                                                                        alert("And you died. Peace!");
                                                                        break;
                                                                    case "2":
                                                                        switch(village) {
                                                                            case "2":
                                                                                switch(right) {
                                                                                    case "2":
                                                                                        alert("You have cried and cried until something weird appeared before you and ate you. Game over!");
                                                                                        break;
                                                                                    case "3":
                                                                                        switch(look) {
                                                                                            case "2":
                                                                                                alert("You have entered deeper, dark forest and you don't even know how, but your limbs got torn apart and you were gone in split second :/");
                                                                                                break;
                                                                                        }
                                                                                }
                                                                        }
                                                                }
                                                        }
                                                }
                                        }
                                }
                            case "3":
                                var car = prompt("What do you do now? There are keys inside and car is running?" + optionscar);
                                switch(car) {
                                    case "1":
                                        alert("You entered the car and drove to safety and lived happily ever after :)");
                                        break;
                                    case "2":
                                        alert("Because the car is great invention and you disregarded that option, elephant sized hawk came and took you to her nest. Nobody knows what happend after");
                                        break;
                                }
                            case "4":
                                var ghost = prompt("You approached ghost carefully. What do you do?" + options_ghost);
                                switch (ghost) {
                                    case "1":
                                        alert("You spoke to the ghost and you received your long lost pants, you entered car and left happy =)");
                                        break;
                                    case "2":
                                        alert("Yeah, that got me speechless. It hit you back with force of 100 hippos. You died!");
                                        break;
                                    case "3":
                                        alert("You disregarded the ghost, got to car very sad, because you still have no pants and you left.");
                                        break;
                                }
                        }
                }
            break;
        case "2":
            var scratch = prompt("You scratched and got brilliant idea to look around, right???" + options_scratch);
            switch (scratch) {
                case "1":
                    look;
                    break;
                case "2":
                    alert("If so, game over!");
                    break;
            }
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

