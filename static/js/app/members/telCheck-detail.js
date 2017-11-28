$(function() {
    var id = getQueryString('id');
    var view = !!getQueryString('v');
    
    var fields = [{
            title: '申请记录编号',
            field: 'id'
        },{
            title: "新手机",
            field: "newMobile"
        }, {
            title: '旧手机',
            field: 'oldMobile'
        }, {
            title: "审核时间",
            field: "updateDatetime",
            formatter: dateTimeFormat
        }, {
            title: '审核人',
            field: 'updater'
        }, {
            title: '审核说明',
            field: 'remark',
        }];


    var options = {
        fields: fields,
        view: view,
        code:{
            id:id
        },
        detailCode: "805073",
    }

    
    buildDetail(options);
});