<template>
    <div>
        <div class="t-pluralityEchart">
            <div id="pie-content" style="width: 140px;height: 140px;margin-right: 30px;"></div>
            <div style="position: absolute;width: 95px;height: 95px;
                            border: 2px dashed rgba(47,117,153,1);left: 50%;top: 50%;padding-top:10px;transform: translate(-132%,-50%);border-radius: 50%">
                <p style="font-size: 16px;color: #85d4fb;text-align: center;">{{name}}</p>
                <p style="font-size: 20px;color: #f4b148;text-align: center;font-family: 'NumberFont'">
                    {{rivertotal}}</p>
            </div>
            <div>
                <div v-for="(item,idx) in pieTipList" :key="idx" style="display: flex;height: 34px;align-items: center">
                    <p class="t-pie-tip-item-color" :style="{background:item.bacColor}"></p>
                    <p class="t-pie-tip-item-name">{{item.text}}</p>
                    <p class="t-pie-tip-item-num">{{item.num}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import echarts from 'echarts'
    export default {
        name: "pluralityEchart",
        props: {
            pieTipList: {  //文字列表
                type: Array,
                default: () =>
                    [
                        {bacColor: '#d9564e', text: '市级', num: 100},
                    ]

            },
            defaultChartData: {  //echart绘图数据
                type: Array,
                default: () =>
                    [
                        {value: 100, name: '市级', itemStyle: {color: '#d9564e'}},
                        {value: 0, name: '1'}, //多条数据必须取值做空白间隔
                    ]

            },
            rivertotal: { //总和数量
                type: Number,
                default: 100
            },
            name: {
                type: String,
                default: '河湖数量' //名称
            }
        },
        mounted() {
            this.initChart('pie-content', this.defaultChartData)
        },
        methods: {
            initChart(el, data) {
                var myChart = echarts.init(document.getElementById(el));
                var option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: (params) => {
                            if (params.data.name !== '1') {
                                return params.seriesName + '<br/>' + params.name + ': ' + params.value + " (" + params.percent + "%)"
                            }
                        }
                    },
                    color: ['transparent'],
                    series: [
                        {
                            name: '河湖数量',
                            hoverAnimation: false,
                            type: 'pie',
                            radius: ['85%', '100%'],
                            avoidLabelOverlap: false,
                            label: {
                                show: false
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data: data
                        }
                    ]
                };
                myChart.setOption(option);

            }
        }
    }
</script>

<style scoped>
    .t-pluralityEchart {
        display: flex;
        width: 320px;
        padding-left: 12px;
        box-sizing: border-box;
        position: relative;
        align-items: center;
    }

    .t-pie-tip-item-color {
        width: 6px;
        height: 6px;
        margin-right: 12px;
    }

    .t-pie-tip-item-name {
        font-size: 14px;
        color: #8ed1ed;
        margin-right: 14px;
    }

    .t-pie-tip-item-num {
        font-size: 14px;
        color: #00c6ff;
        font-family: 'NumberFont';
    }
</style>
