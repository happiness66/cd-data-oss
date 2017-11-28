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
        listCode: "623907",
        params: {
            parentKey: "product_level",
        },
        keyName: "dkey",
        valueName: "dvalue",
        required: true,
    }, {
        field: 'amount',
        title: '借款金额',
        amount: true,
        required: true,
    }, {
        field: 'duration',
        title: '借款时长',
        required: true,
    }, {
        field: 'yqRate1',
        title: '7天内逾期利率',
        number: true,
        required: true,
    }, {
        field: 'yqRate2',
        title: '7天外逾期利率',
        number: true,
        required: true,
    }, {
        field: 'lxRate',
        title: '日利息利率',
        number: true,
        required: true,
        // amount: true,
    }, {
        field: 'fwAmount',
        title: '服务费(元)',
        required: true,
        amount: true,
    }, {
        field: 'glAmount',
        title: '账户管理费(元)',
        required: true,
        amount: true,
    }, {
        field: 'xsAmount',
        title: '快速信审费(元)',
        required: true,
        amount: true,
    }, {
        field: 'slogan',
        title: '广告语',
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
            data.uiLocation = "0";
            return data;
        }
    });

});