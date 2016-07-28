

$(function () {
    sticky();
    map();
    utils();
    contato();
});

function sticky() {

    $(".header").sticky();

}



function map() {

    var styles = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}];
    map = new GMaps({
        el: '#map',
        lat: -23.5608002,
        lng: -46.5683473,
        zoomControl: true,
        zoomControlOpt: {
            style: 'SMALL',
            position: 'TOP_LEFT'
        },
        panControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        overviewMapControl: false,
        scrollwheel: false,
        draggable: false,
        styles: styles
    });

    var image = '/assets/images/marker.png';

    map.addMarker({
        lat: -23.5608002,
        lng: -46.5683473,
        icon: image,
        title: '',
        infoWindow: {
            content: '<p>Rua Oiti, 200 -Água Rasa</p></br><p> São Paulo - SP - CEP 03347-000</p>'
        }
    });
}

function utils(){

       $('.scroll-to, #navigation a').click(function (event) {
        event.preventDefault();
        var full_url = this.href;
        var parts = full_url.split("#");
        var trgt = parts[1];

        $('body').scrollTo($('#' + trgt), 800, {offset: -50});

    });

}

function contato(){

    $('#contact-form-holder').addClass('form-hidden');
    $('.contact-form-trigger').click(function() {
        if($('#contact-form-holder').hasClass('form-hidden')) {
            $('#contact-form-holder').removeClass('form-hidden').addClass('form-visible');
            $('.contact-form-trigger').addClass('active');
        } else
        if($('#contact-form-holder').hasClass('form-visible')) {
            $('#contact-form-holder').removeClass('form-visible').addClass('form-hidden');
            $('.contact-form-trigger').removeClass('active');
        };
    });

}
