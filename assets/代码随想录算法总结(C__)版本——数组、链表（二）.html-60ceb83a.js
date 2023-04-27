import{_ as r,Y as v,Z as c,a1 as i,a4 as t,$ as n,a0 as e,a2 as d,D as a}from"./framework-39b9cf04.js";const u={},m=d(`<h1 id="代码随想录算法总结-c-版本——数组、链表" tabindex="-1"><a class="header-anchor" href="#代码随想录算法总结-c-版本——数组、链表" aria-hidden="true">#</a> 代码随想录算法总结(C++)版本——数组、链表</h1><p>Created: September 2, 2022 1:06 PM</p><h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h2><h3 id="_704-二分查找" tabindex="-1"><a class="header-anchor" href="#_704-二分查找" aria-hidden="true">#</a> 704. 二分查找</h3><p>给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。</p><p>示例 1:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第一种写法，我们定义 target 是在一个在左闭右闭的区间里，<strong>也就是[left, right] （这个很重要非常重要）</strong>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 版本一
class Solution {
public:
    int search(vector&lt;int&gt;&amp; nums, int target) {
        int left = 0;
        int right = nums.size() - 1; // 定义target在左闭右闭的区间里，[left, right]
        while (left &lt;= right) { // 当left==right，区间[left, right]依然有效，所以用 &lt;=
            int middle = left + ((right - left) / 2);// 防止溢出 等同于(left + right)/2
            if (nums[middle] &gt; target) {
                right = middle - 1; // target 在左区间，所以[left, middle - 1]
            } else if (nums[middle] &lt; target) {
                left = middle + 1; // target 在右区间，所以[middle + 1, right]
            } else { // nums[middle] == target
                return middle; // 数组中找到目标值，直接返回下标
            }
        }
        // 未找到目标值
        return -1;
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>二分法第二种写法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 版本二
class Solution {
public:
    int search(vector&lt;int&gt;&amp; nums, int target) {
        int left = 0;
        int right = nums.size(); // 定义target在左闭右开的区间里，即：[left, right)
        while (left &lt; right) { // 因为left == right的时候，在[left, right)是无效的空间，所以使用 &lt;
            int middle = left + ((right - left) &gt;&gt; 1);
            if (nums[middle] &gt; target) {
                right = middle; // target 在左区间，在[left, middle)中
            } else if (nums[middle] &lt; target) {
                left = middle + 1; // target 在右区间，在[middle + 1, right)中
            } else { // nums[middle] == target
                return middle; // 数组中找到目标值，直接返回下标
            }
        }
        // 未找到目标值
        return -1;
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_27-移除元素" tabindex="-1"><a class="header-anchor" href="#_27-移除元素" aria-hidden="true">#</a> 27. 移除元素</h3><p>给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。</p><p>不要使用额外的数组空间，你必须仅使用 $O(1)$ 额外空间并<strong>原地</strong>修改输入数组。</p><p>元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。</p><p>示例 1: 给定 nums = [3,2,2,3], val = 3, 函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。 你不需要考虑数组中超出新长度后面的元素。</p><h3 id="暴力解法" tabindex="-1"><a class="header-anchor" href="#暴力解法" aria-hidden="true">#</a> 暴力解法</h3>`,17),b=n("img",{src:"https://tva1.sinaimg.cn/large/008eGmZEly1gntrc7x9tjg30du09m1ky.gif",alt:"https://tva1.sinaimg.cn/large/008eGmZEly1gntrc7x9tjg30du09m1ky.gif",tabindex:"0",loading:"lazy"},null,-1),o={href:"https://tva1.sinaimg.cn/large/008eGmZEly1gntrc7x9tjg30du09m1ky.gif",target:"_blank",rel:"noopener noreferrer"},g=d(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 时间复杂度：O(n^2)
// 空间复杂度：O(1)
class Solution {
public:
    int removeElement(vector&lt;int&gt;&amp; nums, int val) {
        int size = nums.size();
        for (int i = 0; i &lt; size; i++) {
            if (nums[i] == val) { // 发现需要移除的元素，就将数组集体向前移动一位
                for (int j = i + 1; j &lt; size; j++) {
                    nums[j - 1] = nums[j];
                }
                i--; // 因为下标i以后的数值都向前移动了一位，所以i也向前移动一位
                size--; // 此时数组的大小-1
            }
        }
        return size;

    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="双指针法" tabindex="-1"><a class="header-anchor" href="#双指针法" aria-hidden="true">#</a> 双指针法</h3>`,2),h=n("img",{src:"https://tva1.sinaimg.cn/large/008eGmZEly1gntrds6r59g30du09mnpd.gif",alt:"https://tva1.sinaimg.cn/large/008eGmZEly1gntrds6r59g30du09mnpd.gif",tabindex:"0",loading:"lazy"},null,-1),p={href:"https://tva1.sinaimg.cn/large/008eGmZEly1gntrds6r59g30du09mnpd.gif",target:"_blank",rel:"noopener noreferrer"},x=d(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 时间复杂度：O(n)
// 空间复杂度：O(1)
class Solution {
public:
    int removeElement(vector&lt;int&gt;&amp; nums, int val) {
        int slowIndex = 0;
        for (int fastIndex = 0; fastIndex &lt; nums.size(); fastIndex++) {
            if (val != nums[fastIndex]) {
                nums[slowIndex++] = nums[fastIndex];
            }
        }
        return slowIndex;
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="相向双指针方法" tabindex="-1"><a class="header-anchor" href="#相向双指针方法" aria-hidden="true">#</a> 相向双指针方法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
* 相向双指针方法，基于元素顺序可以改变的题目描述改变了元素相对位置，确保了移动最少元素
* 时间复杂度：$O(n)$
* 空间复杂度：$O(1)$
*/
class Solution {
public:
    int removeElement(vector&lt;int&gt;&amp; nums, int val) {
        int leftIndex = 0;
        int rightIndex = nums.size() - 1;
        while (leftIndex &lt;= rightIndex) {
            // 找左边等于val的元素
            while (leftIndex &lt;= rightIndex &amp;&amp; nums[leftIndex] != val){
                ++leftIndex;
            }
            // 找右边不等于val的元素
            while (leftIndex &lt;= rightIndex &amp;&amp; nums[rightIndex] == val) {
                -- rightIndex;
            }
            // 将右边不等于val的元素覆盖左边等于val的元素
            if (leftIndex &lt; rightIndex) {
                nums[leftIndex++] = nums[rightIndex--];
            }
        }
        return leftIndex;   // leftIndex一定指向了最终数组末尾的下一个元素
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_977-有序数组的平方" tabindex="-1"><a class="header-anchor" href="#_977-有序数组的平方" aria-hidden="true">#</a> 977.有序数组的平方</h3><p>给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。</p><p>示例 1： 输入：nums = [-4,-1,0,3,10] 输出：[0,1,9,16,100] 解释：平方后，数组变为 [16,1,0,9,100]，排序后，数组变为 [0,1,9,16,100]</p><h3 id="暴力排序" tabindex="-1"><a class="header-anchor" href="#暴力排序" aria-hidden="true">#</a> 暴力排序</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Solution {
public:
    vector&lt;int&gt; sortedSquares(vector&lt;int&gt;&amp; A) {
        for (int i = 0; i &lt; A.size(); i++) {
            A[i] *= A[i];
        }
        sort(A.begin(), A.end()); // 快速排序
        return A;
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="双指针法-1" tabindex="-1"><a class="header-anchor" href="#双指针法-1" aria-hidden="true">#</a> 双指针法</h3>`,9),f=n("img",{src:"https://code-thinking.cdn.bcebos.com/gifs/977.有序数组的平方.gif",alt:"https://code-thinking.cdn.bcebos.com/gifs/977.有序数组的平方.gif",tabindex:"0",loading:"lazy"},null,-1),_={href:"https://code-thinking.cdn.bcebos.com/gifs/977.%E6%9C%89%E5%BA%8F%E6%95%B0%E7%BB%84%E7%9A%84%E5%B9%B3%E6%96%B9.gif",target:"_blank",rel:"noopener noreferrer"},L=d(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Solution {
public:
    vector&lt;int&gt; sortedSquares(vector&lt;int&gt;&amp; A) {
        int k = A.size() - 1;
        vector&lt;int&gt; result(A.size(), 0);
        for (int i = 0, j = A.size() - 1; i &lt;= j;) { // 注意这里要i &lt;= j，因为最后要处理两个元素
            if (A[i] * A[i] &lt; A[j] * A[j])  {
                result[k--] = A[j] * A[j];
                j--;
            }
            else {
                result[k--] = A[i] * A[i];
                i++;
            }
        }
        return result;
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_209-长度最小的子数组" tabindex="-1"><a class="header-anchor" href="#_209-长度最小的子数组" aria-hidden="true">#</a> 209.长度最小的子数组</h3><p>给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。</p><p>示例：</p><p>输入：s = 7, nums = [2,3,1,2,4,3] 输出：2 解释：子数组 [4,3] 是该条件下的长度最小的子数组。</p><h3 id="暴力解法-1" tabindex="-1"><a class="header-anchor" href="#暴力解法-1" aria-hidden="true">#</a> 暴力解法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Solution {
public:
    int minSubArrayLen(int s, vector&lt;int&gt;&amp; nums) {
        int result = INT32_MAX; // 最终的结果
        int sum = 0; // 子序列的数值之和
        int subLength = 0; // 子序列的长度
        for (int i = 0; i &lt; nums.size(); i++) { // 设置子序列起点为i
            sum = 0;
            for (int j = i; j &lt; nums.size(); j++) { // 设置子序列终止位置为j
                sum += nums[j];
                if (sum &gt;= s) { // 一旦发现子序列和超过了s，更新result
                    subLength = j - i + 1; // 取子序列的长度
                    result = result &lt; subLength ? result : subLength;
                    break; // 因为我们是找符合条件最短的子序列，所以一旦符合条件就break
                }
            }
        }
        // 如果result没有被赋值的话，就返回0，说明没有符合条件的子序列
        return result == INT32_MAX ? 0 : result;
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="滑动窗口" tabindex="-1"><a class="header-anchor" href="#滑动窗口" aria-hidden="true">#</a> 滑动窗口</h3>`,8),N=n("img",{src:"https://code-thinking.cdn.bcebos.com/gifs/209.长度最小的子数组.gif",alt:"https://code-thinking.cdn.bcebos.com/gifs/209.长度最小的子数组.gif",tabindex:"0",loading:"lazy"},null,-1),A={href:"https://code-thinking.cdn.bcebos.com/gifs/209.%E9%95%BF%E5%BA%A6%E6%9C%80%E5%B0%8F%E7%9A%84%E5%AD%90%E6%95%B0%E7%BB%84.gif",target:"_blank",rel:"noopener noreferrer"},k=n("img",{src:"https://img-blog.csdnimg.cn/20210312160441942.png",alt:"https://img-blog.csdnimg.cn/20210312160441942.png",tabindex:"0",loading:"lazy"},null,-1),E={href:"https://img-blog.csdnimg.cn/20210312160441942.png",target:"_blank",rel:"noopener noreferrer"},y=d(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Solution {
public:
    int minSubArrayLen(int s, vector&lt;int&gt;&amp; nums) {
        int result = INT32_MAX;
        int sum = 0; // 滑动窗口数值之和
        int i = 0; // 滑动窗口起始位置
        int subLength = 0; // 滑动窗口的长度
        for (int j = 0; j &lt; nums.size(); j++) {
            sum += nums[j];
            // 注意这里使用while，每次更新 i（起始位置），并不断比较子序列是否符合条件
            while (sum &gt;= s) {
                subLength = (j - i + 1); // 取子序列的长度
                result = result &lt; subLength ? result : subLength;
                sum -= nums[i++]; // 这里体现出滑动窗口的精髓之处，不断变更i（子序列的起始位置）
            }
        }
        // 如果result没有被赋值的话，就返回0，说明没有符合条件的子序列
        return result == INT32_MAX ? 0 : result;
    }
};
//时间复杂度：$O(n)$ 空间复杂度：$O(1)$

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_59-螺旋矩阵ii" tabindex="-1"><a class="header-anchor" href="#_59-螺旋矩阵ii" aria-hidden="true">#</a> 59.螺旋矩阵II</h3><p>给定一个正整数 n，生成一个包含 1 到 n^2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。</p><p>示例:</p><p>输入: 3 输出: [ [ 1, 2, 3 ], [ 8, 9, 4 ], [ 7, 6, 5 ] ] ![[../photo/1.png]]</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Solution {
public:
    vector&lt;vector&lt;int&gt;&gt; generateMatrix(int n) {
        vector&lt;vector&lt;int&gt;&gt; res(n, vector&lt;int&gt;(n, 0)); // 使用vector定义一个二维数组
        int startx = 0, starty = 0; // 定义每循环一个圈的起始位置
        int loop = n / 2; // 每个圈循环几次，例如n为奇数3，那么loop = 1 只是循环一圈，矩阵中间的值需要单独处理
        int mid = n / 2; // 矩阵中间的位置，例如：n为3， 中间的位置就是(1，1)，n为5，中间位置为(2, 2)
        int count = 1; // 用来给矩阵中每一个空格赋值
        int offset = 1; // 每一圈循环，需要控制每一条边遍历的长度
        int i,j;
        while (loop --) {
            i = startx;
            j = starty;

            // 下面开始的四个for就是模拟转了一圈
            // 模拟填充上行从左到右(左闭右开)
            for (j = starty; j &lt; starty + n - offset; j++) {
                res[startx][j] = count++;
            }
            // 模拟填充右列从上到下(左闭右开)
            for (i = startx; i &lt; startx + n - offset; i++) {
                res[i][j] = count++;
            }
            // 模拟填充下行从右到左(左闭右开)
            for (; j &gt; starty; j--) {
                res[i][j] = count++;
            }
            // 模拟填充左列从下到上(左闭右开)
            for (; i &gt; startx; i--) {
                res[i][j] = count++;
            }

            // 第二圈开始的时候，起始位置要各自加1， 例如：第一圈起始位置是(0, 0)，第二圈起始位置是(1, 1)
            startx++;
            starty++;

            // offset 控制每一圈里每一条边遍历的长度
            offset += 2;
        }

        // 如果n为奇数的话，需要单独给矩阵最中间的位置赋值
        if (n % 2) {
            res[mid][mid] = count;
        }
        return res;
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="链表" tabindex="-1"><a class="header-anchor" href="#链表" aria-hidden="true">#</a> 链表</h2><h3 id="_203-移除链表元素" tabindex="-1"><a class="header-anchor" href="#_203-移除链表元素" aria-hidden="true">#</a> 203.移除链表元素</h3><p>题意：删除链表中等于给定值 val 的所有节点。</p><p>示例 1： 输入：head = [1,2,6,3,4,5,6], val = 6 输出：[1,2,3,4,5]这里以链表 1 4 2 4 来举例，移除元素4。</p>`,10),w=n("img",{src:"https://img-blog.csdnimg.cn/20210316095351161.png",alt:"https://img-blog.csdnimg.cn/20210316095351161.png",tabindex:"0",loading:"lazy"},null,-1),B={href:"https://img-blog.csdnimg.cn/20210316095351161.png",target:"_blank",rel:"noopener noreferrer"},z=n("p",null,"如果使用C，C++编程语言的话，不要忘了还要从内存中删除这两个移除的节点， 清理节点内存之后如图：",-1),j=n("img",{src:"https://img-blog.csdnimg.cn/20210316095418280.png",alt:"https://img-blog.csdnimg.cn/20210316095418280.png",tabindex:"0",loading:"lazy"},null,-1),I={href:"https://img-blog.csdnimg.cn/20210316095418280.png",target:"_blank",rel:"noopener noreferrer"},H=n("p",null,"第一种操作：直接使用原来的链表来进行移除。",-1),S=n("img",{src:"https://img-blog.csdnimg.cn/2021031609544922.png",alt:"https://img-blog.csdnimg.cn/2021031609544922.png",tabindex:"0",loading:"lazy"},null,-1),U={href:"https://img-blog.csdnimg.cn/2021031609544922.png",target:"_blank",rel:"noopener noreferrer"},$=n("p",null,"移除头结点和移除其他节点的操作是不一样的，因为链表的其他节点都是通过前一个节点来移除当前节点，而头结点没有前一个节点。",-1),C=n("p",null,"所以头结点如何移除呢，其实只要将头结点向后移动一位就可以，这样就从链表中移除了一个头结点。",-1),O=n("img",{src:"https://img-blog.csdnimg.cn/20210316095512470.png",alt:"https://img-blog.csdnimg.cn/20210316095512470.png",tabindex:"0",loading:"lazy"},null,-1),D={href:"https://img-blog.csdnimg.cn/20210316095512470.png",target:"_blank",rel:"noopener noreferrer"},Z=n("p",null,"依然别忘将原头结点从内存中删掉。",-1),G=n("img",{src:"https://img-blog.csdnimg.cn/20210316095543775.png",alt:"https://img-blog.csdnimg.cn/20210316095543775.png",tabindex:"0",loading:"lazy"},null,-1),M={href:"https://img-blog.csdnimg.cn/20210316095543775.png",target:"_blank",rel:"noopener noreferrer"},T=n("p",null,"这样移除了一个头结点，是不是发现，在单链表中移除头结点 和 移除其他节点的操作方式是不一样，其实在写代码的时候也会发现，需要单独写一段逻辑来处理移除头结点的情况。",-1),F=n("p",null,"那么可不可以 以一种统一的逻辑来移除 链表的节点呢。",-1),V=n("p",null,[e("其实"),n("strong",null,"可以设置一个虚拟头结点"),e("，这样原链表的所有节点就都可以按照统一的方式进行移除了。")],-1),q=n("p",null,"来看看如何设置一个虚拟头。依然还是在这个链表中，移除元素1。",-1),X=n("img",{src:"https://img-blog.csdnimg.cn/20210316095619221.png",alt:"https://img-blog.csdnimg.cn/20210316095619221.png",tabindex:"0",loading:"lazy"},null,-1),P={href:"https://img-blog.csdnimg.cn/20210316095619221.png",target:"_blank",rel:"noopener noreferrer"},Y=d(`<p>这里来给链表添加一个虚拟头结点为新的头结点，此时要移除这个旧头结点元素1。</p><h3 id="直接使用原来的链表来进行移除节点操作" tabindex="-1"><a class="header-anchor" href="#直接使用原来的链表来进行移除节点操作" aria-hidden="true">#</a> 直接使用原来的链表来进行移除节点操作：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Solution {
public:
    ListNode* removeElements(ListNode* head, int val) {
        // 删除头结点
        while (head != NULL &amp;&amp; head-&gt;val == val) { // 注意这里不是if
            ListNode* tmp = head;
            head = head-&gt;next;
            delete tmp;
        }

        // 删除非头结点
        ListNode* cur = head;
        while (cur != NULL &amp;&amp; cur-&gt;next!= NULL) {
            if (cur-&gt;next-&gt;val == val) {
                ListNode* tmp = cur-&gt;next;
                cur-&gt;next = cur-&gt;next-&gt;next;
                delete tmp;
            } else {
                cur = cur-&gt;next;
            }
        }
        return head;
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置一个虚拟头结点在进行移除节点操作" tabindex="-1"><a class="header-anchor" href="#设置一个虚拟头结点在进行移除节点操作" aria-hidden="true">#</a> 设置一个虚拟头结点在进行移除节点操作：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Solution {
public:
    ListNode* removeElements(ListNode* head, int val) {
        ListNode* dummyHead = new ListNode(0); // 设置一个虚拟头结点
        dummyHead-&gt;next = head; // 将虚拟头结点指向head，这样方面后面做删除操作
        ListNode* cur = dummyHead;
        while (cur-&gt;next != NULL) {
            if(cur-&gt;next-&gt;val == val) {
                ListNode* tmp = cur-&gt;next;
                cur-&gt;next = cur-&gt;next-&gt;next;
                delete tmp;
            } else {
                cur = cur-&gt;next;
            }
        }
        head = dummyHead-&gt;next;
        delete dummyHead;
        return head;
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_707-设计链表" tabindex="-1"><a class="header-anchor" href="#_707-设计链表" aria-hidden="true">#</a> 707.设计链表</h3><p>在链表类中实现这些功能：</p><ul><li>get(index)：获取链表中第 index 个节点的值。如果索引无效，则返回-1。</li><li>addAtHead(val)：在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。</li><li>addAtTail(val)：将值为 val 的节点追加到链表的最后一个元素。</li><li>addAtIndex(index,val)：在链表中的第 index 个节点之前添加值为 val 的节点。如果 index 等于链表的长度，则该节点将附加到链表的末尾。如果 index 大于链表长度，则不会插入节点。如果index小于0，则在头部插入节点。</li><li>deleteAtIndex(index)：如果索引 index 有效，则删除链表中的第 index 个节点。</li><li>![[../photo/3.png]] 下面采用的设置一个虚拟头结点：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class MyLinkedList {
public:
    // 定义链表节点结构体
    struct LinkedNode {
        int val;
        LinkedNode* next;
        LinkedNode(int val):val(val), next(nullptr){}
    };

    // 初始化链表
    MyLinkedList() {
        _dummyHead = new LinkedNode(0); // 这里定义的头结点 是一个虚拟头结点，而不是真正的链表头结点
        _size = 0;
    }

    // 获取到第index个节点数值，如果index是非法数值直接返回-1， 注意index是从0开始的，第0个节点就是头结点
    int get(int index) {
        if (index &gt; (_size - 1) || index &lt; 0) {
            return -1;
        }
        LinkedNode* cur = _dummyHead-&gt;next;
        while(index--){ // 如果--index 就会陷入死循环
            cur = cur-&gt;next;
        }
        return cur-&gt;val;
    }

    // 在链表最前面插入一个节点，插入完成后，新插入的节点为链表的新的头结点
    void addAtHead(int val) {
        LinkedNode* newNode = new LinkedNode(val);
        newNode-&gt;next = _dummyHead-&gt;next;
        _dummyHead-&gt;next = newNode;
        _size++;
    }

    // 在链表最后面添加一个节点
    void addAtTail(int val) {
        LinkedNode* newNode = new LinkedNode(val);
        LinkedNode* cur = _dummyHead;
        while(cur-&gt;next != nullptr){
            cur = cur-&gt;next;
        }
        cur-&gt;next = newNode;
        _size++;
    }

    // 在第index个节点之前插入一个新节点，例如index为0，那么新插入的节点为链表的新头节点。
    // 如果index 等于链表的长度，则说明是新插入的节点为链表的尾结点
    // 如果index大于链表的长度，则返回空
    void addAtIndex(int index, int val) {
        if (index &gt; _size) {
            return;
        }
        LinkedNode* newNode = new LinkedNode(val);
        LinkedNode* cur = _dummyHead;
        while(index--) {
            cur = cur-&gt;next;
        }
        newNode-&gt;next = cur-&gt;next;
        cur-&gt;next = newNode;
        _size++;
    }

    // 删除第index个节点，如果index 大于等于链表的长度，直接return，注意index是从0开始的
    void deleteAtIndex(int index) {
        if (index &gt;= _size || index &lt; 0) {
            return;
        }
        LinkedNode* cur = _dummyHead;
        while(index--) {
            cur = cur -&gt;next;
        }
        LinkedNode* tmp = cur-&gt;next;
        cur-&gt;next = cur-&gt;next-&gt;next;
        delete tmp;
        _size--;
    }

    // 打印链表
    void printLinkedList() {
        LinkedNode* cur = _dummyHead;
        while (cur-&gt;next != nullptr) {
            cout &lt;&lt; cur-&gt;next-&gt;val &lt;&lt; &quot; &quot;;
            cur = cur-&gt;next;
        }
        cout &lt;&lt; endl;
    }
private:
    int _size;
    LinkedNode* _dummyHead;

};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_206-反转链表" tabindex="-1"><a class="header-anchor" href="#_206-反转链表" aria-hidden="true">#</a> 206.反转链表</h3><p>题意：反转一个单链表。</p><p>示例: 输入: 1-&gt;2-&gt;3-&gt;4-&gt;5-&gt;NULL 输出: 5-&gt;4-&gt;3-&gt;2-&gt;1-&gt;NUL ![[../photo/4.png]] 首先定义一个cur指针，指向头结点，再定义一个pre指针，初始化为null。</p><p>然后就要开始反转了，首先要把 cur-&gt;next 节点用tmp指针保存一下，也就是保存一下这个节点。 ![[../photo/5.png]]</p><h3 id="双指针法-2" tabindex="-1"><a class="header-anchor" href="#双指针法-2" aria-hidden="true">#</a> 双指针法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        ListNode* temp; // 保存cur的下一个节点
        ListNode* cur = head;
        ListNode* pre = NULL;
        while(cur) {
            temp = cur-&gt;next;  // 保存一下 cur的下一个节点，因为接下来要改变cur-&gt;next
            cur-&gt;next = pre; // 翻转操作
            // 更新pre 和 cur指针
            pre = cur;
            cur = temp;
        }
        return pre;
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="递归法-从前往后" tabindex="-1"><a class="header-anchor" href="#递归法-从前往后" aria-hidden="true">#</a> 递归法（从前往后）</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Solution {
public:
    ListNode* reverse(ListNode* pre,ListNode* cur){
        if(cur == NULL) return pre;
        ListNode* temp = cur-&gt;next;
        cur-&gt;next = pre;
        // 可以和双指针法的代码进行对比，如下递归的写法，其实就是做了这两步
        // pre = cur;
        // cur = temp;
        return reverse(cur,temp);
    }
    ListNode* reverseList(ListNode* head) {
        // 和双指针法初始化是一样的逻辑
        // ListNode* cur = head;
        // ListNode* pre = NULL;
        return reverse(NULL, head);
    }

};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="递归法-从后往前" tabindex="-1"><a class="header-anchor" href="#递归法-从后往前" aria-hidden="true">#</a> 递归法（从后往前）</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        // 边缘条件判断
        if(head == NULL) return NULL;
        if (head-&gt;next == NULL) return head;

        // 递归调用，翻转第二个节点开始往后的链表
        ListNode *last = reverseList(head-&gt;next);
        // 翻转头节点与第二个节点的指向
        head-&gt;next-&gt;next = head;
        // 此时的 head 节点为尾节点，next 需要指向 NULL
        head-&gt;next = NULL;
        return last;
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_24-两两交换链表中的节点" tabindex="-1"><a class="header-anchor" href="#_24-两两交换链表中的节点" aria-hidden="true">#</a> 24. 两两交换链表中的节点</h3><p>给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。</p><p>你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。</p>`,22),J=n("img",{src:"https://code-thinking.cdn.bcebos.com/pics/24.两两交换链表中的节点-题意.jpg",alt:"https://code-thinking.cdn.bcebos.com/pics/24.两两交换链表中的节点-题意.jpg",tabindex:"0",loading:"lazy"},null,-1),K={href:"https://code-thinking.cdn.bcebos.com/pics/24.%E4%B8%A4%E4%B8%A4%E4%BA%A4%E6%8D%A2%E9%93%BE%E8%A1%A8%E4%B8%AD%E7%9A%84%E8%8A%82%E7%82%B9-%E9%A2%98%E6%84%8F.jpg",target:"_blank",rel:"noopener noreferrer"},Q=n("p",null,"初始时，cur指向虚拟头结点，然后进行如下三步：",-1),R=n("img",{src:"https://code-thinking.cdn.bcebos.com/pics/24.两两交换链表中的节点1.png",alt:"https://code-thinking.cdn.bcebos.com/pics/24.两两交换链表中的节点1.png",tabindex:"0",loading:"lazy"},null,-1),W={href:"https://code-thinking.cdn.bcebos.com/pics/24.%E4%B8%A4%E4%B8%A4%E4%BA%A4%E6%8D%A2%E9%93%BE%E8%A1%A8%E4%B8%AD%E7%9A%84%E8%8A%82%E7%82%B91.png",target:"_blank",rel:"noopener noreferrer"},nn=n("p",null,"操作之后，链表如下：",-1),en=n("img",{src:"https://code-thinking.cdn.bcebos.com/pics/24.两两交换链表中的节点2.png",alt:"https://code-thinking.cdn.bcebos.com/pics/24.两两交换链表中的节点2.png",tabindex:"0",loading:"lazy"},null,-1),sn={href:"https://code-thinking.cdn.bcebos.com/pics/24.%E4%B8%A4%E4%B8%A4%E4%BA%A4%E6%8D%A2%E9%93%BE%E8%A1%A8%E4%B8%AD%E7%9A%84%E8%8A%82%E7%82%B92.png",target:"_blank",rel:"noopener noreferrer"},dn=n("p",null,"看这个可能就更直观一些了：",-1),ln=n("img",{src:"https://code-thinking.cdn.bcebos.com/pics/24.两两交换链表中的节点3.png",alt:"https://code-thinking.cdn.bcebos.com/pics/24.两两交换链表中的节点3.png",tabindex:"0",loading:"lazy"},null,-1),tn={href:"https://code-thinking.cdn.bcebos.com/pics/24.%E4%B8%A4%E4%B8%A4%E4%BA%A4%E6%8D%A2%E9%93%BE%E8%A1%A8%E4%B8%AD%E7%9A%84%E8%8A%82%E7%82%B93.png",target:"_blank",rel:"noopener noreferrer"},an=d(`<p>对应的C++代码实现如下： （注释中详细和如上图中的三步做对应）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Solution {
public:
    ListNode* swapPairs(ListNode* head) {
        ListNode* dummyHead = new ListNode(0); // 设置一个虚拟头结点
        dummyHead-&gt;next = head; // 将虚拟头结点指向head，这样方面后面做删除操作
        ListNode* cur = dummyHead;
        while(cur-&gt;next != nullptr &amp;&amp; cur-&gt;next-&gt;next != nullptr) {
            ListNode* tmp = cur-&gt;next; // 记录临时节点
            ListNode* tmp1 = cur-&gt;next-&gt;next-&gt;next; // 记录临时节点

            cur-&gt;next = cur-&gt;next-&gt;next;    // 步骤一
            cur-&gt;next-&gt;next = tmp;          // 步骤二
            cur-&gt;next-&gt;next-&gt;next = tmp1;   // 步骤三

            cur = cur-&gt;next-&gt;next; // cur移动两位，准备下一轮交换
        }
        return dummyHead-&gt;next;
    }
};
//-   时间复杂度：$O(n)$
//-   空间复杂度：$O(1)$

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_19-删除链表的倒数第n个节点" tabindex="-1"><a class="header-anchor" href="#_19-删除链表的倒数第n个节点" aria-hidden="true">#</a> 19.删除链表的倒数第N个节点</h3><p>给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。</p><p>进阶：你能尝试使用一趟扫描实现吗？</p><p>示例 1：</p>`,6),rn=n("img",{src:"https://img-blog.csdnimg.cn/20210510085957392.png",alt:"https://img-blog.csdnimg.cn/20210510085957392.png",tabindex:"0",loading:"lazy"},null,-1),vn={href:"https://img-blog.csdnimg.cn/20210510085957392.png",target:"_blank",rel:"noopener noreferrer"},cn=d(`<p>输入：head = [1,2,3,4,5], n = 2 输出：[1,2,3,5] 示例 2：</p><p>输入：head = [1], n = 1 输出：[] 示例 3：</p><p>输入：head = [1,2], n = 1 输出：[1]</p><p>双指针的经典应用，如果要删除倒数第n个节点，让fast移动n步，然后让fast和slow同时移动，直到fast指向链表末尾。删掉slow所指向的节点就可以了。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        ListNode* dummyHead = new ListNode(0);
        dummyHead-&gt;next = head;
        ListNode* slow = dummyHead;
        ListNode* fast = dummyHead;
        while(n-- &amp;&amp; fast != NULL) {
            fast = fast-&gt;next;
        }
        fast = fast-&gt;next; // fast再提前走一步，因为需要让slow指向删除节点的上一个节点
        while (fast != NULL) {
            fast = fast-&gt;next;
            slow = slow-&gt;next;
        }
        slow-&gt;next = slow-&gt;next-&gt;next;
        return dummyHead-&gt;next;
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="面试题-链表相交" tabindex="-1"><a class="header-anchor" href="#面试题-链表相交" aria-hidden="true">#</a> 面试题 链表相交</h3><p>给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 null 。 图示两个链表在节点 c1 开始相交： ![[../photo/6.png]]</p><p>题目数据 保证 整个链式结构中不存在环。</p><p>注意，函数返回结果后，链表必须 保持其原始结构 。 示例 1： ![[../photo/7.png]]</p><p>输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3 输出：Intersected at &#39;8&#39; 解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。 从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。 在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Solution {
public:
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
        ListNode* curA = headA;
        ListNode* curB = headB;
        int lenA = 0, lenB = 0;
        while (curA != NULL) { // 求链表A的长度
            lenA++;
            curA = curA-&gt;next;
        }
        while (curB != NULL) { // 求链表B的长度
            lenB++;
            curB = curB-&gt;next;
        }
        curA = headA;
        curB = headB;
        // 让curA为最长链表的头，lenA为其长度
        if (lenB &gt; lenA) {
            swap (lenA, lenB);
            swap (curA, curB);
        }
        // 求长度差
        int gap = lenA - lenB;
        // 让curA和curB在同一起点上（末尾位置对齐）
        while (gap--) {
            curA = curA-&gt;next;
        }
        // 遍历curA 和 curB，遇到相同则直接返回
        while (curA != NULL) {
            if (curA == curB) {
                return curA;
            }
            curA = curA-&gt;next;
            curB = curB-&gt;next;
        }
        return NULL;
    }
};

//-   时间复杂度：$O(n + m)$
//-   空间复杂度：$O(1)$

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_142-环形链表ii" tabindex="-1"><a class="header-anchor" href="#_142-环形链表ii" aria-hidden="true">#</a> 142.环形链表II</h3><p>题意： 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。 为了表示给定链表中的环，使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。<strong>说明</strong>：不允许修改给定的链表。</p>`,13),un=n("img",{src:"https://img-blog.csdnimg.cn/20200816110112704.png",alt:"https://img-blog.csdnimg.cn/20200816110112704.png",tabindex:"0",loading:"lazy"},null,-1),mn={href:"https://img-blog.csdnimg.cn/20200816110112704.png",target:"_blank",rel:"noopener noreferrer"},bn=n("p",null,[n("strong",null,"fast指针一定先进入环中，如果fast指针和slow指针相遇的话，一定是在环中相遇，这是毋庸置疑的。")],-1),on=n("p",null,"![][",-1),gn={href:"https://tva1.sinaimg.cn/large/008eGmZEly1goo4xglk9yg30fs0b6u0x.gif",target:"_blank",rel:"noopener noreferrer"},hn=d(`<p>]</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode *detectCycle(ListNode *head) {
        ListNode* fast = head;
        ListNode* slow = head;
        while(fast != NULL &amp;&amp; fast-&gt;next != NULL) {
            slow = slow-&gt;next;
            fast = fast-&gt;next-&gt;next;
            // 快慢指针相遇，此时从head 和 相遇点，同时查找直至相遇
            if (slow == fast) {
                ListNode* index1 = fast;
                ListNode* index2 = head;
                while (index1 != index2) {
                    index1 = index1-&gt;next;
                    index2 = index2-&gt;next;
                }
                return index2; // 返回环的入口
            }
        }
        return NULL;
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先slow进环的时候，fast一定是先进环来了。</p><p>如果slow进环入口，fast也在环入口，那么把这个环展开成直线，就是如下图的样子：</p>`,4),pn=n("img",{src:"https://img-blog.csdnimg.cn/2021031816503266.png",alt:"https://img-blog.csdnimg.cn/2021031816503266.png",tabindex:"0",loading:"lazy"},null,-1),xn={href:"https://img-blog.csdnimg.cn/2021031816503266.png",target:"_blank",rel:"noopener noreferrer"},fn=n("p",null,"可以看出如果slow 和 fast同时在环入口开始走，一定会在环入口3相遇，slow走了一圈，fast走了两圈。",-1),_n=n("p",null,"重点来了，slow进环的时候，fast一定是在环的任意一个位置，如图：",-1),Ln=n("img",{src:"https://img-blog.csdnimg.cn/2021031816515727.png",alt:"https://img-blog.csdnimg.cn/2021031816515727.png",tabindex:"0",loading:"lazy"},null,-1),Nn={href:"https://img-blog.csdnimg.cn/2021031816515727.png",target:"_blank",rel:"noopener noreferrer"},An=n("h2",{id:"续-代码随想录算法总结-c-版本——数组、链表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#续-代码随想录算法总结-c-版本——数组、链表","aria-hidden":"true"},"#"),e(" 续[[代码随想录算法总结(C++)版本——数组、链表]]")],-1);function kn(En,yn){const s=a("ExternalLinkIcon"),l=a("center");return v(),c("div",null,[m,i(l,null,{default:t(()=>[n("figure",null,[b,n("figcaption",null,[n("a",o,[e("https://tva1.sinaimg.cn/large/008eGmZEly1gntrc7x9tjg30du09m1ky.gif"),i(s)])])])]),_:1}),g,i(l,null,{default:t(()=>[n("figure",null,[h,n("figcaption",null,[n("a",p,[e("https://tva1.sinaimg.cn/large/008eGmZEly1gntrds6r59g30du09mnpd.gif"),i(s)])])])]),_:1}),x,i(l,null,{default:t(()=>[n("figure",null,[f,n("figcaption",null,[n("a",_,[e("https://code-thinking.cdn.bcebos.com/gifs/977.有序数组的平方.gif"),i(s)])])])]),_:1}),L,n("figure",null,[N,n("figcaption",null,[n("a",A,[e("https://code-thinking.cdn.bcebos.com/gifs/209.长度最小的子数组.gif"),i(s)])])]),n("figure",null,[k,n("figcaption",null,[n("a",E,[e("https://img-blog.csdnimg.cn/20210312160441942.png"),i(s)])])]),y,n("figure",null,[w,n("figcaption",null,[n("a",B,[e("https://img-blog.csdnimg.cn/20210316095351161.png"),i(s)])])]),z,n("figure",null,[j,n("figcaption",null,[n("a",I,[e("https://img-blog.csdnimg.cn/20210316095418280.png"),i(s)])])]),H,n("figure",null,[S,n("figcaption",null,[n("a",U,[e("https://img-blog.csdnimg.cn/2021031609544922.png"),i(s)])])]),$,C,n("figure",null,[O,n("figcaption",null,[n("a",D,[e("https://img-blog.csdnimg.cn/20210316095512470.png"),i(s)])])]),Z,n("figure",null,[G,n("figcaption",null,[n("a",M,[e("https://img-blog.csdnimg.cn/20210316095543775.png"),i(s)])])]),T,F,V,q,n("figure",null,[X,n("figcaption",null,[n("a",P,[e("https://img-blog.csdnimg.cn/20210316095619221.png"),i(s)])])]),Y,n("figure",null,[J,n("figcaption",null,[n("a",K,[e("https://code-thinking.cdn.bcebos.com/pics/24.两两交换链表中的节点-题意.jpg"),i(s)])])]),Q,n("figure",null,[R,n("figcaption",null,[n("a",W,[e("https://code-thinking.cdn.bcebos.com/pics/24.两两交换链表中的节点1.png"),i(s)])])]),nn,n("figure",null,[en,n("figcaption",null,[n("a",sn,[e("https://code-thinking.cdn.bcebos.com/pics/24.两两交换链表中的节点2.png"),i(s)])])]),dn,n("figure",null,[ln,n("figcaption",null,[n("a",tn,[e("https://code-thinking.cdn.bcebos.com/pics/24.两两交换链表中的节点3.png"),i(s)])])]),an,n("figure",null,[rn,n("figcaption",null,[n("a",vn,[e("https://img-blog.csdnimg.cn/20210510085957392.png"),i(s)])])]),cn,n("figure",null,[un,n("figcaption",null,[n("a",mn,[e("https://img-blog.csdnimg.cn/20200816110112704.png"),i(s)])])]),bn,on,n("p",null,[n("a",gn,[e("https://tva1.sinaimg.cn/large/008eGmZEly1goo4xglk9yg30fs0b6u0x.gif"),i(s)])]),hn,n("figure",null,[pn,n("figcaption",null,[n("a",xn,[e("https://img-blog.csdnimg.cn/2021031816503266.png"),i(s)])])]),fn,_n,n("figure",null,[Ln,n("figcaption",null,[n("a",Nn,[e("https://img-blog.csdnimg.cn/2021031816515727.png"),i(s)])])]),An])}const Bn=r(u,[["render",kn],["__file","代码随想录算法总结(C__)版本——数组、链表（二）.html.vue"]]);export{Bn as default};
