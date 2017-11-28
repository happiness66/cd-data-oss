$(function() {

    var code = getQueryString('code');
    var view = getQueryString('v');

    var fields = [{
            title: '参数名',
            field: 'note',
            required: true,
            readonly: true,
            number:true,
            // value: $("#note").text(),
        }, {
            title: '参数值',
            field: 'cvalue',
            required: true,
            maxlength: 30,
            readonly: view,
            number: true,
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
        detailCode: '621916',
        editCode: '621911',
        beforeSubmit:function(data){
            data.note = $("#note").text();
            return data;
        }
       
    });
});