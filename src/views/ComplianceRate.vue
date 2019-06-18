<template>
    <div>
        <t-compliance-rate :line-one="true" :line-two="true" style="margin-bottom: 20px" top-text-unit="分" class="mab"></t-compliance-rate>
        <t-compliance-rate top-text="水资源" bottom-text="2860" bottom-text-unit="万立方米" width="120" align="left" class="mab"></t-compliance-rate>
        <t-compliance-rate top-text="7" bottom-text="待派单" :line-one="true" :line-two="true" class="mab" line-one-color="#3bbbe0"></t-compliance-rate>
        <t-compliance-rate top-text="25" bottom-text="当月投诉量" class="mab" width="100"></t-compliance-rate>
        <t-progress-circle :second-line-options="{text:'获胜率'}" :first-line-options="{text:'88'}"></t-progress-circle>
        <t-hover-circle class="mab"></t-hover-circle>
        <t-hover-circle  class="mab" :is-waring="true"></t-hover-circle>
        <t-label-value class="mab"></t-label-value>
        <t-label-value width="300" unit="个" bg-color="linear-gradient(to right, rgba(248,206,99,.8) , transparent)" class="mab"></t-label-value>
        <t-label-value width="300" unit="个" bg-color="rgba(248,206,99,.8)" class="mab"></t-label-value>
        <t-dot-label-value class="mab" :list="[{value:22,color:'red',label:'左边'},{value:8,color:'blue',label:'右边'}]"></t-dot-label-value>
        <t-percent-compare class="mab" :list="[{value:22,color:'red'},{value:8,color:'blue'},{value:22,color:'red'},{value:8,color:'blue'}]"></t-percent-compare>
        <t-count-add></t-count-add>
    </div>
</template>

<script>
    import tComplianceRate from '../components/compliance-rate/index'
    import tProgressCircle from '../components/progress-circle/index'
    import tHoverCircle from '../components/hover-circle/index'
    import tLabelValue from '../components/label-value/index'
    import tPercentCompare from '../components/percent-compare/index'
    import tDotLabelValue from '../components/dot-label-value/index'
    import tCountAdd from '../components/count-add/index'
    export default {
        name: "ComplianceRate",
        components:{
            tComplianceRate,tProgressCircle,tHoverCircle,tLabelValue,tPercentCompare,tDotLabelValue,tCountAdd
        }
    }
</script>

<style scoped>
.mab{
    margin-bottom: 20px;
}
</style>
