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
        router: 'iosPublish',
        columns: columns,
        searchParams:{
            type:"ios-c"
        },
        pageCode: '805915'
    });
});