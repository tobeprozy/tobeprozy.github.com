import{_ as n,Y as s,Z as a,a2 as e}from"./framework-39b9cf04.js";const t={},p=e(`<h1 id="每日一问—03如何拆分指定页码pdf" tabindex="-1"><a class="header-anchor" href="#每日一问—03如何拆分指定页码pdf" aria-hidden="true">#</a> 每日一问—03如何拆分指定页码pdf</h1><p>​</p><h2 id="一、各页码范围合成一个整体的pdf-​" tabindex="-1"><a class="header-anchor" href="#一、各页码范围合成一个整体的pdf-​" aria-hidden="true">#</a> 一、各页码范围合成一个整体的pdf  ​</h2><h3 id="python版本" tabindex="-1"><a class="header-anchor" href="#python版本" aria-hidden="true">#</a> python版本</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> PyPDF2 <span class="token comment">#导入PyPDF2模块</span>

<span class="token keyword">def</span> <span class="token function">merge_pdf_pages</span><span class="token punctuation">(</span>input_pdf<span class="token punctuation">,</span> page_ranges<span class="token punctuation">,</span> output_pdf<span class="token punctuation">)</span><span class="token punctuation">:</span>
    reader <span class="token operator">=</span> PyPDF2<span class="token punctuation">.</span>PdfFileReader<span class="token punctuation">(</span>input_pdf<span class="token punctuation">)</span> <span class="token comment">#读取PDF文件</span>
    writer <span class="token operator">=</span> PyPDF2<span class="token punctuation">.</span>PdfFileWriter<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">#创建PDF文件写入对象</span>

    <span class="token keyword">for</span> page_range <span class="token keyword">in</span> page_ranges<span class="token punctuation">:</span> <span class="token comment">#遍历每个页码范围</span>
        start<span class="token punctuation">,</span> end <span class="token operator">=</span> page_range <span class="token comment">#获取页码范围的起始页码和结束页码</span>
        <span class="token keyword">for</span> page <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token comment">#遍历页码范围内的每一页</span>
            writer<span class="token punctuation">.</span>addPage<span class="token punctuation">(</span>reader<span class="token punctuation">.</span>getPage<span class="token punctuation">(</span>page<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">#将每一页添加到PDF文件写入对象中</span>

    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>output_pdf<span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> output<span class="token punctuation">:</span> <span class="token comment">#打开输出PDF文件</span>
        writer<span class="token punctuation">.</span>write<span class="token punctuation">(</span>output<span class="token punctuation">)</span> <span class="token comment">#将PDF文件写入对象中的内容写入输出PDF文件</span>

input_pdf <span class="token operator">=</span> <span class="token string">&quot;D:\\\\TJU\\\\3.pdf&quot;</span> <span class="token comment">#输入PDF文件路径</span>
page_ranges <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token comment">#页码范围</span>
output_pdf <span class="token operator">=</span> <span class="token string">&#39;D:\\\\TJU\\\\output.pdf&#39;</span> <span class="token comment">#输出PDF文件路径</span>
merge_pdf_pages<span class="token punctuation">(</span>input_pdf<span class="token punctuation">,</span> page_ranges<span class="token punctuation">,</span> output_pdf<span class="token punctuation">)</span> <span class="token comment">#合并PDF文件</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;PDF files merged successfully!&#39;</span><span class="token punctuation">)</span> <span class="token comment">#输出合并成功信息</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c-版本" tabindex="-1"><a class="header-anchor" href="#c-版本" aria-hidden="true">#</a> C++版本</h3><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="c-版本-1" tabindex="-1"><a class="header-anchor" href="#c-版本-1" aria-hidden="true">#</a> C++版本()</h2><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt; //导入iostream库
#include &lt;podofo/podofo.h&gt; //导入podofo库
 
void merge_pdf_pages(const char* input_pdf, const std::vector&lt;std::pair&lt;int, int&gt;&gt;&amp; page_ranges, const char* output_pdf) { //定义函数merge_pdf_pages
    PoDoFo::PdfVecObjects objects; //创建PdfVecObjects对象
    PoDoFo::PdfWriter writer; //创建PdfWriter对象
    PoDoFo::PdfDocument document(input_pdf); //创建PdfDocument对象
 
    PoDoFo::PdfDocument output_doc(&amp;objects); //创建PdfDocument对象
    output_doc.GetInfo()-&gt;SetCreator(document.GetInfo()-&gt;GetCreator()); //设置输出PDF文件的创建者
    output_doc.GetInfo()-&gt;SetAuthor(document.GetInfo()-&gt;GetAuthor()); //设置输出PDF文件的作者
 
    for (const auto&amp; page_range : page_ranges) { //遍历每个页码范围
        for (int page = page_range.first; page &lt;= page_range.second; ++page) { //遍历页码范围内的每一页
            PoDoFo::PdfPage* source_page = document.GetPage(page - 1); //获取源PDF文件中的每一页
            PoDoFo::PdfPage* new_page = output_doc.CreatePage(source_page-&gt;GetPageSize()); //创建新的PDF文件页
            writer.AppendPage(new_page, source_page); //将源PDF文件中的每一页添加到新的PDF文件页中
        }
    }
 
    writer.Write(output_pdf, &amp;output_doc); //将新的PDF文件写入输出PDF文件中

}

int main() { //主函数
    const char* input_pdf = &quot;input.pdf&quot;; //输入PDF文件路径
    std::vector&lt;std::pair&lt;int, int&gt;&gt; page_ranges = {{1, 3}, {5, 7}}; //页码范围
    const char* output_pdf = &quot;output.pdf&quot;; //输出PDF文件路径
    merge_pdf_pages(input_pdf, page_ranges, output_pdf); //合并PDF文件
    return 0; //返回0
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、每个页码范围单独成pdf" tabindex="-1"><a class="header-anchor" href="#二、每个页码范围单独成pdf" aria-hidden="true">#</a> 二、每个页码范围单独成pdf</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> PyPDF2 <span class="token comment">#导入PyPDF2模块</span>

<span class="token keyword">def</span> <span class="token function">merge_pdf_pages</span><span class="token punctuation">(</span>input_pdf<span class="token punctuation">,</span> page_ranges<span class="token punctuation">,</span> output_pdf<span class="token punctuation">)</span><span class="token punctuation">:</span>
    reader <span class="token operator">=</span> PyPDF2<span class="token punctuation">.</span>PdfFileReader<span class="token punctuation">(</span>input_pdf<span class="token punctuation">)</span> <span class="token comment">#读取PDF文件</span>
    writer <span class="token operator">=</span> PyPDF2<span class="token punctuation">.</span>PdfFileWriter<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">#创建PDF文件写入对象</span>

    <span class="token keyword">for</span> page_range <span class="token keyword">in</span> page_ranges<span class="token punctuation">:</span> <span class="token comment">#遍历每个页码范围</span>
        start<span class="token punctuation">,</span> end <span class="token operator">=</span> page_range <span class="token comment">#获取页码范围的起始页码和结束页码</span>
        <span class="token keyword">for</span> page <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token comment">#遍历页码范围内的每一页</span>
            writer<span class="token punctuation">.</span>addPage<span class="token punctuation">(</span>reader<span class="token punctuation">.</span>getPage<span class="token punctuation">(</span>page<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">#将每一页添加到PDF文件写入对象中</span>

    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>output_pdf<span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> output<span class="token punctuation">:</span> <span class="token comment">#打开输出PDF文件</span>
        writer<span class="token punctuation">.</span>write<span class="token punctuation">(</span>output<span class="token punctuation">)</span> <span class="token comment">#将PDF文件写入对象中的内容写入输出PDF文件</span>

input_pdf <span class="token operator">=</span> <span class="token string">&quot;D:\\\\TJU\\\\3.pdf&quot;</span> <span class="token comment">#输入PDF文件路径</span>
page_ranges <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token comment">#页码范围</span>
output_pdf <span class="token operator">=</span> <span class="token string">&#39;D:\\\\TJU\\\\output.pdf&#39;</span> <span class="token comment">#输出PDF文件路径</span>
merge_pdf_pages<span class="token punctuation">(</span>input_pdf<span class="token punctuation">,</span> page_ranges<span class="token punctuation">,</span> output_pdf<span class="token punctuation">)</span> <span class="token comment">#合并PDF文件</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;PDF files merged successfully!&#39;</span><span class="token punctuation">)</span> <span class="token comment">#输出合并成功信息</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),i=[p];function o(c,l){return s(),a("div",null,i)}const d=n(t,[["render",o],["__file","03.html.vue"]]);export{d as default};
