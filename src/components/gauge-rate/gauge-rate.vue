<template>
    <div class="pie-content" id="pie-content" :style="{width:'200px',height:'215px',background:guageColor}"></div>
</template>

<script>
    import ECharts from 'vue-echarts'
    import echarts from 'echarts'
    export default {
        name: "GaugeRate",
        props:{
            defaultData:{
                type:String,
                default:'98'
            },
            guageColor:{
                type:String,
                default: '#eee'
            },
            name:{
                type:String,
                default:'运行稳定率'
            }
        },
        mounted() {
            this.initChart();
        },
        methods:{
            initChart() {
                var myChart = echarts.init(document.getElementById('pie-content'));
                var option = {
                    series: [
                        {
                            type: 'gauge',
                            center: ['50%', '60%'],
                            radius: '90%',
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    width: 1,
                                    color: [[1,'rgba(0,0,0,0)']]
                                }
                            },//仪表盘轴线
                            axisTick: {
                                show: true,
                                lineStyle: {
                                    color: 'rgba(255,255,255,0.6)',
                                    width: 1
                                },
                                length: -8
                            },//刻度样式
                            splitLine: {
                                show: true,
                                length: -20,
                                lineStyle: {
                                    color: 'rgba(255,255,255,0.6)'
                                }
                            },//分隔线样式
                            axisLabel: {
                                show:false,
                                distance: -20,
                                textStyle: {
                                    fontSize: '14',
                                    fontWeight: 'bold'
                                }
                            },
                            pointer: {
                                show: 0
                            },
                            detail: {
                                show: 0
                            }
                        },
                        // 内侧指针、数值显示
                        {
                            name:this.name,
                            type: 'gauge',
                            center: ['50%', '60%'],
                            radius: '80%',
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    width: 6,
                                    color: [
                                        [
                                            this.defaultData/100, new echarts.graphic.LinearGradient(
                                            0, 0, 1, 0, [{
                                                offset: 0,
                                                color: '#44C8FF',
                                            },
                                                {
                                                    offset: 1,
                                                    color:'#44ceef',
                                                }
                                            ]
                                        )
                                        ],
                                        [
                                            1, '#222e7d'
                                        ]
                                    ]
                                }
                            },
                            axisTick: {
                                show: 0,
                            },
                            splitLine: {
                                show: 0,
                            },
                            axisLabel: {
                                show: 0
                            },
                            pointer: {
                                show: false,
                                length: '105%'
                            },
                            detail: {
                                show: true,
                                offsetCenter: [0, '15%'],
                                textStyle: {
                                    fontSize: 25,
                                    color: '#F7B54A',
                                    fontFamily:'NumberFont'
                                },
                                formatter: [
                                    this.defaultData  + ('%' || ''),
                                    '{name|'+this.name+'}'
                                ].join('\n'),
                                rich: {
                                    name: {
                                        fontSize: 15,
                                        lineHeight: 30,
                                        color: '#41A9D4'
                                    }
                                }
                            },
                            itemStyle: {
                                normal: {
                                    // color: highlight,
                                }
                            },
                        }
                    ]
                };
                myChart.setOption(option);
            }
        }
    }
</script>

<style scoped>

</style>