<template>
    <!--比例图，条状-->
    <div>
        <div class="message-progress" v-if="left">
            <span class="message-progress-color bgColor" :style="{background:backgroundColor}" style="margin-right: 8px"></span>
            <span class="message-progress-name fontColor" style="font-size: 16px">{{name}}</span>
            <span class="message-progress-display">
              <em>
                  <i :style="{width: transformValue}" class="bgColor" >
                      <b class="bgColor" :style="{background:backgroundColor}"></b>
                  </i>
              </em>
            </span>
            <span class="message-progress-value fontColor">{{value}}{{unit}}</span>
        </div>
        <div class="message-progress" v-else>
            <span class="message-progress-value fontColor"><i class="">{{value}}</i><em>{{unit}}</em></span>
            <span class="message-progress-display">
              <em>
                  <i :style="{width: transformValue}" class="bgColor" >
                      <b class="bgColor" :style="{background:backgroundColor}"></b>
                  </i>
              </em>
            </span>
            <span class="message-progress-color bgColor" :style="{background:backgroundColor}"></span>
            <span class="message-progress-name fontColor">{{name}}</span>

        </div>
    </div>
</template>

<script>
    export default {
        name: "tPistonProgress",
        props: {
            name: {
                type: String | Number,
                default: '文字'
            },
            value: 0,
            total: 0,
            backgroundColor: '',
            unit: '',
            left: {
                type:Boolean,
                default : true
            }
        },
        computed: {
            transformValue(){
                let value = 0
                if(this.total !== 0){
                    value = this.value / this.total * 100 + '%'
                }
                return value
            },
        }
    }
</script>

<style scoped lang="less">
    @mainColor: #41A9D4;
    @bgColor: #70CCB9;
    .fontColor{
        color:  @mainColor;
    }
    .bgColor{
        background: @bgColor;
    }
    .message-progress-color{
        display: inline-block;
        width: 5px;
        height: 5px;
    }
    .message-progress{
        display: flex;
        width: 100%;
        align-items: center;
        font-size: 14px;
        height: 20px;
    }
    .message-progress-name{
        /*width: 60px;*/
        text-align: right;
    }
    .message-progress-value{
        /*width: 50px;*/
        text-align: left;
        font-family: 'NumberFont';
    }
    .message-progress-display{
        display: flex;
        flex: 1;
        margin: 0 16px;
        height: 15px;
        align-items: center;
        border-top: 1px solid #3593AE;
        border-bottom: 1px solid #3593AE;
        border-left: 2px solid #41A9D4;
        border-right: 2px solid #41A9D4;
        padding: 1px 2px;
        max-width: 216px;
    }
    .message-progress-display em{
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        border-top: 1px dashed #3593AE;
        border-bottom: 1px dashed #3593AE;
    }
    .message-progress-display i{
        display: block;
        width: 100%;
        height: 2px;
        /*border-radius: 0 10px 10px 0;*/
        /*background: linear-gradient(180deg,rgba(105,201,145,1),rgba(83,182,126,1));*/
        background: #41A9D4;
        transition: width 0.6s;
        position: relative;
    }
    .message-progress-display b{
        position: absolute;
        width: 8px;
        height: 15px;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }
</style>
