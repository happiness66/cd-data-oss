 $(function() {
    var userId = getQueryString('userId');
    var html, html1, html2, data, jdtReport,
        extraData, personApplication, personBasic, personInfo,
         behavior_check, cell_behavior, collection_contact,
        contact_list, contact_region, deliver_address, ebusiness_expense,
        main_service, summary, trip_info, user_info_check;
    var application_check = [];
    var td_data = {},
        person_info = {};
    loading.createLoading();
    
    

    if(jdtReport = sessionStorage.getItem('jdtReport') ){
        data = JSON.parse(jdtReport)
        loading.hideLoading();
        extraData = data.appInfo.extraData;
        personApplication = data.appInfo.personApplication;
        personBasic = data.appInfo.personBasic;       
        personInfo = data.appInfo.personInfo;
        application_check = data.reportData.application_check;
        behavior_check = data.reportData.behavior_check;
        cell_behavior = data.reportData.cell_behavior[0].behavior;
        collection_contact = data.reportData.collection_contact;
        contact_list = data.reportData.contact_list;
        contact_region = data.reportData.contact_region;
        deliver_address = data.reportData.deliver_address;
        ebusiness_expense = data.reportData.ebusiness_expense;
        main_service = data.reportData.main_service;
        summary = data.reportData.summary;
        trip_info = data.reportData.trip_info;
        user_info_check = data.reportData.user_info_check.check_search_info;
        
        application_check.each(function(i, index) {
            application_check[i.app_point] = i.check_points;  
        });
        if(application_check){
            html ='<div class="bootstrap-table" style="width: 80%;">'+
                '<div class="fixed-table-container" style="padding-bottom: 0px;">'+
                    '<div class="fixed-table-header" style="display: none;">'+
                        '<table></table>'+
                    '</div>'+
                    '<div class="fixed-table-body">'+
                        '<div class="fixed-table-loading" style="top: 294px; display: none;">正在努力地加载数据中，请稍候……</div>'+
                        '<table id="tableList" data-show-export="true" class="table table-hover table-striped"  >'+
                            '<thead>'+
                                '<tr>'+
                                    '<th style="" colspan="4" tabindex="0">'+
                                        '<div class="th-inner ">用户申请信息</div>'+
                                        '<div class="fht-cell"></div>'+
                                   '</th>'+
                                '</tr>'+
                            '</thead>'+
                            '<tbody>'+
                                '<tr data-index="0">'+
                                    '<td style="" colspan="4" tabindex="0">'+
                                        '<div class="th-inner ">姓名：'+ application_check['user_name'].key_value +'</div>'+
                                         '<div class="fht-cell"></div>'+
                                '</tr>'+
                                '<tr data-index="1">'+
                                    '<td style="" colspan="2" tabindex="0">'+
                                        '<div class="th-inner ">身份证号：'+ application_check['id_card'].key_value  +'</div>'+
                                         '<div class="fht-cell"></div>'+
                                    '</td>'+
                                    '<td style="" colspan="2" tabindex="0">'+
                                        '<div class="th-inner ">'+ application_check['id_card'].gender +' | '+ application_check['id_card'].age+' | '+ application_check['id_card'].province + application_check['id_card'].city +application_check['id_card'].region +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+                                         
                                '</tr>'+                                
                                '<tr data-index="2">'+
                                    '<td style=""  colspan="2" data-field="" tabindex="0">'+
                                        '<div class="th-inner ">手机号：' + application_check['cell_phone'].key_value +'</br>'+ application_check['cell_phone'].check_name +'</br>'+ application_check['cell_phone'].check_idcard  +'</br>'+ application_check['cell_phone'].check_ebusiness +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                    '<td style=""  colspan="2" data-field="" tabindex="0">'+
                                        '<div class="th-inner ">' + application_check['cell_phone'].website +' | '+ application_check['cell_phone'].reliability +' : '+ application_check['cell_phone'].reg_time  +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+                                    
                                '</tr>'+                                
                                '<tr data-index="3">'+
                                    '<td style=""  colspan="2"  data-field="" tabindex="0">'+
                                        '<div class="th-inner ">居住地址：'+ application_check['home_addr'].key_value  +'</br>'+ application_check['home_addr'].check_ebusiness +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                    '<td style=""  colspan="2"  data-field="" tabindex="0">'+
                                        '<div class="th-inner ">'+ application_check['home_addr'].check_addr +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                '</tr>'+ 
                                '<tr data-index="4">'+
                                    '<td style=""  colspan="4" data-field="" tabindex="0">'+
                                        '<div class="th-inner ">家庭电话：'+ application_check['home_phone'].key_value  +'</br>'+ application_check['home_phone'].check_mobile +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                '</tr>'+  
                                '<tr data-index="5">'+
                                    '<td style=""  colspan="4" data-field="" tabindex="0">'+
                                        '<div class="th-inner ">联系人：'+ application_check['contact'].relationship +' | '+ application_check['contact'].contact_name  +' | '+ application_check['contact'].key_value +'</br>'+ application_check['contact'].check_mobile +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+                                    
                                '</tr>'+
                                // '<tr data-index="6">'+
                                //     '<td style=""  colspan="4" data-field="" tabindex="0">'+
                                //         '<div class="th-inner ">联系人：'+ application_check['contact'].relationship +' | '+ application_check['contact'].contact_name  +' | '+ application_check['contact'].key_value +'</br>'+ application_check['contact'].check_mobile +'</div>'+
                                //         '<div class="fht-cell"></div>'+
                                //     '</td>'+                                    
                                // '</tr>'+                                 
                                // '<tr data-index="7">'+
                                //     '<td style=""  colspan="2" data-field="" tabindex="0">'+
                                //         '<div class="th-inner ">淘宝账号：'+ !application_check['taobao'] || application_check['taobao'] == undefined ? "" : application_check['taobao'].key_value ; +'</div>'+
                                //         '<div class="fht-cell"></div>'+
                                //     '</td>'+
                                //     '<td style=""  colspan="2"  data-field="" tabindex="0">'+
                                //         '<div class="th-inner ">'+ !application_check['taobao'] || application_check['taobao'] == undefined ? "" : application_check['taobao'].reliability; +' : '+ !application_check['taobao'] || application_check['taobao']  == undefined ? "" : application_check['taobao'].reg_time; +'</div>'+
                                //         '<div class="fht-cell"></div>'+
                                //     '</td>'+                                   
                                // '</tr>'+                                 
                                // '<tr data-index="8">'+
                                //     '<td style=""  colspan="2" data-field="" tabindex="0">'+
                                //         '<div class="th-inner ">京东账号：'+ !application_check['jingdong'] || application_check['jingdong']  == undefined ? "" : application_check['jingdong'].key_value;  +'</div>'+
                                //         '<div class="fht-cell"></div>'+
                                //     '</td>'+
                                //     '<td style=""  colspan="2"  data-field="" tabindex="0">'+
                                //         '<div class="th-inner ">'+ !application_check['jingdong'] ||application_check['jingdong'] == undefined ? "" : application_check['jingdong'].reliability; +' : '+ !application_check['jingdong'] ||application_check['jingdong'] == undefined ? "" : application_check['jingdong'].reg_time; +'</div>'+
                                //         '<div class="fht-cell"></div>'+
                                    '</td>'+                                    
                                '</tr>'+                                                                                                                             
                            '</tbody>'+
                    '</div>'+
                    '<div class="fixed-table-footer" style="display: none;">'+
                        '<table>'+
                            '<tbody>'+
                                '<tr></tr>'+
                            '</tbody>'+
                        '</table>'+
                    '</div>'+
                '</div>'+
            '</div>';        
            $('#tableList').append(html);                   
        }
        
        if(user_info_check){
            html1 = '<div class="bootstrap-table" style="width: 80%;">'+
                '<div class="fixed-table-container" style="padding-bottom: 0px;">'+
                    '<div class="fixed-table-header" style="display: none;">'+
                        '<table></table>'+
                    '</div>'+
                    '<div class="fixed-table-body">'+
                        '<div class="fixed-table-loading" style="top: 294px; display: none;">正在努力地加载数据中，请稍候……</div>'+
                        '<table id="tableList1" data-show-export="true" class="table table-hover table-striped"  >'+
                            '<thead>'+
                                '<tr>'+
                                    '<th style="" colspan="4" tabindex="0">'+
                                        '<div class="th-inner ">用户信息检测</div>'+
                                        '<div class="fht-cell"></div>'+
                                   '</th>'+
                                '</tr>'+
                            '</thead>'+
                            '<tbody>'+
                                '<tr data-index="0">'+
                                    '<td style="" colspan="1" tabindex="0">'+
                                        '<div class="th-inner ">查询过该用户的相关企业数量</div>'+
                                         '<div class="fht-cell"></div>'+
                                    '</td>'+
                                    '<td style="" colspan="3" tabindex="0">'+
                                        '<div class="th-inner ">'+ user_info_check.searched_org_cnt +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+                                    
                                '</tr>'+
                                '<tr data-index="1">'+
                                    '<td style="" colspan="1" tabindex="0">'+
                                        '<div class="th-inner ">查询过该用户的相关企业类型</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                    '<td style="" colspan="3" tabindex="0">'+
                                        '<div class="th-inner ">'+ user_info_check.searched_org_type +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+ 
                                '</tr>'+
                                '<tr data-index="2">'+
                                    '<td style=""  colspan="1" data-field="" tabindex="0">'+
                                        '<div class="th-inner ">身份证组合过的其他姓名</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                    '<td style="" colspan="3" tabindex="0">'+
                                        '<div class="th-inner ">'+user_info_check.idcard_with_other_names +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+ 
                                '</tr>'+
                                '<tr data-index="3">'+
                                    '<td style=""  colspan="1" data-field="" tabindex="0">'+
                                        '<div class="th-inner ">身份证组合过其他电话</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                    '<td style="" colspan="3" tabindex="0">'+
                                        '<div class="th-inner ">'+user_info_check.idcard_with_other_phones +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+ 
                                '</tr>'+
                                '<tr data-index="4">'+
                                    '<td style=""  colspan="1" data-field="" tabindex="0">'+
                                        '<div class="th-inner ">电话号码组合过其他姓名</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                    '<td style="" colspan="3" tabindex="0">'+
                                        '<div class="th-inner ">'+ user_info_check.phone_with_other_names +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+ 
                                '</tr>'+
                                '<tr data-index="5">'+
                                    '<td style=""  colspan="1" data-field="" tabindex="0">'+
                                        '<div class="th-inner ">电话号码组合过其他身份证</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                    '<td style="" colspan="3" tabindex="0">'+
                                        '<div class="th-inner ">'+ user_info_check.phone_with_other_idcards +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+ 
                                '</tr>'+
                                '<tr data-index="6">'+
                                    '<td style=""  colspan="1" data-field="" tabindex="0">'+
                                        '<div class="th-inner ">电话号码注册过的相关企业数量</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                    '<td style="" colspan="3" tabindex="0">'+
                                        '<div class="th-inner ">'+ user_info_check.register_org_cnt +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+ 
                                '</tr>'+
                                '<tr data-index="7">'+
                                    '<td style=""  colspan="1" data-field="" tabindex="0">'+
                                        '<div class="th-inner ">电话号码注册过的相关企业类型</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                    '<td style="" colspan="3" tabindex="0">'+
                                        '<div class="th-inner ">'+ user_info_check.register_org_type +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+ 
                                '</tr>'+
                                '<tr data-index="8">'+
                                    '<td style=""  colspan="1" data-field="" tabindex="0">'+
                                        '<div class="th-inner ">电话号码出现过的百度贴吧</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                    '<td style="" colspan="3" tabindex="0">'+
                                        '<div class="th-inner ">'+ user_info_check.arised_open_web +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+ 
                                '</tr>'+                                                              
                            '</tbody>'+
                    '</div>'+
                    '<div class="fixed-table-footer" style="display: none;">'+
                        '<table>'+
                            '<tbody>'+
                                '<tr></tr>'+
                            '</tbody>'+
                        '</table>'+
                    '</div>'+
                '</div>'+
            '</div>';   

            $('#tableList1').append(html1);   
        }

        $('#tableList2').bootstrapTable({
            columns: [{
                field: 'check_point_cn',
                title: '检查项',
            },{
                field: 'result',
                title: '结果'
            },{
                field: 'evidence',
                title: '依据'
            }
        ]});         
        $('#tableList2').bootstrapTable('append', behavior_check);

        $('#tableList3').bootstrapTable({
            columns: [{
                field: 'cell_operator_zh',
                title: '运营商',
            },{
                field: 'cell_phone_num',
                title: '号码'
            },{
                field: 'cell_loc',
                title: '归属地'
            },{
                field: 'cell_mth',
                title: '月份'
            },{
                field: 'call_cnt',
                title: '呼叫次数'
            },{
                field: 'call_out_cnt',
                title: '主叫次数'
            },{
                field: 'call_out_time',
                title: '主叫时间（分钟）'
            },{
                field: 'call_in_cnt',
                title: '被叫次数'
            },{
                field: 'call_in_time',
                title: '被叫时间（分钟）'
            },{
                field: 'sms_cnt',
                title: '短信数量'
            },{
                field: 'net_flow',
                title: '流量'
            },{
                field: 'total_amount',
                title: '话费消费'
            }
        ]});           
        $('#tableList3').bootstrapTable('append', cell_behavior); 

        $('#tableList4').bootstrapTable({
            columns: [{
                field: 'region_loc',
                title: '地区',
            },{
                field: 'region_uniq_num_cnt',
                title: '号码数量'
            },{
                field: 'region_call_in_cnt',
                title: '电话呼入次数'
            },{
                field: 'region_call_out_cnt',
                title: '电话呼出次数'
            },{
                field: 'region_call_in_time',
                title: '电话呼入时间(分)'
            },{
                field: 'region_call_out_time',
                title: '电话呼出时间(分)'
            },{
                field: 'region_avg_call_in_time',
                title: '平均呼入时间(分)'
            },{
                field: 'region_avg_call_out_time',
                title: '平均呼出时间(分)'
            },{
                field: 'region_call_in_cnt_pct',
                title: '电话呼入次数占比'
            },{
                field: 'region_call_out_cnt_pct',
                title: '电话呼出次数占比'
            },{
                field: 'region_call_in_time_pct',
                title: '电话呼入时间占比'
            },{
                field: 'region_call_out_time_pct',
                title: '电话呼出时间占比'
            }
        ]});
        $('#tableList4').bootstrapTable('append', contact_region);

        $('#tableList5').bootstrapTable({
            columns: [{
                field: 'phone_num',
                title: '号码',
            },{
                field: 'contact_name',
                title: '互联网标识'
            },{
                field: 'needs_type',
                title: '需求类型'
            },{
                field: 'phone_num_loc',
                title: '归属地'
            },{
                field: 'call_cnt',
                title: '联系次数'
            },{
                field: 'call_len',
                title: '联系时间(分)'
            },{
                field: 'call_out_cnt',
                title: '主叫次数'
            },{
                field: 'call_in_cnt',
                title: '被叫次数'
            }
        ]});        
        $('#tableList5').bootstrapTable('append', contact_list); 

        $('#tableList6').bootstrapTable({
            columns: [{
                field: 'address',
                title: '地址',
            },{
                field: 'total_amount',
                title: '总消费金额'
            },{
                field: 'name',
                title: '收货人姓名'
            },{
                field: 'phone_num_list',
                title: '收货人手机'
            }
        ]});        
        $('#tableList6').bootstrapTable('append', deliver_address);

        $('#tableList7').bootstrapTable({
            columns: [{
                field: 'contact_name',
                title: '联系人姓名',
            },{
                field: 'begin_date',
                title: '最早联系时间'
            },{
                field: 'end_date',
                title: '最晚联系时间'
            },{
                field: 'phone_num',
                title: '联系电话'
            },{
                field: 'phone_num_list',
                title: '近半年通话/短信次数和时长',
                formatter: function(v,data){
                    if(data.contact_details.call_len && data.contact_details.sms_cnt){
                        return '通话'+(data.contact_details.call_len)+'分钟，短信'+(data.contact_details.sms_cnt )+'条';
                    }else if(data.contact_details.call_len){
                        return '通话'+(data.contact_details.call_len)+'分钟';
                    }else if(data.contact_details.sms_cnt){
                        return '短信'+(data.contact_details.sms_cnt )+'条';
                    }else{
                        return '-'
                    }
                   
                }
            }
        ]});         
        $('#tableList7').bootstrapTable('append', collection_contact);

        $('#tableList8').bootstrapTable({
            columns: [{
                field: 'region_loc',
                title: '地区',
            },{
                field: 'region_uniq_num_cnt',
                title: '号码数量'
            },{
                field: 'region_call_in_cnt',
                title: '电话呼入次数'
            },{
                field: 'region_call_in_time',
                title: '电话呼入时间（分）'
            },{
                field: 'region_call_out_cnt',
                title: '电话呼出次数'
            },{
                field: 'region_call_out_time',
                title: '电话呼出时间（分）'
            }
        ]});        
        $('#tableList8').bootstrapTable('append', contact_region);

        $('#tableList9').bootstrapTable({
            columns: [{
                field: 'cell_operator_zh',
                title: '运营商',
            },{
                field: 'cell_phone_num',
                title: '号码'
            },{
                field: 'cell_loc',
                title: '归属地'
            },{
                field: 'cell_mth',
                title: '月份'
            },{
                field: 'call_out_time',
                title: '主叫时间（分钟）'
            },{
                field: 'call_in_time',
                title: '被叫时间（分钟）'
            },{
                field: 'sms_cnt',
                title: '短信数量'
            },{
                field: 'total_amount',
                title: '话费消费'
            }
        ]});        
        $('#tableList9').bootstrapTable('append', cell_behavior);

        $('#tableList10').bootstrapTable({
            columns: [{
                field: 'trans_mth',
                title: '月份',
            },{
                field: 'all_count',
                title: '全部消费笔数'
            },{
                field: 'all_amount',
                title: '全部消费金额（元）'
            },{
                field: 'category',
                title: '品类分析'
            }
        ]});        
        $('#tableList10').bootstrapTable('append', ebusiness_expense);

        $('#tableList11').bootstrapTable({
            columns: [{
                field: 'trip_type',
                title: '时间段',
            },{
                field: 'trip_start_time',
                title: '出发时间'
            },{
                field: 'trip_end_time',
                title: '回程时间'
            },{
                field: 'trip_leave',
                title: '出发地'
            },{
                field: 'trip_dest',
                title: '目的地'
            }
        ]});        
        $('#tableList11').bootstrapTable('append', trip_info);
    };        
    

    $('.bootstrap-table').css("width","80%");    

    togglePanel("pageTitle","pannel");
    togglePanel("pageTitle1","pannel1");
    togglePanel("pageTitle2","pannel2");
    togglePanel("pageTitle3","pannel3");
    togglePanel("pageTitle4","pannel4");
    togglePanel("pageTitle5","pannel5");
    togglePanel("pageTitle6","pannel6");
    togglePanel("pageTitle7","pannel7");
    togglePanel("pageTitle8","pannel8");
    togglePanel("pageTitle9","pannel9");
    togglePanel("pageTitle10","pannel10");

    // $('#num').text(data.uid);
    // $('#time').text(data.report.update_time)
    $('#backBtn').click(function() {
        goBack()
    });
    
    $('#preLoanReviewBtn').on('click',function(){
        getTDReport()                
    })           

    $('#updatePreLoanReviewBtn').on('click',function(){
        updateTDReport()                
    })  

    $(window).bind('beforeunload',function(){ 
        sessionStorage.setItem('jdtReport', '');
    }); 

    function togglePanel(title,panel,left){
        $("."+title).on('click', function() {
        if($(this).siblings('i').hasClass('opean')){
            $(this).siblings('i').removeClass('opean').addClass('close').css("margin-left",left)
            $("."+panel).hide()            
        }else{
            $(this).siblings('i').removeClass('close').addClass('opean').css("margin-left",left)
            $("."+panel).show()                
        } 
    });        
    }
      
    function score (scores) {
        // if(scores == "0" || scores == "1"){
            
        // }
        $(this).parent('tr').css("background-color","rgba(255, 0, 0, 0.27)");
    }
    function isEmpty (value1, value2){
        !value1? "" : value2;
    }
    
    (function(){
        if(typeof jQuery == "undefined"){
            var  jq_script = document.createElement('script');
            jq_script.type = "text/javascript";
            jq_script.src =  "http://lib.sinaapp.com/js/jquery/1.9.1/jquery-1.9.1.min.js";
            jq_script.onload = loadPreloanLib;
            document.getElementsByTagName('head')[0].appendChild(jq_script);
        } else {
            loadPreloanLib();
        }
     
        function loadPreloanLib(){
            var td_script = document.createElement('script');
            td_script.type = "text/javascript";
            td_script.charset = "utf-8";
            td_script.src = "http://cdnjs.tongdun.cn/preloan/tdreport.1.4.min.js?r=" + (new Date()).getTime();
//                td_script.src = "./../tdreporttest.js?r=" + (new Date()).getTime();
            document.getElementsByTagName('head')[0].appendChild(td_script);
        }
    })();
    
    function getTDReport(){
        loading.createLoading(); 
        reqApi1({
            code:'623054',
            json:{userId:userId}
        }).then(function(res){
            loading.hideLoading();
            if (res.errorCode != '0') {
                toastr.warning(res.errorInfo);
                return $.Deferred().reject(res, 'Not YES').promise();
            } else {
                td_data = JSON.parse(res.data.tdData); 
                person_info = JSON.parse(res.data.personInfo); 
            }                                 
        }).then(function(){ 
            $.showTDReport(td_data,person_info);
            $('.label-span').css({
                display: 'inline-block'
            });            
        });        
    } 

    function updateTDReport(){
        loading.createLoading();
        reqApi1({
            code:'623055',
            json:{userId:userId}
        }).then(function(res){
            loading.hideLoading();
            if (res.errorCode != '0') {
                toastr.warning(res.errorInfo);
                return $.Deferred().reject(res, 'Not YES').promise()
            } else {
                toastr.success("操作成功");
            }                                             
        })        
    }       
    
});