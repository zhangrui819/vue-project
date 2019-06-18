<template>
    <div :style="{width:width+'px'}">
        <DigitRoll class="supervision-warn-total-ul" :rollDigits='textDataString' :dur="1500"/>
    </div>
</template>

<script>
    import DigitRoll from '@huoyu/vue-digitroll'
    export default {
        name: "count-add",
        components:{
            DigitRoll
        },
        props:{
            width: {
                type: String|Number,
                default: 340
            },
            value: {
                type: Number,
                default: 196
            },
            digit:{
                type: Number,
                default: 5
            }
        },
        computed: {
            textDataString(){
                return this.unshiftZero(this.value).join('')
            }
        },
        methods:{
            unshiftZero(data){
                let num = (parseInt(data) || 0) + ''
                let digit = this.digit
                let numArr = num.split('')
                let zeroNum = digit - numArr.length
                for(let i = 0; i < zeroNum; i++){
                    numArr.unshift(0)
                }
                return numArr
            },
            warnClick(){
                this.$emit('handleClick')
            }
        }
    }
</script>

<style scoped>

</style>
