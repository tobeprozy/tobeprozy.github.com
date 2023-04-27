import{_ as n,Y as s,Z as a,a2 as e}from"./framework-39b9cf04.js";const t={},i=e(`<h1 id="每日一问—01如何在指定目录下的文件名前面加上-0-序号" tabindex="-1"><a class="header-anchor" href="#每日一问—01如何在指定目录下的文件名前面加上-0-序号" aria-hidden="true">#</a> 每日一问—01如何在指定目录下的文件名前面加上“0”+序号</h1><h2 id="python版本" tabindex="-1"><a class="header-anchor" href="#python版本" aria-hidden="true">#</a> python版本</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os
path <span class="token operator">=</span> <span class="token string">&quot;C:\\\\&quot;</span>
i <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">for</span> filename <span class="token keyword">in</span> os<span class="token punctuation">.</span>listdir<span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        new_name <span class="token operator">=</span> <span class="token string">&quot;0&quot;</span> <span class="token operator">+</span> <span class="token builtin">str</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;_&quot;</span> <span class="token operator">+</span> filename
        os<span class="token punctuation">.</span>rename<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>path<span class="token punctuation">,</span> filename<span class="token punctuation">)</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>path<span class="token punctuation">,</span> new_name<span class="token punctuation">)</span><span class="token punctuation">)</span>
        i <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token keyword">except</span> PermissionError<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;拒绝访问路径，请启用超级权限&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="c-版本" tabindex="-1"><a class="header-anchor" href="#c-版本" aria-hidden="true">#</a> C++版本</h2><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;filesystem&gt;
#include &lt;string&gt;
 
namespace fs = std::filesystem;
 
int main() {
    std::string path = &quot;C:\\\\&quot;;
    int i = 1;
 
    for (const auto&amp; entry : fs::directory_iterator(path)) {
        try {
            std::string filename = entry.path().filename().string();
            std::string new_name = &quot;0&quot; + std::to_string(i) + &quot;_&quot; + filename;
            fs::rename(entry.path(), entry.path().parent_path() / new_name);
            i++;
        }
        catch (const std::exception&amp; e) {
            std::cout &lt;&lt; &quot;Error: &quot; &lt;&lt; e.what() &lt;&lt; std::endl;
        }
    }
 
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[i];function o(p,c){return s(),a("div",null,l)}const d=n(t,[["render",o],["__file","01.html.vue"]]);export{d as default};
