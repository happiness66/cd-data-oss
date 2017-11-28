$(function() {
    var code = getQueryString('code');

    var fields = [{
        title: '参数说明',
        field: 'ckey',
        required: true,
        maxlength: 20,
        readonly: true
    },  {
        title: '参数值',
        field: 'cvalue',
        type: "textarea",
        required: true,
    }];

    buildDetail({
        fields: fields,
        code: code,
        addCode: "805910",
        detailCode: '805916',
        editCode: '805911',
        beforeSubmit:function(data){
            data.remark = $('#ckey').text();
            return data
        }
    });
});