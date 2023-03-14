function carousel(box, number) {
    var i = 0;
    var timer;
    $(function () {
        $("#" + box + " img").eq(0).show().siblings().hide();
        start();
    });

    function start() {
        timer = setInterval(function () {
            i++;
            if (i === number) {
                i = 0;
            }
            change();
        }, 3000);
    }

    function change() {
        $("#" + box + " img").eq(i).fadeIn(0).siblings().stop(true, true).fadeOut(0);
    }
}

function jumpLocation(ButtonID, elementID) {
    var element_root = document.querySelector('#' + ButtonID);
    element_root.addEventListener('click', function () {
        var element = document.querySelector('#' + elementID)
        element.scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
    })
}

function goBack() {
    var scrollTo = document.querySelector('.scrollTo');
    scrollTo.addEventListener('click', function () {
        window.history.back();
    })
}

