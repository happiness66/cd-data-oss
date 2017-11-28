$(function() {

    
    var fields = [{
            title: '业务编号',
            field: 'bizNo',
            search: true
        },{
            title: "真实姓名",
            field: "realName",
            search: true
        }, {
            title: '证件类型',
            field: 'idKind',
            search: true
        },{
            field: 'idNo',
            title: '证件号码',
            search: true
        },{
            title: "银行卡号",
            field: "cardNo",
            search: true
        },{
            title: "预留手机号",
            field: "bindMobile",
            search: true
        },  {
            title: '备注',
            field: 'remark'
        }];
    
    buildDetail({
        fields: fields,
        code:{
            userId:userId
        },
        detailCode: "805056",
        editCode: '001302',
        beforeSubmit: function(data){
            data.userId = userId;
            
            return data;
        }
    });
});