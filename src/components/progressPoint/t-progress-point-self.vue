<template>
    <!--点状比例图-->
    <div>
        <div class="point-progress">
            <span class="point-progress-name fontColor" :style="{fontSize: fontSize+'px'}" style="font-weight: bold">{{name}}</span>
            <span class="point-progress-display" :class="{rectangle: isRectangle}" ref="pointDisplay">
                <i
                  v-for="item in circleNum"
                  :class="{gradientOne: item === gradientCircle && gradientCircle !== circleNum, last: item > gradientCircle}"
                  :style="{width: circle + 'px',height:height+'px'}">
                </i>
            </span>
            <span class="point-progress-value yellowFontColor"><span class="point-progress-value-font">{{value}}</span> {{unit}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tProgressPointSelf",
        data(){
            return {
                circleNum: 0
            }
        },
        props: {
            name: {
                type: String | Number,
                default: '名称'
            },
            value: {
                type: String | Number,
                default: 50
            },
            backgroundColor: String,
            unit: {
                type: String,
                default: '%'
            },
            fontSize:{
              type:String | Number,
              default:14
            },
            circle: {
                type: Number,
                default: 10
            },
            height:{
              type:Number,
              default:10
            },
            space: {
                type: Number,
                default: 6
            },
            isRectangle: {
                type: Boolean,
                default: false
            }
        },
        mounted(){
            this.calculateCircleNum()
        },
        computed: {
            gradientCircle(){
                return Math.ceil(this.value / 100 * this.circleNum)
            }
        },
        methods: {
            calculateCircleNum(){
                let clientWidth = this.$refs['pointDisplay'].clientWidth
                let num = parseInt(clientWidth / (this.circle + this.space))
                this.circleNum = num
            }
        }
    }
</script>

<style scoped lang="less">
    @mainColor: #41A9D4;
    @bgColor: #70CCB9;
    @rightColor: #F4B148;
    .fontColor{
        color:  @mainColor;
    }
    .bgColor{
        background: @bgColor;
    }
    .yellowFontColor{
        color: @rightColor;
    }
    .point-progress-color{
        display: inline-block;
        width: 6px;
        height: 10px;
    }
    .point-progress{
        display: flex;
        width: 100%;
        /*align-items: center;*/
        font-size: 16px;
        height: 27px;
    }
    .point-progress-name{
        /*display: inline-block;*/
        /*width: 60px;*/
        font-size: 14px;
        /*text-align: right;*/
        /*margin-right: 16px;*/
        line-height: 27px;
    }
    .point-progress-value{
        font-size: 12px;
        /*display: inline-block;*/
        /*margin-left: 16px;*/
        /*width: 90px;*/
        /*text-align: left;*/
    }
    .point-progress-display{
        margin: 0 16px;
        display: flex;
        justify-content: space-between;
        /*justify-content: space-around;*/
        align-items: center;
        flex: 1;
        /*margin: 0 16px;*/
        height: 24px;
        /*border-top: 1px solid #3593AE;*/
        /*border-bottom: 1px solid #3593AE;*/
        /*border-left: 2px solid #41A9D4;*/
        /*border-right: 2px solid #41A9D4;*/
        padding: 1px 2px;
    }
    .point-progress-display i{
        display: block;
        height: 10px;
        width: 6px;
        border-radius: 50%;
        background: #0FD7B8;
    }
    .point-progress-display.rectangle i{
        border-radius: 0;
    }
    .point-progress-display i.gradientOne{
        background: linear-gradient(92deg,rgba(15,215,184,1) 0%,rgba(112,204,185,0) 100%);
    }
    .point-progress-display i.last{
        background: #22506E;
    }
    .point-progress-value-font{
        line-height: 27px;
        font-size: 18px;
        font-family: 'NumberFont';
        /*text-align: right;*/
        /*width: 40px;*/
        display: inline-block;

    }
    .point-progress-value-unit{
        font-size: 12px;
        margin-left: 4px;
        font-family: 'NumberFont';
        text-align: right;
    }
</style>
