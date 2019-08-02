$(function () {

    // 正则表达式
    let regPhone = /^1[3-9]\d{9}$/;
    let regImgCode = /^\d{4}$/;
    let regSend = /^\d{6}$/;
    let regPassword = /^[a-zA-Z0-9]{6,16}$/;

    let mobile = $("#mobile");
    let imgCode = $("#imgCaptchaInput");
    let sendCode = $("#captcha");
    let passwordA = $("#password");
    let passwordB = $("#confirm_password");
    let registerBtn = $("#register");

    mobile.blur(function (e) {
        let text = $.trim($(this).val());
        let iDes = $(this).parent().siblings();

        if (text == "") {
            iDes.html("手机号码不能为空");
        } else if (!regPhone.test(text)) {
            iDes.html("请输入正确的手机号码");
        } else {
            iDes.html("");
        }

    })

    imgCode.blur(function (e) {
        let text = $.trim($(this).val());
        let iDes = $(this).parent().siblings();

        if (text == "") {
            iDes.html("短信验证码不能为空");
        } else if (!regImgCode.test(text)) {
            iDes.html("请输入四位验证码");
        } else {
            iDes.html("");
        }

    })

    sendCode.blur(function (e) {
        let text = $.trim($(this).val());
        let iDes = $(this).parent().siblings();

        if (text == "") {
            iDes.html("短信验证码不能为空");
        } else if (!regSend.test(text)) {
            iDes.html("请输入六位验证码");
        } else {
            iDes.html("");
        }

    })

    passwordtext = "";
    passwordA.blur(function (e) {
        let text = $.trim($(this).val());
        passwordtext = text;
        let iDes = $(this).parent().siblings();

        if (text == "") {
            iDes.html("密码不能为空");
        } else if (!regPassword.test(text)) {
            iDes.html("请输入6-16位的密码");
        } else {
            iDes.html("");
        }

    })

    passwordB.blur(function (e) {
        let text = $.trim($(this).val());
        let iDes = $(this).parent().siblings();


        if (text == "") {
            iDes.html("密码不能为空");
        } else if (!regPassword.test(text)) {
            iDes.html("请输入6-16位的密码");
        } else if (passwordtext != text) {
            iDes.html("密码不一致，请重新输入");
        } else {
            iDes.html("");
        }

    })


    registerBtn.click(function () {

        $(mobile).val()
        $.ajax({
            type: "post",
            // dataType: "json",
            url: "../api/register.php",
            data: { "mobile": $(mobile).val(), "password": $(passwordA).val() },
            success(res, status, xhr) {
                console.log(res);

            },
            error(xhr, status, statusText) {
                console.log(xhr, status, statusText);
            }
        })

    })


});