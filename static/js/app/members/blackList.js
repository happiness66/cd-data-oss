$(function() {

    var columns = [{
            field: '',
            title: '',
            checkbox: true
        }, {
            title: '记录编号',
            field: 'id'
        },{
            title: "手机号",
            field: "mobile",
            formatter:function(v,data){
                return data.user.mobile
            }
        },{
            title: "姓名",
            field: "realName",
            formatter:function(v,data){
                return data.user.realName
            }
        }, {
            title: "状态",
            field: "status",
            type: "select",
            formatter: Dict.getNameForList("blacklist_status"),
        }, {
            title: "拉黑时间",
            field: "createDatetime",
            formatter: dateTimeFormat
        }, {
            title: '操作人',
            field: 'updater'
        }, {
            title: '备注',
            field: 'remark'
        }
    ];
    buildList({
        columns: columns,
        pageCode: '805205',
        searchParams: {
            status: 1
        }
    });

    $('#removeBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }


        confirm("确定将该用户移出黑名单？").then(function() {
            reqApi({
                code: '805201',
                json: {
                    id: selRecords[0].id,
                    updater: getUserName()
                }
            }).then(function() {
                toastr.info("操作成功");
                $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
            });

        },function(){});

    });

   
  
      
});