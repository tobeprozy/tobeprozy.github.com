const e=JSON.parse('{"key":"v-1141bba7","path":"/18Data_Structure/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E7%BC%96%E7%A8%8B%E7%BB%83%E4%B9%A0/%E4%BB%A3%E7%A0%81%E9%9A%8F%E6%83%B3%E5%BD%95/%E4%BB%A3%E7%A0%81%E9%9A%8F%E6%83%B3%E5%BD%95%E7%AE%97%E6%B3%95%E6%80%BB%E7%BB%93(C__)%E7%89%88%E6%9C%AC%E2%80%94%E2%80%94%E5%8F%8C%E6%8C%87%E9%92%88.html","title":"代码随想录算法总结(C++)版本——双指针","lang":"zh-CN","frontmatter":{"description":"代码随想录算法总结(C++)版本——双指针 Created: September 2, 2022 1:06 PM 27. 移除元素 给你一个数组 nums&nbsp;和一个值 val，你需要 原地 移除所有数值等于&nbsp;val&nbsp;的元素，并返回移除后数组的新长度。 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并原地修改输入数组。 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。","head":[["meta",{"property":"og:url","content":"https://tobeprozy.github.io/18Data_Structure/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E7%BC%96%E7%A8%8B%E7%BB%83%E4%B9%A0/%E4%BB%A3%E7%A0%81%E9%9A%8F%E6%83%B3%E5%BD%95/%E4%BB%A3%E7%A0%81%E9%9A%8F%E6%83%B3%E5%BD%95%E7%AE%97%E6%B3%95%E6%80%BB%E7%BB%93(C__)%E7%89%88%E6%9C%AC%E2%80%94%E2%80%94%E5%8F%8C%E6%8C%87%E9%92%88.html"}],["meta",{"property":"og:site_name","content":"南叔先生-开源笔记"}],["meta",{"property":"og:title","content":"代码随想录算法总结(C++)版本——双指针"}],["meta",{"property":"og:description","content":"代码随想录算法总结(C++)版本——双指针 Created: September 2, 2022 1:06 PM 27. 移除元素 给你一个数组 nums&nbsp;和一个值 val，你需要 原地 移除所有数值等于&nbsp;val&nbsp;的元素，并返回移除后数组的新长度。 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并原地修改输入数组。 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-26T10:25:41.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-26T10:25:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"代码随想录算法总结(C++)版本——双指针\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-26T10:25:41.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"暴力解法","slug":"暴力解法","link":"#暴力解法","children":[]},{"level":2,"title":"双指针法","slug":"双指针法","link":"#双指针法","children":[]},{"level":2,"title":"版本一","slug":"版本一","link":"#版本一","children":[]},{"level":2,"title":"版本二","slug":"版本二","link":"#版本二","children":[]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"双指针法","slug":"双指针法-1","link":"#双指针法-1","children":[]},{"level":2,"title":"递归法","slug":"递归法","link":"#递归法","children":[]},{"level":2,"title":"#思路","slug":"思路-1","link":"#思路-1","children":[]},{"level":2,"title":"哈希解法","slug":"哈希解法","link":"#哈希解法","children":[]},{"level":2,"title":"双指针","slug":"双指针","link":"#双指针","children":[]},{"level":2,"title":"第18题. 四数之和","slug":"第18题-四数之和","link":"#第18题-四数之和","children":[]}],"git":{"createdTime":1682504741000,"updatedTime":1682504741000,"contributors":[{"name":"tobeprozy","email":"904762096@qq.com","commits":1}]},"readingTime":{"minutes":19.46,"words":5837},"filePathRelative":"18Data_Structure/数据结构编程练习/代码随想录/代码随想录算法总结(C++)版本——双指针.md","localizedDate":"2023年4月26日","excerpt":"<h1> 代码随想录算法总结(C++)版本——双指针</h1>\\n<p>Created: September 2, 2022 1:06 PM</p>\\n<h1> <strong><strong>27. 移除元素</strong></strong></h1>\\n<p>给你一个数组 nums&nbsp;和一个值 val，你需要 原地 移除所有数值等于&nbsp;val&nbsp;的元素，并返回移除后数组的新长度。</p>\\n<p>不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并<strong>原地</strong>修改输入数组。</p>\\n<p>元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。</p>","autoDesc":true}');export{e as data};
