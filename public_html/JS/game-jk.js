function game() {
    options(game_start);
}

function options(hola)
{
    if (hola === look1_1 || hola === forwardB) {
        var gg = prompt(hola[0]);
        switch (gg) {
            case "1":
                return options(xroadsL);
            case "2":
                return options(xroadsR);
            case "3":
                return options(xroadsF);
            case "4":
                return options(xroadsB);
            default:
                return options(hola);
        }
    }
    if (hola.length > 1) {
        var ggwp = prompt(hola[0]);
        switch (ggwp)
        {
            case "1":
                return options(hola[1]);
            case "2":
                return options(hola[2]);
            case "3":
                if (hola[3] === undefined) {
                    return options(hola);
                } else {
                    return options(hola[3]);
                }
            case "4":
                if (hola[4] === undefined) {
                    return options(hola);
                } else {
                    return options(hola[4]);
                }
            default:
                return options(hola);
        }
    } else {
        alert(hola[0]);
    }
}

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
var options_scratch = "\n - [1] OH YEAH\n - [2] NAH, DON'T THINK SO";

var sitcry = ["You have cried and cried until something weird appeared before you and ate you. Game over!"];
var look2 = ["You have entered deeper, dark forest and you don't even know how, but your limbs got torn apart and you were gone in split second. \n :/ Too bad"];
var ghost3 = ["You ignored the ghost, got forced to go to car .. very sad .. because of no pants and left crying."];
var ghost2 = ["Yeah, that got me speechless. It hit you back with force of 100 hippos. You are dead!"];
var ghost1 = ["You spoke to ghost and you received your long lost pants, then got forced into car and left happy =) \n WITH PANTS!!!"];
var car2 = ["Because you disregarded best option ever available, elephant sized hawk came and took you to her nest. Nobody knows what happend after."];
var car1 = ["You got inside and drove to safety and lived happily ever after :) \n Good job."];
var forward1 = ["And you died. Game over!"];
var sit1_1 = ["You screaming, you die. Game over!"];
var sit2_2 = ["If so, game over!"];
var sit1_2_1 = ["You gotta be kidding me .. another dumb decision\n Game over!"];
var forwardB = ["You are back to crossroads!\n" + options_xroads];
var xroadsF = ["There is a monstroooooous portal!!! Do you ??\n " + options_villageforward, forward1, forwardB];
var look4 = ["You approached ghost carefully. What do you do?" + options_ghost, ghost1, ghost2, ghost3];
var look3 = ["You got closer to the car, there are keys inside and car is running. What do you do now? \n" + optionscar, car1, car2];
var look1_1 = ["You got to crossroads. Where do you go now? \n" + options_xroads];
var xroadsB = ["You went back. You see \n" + options_look, look1_1, look2, look3, look4];
var xroadsR = ["SEA BITCH. Where now?\n " + options_villageright, xroadsF, sitcry, xroadsB];
var xroadsL = ["There is a blockade, you can only go back I'm afraid\n " + options_village1, xroadsR, xroadsF, xroadsB];
var look1 = ["You got to crossroads. Where do you go now?\n " + options_xroads, xroadsL, xroadsR, xroadsF, xroadsB];
var forward2 = ["You are back where you woke up!!! Try again\n" + options_look, look1, look2, look3, look4];
var sit1_2_2 = ["Finally something promising!! You can see " + options_look + "WHERE DO YOU HEAD?", look1, look2, look3, look4];
var sit1_2 = ["Then don't do this stupid stuff, so what do you do?" + options_stupid2, sit1_2_1, sit1_2_2];
var sit2_1 = ["You see \n" + options_look, look1, look2, look3, look4];
var sit3 = ["Good idea! You can see \n" + options_look + "Where do you head?", look1, look2, look3, look4];
var sit2 = ["You scratched and got brilliant idea to look around, right, right?? " + options_scratch, sit2_1, sit2_2];
var sit1 = ["Why would you scream??? You stupid?" + options_stupid + "\n\n" + "1 or 2?", sit1_1, sit1_2];
var game_start = ["You woke up in a forest without pants. What do you do?" + "\n" + options_user + "\n\n" + "1, 2 or 3?", sit1, sit2, sit3];