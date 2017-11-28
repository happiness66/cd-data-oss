$(function() {

    var code = getQueryString('code');

    var fields = [{
        field: 'uiOrder',
        title: 'UI顺序',
        required: true,
    }, {
        field: 'uiColor',
        title: 'UI颜色',
        required: true,
        type: 'select',
        listCode: '623907',
        keyName: 'dkey',
        valueName: 'dvalue',
        params: {
            parentKey: "product_color"
        },
        formatter: function(v, data) {
            return data.uiColor;
        }
    }, {
        field: 'uiLocation',
        title: '位置',
        formatter: function(v, data) {
            return Dict.getNameForList1('product_location', '623907', data.uiLocation);
        },
        readonly: true
    }];

    buildDetail({
        fields: fields,
        code: code,
        searchParams: {
            companyCode: OSS.companyCode
        },
        detailCode: '623011',
        addCode: '623000',
        editCode: '623001',
    });

    $("#subBtn").off("click").click(function() {
        if ($('#jsForm').valid()) {
            confirm("确认上架？").then(function() {
                var data = $('#jsForm').serializeObject();
                data.code = code;
                data.uiLocation = "0";
                reqApi({
                    code: '623002',
                    json: data
                }).then(function() {
                    sucDetail();
                });

            }, function() {

            });
        }
    });
});