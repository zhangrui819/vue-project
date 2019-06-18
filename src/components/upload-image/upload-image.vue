<template>
  <div class="t-upload">
    <input type="file" class="t-upload-file" ref="files" accept="image/*" multiple v-on:change="handleFilesUpload()"/>
    <!--回显图片-->
    <div v-for="(file, key) in files" :key="key" style="position:relative; width: 100px; height: 100px;">
      <!--{{ file.name }}-->
      <img class="preview" v-bind:ref="'image'+parseInt( key )" style="max-width: 100%;" />
      <i @click="removeImg(key)" class="iconfont iconquxiao t-icon-close"></i>
    </div>
    <!--按钮操作-->
    <div @click="addFiles()" class="t-add-img">
      <p><i class="iconfont icontupianshangchuan" style="font-size: 32px;display: inline-block"></i></p>
      <p style="font-size: 12px;">点击上传图像</p>
    </div>
    <!--<button v-on:click="submitFiles()">提交</button>-->
  </div>
</template>

<script>
  /**
   *  上传图片
   *
   *  监听getImg  返回所有上传图片
   *
   */

  export default {
    name: "tUploadImage",
    data(){
      return {
        files: [],
      }
    },
    methods: {
      removeImg(key){
        this.files.splice(key,1);
        this.getImagePreviews();
      },
      addFiles(){
        this.$refs.files.click();
      },
      submitFiles(){
        console.log(this.files);
        let formData = new FormData();
        for( var i = 0; i < this.files.length; i++ ){
          let file = this.files[i];
          formData.append('files[' + i + ']', file);
        }
        //console.log(formData.get('files[0]'))

        // axios.post( '/file-multiple-preview',
        //     formData,
        //     {
        //         headers: {
        //             'Content-Type': 'multipart/form-data'
        //         }
        //     }
        // ).then(function(){
        //     console.log('SUCCESS!!');
        // })
        // .catch(function(){
        //     console.log('FAILURE!!');
        // });
      },
      handleFilesUpload(){
        let uploadedFiles = this.$refs.files.files;
        for( var i = 0; i < uploadedFiles.length; i++ ){
          this.files.push( uploadedFiles[i] );
        }
        this.getImagePreviews();
      },
      getImagePreviews(){
        for( let i = 0; i < this.files.length; i++ ){
          if ( /\.(jpe?g|png|gif)$/i.test( this.files[i].name ) ) {
            let reader = new FileReader();
            reader.addEventListener("load", function(){
              this.$refs['image'+parseInt( i )][0].src = reader.result;
            }.bind(this), false);
            reader.readAsDataURL( this.files[i] );
          }
        }
        this.$emit('getImg', this.files)
      }
    }
  }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .t-upload .t-upload-file{
    position: absolute;
    top: -500px;
  }
  .t-add-img{
    width:124px;
    height:70px;
    font-size: 14px;
    text-align:center;
    color: #41A9D4;
    background:rgba(65,169,212,0.13);
    border:1px solid rgba(65,169,212,1);
    cursor: pointer;
  }
  .t-icon-close{
    position:absolute;
    right: 0;top: 0;
    color: #f00;
    cursor: pointer
  }
</style>
