$(function() {
    var id = getQueryString('id');
    
    var fields = [{
            title: '申请记录编号',
            field: 'id',
            readonly: true
        },{
            title: "新手机",
            field: "newMobile",
            readonly: true
        }, {
            title: '旧手机',
            field: 'oldMobile',
            readonly: true
        }, {
            title: '审核说明',
            field: 'approverNote',
        }];


    var options = {
        fields: fields,
        code:{
            id:id
        },
        detailCode: "805073",
    }

    options.buttons =[{
        title: '通过',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = {};
                data['id'] = id;
                data['approver'] = getUserName();
                data["approveResult"] = "1";
                data["approveNote"] = $("#approverNote").val();             
                reqApi({
                    code: "805071",
                    json: data
                }).done(function() {
                    sucDetail();
                });
            }
        }
    }, {
        title: '不通过',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = {};
                data['id'] = id;
                data['approver'] = getUserName();
                data["approveResult"] = "0";
                data["approveNote"] = $("#approverNote").val();
                reqApi({
                    code: "805071",
                    json: data
                }).done(function() {
                    sucDetail();
                });
            }
        }
    }, {
        title: '返回',
        handler: function() {
            goBack();
        }
    }];

    
    buildDetail(options);
});