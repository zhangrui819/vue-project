<template>
    <div class="proportion-compare-wrap-text-content" :style="{width:lineWidth+'px',height:lineHeight+'px'}">
        <div class="proportion-compare-wrap-text-content-item-line" :style="{width:lineWidth+'px',height:lineHeight+'px'}">
            <p v-for="(item,idx) in infoList" :key="idx" :style="{width:item.value,backgroundColor:item.color,height:lineHeight+'px'}"></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "percent-compare",
        props:{
            list:{
                type:Array
            },
            lineWidth:{
                type:String|Number,
                default:175
            },
            lineHeight:{
                type:String|Number,
                default: 3
            }
        },
        computed:{
            infoList(){
                let arr = [
                    {value:'100%',color:'#34B2DC'}
                ];
                if(this.list.length){
                    let val = 0;
                    for(let i=0;i<this.list.length;i++){
                        val+=this.list[i].value*1
                    }

                    if(val>0){
                        arr = [];
                        for(let j=0;j<this.list.length;j++){
                            let obj = {};
                            if(this.list[j].value/val!==0){
                                obj.value = (this.list[j].value/val)*100-1 +'%'   //-1 每个percent右侧留出部分空白
                            }else {
                                obj.value = '0%'
                            }
                            if(this.list[j].color){
                                obj.color = this.list[j].color
                            }else {
                                obj.color = '#34B2DC'
                            }
                            arr.push(obj)
                        }
                        return arr
                    }else {
                        return arr
                    }
                }else {
                    return arr
                }
            }
        }
    }
</script>

<style scoped>
    .proportion-compare-wrap-text-content-item-line{
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>
