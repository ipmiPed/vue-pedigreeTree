<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="id" label="编号" width="120"></el-table-column>
      <el-table-column prop="matrixName" label="数据集名" width="120"></el-table-column>
      <el-table-column prop="matrixDesc" label="数据描述" width="150"></el-table-column>
      <el-table-column prop="userName" label="数据上传者" width="120"></el-table-column>
      <el-table-column prop="uploadTime" label="上传时间" width="120"></el-table-column>
      <el-table-column prop="lastchangeTime" label="最后修改时间时间" width="140"></el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button
            @click="dialogFormVisible = true "
            type="text"
            size="small"
            v-on:click="see(scope.row)"
          >查看</el-button>
          <el-button type="text" size="small" @click="edit(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row>
      <el-dialog title="数据集描述" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="数据命名" :label-width="formLabelWidth">
            <el-input v-model="form.matrixName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="数据描述" :label-width="formLabelWidth">
            <el-input v-model="form.matrixDesc" type="textarea" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="上传者" :label-width="formLabelWidth">
            <el-input v-model="form.userName" autocomplete="off"></el-input>
          </el-form-item>
           <el-form-item label="数据上传时间" :label-width="formLabelWidth">
            <el-input v-model="form.uploadTime"  autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="最后修改时间" :label-width="formLabelWidth">
            <el-input v-model="form.lastchangeTime"  autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="操作记录" :label-width="formLabelWidth">
            <el-input v-model="form.trace" type="textarea" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="数据特征名" :label-width="formLabelWidth">
            <el-input v-model="form.header" type="textarea" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
      <!-- <el-button type="primary" v-on:click="getData()">获取数据</el-button> -->
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
import {apiUrl} from '@/api/api-setting.js'
// import { resolve } from "dns";
export default {
  methods: {
    handleClick(row) {
      console.log(row);
      this.$router.push({
        path: "/excel/upload-data",
        query: {
          id: row.id,
          name: row.name
        }
      });
    },
    edit(row) {
      this.$router.push({
        path: "/excel/upload-data",
        query: {
          id: row.id,
          name: row.name
        }
      });
    },
    see(row) {
      (this.form.id = row.$index),
        (this.form.matrixName = row.matrixName),
        (this.form.matrixDesc = row.matrixDesc),
        (this.form.userName = row.userName),
        (this.form.uploadTime = row.uploadTime),
        (this.form.lastchangeTime = row.lastchangeTime),
        (this.form.trace = row.trace),
        (this.form.header = row.header);
    },
    init() {
      axios.get(apiUrl+"/getMatrix").then(response => {
        console.log(response.data);
        this.tableData = response.data;
      });
    }
  },
  created: function() {
    this.init();
  },
  data() {
    return {
      formLabelWidth: "120px",
      form: {
        name: "his",
        desc: ""
      },
      dialogFormVisible: false,
      tableData: [
      ]
    };
  }
};
</script>