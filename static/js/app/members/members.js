$(function() {
    var userKind = {
        "C": "C端用户",
        // "P": "平台用户"
    };
    var userRefereeType = {
        "operator": "市/区运营商",
        "o2o": "o2o商家",
        "supplier":"供应商",
        "mingsu":"民宿主",
        "f1":"VIP会员",
    };    

    var columns = [{
            field: '',
            title: '',
            checkbox: true
        },{
            title: "登录名",
            field: "loginName",
            // search: true
        }, {
            title: '姓名',
            field: 'realName',
        }, {
            title: '手机号',
            field: 'mobile',
            search: true
        },{
            field: 'userReferee',
            title: '推荐人',
            type: 'select',
            formatter: function(v, data) {
                if(data.refereeUser){
                    var res2 = data.refereeUser.mobile;
                    if(res2){
                        return res2
                    }else{
                       return "-" 
                    }                
                }       
            }
        }, {
            title: "用户类型",
            field: "kind",
            type: "select",
            formatter: function(v,data){
                return userKind[data.kind]
            }
        }, {
            title: "状态",
            field: "status",
            type: "select",
            key: "user_status",
            formatter: Dict.getNameForList("user_status"),
            search: true
        }, {
            title: "注册地址",
            field: "province",
            formatter: function(v,data){
                if(data.province){
                    if(data.address){
                        if(data.province == data.city ){
                            return data.city + data.area + data.address;
                        }else{
                            return data.province + data.city + data.area + data.address;
                        }                        
                    }else{
                        if(data.province == data.city ){
                            return data.city + data.area;
                        }else {
                            return data.province + data.city + data.area;
                        }                        
                    }                    
                }else{
                    return '-'
                }
                
            }
        }, {
            title: "注册时间",
            field: "createDatetime",
            formatter: dateTimeFormat
        }, {
            title: '备注',
            field: 'remark'
        }
    ];
    buildList({
        router: 'members',
        columns: columns,
        pageCode: '805120',
        searchParams: {
            kind: "C",
            companyCode:OSS.companyCode
        }
    });

    $('#discountBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "./discount.html?userId=" + selRecords[0].userId;

    });

    $("#borrowBtn").click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "./borrow.html?userId=" + selRecords[0].userId;

    });    

    $('#reportBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "../oansBefore/audit_report.html?userId=" + selRecords[0].userId;

    });  

    $('#netReportBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "../oansBefore/audit_netReport.html?userId=" + selRecords[0].userId;

    });      
    

    $('#activeBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }


        confirm("确定注销/激活该用户？").then(function() {
            reqApi({
                code: '805091',
                json: {
                    userId: selRecords[0].userId,
                    updater: getUserName()
                }
            }).then(function() {
                toastr.info("操作成功");
                $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
            });

        },function(){});

    });



    $('#editBtn').off("click").click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "./custom_addedit.html?Code=" + selRecords[0].code+'&userId='+selRecords[0].userId;
    });
    $('#detailBtn').off("click").click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "./custom_detail.html?Code=" + selRecords[0].code+'&userId='+selRecords[0].userId;
    });    
      
});