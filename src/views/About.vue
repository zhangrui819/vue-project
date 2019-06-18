<template>
  <div class="about">
    <plurality-echart></plurality-echart>
    <voice-chat></voice-chat>
  </div>
</template>
<script>
  import pluralityEchart from '@/components/plurality-echart'
  import voiceChat from '@/components/voice-chat'
  export  default  {
      components : {
          pluralityEchart,voiceChat
      }
  }
</script>
