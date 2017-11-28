$(function() {
    

    var columns = [{
            field: '',
            title: '',
            checkbox: true
        },{
            title: "ID",
            field: "id"
        },{
            title: "登录名",
            field: "loginName",
            formatter:function(v,data){
                return data.user.loginName
            }
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
            title: "获得时间",
            field: "getDatetime",
            formatter: dateTimeFormat,
            required: true,
        }, {
            title: "失效时间",
            field: "invalidDatetime",
            formatter: dateTimeFormat,
            required: true,
        }, {
            title: "状态",
            field: "status",
            type: "select",
            listCode: "623907",
            params:{
                parentKey:"user_coupon_status",
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
        pageCode: '623145'
    });

    $('#addBtn').off("click").click(function() {
            
        window.location.href = "./provide_addedit.html?v=1";
    });    

    $('#editBtn').off("click").click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }            
        window.location.href = "./provide_back.html?userId=" + selRecords[0].userId+"&code="+selRecords[0].code+"&v=1"+"&id="+selRecords[0].id;
    });     
    
    $('#detailBtn').off("click").click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
            
        window.location.href = "./provide_detail.html?userId=" + selRecords[0].userId+"&code="+selRecords[0].code+"&v=1"+"&id="+selRecords[0].id;
    });      
});