import{_ as e,Y as n,Z as i,a2 as a}from"./framework-39b9cf04.js";const l={},s=a(`<h3 id="一、安装" tabindex="-1"><a class="header-anchor" href="#一、安装" aria-hidden="true">#</a> 一、安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装docker</span>
 <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> docker.io
 <span class="token comment"># docker命令免root权限执行</span>
 <span class="token comment"># 创建docker用户组，若已有docker组会报错，没关系可忽略</span>
 <span class="token function">sudo</span> <span class="token function">groupadd</span> <span class="token function">docker</span>
 <span class="token comment"># 将当前用户加入docker组</span>
 <span class="token function">sudo</span> gpasswd <span class="token parameter variable">-a</span> <span class="token variable">\${<span class="token environment constant">USER</span>}</span> <span class="token function">docker</span>
 <span class="token comment"># 重启docker服务</span>
 <span class="token function">sudo</span> <span class="token function">service</span> <span class="token function">docker</span> restart
<span class="token comment"># 切换当前会话到新group或重新登录重启X会话</span>
 newgrp docker​
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二、命令" tabindex="-1"><a class="header-anchor" href="#二、命令" aria-hidden="true">#</a> 二、命令</h3><ul><li><ol><li>docker build: 从Dockerfile构建镜像。</li></ol></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 构建名为my_image的镜像，Dockerfile位于当前目录下。
docker build -t my_image .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><ol start="2"><li>docker run: 运行一个容器。</li></ol></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 使用my_image镜像创建名为my_container的容器，并将容器的80端口映射到主机的8080端口。
docker run --name my_container -p 8080:80 my_image



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><ol start="3"><li>docker ps: 列出正在运行的容器。</li></ol></li><li><ol start="4"><li>docker stop: 停止一个或多个容器。</li></ol></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker stop my_container
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><ol start="5"><li>docker rm: 删除一个或多个容器。</li></ol></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 删除名为my_container的容器。
docker rm my_container
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><ol start="6"><li>docker images: 列出本地镜像。</li></ol></li><li><ol start="7"><li>docker rmi: 删除一个或多个本地镜像。</li></ol></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 删除名为my_image的镜像。
docker rmi my_image
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><ol start="8"><li>docker pull: 从远程仓库拉取镜像。</li></ol></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 将名为my_image的镜像推送到Docker Hub
docker pull nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><ol start="9"><li>docker push: 将本地镜像推送到远程仓库。</li></ol></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 将名为my_image的镜像推送到Docker Hub
docker push my_image
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><ol start="10"><li>docker exec: 在运行的容器中执行命令。</li></ol></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 在名为my_container的容器中执行命令ls。
docker exec my_container ls
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><ol start="11"><li>docker attach: 进入正在运行的容器，并附加到容器的标准输入、输出和错误流。</li></ol></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 进入名为my_container的容器并查看容器中的输出。
docker attach my_container
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><ol start="12"><li>docker logs: 查看容器日志。</li></ol></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 查看名为my_container的容器的日志。
docker logs my_container
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><ol start="13"><li>docker inspect: 显示容器或镜像的详细信息。</li></ol></li><li><ol start="14"><li>docker network: 管理Docker网络。</li></ol></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 创建一个名为my_network的网络。
docker network create my_network
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><ol start="15"><li>docker-compose: 在多个容器之间定义和运行服务。</li></ol></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 使用docker-compose.yml文件定义和运行服务。
docker-compose up -d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><ol start="16"><li>docker exec -it [container_name/container_id] [command]: 进入正在运行的容器，并执行指定的命令。例如，执行docker exec -it my_container bash可以进入my_container容器并打开bash shell。</li></ol></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 进入名为my_container的容器并打开bash shell
docker exec -it my_container bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,29),d=[s];function t(r,c){return n(),i("div",null,d)}const u=e(l,[["render",t],["__file","docker使用.html.vue"]]);export{u as default};
