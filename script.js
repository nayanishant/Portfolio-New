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
    }, 500);
    // Page Loader End
})

function showLoader() {
    $(".loaderWrapper").fadeIn("fast")
}

function hideLoader() {
    $(".loaderWrapper").fadeOut("slow")
}

function setTheme(theme) {
    document.documentElement.className = theme;
    setCookie('theme', theme, 365); // Set the theme preference as a cookie with a one-year expiration
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
  
  // Check if a theme is already set in the cookie when the page loads
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = getCookie('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
});