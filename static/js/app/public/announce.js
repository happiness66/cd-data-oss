$(function() {

    var columns = [{
            field: '',
            title: '',
            checkbox: true
        }, {
            field: 'smsTitle',
            title: '标题',
            search: true
        }, {
            field: 'toKind',
            title: '针对人群',
            type: 'select',
            key: 'user_kind',
            formatter: Dict.getNameForList('user_kind'),
        }, {
            field: 'status',
            title: '状态',
            type: 'select',
            key: 'notice_status',
            formatter: Dict.getNameForList('notice_status'),
            search: true,
        },
        {
            field: 'updater',
            title: '最近修改人'
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
        router: 'announce',
        columns: columns,
        pageCode: '804040',
        searchParams: {
            channelType: '4',
            fromSystemCode: OSS.system
        }
    });
    $('#pushBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status == 2) {
            toastr.warning("公告已下撤，无法发布");
            return;
        }
        var msg = selRecords[0].status == 1 ? "确定取消发布该消息？" : "确定发布该消息？";

        confirm(msg).then(function() {
            reqApi({
                code: '804036',
                json: { 'id': selRecords[0].id }
            }).done(function() {
                toastr.info("操作成功");
                $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
            });
        });
    });
    $('#edit2Btn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status == 1) {
            toastr.info("已发布，不可修改");
            return;
        }
        window.location.href = 'announce_addedit.html?id=' + selRecords[0].id + "&code=" + selRecords[0].id;
    });
})