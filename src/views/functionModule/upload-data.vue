<template>
  <div class="app-container">
    <upload-excel-component :on-success="handleSuccess" :before-upload="beforeUpload"/>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">主页</el-menu-item>

      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-submenu index="2-1">
          <template slot="title">缺失插补</template>
          <el-menu-item index="2-1-1" @click="perference()">KNN插补</el-menu-item>
          <el-menu-item index="2-1-2">随机插补</el-menu-item>
          <el-menu-item index="2-1-3">缺失删除</el-menu-item>
        </el-submenu>
        <el-submenu index="2-2">
          <template slot="title">谱系树生成</template>
          <el-menu-item index="2-2-1" @click="merge()">最大简约法</el-menu-item>
          <el-menu-item index="2-2-2">层次推断法</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3"></el-menu-item>
      <el-submenu index="4">
        <template slot="title">数据管理</template>
        <el-menu-item index="4-1" @click="dialogFormVisible = true">上传数据集到服务器</el-menu-item>
        <el-menu-item index="4-2" v-on:click="toplatformData()">从平台获取数据集</el-menu-item>
        <el-menu-item index="4-3" v-on:click="toscrapyInfo()">爬虫搜索</el-menu-item>
      </el-submenu>
    </el-menu>
    <el-table :data="tableData" border highlight-current-row style="width: 120%;margin-top:20px;">
      <el-table-column v-for="item of tableHeader" :key="item" :prop="item" :label="item"/>
    </el-table>
    <el-row>
      <el-dialog title="数据集描述" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="数据命名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="数据描述" :label-width="formLabelWidth">
            <el-input v-model="form.desc" type="textarea" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false" v-on:click="dataStore()">确 定</el-button>
        </div>
      </el-dialog>
      <el-dialog title="聚类结果" :visible.sync="dialogFormVisible2">
        <el-form :model="form">
          <el-form-item label="树图" :label-width="formLabelWidth">
            <el-input v-model="form2.tree" type="textarea" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="树长" :label-width="formLabelWidth">
            <el-input v-model="form2.treeLength" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="ci值" :label-width="formLabelWidth">
            <el-input v-model="form2.ci" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="hi值" :label-width="formLabelWidth">
            <el-input v-model="form2.hi" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="ri值" :label-width="formLabelWidth">
            <el-input v-model="form2.ri" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="rc值" :label-width="formLabelWidth">
            <el-input v-model="form2.rc" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible2 = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible2 = false">确 定</el-button>
        </div>
      </el-dialog>
      <!-- <el-button type="primary" v-on:click="getData()">获取数据</el-button> -->
    </el-row>
  </div>
</template>

<script>
import UploadExcelComponent from "@/components/UploadExcel/index.vue";
import { type } from "os";
import axios from "axios";
import { apiUrl } from "@/api/api-setting.js";
import { table2string, string2table } from "@/utils/dataSwitch.js";
import { mapGetters } from "vuex";
export default {
  name: "UploadExcel",
  components: { UploadExcelComponent },
  data() {
    return {
      tableData: [],
      tableHeader: [],
      dialogFormVisible: false,
      dialogFormVisible2: false,
      user: {},
      activeIndex: "1",
      activeIndex2: "1",
      trace: "",
      form: {
        name: "",
        desc: ""
      },
      form2: {
        name: "",
        desc: ""
      },
      formLabelWidth: "120px"
    };
  },
  computed: {
    ...mapGetters(["name", "avatar", "roles"])
  },
  watch: {
    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
    $route: "getParams"
  },
  created: function() {
    this.getParams();
    this.getUser();
  },
  methods: {
    getUser() {
      this.user = {
        name: this.name,
        role: this.roles.join(" | "),
        email: "admin@test.com",
        avatar: this.avatar
      };
    },
    toscrapyInfo() {
      this.$router.push({
        path: "/excel/scrapy-info"
      });
    },
    toplatformData() {
      this.$router.push({
        path: "/excel/platform-data"
      });
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    dataStore() {
      console.log(this.user);
      axios
        .get(apiUrl + "/store", {
          params: {
            data: JSON.stringify(this.tableData),
            header: JSON.stringify(this.tableHeader),
            name: this.form.name,
            desc: this.form.desc,
            userName: this.user.name,
            trace: this.trace
          }
        })
        .then(response => {
          this.$message({
            message: "数据上传成功",
            type: "warning"
          });
        });
    },
    merge() {
      if (this.tableData.length == 0) {
        this.$message({
          message: "数据为空，请输入数据",
          type: "warning"
        });
      } else {
        var data = table2string(this.tableData);
        axios
          .get(apiUrl + "/merge", {
            params: {
              data: data
            }
          })
          .then(response => {
            this.dialogFormVisible2 = true;
            console.log(response);
            this.form2.tree = response.data.tree;
            this.form2.treeLength = response.data.treeLength;
            this.form2.ci = response.data.ci;
            this.form2.hi = response.data.hi;
            this.form2.ri = response.data.ri;
            this.form2.rc = response.data.rc;
          });
      }
    },
    getParams() {
      console.log(this.$route.query);
      axios
        .get(apiUrl + "/getdataById", {
          params: {
            id: this.$route.query.id
          }
        })
        .then(response => {
          this.tableData = JSON.parse(response["data"]["data"]);
          this.tableHeader = JSON.parse(response["data"]["header"]);
        });
    },
    getData() {
      axios
        .get(apiUrl + "/getdataById", {
          params: {
            id: this.$route.query.id
          }
        })
        .then(response => {
          this.tableData = JSON.parse(response["data"]["data"]);
          this.tableHeader = JSON.parse(response["data"]["header"]);
        });
    },
    perference() {
      var data = table2string(this.tableData);
      axios
        .get(apiUrl + "/knnfullup", {
          params: {
            data: data
          }
        })
        .then(response => {
          string2table(this.tableData, response["data"]);
        });
      this.trace += "进行了KNN插补";
    },
    beforeUpload(file) {
      const isLt1M = file.size / 1024 / 1024 < 1;

      if (isLt1M) {
        return true;
      }

      this.$message({
        message: "Please do not upload files larger than 1m in size.",
        type: "warning"
      });
      return false;
    },
    handleSuccess({ results, header }) {
      this.tableData = results;
      this.tableHeader = header;
    }
  }
};
</script>
