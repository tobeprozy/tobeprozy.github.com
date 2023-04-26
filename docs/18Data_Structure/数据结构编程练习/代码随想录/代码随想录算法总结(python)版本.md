## 数组
### [[算法学习/代码随想录算法总结(C++)版本——数组、链表#704 二分查找]]
版本一）左闭右闭区间

```
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums) - 1
        
        while left <= right:
            middle = (left + right) // 2

            if nums[middle] < target:
                left = middle + 1
            elif nums[middle] > target:
                right = middle - 1
            else:
                return middle
        return -1
```

（版本二）左闭右开区间

```
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left,right  =0, len(nums)
        while left < right:
            mid = (left + right) // 2
            if nums[mid] < target:
                left = mid+1
            elif nums[mid] > target:
                right = mid
            else:
                return mid
        return -1
```
### [[算法学习/代码随想录算法总结(C++)版本——数组、链表#27 移除元素]]
### [[算法学习/代码随想录算法总结(C++)版本——数组、链表#977 有序数组的平方]]
