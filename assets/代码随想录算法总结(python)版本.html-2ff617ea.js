import{_ as e,Y as i,Z as n,a2 as d}from"./framework-39b9cf04.js";const l={},s=d(`<h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h2><h3 id="算法学习-代码随想录算法总结-c-版本——数组、链表-704-二分查找" tabindex="-1"><a class="header-anchor" href="#算法学习-代码随想录算法总结-c-版本——数组、链表-704-二分查找" aria-hidden="true">#</a> [[算法学习/代码随想录算法总结(C++)版本——数组、链表#704 二分查找]]</h3><p>版本一）左闭右闭区间</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Solution:
    def search(self, nums: List[int], target: int) -&gt; int:
        left, right = 0, len(nums) - 1
        
        while left &lt;= right:
            middle = (left + right) // 2

            if nums[middle] &lt; target:
                left = middle + 1
            elif nums[middle] &gt; target:
                right = middle - 1
            else:
                return middle
        return -1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（版本二）左闭右开区间</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Solution:
    def search(self, nums: List[int], target: int) -&gt; int:
        left,right  =0, len(nums)
        while left &lt; right:
            mid = (left + right) // 2
            if nums[mid] &lt; target:
                left = mid+1
            elif nums[mid] &gt; target:
                right = mid
            else:
                return mid
        return -1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="算法学习-代码随想录算法总结-c-版本——数组、链表-27-移除元素" tabindex="-1"><a class="header-anchor" href="#算法学习-代码随想录算法总结-c-版本——数组、链表-27-移除元素" aria-hidden="true">#</a> [[算法学习/代码随想录算法总结(C++)版本——数组、链表#27 移除元素]]</h3><h3 id="算法学习-代码随想录算法总结-c-版本——数组、链表-977-有序数组的平方" tabindex="-1"><a class="header-anchor" href="#算法学习-代码随想录算法总结-c-版本——数组、链表-977-有序数组的平方" aria-hidden="true">#</a> [[算法学习/代码随想录算法总结(C++)版本——数组、链表#977 有序数组的平方]]</h3>`,8),a=[s];function t(r,c){return i(),n("div",null,a)}const u=e(l,[["render",t],["__file","代码随想录算法总结(python)版本.html.vue"]]);export{u as default};
