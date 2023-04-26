import{_ as e,Y as a,Z as n,a2 as i}from"./framework-d651fda7.js";const t="/assets/sda-8dc9053b.png",r="/assets/123213-e12b723a.png",c="/assets/23213-fa46bd6d.png",s={},d=i('<div class="hint-container tip"><p class="hint-container-title">提示</p><p>计算机常见问题</p></div><h2 id="cd无效" tabindex="-1"><a class="header-anchor" href="#cd无效" aria-hidden="true">#</a> cd无效</h2><figure><img src="'+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h2><pre><code>一般在环境变量里添加bin路径
</code></pre><h2 id="include" tabindex="-1"><a class="header-anchor" href="#include" aria-hidden="true">#</a> include</h2><pre><code>\`\`\`cpp
用include 引用头文件时，双引号和尖括号的区别：

1.双引号：引用非标准库的头文件，编译器首先在程序源文件所在目录查找，如果未找到，则去系统默认目录查找，通常用于引用用户自定义的头文件。

2.尖扩号：只在系统默认目录（在Linux系统中通常为/usr/include目录）或者尖括号内的路径查找，通常用于引用标准库中自带的头文件。

综上，标准库自带的头文件既可以用双引号也可以用尖括号，不过习惯使用尖括号，用户自定义的头文件只能用双引号。
\`\`\`
</code></pre><h2 id="网络未连接" tabindex="-1"><a class="header-anchor" href="#网络未连接" aria-hidden="true">#</a> 网络未连接</h2><p>🪁 出现问题：<strong><strong>以太网适配器的驱动程序可能出现问题</strong></strong> 解决办法：只勾选以下的内容，点确定 <img src="`+r+'" alt="" loading="lazy"><img src="'+c+'" alt="" loading="lazy"></p>',9),o=[d];function h(l,_){return a(),n("div",null,o)}const u=e(s,[["render",h],["__file","计算机常见问题.html.vue"]]);export{u as default};
