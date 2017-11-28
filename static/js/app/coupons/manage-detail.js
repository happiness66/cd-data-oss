$(function() {
    var code = getQueryString('code');
    var view = getQueryString('v');
    
    var fields = [ {
            title: "类型 ",
            field: "type",
            type: "select",
            required: true,
            formatter:Dict.getNameForList('coupon_type','623907')
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
            title: "状态",
            field: "status",
            type: "select",
            required: true,
            formatter:Dict.getNameForList('coupon_status','623907')
        }, {
            title: "最后更新人",
            field: "updater",
            required: true,
        }, {
            title: "最后更新时间",
            field: "updateDatetime",
            formatter: dateTimeFormat,
            required: true,
        }, {
            title: '备注',
            field: 'remark'
        }];
    
    buildDetail({
        fields: fields,
        view: view,
        code:code,
        detailCode: "623116"
    });
});