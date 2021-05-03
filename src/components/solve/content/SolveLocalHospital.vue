<template>
  <div id="solve-local-hospital">
    <h2>
      <span>就近就医</span>
      <span>LOCAL HOSPITAL</span>
    </h2>
    <div class="content">
      <el-select v-model="selectCity" placeholder="请选择">
        <el-option
          v-for="city in citys"
          :key="city"
          :label="city"
          :value="city">
        </el-option>
      </el-select>
      <el-table
        :data="hospitals"
        style="width: 100%">
        <el-table-column
          prop="name"
          label="姓名"
          width="250">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="250">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="电话">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="网站"
          width="100">
          <template slot-scope="scope">
            <a :href="scope.row.link" target="_blank">访问</a>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SolveLocalHospital",
    data(){
      return{
        citys:['武汉市'],
        selectCity:'武汉市',
        hospitals:[
          {
          name:'武汉大学人民医院',
          address:'湖北省武汉市武昌紫阳路99号',
          phone:'027-88041911',
          link:'http://www.rmhospital.com/a.asp'
          },
          {
            name:'武汉协和医院',
            address:'湖北省武汉市解放大道1277号',
            phone:'027-85726300',
            link:'http://www.whuh.com/'
          },
          {
            name:'武汉市第三医院',
            address:'湖北省武汉市武昌区彭刘杨路241号',
            phone:'027-88873219',
            link:'http://www.wh3yy.com/'
          },
          {
            name:'武汉大学中南医院',
            address:'湖北省武汉市武昌区东湖路169号',
            phone:'027-67812888',
            link:'http://www.znhospital.cn'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  #solve-local-hospital {
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


  .content p {
    font-size: 14px;
    text-indent: 34px;
    line-height: 26px;
  }

  .content .title {
    font-size: 16px;
    color: #324e7b;
    height: 30px;
    line-height: 30px;
    margin-bottom: 12px;
    font-weight: 700;
  }

  a:hover{
    color: #00a4ff;
  }
</style>
