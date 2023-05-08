$(document).ready(function () {

    $('#line').on('click', function () {
        $('aside').toggleClass('visible')
        $(this).toggleClass('animate');
    })

    $('ul li a').on('click',function () {
        $('aside').removeClass('visible')
        $('#line').removeClass('animate')
    })
})