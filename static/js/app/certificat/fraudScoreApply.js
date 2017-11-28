$(function() {
  

    var columns = [{
            field: '',
            title: '',
            checkbox: true
        },{
            field: 'id',
            title: '记录编号',
        },{
            title: "真实姓名",
            field: "realName",
            search: true
        },{
            field: 'idNo',
            title: '身份证号',
            search: true
        }
        // ,{
        //     title: "银行卡号",
        //     field: "bankCard",
        //     formatter: function(v,data){
        //         if(data.bankCard == "" ){
        //             return "该用户银行卡号未填写"
        //         }else{
        //             return data.bankCard
        //         }
        //     }
        // },{
        //     title: "手机号",
        //     field: "mobile",
        //     formatter: function(v,data){
        //         if(data.mobile == "" ){
        //             return "-"
        //         }else{
        //             return data.mobile
        //         }
        //     }            
        // }
        // , {
        //     title: '国际移动设备标志',
        //     field: 'imei',
        //     formatter: function(v,data){
        //         if(data.imei == "" ){
        //             return "-"
        //         }else{
        //             return data.imei
        //         }
        //     }            
        // // }
        // , {
        //     title: '电子邮箱',
        //     field: 'email',
        //     formatter: function(v,data){
        //         if(data.email == "" ){
        //             return "-"
        //         }else{
        //             return data.email
        //         }
        //     }            
        // }, {
        //     title: '地址信息',
        //     field: 'address',
        //     formatter: function(v,data){
        //         if(data.address == "" ){
        //             return "-"
        //         }else{
        //             return data.address
        //         }
        //     }            
        // },
         ,{
            title: '个人扩展信息',
            field: 'bankCard',
            formatter: function(v,data){
                var datainfo,bankCard ,mobile,email,address
                bankCard =  data.bankCard && data.bankCard !== ""? data.bankCard :"-",
                mobile = data.mobile && data.mobile !== ""? data.mobile :"-",
                email = data.email && data.email !== ""? data.email :"-",
                address = data.address && data.address !== ""? data.address :"-",
                datainfo = "银行卡号:  "+ bankCard+'<br>' ;
                datainfo +="电话号:  "+ mobile+'<br>';
                datainfo +="电子邮箱:  "+ email+'<br>';
                datainfo +="地址信息:  "+ address+'<br>';

                return datainfo
            }            
        }, {
            title: '物理硬件信息',
            field: 'imei',
            formatter: function(v,data){
                var datainfo,imei ,ip,mac,wifimac
                imei = data.imei && data.imei !== ""? data.imei :"-",
                ip =  data.ip && data.ip !== ""? data.ip :"-",
                mac =  data.mac && data.mac !== ""? data.mac :"-",
                wifimac =  data.wifimac && data.wifimac !== ""? data.wifimac :"-",
                datainfo = "国际移动设备标志:  "+ imei+'<br>' ;
                datainfo +="ip地址:  "+ ip+'<br>';
                datainfo +="物理地址:  "+ mac+'<br>';
                datainfo +="wifi物理地址:  "+ wifimac+'<br>';

                return datainfo
            }            
        }
        // , {
        //     title: 'ip地址',
        //     field: 'ip',
        //     formatter: function(v,data){
        //         if(data.ip == "" ){
        //             return "-"
        //         }else{
        //             return data.ip
        //         }
        //     }            
        // }, {
        //     title: '物理地址',
        //     field: 'mac',
        //     formatter: function(v,data){
        //         if(data.mac == "" ){
        //             return "-"
        //         }else{
        //             return data.mac
        //         }
        //     }            
        // }, {
        //     title: 'wifi的物理地址',
        //     field: 'wifimac',
        //     formatter: function(v,data){
        //         if(data.wifimac == "" ){
        //             return "-"
        //         }else{
        //             return data.wifimac
        //         }
        //     }             
        // }
        , {
            title: '欺诈分',
            field: 'score',
        },{
            title: "创建时间",
            field: "createDatetime",
            formatter: dateTimeFormat,
            field1: 'dateStart',
            title1: '创建时间',
            type: 'date',
            field2: 'dateEnd',  
            twoDate: true,         
            search: true                      
        }
    ];
    buildList({
        columns: columns,
        searchParams:{
            type:"1",
        },        
        pageCode: '798502',
    });
   
});