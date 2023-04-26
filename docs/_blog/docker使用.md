---
title: docker使用
article: true
date: 2023-04-22
category:
  - linux
tag:
  - docker
order: 
icon: 📅
---
### 一、安装
```bash
# 安装docker
 sudo apt-get install docker.io
 # docker命令免root权限执行
 # 创建docker用户组，若已有docker组会报错，没关系可忽略
 sudo groupadd docker
 # 将当前用户加入docker组
 sudo gpasswd -a ${USER} docker
 # 重启docker服务
 sudo service docker restart
# 切换当前会话到新group或重新登录重启X会话
 newgrp docker​
```
### 二、命令
- 1.  docker build: 从Dockerfile构建镜像。
```
# 构建名为my_image的镜像，Dockerfile位于当前目录下。
docker build -t my_image .
```
- 2.  docker run: 运行一个容器。
```
# 使用my_image镜像创建名为my_container的容器，并将容器的80端口映射到主机的8080端口。
docker run --name my_container -p 8080:80 my_image



```
- 3.  docker ps: 列出正在运行的容器。
- 4.  docker stop: 停止一个或多个容器。
```
docker stop my_container
```
- 5.  docker rm: 删除一个或多个容器。 
```
# 删除名为my_container的容器。
docker rm my_container
```
- 6.  docker images: 列出本地镜像。  
- 7.  docker rmi: 删除一个或多个本地镜像。
```
# 删除名为my_image的镜像。
docker rmi my_image
```
- 8.  docker pull: 从远程仓库拉取镜像。  
```
# 将名为my_image的镜像推送到Docker Hub
docker pull nginx
```
- 9.  docker push: 将本地镜像推送到远程仓库。 
```
# 将名为my_image的镜像推送到Docker Hub
docker push my_image
```
- 10.  docker exec: 在运行的容器中执行命令。
```
# 在名为my_container的容器中执行命令ls。
docker exec my_container ls
```
- 11.  docker attach: 进入正在运行的容器，并附加到容器的标准输入、输出和错误流。 
```
# 进入名为my_container的容器并查看容器中的输出。
docker attach my_container
```
- 12.  docker logs: 查看容器日志。  
```
# 查看名为my_container的容器的日志。
docker logs my_container
```
- 13.  docker inspect: 显示容器或镜像的详细信息。
- 14.  docker network: 管理Docker网络。
```
# 创建一个名为my_network的网络。
docker network create my_network
```
- 15.  docker-compose: 在多个容器之间定义和运行服务。
```
# 使用docker-compose.yml文件定义和运行服务。
docker-compose up -d
```
- 16.  docker exec -it [container_name/container_id] [command]: 进入正在运行的容器，并执行指定的命令。例如，执行docker exec -it my_container bash可以进入my_container容器并打开bash shell。
```
# 进入名为my_container的容器并打开bash shell
docker exec -it my_container bash
```