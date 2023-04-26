const e=JSON.parse('{"key":"v-c4b5c206","path":"/18Data_Structure/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E7%BC%96%E7%A8%8B%E7%BB%83%E4%B9%A0/%E4%BB%A3%E7%A0%81%E9%9A%8F%E6%83%B3%E5%BD%95/%E4%BB%A3%E7%A0%81%E9%9A%8F%E6%83%B3%E5%BD%95%E7%AE%97%E6%B3%95%E6%80%BB%E7%BB%93(C__)%E7%89%88%E6%9C%AC%E2%80%94%E2%80%94%E8%B4%AA%E5%BF%83.html","title":"代码随想录算法总结(C++)版本——贪心","lang":"zh-CN","frontmatter":{"description":"代码随想录算法总结(C++)版本——贪心 Created: September 2, 2022 1:06 PM 贪心算法概述 贪心算法一般分为如下四步： 将问题分解为若干个子问题 找出适合的贪心策略 求解每一个子问题的最优解 将局部最优解堆叠成全局最优解 Untitled Untitled","head":[["meta",{"property":"og:url","content":"https://tobeprozy.github.io/18Data_Structure/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E7%BC%96%E7%A8%8B%E7%BB%83%E4%B9%A0/%E4%BB%A3%E7%A0%81%E9%9A%8F%E6%83%B3%E5%BD%95/%E4%BB%A3%E7%A0%81%E9%9A%8F%E6%83%B3%E5%BD%95%E7%AE%97%E6%B3%95%E6%80%BB%E7%BB%93(C__)%E7%89%88%E6%9C%AC%E2%80%94%E2%80%94%E8%B4%AA%E5%BF%83.html"}],["meta",{"property":"og:site_name","content":"南叔先生-开源笔记"}],["meta",{"property":"og:title","content":"代码随想录算法总结(C++)版本——贪心"}],["meta",{"property":"og:description","content":"代码随想录算法总结(C++)版本——贪心 Created: September 2, 2022 1:06 PM 贪心算法概述 贪心算法一般分为如下四步： 将问题分解为若干个子问题 找出适合的贪心策略 求解每一个子问题的最优解 将局部最优解堆叠成全局最优解 Untitled Untitled"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://tobeprozy.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-26T10:25:41.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"代码随想录算法总结(C++)版本——贪心"}],["meta",{"property":"article:modified_time","content":"2023-04-26T10:25:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"代码随想录算法总结(C++)版本——贪心\\",\\"image\\":[\\"https://tobeprozy.github.io/\\"],\\"dateModified\\":\\"2023-04-26T10:25:41.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"455.分发饼干","slug":"_455-分发饼干","link":"#_455-分发饼干","children":[]},{"level":2,"title":"1005.K次取反后最大化的数组和","slug":"_1005-k次取反后最大化的数组和","link":"#_1005-k次取反后最大化的数组和","children":[]},{"level":2,"title":"860.柠檬水找零","slug":"_860-柠檬水找零","link":"#_860-柠檬水找零","children":[]},{"level":2,"title":"序列问题","slug":"序列问题","link":"#序列问题","children":[{"level":3,"title":"376. 摆动序列","slug":"_376-摆动序列","link":"#_376-摆动序列","children":[]},{"level":3,"title":"53. 最大子序和","slug":"_53-最大子序和","link":"#_53-最大子序和","children":[]},{"level":3,"title":"738.单调递增的数字","slug":"_738-单调递增的数字","link":"#_738-单调递增的数字","children":[]}]},{"level":2,"title":"股票问题","slug":"股票问题","link":"#股票问题","children":[{"level":3,"title":"122.买卖股票的最佳时机II","slug":"_122-买卖股票的最佳时机ii","link":"#_122-买卖股票的最佳时机ii","children":[]},{"level":3,"title":"714. 买卖股票的最佳时机含手续费","slug":"_714-买卖股票的最佳时机含手续费","link":"#_714-买卖股票的最佳时机含手续费","children":[]}]},{"level":2,"title":"两个维度权衡问题","slug":"两个维度权衡问题","link":"#两个维度权衡问题","children":[{"level":3,"title":"135分发糖果","slug":"_135分发糖果","link":"#_135分发糖果","children":[]},{"level":3,"title":"406.根据身高重建队列","slug":"_406-根据身高重建队列","link":"#_406-根据身高重建队列","children":[]}]},{"level":2,"title":"区间问题","slug":"区间问题","link":"#区间问题","children":[{"level":3,"title":"55. 跳跃游戏","slug":"_55-跳跃游戏","link":"#_55-跳跃游戏","children":[]},{"level":3,"title":"45.跳跃游戏II","slug":"_45-跳跃游戏ii","link":"#_45-跳跃游戏ii","children":[]},{"level":3,"title":"452. 用最少数量的箭引爆气球","slug":"_452-用最少数量的箭引爆气球","link":"#_452-用最少数量的箭引爆气球","children":[]},{"level":3,"title":"435.无重叠区间","slug":"_435-无重叠区间","link":"#_435-无重叠区间","children":[]},{"level":3,"title":"763.划分字母区间","slug":"_763-划分字母区间","link":"#_763-划分字母区间","children":[]},{"level":3,"title":"56. 合并区间","slug":"_56-合并区间","link":"#_56-合并区间","children":[]}]},{"level":2,"title":"134. 加油站","slug":"_134-加油站","link":"#_134-加油站","children":[{"level":3,"title":"968.监控二叉树","slug":"_968-监控二叉树","link":"#_968-监控二叉树","children":[]}]}],"git":{"createdTime":1682504741000,"updatedTime":1682504741000,"contributors":[{"name":"tobeprozy","email":"904762096@qq.com","commits":1}]},"readingTime":{"minutes":28.54,"words":8563},"filePathRelative":"18Data_Structure/数据结构编程练习/代码随想录/代码随想录算法总结(C++)版本——贪心.md","localizedDate":"2023年4月26日","excerpt":"<h1> 代码随想录算法总结(C++)版本——贪心</h1>\\n<p>Created: September 2, 2022 1:06 PM</p>\\n<h1> 贪心算法概述</h1>\\n<p>贪心算法一般分为如下四步：</p>\\n<ul>\\n<li>将问题分解为若干个子问题</li>\\n<li>找出适合的贪心策略</li>\\n<li>求解每一个子问题的最优解</li>\\n<li>将局部最优解堆叠成全局最优解</li>\\n</ul>\\n<figure><figcaption>Untitled</figcaption></figure>\\n<figure><figcaption>Untitled</figcaption></figure>","autoDesc":true}');export{e as data};
