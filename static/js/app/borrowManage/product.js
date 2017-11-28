$(function() {
    var storeCode = sessionStorage.getItem('storeCode');
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'name',
        title: '产品名',
        search: true,
    }, {
        field: 'level',
        title: '商品等级',
        keyCode: "623907",
        formatter: Dict.getNameForList("product_level", "623907"),
        search: true
    }, {
        field: 'amount',
        title: '借款金额',
        amount: true,
    }, {
        field: 'duration',
        title: '借款时长(天)',
    }, {
        field: 'yqRate1',
        title: '7天内逾期利率',
    }, {
        field: 'yqRate2',
        title: '7天外逾期利率',
    }, {
        field: 'lxRate',
        title: '日利息利率',
    }, {
        field: 'fwAmount',
        title: '服务费(元)',
        formatter: moneyFormat
    }, {
        field: 'glAmount',
        title: '账户管理费(元)',
        formatter: moneyFormat
    }, {
        field: 'xsAmount',
        title: '快速信审费(元)',
        formatter: moneyFormat
    }, {
        field: 'updateDatetime',
        title: '最后更新时间',
        formatter: dateTimeFormat
    }, {
        field: 'status',
        title: '状态',
        type: "select",
        key: "product_status",
        keyCode: "623907",
        formatter: Dict.getNameForList("product_status", "623907"),
        search: true
    }, {
        field: 'uiLocation',
        title: '位置',
        type: 'select',
        key: 'product_location',
        keyCode: '623907',
        formatter: Dict.getNameForList("product_location", '623907'),
    }, {
        field: 'uiOrder',
        title: 'UI顺序',
    }, {
        field: 'remark',
        title: '备注',
    }];

    buildList({
        columns: columns,
        searchParams: {
            companyCode: OSS.companyCode,
            orderColumn: 'ui_order',
            orderDir: 'asc'
        },
        pageCode: '623010',
        deleteCode: '808011',
    });

    $('#up2Btn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }

        if (selRecords.length > 1) {
            toastr.info("不能多选");
            return;
        }

        if (selRecords[0].status == 1) {
            toastr.info("已上架");
            return;
        }

        window.location.href = "product_up2.html?Code=" + selRecords[0].code;

    });

    $('#downBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }

        if (selRecords.length > 1) {
            toastr.info("不能多选");
            return;
        }
        if (selRecords[0].status !== "1") {
            toastr.info("该商品还未上架");
            return;
        }
        confirm("确认下架？").then(function() {
            reqApi({
                code: '623003',
                json: { "code": selRecords[0].code, "uiOrder": selRecords[0].uiOrder }
            }).then(function() {
                toastr.info("操作成功");
                $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
            });
        }, function() {});

    });

    $('#detailBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }

        if (selRecords.length > 1) {
            toastr.info("不能多选");
            return;
        }

        window.location.href = "product_detail2.html?Code=" + selRecords[0].code + "&v=1";
    });


    //修改
    $('#editBtn').off("click").click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }

        if (selRecords[0].status == 3) {
            toastr.info("已上架状态不能修改");
            return;
        }

        window.location.href = "product_addedit.html?Code=" + selRecords[0].code + "&dc=" + selRecords[0].companyCode;

    });

    //产品参数
    $('#productParamBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }

        window.location.href = "productParam.html?Code=" + selRecords[0].code + "&pName=" + selRecords[0].name;
    });

});