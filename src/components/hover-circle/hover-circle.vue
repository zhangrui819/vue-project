<template>
    <div class="t-hover-circle"
         :style="{width:width+'px',height:width+'px',lineHeight:width+'px',fontSize:size+'px'}"
         :class="{'t-warn-circle':isWaring,'t-normal-circle':!isWaring}">
        <span>{{label}}</span>
    </div>
</template>

<script>
    export default {
        name: "t-hover-circle",
        props:{
            width:{
                type:String | Number,
                default:50
            },
            size:{
                type:String | Number,
                default:16
            },
            label:{
                type:String,
                default: 'LAS'
            },
            isWaring:{
                type:Boolean,
                default:false
            }
        }
    }
</script>

<style scoped>
    .t-hover-circle{
        border-radius: 50%;
        background: #00080f;
        /*font-size: 16px;*/
        text-align: center;
    }
    .t-warn-circle{
        border: 1px solid #f8ce63;
        box-shadow: 0 0 10px 3px #f8ce63;
    }
    .t-warn-circle span{
        color: #f8ce63;
    }
    .t-normal-circle{
        border: 1px solid #41a9d4;
        box-shadow: 0 0 10px 3px #41a9d4;
    }
    .t-normal-circle span{
        color: #41a9d4;
    }
</style>
