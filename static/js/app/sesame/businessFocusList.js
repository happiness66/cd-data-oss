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
            title: '是否被关注',
            field: 'isMatched',
            type:'select',
            data: {
                "true":'是',
                "false":'否'
            }
        }, {
            title: '行业关注名单信息',
            field: 'details',
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