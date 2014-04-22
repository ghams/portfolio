$(document).ready(function() {
    $('td').hover(function() {
        var hue = 'rgb('
            + (Math.floor(Math.random() * 256)) + ','
            + (Math.floor(Math.random() * 256)) + ','
            + (Math.floor(Math.random() * 256)) + ')';
            $('td').css('background-color', hue);
            if (hue === rgb(0,0,0)) {
                alert("You lost it!");
            };
    });
});