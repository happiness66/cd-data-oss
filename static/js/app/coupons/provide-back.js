$(function() {
    var code = getQueryString('code');
    var userId = getQueryString('userId');
    var id = getQueryString('id');
    var view = getQueryString('v');
    
    var fields = [{
            title: "登录名",
            field: "userId",            
            formatter:function(v,data){
                return data.user.loginName
            },
            readonly: view
        },{
            title: "额度",
            field: "amount",
            amount: true,
            readonly: view
        },{
            title: "起借额度",
            field: "startAmount",
            amount: true,
            readonly: view
        }, {
            title: '有效天数（天）',
            field: 'validDays',
            readonly: view
        }, {
            title: "类型 ",
            field: "type",
            formatter:Dict.getNameForList('coupon_type','623907'),
            readonly: view
        }, {
            title: "最后更新人",
            field: "updater",
            readonly: view
        }, {
            title: "最后更新时间",
            field: "updateDatetime",
            formatter: dateTimeFormat,
            readonly: view
        }, {
            title: '备注',
            field: 'remark'
        }];

    var options = {
        fields: fields,
        code:{
            code:code,
            id:id
        },
        detailCode: "623146", 
    }

    options.buttons = [{
        title: '回收',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = {};
                data['id'] = id;
                data['updater'] = getUserName();
                data["remark"] = $("#remark").val();            
                reqApi({
                    code: "623131",
                    json: data
                }).done(function() {
                    sucDetail();
                });
            }
        }
    },{
        title: '返回',
        handler: function() {
            goBack();
        }
    }];    
    
    buildDetail(options);

});