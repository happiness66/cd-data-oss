$(function() {
    var code = getQueryString('code');
    var userId = getQueryString('userId');
    var id = getQueryString('id');
    var view = getQueryString('v');
    var couponCode, amount, startAmount, validDays, condition;
    $.when(
        reqApi({
            code: '623907',
            json: {
                parentKey: 'coupon_type'
            }
        }),
        reqApi({
            code: '623115',
            json: {
                start: 1,
                limit: 10000,
                status: 1
            }
        })
    ).then(function(res1, res2) {
        var data1 = {},
            data2 = {},
            data3 = { amount, startAmount, validDays, condition };

        res1.forEach(function(v, i) {
            data1[v.dkey] = v.dvalue;
        });

        res2.list.forEach(function(v, i) {
            data2[v.code] = data1[v.type];
        });


        var fields = [{
            title: "登录名",
            field: "userId",
            type: "select",
            listCode: "805120",
            params: {
                limit: 10,
                start: 1,
                kind: "C",
                updater: ""
            },
            keyName: "userId",
            valueName: "loginName",
            formatter: function(v, data) {
                return data.user.loginName;
            }
        }, {
            title: "优惠券",
            field: "type",
            type: "select",
            data: data2,
            onChange: function(data) {
                couponCode = data;
                res2.list.forEach(function(v, i) {
                    if (v.code == data) {
                        data3["amount"] = v.amount;
                        data3["startAmount"] = v.startAmount;
                        data3["validDays"] = v.validDays;
                        data3["condition"] = v.condition;
                    };
                });
                $('#amount').text(moneyFormat(data3.amount));
                $('#startAmount').text(moneyFormat(data3.startAmount));
                $('#validDays').text(data3.validDays);
                $('#condition').text(data3.condition);
            }
        }, {
            title: "额度",
            field: "amount",
            amount: true,
            readonly: view,
        }, {
            title: "起借额度",
            field: "startAmount",
            amount: true,
            readonly: view,
        }, {
            title: '有效天数（天）',
            field: 'validDays',
            readonly: view,
        }, {
            title: "获取条件(人/次)",
            field: "condition",
            readonly: view,
        }, {
            title: '备注',
            field: 'remark'
        }];

        buildDetail({
            fields: fields,
            code: code,
            detailCode: "623146",
            addCode: '623130',
            beforeSubmit: function(data) {
                // data.userId = userId;
                data.updater = getUserName();
                data.couponCode = couponCode;
                return data
            }
        });
    });
});