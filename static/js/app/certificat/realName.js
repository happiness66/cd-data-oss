$(function() {
  

    var columns = [{
            field: '',
            title: '',
            checkbox: true
        },{
            title: "真实姓名",
            field: "realName",
            search: true
        },{
            field: 'idNo',
            title: '身份证号码',
            search: true
        },{
            title: "银行卡号",
            field: "cardNo",
            search: true
        },{
            title: "预留手机号",
            field: "bindMobile",
            search: true
        },{
            title: "创建时间",
            field: "createDatetime",
            formatter: dateTimeFormat
            // search: true
        }
    ];
    buildList({
        router: 'realName',
        columns: columns,
        pageCode: '798500',
    });
   
});