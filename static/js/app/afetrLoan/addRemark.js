$(function() {
    
    var code = getQueryString('code');
    
    var fields = [  {
        field: 'remark',
        title: '备注',
        type: "textarea",
        normalArea: true,
        formatter:function(v,data){
            return data.remark
        }
    }];
    
    buildDetail({
        fields: fields,
        code: code,
        detailCode: '623086',
        editCode: '623081'
    });

});