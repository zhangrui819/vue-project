<template>
    <v-chart :options="finalOptions"></v-chart>
</template>

<script>
    import ECharts from 'vue-echarts'
    import 'echarts/lib/chart/bar'
    import 'echarts/lib/component/tooltip'

    import {objectDeepAssign} from '../../utils'

    export default {
        name: "t-scale-bar-echarts",
        components: {
            'v-chart': ECharts
        },
        computed: {
            finalOptions(){
                return objectDeepAssign(this.polar, this.options)
            }
        },
        props: {
            options: {
                type: Object,
                default(){
                    return {}
                }
            }
        },
        data () {
            var dataAxis = ['总磷', '高锰酸钾', 'PH', '溶解氧', '氨氮', '水温'];
            var data = [485, 267, 192, 18, 8, 0];

            return {
               polar: {
                   color:['#754580'],
                   grid: {
                       left: '0%',
                       right: '0%',
                       bottom: '6%',
                       top: '15%',
                       containLabel: true
                   },
                   tooltip: {
                       trigger: 'axis',
                       axisPointer: {
                           type: 'none'
                       },
                       formatter: function(params) {
                           return params[0].name + ':' + params[0].value;
                       }
                   },
                   xAxis: {
                       data: dataAxis,
                       axisLabel: {
                           // inside: true,
                           textStyle: {
                               color: '#4190dd',
                               fontSize:14
                           }
                       },
                       axisTick: {
                           show: false
                       },
                       axisLine: {
                           show: false
                       },
                   },
                   yAxis: {
                       splitNumber: 6,
                       name: "不达标次数",
                       nameTextStyle: {
                           color: '#31789B'
                       },
                       nameGap: 25,
                       axisLine: {
                           show: false
                       },
                       axisTick: {
                           show: false
                       },
                       axisLabel: {
                           textStyle: {
                               color: '#41a9d4',
                           }
                       },
                       splitLine:{
                           lineStyle:{
                               color:'rgba(0,229,233,.3)'
                           }
                       }
                   },
                   series: [
                       {
                           type: 'bar',
                           barWidth:18,
                           itemStyle: {
                               normal: {color: 'rgba(47,117,153,0.2)',borderColor:'#2f7599'},
                           },
                           barGap:'-65%',
                           barCategoryGap:'40%',
                           data: data,
                       },
                       {
                           type: 'bar',
                           stack:'总量',
                           barWidth:5,
                           data: data
                       }
                   ]
               }
            }
        }
    }
</script>

<style scoped>

</style>