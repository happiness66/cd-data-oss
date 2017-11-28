$(function() {
    var id = getQueryString('code');
    var html,html1,html2,html3,html4,html5;
    var userInfo={};
    var phoneInfo={};
    var report = {};
    var basicCheck = {};
    var activeDegree1 = [];
    var activeDegree2 = [];

    reqApi({
        code:"798551" ,
        json:{id:id}
    }).then(function(data){
        data = JSON.parse(data.reportData)
        
        data.user_basic.each(function(i, index) {
            userInfo[i.key] = i.value
            
        });
        data.cell_phone.each(function(i, index) {
            phoneInfo[i.key] = i.value
            
        });     
        data.report.each(function(i, index) {
            report[i.key] = i.value
            
        }); 
        data.basic_check_items.each(function(i, index) {
            basicCheck[i.check_item] = i.result;
            
        });
        data.active_degree.each(function(i, index) {
            
            if(i.app_point == "call_day" || i.app_point == "dial_cnt"|| i.app_point == "dialed_cnt"|| i.app_point == "dial_time"|| i.app_point == "dialed_time"){
                activeDegree1.push(i)
            }
            if(i.app_point !== "call_day" && i.app_point !== "dial_cnt"&& i.app_point !== "dialed_cnt"&& i.app_point !== "dial_time"&& i.app_point !== "dialed_time"){
                activeDegree2.push(i)
            }
        }); 
       
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
                                        '<div class="th-inner ">用户基本信息</div>'+
                                        '<div class="fht-cell"></div>'+
                                   '</th>'+
                                '</tr>'+
                            '</thead>'+
                            '<tbody>'+
                                '<tr data-index="0">'+
                                    '<td style="" colspan="4" tabindex="0">'+
                                        '<div class="th-inner ">姓名：'+ userInfo.name +'</div>'+
                                         '<div class="fht-cell"></div>'+
                                    '</td>'+
                                '</tr>'+
                                '<tr data-index="1">'+
                                    '<td style="" colspan="2" tabindex="0">'+
                                        '<div class="th-inner ">身份证号：'+ userInfo.id_card +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                    '<td style="" colspan="2" tabindex="0">'+
                                        '<div class="th-inner ">'+ userInfo.gender +' | '+ userInfo.age+' | '+userInfo.native_place +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                '</tr>'+
                                '<tr data-index="2">'+
                                    '<td style=""  colspan="2" data-field="" tabindex="0">'+
                                        '<div class="th-inner ">手机号码：'+ phoneInfo.mobile +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                    '<td style=""  colspan="2" data-field="" tabindex="0">'+
                                        '<div class="th-inner ">'+ report.source_name_zh +' |  注册时间:'+ phoneInfo.reg_time+' |  开户时长:'+phoneInfo.in_time +'月</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                '</tr>'+
                                '<tr data-index="3">'+
                                    '<td style=""  colspan="2"  data-field="" tabindex="0">'+
                                        '<div class="th-inner ">套餐：'+ phoneInfo.package_name+' |  余额:'+ (phoneInfo.available_balance*0.01).toFixed(2) +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                    '<td style=""  colspan="2"  data-field="" tabindex="0">'+
                                        '<div class="th-inner ">归属地：'+ phoneInfo.phone_attribution +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                '</tr>'+
                                '<tr data-index="4">'+
                                    '<td style="" colspan="2"  data-field="" tabindex="0">'+
                                        '<div class="th-inner ">邮箱：'+ phoneInfo.email +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                    '<td style="" colspan="2"  data-field="" tabindex="0">'+
                                        '<div class="th-inner ">星座：'+ userInfo.constellation +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                '</tr>'+
                                '<tr data-index="5">'+
                                    '<td style="" colspan="4" data-field="" tabindex="0">'+
                                        '<div class="th-inner ">居住地址：'+ phoneInfo.address+'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                               ' </tr>'+
                               '<tr data-index="6">'+
                                    '<td style="" colspan="2"  data-field="" tabindex="0">'+
                                        '<div class="th-inner ">注册地址：'+ phoneInfo.phone_attribution +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                    '<td style="" colspan="2"  data-field="" tabindex="0">'+
                                        '<div class="th-inner ">通话记录完整性：'+ basicCheck.call_data_check +'</div>'+
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

            html1='<tr data-index="0"><td style="">身份证号码有效性</td><td style="">'+ basicCheck.idcard_check +'</td></tr>'+
                '<tr data-index="1"><td style="">邮箱有效性</td><td style="">'+ basicCheck.email_check +'</td></tr>'+
                '<tr data-index="2"><td style="">通讯地址有效性</td><td style="">'+ basicCheck.address_check +'</td></tr>'+
                '<tr data-index="3"><td style="">身份证号码是否与运营商数据匹配</td><td style="">'+ basicCheck.idcard_match +'</td></tr>'+
                '<tr data-index="4"><td style="">姓名是否与运营商数据匹配</td><td style="">'+ basicCheck.name_match +'</td></tr>'+
                '<tr data-index="5"><td style="">通话记录完整性</td><td style="">'+ basicCheck.call_data_check +'</td></tr>';

            var locationList = data.friend_circle.location_top_list;
            var peerNumList = data.friend_circle.peer_num_top_list;
            var summary = data.friend_circle.summary;
            html2='<tr data-index="0"><td style="">朋友圈大小</td><td style="">'+ summary[0].value +'</td><td style="">'+ summary[5].value +'</td><td style="">近3/6月联系号码数</td></tr>'+
                '<tr data-index="1"><td style="">朋友圈亲密度</td><td style="">'+ summary[1].value +'</td><td style="">'+ summary[6].value +'</td><td style=""> 近3/6月联系十次以上的号码数量</td></tr>'+
                '<tr data-index="2"><td style="">朋友圈中心地</td><td style="">'+ summary[2].value +'</td><td style="">'+ summary[7].value +'</td><td style="">近3/6月联系次数最多的归属地</td></tr>'+
                '<tr data-index="3"><td style="">朋友圈是否在本地</td><td style="">'+ summary[3].value +'</td><td style="">'+ summary[8].value +'</td><td style="">近3/6月朋友圈中心地是否与手机归属地一致</td></tr>'+
                '<tr data-index="4"><td style="">互通电话的号码数目</td><td style="">'+ summary[4].value +'</td><td style="">'+ summary[9].value +'</td><td style=""></td></tr>';
            
            html3='<tr data-index="0"><td style="">号码沉默度</td><td style="">'+ basicCheck.mobile_silence_3m +'</td><td style="">'+ basicCheck.mobile_silence_6m +'</td><td style="">满分10分</td></tr>'+
                '<tr data-index="1"><td style="">欠费风险度</td><td style="">'+ basicCheck.arrearage_risk_3m +'</td><td style="">'+ basicCheck.arrearage_risk_6m +'</td><td style="">满分10分</td></tr>'+
                '<tr data-index="2"><td style="">亲情网风险度</td><td style="">'+ basicCheck.binding_risk +'</td><td style="">--</td><td style="">满分10分</td></tr>';                        

            html4='<tr data-index="0"><td style="">申请人姓名+身份证号码是否出现在法院黑名单</td><td style="">'+ basicCheck.is_name_and_idcard_in_court_black +'</td></tr>'+
                '<tr data-index="1"><td style="">申请人姓名+身份证号码是否出现在金融机构黑名单</td><td style="">'+ basicCheck.is_name_and_idcard_in_finance_black +'</td></tr>'+
                '<tr data-index="2"><td style="">申请人姓名+手机号码是否出现在金融机构黑名单</td><td style="">'+ basicCheck.is_name_and_mobile_in_finance_black +'</td></tr>';

            html5='<tr data-index="1"><td style="">'+data.active_degree[2].app_point_zh+'</td><td style="">'+ data.active_degree[2].item.item_3m +'</td><td style="">'+ data.active_degree[2].item.item_6m +'</td></tr>'+
                 '<tr data-index="2"><td style="">账单最新认证时间</td><td style="">'+ phoneInfo.bill_certification_day +'</td><td style="">--</td></tr>';                     

            $('#tableList').append(html);
            $('#tableList1').bootstrapTable('prepend',report );            
            $('#tableList2 tbody').html(html1); 
            $('#tableList3 tbody').hide();  
            $('#tableList4 tbody').html(html2);
            peerNumList[0].top_item.each(function(i, index) {
                $('#tableList5').bootstrapTable('append',peerNumList[0].top_item[index]);
            });
            peerNumList[1].top_item.each(function(i, index) {
                $('#tableList6').bootstrapTable('append',peerNumList[1].top_item[index]);
            });
            locationList[0].top_item.each(function(i, index) {
                $('#tableList7').bootstrapTable('append',locationList[0].top_item[index]);
            }); 
            locationList[1].top_item.each(function(i, index) {
                $('#tableList8').bootstrapTable('append',locationList[1].top_item[index]);
            }); 
            $('#tableList9 tbody').hide();
            $('#tableList10 tbody').html(html3); 
            $('#tableList11 tbody').html(html4);
            $('#tableList12').bootstrapTable('append',data.call_risk_analysis);
            $('#tableList13 tbody').hide();
            $('#tableList14').bootstrapTable('append', activeDegree1);
            $('#tableList15 tbody').hide();
            $('#tableList16 tbody').html(html5);
            $('#tableList17').bootstrapTable('append',data.consumption_detail);
            $('#tableList18 tbody').hide();
            $('#tableList19').bootstrapTable('append',data.roam_analysis);
            $('#tableList20 tbody').hide();
            $('#tableList21').bootstrapTable('append', activeDegree2);
            $('#tableList22 tbody').hide();
            $('#tableList23').bootstrapTable('append', data.call_contact_detail);  
            $('#tableList24').bootstrapTable('append', data.call_duration_detail[0].duration_list); 
            $('#tableList25').bootstrapTable('append', data.call_duration_detail[1].duration_list);  
            $('#tableList26').bootstrapTable('append', data.contact_region[0].region_list);
            $('#tableList27').bootstrapTable('append', data.contact_region[1].region_list);                             
            $('#tableList28 tbody').hide();
            $('#tableList29').bootstrapTable('append', data.call_time_detail);
            $('#tableList30 tbody').hide(); 
            $('#tableList31').bootstrapTable('append', data.call_risk_analysis);  
            $('#tableList32 tbody').hide(); 
            $('#tableList33').bootstrapTable('append', data.call_family_detail);
            $('#tableList34').bootstrapTable('append', data.call_service_analysis);
            $('#tableList35').bootstrapTable('append', data.main_service);
            $('#tableList36 tbody').hide(); 
            $('#tableList37').bootstrapTable('append', data.roam_detail);                                          
    });  

    $('#tableList38').bootstrapTable({
            columns: [{
                title: '1.2 数据来源',
                colspan:3  
            }]  });     

    $('#tableList1').bootstrapTable({
        columns: [{
            field: 'source_name_zh',
            title: '来源名称',
        },{
            field: 'data_type',
            title: '数据类别',
            search: true
        },{
            title: "获取时间",
            field: "data_gain_time",
        }
    ]});

    $('#tableList39').bootstrapTable({
            columns: [{
                title: '1.3信息校验',
                colspan:2  
            }]  });    

    $('#tableList2').bootstrapTable({
            columns: [{
                field: 'check_item',
                title: '检查项',
            },{
                field: 'result',
                title: '结果',
                search: true
            }
    ]});

    $('#tableList3').bootstrapTable({
            columns: [{
                title: '1.4社交分析摘要',
                colspan:2  
            }] });
    $('#tableList4').bootstrapTable({
            columns: [{
                field: 'check_item',
                title: '检查项(朋友圈)',
            },{
                field: 'result',
                title: '近3月',
            },{
                field: 'result',
                title: '近6月',
            },{
                field: 'result',
                title: '备注',
            }
    ] });  

    $('#tableList5').bootstrapTable({
            columns: [{
                field: 'peer_number',
                title: '联系人号码 (近3月通话次数Top3降序)',
            },{
                field: 'peer_num_loc',
                title: '归属地',
            },{
                field: 'call_cnt',
                title: '通话次数',
            },{
                field: 'call_time',
                title: '通话时长（秒）',
            },{
                field: 'dial_cnt',
                title: '主叫次数',
            },{
                field: 'dialed_cnt',
                title: '被叫次数',
            }
    ] });

    $('#tableList6').bootstrapTable({
            columns: [{
                field: 'peer_number',
                title: '联系人号码 (近6月通话次数Top3降序)',
            },{
                field: 'peer_num_loc',
                title: '归属地',
            },{
                field: 'call_cnt',
                title: '通话次数',
            },{
                field: 'call_time',
                title: '通话时长（秒）',
            },{
                field: 'dial_cnt',
                title: '主叫次数',
            },{
                field: 'dialed_cnt',
                title: '被叫次数',
            }
    ] });

    $('#tableList7').bootstrapTable({
            columns: [{
                field: 'location',
                title: '联系人号码归属地 (近3月通话次数Top3降序)',
            },{
                field: 'call_cnt',
                title: '通话次数',
            },{
                field: 'peer_number_cnt',
                title: '通话号码数',
            },{
                field: 'call_time',
                title: '通话时长（秒）',
            },{
                field: 'dial_cnt',
                title: '主叫次数',
            },{
                field: 'dialed_cnt',
                title: '被叫次数',
            }
    ] }); 

    $('#tableList8').bootstrapTable({
            columns: [{
                field: 'location',
                title: '联系人号码归属地 (近6月通话次数Top3降序)',
            },{
                field: 'call_cnt',
                title: '通话次数',
            },{
                field: 'peer_number_cnt',
                title: '通话号码数',
            },{
                field: 'call_time',
                title: '通话时长（秒）',
            },{
                field: 'dial_cnt',
                title: '主叫次数',
            },{
                field: 'dialed_cnt',
                title: '被叫次数',
            }
    ] });                     

    $('#tableList9').bootstrapTable({
            columns: [{
                title: '1.5 风险分析摘要',
                colspan:2  
    }] });  

    $('#tableList10').bootstrapTable({
            columns: [{
                field: 'check_item',
                title: '检查项(风险识别)',
            },{
                field: 'result',
                title: '近3月',
            },{
                field: 'result',
                title: '近6月',
            },{
                field: 'result',
                title: '备注',
            }
    ] });

    $('#tableList11').bootstrapTable({
            columns: [{
                field: 'check_item',
                title: '检查项(风险识别)',
            },{
                field: 'result',
                title: '结果',
                search: true
            }
    ]});

    $('#tableList12').bootstrapTable({
            columns: [{
                field: 'analysis_desc',
                title: '号码类别(风险联系)',
            },{
                field: 'call_cnt_3m',
                title: '近3月通话次数',
                formatter:function(v,data){
                    return data.analysis_point.call_cnt_3m
                }
            },{
                field: 'call_cnt_6m',
                title: '近6月通话次数',
                formatter:function(v,data){
                    return data.analysis_point.call_cnt_6m
                }                
            },{
                field: 'call_time_3m',
                title: '近3月通话时长（秒）',
                formatter:function(v,data){
                    return data.analysis_point.call_time_3m
                }                
            },{
                field: 'call_time_6m',
                title: '近6月通话时长（秒）',
                formatter:function(v,data){
                    return data.analysis_point.call_time_6m
                }                
            }
    ] });     

    $('#tableList13').bootstrapTable({
            columns: [{
                title: '1.6 活跃分析',
                colspan:2  
    }] });

    $('#tableList14').bootstrapTable({
            columns: [{
                field: 'app_point_zh',
                title: '检查项(活跃识别)',
            },{
                field: 'item_3m',
                title: '近3月',
                formatter:function(v,data){
                    return data.item.item_3m
                }                
            },{
                field: 'item_6m',
                title: '近6月',
                formatter:function(v,data){
                    return data.item.item_6m
                }                
            }
    ] });

    $('#tableList15').bootstrapTable({
            columns: [{
                title: '1.7 消费分析',
                colspan:2  
    }] });

    $('#tableList16').bootstrapTable({
            columns: [{
                field: 'app_point_zh',
                title: '检查项(消费识别)',
            },{
                field: 'item_3m',
                title: '近3月',
                formatter:function(v,data){
                    return data.item.item_3m
                }                
            },{
                field: 'item_6m',
                title: '近6月',
                formatter:function(v,data){
                    return data.item.item_6m
                }                
            }
    ] });

    $('#tableList17').bootstrapTable({
            columns: [{
                field: 'app_point_zh',
                title: '消费类别(消费细类统计)',
            },{
                field: 'item_1m',
                title: '近1月消费金额（分）',
                formatter:function(v,data){
                    return data.item.item_1m
                }                
            },{
                field: 'item_3m',
                title: '近3月消费金额（分）',
                formatter:function(v,data){
                    return data.item.item_3m
                }                
            },{
                field: 'item_6m',
                title: '近6月消费金额（分）',
                formatter:function(v,data){
                    return data.item.item_6m
                }                
            },{
                field: 'avg_item_3m',
                title: '近3月月均消费金额（分）',
                formatter:function(v,data){
                    return data.item.avg_item_3m
                }                
            },{
                field: 'avg_item_6m',
                title: '近6月月均消费金额（分）',
                formatter:function(v,data){
                    return data.item.avg_item_6m
                }                
            }
    ] });

    $('#tableList18').bootstrapTable({
            columns: [{
                title: '1.8 漫游分析摘要(近6月漫游天数降序)',
                colspan:2  
    }] });

    $('#tableList19').bootstrapTable({
            columns: [{
                field: 'roam_location',
                title: '漫游地',
            },{
                field: 'roam_day_cnt_3m',
                title: '近3月漫游天数',                
            },{
                field: 'roam_day_cnt_6m',
                title: '近6月漫游天数',                
            },{
                field: 'continue_roam_cnt_3m',
                title: '近3月最大连续漫游天数',                
            },{
                field: 'continue_roam_cnt_6m',
                title: '近6月最大连续漫游天数'                
            },{
                field: 'max_roam_day_cnt_3m',
                title: '近3月连续漫游1天以上的次数'                
            },{
                field: 'max_roam_day_cnt_6m',
                title: '近6月连续漫游1天以上的次数'                
            }
    ] }); 

    $('#tableList20').bootstrapTable({
            columns: [{
                title: '2.1 总体统计',
                colspan:2  
    }] });     

    $('#tableList21').bootstrapTable({
            columns: [{
                field: 'app_point_zh',
                title: '检查项',
            },{
                field: 'item_1m',
                title: '近1月',
                formatter:function(v,data){
                    return data.item.item_1m
                }                
            },{
                field: 'item_3m',
                title: '近3月',
                formatter:function(v,data){
                    return data.item.item_3m
                }                
            },{
                field: 'item_6m',
                title: '近6月 ',
                formatter:function(v,data){
                    return data.item.item_6m
                }                
            },{
                field: 'avg_item_3m',
                title: '近3月月均',
                formatter:function(v,data){
                    return data.item.avg_item_3m
                }                
            },{
                field: 'avg_item_6m',
                title: '近6月月均',
                formatter:function(v,data){
                    return data.item.avg_item_6m
                }                
            }
    ] });

    $('#tableList22').bootstrapTable({
            columns: [{
                title: '2.2 详细统计',
                colspan:2  
    }] });  

    $('#tableList23').bootstrapTable({
            columns: [{
                field: 'peer_num',
                title: '联系人号码',
            },{
                field: 'company_name',
                title: '号码标识',                
            },{
                field: 'group_name',
                title: '号码类型',                
            },{
                field: 'city',
                title: '归属地',                
            },{
                field: 'call_cnt_1w',
                title: '近一周通话次数'                
            },{
                field: 'call_cnt_1m',
                title: '近一月通话次数'                
            },{
                field: 'call_cnt_3m',
                title: '近三月通话次数'                
            },{
                field: 'call_cnt_6m',
                title: '近六月通话次数'                
            },{
                field: 'call_time_3m',
                title: '近三月通话时长（秒）'                
            },{
                field: 'call_time_6m',
                title: '近六月通话时长（秒）'                
            }
    ] });    

    $('#tableList24').bootstrapTable({
            columns: [{
                field: 'time_step_zh',
                title: '通话时段（近三月）',
            },{
                field: 'total_cnt',
                title: '通话次数',
                formatter:function(v,data){
                    return data.item.total_cnt
                }                                
            },{
                field: 'uniq_num_cnt',
                title: '通话号码数',
                formatter:function(v,data){
                    return data.item.uniq_num_cnt
                }                                
            },{
                field: 'total_time',
                title: '通话时长（秒）',
                formatter:function(v,data){
                    return data.item.total_time
                }                                
            },{
                field: 'dial_cnt',
                title: '主叫次数',
                formatter:function(v,data){
                    return data.item.dial_cnt
                }                                
            },{
                field: 'dialed_cnt',
                title: '被叫次数',
                formatter:function(v,data){
                    return data.item.dialed_cnt
                }                                
            },{
                field: 'farthest_call_time',
                title: '最后一次通话时间',
                formatter:function(v,data){
                    return data.item.farthest_call_time
                }                                
            },{
                field: 'latest_call_time',
                title: '最后一次通话时间',
                formatter:function(v,data){
                    return data.item.latest_call_time
                }                                
            }
    ] });  

    $('#tableList25').bootstrapTable({
            columns: [{
                field: 'time_step_zh',
                title: '通话时段（近六月）',
            },{
                field: 'total_cnt',
                title: '通话次数',
                formatter:function(v,data){
                    return data.item.total_cnt
                }                                
            },{
                field: 'uniq_num_cnt',
                title: '通话号码数',
                formatter:function(v,data){
                    return data.item.uniq_num_cnt
                }                                
            },{
                field: 'total_time',
                title: '通话时长（秒）',
                formatter:function(v,data){
                    return data.item.total_time
                }                                
            },{
                field: 'dial_cnt',
                title: '主叫次数',
                formatter:function(v,data){
                    return data.item.dial_cnt
                }                                
            },{
                field: 'dialed_cnt',
                title: '被叫次数',
                formatter:function(v,data){
                    return data.item.dialed_cnt
                }                                
            },{
                field: 'farthest_call_time',
                title: '最后一次通话时间',
                formatter:function(v,data){
                    return data.item.farthest_call_time
                }                                
            },{
                field: 'latest_call_time',
                title: '最后一次通话时间',
                formatter:function(v,data){
                    return data.item.latest_call_time
                }                                
            }
    ] });

    $('#tableList26').bootstrapTable({
            columns: [{
                field: 'region_loc',
                title: '联系人手机号码归属地 (近3月联系次数降序)',                
            },{
                field: 'region_call_cnt',
                title: '通话次数',                                
            },{
                field: 'region_uniq_num_cnt',
                title: '通话号码数'                                
            },{
                field: 'region_call_time',
                title: '通话时长（秒）'                                
            },{
                field: 'region_dial_cnt',
                title: '主叫次数'                                
            },{
                field: 'region_dialed_cnt',
                title: '被叫次数'                                
            },{
                field: 'region_dial_time',
                title: '主叫时长（秒）'                                
            },{
                field: 'region_dialed_time',
                title: '被叫时长（秒）'                                
            },{
                field: 'region_avg_dial_time',
                title: '平均主叫时长（秒）'                                
            },{
                field: 'region_avg_dialed_time',
                title: '平均被叫时长（秒）'                                
            },{
                field: 'region_dial_cnt_pct',
                title: '主叫次数比重'                                
            },{
                field: 'region_dialed_cnt_pct',
                title: '被叫次数比重'                                
            },{
                field: 'region_dial_time_pct',
                title: '主叫时长比重'                                
            },{
                field: 'region_dialed_time_pct',
                title: '被叫时长比重'                                
            }
    ] });  

    $('#tableList27').bootstrapTable({
            columns: [{
                field: 'region_loc',
                title: '联系人手机号码归属地 (近6月联系次数降序)',                
            },{
                field: 'region_call_cnt',
                title: '通话次数',                                
            },{
                field: 'region_uniq_num_cnt',
                title: '通话号码数'                                
            },{
                field: 'region_call_time',
                title: '通话时长（秒）'                                
            },{
                field: 'region_dial_cnt',
                title: '主叫次数'                                
            },{
                field: 'region_dialed_cnt',
                title: '被叫次数'                                
            },{
                field: 'region_dial_time',
                title: '主叫时长（秒）'                                
            },{
                field: 'region_dialed_time',
                title: '被叫时长（秒）'                                
            },{
                field: 'region_avg_dial_time',
                title: '平均主叫时长（秒）'                                
            },{
                field: 'region_avg_dialed_time',
                title: '平均被叫时长（秒）'                                
            },{
                field: 'region_dial_cnt_pct',
                title: '主叫次数比重'                                
            },{
                field: 'region_dialed_cnt_pct',
                title: '被叫次数比重'                                
            },{
                field: 'region_dial_time_pct',
                title: '主叫时长比重'                                
            },{
                field: 'region_dialed_time_pct',
                title: '被叫时长比重'                                
            }
    ] });

    $('#tableList28').bootstrapTable({
            columns: [{
                title: '2.3 通话时间详细统计',
                colspan:2  
    }] });      

    $('#tableList29').bootstrapTable({
            columns: [{
                field: 'app_point_zh',
                title: '检查项',
            },{
                field: 'item_1m',
                title: '近1月 ',
                formatter:function(v,data){
                    return data.item.item_1m
                }                                
            },{
                field: 'item_3m',
                title: '近3月 ',
                formatter:function(v,data){
                    return data.item.item_3m
                }                                
            },{
                field: 'item_6m',
                title: '近6月 ',
                formatter:function(v,data){
                    return data.item.item_6m
                }                                
            },{
                field: 'avg_item_3m',
                title: '近3月月均   ',
                formatter:function(v,data){
                    return data.item.avg_item_3m
                }                                
            },{
                field: 'avg_item_6m',
                title: '近6月月均',
                formatter:function(v,data){
                    return data.item.avg_item_6m
                }                                
            }
    ] });  

    $('#tableList30').bootstrapTable({
            columns: [{
                title: '3.1 风险统计',
                colspan:2  
    }] });      

    $('#tableList31').bootstrapTable({
            columns: [{
                field: 'analysis_desc',
                title: '检查项(与该项通话次数和时长)',
            },{
                field: 'call_cnt_1m',
                title: '近1月 ',
                formatter:function(v,data){
                    return data.analysis_point.call_time_1m+'/'+data.analysis_point.call_cnt_1m
                }                                
            },{
                field: 'call_cnt_3m',
                title: '近3月 ',
                formatter:function(v,data){
                    return data.analysis_point.call_time_3m+'/'+data.analysis_point.call_cnt_3m
                }                                
            },{
                field: 'call_cnt_6m',
                title: '近6月 ',
                formatter:function(v,data){
                    return data.analysis_point.call_time_6m+'/'+data.analysis_point.call_cnt_6m
                }                                
            },{
                field: 'avg_call_cnt_3m',
                title: '近3月月均   ',
                formatter:function(v,data){
                    return data.analysis_point.avg_call_time_3m+'/'+data.analysis_point.avg_call_cnt_3m
                }                                
            },{
                field: 'avg_call_cnt_6m',
                title: '近6月月均',
                formatter:function(v,data){
                    return data.analysis_point.avg_call_time_6m+'/'+data.analysis_point.avg_call_cnt_6m
                }                                
            }
    ] }); 

    $('#tableList32').bootstrapTable({
            columns: [{
                title: '3.2 稳定性',
                colspan:2  
    }] });      

    $('#tableList33').bootstrapTable({
            columns: [{
                field: 'app_point_zh',
                title: '检查项',
            },{
                field: 'item_1m',
                title: '近1月 ',
                formatter:function(v,data){
                    return data.item.item_1m
                }                                
            },{
                field: 'item_3m',
                title: '近3月 ',
                formatter:function(v,data){
                    return data.item.item_3m
                }                                
            },{
                field: 'item_6m',
                title: '近6月 ',
                formatter:function(v,data){
                    return data.item.item_6m
                }                                
            }
    ] }); 

    $('#tableList34').bootstrapTable({
            columns: [{
                field: 'analysis_desc',
                title: '常用服务类型(与该项通话次数和时长)',
            },{
                field: 'call_cnt_1m',
                title: '近1月 ',
                formatter:function(v,data){
                    return data.analysis_point.call_time_1m+'/'+data.analysis_point.call_cnt_1m
                }                                
            },{
                field: 'call_cnt_3m',
                title: '近3月 ',
                formatter:function(v,data){
                    return data.analysis_point.call_time_3m+'/'+data.analysis_point.call_cnt_3m
                }                                
            },{
                field: 'call_cnt_6m',
                title: '近6月 ',
                formatter:function(v,data){
                    return data.analysis_point.call_time_6m+'/'+data.analysis_point.call_cnt_6m
                }                                
            }
    ] });   





    $('#tableList35').bootstrapTable({
            columns: [{
                field: 'service_num',
                title: '服务号码 (与服务号通话详情,按月统计)',
                               
            },{
                field: 'interact_mth',
                title: '月份 ',    
                formatter:function(v,data){
                    return data.service_details[0].interact_mth
                }                                            
            },{
                field: 'interact_cnt',
                title: '通话次数',
                formatter:function(v,data){
                    return data.service_details[0].interact_cnt
                }                                                
            },{
                field: 'interact_time',
                title: '通话时长（秒）',
                formatter:function(v,data){
                    return data.service_details[0].interact_time
                }                                              
            },{
                field: 'dial_cnt',
                title: '主叫次数',
                formatter:function(v,data){
                    return data.service_details[0].dial_cnt
                }                                              
            },{
                field: 'dialed_cnt',
                title: '被叫次数',
                formatter:function(v,data){
                    return data.service_details[0].dialed_cnt
                }                                              
            },{
                field: 'dial_time',
                title: '主叫时长（秒）',
                formatter:function(v,data){
                    return data.service_details[0].dial_time
                }                                              
            },{
                field: 'dialed_time',
                title: '被叫时长（秒）',
                formatter:function(v,data){
                    return data.service_details[0].dialed_time
                }                                              
            }
    ] });

    $('#tableList36').bootstrapTable({
            columns: [{
                title: '3.3 漫游详情统计(近6月漫游日期降序)',
                colspan:2  
    }] });     

    $('#tableList37').bootstrapTable({
            columns: [{
                field: 'roam_day',
                title: '漫游日期 ',
            },{
                field: 'roam_location',
                title: '漫游城市 ',
                                                
            }
    ] });     


    $('.bootstrap-table').css("width","80%");

    // $('#exportBtn').click(function() {
    //     $('#tableList36').tableExport({type :' pdf ',
    //                        jspdf : {orientation :  ' l ',
    //                                格式:  ' a3 ',
    //                                边距:  {left : 10,right: 10,top : 20,bottom : 20 },
    //                                autotable :  {styles :  {fillColor :  ' inherit ',
    //                                                     textColor :  ' inherit ' },
    //                                            tableWidth :  ' auto ' }
    //                               }
    //                       });
    // });    
    
// $('#exportBtn').click(function() {
//         $('.export .btn').click();
//     });    

    
});