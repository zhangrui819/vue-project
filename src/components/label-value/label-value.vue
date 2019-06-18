<template>
    <div class="t-label-value-wrap" :style="{width: width+'px',background:bgColor}">
        <span class="t-label-value-label">{{label}}：</span>
        <span class="t-label-value-value">{{value}}</span>
        <span class="t-label-value-unit">{{unit}}</span>
    </div>
</template>

<script>
    export default {
        name: "label-value",
        props:{
            width:{
                type:String | Number,
                default:210
            },
            bgColor:{
                type:String,
                default: 'linear-gradient(to right, rgba(65,169,212,.8) , transparent)'
            },
            label:{
                type:String|Number,
                default:'工位'
            },
            value:{
                type:String|Number,
                default:100
            },
            unit:{
                type:String|Number,
                default:''
            }

        }
    }
</script>

<style scoped>
    .t-label-value-wrap{
        display: flex;
        align-items: center;
        height: 30px;
        line-height: 30px;
        color: #fff;
        font-size: 18px;
        padding: 0 16px;
    }
    .t-label-value-value{
        font-size: 22px;
        color: #ebaa46;
        font-family: 'NumberFont';
    }
    .t-label-value-unit{
        margin-left: 6px;
        color: #ebaa46;
    }
</style>
