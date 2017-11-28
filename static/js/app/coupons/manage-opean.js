$(function() {
    var code = getQueryString('code');
    var view = getQueryString('v');
    
    var fields = [{
            title: "优惠券类型 ",
            field: "type",
            type: "select",
            required: true,
            readonly: view,
            formatter:Dict.getNameForList('coupon_type','623907')
        },{
            title: "获取条件(人/次)",
            field: "condition",
            required: true,
            readonly: view
        },{
            title: "额度",
            field: "amount",
            amount: true,
            required: true,
            readonly: view
        },{
            title: "起借额度",
            field: "startAmount",
            amount: true,
            required: true,
            readonly: view
        }, {
            title: '有效天数（天）',
            field: 'validDays',
            required: true,
            readonly: view
        }, {
            title: "当前状态",
            field: "status",
            type: "select",
            required: true,
            readonly: view,
            formatter:Dict.getNameForList('coupon_status','623907')
        }, {
            title: '备注',
            field: 'remark',
            required: true,
        }];
    
    buildDetail({
        fields: fields,
        code:code,
        detailCode: "623116",
        editCode: '623101',
        beforeSubmit:function(data){
            data.updater = getUserName();
            return data
        }
    });
});