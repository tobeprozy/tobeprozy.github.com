const n=JSON.parse(`{"key":"v-50290dce","path":"/00Daily_Question/QandA/02.html","title":"每日一问—02如何实现PDF合并？","lang":"zh-CN","frontmatter":{"description":"每日一问—02如何实现PDF合并？ python版本 import PyPDF2 pdf_files = ['D:\\\\\\\\TJU\\\\\\\\1.pdf', 'D:\\\\\\\\TJU\\\\\\\\1.pdf'] pdf_writer = PyPDF2.PdfFileWriter() for file_name in pdf_files: pdf_reader = PyPDF2.PdfFileReader(open(file_name, 'rb')) for page_num in range(pdf_reader.numPages): pdf_writer.addPage(pdf_reader.getPage(page_num)) with open('D:\\\\\\\\TJU\\\\\\\\merged_file.pdf', 'wb') as merged_file: pdf_writer.write(merged_file)","head":[["meta",{"property":"og:url","content":"https://tobeprozy.github.io/00Daily_Question/QandA/02.html"}],["meta",{"property":"og:site_name","content":"南叔先生-开源笔记"}],["meta",{"property":"og:title","content":"每日一问—02如何实现PDF合并？"}],["meta",{"property":"og:description","content":"每日一问—02如何实现PDF合并？ python版本 import PyPDF2 pdf_files = ['D:\\\\\\\\TJU\\\\\\\\1.pdf', 'D:\\\\\\\\TJU\\\\\\\\1.pdf'] pdf_writer = PyPDF2.PdfFileWriter() for file_name in pdf_files: pdf_reader = PyPDF2.PdfFileReader(open(file_name, 'rb')) for page_num in range(pdf_reader.numPages): pdf_writer.addPage(pdf_reader.getPage(page_num)) with open('D:\\\\\\\\TJU\\\\\\\\merged_file.pdf', 'wb') as merged_file: pdf_writer.write(merged_file)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-26T10:25:41.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-26T10:25:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"每日一问—02如何实现PDF合并？\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-26T10:25:41.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"python版本","slug":"python版本","link":"#python版本","children":[]},{"level":2,"title":"C++版本","slug":"c-版本","link":"#c-版本","children":[]}],"git":{"createdTime":1682504741000,"updatedTime":1682504741000,"contributors":[{"name":"tobeprozy","email":"904762096@qq.com","commits":1}]},"readingTime":{"minutes":1.32,"words":395},"filePathRelative":"00Daily_Question/QandA/02.md","localizedDate":"2023年4月26日","excerpt":"<h1> 每日一问—02如何实现PDF合并？</h1>\\n<h2> python版本</h2>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> PyPDF2\\n \\npdf_files <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'D:\\\\\\\\TJU\\\\\\\\1.pdf'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'D:\\\\\\\\TJU\\\\\\\\1.pdf'</span><span class=\\"token punctuation\\">]</span>\\npdf_writer <span class=\\"token operator\\">=</span> PyPDF2<span class=\\"token punctuation\\">.</span>PdfFileWriter<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n \\n<span class=\\"token keyword\\">for</span> file_name <span class=\\"token keyword\\">in</span> pdf_files<span class=\\"token punctuation\\">:</span>\\n    pdf_reader <span class=\\"token operator\\">=</span> PyPDF2<span class=\\"token punctuation\\">.</span>PdfFileReader<span class=\\"token punctuation\\">(</span><span class=\\"token builtin\\">open</span><span class=\\"token punctuation\\">(</span>file_name<span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'rb'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token keyword\\">for</span> page_num <span class=\\"token keyword\\">in</span> <span class=\\"token builtin\\">range</span><span class=\\"token punctuation\\">(</span>pdf_reader<span class=\\"token punctuation\\">.</span>numPages<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n        pdf_writer<span class=\\"token punctuation\\">.</span>addPage<span class=\\"token punctuation\\">(</span>pdf_reader<span class=\\"token punctuation\\">.</span>getPage<span class=\\"token punctuation\\">(</span>page_num<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n \\n<span class=\\"token keyword\\">with</span> <span class=\\"token builtin\\">open</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'D:\\\\\\\\TJU\\\\\\\\merged_file.pdf'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'wb'</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">as</span> merged_file<span class=\\"token punctuation\\">:</span>\\n    pdf_writer<span class=\\"token punctuation\\">.</span>write<span class=\\"token punctuation\\">(</span>merged_file<span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
