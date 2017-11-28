$(function () {
    var code = getQueryString('code');
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'curNo',
        title: '第几次续期',
    }, {
        field: 'startDate',
        title: '开始时间',
        formatter: dateTimeFormat
    }, {
        field: 'endDate',
        title: '结束时间',
        formatter: dateTimeFormat
    }, {
        field: 'fwAmount',
        title: '服务费',
        amount: true
    }, {
        field: 'xsAmount',
        title: '信审费',
        amount: true
    }, {
        field: 'glAmount',
        title: '管理费',
        amount: true
    }, {
        field: 'yqAmount',
        title: '逾期费用',
        amount: true
    }, {
        field: 'lxAmount',
        title: '正常利息',
        amount: true
    }, {
        field: 'lxAmount',
        title: '续期总金额',
        amount: true
    }, {
        field: 'payCode',
        title: '三方支付编号',
    }, {
        field: 'payType',
        title: '支付方式',
        formatter:Dict.getNameForList('pay_type','623907')
    }, {
        field: 'payDatetime',
        title: '支付时间',
        formatter: dateTimeFormat
    }, {
        field: 'createDatetime',
        title: '续期申请时间',
        formatter: dateTimeFormat
    }];

    buildList({
        columns: columns,
        searchParams:{
            borrowCode: code
        },        
        pageCode: '623090'
    });

    $('#renewalBtn').hide();
    $('#detailBtn').hide();
    $('#exportBtn').hide();
    $('#pressBtn').hide();
    $('#confirmBtn').hide();
    $('#reportBtn').hide();

    $('.tools .toolbar').html('<li style="display:block;" id="backBtn"><span><img src="/static/images/t01.png"></span>返回</li>');
    $('#backBtn').on('click', function() {
        goBack();
    });    
    
});