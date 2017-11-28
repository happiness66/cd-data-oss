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
        },{
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
        // ,{
        //     title: "银行卡号",
        //     field: "bankCard",
        // },{
        //     title: "手机号",
        //     field: "mobile",
        // }, {
        //     title: '国际移动设备标志',
        //     field: 'imei',
        // }, {
        //     title: '电子邮箱',
        //     field: 'email',
        // }, {
        //     title: '地址信息',
        //     field: 'address',
        // }, {
        //     title: 'ip地址',
        //     field: 'ip',
        // }, {
        //     title: '物理地址',
        //     field: 'mac',
        // }, {
        //     title: 'wifi的物理地址',
        //     field: 'wifimac',
        // }
        , {
            title: '欺诈关注清单',
            field: 'riskInfo',
        },{
            title: "创建时间",
            field: "createDatetime",
            formatter: dateTimeFormat,
            field1: 'dateStart',
            title1: '创建时间',
            type1: 'date',
            field2: 'dateEnd',
            type2: 'date',            
            search: true                      
        }
    ];
    buildList({
        columns: columns,
        searchParams:{
            type:"3",
        },        
        pageCode: '798502',
    });
   
});