![] (./photo/1.png)
![] (./photo/2.png)
![] (./photo/3.png)
[Explore Docker's Container Image Repository | Docker Hub](https://hub.docker.com/search?q=)

# 使用教程
[Docker 镜像使用-菜鸟笔记 (coonote.com)](https://www.coonote.com/docker/docker-image-usage.html)


# 安装docker
```bash
# 安装 Docker
sudo apt install docker.io
# 启动 Docker 服务
sudo systemctl start docker

# 开机自动启动 Docker
sudo systemctl enable docker

# 创建 Docker 用户组
sudo groupadd docker

# 将当前用户加入 Docker 用户组
sudo usermod -aG docker $USER

# 切换到 Docker 用户组
newgrp docker
```
