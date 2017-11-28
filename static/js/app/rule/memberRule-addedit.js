$(function() {
    var code = getQueryString('code');
    var noteConfig = {
        title: '参数值',
        // type: "textarea",
        field: 'cvalue',
        number:true,
        required: true
    };
    reqApi({
        code: '807716',
        json: {
            id: code
        },
        sync: true
    }).then(function(data) {
        if (data.ckey == "aboutus") {
            noteConfig.type = "textarea";
        } else if (data.ckey == "jfPic") {
            noteConfig.type = "img";
        }
    })

    var fields = [{
        title: '参数键',
        field: 'ckey',
        required: true,
        maxlength: 20,
        type: 'hidden',
    },  {
        title: '参数说明',
        field: 'note',
        required: true,
        maxlength: 255
    },noteConfig, {
        title: '备注',
        field: 'remark',
        maxlength: 250
    }];

    buildDetail({
        fields: fields,
        code: code,
        addCode: "807710",
        detailCode: '807716',
        editCode: '807711'
    });
});