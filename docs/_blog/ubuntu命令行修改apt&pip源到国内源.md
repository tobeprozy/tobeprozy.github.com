---
title: ubuntu:命令行修改apt&pip源到国内源
article: true
date: 2023-04-22
category:
  - 算能
tag:
  - linux
  - docker
order: 
icon: 📅
---
# 一、命令行修改apt源
这里以阿里云源为例：
```
# 如果需要备份Ubuntu源可以提前备份下
# 可选 cp /etc/apt/sources.list/etc/apt/sources.list.bk
sed -i s@/archive.ubuntu.com/@/mirrors.aliyun.com/@g /etc/apt/sources.list 
sed -i s@/security.ubuntu.com/@/mirrors.aliyun.com/@g /etc/apt/sources.list
```

如果想用[清华源](https://so.csdn.net/so/search?q=%E6%B8%85%E5%8D%8E%E6%BA%90&spm=1001.2101.3001.7020)同理改为@mirrors.tuna.tsinghua.edu.cn即可。

## 二、命令行修改pip源
### pip国内镜像地址
阿里云 http://mirrors.aliyun.com/pypi/simple/
豆瓣(douban) http://pypi.douban.com/simple/
清华大学 https://pypi.tuna.tsinghua.edu.cn/simple/
中国科学技术大学 http://pypi.mirrors.ustc.edu.cn/simple/

### pip永久换源，此方法同样适用于Linux系统
pip config set global.index-url https://mirrors.aliyun.com/pypi/simple/ 
pip config set global.trusted-host mirrors.aliyun.com

### 临时指定pip源
pip install *** -i  https://pypi.tuna.tsinghua.edu.cn/simple/  

### 升级 pip 到最新的版本
pip install pip -U  

