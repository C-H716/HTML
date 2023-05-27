$().ready(function () {
    $("form :input").blur(function () {
        var $parent = $(this).parent();
        $parent.find(".msg").remove(); //删除以前的提醒元素（find()：查找匹配元素集中元素的所有匹配元素）
        //验证手机号
        if ($(this).is("#mobile")) {
            var mobileVal = $.trim(this.value);
            if (mobileVal === "") {
                var errorMsg1 = " 请输入手机号或邮箱！";
                $parent.append("<span class='msg onError'>" + errorMsg1 + "</span>");
            } else {
                $parent.append("<span class='msg onSuccess'></span>");
            }
        }
        //验证密码
        if ($(this).is("#password")) {
            var psdVal = $.trim(this.value);
            var regPsd = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
            if (psdVal === "" || !regPsd.test(psdVal)) {
                var errorMsg2 = " 密码为" + "<br>" + "6-20位字母、数字的组合！";
                $parent.append("<span class='msg onError'>" + errorMsg2 + "</span>");
            } else {
                $parent.append("<span class='msg onSuccess'></span>");
            }
        }
    }).keyup(function () {
        //triggerHandler 防止事件执行完后，浏览器自动为标签获得焦点
        $(this).triggerHandler("blur");
    }).focus(function () {
        $(this).triggerHandler("blur");
    });

//点击重置按钮时，通过trigger()来触发文本框的失去焦点事件
    $("#btnSubmit").click(function () {
        //trigger 事件执行完后，浏览器会为submit按钮获得焦点
        $("form .required:input").trigger("blur");
        var numError = $("form .onError").length;
        if (numError) {
            return false;
        }
        var username = document.login.username.value;
        var password = document.login.password.value;
        var error = [];
        if (username !== "webdesign") {
            error.push("账号不存在");
        }
        if (password !== "123456a") {
            error.push("密码错误")
        }
        if (error.length) {
            if (error.length === 1) {
                alert(error);
            } else if (error.length > 1) {
                var errorList = "";
                for (let i = 0; i < error.length; i++) {
                    errorList += i + 1 + "、" + error[i] + "\n";
                }
                alert("登陆失败\n" + errorList);
            }
            $("div input").val("")
            return false;
        } else {
            alert("登陆成功");
            return true;
        }
    });
})