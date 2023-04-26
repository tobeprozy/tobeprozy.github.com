import{_ as n,Y as s,Z as a,a2 as t}from"./framework-d651fda7.js";const p="/assets/2-33055e2d.png",o="/assets/3-06341a21.png",e="/assets/5-55749668.png",c="/assets/7-442e45cb.png",l="/assets/9-f2329c36.png",i={},u=t(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>STL Iterators</p></div><h1 id="stl-iterators" tabindex="-1"><a class="header-anchor" href="#stl-iterators" aria-hidden="true">#</a> STL Iterators</h1><h1 id="迭代器定义" tabindex="-1"><a class="header-anchor" href="#迭代器定义" aria-hidden="true">#</a> 迭代器定义</h1><p>**迭代器（iterator）是一种可以遍历容器元素的数据类型。迭代器是一个变量，相当于容器和操纵容器的算法之间的中介。**C++更趋向于使用迭代器而不是数组下标操作，因为标准库为每一种标准容器（如vector、map和list等）定义了一种迭代器类型，而只有少数容器（如vector）支持数组下标操作访问容器元素。可以通过迭代器指向你想访问容器的元素地址，通过*x打印出元素值。</p><h1 id="举例" tabindex="-1"><a class="header-anchor" href="#举例" aria-hidden="true">#</a> 举例</h1><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token function">sort</span><span class="token punctuation">(</span>vector<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>vector<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span> <span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>vector<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">)</span>
	cout<span class="token operator">&lt;&lt;</span><span class="token string">&quot;sort_result: &quot;</span><span class="token operator">&lt;&lt;</span>vector<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>

cout<span class="token operator">&lt;&lt;</span><span class="token string">&quot;头部元素为：&quot;</span><span class="token operator">&lt;&lt;</span>vector<span class="token punctuation">.</span><span class="token function">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span><span class="token comment">//头部元素</span>
cout<span class="token operator">&lt;&lt;</span><span class="token string">&quot;尾部元素为：&quot;</span><span class="token operator">&lt;&lt;</span>vector<span class="token punctuation">.</span><span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span><span class="token comment">//尾部元素</span>
cout<span class="token operator">&lt;&lt;</span><span class="token string">&quot;容器尺寸大小为：&quot;</span><span class="token operator">&lt;&lt;</span>vector<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span><span class="token comment">//容器尺寸大小</span>

vector<span class="token punctuation">.</span><span class="token function">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token number">11</span><span class="token punctuation">;</span><span class="token comment">//修改容器头部元素值</span>
vector<span class="token punctuation">.</span><span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=</span> <span class="token number">15</span><span class="token punctuation">;</span><span class="token comment">//修改容器尾部元素值</span>

cout<span class="token operator">&lt;&lt;</span><span class="token string">&quot;修改后头部元素为：&quot;</span><span class="token operator">&lt;&lt;</span>vector<span class="token punctuation">.</span><span class="token function">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span><span class="token comment">//头部元素</span>
vector<span class="token punctuation">.</span><span class="token function">pop_back</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//删除尾部元素</span>

cout<span class="token operator">&lt;&lt;</span><span class="token string">&quot;修改+删除后尾部元素为：&quot;</span><span class="token operator">&lt;&lt;</span>vector<span class="token punctuation">.</span><span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span><span class="token comment">//尾部元素</span>
vector<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">for</span><span class="token punctuation">(</span> <span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>vector<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">)</span>
	cout<span class="token operator">&lt;&lt;</span><span class="token string">&quot;用数组输出vector[&quot;</span><span class="token operator">&lt;&lt;</span>i<span class="token operator">&lt;&lt;</span><span class="token string">&quot;]：&quot;</span><span class="token operator">&lt;&lt;</span>vector<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>

std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span><span class="token double-colon punctuation">::</span>const_iterator it<span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span> it <span class="token operator">=</span> vector<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> it <span class="token operator">!=</span> vector<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> it<span class="token operator">++</span> <span class="token punctuation">)</span>
	cout<span class="token operator">&lt;&lt;</span><span class="token string">&quot;用迭代器输出：&quot;</span><span class="token operator">&lt;&lt;</span><span class="token operator">*</span>it<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>

vector<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>vector<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//插入开始位置</span>
<span class="token keyword">for</span><span class="token punctuation">(</span> <span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>vector<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">)</span>
	cout<span class="token operator">&lt;&lt;</span><span class="token string">&quot;insert_result:&quot;</span><span class="token operator">&lt;&lt;</span>vector<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
cout<span class="token operator">&lt;&lt;</span><span class="token string">&quot;头部元素为：&quot;</span><span class="token operator">&lt;&lt;</span>vector<span class="token punctuation">.</span><span class="token function">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>

<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>运行结果</strong></strong></p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>sort_result<span class="token operator">:</span> <span class="token number">1</span>
sort_result<span class="token operator">:</span> <span class="token number">5</span>
sort_result<span class="token operator">:</span> <span class="token number">9</span>
头部元素为：<span class="token number">1</span>
尾部元素为：<span class="token number">9</span>
容器尺寸大小为：<span class="token number">3</span>
修改后头部元素为：<span class="token number">11</span>
修改<span class="token operator">+</span>删除后尾部元素为：<span class="token number">5</span>
用数组输出vector<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>：<span class="token number">11</span>
用数组输出vector<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>：<span class="token number">5</span>
用数组输出vector<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>：<span class="token number">16</span>
用迭代器输出：<span class="token number">11</span>
用迭代器输出：<span class="token number">5</span>
用迭代器输出：<span class="token number">16</span>
insert_result<span class="token operator">:</span><span class="token number">100</span>
insert_result<span class="token operator">:</span><span class="token number">11</span>
insert_result<span class="token operator">:</span><span class="token number">5</span>
insert_result<span class="token operator">:</span><span class="token number">16</span>
头部元素为：<span class="token number">100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>不同容器的迭代器（iterator）的功能</strong></strong></p><figure><img src="`+p+'" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><h1 id="基本模型" tabindex="-1"><a class="header-anchor" href="#基本模型" aria-hidden="true">#</a> 基本模型</h1><figure><img src="'+o+'" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><figure><img src="'+e+'" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><h1 id="reverse-iterator" tabindex="-1"><a class="header-anchor" href="#reverse-iterator" aria-hidden="true">#</a> Reverse Iterator</h1><figure><img src="'+c+'" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><figure><img src="'+l+'" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure>',16),r=[u];function k(d,v){return s(),a("div",null,r)}const b=n(i,[["render",k],["__file","STL Iterators.html.vue"]]);export{b as default};
