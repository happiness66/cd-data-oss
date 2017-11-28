$(function () {
    var data1 = {};
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'code',
        title: '借款编号',
        search: true
    }, {
        field: 'applyUser',
        title: '申请人',
        type: 'select',
        formatter:function(v,data){
            data1[v] = data.user.mobile
            $('#applyUser').renderDropdown2(data1)
             return data.user.mobile
        } ,      
        search: true
    }, {
        field: 'amount',
        title: '借款金额',
        amount: true,
    }, {
        field: 'remainDays',
        title: '还款剩余天数',
    }
    // , {
    //     field: 'lxAmount',
    //     title: '正常利息',
    //     amount: true,
    // }, {
    //     field: 'fwAmount',
    //     title: '服务费',
    //     amount: true,
    // }, {
    //     field: 'glAmount',
    //     title: '账户管理费',
    //     amount: true,
    // }, {
    //     field: 'xsAmount',
    //     title: '快速信审费',
    //     amount: true,
    // }, {
    //     field: 'yhAmount',
    //     title: '优惠金额',
    //     amount: true,
    // }, {
    //     field: 'renewalCount',
    //     title: '订单续期(次)',
    // }
    , {
        field: 'signDatetime',
        title: '签约时间',
        formatter: dateTimeFormat
    }, {
        field: 'fkDatetime',
        title: '放款时间',
        formatter: dateTimeFormat
    }, {
        field: 'loanType',
        title: '放款方式',
        type: "select",
        key: "loan_type",
        keyCode:"623907",
        formatter: Dict.getNameForList("loan_type","623907"),
        search: true
    }, {
        field: 'status',
        title: '状态',
        type: "select",
        key: "borrow_status",
        keyCode:"623907",
        formatter: Dict.getNameForList("borrow_status","623907")
    }, {
        field: 'remark',
        title: '备注',
    }];

    buildList({
        columns: columns,
        searchParams:{
            companyCode: OSS.companyCode,
            status: 3,
            isArchive: 0,
            isOverdue: 0
        },
        pageCode: '623085'
    });
 
    $('#renewalBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
        
        window.location.href = "../afetrLoan/renewalRecords.html?Code=" + selRecords[0].code+"&v=1";
    });    

    
});