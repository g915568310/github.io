$.ajax({
            type: "get",// get或者post
            url: "http://api.bemfa.com/api/device/v1/data/1/push/get",// 请求的url地址
            data: {uid=f06cc44ba970497882ebeaabfc782d35&topic=led002&msg=on},//请求的参数
            dataType: "json",//json写了jq会帮我们转换成数组或者对象 他已经用JSON.parse弄好了 
            timeout: 3000,//3秒后提示错误
            beforeSend: function () {
                // 发送之前就会进入这个函数
                // return false 这个ajax就停止了不会发 如果没有return false 就会继续
            },
            success: function (data) { // 成功拿到结果放到这个函数 data就是拿到的结果
            },
            error: function () {//失败的函数
            },
            complete: function () {//不管成功还是失败 都会进这个函数
            }
        })
        // 常用
        $.ajax({
            type: "get",
            url: "",
            data: {},
            dataType: "json",
            success: function (data) {
            }
        })
