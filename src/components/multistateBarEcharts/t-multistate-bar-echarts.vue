<template>

    <div>
        <div class="event-source-bottom">
            <div class="event-source-bottom-total">
                <span>总数:</span>
                <!-- <span>173件</span> -->
                <span class="evet-type-count">{{eventCount}}件</span>
            </div>
            <!--<div class="event-source-bottom-echarts" ref="eventEchartsBox"></div>-->
            <v-chart :options="finalOptions" ref="myChart"></v-chart>
            <!--<div class="event-source-bottom-card">-->
                <!--<img src="../../assets/images/img_event.png" alt="">-->
            <!--</div>-->
        </div>
    </div>
</template>

<script>
    import ECharts from 'vue-echarts'
    import 'echarts/lib/chart/pictorialBar'
    import 'echarts/lib/chart/line'
    import 'echarts/lib/component/tooltip'
    import 'echarts/lib/component/legend'

    import {objectDeepAssign} from '../../utils'

    export default {
        name: "tMultistateBarEcharts",
        components: {
            'v-chart': ECharts
        },
        data () {
            return {
                polar: {
                    color: ['#3677CF', '#0FD7B8', '#D9564E', '#CB943E', '#754580', '#441DD5'],
                    tooltip : {
                        show: true,
                        backgroundColor: 'rgba(47,117,153,0.4)',
                        borderColor: '#2F7599',
                        borderWidth: 1,
                        textStyle: {
                            color: '#1E9CD4',
                            fontSize: 16
                        },
                        formatter: function(p) {
                            let dataArr = this.myChart.getOption().yAxis[1].data
                            let _max = dataArr[dataArr.length - 1 - p.dataIndex]
                            let persent = _max === 0 ? 0 : (p.value / _max * 100).toFixed(0)
                            return  '<span style="color:#00E5E9;">' + p.seriesName + '</span><br>' +  '占比：' + persent + '%' + '<br>' + '数量：' + p.value ;
                        },
                        extraCssText: 'box-shadow: 0 0 5px rgba(0, 0, 0, 0.1)'
                    },
                    legend: {
                        textStyle: {
                            color: '#95DAF7',
                            fontSize: 16
                        },
                        right: 0,
                        width: 500,
                        itemWidth: 14,
                        itemHeight: 6,
                        itemGap: 30
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        top: 100,
                        containLabel: true
                    },
                    xAxis:  {
                        type: 'value',
                        splitLine: {
                            lineStyle: {
                                color: '#00343B'
                            }
                        },
                        axisTick:{
                            show: false
                        },
                        axisLabel: {
                            color: '#1F507D',
                            fontSize: 16
                        }
                    },
                    yAxis: [
                        {
                            type: 'category',
                            // max: 20,
                            axisTick:{
                                show: false
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#00343B'
                                }
                            },
                            axisLabel: {
                                color: '#95DAF7',
                                fontSize: 16,

                            },
                            data: ['村管河道','镇管河道','区管河道']
                        },
                        {
                            show: true,
                            offset: 20,
                            inverse: true,
                            data: [0, 0, 0],
                            axisLabel: {
                                textStyle: {
                                    fontSize: 18,
                                    color: '#41a9d4',
                                },
                            },
                            axisLine: {
                                show: false
                            },
                            splitLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },

                        }
                    ],
                    series: [
                        {
                            name: '环境污染',
                            type: 'bar',
                            stack: '总量',
                            barWidth: '4',
                            data: [0, 0, 0]
                            // data: this.eventTypeData.hj
                        },
                        {
                            name: '河道养护',
                            type: 'bar',
                            stack: '总量',
                            barWidth: '4',
                            data: [0, 0, 0]
                            // data: this.eventTypeData.hd
                        },
                        {
                            name: '政策咨询',
                            type: 'bar',
                            stack: '总量',
                            barWidth: '4',
                            // data: this.eventTypeData.zc
                            data: [0, 0, 0]
                        },
                        {
                            name: '施工投诉',
                            type: 'bar',
                            stack: '总量',
                            barWidth: '4',
                            // data: this.eventTypeData.sg
                            data: [0, 0, 0]
                        },
                        {
                            name: '沿河违章',
                            type: 'bar',
                            stack: '总量',
                            barWidth: '4',
                            // data: this.eventTypeData.yh
                            data: [0, 0, 0]
                        },
                        {
                            name: '其它事件',
                            type: 'bar',
                            stack: '总量',
                            barWidth: '4',
                            // data: this.eventTypeData.qt,
                            data: [0, 0, 0]
                        }
                    ]
                }
            }
        },
        computed: {
            finalOptions(){
                return objectDeepAssign(this.polar, this.options)
            },
            eventCount(){
                let count = 0
                for(let key in this.eventTypeData){
                    this.eventTypeData[key].forEach((e, i) => {
                        count += e
                    })
                }
                return count
            }
        },
        props: {
            options: {
                type: Object,
                default(){
                    return {}
                }
            },
            eventTypeData: {
                type: Object,
                default(){
                    return {
                        hj: [320, 302, 301],
                        hd: [120, 132, 101],
                        zc: [220, 182, 91],
                        sg: [150, 212, 201],
                        yh: [820, 832, 901],
                        qt: [820, 832, 901]
                    }
                }
            }
        },
        mounted(){
            this.selectedArr = [] //保存取消状态的图例
            this.myChart = this.$refs['myChart'].chart
            this.reviewChart()
            console.log(11)
            this.myChart.on('legendselectchanged', this.legendselectchanged);
        },
        methods: {
            reviewChart(){
                let option = objectDeepAssign(this.polar, {})
                option.yAxis[1].data = this.compuRightEchartsData(this.eventTypeData)
                option.tooltip.formatter =  (p) => {
                    let dataArr = this.myChart.getOption().yAxis[1].data
                    let _max = dataArr[dataArr.length - 1 - p.dataIndex]
                    let persent = _max === 0 ? 0 : (p.value / _max * 100).toFixed(0)
                    return  '<span style="color:#00E5E9;">' + p.seriesName + '</span><br>' +  '占比：' + persent + '%' + '<br>' + '数量：' + p.value ;
                }
                    option.series[0].data = this.eventTypeData.hj
                option.series[1].data = this.eventTypeData.hd
                option.series[2].data = this.eventTypeData.zc
                option.series[3].data = this.eventTypeData.sg
                option.series[4].data = this.eventTypeData.yh
                option.series[5].data = this.eventTypeData.qt

                this.polar = option

                //恢复所有图例为选中状态
                for(let i = 0; i < this.selectedArr.length; i++){
                    this.myChart.dispatchAction({
                        type: 'legendSelect',
                        name: this.selectedArr[i]
                    })
                }
            },
            compuRightEchartsData(eventTypeData){
                let area = 0
                let town = 0
                let village = 0
                for(let key in eventTypeData){
                    eventTypeData[key].forEach((e, i) => {
                        if(i === 0){
                            area += e
                        }else if(i === 1){
                            town += e
                        }else{
                            village += e
                        }
                    })
                }
                return  [village, town, area]
            },
            legendselectchanged(params){
                let eventTypeData = objectDeepAssign(this.eventTypeData, {})
                this.selectedArr = [] //保存取消状态的图例
                for(let key in params.selected){
                    if(!params.selected[key]){
                        this.selectedArr.push(key)
                        switch (key) {
                            case '环境污染' : delete eventTypeData.hj;break;
                            case '河道养护' : delete eventTypeData.hd;break;
                            case '政策咨询' : delete eventTypeData.zc;break;
                            case '施工投诉' : delete eventTypeData.sg;break;
                            case '沿河违章' : delete eventTypeData.yh;break;
                            case '其它事件' : delete eventTypeData.qt;break;
                        }
                    }
                }
                let yData = this.compuRightEchartsData(eventTypeData)
                console.log(eventTypeData)
                this.myChart.setOption({
                    yAxis: [
                        {},
                        {
                            data: yData
                        }
                    ]
                })
            }
        },
        watch: {
            eventTypeData(){

            }
        }
    }
</script>

<style scoped>
    .event-source-bottom{
        padding: 0 38px;
    }
    .event-source-bottom h1{
        font-size:18px;
        color: #41a9d4;
        font-weight: normal;
        margin-top: 16px;
    }
    .event-source-bottom h1{
        margin-top: 25px;
    }
    .event-source-bottom-total{
        display: flex;
        align-items: center;
        position: absolute;
        top: 55px;
        left: 20px;
        height:28px;
        line-height: 28px;
        padding: 0 15px;
        font-size: 22px;
        color: #EBAA46;
        background:linear-gradient(90deg,rgba(0,197,233,0.4),rgba(0,229,233,0));
    }
    .event-source-bottom-total span:first-child{
        font-size: 18px;
        color: white;
    }
    .event-source-bottom{
        position: relative;
    }
    .event-source-bottom-echarts{
        margin-top: 94px;
    }
    .event-source-bottom-card{
        position: absolute;
        top: 56px;
        left: 61px;
        width: 98px;
        height: 132px;
    }
    .event-source-bottom-card img{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .evet-type-count{
        margin-left: 20px;
        font-family: NumberFont;
    }
</style>