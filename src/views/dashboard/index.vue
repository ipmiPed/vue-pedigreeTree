<template>
  <!-- <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
  </div> -->
  
  <div class="docMain">
        <!-- <div class="block" > -->
        <!-- <span class="demonstration"></span> -->

        <!-- 背景图 -->
        <el-image
          style="width:100%"
          :src="url_background"
          :fit="fit"
          >
        </el-image>

        <!-- 标题文字 -->
        <h1 id="text1" class="box animated bounceInLeft">古生物</h1>
        <h1 id="text2" class="box animated bounceInRight">谱系树</h1>
       
        <!-- 下滑动态显示方块1，包含两个小块，每个小块中是图文介绍 -->
        <div id="introductionWrap1"  class="wow flipInX">
          <div class="square1">
            <el-image class="square1Img" :src="url_square1Img"></el-image>
            <div class="square1Text">
              <p>谱系树生成</p>
            </div>
          </div>
          <div class="square2">
            <el-image class="square2Img" :src="url_square1Img"></el-image>
            <div class="square2Text">
              <p>缺失插补</p>
            </div>
          </div>
        </div>
        <!-- 下滑动态显示方块2，包含两个小块，每个小块中是图文介绍 -->
        <div id="introductionWrap2"  class="wow flipInX">
          <div class="square3">
            <el-image class="square3Img" :src="url_square1Img"></el-image>
            <div class="square3Text">
              <p>实验平台</p>
            </div>
          </div>
          <div class="square4">
            <el-image class="square4Img" :src="url_square1Img"></el-image>
            <div class="square4Text">
              <p>三维复原</p>
            </div>
          </div>
        </div>

  </div>
</template>

<script>
// import { mapGetters } from 'vuex'

// export default {
//   name: 'Dashboard',
//   computed: {
//     ...mapGetters([
//       'name'
//     ])
//   }
// }
import { WOW } from 'wowjs'//引入WOW.js(依赖animate.css)


 export default {
    name:'Dashboard',
    data() {
      return {
        fit:"contain",//长宽比固定
        //注意el-image标签的url路径必须表示为require('')
        url_background:require('@/assets/dashboard_images/bg.jpg'),
        url_square1Img:require('@/assets/dashboard_images/square1Img.png'),
        url_square2Img:require('@/assets/dashboard_images/square1Img.png'),
        url_square3Img:require('@/assets/dashboard_images/square1Img.png'),
        url_square4Img:require('@/assets/dashboard_images/square1Img.png')
      }
    },
    mounted(){
      new WOW().init();
    }
 }
</script>

<style lang="scss" scoped>
// .dashboard {
//   &-container {
//     margin: 30px;
//   }
//   &-text {
//     font-size: 30px;
//     line-height: 46px;
//   }
// }
.docMain h1{
  position:absolute;
  top:200px;
  color:white;
  opacity: 0.7;
  font-family: 'Times New Roman', Times, serif;
  font-size: 50px;
  letter-spacing: 30px;
}
#text1{
  right:50%;
}
#text2{
  left:50%;
  margin-left:30px;//与字间距保持一致，使得文字完全对称居中
}
#introductionWrap1,#introductionWrap2{
  width:440px;
  height:250px;
  position:absolute;
  top:1000px;
  // background:red;
}
#introductionWrap1{
  right:54%;
}
#introductionWrap2{
  left:54%;
}
.square1,.square2,.square3,.square4{
  float:left;
  width:210px;
  height:250px;
  border: none;
}
.square2{
  // background:blue;
  margin-left:20px;
}
.square4{
  // background:blue;
  margin-left:20px;
}
.square1Img,.square2Img,.square3Img,.square4Img{
  float:left;
  width:210px;
  height:125px;
}
.square1Text,.square2Text,.square3Text,.square4Text{

  width:210px;
  height:125px;
}
.docMain p{
  color:white;
  font-family:'楷体';
  font-size: 25px;
  letter-spacing: 10px;
  margin-top:15px;
}
.square1Text p{
   margin-left: 20px;
}
.square2Text p{
   margin-left: 38px;
}
.square3Text p{
   margin-left: 38px;
}
.square4Text p{
   margin-left: 38px;
}
</style>
