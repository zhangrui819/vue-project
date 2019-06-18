<template>
    <div class="t-wrap-box">
        <div id="si-ri-container" ref="siRiWrapEle" style="position: relative;"></div>
        <img :src="open" @click="voiceOpen" style="cursor: pointer" v-show="!Switch">
        <img :src="close" @click="throttledMethod()" style="cursor: pointer" v-show="Switch">
        <audio id="audio" autoplay style="width: 0px;height: 0px" controls="">
        </audio>
    </div>
</template>

<script>
    import axios from 'axios'
    import close from './img/guanbi.png'
    import open from './img/yuyin.png'
    import QS from 'qs'
    import _ from 'lodash'

    var recorder;
    var audio = document.querySelector('audio');

    export default {
        inject: ['voiceCom'],

        name: "Voice",
        data() {
            return {
                content: '',
                Switch: false,
                open,
                close,
                params: '',
                token: this.voiceCom.token,
                siri: function () {

                }
            }
        },
        mounted() {
            this.siri = new SiriWave({ //初始化canvas
                container: document.getElementById('si-ri-container'),
                style: "ios9", //样式 ios 或者 ios9
                cover: true, //是否填满父元素
                width: 600,   //宽度
                height: 200, //高度
                speed: .1,//速度
                amplitude: 2,  //频率
                pixelDepth: 0.05, //在画布上绘制时使用的步数（以像素为单位）。
                lerpSpeed: 0.02  //Lerp速度来插值属性。
            });
            // this.siri.start()
        },
        methods: {
            //开启语音
            voiceOpen() {
                this.Switch = true;
                window.HZRecorder.get(function (rec) {
                    recorder = rec;
                    recorder.start();
                });
                this.siri.start()
            },
            throttledMethod: _.throttle(function () {
                this.voiceDown()
            }, 3000),
            //发送语音转化文字发送给后台解析
            async voiceDown() {
                await this.siri.stop()
                this.Switch = false;
                let that = this
                let bull = recorder.getBlob();
                let formData = new FormData();
                formData.append('file', bull);
                let res = await axios.post(`${this.voiceCom.textUrl}`,
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            'token': this.token,
                        },
                    }
                )
                if (res.data.code === 0) {
                    console.log(res.data.data);
                    this.$emit('sendMessage', res.data.data);
                    that.params = res.data.data
                } else {
                    return
                }
                let params = {text: this.params}
                //后台解析完请求返回语音内容和文字详情
                let resData = await axios({
                    method: 'post',
                    url: `${this.voiceCom.voiceUrl}`,
                    data: QS.stringify(params),
                    headers: {
                        'token': this.token
                    },
                    responseType: 'blob'
                })
                this.$emit('acceptMessage', decodeURIComponent(resData.headers.textresponse));

                var blob = new Blob([resData.data], {type: 'audio/mp3'});
                var blobUrl = URL.createObjectURL(blob);
                if (!!blobUrl) {
                    audio.src = blobUrl
                }
            },
        }
    }
</script>

<style scoped lang="less">
    .t-wrap-box {

    }
</style>
