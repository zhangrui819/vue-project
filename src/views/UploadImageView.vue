<template>
    <div>
        <tUploadImage @getImg="getImage"></tUploadImage>
    </div>
</template>

<script>
    import tUploadImage from '../components/upload-image/upload-image'
    export default {
        name: 'uploadImageView',
        components: {
            tUploadImage
        },
        methods:{
            getImage(val){
                console.log(val);
            }
        }
    }
</script>

<style scoped>

</style>
