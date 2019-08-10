$(function () {
    let mobiletext = "";
    let imgCodetext = "";
    let sendCodetext = "";
    let passwordAtext = "";
    let passwordBtext = "";
    // 验证码处理
    let imgCodeText = "";
    /* 验证码处理 */
    (new Captcha({ fontSize: 30 })).draw(document.querySelector('#captcha'), r => {
        console.log(r, '验证码1');
        imgCodeText = r;
    });

    // 正则表达式
    let regPhone = /^1[3-9]\d{9}$/;
    let regImgCode = /^\d{4}$/;
    let regSend = /^\d{6}$/;
    let regPassword = /^[a-zA-Z0-9]{6,16}$/;

    let mobile = $("#mobile");
    let imgCode = $("#imgCaptchaInput");
    let sendCode = $("#sendCode");
    let passwordA = $("#password");
    let passwordB = $("#confirm_password");
    let registerBtn = $("#register");

    mobile.blur(function (e) {
        let text = $.trim($(this).val());
        let iDes = $(this).parent().siblings();
        mobiletext = text;
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
        imgCodetext = text;
        if (text == "") {
            iDes.html("短信验证码不能为空");
        } else if (imgCodeText.toLowerCase() != text.toLowerCase()) {
            iDes.html("验证码有误");
        } else {
            iDes.html("");
        }

    })

    sendCode.blur(function (e) {
        let text = $.trim($(this).val());
        let iDes = $(this).parent().siblings();
        sendCodetext = text;
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
        passwordAtext = text;
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
        passwordBtext = text;

        if (text == "") {
            iDes.html("密码不能为空");
        } else if (!regPassword.test(text)) {
            iDes.html("请输入6-16位的密码");
        } else if (passwordAtext != text) {
            iDes.html("密码不一致，请重新输入");
        } else {
            iDes.html("");
        }

    })


    registerBtn.click(function () {
        let $effot = $("i").text();
        console.log(mobiletext.length, imgCodetext.length, sendCodetext.length, passwordAtext.length, passwordBtext.length);

        if (
            $effot == "" &&
            mobiletext.length != 0 &&
            imgCodetext.length != 0 &&
            sendCodetext.length != 0 &&
            passwordAtext.length != 0 &&
            passwordBtext.length != 0

        ) {
            $.ajax({
                type: "post",
                dataType: "json",
                url: "../api/register.php",
                data: `mobile=${mobiletext}&password=${passwordAtext}`,
                success(res) {
                    if (res.status == "success") {
                        alert(res.msg);
                        window.location.href = "../html/login.html"
                    } else {
                        alert(res.msg);
                    }
                },
                error(xhr, status, statusText) {
                    console.log(xhr, status, statusText);
                }
            })
        }
        else {
            alert("请将信息填写完整！")

        }




    })





});