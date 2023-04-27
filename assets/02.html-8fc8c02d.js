import{_ as n,Y as s,Z as e,a2 as i}from"./framework-39b9cf04.js";const a={},l=i(`<h1 id="每日一问—02如何实现pdf合并" tabindex="-1"><a class="header-anchor" href="#每日一问—02如何实现pdf合并" aria-hidden="true">#</a> 每日一问—02如何实现PDF合并？</h1><h2 id="python版本" tabindex="-1"><a class="header-anchor" href="#python版本" aria-hidden="true">#</a> python版本</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> PyPDF2
 
pdf_files <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;D:\\\\TJU\\\\1.pdf&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;D:\\\\TJU\\\\1.pdf&#39;</span><span class="token punctuation">]</span>
pdf_writer <span class="token operator">=</span> PyPDF2<span class="token punctuation">.</span>PdfFileWriter<span class="token punctuation">(</span><span class="token punctuation">)</span>
 
<span class="token keyword">for</span> file_name <span class="token keyword">in</span> pdf_files<span class="token punctuation">:</span>
    pdf_reader <span class="token operator">=</span> PyPDF2<span class="token punctuation">.</span>PdfFileReader<span class="token punctuation">(</span><span class="token builtin">open</span><span class="token punctuation">(</span>file_name<span class="token punctuation">,</span> <span class="token string">&#39;rb&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> page_num <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>pdf_reader<span class="token punctuation">.</span>numPages<span class="token punctuation">)</span><span class="token punctuation">:</span>
        pdf_writer<span class="token punctuation">.</span>addPage<span class="token punctuation">(</span>pdf_reader<span class="token punctuation">.</span>getPage<span class="token punctuation">(</span>page_num<span class="token punctuation">)</span><span class="token punctuation">)</span>
 
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;D:\\\\TJU\\\\merged_file.pdf&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> merged_file<span class="token punctuation">:</span>
    pdf_writer<span class="token punctuation">.</span>write<span class="token punctuation">(</span>merged_file<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="c-版本" tabindex="-1"><a class="header-anchor" href="#c-版本" aria-hidden="true">#</a> C++版本</h2><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;fstream&gt;
#include &lt;vector&gt;
#include &lt;string&gt;
#include &lt;sstream&gt;
#include &lt;algorithm&gt;
 
std::vector&lt;std::string&gt; pdf_files = {&quot;D:\\\\TJU\\\\1.pdf&quot;, &quot;D:\\\\TJU\\\\3.pdf&quot;};
 
std::string read_pdf(std::string filename) {
    std::ifstream file(filename, std::ios::binary);
    std::stringstream buffer;
    buffer &lt;&lt; file.rdbuf();
    return buffer.str();
}
 
int main() {
    std::ofstream merged_file(&quot;D:\\\\TJU\\\\merged_file.pdf&quot;, std::ios::binary | std::ios::app);
    for (const auto&amp; file_name : pdf_files) {
        std::string pdf_content = read_pdf(file_name);
        merged_file &lt;&lt; pdf_content;
    }
    merged_file.close();
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段代码不能正确合并 PDF 文件，因为它只是将 PDF 文件作为二进制数据进行简单的拼接。PDF 文件具有特定的结构，不能直接拼接。要合并 PDF 文件，可以使用专门的库，如 C++ 的 PoDoFo 或者 Python 的 PyPDF2</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;fstream&gt;
#include &lt;vector&gt;
#include &lt;string&gt;
#include &lt;sstream&gt;
#include &lt;algorithm&gt;
 
// 定义要合并的 PDF 文件列表
std::vector&lt;std::string&gt; pdf_files = {&quot;D:\\\\TJU\\\\1.pdf&quot;, &quot;D:\\\\TJU\\\\1.pdf&quot;, &quot;D:\\\\TJU\\\\1.pdf&quot;};
 
// 读取 PDF 文件的内容
std::string read_pdf(std::string filename)
{
    std::ifstream file(filename, std::ios::binary | std::ios::app);
    std::stringstream buffer;
    buffer &lt;&lt; file.rdbuf();
    return buffer.str();
}
 
int main()
{
    // 打开输出文件
    std::ofstream merged_file(&quot;D:\\\\TJU\\\\merged_file.pdf&quot;, std::ios::binary | std::ios::app);
 
    // 定义一个字符串变量，用于存储所有 PDF 文件的内容
    std::string all_pdf_content;
 
    // 循环遍历要合并的 PDF 文件列表
    for (const auto &amp;file_name : pdf_files)
    {
        // 读取 PDF 文件的内容，并将其添加到 all_pdf_content 变量中
        all_pdf_content += read_pdf(file_name);
    }
 
    // 将 all_pdf_content 变量的值写入合并文件
    merged_file &lt;&lt; all_pdf_content;
 
    // 关闭输出文件
    merged_file.close();
    std::cout &lt;&lt; &quot;PDF files merged successfully.&quot; &lt;&lt; std::endl;
    return 0;

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),d=[l];function t(r,c){return s(),e("div",null,d)}const p=n(a,[["render",t],["__file","02.html.vue"]]);export{p as default};
