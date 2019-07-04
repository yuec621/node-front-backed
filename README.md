##全局安装vue
npm i -g vue-cli
##全局安装nodemon
npm i -g nodemon


#创建服务端
mkdir server
创建入口文件--index.js
#创建web端
vue create web

#创建管理端
vue create admin


#后台管理
基于element ui的后台管理基础界面搭建
1.创建分类
2.分类列表
3.修改分类
4.删除分类

#mongodb配置与数据库连接
下载mongodb 
在data下创建文件执行：A：mongod --dbpath "D:\MongDB\data\db" --logpath "D:\MongDB\data\log\mongo.log" --install --serviceName "MongoDB"
在电脑“服务”里面查看是否有MongoDB
1.报错“服务器没有响应控制功能”执行：sc delete MongoDB
再执行A操作
然后执行net start MongoDB
在mongo.exe里面执行use admin
db.createUser({user:"",pwd:"",roles:[{role:"",db:""}]})
db.auth("user","pwd")
use admin
#插入数据
db.repo.insert({"xxx":"xxx"})


下载studio 3t-x64位编写数据


###上传图片 
***上传图片时服务器端口与之前写的端口不一致（3000---->4000）


、、、
