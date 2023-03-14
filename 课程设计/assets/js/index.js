$().ready(function () {
    jumpLocation("gameplay", "jumpContent")
    jumpLocation("advanced", "technics")

    var i = 0;
    var timer;

    $(function () {
        $(".box img").eq(0).show().siblings().hide();
        start();

        $("b").hover(function () {
            clearInterval(timer);
            i = $(this).index();
            change();
        }, function () {
            start();
        });

        $(".left").click(function () {
            i--;
            if (i === -1) {
                i = 5;
            }
            change();
        });
        $(".right").click(function () {
            i++;
            if (i === 6) {
                i = 0;
            }
            change();
        });
    });

    function start() {
        timer = setInterval(function () {
            i++;
            if (i === 6) {
                i = 0;
            }
            change();
        }, 3000);
    }

    function change() {
        $(".box img").eq(i).fadeIn(300).siblings().stop(true, true).fadeOut(300);
        $("b").eq(i).addClass("current").siblings().removeClass("current");
    }
});
