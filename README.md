<p align="center">
 <img src="https://github.com/utopfish/vue-pedigreeTree/blob/master/src/assets/logo_%E9%80%8F%E6%98%8E%E5%9B%BE%E5%B1%82.png" alt="KoBVud.png" border="0" />
</p>

<p align="center">
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-2.6.10-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/ElemeFE/element">
    <img src="https://img.shields.io/badge/element--ui-2.7.0-brightgreen.svg" alt="element-ui">
  </a>
  <a href="https://travis-ci.org/PanJiaChen/vue-element-admin" rel="nofollow">
    <img src="https://travis-ci.org/PanJiaChen/vue-element-admin.svg?branch=master" alt="Build Status">
  </a>
  <a href="https://github.com/PanJiaChen/vue-element-admin/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a>
</p>



## 简介

古生物谱系构建系统，它基于 [vue](https://github.com/vuejs/vue) 和 [element-ui](https://github.com/ElemeFE/element)实现。包含了 Element UI & axios & iconfont & permission control & lint，这些搭建后台必要的东西。



## 前序准备

你需要在本地安装 [node](http://nodejs.org/) 和 [git](https://git-scm.com/)。本项目技术栈基于 [ES2015+](http://es6.ruanyifeng.com/)、[vue](https://cn.vuejs.org/index.html)、[vuex](https://vuex.vuejs.org/zh-cn/)、[vue-router](https://router.vuejs.org/zh-cn/) 、[vue-cli](https://github.com/vuejs/vue-cli) 、[axios](https://github.com/axios/axios) 和 [element-ui](https://github.com/ElemeFE/element)，所有的请求数据都使用[Mock.js](https://github.com/nuysoft/Mock)进行模拟，提前了解和学习这些知识会对使用本项目有很大的帮助。




## 开发

```bash
# 克隆项目
git clone https://github.com/utopfish/vue-pedigreeTree.git

# 进入项目目录
cd vue-pedigreeTree

# 安装依赖
npm install

# 启动服务
npm run dev

# 通过使用淘宝镜像来解决下载慢的问题
npm install --registry=https://registry.npm.taobao.org

#或者使用cnpm 安装依赖
#1.安装cnpm
npm install cnpm -g --registry=https://registry.npm.taobao.org
#2.检查是否安装cnpm成功
cnpm -v
#3.安装依赖
cnpm install

```

浏览器访问 http://localhost:9527

## 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```

## 其它

```bash
# 预览发布环境效果
npm run preview

# 预览发布环境效果 + 静态资源分析
npm run preview -- --report

# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix
```

## 项目开发相关

- [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)

- [electron-vue-admin](https://github.com/PanJiaChen/electron-vue-admin)

- [awesome-project](https://github.com/PanJiaChen/vue-element-admin/issues/2312)



## License

[MIT](https://github.com/utopfish/vue-pedigreeTree/master/LICENSE)

Copyright (c) 2019-present utopfish
