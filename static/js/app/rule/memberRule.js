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
        router: 'memberRule',
        columns: columns,
        searchParams:{
            type:"1"
        },
        pageCode: '807715'
    });
});