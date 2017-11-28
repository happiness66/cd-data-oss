$(function() {
	
	var code = getQueryString('code');
    var userId = getQueryString('userId');
    var view = getQueryString('v');
	var borrowCount,overdueCode,renewalCount,type,jdtReport;
    var fields = [{
        field: 'mobile',
        title: '申请人',
        formatter: function(v,data){  
            borrowCount = data.user.borrowCount;
            overdueCode = data.user.overdueCode;
            renewalCount = data.user.renewalCount;
            type = data.type;
            jdtReport = data.jdtReport;            
            return data.user.mobile
        },
        afterSet:function(data){
            var html='<div class="tools" style="float: right;margin-left: 20px;">'+
                        '<div>'+
                            '<span style="float: left;margin-left: 20px;">借款次数:'+ borrowCount+' </span>'+
                            '<span style="float: left;margin-left: 20px;">逾期代码: '+ overdueCode +' </span>'+
                            '<span style="float: left;margin-left: 20px;">续期次数: '+  renewalCount +' </span>'+
                        '</div>'+               
                        '<ul class="toolbar"  style="float: left;">'+
                            '<li style="display:block;" id="reportBtn"><span><img src="/static/images/t01.png"></span>查看资信报告</li>'+
                        '</ul>'+
                     '</div>';            
            $('#mobile').append(html);
            $('#reportBtn').click(function() {
                if(type == 1){
                    window.location.href = "audit_report.html?userId=" + userId;
                }else{
                    sessionStorage.setItem('jdtReport', jdtReport);
                    window.location.href = "audit_netReport.html?userId=" + userId;
                }                
            });            
        },        
        readonly: view
    },{
        field: 'name',
        title: '申请产品',
        readonly: view,
        formatter:function(v,data){
            return data.product.name
        }
    }, {
        field: 'amount',
        title: '借款金额',
        readonly: view,
        formatter:function(v,data){
            return moneyFormat(data.product.amount)
        }
    }, {
        field: 'duration',
        title: '借款时长(天)',
        readonly: view,
        formatter:function(v,data){
            return data.product.duration
        }
    }, {
        field: 'applyDatetime',
        title: '申请时间',
        readonly: view,
        formatter:function(v,data){
            return dateTimeFormat(data.applyDatetime)
        }
    }, {
        field: 'status',
        title: '状态',
        // formatter: Dict.getNameForList("apply_status","623907"),
        formatter: function(v,data){
            // return data.status
            if(data.status == "2"){
                return "待审核"
            }else{
                return "认证中"
            }
            
        },        
        readonly: view,
    }, {
        field: 'remark',
        title: '备注',
        readonly: view,
    },{ 
        field: 'sxAmount',
        title: '授信金额',
        required: true,
        formatter:function(v,data){
            return moneyFormat(data.product.amount)
        },      
        maxlength: 250
    },{
        field: 'approveNote',
        title: '审核意见',        
        required: true,
        maxlength: 250
    }];
	
    var options = {
        fields: fields,
        code:code,
        detailCode: '623031',

    };

    options.buttons = [{
        title: '通过',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = {};
                data['code'] = code;
                data['approver'] = getUserName();
                data["approveResult"] = "1";
                data["approveNote"] = $("#approveNote").val();
                data["sxAmount"] =  moneyParse($("#sxAmount").val());               
                reqApi({
                    code: "623023",
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
                data['code'] = code;
                data['approver'] = getUserName();
                data["approveResult"] = "0";
                data["approveNote"] = $("#approveNote").val();
                data["sxAmount"] =  moneyParse($("#sxAmount").val());    
                reqApi({
                    code: "623023",
                    json: data
                }).done(function() {
                    sucDetail();
                });
            }
        }
    }, {
        title: '返回',
        handler: function() {
            window.location.href = "./audit.html"
        }
    }];

    buildDetail(options);




        

});