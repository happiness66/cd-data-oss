$(function() {


var columns =[{
            field: '',
            title: '',
            checkbox: true
        },{
            field: 'mobile',
            title: '手机号',
            search: true
        },{
            title: "用户编号",
            field: "userId",
        },{
            title: "任务ID",
            field: "taskId",
        },{
            title: "创建时间",
            field: "createTime",
            formatter: dateTimeFormat,
        },{
            title: "最后修改时间",
            field: "lastModifyTime",
            formatter: dateTimeFormat,
        }
    ];
    buildList({
        columns: columns,
        pageCode: '798550',
    });

    // $('#detailBtn').click(function() {
    //     var selRecords = $('#tableList').bootstrapTable('getSelections');
    //     if (selRecords.length <= 0) {
    //         toastr.info("请选择记录");
    //         return;
    //     }
    //     window.location.href = "operator_addedit.html?id=" + "&kind=" + selRecords[0].kind;
    // });    
   
});