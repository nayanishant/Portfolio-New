$(document).ready(function () {

    $('#line').on('click', function () {
        $('aside').toggleClass('visible')
    })

    $('ul li a').on('click',function () {
        $('aside').removeClass('visible')
    })

    $(window).on('dblclick', function () {

        var asideHasClass = $('aside').hasClass('visible')

        if (asideHasClass) {
            $('aside').removeClass('visible')
        }
        
    })
    
})