<template>
    <div class="t-compliance-rate-wrap" :style="{width: `${width}px`,textAlign:align}">
        <div class="t-compliance-rate-box">
            <div class="t-compliance-rate-top">
                <span>{{topText}}</span>
                <span class="t-compliance-rate-top-unit">{{topTextUnit}}</span>
            </div>
            <div v-if="lineOne" class="t-compliance-rate-line-one" :style="{background:lineOneColor,left:lineTwo?'-3px':'0'}"></div>
            <div v-if="lineTwo" class="t-compliance-rate-line-two" :style="{background:lineTwoColor}"></div>
            <div class="t-compliance-rate-bottom" :title="bottomText+bottomTextUnit" :style="{marginLeft:lineTwo?'10px':'0'}">
                <span>{{bottomText}}</span>
                <span class="t-compliance-rate-top-unit">{{bottomTextUnit}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tComplianceRate",
        props: {
            width:{
                type:String|Number,
                default:80
            },
            align:{
                type:String,
                default:'center'
            },
            lineOne:{
                type:Boolean,
                default:false
            },
            lineTwo:{
                type:Boolean,
                default:false
            },
            // topUnit:{
            //     type:Boolean,
            //     default:false
            // },
            // bottomUnit:{
            //     type:Boolean,
            //     default:false
            // },
            topText: {
                type:Number|String,
                default:100
            },
            bottomText: {
                type:String,
                default:'得分'
            },
            lineOneColor: {
                type:String,
                default:'rgb(1, 64, 86)'
            },
            lineTwoColor: {
                type:String,
                default:'#0C8FAC'
            },
            topTextUnit: {
                type:String,
                default:''
            },
            bottomTextUnit: {
                type:String,
                default:''
            },
        }
    }
</script>

<style scoped>
    .t-compliance-rate-box {
        padding: 0 3px;
        /*text-align: center;*/
    }

    .t-compliance-rate-top {
        font-size: 12px;
        color: #F4B148;
        font-family: 'NumberFont';
    }

    /*.compliance-rate:hover .compliance-rate-top {*/
        /*color: #fff;*/
    /*}*/

    .t-compliance-rate-top-unit {
        margin-left: 5px;
        font-size: 12px;
    }

    .t-compliance-rate-bottom {
        font-size: 14px;
        color: #75C1E7;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-top: 5px;
        /*margin-left: 10px;*/
    }

    .t-compliance-rate-line-one,
    .t-compliance-rate-line-two {
        height: 3px;
        position: relative;
        /*left: -3px;*/
        background: rgb(1, 64, 86);
    }

    .t-compliance-rate-line-two {
        /*left: auto;*/
        right: -5px;
        top: 2px;
    }
</style>
