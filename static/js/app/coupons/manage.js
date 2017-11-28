$(function() {
    

    var columns = [{
            field: '',
            title: '',
            checkbox: true
        },{
            title: "优惠券类型 ",
            field: "type",
            type: "select",
            listCode: "623907",
            params:{
                parentKey:"coupon_type",
            },
            keyName:"dkey",
            valueName:"dvalue",
            search: true
        },{
            title: "获取条件(人/次)",
            field: "condition"
        },{
            title: "额度",
            field: "amount",
            amount: true
        },{
            title: "起借额度",
            field: "startAmount",
            amount: true
        }, {
            title: '有效天数（天）',
            field: 'validDays',
        }, {
            title: "状态",
            field: "status",
            type: "select",
            listCode: "623907",
            params:{
                parentKey:"coupon_status",
            },
            keyName:"dkey",
            valueName:"dvalue",
            search: true
        }, {
            title: '备注',
            field: 'remark'
        }
    ];
    buildList({
        columns: columns,
        pageCode: '623115'
    });

    $('#detailBtn').off("click").click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
            
        window.location.href = "./manage_detail.html?userId=" + selRecords[0].userId+"&code="+selRecords[0].code+"&v=1";
    });

    $('#opeanBtn').off("click").click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
            
        window.location.href = "./manage_opean.html?userId=" + selRecords[0].userId+"&code="+selRecords[0].code+"&v=1";
    }); 

    $('#editBtn').off("click").click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
            
        window.location.href = "./manage_addedit.html?userId=" + selRecords[0].userId+"&code="+selRecords[0].code+"&v=1";
    });            
    
      
});