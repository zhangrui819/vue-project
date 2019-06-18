<template>
    <div class="triangle-chart-box">
        <div class="triangle-chart-box-body">
            <div class="triangle-chart-box-tip" :style="{bottom:heightValue}">{{percentValue}}%</div>
            <div class="triangle-chart-box-body-left" :style="{height:heightValue}">
                <div class="triangle-chart-box-body-left-content" :style="{transform:'skewX(-'+(degValue+0.1)+'deg)',background:leftColor}"></div>
            </div>
            <div class="triangle-chart-box-body-right" :style="{height:heightValue}">
                <div class="triangle-chart-box-body-right-content" :style="{transform:'skewX(-'+(180-degValue)+'deg)',background: rightColor}"></div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "tTriangularCone.vue",
        props:{
            percentValue:{
                type:String | Number,
                default:78
            },
            leftColor:{
                type: String,
                default: 'rgba(0,119,170,.7)'
            },
            rightColor:{
                type: String,
                default: 'rgba(0,119,170,.4)'
            }
        },
        computed:{
            heightValue(){
                let val = 0;
                if(this.percentValue!==0){
                    val = this.percentValue +'%'
                }
                return val
            },
            degValue(){
                var val = 0;
                if(this.percentValue!=0){
                    let val = 0
                    let result = Math.atan(this.percentValue/100*147/22) / (Math.PI / 180);
                    val = Math.round(91-result)
                    return val
                }else {
                    return 0
                }
            }
        },
        mounted(){

        },
        methods:{

        }
    }
</script>

<style scoped>
    .triangle-chart-box{
        width: 44px;
        height: 100%;
        /*height: 120px;*/
        /*border-bottom: 1px solid #177FAA;*/
        position: relative;
        transition: all 1s;
    }
    .triangle-chart-box-body{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        position: relative;
        transition: all 1s;
        /*position: absolute;*/
        /*width: 2px;*/
        /*bottom: 0;*/
        /*left: 50%;*/
        /*transform: translateX(-50%);*/
        /*border-left: 2px solid #177FAA;*/
    }
    .triangle-chart-box-body-left{
        height: 100%;
        width: 22px;
        box-sizing: border-box;
        border-bottom: 1px solid #177FAA;
        border-right: 1px solid #177FAA;
        box-sizing: border-box;
        align-self: flex-end;
        position: relative;
        overflow: hidden;
        transition: all 1s;
    }
    .triangle-chart-box-body-right{
        height: 100%;
        width: 22px;
        box-sizing: border-box;
        border-bottom: 1px solid #177FAA;
        border-left: 1px solid #177FAA;
        box-sizing: border-box;
        align-self: flex-end;
        overflow: hidden;
        transition: all 1s;
    }
    .triangle-chart-box-tip{
        position: absolute;
        font-size: 12px;
        left: 50%;
        transform: translateX(-50%);
        bottom: 23px;
        color: #568faa;
        font-family: 'NumberFont';
        transition: all 1s;
    }
    .triangle-chart-box-body-left-content{
        width: 100%;
        height: 100%;
        background: rgba(0,119,170,.7);
        transform:skewX(-12deg);
        transform-origin: bottom;
        box-sizing: border-box;
        border-left: 1px solid rgb(0,119,170);
        transition: all 1s;
    }
    .triangle-chart-box-body-right-content{
        width: 100%;
        height: 100%;
        background: rgba(0,119,170,.4);
        transform:skewX(-12deg);
        transform-origin: bottom;
        border-right: 1px solid rgb(0,119,170);
        transition: all 1s;
    }
</style>
