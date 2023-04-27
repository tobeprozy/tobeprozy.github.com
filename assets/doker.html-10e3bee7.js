import{_ as o,Y as c,Z as t,$ as n,a0 as e,a1 as a,a2 as r,D as i}from"./framework-39b9cf04.js";const l={},d={href:"https://hub.docker.com/search?q=",target:"_blank",rel:"noopener noreferrer"},p=n("h1",{id:"使用教程",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用教程","aria-hidden":"true"},"#"),e(" 使用教程")],-1),u={href:"https://www.coonote.com/docker/docker-image-usage.html",target:"_blank",rel:"noopener noreferrer"},k=r(`<h1 id="安装docker" tabindex="-1"><a class="header-anchor" href="#安装docker" aria-hidden="true">#</a> 安装docker</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装 Docker</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> docker.io
<span class="token comment"># 启动 Docker 服务</span>
<span class="token function">sudo</span> systemctl start <span class="token function">docker</span>

<span class="token comment"># 开机自动启动 Docker</span>
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>

<span class="token comment"># 创建 Docker 用户组</span>
<span class="token function">sudo</span> <span class="token function">groupadd</span> <span class="token function">docker</span>

<span class="token comment"># 将当前用户加入 Docker 用户组</span>
<span class="token function">sudo</span> <span class="token function">usermod</span> <span class="token parameter variable">-aG</span> <span class="token function">docker</span> <span class="token environment constant">$USER</span>

<span class="token comment"># 切换到 Docker 用户组</span>
newgrp <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function m(v,h){const s=i("ExternalLinkIcon");return c(),t("div",null,[n("p",null,[e("![] (./photo/1.png) ![] (./photo/2.png) ![] (./photo/3.png) "),n("a",d,[e("Explore Docker's Container Image Repository | Docker Hub"),a(s)])]),p,n("p",null,[n("a",u,[e("Docker 镜像使用-菜鸟笔记 (coonote.com)"),a(s)])]),k])}const f=o(l,[["render",m],["__file","doker.html.vue"]]);export{f as default};
