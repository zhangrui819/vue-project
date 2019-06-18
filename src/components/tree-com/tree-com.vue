<template>
    <Tree :data="treeList" :show-checkbox=isCheckbox @on-select-change="onChangeTree" @on-check-change="onCheckChange"></Tree>
</template>
<script>
    export default {
        name:'TreeCom',
        props: {
            isCheckbox:{
                type:Boolean,
                default:false
            },
            treeList: {
                type :Array,
                default :()=>{
                    return [
                        {
                            title: "菜单一", expand: true, nCode: "1",
                            children:[
                                { title: "菜单11", expand: false, nCode: "11",
                                children:[
                                    { title: "菜单111", expand: false, nCode: "111"},
                                    { title: "菜单112", expand: false, nCode: "112"},
                                    { title: "菜单113", expand: false, nCode: "113"},
                                ]
                                },
                                { title: "菜单12", expand: false, nCode: "12"},
                                { title: "菜单13", expand: false, nCode: "13"},
                            ]
                        },
                        {
                            title: "菜单二", expand: true, nCode: "2",
                            children:[
                                { title: "菜单21", expand: false, nCode: "21"},
                                { title: "菜单22", expand: false, nCode: "22"},
                                { title: "菜单23", expand: false, nCode: "23"},
                                { title: "菜单24", expand: false, nCode: "24"},
                            ]
                        },
                    ]
                }
            }
        },
        methods : {
            onChangeTree(v, n) {
                this.$emit('onChangeTree',v, n)
            },
            onCheckChange(v,n){
                this.$emit('onCheckChange',v, n)
            }

        }
    }
</script>
<style>
   .ivu-tree {
        font-size: 13px;
        color: #41A9D4;
        font-family: 'NumberFont';
    }
    .ivu-tree .ivu-tree-title {
        color: #41A9D4;
        font-size: 13px;
        position: relative;
    }
    .ivu-tree ul{
        padding-left: 11px;
    }
    .ivu-tree .ivu-tree-title:hover {
        color: #fff;
    }
    .ivu-tree .ivu-tree-title.ivu-tree-title-selected {
        color: #fff;
    }
    .ivu-tree .ivu-tree-children .ivu-tree-arrow .ivu-icon.ivu-icon-ios-arrow-forward:before {
        content: "\F330";
    }
    .ivu-tree .ivu-tree-children .ivu-tree-arrow.ivu-tree-arrow-open .ivu-icon.ivu-icon-ios-arrow-forward:before {
        content: "\F418";
    }
    .ivu-tree .ivu-icon {
        color: #41A9D4;
        font-size: 12px;
        border: 1px solid #41A9D4;
    }
   .ivu-tree li ul{
       padding: 0 0 0 35px;
   }
   .ivu-tree .ivu-tree-children{
       position: relative;
   }

    .ivu-tree  .ivu-tree-arrow {
        width: 15px;
        vertical-align: -2px;
        position: relative;
    }
    .ivu-tree .ivu-tree-arrow-open i {
        transform: rotate(180deg);
    }
    .ivu-tree-title:hover {
        background:linear-gradient(0deg,rgba(23,127,170,1) 0%,rgba(133,215,249,0) 100%);
    }
    .ivu-tree-title.ivu-tree-title-selected {
        background:linear-gradient(0deg,rgba(23,127,170,1) 0%,rgba(133,215,249,0) 100%);
    }
    .ivu-tree>.ivu-tree-children{
        margin-top: 12px;
    }
/*    .ivu-tree>.ivu-tree-children>li>.ivu-tree-title {
        font-size: 14px;
        padding: 0;
    }
    .ivu-tree>.ivu-tree-children>li>.ivu-tree-children>li>.ivu-tree-title {
        font-size: 12px;
    }
    .ivu-tree>.ivu-tree-children>li>.ivu-tree-children>li>.ivu-tree-arrow {
        vertical-align: 7px;
        left: 3px;
    }
    .ivu-tree>.ivu-tree-children>li>.ivu-tree-arrow {
        vertical-align: -2px;
    }*/
    /*.ivu-tree>.ivu-tree-children>li>.ivu-tree-arrow-open:after {
        content: '';
        position: absolute;
        width: 10px;
        height: 20px;
        !*background-color: #41A9D4;*!
        border: 1px solid #41A9D4;
        border-right: none;
        border-top: none;
        bottom: -18px;
        left: 50%;
    }
    .ivu-tree>.ivu-tree-children>li>ul>li>.ivu-tree-arrow-open:before {
        content: '';
        position: absolute;
        width: 10px;
        height: 1px;
        background-color: #41A9D4;
        bottom: 50%;
        left: -10px;
    }
    .ivu-tree>.ivu-tree-children>li>ul>li ul:nth-child(3) li .ivu-tree-title{
        position: relative;
    }
    .ivu-tree>.ivu-tree-children>li>ul>li ul:nth-child(3) li .ivu-tree-title:before {
        content: '';
        position: absolute;
        width: 23px;
        height: 1px;
        background-color: #41A9D4;
        bottom: 46%;
        left: -24px;
    }
    .ivu-tree>.ivu-tree-children>li>ul>li>.ivu-tree-arrow-open:after {
        content: '';
        position: absolute;
        width: 1px;
        height: 24px;
        background-color: #41A9D4;
        bottom: -24px;
        left: 50%;
    }
*/

</style>
