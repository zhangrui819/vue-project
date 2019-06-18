<template>
    <div class="t-message" ref="chatContainer">
        <ul>
            <li v-for="(item,i) in session" :key="i">
                <div class="main" :class="{ self: item.self }">
                    <div class="text">{{ item.content }}</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            acceptMessageText: {
                type: String,
                default: ''
            },
            sendMessageText: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                session: [
                    {
                        content: '主人，我有什么能为你效劳的?',
                    },
                ]
            }
        },
        computed: {
            getUserIcons() {
                return this.session;
            },
        },
        watch: {
            getUserIcons() {
                this.$nextTick(() => {
                    let container = this.$refs.chatContainer;
                    container.scrollTop = container.scrollHeight - container.clientHeight;
                })
            },
            acceptMessageText(v) {
                if (v) {
                    this.session.push({
                        content: v,
                    })
                }
            },
            sendMessageText(v) {
                if (v) {
                    this.session.push({
                        content: v,
                        self: true
                    })
                }
            }
        },
    }
</script>

<style scoped>
    @import 'message.css';

</style>
