$(function() {
	
	var code = getQueryString('code');
	var view = getQueryString('v');
	
	var fields = [ {
        field: 'code1',
        title: '还款编号',
        formatter:function(v,data){
            return data.code;
        }        
    }, {
        field: 'refNo',
        title: '借款编号',
    }, {
        field: 'loanType',
        title: '放款方式',
        formatter: function(v,data){
          return  Dict.getNameForList1('loan_type','623907',data.borrow.loanType)
        }
    }, {
        field: 'type',
        title: '还款方式',
        type: "select",
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
        formatter:function(v,data){
            return data.user.mobile;
        }        
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
        formatter: Dict.getNameForList("repay_apply_status","623907")
    }, {
        field: 'approver',
        title: '审核人',
    },{
        field: 'approveDatetime',
        title: '审核时间',
        formatter: dateTimeFormat,
    }, {
        field: 'approveNote',
        title: '审核说明',
    }];
	
	buildDetail({
		fields: fields,
		code: code,
		view:view,
		detailCode: '623089',
	});

});     