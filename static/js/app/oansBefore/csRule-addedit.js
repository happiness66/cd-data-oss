$(function() {

    var code = getQueryString('code');
    var view = getQueryString('v');

    var fields = [{
            title: '参数名',
            field: 'remark',
            maxlength: 250,
            readonly: true,
        }, {
            title: '参数值',
            field: 'cvalue',
            required: true,
            maxlength: 30
        }
    ];

    buildDetail({
        fields: fields,
        code: code,
        view: view,
        detailCode: '623916',
        editCode: '623910',
        beforeSubmit:function(data){
            data.remark = $('#remark').text();
            return data;
        }
    });
});