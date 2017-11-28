$(function() {
    var code = getQueryString('code');
    var id = getQueryString('id');
    var view = getQueryString('v');
    
    var fields = [{
            title: "登录名",
            field: "userId",            
            formatter:function(v,data){
                return data.user.loginName
            }
        },{
            title: "类型 ",
            field: "type",
            formatter:Dict.getNameForList('coupon_type','623907'),
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
            title: "获得时间",
            field: "getDatetime",
            formatter: dateTimeFormat,
            required: true,
        }, {
            title: "失效时间",
            field: "invalidDatetime",
            formatter: dateTimeFormat,
            required: true,
        }, {
            title: "状态",
            field: "status",
            type: "select",
            formatter:Dict.getNameForList('user_coupon_status','623907'),
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
    
    buildDetail({
        fields: fields,
        view: view,
        fields: fields,
        code:{
            code:code,
            id:id
        },
        detailCode: "623146",      

    });

});