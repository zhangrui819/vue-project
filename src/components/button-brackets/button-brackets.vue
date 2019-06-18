<template>
    <div>
        <p class="t-btn" :class="{isborder:this.isborder}">
            <i class="iconfont iconzuokuohao t-left"></i>
            <i class="iconfont iconzuokuohao t-right"></i>
            <i class="iconfont iconqueren t-icon" :class="className"></i>{{this.textDefault}}
        </p>
    </div>
</template>

<script>
    export default {
        name: "ButtonBrackets",
        props:{
            textDefault:{
                type:String,
                default:'确认'
            },
            className:{
                type:String,
                default:'iconqueren'
            },
            isborder:{
                type:Boolean,
                default:true
            }
        }
    }
</script>

<style scoped>
    .t-btn{
        width:124px;
        height:30px;
        line-height: 30px;
        text-align: center;
        color: #41A9D4;
        font-size: 16px;
        cursor: pointer;
        position: relative;
    }
    .isborder{
        background:rgba(20,68,95,.4);
        border:1px solid rgba(133,212,251,.4);
    }
    .t-btn:hover{
        background: linear-gradient(to left,rgba(65, 169, 212, .4),rgba(0,5,10,.4),rgba(65, 169, 212, .4));
        background: -webkit-linear-gradient(to left,rgba(65, 169, 212, .4),rgba(0,5,10,.4),rgba(65, 169, 212, .4));
        color: #fff;
    }
    .t-btn:hover .t-left , .t-btn:hover .t-right{
        display: block;
        color: #41A9D4;
    }
    .t-btn:hover .t-btn .t-right{
        display: block;
    }
    .t-btn .t-left{
        display: none;
        font-size: 31px;
        position: absolute;
        left: 0;
    }
    .t-btn .t-right{
        display: none;
        font-size: 31px;
        position: absolute;
        right: -1px;
        transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
    }
    .t-icon{
        margin-right: 15px;
        color: #41A9D4;
    }
</style>