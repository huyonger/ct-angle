<template>
  <div id="connect-us">
    <h2>
      <span>联系我们</span>
      <span>CONNECT US</span>
    </h2>
    <div class="content">
      <div class="left">
        <el-card shadow="hover">
          <div class="header text">地址</div>
          <div class="text">中国地址大学（武汉）北区聚创楼316</div>
        </el-card>
        <el-card shadow="hover">
          <div class="header text">联系人</div>
          <div class="text">谢渝</div>
          <div class="text">客户服务邮箱：2385410383@qq.com</div>
        </el-card>
        <el-card shadow="hover">
          <div class="header text">联系电话</div>
          <div class="text">电话：15962671060</div>
          <div class="text">技术支持：13627223892</div>
        </el-card>
      </div>
      <div class="right">
        <div class="hello">
          <div style="height:400px" id="container" tabindex="0"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AMap from 'AMap'

  export default {
    name: "ContactConnectUs",
    data() {
      return {
        msg: 'hello'
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      init: function () {
        let map = new AMap.Map('container', {
          resizeEnable: true, //是否监控地图容器尺寸变化
          zoom:16, //初始化地图层级
          center: [114.399099,30.527278] //初始化地图中心点
        })
        var marker = new AMap.Marker({
          position: new AMap.LngLat(114.399099,30.527278),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
          title: '公司办公室'
        });
        AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], function () {
          map.addControl(new AMap.ToolBar())
          map.addControl(new AMap.Scale())
        })
        map.add(marker);
      }
    }
  }
</script>

<style scoped>

  #connect-us {
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
    height: 500px;
  }

  .left {
    float: left;
    width: 400px;
  }

  .left > div {
    margin-top: 50px;
  }

  .text {
    font-size: 12px;
    color: #333333;
  }

  .header {
    margin-bottom: 20px;
  }

  .text {
    margin-bottom: 10px;
  }

  .right{
    padding-top: 50px;
    margin-left: 20px;
    padding-left: 10px;
  }

</style>
