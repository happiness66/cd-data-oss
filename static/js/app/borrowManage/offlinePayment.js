$(function () {
    var data1 = {};

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'code',
        title: '还款编号',        
    }, {
        field: 'refNo',
        title: '借款编号',
        search: true
    }, {
        field: 'loanType',
        title: '放款方式',       
        formatter: function(v,data){
          return  Dict.getNameForList1('loan_type','623907',data.borrow.loanType)
        }
    }, {
        field: 'type',
        title: '还款方式',
        key: "repay_apply_type",
        keyCode:"623907",
        formatter: Dict.getNameForList("repay_apply_type","623907"),         
    }, {
        field: 'amount',
        title: '还款金额',
        amount: true,
    }, {
        field: 'applyUser',
        title: '还款人',
        type: "select",
        formatter:function(v,data){
            data1[v] = data.user.mobile;
            $('#applyUser').renderDropdown2(data1);
             return data.user.mobile
        } ,        
        search: true
    },{
        field: 'applyDatetime',
        title: '还款时间',
        formatter: dateTimeFormat,
    }, {
        field: 'applyNote',
        title: '还款说明',
    }, {
        field: 'status',
        title: '状态',
        type: "select",
        key: "repay_apply_status",
        keyCode:"623907",
        formatter: Dict.getNameForList("repay_apply_status","623907"),
        search: true
    }];

    buildList({
        columns: columns,
        searchParams:{
            type: 0
        },
        pageCode: '623088'
    });

    $('#checkBtn').off('click').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            return;
        }

        if (selRecords[0].status !== "0") {
            toastr.info("该记录不是待审核状态");
            return;
        }        
        
        window.location.href = "./offlinePayment_check.html?Code=" + selRecords[0].code+"&v=1";
    });    
    
    
    
    
});