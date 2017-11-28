$(function () {
    var data1 = {};

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'code',
        title: '借款编号',
        search: true
    }, {
        field: 'applyUser',
        title: '申请人',
        type: 'select',
        formatter:function(v,data){
            data1[v] = data.user.mobile;
            $('#applyUser').renderDropdown2(data1);
             return data.user.mobile
        } ,     
        search: true
    }, {
        field: 'amount',
        title: '借款金额',
        amount: true,
    }, {
        field: 'lxAmount',
        title: '综合费用',
        formatter:function(v,data){
          return  moneyFormat(data.lxAmount+data.fwAmount+data.glAmount+data.xsAmount)

        }
    },{
        field: 'yhAmount',
        title: '优惠金额',
        amount: true,
    }, {
        field: 'Amount',
        title: '实际应打款金额',
        formatter:function(v,data){
          return  moneyFormat(data.amount-(data.lxAmount+data.fwAmount+data.glAmount+data.xsAmount)+data.yhAmount)

        }
    }, {
        field: 'realName',
        title: '户名',
        formatter:function(v,data){
            if(data.bankcard){
              return data.bankcard.realName  
            }
        }
    }, {
        field: 'bankName',
        title: '签约银行',
        formatter:function(v,data){
            if(data.bankcard){
              return data.bankcard.bankName 
            }
        }
    }, {
        field: 'cardNo',
        title: '签约银行卡号',
        formatter:function(v,data){
            if(data.bankcard){
              return data.bankcard.bankcardNumber
            }            
        }
    }, {
        field: 'signDatetime',
        title: '签约时间',
        formatter: dateTimeFormat
    }, {
        field: 'status',
        title: '状态',
        type: "select",
        key: "borrow_status",
        keyCode:"623907",
        formatter: Dict.getNameForList("borrow_status","623907")
    }, {
        field: 'remark',
        title: '备注',
    }];

    buildList({
        columns: columns,
        searchParams:{
            companyCode: OSS.companyCode,
            statusList: [1,8],
            isArchive: 0
        },
        pageCode: '623085'
    });

    $('#checkBtn').off('click').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
        var data = { code: selRecords[0].code, result: 1, updater: getUserName(),remark:"放款成功" };
        confirm("确认放款？").then(function() {
            reqApi({
                code: '623071',
                json: data
            }).then(function() {
                toastr.info("操作成功");
                $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
            });
        },function(){});        
       
    });    
    
    $('#failedBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }    

        var dw = dialog({
            content: '<form class="pop-form" id="popForm" novalidate="novalidate">' +
                '<ul class="form-info" id="formContainer"><li style="text-align:center;font-size: 15px;">放款失败</li></ul>' +
                '</form>'
        });

        dw.showModal();

        buildDetail({
            fields: [{
                field: 'remark',
                title: '备注',
                required: true,
                maxlength: 250
            }],
            container: $('#formContainer'),
            buttons: [ {
                title: '不通过',
                handler: function() {
                    if($('#popForm').valid()){
                        var data = [];
                        data.code = selRecords[0].code;
                        data.result = "0";
                        data.updater = getUserName();
                        data.remark = $("#remark").val();
                        reqApi({
                            code: '623071',
                            json: data
                        }).done(function(data) {
                            toastr.info("操作成功");
                            $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
                            setTimeout(function() {
                                dw.close().remove();
                            }, 500)
                        });                        

                    }
                    
                }
            }, {
                title: '取消',
                handler: function() {
                    dw.close().remove();
                }
            }]
        });

        dw.__center();  

        $('#formContainer').find('li:last-child').css({'text-align':'center','margin-left':'40px;'})      

    });  

    $('#paidBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
        var data = { code: selRecords[0].code,  updater: getUserName(),remark:"申请宝付代付" };
        confirm("确认申请宝付代付？").then(function() {
            reqApi({
                code: '623082',
                json: data
            }).then(function() {
                toastr.info("操作成功");
                $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
            });
        },function(){});        
       
    });     
    
    $('#queryBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
      var data = { code: selRecords[0].code};
        confirm("确认查询代付结果？").then(function() {
            reqApi({
                code: '623083',
                json: data
            }).then(function() {
                toastr.info("操作成功");
                $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
            });
        },function(){});       
       
    });    
});