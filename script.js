$(document).ready(function () {

    $('#line').on('click', function () {
        $('aside').toggleClass('visible')
        $(this).toggleClass('animate');
    })

    $('ul li a').on('click',function () {
        $('aside').removeClass('visible')
        $('#line').removeClass('animate')
    })

    $("#currentYear").text(new Date().getFullYear());

    tippy('#html', {
        content: "HTML5",
    });

    tippy('#css', {
        content: "CSS3",
    });

    tippy('#js', {
        content: "JavaScript",
    });

    tippy('#react', {
        content: "React",
    });

    tippy('#figma', {
        content: "Figma",
    });

    tippy('#github', {
        content: "GitHub",
    });

    tippy('#git', {
        content: "Git",
    });

    tippy('#jq', {
        content: "jQuery",
    });

    tippy('#vsc', {
        content: "VS Code",
    });
})