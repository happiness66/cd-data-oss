$(function() {

    var columns = [{
            field: '',
            title: '',
            checkbox: true
        }, {
            field: 'note',
            title: '参数名',
            search: true
        }, {
            field: 'cvalue',
            title: '参数值',
        }, {
            field: 'updateDatetime',
            title: '最近修改时间',
            formatter: dateTimeFormat
        }, {
            field: 'remark',
            title: '备注'
        }
    ];
    buildList({
        router: "forumRule",
        columns: columns,
        pageCode: "621915",
        searchParams: {
            // type: "1"
        }
    });
});