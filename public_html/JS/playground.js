$(document).ready(function() {
    $('tr').hover(function() {
        var rnd = Math.round(Math.random() * 9);
        var hue = 'rgb('
            + (Math.floor(Math.random() * 256)) + ','
            + (Math.floor(Math.random() * 256)) + ','
            + (Math.floor(Math.random() * 256)) + ')';
        if (rnd) {
            $('td').css('background-color', hue);
            if (hue === rgb(0,0,0)) {
                alert("You lost the game!");
            };
        }
    });
});