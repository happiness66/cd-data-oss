$(function() {

    var code = getQueryString('code');
    var view = getQueryString('v');

    var fields = [{
            field: "kind",
            value: "1",
            type: "hidden",
            required: true
        }, {
            title: '参数键',
            field: 'ckey',
            required: true,
            readonly: true,
        }, {
            title: '参数值',
            field: 'cvalue',
            required: true,
            maxlength: 30,
            readonly: view,
        },
        {
            title: '备注',
            field: 'remark',
            maxlength: 250,
            readonly: view,
        }
    ];

    buildDetail({
        fields: fields,
        code: code,
        view: view,
        detailCode: '802026',
        editCode: '802020'
    });
});