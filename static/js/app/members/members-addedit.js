$(function() {
    var code = getQueryString('code');
    var userId = getQueryString('userId');
    var userRefereeType = {
        "operator": "市/区运营商",
        "o2o": "o2o商家",
        "supplier":"供应商",
        "mingsu":"民宿主",
        "f1":"VIP会员",
    };    

    var typeData = {}
    reqApi({
        code:'808007'
    }).done(function(d) {
                    
        d.forEach(function(v,i){
            typeData[v.code] = v.name;
        })
    });
    
    var fields = [
    // {
    //     field: 'kind',
    //     type: 'hidden',
    //     value: '1'
    // },
    {
        title: "登录名",
        field: "loginName",
        readonly: true,
    },{
        title: "昵称",
        field: "nickname",
        readonly: true,
        // search: true
    },{
        title: '手机号',
        field: 'mobile',
        readonly: true,
    }
    // ,{
    //     field: 'userReferee',
    //     title: '推荐人',
    //     readonly: true,
    //     formatter: function(v, data) {
    //         if(data.referrer){
    //             userReferee = data.referrer.userId;
    //             var res1 = data.referrer.kind ;
    //             var res2 = data.referrer.mobile;
    //             var level = data.referrer.level ;
    //             if(res1 && res2){
    //                 if (res1 == 'f1') {
    //                     return Dict.getNameForList1("user_level","807706",level)+ '/' +res2
    //                 }else{
    //                     return userRefereeType[res1]+ '/' +res2
    //                 }
    //             }else{
    //                return "-" 
    //             }                
    //         }        
    //     }
    // }
    , {
        title: "用户类型",
        field: "level",
        type: "select",
        key: "user_level",
        listCode: "807706",
        keyName:'dkey',
        valueName:'dvalue',        
        formatter: function(v,data){
           return data.level
        }
        
    }, {
        title: "状态",
        field: "status",
        type: "select",
        key: "user_status",
        formatter: Dict.getNameForList("user_status"),
        readonly: true,
    }, {
        title: "注册时间",
        field: "createDatetime",
        formatter: dateTimeFormat,
        readonly: true,
    }, {
        title: '备注',
        field: 'remark',
        readonly: true,
    }];
    
    buildDetail({
        fields: fields,
        code:{
            userId:userId
        },
        detailCode: "805121",
        editCode: '001302',
        beforeSubmit: function(data){
            data.userId = userId;
            
            return data;
        }
    });
});