<template>
  <div id="solve-question">
    <h2>
      <span>问卷采集</span>
      <span>QUESTION</span>
    </h2>
    <el-form :label-position="labelPosition" label-width="80px" >
      <el-form-item label="姓名" class="item name">
        <el-input v-model="info.name" style="width: 800px"></el-input>
      </el-form-item>
      <el-form-item label="年龄" class="item age">
        <el-input v-model="info.age" style="width: 800px"></el-input>
      </el-form-item>
      <el-form-item label="性别" class="item">
        <el-select v-model="info.gender" placeholder="请选择男或者女" style="width: 800px">
          <el-option label="男" value="shanghai"></el-option>
          <el-option label="女" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="您的家族有呼吸道疾病史吗?" class="item">
        <el-select v-model="info.question1" placeholder="请选择有或者无" style="width: 800px">
          <el-option label="有" value="shanghai"></el-option>
          <el-option label="无" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="您抽烟吗，或者您家里有人抽烟吗?" class="item">
        <el-select v-model="info.question2" placeholder="请选择抽或者不抽" style="width: 800px">
          <el-option label="抽" value="shanghai"></el-option>
          <el-option label="不抽" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="您觉得胸痛吗?" class="item">
        <el-select v-model="info.question3" placeholder="请选择觉得或者不觉得" style="width: 800px">
          <el-option label="觉得" value="shanghai"></el-option>
          <el-option label="不觉得" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="您咳嗽吗?" class="item">
        <el-select v-model="info.question4" placeholder="请选择咳嗽或者不咳嗽" style="width: 800px">
          <el-option label="觉得" value="shanghai"></el-option>
          <el-option label="不觉得" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="您咳嗽有血吗?" class="item">
        <el-select v-model="info.question5" placeholder="请选择有或者无" style="width: 800px">
          <el-option label="有" value="shanghai"></el-option>
          <el-option label="无" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="您发烧吗?" class="item">
        <el-select v-model="info.question6" placeholder="请选择发烧或者不发烧" style="width: 800px">
          <el-option label="发烧" value="shanghai"></el-option>
          <el-option label="不发烧" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="您是否经历过呼吸急促?" class="item">
        <el-select v-model="info.question7" placeholder="请选择是或者否" style="width: 800px">
          <el-option label="是" value="shanghai"></el-option>
          <el-option label="否" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="您有呼吸短促的感觉吗?" class="item">
        <el-select v-model="info.question8" placeholder="请选择有或者无" style="width: 800px">
          <el-option label="有" value="shanghai"></el-option>
          <el-option label="无" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="您是否经历过心跳加速?" class="item">
        <el-select v-model="info.question9" placeholder="请选择是或者否" style="width: 800px">
          <el-option label="是" value="shanghai"></el-option>
          <el-option label="否" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="您有过喘息的经历吗?" class="item">
        <el-select v-model="info.question10" placeholder="请选择有或者无" style="width: 800px">
          <el-option label="有" value="shanghai"></el-option>
          <el-option label="无" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="您的症状会持续多久?" class="item">
        <el-select v-model="info.question11" placeholder="请选择时间" style="width: 800px">
          <el-option label="少于1周" value="shanghai" ></el-option>
          <el-option label="超过1周,但少于1个月" value="beijing" ></el-option>
          <el-option label="几个月" value="beijing" ></el-option>
          <el-option label="几年" value="beijing" ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item style="text-align: center">
        <el-button type="primary" >提交</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    <br><br><br><br><br><br><br><br><br><br>
  </div>
</template>

<script>
  export default {
    name: "SolveQuestion",
    data() {
      return {
        labelPosition: 'top',
        info: {
          name: '',
          age: '',
          gender: '',
          question1:'',
          question2:'',
          question3:'',
          question4:'',
          question5:'',
          question6:'',
          question7:'',
          question8:'',
          question9:'',
          question10:'',
          question11:''
        }
      };
    }
  }
</script>

<style scoped>
  #solve-question {
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

  .item{
    height: 80px;
  }

</style>
