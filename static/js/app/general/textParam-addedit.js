$(function() {
    var code = getQueryString('code');
    var noteConfig = {
        title: '参数值',
        field: 'cvalue',
        type: "textarea",
        normalArea:true,
        required: true
    };
    reqApi({
        code: '805916',
        json: {
            id: code
        },
        sync: true
    }).then(function(data) {
        if (data.type == "text") {
            noteConfig.normalArea = true;
        } else if (data.type == "richText") {
            noteConfig.normalArea = false;
        }
    })    
    var fields = [{
        title: '参数说明',
        field: 'remark',
        required: true,
        maxlength: 20,
        readonly: true
    },noteConfig  ];

    buildDetail({
        fields: fields,
        code: code,
        addCode: "805910",
        detailCode: '805916',
        editCode: '805911',
        beforeSubmit:function(data){
            data.remark = $('#remark').text();
            return data
        }
    });
});