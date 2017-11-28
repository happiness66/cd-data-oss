$(function() {
    
    var code = getQueryString('code');
    var view = getQueryString('v');
    var borrowCount,overdueCode,renewalCount;
    
    var fields = [ {
        field: 'code1',
        title: '借款编号',
        formatter:function(v,data){
            return data.code
        },
        readonly:view,
    }, {
        field: 'mobile',
        title: '申请人',
        formatter:function(v,data){
            borrowCount = data.user.borrowCount;
            overdueCode = data.user.overdueCode;
            renewalCount = data.user.renewalCount;            
            return data.user.mobile
        },
        afterSet:function(data){
            var html='<div class="tools" style="float: right;margin-left: 20px;">'+
                            '<span style="float: left;margin-left: 20px;">借款次数:'+ borrowCount+' </span>'+
                            '<span style="float: left;margin-left: 20px;">逾期代码: '+ overdueCode +' </span>'+
                            '<span style="float: left;margin-left: 20px;">续期次数: '+  renewalCount +' </span>'+             
                     '</div>';            
            $('#mobile').append(html);            
        },
        readonly:view    
    }, {
        field: 'amount',
        title: '借款金额',
        amount: true,
        readonly:view,
    }, {
        field: 'duration',
        title: '借款时长(天)',
        readonly:view,
    }, {
        field: 'yqDays',
        title: '逾期天数',
        formatter:function(v,data){
            return data.yqDays
        },
        readonly:view,
    }, {
        field: 'lxAmount',
        title: '正常利息',
        amount: true,
        readonly:view,
    }, {
        field: 'yqlxAmount',
        title: '逾期利息',
        // amount: true,
        formatter:moneyFormat,
        readonly:view,
    }, {
        field: 'fwAmount',
        title: '服务费',
        amount: true,
        readonly:view,
    }, {
        field: 'glAmount',
        title: '账户管理费',
        amount: true,
        readonly:view,
    }, {
        field: 'xsAmount',
        title: '快速信审费',
        amount: true,
        readonly:view,
    }, {
        field: 'yhAmount',
        title: '优惠金额',
        // amount: true,
        formatter:moneyFormat,
        readonly:view,
    }, {
        field: 'Amount',
        title: '实际打款金额',
        formatter:function(v,data){
          return  moneyFormat(data.amount-(data.lxAmount+data.fwAmount+data.glAmount+data.xsAmount)+data.yhAmount)

        },
        readonly:view,
    }, {
        field: 'renewalCount',
        title: '订单续期(次)',
        readonly:view,
    }, {
        field: 'signDatetime',
        title: '签约时间',
        formatter: dateTimeFormat,
        readonly:view,
    }, {
        field: 'updateDatetime',
        title: '最后更新时间',
        formatter: dateTimeFormat,
        readonly:view,
    }, {
        field: 'status',
        title: '状态',
        type: "select",
        key: "borrow_status",
        keyCode:"623907",
        formatter: Dict.getNameForList("borrow_status","623907"),
        readonly:view,
    }, {
        field: 'remark',
        title: '备注',
    }];
    
    buildDetail({
        fields: fields,
        code: code,
        detailCode: '623086',
        editCode: '623073',
        beforeSubmit:function(data){
            data.updater = getUserName();
            return data;
        }
    });

});