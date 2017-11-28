 $(function() {
    var userId = getQueryString('userId');
    var html, html1, html2, html3, html4, html5, html6, html7, html8,
        infoBasic, infoContact, infoOccupation, infoBankcard, infoCarrier, infoIdentify,
        infoAntifraud, infoIdentifyPic, infoZMCredit, infoIdentifyFace, infoAddressBook,
        infoAntifraudFlag, infoAddressBookFlag, infoZMCreditFlag, infoCarrierFlag,
        infoBasicFlag, infoIdentifyFlag, infoIdentifyFaceFlag, infoIdentifyPicFlag,
        infoOccupationFlag, infoContactFlag, infoBankcardFlag;

    var verifyInfo = "",
        riskInfoList="",
        td_data = {},
        person_info = {};

    loading.createLoading();
    
    
    reqApi({
        code:"623050" ,
        json:{userId:userId}
    }).then(function(data){
        loading.hideLoading();
        infoBasic = data.infoBasic;
        infoContact = data.infoContact;
        infoOccupation = data.infoOccupation;
        infoBankcard = data.infoBankcard;
        infoIdentify = data.infoIdentify;
        infoAntifraud = data.infoAntifraud;
        infoIdentifyPic = data.infoIdentifyPic;
        infoZMCredit = data.infoZMCredit;
        infoIdentifyFace = data.infoIdentifyFace;
        infoCarrier = data.infoCarrier;
        infoAddressBook = data.infoAddressBook

        infoAntifraudFlag = data.infoAntifraudFlag;
        infoAddressBookFlag =  data.infoAddressBookFlag;
        infoZMCreditFlag = data.infoZMCreditFlag;
        infoCarrierFlag = data.infoCarrierFlag;
        infoBasicFlag = data.infoBasicFlag;
        infoIdentifyFlag = data.infoIdentifyFlag;
        infoIdentifyFaceFlag = data.infoIdentifyFaceFlag;
        infoIdentifyPicFlag = data.infoIdentifyPicFlag;
        infoOccupationFlag = data.infoOccupationFlag;
        infoContactFlag = data.infoContactFlag;
        infoBankcardFlag = data.infoBankcardFlag; 

        if(infoBasicFlag !== "0" && infoIdentifyFlag !== "0" ){
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
                                        '<div class="th-inner ">基本信息</div>'+
                                        '<div class="fht-cell"></div>'+
                                   '</th>'+
                                '</tr>'+
                            '</thead>'+
                            '<tbody>'+
                                '<tr data-index="0">'+
                                    '<td style="" colspan="4" tabindex="0">'+
                                        '<div class="th-inner ">姓名：'+ infoIdentify.realName +'</div>'+
                                         '<div class="fht-cell"></div>'+
                                '</tr>'+
                                '<tr data-index="1">'+
                                '<td style="" colspan="2" tabindex="0">'+
                                        '<div class="th-inner ">身份证号：'+ infoIdentify.idNo +'</div>'+
                                         '<div class="fht-cell"></div>'+
                                    '<td style="" colspan="2" tabindex="0">'+
                                        '<div class="th-inner ">学历：'+ Dict.getNameForList1('education','623907',infoBasic.education) +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+                                         
                                    '</td>'+
                                '</tr>'+                                
                                '<tr data-index="2">'+
                                    '<td style=""  colspan="2" data-field="" tabindex="0">'+
                                        '<div class="th-inner ">婚姻状况：' +Dict.getNameForList1('marriage','623907',infoBasic.marriage) +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                    '<td style=""  colspan="2" data-field="" tabindex="0">'+
                                        '<div class="th-inner ">子女个数：'+ infoBasic.childrenNum +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                '</tr>'+                                
                                '<tr data-index="3">'+
                                    '<td style=""  colspan="2"  data-field="" tabindex="0">'+
                                        '<div class="th-inner ">QQ：'+ infoBasic.qq +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                    '<td style=""  colspan="2"  data-field="" tabindex="0">'+
                                        '<div class="th-inner ">邮箱：'+ infoBasic.email +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                '</tr>'+ 
                                '<tr data-index="4">'+
                                    '<td style=""  colspan="2" data-field="" tabindex="0">'+
                                        '<div class="th-inner ">居住地址：'+ infoBasic.provinceCity +infoBasic.address +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                    '<td style=""  colspan="2" data-field="" tabindex="0">'+
                                        '<div class="th-inner ">居住时长：'+ Dict.getNameForList1('live_time','623907',infoBasic.liveTime) +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                '</tr>'+  
                                '<tr data-index="5">'+
                                    '<td style=""  colspan="4" data-field="" tabindex="0">'+
                                        '<div class="th-inner ">注册地址：';
                                        if(data.userInfo.province){
                                            if(data.userInfo.address){
                                                if(data.userInfo.province == data.userInfo.city ){
                                                    html += data.userInfo.city + data.userInfo.area + data.userInfo.address;
                                                }else{
                                                    html += data.userInfo.province + data.userInfo.city + data.userInfo.area + data.userInfo.address;
                                                }                        
                                            }else{
                                                if(data.userInfo.province == data.userInfo.city ){
                                                    html += data.userInfo.city + data.userInfo.area;
                                                }else {
                                                    html += data.userInfo.province + data.userInfo.city + data.userInfo.area;
                                                }                        
                                            }                    
                                        }else{
                                            html += '-';
                                        }                                        

                                html += '</div>'+
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
            $('#tableList').append(html);                   
        }
        
        if(infoOccupationFlag !== "0" ){
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
                                        '<div class="th-inner ">职业信息</div>'+
                                        '<div class="fht-cell"></div>'+
                                   '</th>'+
                                '</tr>'+
                            '</thead>'+
                            '<tbody>'+
                                '<tr data-index="0">'+
                                    '<td style="" colspan="2" tabindex="0">'+
                                        '<div class="th-inner ">职业：'+ Dict.getNameForList1('occupation','623907',infoOccupation.occupation) +'</div>'+
                                         '<div class="fht-cell"></div>'+
                                    '</td>'+
                                    '<td style="" colspan="2" tabindex="0">'+
                                        '<div class="th-inner ">月收入：'+ Dict.getNameForList1('income','623907',infoOccupation.income) +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+                                    
                                '</tr>'+
                                '<tr data-index="1">'+
                                    '<td style="" colspan="2" tabindex="0">'+
                                        '<div class="th-inner ">单位名称：'+ infoOccupation.company +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+                                    
                                    '<td style="" colspan="2" tabindex="0">'+
                                        '<div class="th-inner ">单位电话：'+ infoOccupation.phone +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+
                                '</tr>'+
                                '<tr data-index="2">'+
                                    '<td style=""  colspan="4" data-field="" tabindex="0">'+
                                        '<div class="th-inner ">单位地址：'+infoOccupation.provinceCity +' , '+infoOccupation.address +'</div>'+
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
        
        if (infoContactFlag  !== "0" ) {
            html2 = '<div class="bootstrap-table" style="width: 80%;">'+
                '<div class="fixed-table-container" style="padding-bottom: 0px;">'+
                    '<div class="fixed-table-header" style="display: none;">'+
                        '<table></table>'+
                    '</div>'+
                    '<div class="fixed-table-body">'+
                        '<div class="fixed-table-loading" style="top: 294px; display: none;">正在努力地加载数据中，请稍候……</div>'+
                        '<table id="tableList2" data-show-export="true" class="table table-hover table-striped"  >'+
                            '<thead>'+
                                '<tr>'+
                                    '<th style="" colspan="4" tabindex="0">'+
                                        '<div class="th-inner ">紧急联系人</div>'+
                                        '<div class="fht-cell"></div>'+
                                   '</th>'+
                                '</tr>'+
                            '</thead>'+
                            '<tbody>'+
                                '<tr data-index="0">'+
                                    '<td style="" colspan="1" tabindex="0">'+
                                        '<div class="th-inner ">家庭关系：'+  Dict.getNameForList1('family_relation','623907',infoContact.familyRelation) +'</div>'+
                                         '<div class="fht-cell"></div>'+
                                    '</td>'+
                                    '<td style="" colspan="1" tabindex="0">'+
                                        '<div class="th-inner ">姓名：'+ (infoContact.familyName?infoContact.familyName:"") +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+                                    
                                    '<td style="" colspan="2" tabindex="0">'+
                                        '<div class="th-inner ">联系方式：'+ infoContact.familyMobile +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+                                    
                                '</tr>'+
                                '<tr data-index="1">'+
                                    '<td style="" colspan="1" tabindex="0">'+
                                        '<div class="th-inner ">社会关系：'+ Dict.getNameForList1('society_relation','623907',infoContact.societyRelation) +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+  
                                    '<td style="" colspan="1" tabindex="0">'+
                                        '<div class="th-inner ">姓名：'+ (infoContact.societyName?infoContact.societyName:"") +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+                                                                      
                                    '<td style="" colspan="2" tabindex="0">'+
                                        '<div class="th-inner ">联系方式：'+ infoContact.societyMobile +'</div>'+
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
            $('#tableList2').append(html2);              
        }

        if (infoBankcardFlag && infoBankcardFlag  !== "0" ) {
               html3 = '<div class="bootstrap-table" style="width: 80%;">'+
                '<div class="fixed-table-container" style="padding-bottom: 0px;">'+
                    '<div class="fixed-table-header" style="display: none;">'+
                        '<table></table>'+
                    '</div>'+
                    '<div class="fixed-table-body">'+
                        '<div class="fixed-table-loading" style="top: 294px; display: none;">正在努力地加载数据中，请稍候……</div>'+
                        '<table id="tableList3" data-show-export="true" class="table table-hover table-striped"  >'+
                            '<thead>'+
                                '<tr>'+
                                    '<th style="" colspan="4" tabindex="0">'+
                                        '<div class="th-inner ">银行卡信息</div>'+
                                        '<div class="fht-cell"></div>'+
                                   '</th>'+
                                '</tr>'+
                            '</thead>'+
                            '<tbody>'+
                                '<tr data-index="0">'+
                                    '<td style="" colspan="2" tabindex="0">'+
                                        '<div class="th-inner ">银行卡号：'+ infoBankcard.cardNo +'</div>'+
                                         '<div class="fht-cell"></div>'+
                                    '</td>'+
                                    '<td style="" colspan="2" tabindex="0">'+
                                        '<div class="th-inner ">开户行：'+ Dict.getNameForList1('bank','623907',infoBankcard.bank) +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+                                    
                                '</tr>'+
                                '<tr data-index="1">'+
                                    '<td style="" colspan="2" tabindex="0">'+
                                        '<div class="th-inner ">预留手机号：'+ infoBankcard.mobile +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+                                    
                                    '<td style="" colspan="2" tabindex="0">'+
                                        '<div class="th-inner ">开户省市：'+ infoBankcard.privinceCity +'</div>'+
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
            $('#tableList3').append(html3);  
        }

        // if(infoAntifraudFlag  !== "0" ){
        //     if(infoAntifraud.verifyInfoList){
        //         infoAntifraud.verifyInfoList.each(function(i, index) {
        //             verifyInfo += i+"</br>"
        //         });            
        //     }

        //     if(infoAntifraud.riskInfoList){
        //         infoAntifraud.riskInfoList.each(function(i, index) {
        //             riskInfoList += i+"</br>"
        //         });            
        //     }  

        //     html10='<div class="bootstrap-table" style="width: 80%;">'+
        //         '<div class="fixed-table-container" style="padding-bottom: 0px;">'+
        //             '<div class="fixed-table-header" style="display: none;">'+
        //                 '<table></table>'+
        //             '</div>'+
        //             '<div class="fixed-table-body">'+
        //                 '<div class="fixed-table-loading" style="top: 294px; display: none;">正在努力地加载数据中，请稍候……</div>'+
        //                 '<table id="" data-show-export="true" class="table table-hover table-striped"  >'+
        //                     '<thead>'+
        //                         '<tr>'+
        //                             '<th style="" colspan="4" tabindex="0">'+
        //                                 '<div class="th-inner ">欺诈识别</div>'+
        //                                 '<div class="fht-cell"></div>'+
        //                            '</th>'+
        //                         '</tr>'+
        //                     '</thead>'+
        //                     '<tbody>'+
        //                         '<tr data-index="0"><td style="">欺诈评分</td><td style="">'+ infoAntifraud.score +'</td></tr>'+
        //                         '<tr data-index="1"><td style="">欺诈信息验证</td><td style="">'+ verifyInfo +'</td></tr>'+
        //                         '<tr data-index="2"><td style="">欺诈关注清单</td><td style="">'+ (infoAntifraud.hit == 'yes'? riskInfoList:'否') +'</td></tr>'+
        //                     '</div>'+
        //                     '<div class="fixed-table-footer" style="display: none;">'+
        //                         '<table>'+
        //                             '<tbody>'+
        //                         '<tr></tr>'+
        //                     '</tbody>'+
        //                 '</table>'+
        //             '</div>'+
        //         '</div>'+
        //     '</div>';  
        //     $('#tableList11').append(html10);                            
        // }
         
        if(infoIdentifyFaceFlag !== "0" && infoIdentifyPicFlag !== "0"){
            html4 = '<div class="bootstrap-table" style="width: 80%;">'+
                '<div class="fixed-table-container" style="padding-bottom: 0px;">'+
                    '<div class="fixed-table-header" style="display: none;">'+
                        '<table></table>'+
                    '</div>'+
                    '<div class="fixed-table-body">'+
                        '<div class="fixed-table-loading" style="top: 294px; display: none;">正在努力地加载数据中，请稍候……</div>'+
                        '<table id="tableList4" data-show-export="true" class="table table-hover table-striped"  >'+
                            '<thead>'+
                                '<tr>'+
                                    '<th style="" colspan="4" tabindex="0">'+
                                        '<div class="th-inner ">身份信息</div>'+
                                        '<div class="fht-cell"></div>'+
                                   '</th>'+
                                '</tr>'+
                            '</thead>'+
                            '<tbody>'+
                                '<tr data-index="0">'+
                                    '<td style="" colspan="2" tabindex="0">'+
                                        '<div class="th-inner ">姓名：'+ infoIdentifyFace.realName  +'</div>'+
                                         '<div class="fht-cell"></div>'+
                                    '</td>'+                                    
                                    '<td style="" colspan="2" tabindex="0">'+
                                        '<div class="th-inner ">身份证号：'+ infoIdentifyFace.idNo  +'</div>'+
                                        '<div class="fht-cell"></div>'+
                                    '</td>'+                                    
                                '</tr>'+
                                '<tr data-index="1">'+
                                    '<td style=""  colspan="2" data-field="" tabindex="0">'+
                                        '<div class="th-inner ">身份证照片</div>'+
                                         '<div class="fht-cell"></div>'+                                        
                                    '</td>'+
                                    '<td style=""  colspan="2" data-field="" tabindex="0">'+
                                        '<div class="th-inner ">'+
                                            '<img src="'+OSS.picBaseUrl+'/'+infoIdentifyPic.identifyPic+'" style="max-width:100px;height:100px;" class="personal">'+
                                            '<img src="'+OSS.picBaseUrl+'/'+infoIdentifyPic.identifyPicReverse+'" style="max-width:100px;height:100px;" class="personal1">'+
                                            '<img src="'+OSS.picBaseUrl+'/'+infoIdentifyPic.identifyPicHand+'" style="max-width:100px;height:100px;" class="personal2">'+
                                        '</div>'+
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
            $('#tableList4').append(html4);            
        }
            
        if(infoZMCreditFlag  !== "0" ){
            html5 = '<div class="bootstrap-table" style="width: 80%;">'+
                '<div class="fixed-table-container" style="padding-bottom: 0px;">'+
                    '<div class="fixed-table-header" style="display: none;">'+
                        '<table></table>'+
                    '</div>'+
                    '<div class="fixed-table-body">'+
                        '<div class="fixed-table-loading" style="top: 294px; display: none;">正在努力地加载数据中，请稍候……</div>'+
                        '<table id="tableList5" data-show-export="true" class="table table-hover table-striped"  >'+
                            '<thead>'+
                                '<tr>'+
                                    '<th style="" colspan="4" tabindex="0">'+
                                        '<div class="th-inner ">认证信息</div>'+
                                        '<div class="fht-cell"></div>'+
                                   '</th>'+
                                '</tr>'+
                            '</thead>'+
                            '<tbody>'+
                                '<tr data-index="0">'+
                                    '<td style="" colspan="4" tabindex="0">'+
                                        '<div class="th-inner ">芝麻信用分：' + infoZMCredit.zmScore +'</div>'+
                                         '<div class="fht-cell"></div>'+
                                    '</td>'+                                    
                                '</tr>'+
                                '<tr data-index="1">'+                                    
                                    '<td style="" colspan="4" tabindex="0">'+
                                        '<div class="th-inner ">是否被关注：'+ (infoZMCredit.isMatched?infoZMCredit.details:'否') +'</div>'+
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
            $('#tableList5').append(html5);         
        }

        if(infoCarrierFlag  !== "0"){
            $('#CompatibleBtn').on('click',function(){                         
                compatible(infoContactFlag)
            });  
        }

        if(infoAddressBookFlag  !== "0"){
            infoAddressBook = JSON.parse(infoAddressBook);
            $('#tableList33').bootstrapTable('append', infoAddressBook);
        }   

        if(infoIdentifyPicFlag !== "0"){
            personImg('personal' ,infoIdentifyPic.identifyPic,"closepic")
            personImg('personal1' ,infoIdentifyPic.identifyPicReverse ,"closepic1")
            personImg('personal2' ,infoIdentifyPic.identifyPicHand ,"closepic2")                
        }  

        if(infoAntifraudFlag == "0"){
            unverified("page-title");
            unverified("page-title6");
        }else if(infoAntifraudFlag == "1"){
            verified("page-title");
            verified("page-title6");
        }else{
            expired("page-title");
            expired("page-title6");
        } 

        if(infoAddressBookFlag == "0"){
            unverified("page-title5");  
        }else if(infoAddressBookFlag == "1"){
            verified("page-title5");  
        }else{
            expired("page-title5");
        }

        if(infoIdentifyPicFlag == "0" && infoIdentifyFaceFlag == "0"){
            unverified("page-title2"); 
        }else if(infoIdentifyPicFlag == "1" && infoIdentifyFaceFlag == "1"){
            verified("page-title2"); 
        }else{
            expired("page-title2");
        }        

        if(infoZMCreditFlag == "0"){
            unverified("page-title3");
        }else if(infoZMCreditFlag == "1"){
            verified("page-title3");
        }else{
            expired("page-title3");
        }        

        if(infoCarrierFlag == "0"){
            unverified("page-title4"); 
        }else if(infoCarrierFlag == "1"){
            verified("page-title4");
        }else{
            expired("page-title4");
        }                

    });        

    $('#tableList33').bootstrapTable({
        columns: [{
            field: 'name',
            title: '通讯录姓名',
        },{
            field: 'mobile',
            title: '手机号'
        }
    ]});  


    $('.bootstrap-table').css("width","80%");    

    togglePanel("pageTitle","pannel");
    togglePanel("pageTitle2","pannel1");
    togglePanel("pageTitle3","pannel2");
    togglePanel("pageTitle4","pannel3");
    togglePanel("pageTitle5","pannel4");
    // togglePanel("pageTitle6","pannel5");
    togglePanel("pageTitle7","pannel6");


    $('#backBtn').click(function() {
        goBack()
    });

    $('#preLoanReviewBtn').on('click',function(){
        getTDReport()                
    })           

    $('#updatePreLoanReviewBtn').on('click',function(){
        updateTDReport()                
    })    

    function unverified(title){
        $('#'+title).append('<p style="float:right;color: red;">(未认证)</p>');
    }
    function verified(title){
        $('#'+title).append('<p style="float:right;color: green;">(已认证)</p>');
    }

    function expired(title){
        $('#'+title).append('<p style="float:right;color: orange;">(已过期)</p>');
    }    

    function personImg(imgClass,imgPic,closeClass){
        $('.'+imgClass).on('click',function(){

            var dw = dialog({
                content: '<img src="'+OSS.picBaseUrl+'/'+imgPic+'" style="min-width:100%;width:400px;heiht:400px;" class="'+closeClass+'">'
            });                

            dw.showModal(); 
            dw.__center();

            $('.ui-popup-backdrop').on('click', function() {
                dw.close().remove();
            }); 
             
            $('.ui-popup').on('click', function() {
                dw.close().remove();
            });                          
          
        })                
    }           

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

    function compatible(infoContactFlag){
        html7 = '<div class="tools"><ul class="toolbar"><li style="display:block;" id="backBtn1"><span><img src="/static/images/t01.png"></span>返回</li></ul></div>';
        if(infoContactFlag  !== "0" ){
            html6 = '<iframe src="https://tenant.51datakey.com/carrier/mxreport_data?data='+infoCarrier.message+'&contact='+infoContact.familyMobile+':'+ (infoContact.familyName?infoContact.familyName:'未知') +':'+ Dict.getNameForList1('family_relation','623907',infoContact.familyRelation) +','+ infoContact.societyMobile +':'+ (infoContact.societyName?infoContact.societyName:'未知') +':'+ Dict.getNameForList1('society_relation','623907',infoContact.societyRelation)+'" width="100%" height="650px"></iframe>';
        }else{
            html6 = '<iframe src="https://tenant.51datakey.com/carrier/mxreport_data?data='+infoCarrier.message+'" width="100%" height="650px"></iframe>';
        }

        $('#form-info').css('display','none');
        $('.form-body').append(html7);
        $('.form-body').append(html6);
        $('#backBtn1').click(function() {
            $('#form-info').css('display','block');
            $('.form-body #backBtn1').remove();
            $('.form-body iframe').remove();
        });                 
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