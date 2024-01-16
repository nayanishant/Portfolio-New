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

    tippy('#bootstrap', {
        content: "Bootstrap",
    });

    $(".theme-btn.dark").click(function(){
      $(".toggle-circle").removeClass("move-left");
      $(".toggle-circle").toggleClass("move-right");
    });

    $(".theme-btn.light").click(function(){
      $(".toggle-circle").removeClass("move-right");
      $(".toggle-circle").toggleClass("move-left");
    });

    // Page Loader Start
    showLoader();
    setTimeout(function () {
        hideLoader();
    }, 1000);
    // Page Loader End

    window.onscroll = function() {
        toTop()
    }
})

function toTop() {
    let backToTop = $('.toTop')
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTop.css('display', 'block')
    } else {
        backToTop.css('display', 'none')
    }
}

function moveToTop() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}

function showLoader() {
    $(".loaderWrapper").fadeIn("fast");
    dotDelay()
}

function hideLoader() {
    $(".loaderWrapper").fadeOut("slow")
}

function dotDelay() {
    $('.dot').fadeIn(1500);
}

function setTheme(theme) {
    document.documentElement.className = theme;
    setCookie('theme', theme, 365);
}
  
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}
  
function getCookie(name) {
    const cookieValue = document.cookie.match(`(^|;)\\s*${name}=([^;]+)`);
    return cookieValue ? cookieValue.pop() : null;
}
  
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = getCookie('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
});

