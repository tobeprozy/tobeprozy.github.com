import{_ as d,Y as a,Z as t,$ as i,a0 as n,a1 as s,a2 as l,D as r}from"./framework-39b9cf04.js";const v={},u=l('<h1 id="代码随想录算法总结-c-版本——哈希、字符串" tabindex="-1"><a class="header-anchor" href="#代码随想录算法总结-c-版本——哈希、字符串" aria-hidden="true">#</a> 代码随想录算法总结(C++)版本——哈希、字符串</h1><p>Created: September 2, 2022 1:06 PM</p><h1 id="哈希" tabindex="-1"><a class="header-anchor" href="#哈希" aria-hidden="true">#</a> 哈希</h1><h3 id="常见的三种哈希结构" tabindex="-1"><a class="header-anchor" href="#常见的三种哈希结构" aria-hidden="true">#</a> 常见的三种哈希结构</h3><p>当我们想使用哈希法来解决问题的时候，我们一般会选择如下三种数据结构。</p><ul><li>数组</li><li>set （集合）</li><li>map(映射)</li></ul><p>在C++中，set 和 map 分别提供以下三种数据结构，其底层实现以及优劣如下表所示：</p><table><thead><tr><th>集合</th><th>底层实现</th><th>是否有序</th><th>数值可否重复</th><th>能否更改数值</th><th>查询效率</th><th>增删效率</th></tr></thead><tbody><tr><td>set</td><td>红黑树</td><td>有序</td><td>不可重复</td><td>不可更改</td><td>O(logn)</td><td>O(logn)</td></tr><tr><td>unordered_set</td><td>哈希表</td><td>无序</td><td>不可重复</td><td>不可更改</td><td>O(1)</td><td>O(1)</td></tr><tr><td>multiset</td><td>红黑树</td><td>有序</td><td>可重复</td><td>不可更改</td><td>O(logn)</td><td>O(logn)</td></tr></tbody></table><h3 id="_242-有效的字母异位词" tabindex="-1"><a class="header-anchor" href="#_242-有效的字母异位词" aria-hidden="true">#</a> 242.有效的字母异位词</h3><p>给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。</p><p>示例 1: 输入: s = &quot;anagram&quot;, t = &quot;nagaram&quot; 输出: true</p><p>示例 2: 输入: s = &quot;rat&quot;, t = &quot;car&quot; 输出: false</p><p><strong>说明:</strong></p><p>你可以假设字符串只包含小写字母。</p>',14),c=i("img",{src:"https://tva1.sinaimg.cn/large/008eGmZEly1govxyg83bng30ds09ob29.gif",alt:"https://tva1.sinaimg.cn/large/008eGmZEly1govxyg83bng30ds09ob29.gif",tabindex:"0",loading:"lazy"},null,-1),m={href:"https://tva1.sinaimg.cn/large/008eGmZEly1govxyg83bng30ds09ob29.gif",target:"_blank",rel:"noopener noreferrer"},b=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Solution {
public:
    bool isAnagram(string s, string t) {
        int record[26] = {0};
        for (int i = 0; i &lt; s.size(); i++) {
            // 并不需要记住字符a的ASCII，只要求出一个相对数值就可以了
            record[s[i] - &#39;a&#39;]++;
        }
        for (int i = 0; i &lt; t.size(); i++) {
            record[t[i] - &#39;a&#39;]--;
        }
        for (int i = 0; i &lt; 26; i++) {
            if (record[i] != 0) {
                // record数组如果有的元素不为零0，说明字符串s和t 一定是谁多了字符或者谁少了字符。
                return false;
            }
        }
        // record数组所有元素都为零0，说明字符串s和t是字母异位词
        return true;
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_349-两个数组的交集" tabindex="-1"><a class="header-anchor" href="#_349-两个数组的交集" aria-hidden="true">#</a> 349. 两个数组的交集</h3><p>题意：给定两个数组，编写一个函数来计算它们的交集。</p>`,3),o=i("img",{src:"https://img-blog.csdnimg.cn/20200818193523911.png",alt:"https://img-blog.csdnimg.cn/20200818193523911.png",tabindex:"0",loading:"lazy"},null,-1),g={href:"https://img-blog.csdnimg.cn/20200818193523911.png",target:"_blank",rel:"noopener noreferrer"},p=i("p",null,[i("strong",null,"说明："),n(" 输出结果中的每个元素一定是唯一的。 我们可以不考虑输出结果的顺序。")],-1),h=i("p",null,"思路如图所示：",-1),f=i("img",{src:"https://img-blog.csdnimg.cn/2020080918570417.png",alt:"https://img-blog.csdnimg.cn/2020080918570417.png",tabindex:"0",loading:"lazy"},null,-1),_={href:"https://img-blog.csdnimg.cn/2020080918570417.png",target:"_blank",rel:"noopener noreferrer"},x=l(`<p>C++代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Solution {
public:
    vector&lt;int&gt; intersection(vector&lt;int&gt;&amp; nums1, vector&lt;int&gt;&amp; nums2) {
        unordered_set&lt;int&gt; result_set; // 存放结果
        unordered_set&lt;int&gt; nums_set(nums1.begin(), nums1.end());
        for (int num : nums2) {
            // 发现nums2的元素 在nums_set里又出现过
            if (nums_set.find(num) != nums_set.end()) {
                result_set.insert(num);
            }
        }
        return vector&lt;int&gt;(result_set.begin(), result_set.end());
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第202题-快乐数" tabindex="-1"><a class="header-anchor" href="#第202题-快乐数" aria-hidden="true">#</a> 第202题. 快乐数</h2><p>编写一个算法来判断一个数 n 是不是快乐数。</p><p>「快乐数」定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。如果 可以变为  1，那么这个数就是快乐数。</p><p>如果 n 是快乐数就返回 True ；不是，则返回 False 。</p><p><strong>示例：</strong></p><p>输入：19 输出：true 解释： $1^2 + 9^2 = 82$ $8^2 + 2^2 = 68$ $6^2 + 8^2 = 100$ $1^2 + 0^2 + 0^2 =1$</p><p>C++代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Solution {
public:
    // 取数值各个位上的单数之和
    int getSum(int n) {
        int sum = 0;
        while (n) {
            sum += (n % 10) * (n % 10);
            n /= 10;
        }
        return sum;
    }
    bool isHappy(int n) {
        unordered_set&lt;int&gt; set;
        while(1) {
            int sum = getSum(n);
            if (sum == 1) {
                return true;
            }
            // 如果这个sum曾经出现过，说明已经陷入了无限循环了，立刻return false
            if (set.find(sum) != set.end()) {
                return false;
            } else {
                set.insert(sum);
            }
            n = sum;
        }
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-两数之和" tabindex="-1"><a class="header-anchor" href="#_1-两数之和" aria-hidden="true">#</a> 1. 两数之和</h3><p>给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。</p><p>你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。</p><p><strong>示例:</strong></p><p>给定 nums = [2, 7, 11, 15], target = 9</p><p>因为 nums[0] + nums[1] = 2 + 7 = 9</p><p>所以返回 [0, 1] 解题思路动画如下：</p>`,17),q=i("img",{src:"https://code-thinking.cdn.bcebos.com/gifs/1.两数之和.gif",alt:"https://code-thinking.cdn.bcebos.com/gifs/1.两数之和.gif",tabindex:"0",loading:"lazy"},null,-1),k={href:"https://code-thinking.cdn.bcebos.com/gifs/1.%E4%B8%A4%E6%95%B0%E4%B9%8B%E5%92%8C.gif",target:"_blank",rel:"noopener noreferrer"},j=l(`<p>C++代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Solution {
public:
    vector&lt;int&gt; twoSum(vector&lt;int&gt;&amp; nums, int target) {
        std::unordered_map &lt;int,int&gt; map;
        for(int i = 0; i &lt; nums.size(); i++) {
            auto iter = map.find(target - nums[i]);
            if(iter != map.end()) {
                return {iter-&gt;second, i};
            }
            map.insert(pair&lt;int, int&gt;(nums[i], i));
        }
        return {};
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第454题-四数相加ii" tabindex="-1"><a class="header-anchor" href="#第454题-四数相加ii" aria-hidden="true">#</a> 第454题.四数相加II</h2>`,3),z={href:"https://leetcode-cn.com/problems/4sum-ii/",target:"_blank",rel:"noopener noreferrer"},y=l(`<p>给定四个包含整数的数组列表 A , B , C , D ,计算有多少个元组 (i, j, k, l) ，使得 A[i] + B[j] + C[k] + D[l] = 0。</p><p>为了使问题简单化，所有的 A, B, C, D 具有相同的长度 N，且 0 ≤ N ≤ 500 。所有整数的范围在 -2^28 到 2^28 - 1 之间，最终结果不会超过 2^31 - 1 。</p><p><strong>例如:</strong></p><p>输入: A = [ 1, 2] B = [-2,-1] C = [-1, 2] D = [ 0, 2] 输出: 2 <strong>解释:</strong> 两个元组如下:</p><ol><li>(0, 0, 0, 1) -&gt; A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0</li><li>(1, 1, 0, 0) -&gt; A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0 本题解题步骤：</li><li>首先定义 一个unordered_map，key放a和b两数之和，value 放a和b两数之和出现的次数。</li><li>遍历大A和大B数组，统计两个数组元素之和，和出现的次数，放到map中。</li><li>定义int变量count，用来统计 a+b+c+d = 0 出现的次数。</li><li>在遍历大C和大D数组，找到如果 0-(c+d) 在map中出现过的话，就用count把map中key对应的value也就是出现次数统计出来。</li><li>最后返回统计值 count 就可以了</li></ol><p>C++代码:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Solution {
public:
    int fourSumCount(vector&lt;int&gt;&amp; A, vector&lt;int&gt;&amp; B, vector&lt;int&gt;&amp; C, vector&lt;int&gt;&amp; D) {
        unordered_map&lt;int, int&gt; umap; //key:a+b的数值，value:a+b数值出现的次数
        // 遍历大A和大B数组，统计两个数组元素之和，和出现的次数，放到map中
        for (int a : A) {
            for (int b : B) {
                umap[a + b]++;
            }
        }
        int count = 0; // 统计a+b+c+d = 0 出现的次数
        // 在遍历大C和大D数组，找到如果 0-(c+d) 在map中出现过的话，就把map中key对应的value也就是出现次数统计出来。
        for (int c : C) {
            for (int d : D) {
                if (umap.find(0 - (c + d)) != umap.end()) {
                    count += umap[0 - (c + d)];
                }
            }
        }
        return count;
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_383-赎金信" tabindex="-1"><a class="header-anchor" href="#_383-赎金信" aria-hidden="true">#</a> 383. 赎金信</h2><p>给定一个赎金信 (ransom) 字符串和一个杂志(magazine)字符串，判断第一个字符串 ransom 能不能由第二个字符串 magazines 里面的字符构成。如果可以构成，返回 true ；否则返回 false。</p><p>(题目说明：为了不暴露赎金信字迹，要从杂志上搜索各个需要的字母，组成单词来表达意思。杂志字符串中的每个字符只能在赎金信字符串中使用一次。)</p><p><strong>注意：</strong></p><p>你可以假设两个字符串均只含有小写字母。</p><p>canConstruct(&quot;a&quot;, &quot;b&quot;) -&gt; false canConstruct(&quot;aa&quot;, &quot;ab&quot;) -&gt; false canConstruct(&quot;aa&quot;, &quot;aab&quot;) -&gt; true</p><h3 id="暴力解法" tabindex="-1"><a class="header-anchor" href="#暴力解法" aria-hidden="true">#</a> 暴力解法</h3><p>那么第一个思路其实就是暴力枚举了，两层for循环，不断去寻找，代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 时间复杂度: O(n^2)
// 空间复杂度：O(1)
class Solution {
public:
    bool canConstruct(string ransomNote, string magazine) {
        for (int i = 0; i &lt; magazine.length(); i++) {
            for (int j = 0; j &lt; ransomNote.length(); j++) {
                // 在ransomNote中找到和magazine相同的字符
                if (magazine[i] == ransomNote[j]) {
                    ransomNote.erase(ransomNote.begin() + j); // ransomNote删除这个字符
                    break;
                }
            }
        }
        // 如果ransomNote为空，则说明magazine的字符可以组成ransomNote
        if (ransomNote.length() == 0) {
            return true;
        }
        return false;
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="哈希解法" tabindex="-1"><a class="header-anchor" href="#哈希解法" aria-hidden="true">#</a> 哈希解法</h3><p>代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 时间复杂度: O(n)
// 空间复杂度：O(1)
class Solution {
public:
    bool canConstruct(string ransomNote, string magazine) {
        int record[26] = {0};
        for (int i = 0; i &lt; magazine.length(); i++) {
            // 通过recode数据记录 magazine里各个字符出现次数
            record[magazine[i]-&#39;a&#39;] ++;
        }
        for (int j = 0; j &lt; ransomNote.length(); j++) {
            // 遍历ransomNote，在record里对应的字符个数做--操作
            record[ransomNote[j]-&#39;a&#39;]--;
            // 如果小于零说明ransomNote里出现的字符，magazine没有
            if(record[ransomNote[j]-&#39;a&#39;] &lt; 0) {
                return false;
            }
        }
        return true;
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第15题-三数之和" tabindex="-1"><a class="header-anchor" href="#第15题-三数之和" aria-hidden="true">#</a> 第15题. 三数之和</h2><p>给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。</p><p><strong>注意：</strong> 答案中不可以包含重复的三元组。</p><p>示例：</p><p>给定数组 nums = [-1, 0, 1, 2, -1, -4]，</p><p>满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]</p><h3 id="哈希解法-1" tabindex="-1"><a class="header-anchor" href="#哈希解法-1" aria-hidden="true">#</a> 哈希解法</h3><p>哈希法C++代码:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Solution {
public:
    vector&lt;vector&lt;int&gt;&gt; threeSum(vector&lt;int&gt;&amp; nums) {
        vector&lt;vector&lt;int&gt;&gt; result;
        sort(nums.begin(), nums.end());
        // 找出a + b + c = 0
        // a = nums[i], b = nums[j], c = -(a + b)
        for (int i = 0; i &lt; nums.size(); i++) {
            // 排序之后如果第一个元素已经大于零，那么不可能凑成三元组
            if (nums[i] &gt; 0) {
                break;
            }
            if (i &gt; 0 &amp;&amp; nums[i] == nums[i - 1]) { //三元组元素a去重
                continue;
            }
            unordered_set&lt;int&gt; set;
            for (int j = i + 1; j &lt; nums.size(); j++) {
                if (j &gt; i + 2
                        &amp;&amp; nums[j] == nums[j-1]
                        &amp;&amp; nums[j-1] == nums[j-2]) { // 三元组元素b去重
                    continue;
                }
                int c = 0 - (nums[i] + nums[j]);
                if (set.find(c) != set.end()) {
                    result.push_back({nums[i], nums[j], c});
                    set.erase(c);// 三元组元素c去重
                } else {
                    set.insert(nums[j]);
                }
            }
        }
        return result;
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="双指针" tabindex="-1"><a class="header-anchor" href="#双指针" aria-hidden="true">#</a> 双指针</h3><p>动画效果如下：</p>`,30),C=i("img",{src:"https://code-thinking.cdn.bcebos.com/gifs/15.三数之和.gif",alt:"https://code-thinking.cdn.bcebos.com/gifs/15.三数之和.gif",tabindex:"0",loading:"lazy"},null,-1),w={href:"https://code-thinking.cdn.bcebos.com/gifs/15.%E4%B8%89%E6%95%B0%E4%B9%8B%E5%92%8C.gif",target:"_blank",rel:"noopener noreferrer"},S=l(`<p>C++代码代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Solution {
public:
    vector&lt;vector&lt;int&gt;&gt; threeSum(vector&lt;int&gt;&amp; nums) {
        vector&lt;vector&lt;int&gt;&gt; result;
        sort(nums.begin(), nums.end());
        // 找出a + b + c = 0
        // a = nums[i], b = nums[left], c = nums[right]
        for (int i = 0; i &lt; nums.size(); i++) {
            // 排序之后如果第一个元素已经大于零，那么无论如何组合都不可能凑成三元组，直接返回结果就可以了
            if (nums[i] &gt; 0) {
                return result;
            }
            // 错误去重方法，将会漏掉-1,-1,2 这种情况
            /*
            if (nums[i] == nums[i + 1]) {
                continue;
            }
            */
            // 正确去重方法
            if (i &gt; 0 &amp;&amp; nums[i] == nums[i - 1]) {
                continue;
            }
            int left = i + 1;
            int right = nums.size() - 1;
            while (right &gt; left) {
                // 去重复逻辑如果放在这里，0，0，0 的情况，可能直接导致 right&lt;=left 了，从而漏掉了 0,0,0 这种三元组
                /*
                while (right &gt; left &amp;&amp; nums[right] == nums[right - 1]) right--;
                while (right &gt; left &amp;&amp; nums[left] == nums[left + 1]) left++;
                */
                if (nums[i] + nums[left] + nums[right] &gt; 0) {
                    right--;
                    // 当前元素不合适了，可以去重
                    while (left &lt; right &amp;&amp; nums[right] == nums[right + 1]) right--;
                } else if (nums[i] + nums[left] + nums[right] &lt; 0) {
                    left++;
                    // 不合适，去重
                    while (left &lt; right &amp;&amp; nums[left] == nums[left - 1]) left++;
                } else {
                    result.push_back(vector&lt;int&gt;{nums[i], nums[left], nums[right]});
                    // 去重逻辑应该放在找到一个三元组之后
                    while (right &gt; left &amp;&amp; nums[right] == nums[right - 1]) right--;
                    while (right &gt; left &amp;&amp; nums[left] == nums[left + 1]) left++;

                    // 找到答案时，双指针同时收缩
                    right--;
                    left++;
                }
            }

        }
        return result;
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第18题-四数之和" tabindex="-1"><a class="header-anchor" href="#第18题-四数之和" aria-hidden="true">#</a> 第18题. 四数之和</h2><p>题意：给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。</p><p><strong>注意：</strong></p><p>答案中不可以包含重复的四元组。</p><p>示例： 给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。 满足要求的四元组集合为： [ [-1, 0, 0, 1], [-2, -1, 1, 2], [-2, 0, 0, 2] ]</p><h3 id="双指针-1" tabindex="-1"><a class="header-anchor" href="#双指针-1" aria-hidden="true">#</a> 双指针</h3><p>C++代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Solution {
public:
    vector&lt;vector&lt;int&gt;&gt; fourSum(vector&lt;int&gt;&amp; nums, int target) {
        vector&lt;vector&lt;int&gt;&gt; result;
        sort(nums.begin(), nums.end());
        for (int k = 0; k &lt; nums.size(); k++) {
            // 这种剪枝是错误的，这道题目target 是任意值
            // if (nums[k] &gt; target) {
            //     return result;
            // }
            // 去重
            if (k &gt; 0 &amp;&amp; nums[k] == nums[k - 1]) {
                continue;
            }
            for (int i = k + 1; i &lt; nums.size(); i++) {
                // 正确去重方法
                if (i &gt; k + 1 &amp;&amp; nums[i] == nums[i - 1]) {
                    continue;
                }
                int left = i + 1;
                int right = nums.size() - 1;
                while (right &gt; left) {
                    // nums[k] + nums[i] + nums[left] + nums[right] &gt; target 会溢出
                    if (nums[k] + nums[i] &gt; target - (nums[left] + nums[right])) {
                        right--;
                        // 当前元素不合适了，可以去重
                        while (left &lt; right &amp;&amp; nums[right] == nums[right + 1]) right--;
                    // nums[k] + nums[i] + nums[left] + nums[right] &lt; target 会溢出
                    } else if (nums[k] + nums[i]  &lt; target - (nums[left] + nums[right])) {
                        left++;
                        // 不合适，去重
                        while (left &lt; right &amp;&amp; nums[left] == nums[left - 1]) left++;
                    } else {
                        result.push_back(vector&lt;int&gt;{nums[k], nums[i], nums[left], nums[right]});
                        // 去重逻辑应该放在找到一个四元组之后
                        while (right &gt; left &amp;&amp; nums[right] == nums[right - 1]) right--;
                        while (right &gt; left &amp;&amp; nums[left] == nums[left + 1]) left++;

                        // 找到答案时，双指针同时收缩
                        right--;
                        left++;
                    }
                }

            }
        }
        return result;
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h1><h2 id="_344-反转字符串" tabindex="-1"><a class="header-anchor" href="#_344-反转字符串" aria-hidden="true">#</a> 344.反转字符串</h2><p>编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。</p><p>不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 $O(1)$ 的额外空间解决这一问题。</p><p>你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。</p><p>示例 1： 输入：[&quot;h&quot;,&quot;e&quot;,&quot;l&quot;,&quot;l&quot;,&quot;o&quot;] 输出：[&quot;o&quot;,&quot;l&quot;,&quot;l&quot;,&quot;e&quot;,&quot;h&quot;]</p><p>示例 2： 输入：[&quot;H&quot;,&quot;a&quot;,&quot;n&quot;,&quot;n&quot;,&quot;a&quot;,&quot;h&quot;] 输出：[&quot;h&quot;,&quot;a&quot;,&quot;n&quot;,&quot;n&quot;,&quot;a&quot;,&quot;H&quot;] 以字符串<code>hello</code>为例，过程如下：</p>`,17),E=i("img",{src:"https://tva1.sinaimg.cn/large/008eGmZEly1gp0fvi91pfg30de0akwnq.gif",alt:"https://tva1.sinaimg.cn/large/008eGmZEly1gp0fvi91pfg30de0akwnq.gif",tabindex:"0",loading:"lazy"},null,-1),I={href:"https://tva1.sinaimg.cn/large/008eGmZEly1gp0fvi91pfg30de0akwnq.gif",target:"_blank",rel:"noopener noreferrer"},B=l(`<p>不难写出如下C++代码:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Solution {
public:
    void reverseString(vector&lt;char&gt;&amp; s) {
        for (int i = 0, j = s.size() - 1; i &lt; s.size()/2; i++, j--) {
            swap(s[i],s[j]);
        }
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_541-反转字符串ii" tabindex="-1"><a class="header-anchor" href="#_541-反转字符串ii" aria-hidden="true">#</a> 541. 反转字符串II</h2><p>给定一个字符串 s 和一个整数 k，你需要对从字符串开头算起的每隔 2k 个字符的前 k 个字符进行反转。</p><p>如果剩余字符少于 k 个，则将剩余字符全部反转。</p><p>如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。</p><p>示例:</p><p>输入: s = &quot;abcdefg&quot;, k = 2 输出: &quot;bacdfeg&quot;</p><h3 id="库函数reverse" tabindex="-1"><a class="header-anchor" href="#库函数reverse" aria-hidden="true">#</a> 库函数reverse</h3><p>使用C++库函数reverse的版本如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Solution {
public:
    string reverseStr(string s, int k) {
        for (int i = 0; i &lt; s.size(); i += (2 * k)) {
            // 1. 每隔 2k 个字符的前 k 个字符进行反转
            // 2. 剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符
            if (i + k &lt;= s.size()) {
                reverse(s.begin() + i, s.begin() + i + k );
                continue;
            }
            // 3. 剩余字符少于 k 个，则将剩余字符全部反转。
            reverse(s.begin() + i, s.begin() + s.size());
        }
        return s;
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自己实现反转" tabindex="-1"><a class="header-anchor" href="#自己实现反转" aria-hidden="true">#</a> 自己实现反转</h3><p>下面我实现的reverse函数区间是左闭右闭区间，代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Solution {
public:
    void reverse(string&amp; s, int start, int end) {
        for (int i = start, j = end; i &lt; j; i++, j--) {
            swap(s[i], s[j]);
        }
    }
    string reverseStr(string s, int k) {
        for (int i = 0; i &lt; s.size(); i += (2 * k)) {
            // 1. 每隔 2k 个字符的前 k 个字符进行反转
            // 2. 剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符
            if (i + k &lt;= s.size()) {
                reverse(s, i, i + k - 1);
                continue;
            }
            // 3. 剩余字符少于 k 个，则将剩余字符全部反转。
            reverse(s, i, s.size() - 1);
        }
        return s;
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="剑指offer-05-替换空格" tabindex="-1"><a class="header-anchor" href="#剑指offer-05-替换空格" aria-hidden="true">#</a> 剑指Offer 05.替换空格</h2><p>请实现一个函数，把字符串 s 中的每个空格替换成&quot;%20&quot;。</p><p>示例 1： 输入：s = &quot;We are happy.&quot; 输出：&quot;We%20are%20happy.“</p><h3 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h3>`,18),N=i("img",{src:"https://tva1.sinaimg.cn/large/e6c9d24ely1go6qmevhgpg20du09m4qp.gif",alt:"https://tva1.sinaimg.cn/large/e6c9d24ely1go6qmevhgpg20du09m4qp.gif",tabindex:"0",loading:"lazy"},null,-1),O={href:"https://tva1.sinaimg.cn/large/e6c9d24ely1go6qmevhgpg20du09m4qp.gif",target:"_blank",rel:"noopener noreferrer"},A=l(`<p>C++代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Solution {
public:
    string replaceSpace(string s) {
        int count = 0; // 统计空格的个数
        int sOldSize = s.size();
        for (int i = 0; i &lt; s.size(); i++) {
            if (s[i] == &#39; &#39;) {
                count++;
            }
        }
        // 扩充字符串s的大小，也就是每个空格替换成&quot;%20&quot;之后的大小
        s.resize(s.size() + count * 2);
        int sNewSize = s.size();
        // 从后先前将空格替换为&quot;%20&quot;
        for (int i = sNewSize - 1, j = sOldSize - 1; j &lt; i; i--, j--) {
            if (s[j] != &#39; &#39;) {
                s[i] = s[j];
            } else {
                s[i] = &#39;0&#39;;
                s[i - 1] = &#39;2&#39;;
                s[i - 2] = &#39;%&#39;;
                i -= 2;
            }
        }
        return s;
    }
};

//时间复杂度：$O(n)$
//空间复杂度：$O(1)$

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在C语言中，把一个字符串存入一个数组时，也把结束符 &#39;\\0&#39;存入数组，并以此作为该字符串是否结束的标志。 在C++中，提供一个string类，string类会提供 size接口，可以用来判断string类字符串是否结束，就不用&#39;\\0&#39;来判断是否结束。</p><h2 id="_151-翻转字符串里的单词" tabindex="-1"><a class="header-anchor" href="#_151-翻转字符串里的单词" aria-hidden="true">#</a> 151.翻转字符串里的单词</h2><p>给定一个字符串，逐个翻转字符串中的每个单词。</p><p>示例 1： 输入: &quot;the sky is blue&quot; 输出: &quot;blue is sky the&quot;</p><p>示例 2： 输入: &quot;  hello world!  &quot; 输出: &quot;world! hello&quot; 解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。</p><p>示例 3： 输入: &quot;a good   example&quot; 输出: &quot;example good a&quot; 解释: 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。</p><h3 id="双指针-2" tabindex="-1"><a class="header-anchor" href="#双指针-2" aria-hidden="true">#</a> 双指针</h3><p>C++整体代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 版本一
class Solution {
public:
    // 反转字符串s中左闭又闭的区间[start, end]
    void reverse(string&amp; s, int start, int end) {
        for (int i = start, j = end; i &lt; j; i++, j--) {
            swap(s[i], s[j]);
        }
    }

    // 移除冗余空格：使用双指针（快慢指针法）O(n)的算法
    void removeExtraSpaces(string&amp; s) {
        int slowIndex = 0, fastIndex = 0; // 定义快指针，慢指针
        // 去掉字符串前面的空格
        while (s.size() &gt; 0 &amp;&amp; fastIndex &lt; s.size() &amp;&amp; s[fastIndex] == &#39; &#39;) {
            fastIndex++;
        }
        for (; fastIndex &lt; s.size(); fastIndex++) {
            // 去掉字符串中间部分的冗余空格
            if (fastIndex - 1 &gt; 0
                    &amp;&amp; s[fastIndex - 1] == s[fastIndex]
                    &amp;&amp; s[fastIndex] == &#39; &#39;) {
                continue;
            } else {
                s[slowIndex++] = s[fastIndex];
            }
        }
        if (slowIndex - 1 &gt; 0 &amp;&amp; s[slowIndex - 1] == &#39; &#39;) { // 去掉字符串末尾的空格
            s.resize(slowIndex - 1);
        } else {
            s.resize(slowIndex); // 重新设置字符串大小
        }
    }

    string reverseWords(string s) {
        removeExtraSpaces(s); // 去掉冗余空格
        reverse(s, 0, s.size() - 1); // 将字符串全部反转
        int start = 0; // 反转的单词在字符串里起始位置
        int end = 0; // 反转的单词在字符串里终止位置
        bool entry = false; // 标记枚举字符串的过程中是否已经进入了单词区间
        for (int i = 0; i &lt; s.size(); i++) { // 开始反转单词
            if (!entry) {
                start = i; // 确定单词起始位置
                entry = true; // 进入单词区间
            }
            // 单词后面有空格的情况，空格就是分词符
            if (entry &amp;&amp; s[i] == &#39; &#39; &amp;&amp; s[i - 1] != &#39; &#39;) {
                end = i - 1; // 确定单词终止位置
                entry = false; // 结束单词区间
                reverse(s, start, end);
            }
            // 最后一个结尾单词之后没有空格的情况
            if (entry &amp;&amp; (i == (s.size() - 1)) &amp;&amp; s[i] != &#39; &#39; ) {
                end = i;// 确定单词终止位置
                entry = false; // 结束单词区间
                reverse(s, start, end);
            }
        }
        return s;
    }

    // 当然这里的主函数reverseWords写的有一些冗余的，可以精简一些，精简之后的主函数为：
    /* 主函数简单写法
    string reverseWords(string s) {
        removeExtraSpaces(s);
        reverse(s, 0, s.size() - 1);
        for(int i = 0; i &lt; s.size(); i++) {
            int j = i;
            // 查找单词间的空格，翻转单词
            while(j &lt; s.size() &amp;&amp; s[j] != &#39; &#39;) j++;
            reverse(s, i, j - 1);
            i = j;
        }
        return s;
    }
    */
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="题目-剑指offer58-ii-左旋转字符串" tabindex="-1"><a class="header-anchor" href="#题目-剑指offer58-ii-左旋转字符串" aria-hidden="true">#</a> 题目：剑指Offer58-II.左旋转字符串</h2><p>字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串&quot;abcdefg&quot;和数字2，该函数将返回左旋转两位得到的结果&quot;cdefgab&quot;。</p><p>示例 1： 输入: s = &quot;abcdefg&quot;, k = 2 输出: &quot;cdefgab&quot;</p><p>示例 2： 输入: s = &quot;lrloseumgh&quot;, k = 6 输出: &quot;umghlrlose&quot;</p><p>限制： 1 &lt;= k &lt; s.length &lt;= 10000 具体步骤为：</p><ol><li>反转区间为前n的子串</li><li>反转区间为n到末尾的子串</li><li>反转整个字符串</li><li>如图：</li></ol>`,17),$=i("img",{src:"https://code-thinking.cdn.bcebos.com/pics/剑指Offer58-II.左旋转字符串.png",alt:"https://code-thinking.cdn.bcebos.com/pics/剑指Offer58-II.左旋转字符串.png",tabindex:"0",loading:"lazy"},null,-1),D={href:"https://code-thinking.cdn.bcebos.com/pics/%E5%89%91%E6%8C%87Offer58-II.%E5%B7%A6%E6%97%8B%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2.png",target:"_blank",rel:"noopener noreferrer"},M=l(`<p>C++代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Solution {
public:
    string reverseLeftWords(string s, int n) {
        reverse(s.begin(), s.begin() + n);
        reverse(s.begin() + n, s.end());
        reverse(s.begin(), s.end());
        return s;
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_28-实现-strstr" tabindex="-1"><a class="header-anchor" href="#_28-实现-strstr" aria-hidden="true">#</a> 28. 实现 strStr()</h2>`,3),P={href:"https://leetcode-cn.com/problems/implement-strstr/",target:"_blank",rel:"noopener noreferrer"},Z=i("p",null,"实现 strStr() 函数。",-1),G=i("p",null,"给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。",-1),K=i("p",null,'示例 1: 输入: haystack = "hello", needle = "ll" 输出: 2',-1),W=i("p",null,'示例 2: 输入: haystack = "aaaaa", needle = "bba" 输出: -1',-1),V=i("p",null,"说明: 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。",-1),H=i("p",null,"如何利用 前缀表找到 当字符不匹配的时候应该指针应该移动的位置。如动画所示：",-1),L=i("img",{src:"https://code-thinking.cdn.bcebos.com/gifs/KMP精讲2.gif",alt:"https://code-thinking.cdn.bcebos.com/gifs/KMP精讲2.gif",tabindex:"0",loading:"lazy"},null,-1),T={href:"https://code-thinking.cdn.bcebos.com/gifs/KMP%E7%B2%BE%E8%AE%B22.gif",target:"_blank",rel:"noopener noreferrer"},F=i("h3",{id:"使用next数组来匹配",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#使用next数组来匹配","aria-hidden":"true"},"#"),n(" 使用next数组来匹配")],-1),J=i("p",null,[i("strong",null,"以下我们以前缀表统一减一之后的next数组来做演示"),n("。")],-1),Y=i("p",null,"有了next数组，就可以根据next数组来 匹配文本串s，和模式串t了。",-1),Q=i("p",null,"注意next数组是新前缀表（旧前缀表统一减一了）。",-1),R=i("p",null,"匹配过程动画如下：",-1),U=i("img",{src:"https://code-thinking.cdn.bcebos.com/gifs/KMP精讲4.gif",alt:"https://code-thinking.cdn.bcebos.com/gifs/KMP精讲4.gif",tabindex:"0",loading:"lazy"},null,-1),X={href:"https://code-thinking.cdn.bcebos.com/gifs/KMP%E7%B2%BE%E8%AE%B24.gif",target:"_blank",rel:"noopener noreferrer"},ii=l(`<h3 id="前缀表统一减一-c-代码实现" tabindex="-1"><a class="header-anchor" href="#前缀表统一减一-c-代码实现" aria-hidden="true">#</a> 前缀表统一减一 C++代码实现</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Solution {
public:
    void getNext(int* next, const string&amp; s) {
        int j = -1;
        next[0] = j;
        for(int i = 1; i &lt; s.size(); i++) { // 注意i从1开始
            while (j &gt;= 0 &amp;&amp; s[i] != s[j + 1]) { // 前后缀不相同了
                j = next[j]; // 向前回退
            }
            if (s[i] == s[j + 1]) { // 找到相同的前后缀
                j++;
            }
            next[i] = j; // 将j（前缀的长度）赋给next[i]
        }
    }
    int strStr(string haystack, string needle) {
        if (needle.size() == 0) {
            return 0;
        }
        int next[needle.size()];
        getNext(next, needle);
        int j = -1; // // 因为next数组里记录的起始位置为-1
        for (int i = 0; i &lt; haystack.size(); i++) { // 注意i就从0开始
            while(j &gt;= 0 &amp;&amp; haystack[i] != needle[j + 1]) { // 不匹配
                j = next[j]; // j 寻找之前匹配的位置
            }
            if (haystack[i] == needle[j + 1]) { // 匹配，j和i同时向后移动
                j++; // i的增加在for循环里
            }
            if (j == (needle.size() - 1) ) { // 文本串s里出现了模式串t
                return (i - needle.size() + 1);
            }
        }
        return -1;
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="前缀表-不减一-c-实现" tabindex="-1"><a class="header-anchor" href="#前缀表-不减一-c-实现" aria-hidden="true">#</a> 前缀表（不减一）C++实现</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Solution {
public:
    void getNext(int* next, const string&amp; s) {
        int j = 0;
        next[0] = 0;
        for(int i = 1; i &lt; s.size(); i++) {
            while (j &gt; 0 &amp;&amp; s[i] != s[j]) {
                j = next[j - 1];
            }
            if (s[i] == s[j]) {
                j++;
            }
            next[i] = j;
        }
    }
    int strStr(string haystack, string needle) {
        if (needle.size() == 0) {
            return 0;
        }
        int next[needle.size()];
        getNext(next, needle);
        int j = 0;
        for (int i = 0; i &lt; haystack.size(); i++) {
            while(j &gt; 0 &amp;&amp; haystack[i] != needle[j]) {
                j = next[j - 1];
            }
            if (haystack[i] == needle[j]) {
                j++;
            }
            if (j == needle.size() ) {
                return (i - needle.size() + 1);
            }
        }
        return -1;
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function ni(ei,si){const e=r("ExternalLinkIcon");return a(),t("div",null,[u,i("figure",null,[c,i("figcaption",null,[i("a",m,[n("https://tva1.sinaimg.cn/large/008eGmZEly1govxyg83bng30ds09ob29.gif"),s(e)])])]),b,i("figure",null,[o,i("figcaption",null,[i("a",g,[n("https://img-blog.csdnimg.cn/20200818193523911.png"),s(e)])])]),p,h,i("figure",null,[f,i("figcaption",null,[i("a",_,[n("https://img-blog.csdnimg.cn/2020080918570417.png"),s(e)])])]),x,i("figure",null,[q,i("figcaption",null,[i("a",k,[n("https://code-thinking.cdn.bcebos.com/gifs/1.两数之和.gif"),s(e)])])]),j,i("p",null,[i("a",z,[n("力扣题目链接(opens new window)"),s(e)])]),y,i("figure",null,[C,i("figcaption",null,[i("a",w,[n("https://code-thinking.cdn.bcebos.com/gifs/15.三数之和.gif"),s(e)])])]),S,i("figure",null,[E,i("figcaption",null,[i("a",I,[n("https://tva1.sinaimg.cn/large/008eGmZEly1gp0fvi91pfg30de0akwnq.gif"),s(e)])])]),B,i("figure",null,[N,i("figcaption",null,[i("a",O,[n("https://tva1.sinaimg.cn/large/e6c9d24ely1go6qmevhgpg20du09m4qp.gif"),s(e)])])]),A,i("figure",null,[$,i("figcaption",null,[i("a",D,[n("https://code-thinking.cdn.bcebos.com/pics/剑指Offer58-II.左旋转字符串.png"),s(e)])])]),M,i("p",null,[i("a",P,[n("力扣题目链接(opens new window)"),s(e)])]),Z,G,K,W,V,H,i("figure",null,[L,i("figcaption",null,[i("a",T,[n("https://code-thinking.cdn.bcebos.com/gifs/KMP精讲2.gif"),s(e)])])]),F,J,Y,Q,R,i("figure",null,[U,i("figcaption",null,[i("a",X,[n("https://code-thinking.cdn.bcebos.com/gifs/KMP精讲4.gif"),s(e)])])]),ii])}const di=d(v,[["render",ni],["__file","代码随想录算法总结(C__)版本——哈希、字符串(一).html.vue"]]);export{di as default};
