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
            title: '身份证号',
            search: true
        },{
            field: 'openId',
            title: '芝麻openId',
            search: true
        }, {
            title: '芝麻信用分',
            field: 'score',
            field1: 'scoreStart',
            title1: '芝麻信用分',
            type1: 'normalRange',
            field2: 'scoreEnd',           
            search: true
        },{
            title: '芝麻业务号',
            field: 'bizNo',
            search: true
        },{
            title: "创建时间",
            field: "createDatetime",
            formatter: dateTimeFormat,
        }
    ];
    buildList({
        columns: columns,
        pageCode: '798501',
    });
   
});