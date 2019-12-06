<template>
  <!-- <div class="app-container documentation-container">
    <a
      class="document-btn"
      target="_blank"
      href="http://cdmd.cnki.com.cn/Article/CDMD-10697-1017117196.htm"
      width="340"
    >先验决策模型</a>
    <a
      class="document-btn"
      target="_blank"
      href="http://cdmd.cnki.com.cn/Article/CDMD-10697-1018111085.htm"
    >层次推断模型</a>
    <a
      class="document-btn"
      target="_blank"
      href="https://www.mdpi.com/1099-4300/21/3/313/html"
    >Genetic Attribute Reduction</a>

  </div> -->
  <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="序号"
      prop="num">
    </el-table-column>
    <el-table-column
      label="论文"
      prop="documentation">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="primary"
          @click="check(scope.$index)">Edit</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import DropdownMenu from "@/components/Share/DropdownMenu.vue"

export default {
  name: "Documentation",
  components: { DropdownMenu },
  data() {
      return {
        tableData: [{
          num: '01',
          documentation: '先验决策模型'
        }, {
          num: '02',
          documentation: '层次推断模型'
        }, {
          num: '03',
          documentation: 'Genetic Attribute Reduction'
        } 
        ],
        search: ''
      }
    },
    methods: {
      // 查看文档
      check(index) {
        // 原本是从0开始，加1以后与序号保持一致
        index++;
        console.log(index);
        if(index==1)
          window.location.href='http://cdmd.cnki.com.cn/Article/CDMD-10697-1017117196.htm'
        else if(index==2)
          window.location.href='http://cdmd.cnki.com.cn/Article/CDMD-10697-1018111085.htm'
        else if(index==3)
          window.location.href='https://www.mdpi.com/1099-4300/21/3/313/html'

      }
    }
  
  // data() {
  //   return {
  //     articleList: [
  //       {
  //         title: "基础篇",
  //         href: "https://juejin.im/post/59097cd7a22b9d0065fb61d2"
  //       },
  //       {
  //         title: "登录权限篇",
  //         href: "https://juejin.im/post/591aa14f570c35006961acac"
  //       },
  //       {
  //         title: "实战篇",
  //         href: "https://juejin.im/post/593121aa0ce4630057f70d35"
  //       },
  //       {
  //         title: "vue-admin-template 篇",
  //         href: "https://juejin.im/post/595b4d776fb9a06bbe7dba56"
  //       },
  //       {
  //         title: "v4.0 篇",
  //         href: "https://juejin.im/post/5c92ff94f265da6128275a85"
  //       },
  //       {
  //         title: "自行封装 component",
  //         href: "https://segmentfault.com/a/1190000009090836"
  //       },
  //       {
  //         title: "优雅的使用 icon",
  //         href: "https://juejin.im/post/59bb864b5188257e7a427c09"
  //       },
  //       {
  //         title: "webpack4（上）",
  //         href: "https://juejin.im/post/59bb864b5188257e7a427c09"
  //       },
  //       {
  //         title: "webpack4（下）",
  //         href: "https://juejin.im/post/5b5d6d6f6fb9a04fea58aabc"
  //       }
  //     ]
  //   };
  // }
}
</script>

<style lang="scss" scoped>
.documentation-container {
  margin: 50px;
  .document-btn {
    float: left;
    margin-left: 50px;
    display: block;
    cursor: pointer;
    background: black;
    color: white;
    height: 60px;
    width: 200px;
    line-height: 60px;
    font-size: 20px;
    text-align: center;
  }
}
</style>
