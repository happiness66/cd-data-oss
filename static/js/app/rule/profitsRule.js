$(function() {



    var columns = [{
            field: '',
            title: '',
            checkbox: true
        },{
            field: 'note',
            title: '参数说明'
        },{
            field: 'cvalue',
            title: '参数值',
            search: true
        }, {
            field: 'remark',
            title: '备注'
        }
    ];
    buildList({
        router: 'profitsRule',
        columns: columns,
        searchParams:{
            type:"1",
            companyCode: OSS.companyCode,
            orderDir: "asc"
        },
        pageCode: '808915'
    });
});