$(function () {
     utils();
});

function utils() {

    /* animated scrolling */

    $('.scroll-to, #navigation a').click(function (event) {
        event.preventDefault();
        var full_url = this.href;
        var parts = full_url.split("#");
        var trgt = parts[1];

        $('header').scrollTo($('#' + trgt), 800, {offset: -50});

    });

}
