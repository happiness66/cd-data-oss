$(function() {

    var code = getQueryString('code');
    var view = getQueryString('v');

    var fields = [{
        field: 'name',
        title: '产品名',
        required: true,
        search: true,
    }, {
        field: 'level',
        title: '商品等级',
        type: "select",
        key: "product_level",
        keyCode: "623907",
        formatter: Dict.getNameForList("product_level", "623907"),
        required: true,
    }, {
        field: 'amount',
        title: '借款金额',
        required: true,
        amount: true,
    }, {
        field: 'duration',
        title: '借款时长',
        required: true,
    }, {
        field: 'yqRate1',
        title: '7天内逾期利率',
    }, {
        field: 'yqRate2',
        title: '7天外逾期利率',
    }, {
        field: 'lxRate',
        title: '日利息利率',
    }, {
        field: 'fwAmount',
        title: '服务费(元)',
        formatter: moneyFormat
    }, {
        field: 'glAmount',
        title: '账户管理费(元)',
        formatter: moneyFormat
    }, {
        field: 'xsAmount',
        title: '快速信审费(元)',
        formatter: moneyFormat
    }, {
        field: 'updateDatetime',
        title: '最后更新时间',
        required: true,
        formatter: dateTimeFormat
    }, {
        field: 'status',
        title: '状态',
        type: "select",
        key: "product_status",
        keyCode: "623907",
        formatter: Dict.getNameForList("product_status", "623907"),
        search: true,
        required: true,
    }, {
        field: 'slogan',
        title: '广告语',
        required: true,
    }, {
        field: 'uiLocation',
        title: '位置',
        type: 'select',
        key: 'product_location',
        required: true,
        keyCode: '623907',
        formatter: Dict.getNameForList("product_location", '623907'),
    }, {
        field: 'uiOrder',
        title: 'UI顺序',
        required: true,
    }, {
        field: 'remark',
        title: '备注',
    }];

    buildDetail({
        fields: fields,
        code: code,
        view: view,
        detailCode: '623011',
        addCode: '623000',
        editCode: '623001',
        beforeSubmit: function(data) {
            data.updater = getUserId();
            return data;
        }
    });

});