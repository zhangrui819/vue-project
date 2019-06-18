<template>
    <div class="t-voice-chat">
        <div class="t-voice-button" v-if="!messageShow" @click.stop="rouseVoice" ref="rouse">{{text}}</div>
        <div class="t-voice-button" v-if="messageShow" @click.stop="closeVoice" ref="close">关闭</div>
        <Message v-show="messageShow" :acceptMessageText="acceptMessageText" :sendMessageText="sendMessageText"
                 class="message"></Message>
        <Voice v-if="messageShow" @acceptMessage="acceptMessage" @sendMessage="sendMessage" class="voice"></Voice>
    </div>
</template>

<script>
    import Message from './message'
    import Voice from './voice';

    export default {
        provide() {
            return {
                voiceCom: this
            };
        },
        components: {
            Message, Voice
        },
        props: {
            textUrl: { //传递语音解析文字返回   =》地址
                type: String,
                default: "http://116.236.119.123:9001/hsst-combine/apiSpeech/speechToText"
            },
            voiceUrl: { //通过返回文字请求回调语音 =》地址
                type: String,
                default: "'http://116.236.119.123:9001/hsst-combine/apiSpeech/speechProcess"
            },
            token: {  //token地址
                type: String,
                default: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NjAzNDc2MjcsInVzZXJuYW1lIjoiYWRtaW4ifQ.4iJzSObgBnZawubR8HipDjohLOJGy72AD9AOXevpRZY'
            },
            text: { //文本显示内容
                type: String,
                default: "智能语音"
            }

        },
        name: 'voiceChat',
        data() {
            return {
                messageShow: false,
                acceptMessageText: '',
                sendMessageText: ''
            }
        },
        methods: {
            rouseVoice() {
                this.messageShow = true
            },
            closeVoice() {
                this.messageShow = false
            },
            acceptMessage(i) {
                this.acceptMessageText = i
            },
            sendMessage(i) {
                this.sendMessageText = i
            }
        }
    }

</script>

<style scoped>
    .t-voice-chat {
        width: 100%;
        height: 800px;
        position: relative;
    }

    .message {
        width: 500px;
        position: absolute;
        left: 30%;
        top: 18%;
        height: 400px;
        z-index: 100;
    }

    .voice {
        width: 540px;
        overflow: hidden;
        position: absolute;
        left: 30%;
        top: 50%;
        z-index: 100;
    }

    .t-voice-button {
        padding: 10px 15px;
        display: inline-block;
        background-color: #3BBBE0;
        border-radius: 8px;
        color: #fff;
        font-size: 16px;
        cursor: pointer;
    }
</style>
