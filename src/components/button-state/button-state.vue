<template>
    <div class="status" :style="{borderColor:color,color:color,backgroundColor:bgColor}">
        {{text}}
        <div v-for="(item,i) in list" :key="i" :style="{background:color}" class="status-angle"></div>
    </div>
</template>

<script>

    /**
     *  @name  状态按钮
     */
    export default {
        name: "buttonState",
        props: {
            eventType: {
                type: Number | String,
                default: () => {
                    return 1  //code识别码
                }
            }
        },
        data() {
            return {
                text: '正 常',
                color: '#34B2DC',
                bgColor: 'rgba(55,141,179,0.2)',
                list: 8
            }
        },
        mounted() {
            this.init()
            // console.log(this.eventType);
        },
        methods: {
            init() {
                this.eventType = this.eventType*1;
                const map = new Map([
                    [0, ['报 警', '#F1891F', 'rgba(217,50,50,1,0.2)']],
                    [1, ['故 障', '#D93232', 'rgba(241,137,31,0.2)']],
                    [2, ['异 常', '#FFF45C', 'rgba(255,244,92,0.2)']],
                    [3, ['正 常', '#34B2DC', 'rgba(55,141,179,0.2)']],
                    [4, ['达 标', '#0FD7B8', 'rgba(15,215,184,.2)']],
                    [5, ['无通讯', '#AFAEAD', 'rgba(247,181,74,.2)']],
                ]);
                let action = map.get(this.eventType);
                if (action) {
                    this.text = action[0];
                    this.color = action[1];
                    this.bgColor = action[2];
                }

            }
        }
    }
</script>

<style scoped>
    .status {
        display: inline-block;
        position: relative;
        border: 1px solid #3593AE;
        color: #3593AE;
        width: 80px;
        height: 42px;
        font-size: 16px;
        line-height: 42px;
        text-align: center;
    }

    .status-angle:nth-child(2n) {
        width: 3px;
        height: 4px;
    }

    .status-angle:nth-child(2n+1) {
        width: 4px;
        height: 3px;
    }

    .status-angle:nth-child(1), .status-angle:nth-child(2) {
        position: absolute;
        top: -3px;
        left: -3px;
    }

    .status-angle:nth-child(3), .status-angle:nth-child(4) {
        position: absolute;
        top: -3px;
        right: -3px;
    }

    .status-angle:nth-child(5), .status-angle:nth-child(6) {
        position: absolute;
        bottom: -3px;
        right: -3px;
    }

    .status-angle:nth-child(7), .status-angle:nth-child(8) {
        position: absolute;
        bottom: -3px;
        left: -3px;
    }

</style>
