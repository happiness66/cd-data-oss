$(function() {
    var code = getQueryString('code');
    var view = getQueryString('v');
    
    var fields = [{
            title: "优惠券类型 ",
            field: "type",
            type: "select",
            formatter:Dict.getNameForList('coupon_type','623907'),
            required: true,
            readonly: view
        },{
            title: "获取条件(人/次)",
            field: "condition",
            required: true,
        },{
            title: "额度",
            field: "amount",
            amount: true,
            required: true,
        },{
            title: "起借额度",
            field: "startAmount",
            amount: true,
            required: true,
        }, {
            title: '有效天数（天）',
            field: 'validDays',
            required: true,
        }, {
            title: '备注',
            field: 'remark'
        }];
    
    buildDetail({
        fields: fields,
        code:code,
        detailCode: "623116",
        editCode: '623100',
        beforeSubmit:function(data){
            data.updater = getUserName();
            return data
        }
    });
});