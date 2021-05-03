<template>
  <div id="corporate-philosophy">
    <h2>
      <span>企业理念</span>
      <span>CORPORATE PHILOSOPHY</span>
    </h2>
    <div class="content">
      <el-col :span="8" class="card0 card">
        <el-card shadow="hover">
          <div class="card-title">目标</div>
          <div class="card-content">
            <div >矢志不渝的目标：以成为患者的良心引导者，医生的真诚帮助者为最高目标，坚持以人为本的原则。</div>
          </div>
        </el-card>
      </el-col>


      <el-col :span="8" class="card1 card">
        <el-card shadow="hover">
          <div class="card-title">责任</div>
          <div class="card-content">
            <div>责无旁贷的责任：做好患者就医前的全面咨询，实事求是；把握医资紧张时的批量处理，高效高质。</div>
          </div>
        </el-card>
      </el-col>

      <el-col :span="8" class="card2 card">
        <el-card shadow="hover">
          <div class="card-title">理念</div>
          <div class="card-content">
            <div>成熟完善的理念：负责、真诚、高效、精准、活力、卓越。</div>
          </div>
        </el-card>
      </el-col>

    </div>
    <br><br><br><br><br><br><br><br><br><br>
  </div>
</template>

<script>
  export default {
    name: "AboutCorporatePhilosophy"
  }
</script>

<style scoped>
  #corporate-philosophy {
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
    position: relative;
    height: 600px;
  }

  .card0{
    width: 600px;
    position: absolute;
    left: 50%;
    top: 4%;
    transform: translateX(-50%);
  }

  .card1{
    width: 600px;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translateX(-50%);
  }

  .card2{
    width: 600px;
    position: absolute;
    left: 50%;
    top: 76%;
    transform: translateX(-50%);
  }

  .card .card-title{
    height: 30px;
    background-image: url("../../../assets/images/businessIdeas-module.jpg");
    line-height: 32px;
    font-size: 14px;
    color: #ffffff;
    font-weight: 700;
    padding-left: 30px;
  }


  .card-content div{
    margin: 30px auto;
    font-size: 14px;
    text-indent: 28px;
    line-height: 26px;

  }

</style>
