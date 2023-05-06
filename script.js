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
    
    // var projectData = [
    //     {
    //         "id": 1,
    //         "name": "SHeepyShops",
    //         "url": "https://github.com/nayanishant/SheepyShops",
    //         "image": "Gallery/SheepyShops.png"
    //     },
    //     {
    //         "id": 2,
    //         "name": "HackClub",
    //         "url": "https://github.com/Gautam-flash/hc_pesce_site",
    //         "image": "Gallery/Hack Club.png"
    //     },
    //     {
    //         "id": 3,
    //         "name": "Portfolio",
    //         "url": "https://github.com/nayanishant/Portfolio",
    //         "image": "Gallery/Portfolio.png"
    //     },
    //     {
    //         "id": 4,
    //         "name": "IoT Mini Project",
    //         "url": "https://github.com/nayanishant/iot",
    //         "image": "Gallery/IoTMini.png"
    //     },
    //     {
    //         "id": 5,
    //         "name": "Blog Website",
    //         "url": "https://github.com/nayanishant/peace-hub",
    //         "image": "Gallery/pesce.png"
    //     }
    // ]
})