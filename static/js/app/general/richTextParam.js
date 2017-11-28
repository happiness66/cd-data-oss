$(function() {



    var columns = [{
            field: '',
            title: '',
            checkbox: true
        },{
            field: 'remark',
            title: '参数说明'
        },{
            field: 'cvalue',
            title: '参数值',
        }
    ];
    buildList({
        router: 'richTextParam',
        columns: columns,
        searchParams:{
            type:"richText"
        },
        pageCode: '805915'
    });
});