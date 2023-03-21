$().ready(function () {
    $("form :input").blur(function () {
        var $parent = $(this).parent();
        $parent.find(".msg").remove(); //删除以前的提醒元素（find()：查找匹配元素集中元素的所有匹配元素）
        //验证姓名
        if ($(this).is("#name")) {
            var nameVal = $.trim(this.value);
            var regName = /[~#^$@%&!*()<>:;'"{}【】]/;
            if (nameVal === "" || nameVal.length < 2 || regName.test(nameVal)) {
                var errorMsg1 = " 姓名非空,长度2-20位,不包含特殊字符";
                $parent.append("<span class='msg onError'>" + errorMsg1 + "</span>");
            } else {
                var okMsg1 = " 输入正确";
                $parent.append("<span class='msg onSuccess'>" + okMsg1 + "</span>");
            }
        }
        //验证手机号
        if ($(this).is("#mobile")) {
            var mobileVal = $.trim(this.value);
            var regMobile = /^(13[0-9]|14[5-9]|15[0-3,5-9]|16[2,5,6,7]|17[0-8]|18[0-9]|19[1,3,5,8,9])\d{8}$/;
            if (mobileVal === "" || !regMobile.test(mobileVal)) {
                var errorMsg2 = " 请输入有效的11位手机号码！";
                $parent.append("<span class='msg onError'>" + errorMsg2 + "</span>");
            } else {
                var okMsg2 = " 输入正确";
                $parent.append("<span class='msg onSuccess'>" + okMsg2 + "</span>");
            }
        }
        //验证密码
        if ($(this).is("#password")) {
            var psdVal = $.trim(this.value);
            var regPsd = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
            if (psdVal === "" || !regPsd.test(psdVal)) {
                var errorMsg3 = " 密码为6-20位字母、数字的组合！";
                $parent.append("<span class='msg onError'>" + errorMsg3 + "</span>");
            } else {
                var okMsg3 = " 输入正确";
                $parent.append("<span class='msg onSuccess'>" + okMsg3 + "</span>");
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
        alert('注册成功！')

    });
})