
<template>
    <Table :loading="loading" size="small" v-if="dataSource" :columns="columns" :data="dataSource" ref="tableRef" :no-data-text="'暂无数据'"
           @on-selection-change="onSelectionChange" :width="tableWidth" :height="tableHeight" @on-sort-change="sortChange" @on-row-click="rowClickFn"/>
</template>

<script>
    export default {
        name: 'table',
        props: {
            dataSource: Array, //表格数据
            columns: Array,   //表头
            loading: {
              type:Boolean,
              default:false,
            },
            tableWidth: {
                type: Number,
                default: 300  //表格宽度
            },
            tableHeight: {
                type: Number,    //表格高度
                default: 400
            },
        },
        data() {
            return {

            }
        },
        methods: {
            /**
             * onSelectionChange 只要选中项发生变化时就会触发，返回值为 selection，已选项。
             * @param v
             */
            onSelectionChange(v) {
                this.$emit('onSelectionChange', v)
            },

            /**
             * rowClickFn 单击某一行时触发
             * @param row
             */
            rowClickFn(row){
                this.$emit('tableClick',row)
            },


            /**
             * 排序时有效，当点击排序时触发
             * @param info
             */
            sortChange(info){
                this.$emit('sortChangeFn',info)
            }
        }
    }

</script>

<style lang="less" scoped>
    .ivu-table th{
        background: transparent;
    }
    /deep/ .ivu-table-body {
        overflow-x: hidden !important;
        font-size: 14px;
    }

    /deep/ .ivu-table-overflowY::-webkit-scrollbar {
        width: 12px;
        height: 12px;
        background-color: #F5F5F5;
    }

    /*定义滚动条轨道 内阴影+圆角*/
    /deep/ .ivu-table-overflowY::-webkit-scrollbar-track {
        border-radius: 10px;
        background: rgba(237, 239, 242, 1);
    }

    /*定义滑块 内阴影+圆角*/
    /deep/ .ivu-table-overflowY::-webkit-scrollbar-thumb {
        width: 8px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 6px;
    }

    /deep/ .ivu-table-wrapper .ivu-table th {
        background: transparent;
        border: none;
    }

    /deep/ .ivu-table-wrapper::-webkit-scrollbar {
        display: none;
    }

    .ivu-table-wrapper {
        border: none;
        color: #41A9D4;
    }

    /deep/ .ivu-table:before, /deep/ .ivu-table:after {
        height: 0;
    }

    /deep/ .ivu-table {
        background-color: transparent;
        color: #41A9D4;
        overflow: unset !important;
    }

    /deep/ .ivu-table .ivu-table-header {
        border: none;
        height: 30px;
        overflow: initial;
    }

    /deep/ .ivu-table .ivu-table-header table {
        border: none;
    }

    /deep/ .ivu-table .ivu-table-header table thead th.ivu-table-column-center {
        height: 30px;
        line-height: 30px;
        background-color: rgba(99, 204, 248, .2);
        border-bottom: 2px solid #428CAF !important;
    }

    /deep/ .ivu-table .ivu-table-header table thead th.ivu-table-column-center .ivu-table-cell {
        padding: 0;
        color: #bdeafd;
        font-size: 14px;
        border: none;
    }

    /deep/ .ivu-table-body {
        border: none;

    }

    /deep/ .ivu-table .ivu-table-body table {
        border: none;
    }

    /deep/ .ivu-table .ivu-table-body .ivu-table-row:hover {
        color: #fff;
        background:linear-gradient(180deg,rgba(65, 169, 212,.4) 0%, rgba(65, 169, 212,.4)50%,transparent 100%);
    }
    /deep/ .ivu-table .ivu-table-body .ivu-table-row {
        height: 44px;
        line-height: 44px;
        background:linear-gradient(180deg,rgba(65, 169, 212,.2) 0%, rgba(65, 169, 212,.2)50%,transparent 100%);
        /*background:rgba(53,144,189,.2);*/
    }

    /deep/ .ivu-table .ivu-table-body .ivu-table-column-center {
        background-color: transparent;
        height: 33px;
        line-height: 33px;
        /*border: none;*/
        border-bottom: 2px solid #386076;

    }

    /deep/ .ivu-table-cell {
        padding: 0 !important;
        font-size: 14px;
        /*border-bottom: 2px solid #386076;*/
    }
    /deep/ td.ivu-table-expanded-cell{
        background: rgba(53,144,189,.4);
        border-bottom: 2px solid #386076;
        padding: 0;
    }
    /*/deep/.ivu-table-body>table>tbody>tr>td>.ivu-table-cell span{*/
    /*overflow: hidden;*/
    /*text-overflow: ellipsis;*/
    /*white-space: nowrap;*/
    /*margin-top: 0px;*/
    /*}*/
    /deep/ .ivu-table-cell-ellipsis {
        height: 33px;
    }
    /deep/.ivu-table-tip td{
        background-color: transparent;
        border: none;
    }
</style>
