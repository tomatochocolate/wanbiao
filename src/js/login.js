$(function () {
    let mobiletext = "";
    let passwordtext = "";

    let mobile = $("#userAccount");
    let password = $("#user_psd");
    let login = $("#user_login")

    let regPhone = /^1[3-9]\d{9}$/;
    let regPassword = /^[a-zA-Z0-9]{6,16}$/;

    mobile.blur(function (e) {
        let text = $.trim($(this).val());
        let iDes = $(this).siblings();
        mobiletext = text;
        if (text == "") {
            iDes.html("手机号码不能为空");
        } else if (!regPhone.test(text)) {
            iDes.html("请输入正确的手机号码");
        } else {
            iDes.html("");
        }

    })
    password.blur(function (e) {
        let text = $.trim($(this).val());
        passwordtext = text;
        let iDes = $(this).siblings();

        if (text == "") {
            iDes.html("密码不能为空");
        } else if (!regPassword.test(text)) {
            iDes.html("请输入6-16位的密码");
        } else {
            iDes.html("");
        }

    })

    login.click(function () {

        let $effot = $("i").text();

        if (
            mobiletext.length != 0 &
            passwordtext.length != 0 & $effot == ""
        ) {
            $.ajax({
                type: "post",
                url: "../api/login.php",
                dataType: "json",
                data: `mobile=${mobiletext}&password=${passwordtext}`,
                success: function (res) {
                    if (res.status == "success") {
                        alert(res.msg);
                        window.location.href = "../wanbiao.html"
                    } else {
                        alert(res.msg);
                    }
                },
                error(xhr, status, statusText) {
                    alert(status, statusText);
                }


            })

        }

    })

})