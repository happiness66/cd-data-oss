$(function() {

    var columns = [{
            field: '',
            title: '',
            checkbox: true
        }, {
            title: '记录编号',
            field: 'id'
        },{
            title: "新手机",
            field: "newMobile",
            search: true
        }, {
            title: '旧手机',
            field: 'oldMobile',
            search: true
        }, {
            title: "状态",
            field: "status",
            type: "select",
            listCode: 805906,
            params: {
                parentKey:'mobile_modify_status'
            },
            keyName: "dkey",
            valueName: "dvalue",
            search: true
        }, {
            title: "申请时间",
            field: "applyDatetime",
            formatter: dateTimeFormat
        }
    ];
    buildList({
        columns: columns,
        pageCode: '805072',
    });

    $('#checkBtn').off('click').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "./telCheck_addedit.html?id=" + selRecords[0].id;

    });

    $('#detailBtn').off('click').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "./telCheck_detail.html?id=" + selRecords[0].id+"&v=1";

    });    
  
      
});