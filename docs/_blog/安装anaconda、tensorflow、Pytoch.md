---
title: ubuntu:命令行修改apt&pip源到国内源
article: true
date: 2023-04-22
category:
  - linux
tag:
  - docker
  - anaconda
order: 
icon: 📅
---

### 安装anaconda
```
https://repo.anaconda.com/archive/Anaconda3-2023.03-Linux-x86_64.sh

sudo sh Anaconda3-2023.03-Linux-x86_64.sh
```
### 配置环境
```
vim ~/.bashrc
```
输入密码进行编辑，然后按下`i`进行插入操作

在文件的末尾加上下述代码：

```bash
export PATH=/home/xiaojia/anaconda3/bin:$PATH
```
重新载入配置文件

```bash
source ~/.bashrc
```

创建虚拟环境
conda create -n env_python3.6 python=3.6
移除和重建虚拟环境
移除环境：conda remove -n env_python3.6 --all  
重建环境：conda create -n env_python3.6 python=3.6

进入和退出虚拟环境
进入：conda activate env_python3.6 或 source activate env_python3.6  
退出：conda deactivate env_python3.6 或 ource deactivate env_python3


## 安装tensorflow
pip install tensorflow-gpu==1.4.0 或  
pip install tensorflow-gpu==1.4.0 -i https://pypi.tuna.tsinghua.edu.cn/simple/
pip install tensorflow ==1.4.0 或  
pip install tensorflow==1.4.0 -i https://pypi.tuna.tsinghua.edu.cn/simple/



## 安装PyTorch

pip install torch==1.2.0 torchvision==0.4.0 -f https://download.pytorch.org/whl/torch_stable.html -i https://pypi.tuna.tsinghua.edu.cn/simple/  
或者
pip install torch==1.2.0+cpu torchvision==0.4.0+cpu -f https://download.pytorch.org/whl/torch_stable.html -i https://pypi.tuna.tsinghua.edu.cn/simple/
或者
pip install torch==1.9.0
pip install torchvision==0.10.0

### *.sh文件安装方法：
运行终端到文件目录下
1.在终端输入：sudo sh *.sh直接运行
2.在终端输入：sudo chmod +x *.sh
再输入：sudo ./*.sh可安装到任意目录，./*.sh可安装到当前用户有权限的目录

### *.bin文件安装方法： 
运行终端到文件目录下
在终端输入：sudo chmod +x *.bin
再输入：sudo ./*.bin可安装到任意目录，./*.bin可安装到当前用户有权限的目录