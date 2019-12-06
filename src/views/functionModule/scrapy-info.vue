<template>
  <div class="app-container">
    <el-input
      v-model="filename"
      placeholder="输入搜索关键字"
      style="width:350px;"
      prefix-icon="el-icon-document"
    />
    <el-button
      style="margin-bottom:20px"
      type="primary"
      icon="document"
      @click="getScrapyData"
    >数据搜索</el-button>
    <el-button
      :loading="downloadLoading"
      style="margin-bottom:20px"
      type="primary"
      icon="document"
      @click="handleDownload"
    >导出选中数据</el-button>
    <el-table
      ref="multipleTable"
      v-loading="listLoading"
      :data="list"
      element-loading-text="拼命加载中"
      border
      fit
      highlight-current-row
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" align="center"/>
      <el-table-column align="center" label="Id" width="40">
        <template slot-scope="scope">{{ scope.$index }}</template>
      </el-table-column>
      <el-table-column label="paperTitle" width="150">
        <template slot-scope="scope">{{ scope.row.paperTitle }}</template>
      </el-table-column>
      <el-table-column label="Author" width="150" align="center">
        <template slot-scope="scope">
          <el-tag>{{ scope.row.author }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="被引次数" width="115" align="center">
        <template slot-scope="scope">{{ scope.row.citations }}</template>
      </el-table-column>
      <el-table-column align="center" label="发表时间" width="120">
        <template slot-scope="scope">
          <i class="el-icon-time"/>
          <span>{{ scope.row.time }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="论文链接" width="320">
        <template slot-scope="scope">
          <span>{{ scope.row.href }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { fetchList } from "@/api/article";
import {apiUrl} from '@/api/api-setting.js'
import axios from "axios";
export default {
  name: "SelectExcel",
  data() {
    return {

      list: null,
      listLoading: true,
      multipleSelection: [],
      downloadLoading: false,
      filename: ""
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    getScrapyData() {
      console.log(this.filename)
      this.listLoading = true;
      axios.get(apiUrl+"/getInfo",{
        params:{
          keyword:this.filename
        }
      }).then(response => {
        this.list = response.data;
        console.log(response.data);
        this.listLoading = false;
      });
    },
    fetchData() {
      this.listLoading = true;
      console.log(this.listQuery);
      axios.get(apiUrl+"/getInfo").then(response => {
        this.list = response.data;
        console.log(response.data);
        this.listLoading = false;
      });
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleDownload() {
      if (this.multipleSelection.length) {
        this.downloadLoading = true;
        import("@/vendor/Export2Excel").then(excel => {
          const tHeader = ["Title", "Author", "Cite", "Date","Href"];
          const filterVal = [
            
            "paperTitle",
            "author",
            "citations",
            "time",
            "href"
          ];
          const list = this.multipleSelection;
          const data = this.formatJson(filterVal, list);
          excel.export_json_to_excel({
            header: tHeader,
            data,
            filename: this.filename
          });
          this.$refs.multipleTable.clearSelection();
          this.downloadLoading = false;
        });
      } else {
        this.$message({
          message: "Please select at least one item",
          type: "warning"
        });
      }
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]));
    }
  }
};
</script>
