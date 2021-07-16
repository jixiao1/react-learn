# 项目创建

cnpm install create-react-app -g
create-react-app react-antd-cms

cd react-antd-cms
npm start


npm run build


# 如何暴露webpack的隐藏文件？

在使用create-react-app这个脚手架创建项目，一般都要暴露出webpack配置文件。

```
git init
git add --all
git commit -m 'eject'
npm run eject
```


# Redux 状态管理工具（可预测的数据管理容器）

* Flux 是Facebook最早提出一套数据管理的思想

* mobx   mobx-react
* redux   react-redux
* mobx 和 redux都是基于Flux思想开发出来的状态管理方案。

* 状态管理工具到底有什么呢？
    * 1、实现组件之间数据共享
    * 2、实现缓存

* 应用程序中，并不要求一定要使用状态管理，状态管理工具是可选的
