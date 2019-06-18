<template>
    <div class="pie-content" id="pie-content" :style="{width:'300px',height:'260px'}"></div>
</template>

<script>
    import ECharts from 'vue-echarts'
    import echarts from 'echarts'
    export default {
        name: "LineChart",
        props:{
            xAxisDefaultData:{
                type:Array,
                default:()=>['03','04','05','06','07','08','09']
            },
            yAxisDefaultName:{
                type:String,
                default: '综合水质'
            },
            seriesDefaultData:{
                type:Array,
                default:()=>[11, 50, 20, 13, 40, 38, 6]
            }
        },
        mounted() {
            this.initChart();
        },
        methods:{
            initChart(){
                var myChart = echarts.init(document.getElementById('pie-content'));
                let option = option = {
                    color: '#3b92b7',
                    xAxis: {
                        type: 'category',
                        boundaryGap : false,
                        data : this.xAxisDefaultData,
                        axisLine:{
                            show:true,
                            lineStyle:{
                                color: '#3b92b7',
                                width:1,
                            }
                        },
                        axisLabel: {
                            color: '#3b92b7',
                            fontSize:'12'
                        },
                        splitLine: {           // 分隔线
                            show: true,        // 默认显示，属性show控制显示与否
                            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                color: '#41A9D4',
                                width: 1,
                                type: 'dashed',
                                opacity:'0.2'
                            }
                        },
                        axisTick:{
                            show:false
                        }
                    },
                    yAxis: {
                        name:this.yAxisDefaultName,
                        type: 'value',
                        nameTextStyle:{
                            color:'#3b92b7',
                        },
                        axisLabel:{
                            formatter: function (value) {
                                var texts = [];
                                if(value==0){
                                    texts.push('劣V');
                                }
                                else if (value <=10) {
                                    texts.push('V');
                                }
                                else if (value<= 20) {
                                    texts.push('IV');
                                }
                                else if(value<= 30){
                                    texts.push('III');
                                }
                                else if(value<= 40){
                                    texts.push('II');
                                }
                                else{
                                    texts.push('I');
                                }
                                return texts;
                            }
                        },
                        axisLine:{
                            show:true,
                            lineStyle:{
                                color:'#3b92b7',
                                width:1,
                            },

                        },
                        splitLine: {           // 分隔线
                            show: false,        // 默认显示，属性show控制显示与否
                        },
                        axisTick:{
                            show:false
                        }
                    },
                    series: [{
                        data:this.seriesDefaultData,
                        type: 'line',
                        symbol:'emptyCircle',
                        itemStyle:{
                            background:'unset'
                        }
                    }]
                };
                this.option = option
                this.myChart = myChart
                this.myChart.setOption(this.option);

            },
        }
    }
</script>

<style scoped>

</style>