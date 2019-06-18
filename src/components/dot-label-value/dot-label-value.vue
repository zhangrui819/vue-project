<template>
    <div class="t-dot-label-value-wrap" :style="{width:lineWidth+'px'}">
        <div class="t-dot-label-value-box">
            <p v-for="(item,idx) in infoList" :key="idx" class="t-dot-label-value-box-item">
                <span class="t-dot-label-value-box-item-dot" :style="{backgroundColor:item.color}"></span>
                <span class="t-dot-label-value-box-item-label">{{item.label}}</span>
                <span :style="{color: item.color}" class="t-dot-label-value-box-item-value">{{item.value}}</span>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "dot-label-value",
        props:{
            list:{
                type:Array
            },
            lineWidth:{
                type:Number,
                default:175
            }
        },
        computed:{
            infoList(){
                let arr = [
                    {label:'无数据',value:'',color:"#34B2DC"}
                ]
                if(this.list.length){
                    return this.list
                }else {
                    return arr
                }
            }
        }
    }
</script>

<style scoped>
    .t-dot-label-value-box{
        width: 100%;
        height: 20px;
        display: flex;
        justify-content: space-between;
        font-size:14px;
    }
    .t-dot-label-value-box-item{
        display: flex;
        align-items: center;
        color: #3593AE;
    }
    .t-dot-label-value-box-item-dot {
        width: 4px;
        height: 4px;
        margin-right: 4px;
    }
    .t-dot-label-value-box-item-label{
        margin-right: 5px;
    }
    .t-dot-label-value-box-item-value {
        font-family: 'NumberFont';
    }
</style>
