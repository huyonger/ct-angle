<template>
  <div id="solve-ct-image">
    <h2>
      <span>CT影像</span>
      <span>CT IMAGE</span>
    </h2>
    <div class="content">
      <sui-segment attached="attached" style="border: 0!important;">
        <sui-container>
          <sui-grid :columns="1" divided>
            <sui-grid-row>
              <!--1.影像类别 重新上传 诊断-->
              <sui-grid-column>
                <div class="form">
                  <div class="button" v-if="isShow">
                    <el-button type="success" @click="reload">重新上传</el-button>
                    <el-button type="primary" @click="uploadOrigin">图片诊断</el-button>
                  </div>
                </div>
                <input type="file" style="display: none" id="file" accept="image/jpg,image/png" @change="finishLoad">
              </sui-grid-column>
            </sui-grid-row>

            <sui-grid-row>
              <sui-grid-column>
                <div class="image">
                  <div class="origin_image">
                    <div>
                      <h3>原图区</h3>
                      <img :src="url" alt="" v-if="isShow">
                      <i class="el-icon-plus avatar-uploader-icon upload" @click="uploadFile" v-if="!isShow"></i>
                    </div>
                  </div>
                  <div class="label_image">
                    <div>
                      <h3>诊断区</h3>
                      <img src="../../../assets/images/label1.jpg" alt="">
                    </div>
                  </div>
                </div>
              </sui-grid-column>
            </sui-grid-row>
          </sui-grid>
        </sui-container>
      </sui-segment>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "SolveCtImage",
    data() {
      return {
        type: "1",
        url: '',
        isShow: false,
        resultUrl:'../../../assets/images/label1.jpg'
      }
    },
    methods: {
      uploadFile() {
        document.getElementById("file").click();
      },
      finishLoad() {
        const file = document.getElementById("file").files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = () => {
          this.url = reader.result
          this.isShow = true
        }
      },
      uploadOrigin() {
        const file = document.getElementById("file").files[0];
        let param = new FormData();
        param.append('file', file);
        let config = {
          headers: {'Content-Type': 'multipart/form-data'}
        };
        axios.post("http://127.0.0.1:8000/file", param, config).then(data => {
          console.log(data);
        }).catch(err => {
          console.log(err);
        })

      },
      reload() {
        this.$router.push({
          name: 'Plain',
          params: {
            from: 'ct-image'
          }
        })
      }
    }
  }
</script>

<style scoped>
  #solve-ct-image {
    padding: 20px;
    background-color: #ffffff;
  }

  h2 {
    display: inline-block;
    border-bottom: 5px solid #324e7b;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  h2 span {
    height: 40px;
    line-height: 40px;
  }

  h2 span:nth-child(1) {
    font-size: 18px;
    color: #333333;
  }

  h2 span:nth-child(2) {
    font-size: 16px;
    color: #9c9c9c;
  }

  .content {
    padding: 0 15px;
  }

  .form {
    position: relative;
    height: 50px;
  }

  .button {
    position: absolute;
    left: 73%;
  }

  .image {
    height: 500px;
    border: 1px solid #ccc;
    border-radius: 3px;
    display: flex;
  }

  .origin_image {
    flex: 1;
    height: 94%;
    padding: 16px;
    position: relative;
  }

  .origin_image div {
    height: 100%;
    border: 1px dotted #ccc;
  }

  .label_image {
    flex: 1;
    height: 94%;
    padding: 16px;
    position: relative;
  }

  .label_image div {
    height: 100%;
    border: 1px dotted #ccc;
  }

  .origin_image h3, .label_image h3 {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 16px;
    font-weight: 400;
  }

  img {
    position: absolute;
    width: 300px;
    height: 300px;
    left: 50%;
    top: 100px;
    transform: translateX(-50%);
  }

  .upload {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 100px;
    color: #8c939d;
  }

  .upload:hover {
    cursor: pointer;
  }
</style>
