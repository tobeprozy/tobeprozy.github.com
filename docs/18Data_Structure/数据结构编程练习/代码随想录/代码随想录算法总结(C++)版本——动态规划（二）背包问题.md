# 代码随想录算法总结(C++)版本——动态规划（二）背包问题

Created: September 2, 2022 1:06 PM

# 概述

我这里画了一个图，如下：

![https://img-blog.csdnimg.cn/20210117171307407.png](https://img-blog.csdnimg.cn/20210117171307407.png)

## 递推公式总结

1. 问能否能装满背包（或者最多装多少）:

**也就是不在乎装不装满，装到极限既可以了，所以要用max**


🪁 **dp[j] = max(dp[j], dp[j - nums[i]] + nums[i]);**



1. 装满背包有几种方法：


🪁 dp[j] += dp[j - nums[i]]



1. 背包装满最大价值：**要最大价值，所以一要用max，和第一类一样的意思（物品重量变成价值了）**


🪁 dp[j] = max(dp[j], dp[j - weight[i]] + value[i]);



1. 装满背包所有物品的最小个数：最小个数，所以要用min


🪁 dp[j] = min(dp[j], dp[j - coins[i]] + 1);



## 遍历顺序

1. **二维dp数组01背包**


🪁 先遍历物品还是先遍历背包都是可以的，且第二层for循环是从小到大遍历



1. **一维dp数组01背包**


🪁 只能先遍历物品再遍历背包容量，且第二层for循环是从大到小遍历。



1. **一维dp数组纯完全背包**


🪁 先遍历物品还是先遍历背包都是可以的，且第二层for循环是从小到大遍历。



1. 一维数组非纯完全背包


🪁 **如果求组合数就是外层for循环遍历物品，内层for遍历背包**。（先遍历物品，那么物品的顺序就是确定的，（1，3，2，5）就不会出现（1，5）和（5，1））
**如果求排列数就是外层for遍历背包，内层for循环遍历物品**。



1. 一维数组完全背包求最小数


🪁 两层for循环的先后顺序就无所谓了



# 01背包

## 背包理论

背包最大重量为4。

物品为：

|  | 重量 | 价值 |
| --- | --- | --- |
| 物品0 | 1 | 15 |
| 物品1 | 3 | 20 |
| 物品2 | 4 | 30 |

问背包能背的物品最大价值是多少？

**二维dp数组方式**

1. **确定dp数组以及下标的含义**

**dp[i][j] 表示从下标为[0-i]的物品里任意取，放进容量为j的背包，价值总和最大是多少**
2. 确定递推公式：可以有两个方向推出来dp[i][j]

• **不放物品i**：由dp[i - 1][j]推出，即背包容量为j，里面不放物品i的最大价值，此时dp[i][j]就是dp[i - 1][j]。(其实就是当**物品i的重量大于背包j的重量时，物品i无法放进背包中，所以被背包内的价值依然和前面相同**。)

• **放物品i**：由dp[i - 1][j - weight[i]]推出，dp[i - 1][j - weight[i]] 为背包容量为j - weight[i]的时候不放物品i的最大价值，那么dp[i - 1][j - weight[i]] + value[i] （物品i的价值），就是背包放物品i得到的最大价值

**其中dp[i - 1][j - weight[i]] 表示不放物品i的最大价值，加上放上物体i后就要加上value[i]** 

3. dp数组如何初始化

（1）dp[i][j]的定义出发，如果背包容量j为0的话，即dp[i][0]，无论是选取哪些物品，背包价值总和一定为0

（2）dp[0][j]，当 j < weight[0]的时候，dp[0][j] 应该是 0，j >= weight[0]时，dp[0][j] 应该是value[0]。

**4. 确定遍历顺序**

有两个遍历的维度：物品与背包重量，**先遍历 物品还是先遍历背包重量都是可以的。**

![https://img-blog.csdnimg.cn/2021011010314055.png](https://img-blog.csdnimg.cn/2021011010314055.png)

1. **举例推导dp数组**

来看一下对应的dp数组的数值，如图：

![https://img-blog.csdnimg.cn/20210118163425129.jpg](https://img-blog.csdnimg.cn/20210118163425129.jpg)

```cpp
void test_2_wei_bag_problem1() {
    vector<int> weight = {1, 3, 4};
    vector<int> value = {15, 20, 30};
    int bagweight = 4;

    // 二维数组
    vector<vector<int>> dp(weight.size(), vector<int>(bagweight + 1, 0));

    // 初始化
    for (int j = weight[0]; j <= bagweight; j++) {
        dp[0][j] = value[0];
    }

    // weight数组的大小 就是物品个数
    for(int i = 1; i < weight.size(); i++) { // 遍历物品
        for(int j = 0; j <= bagweight; j++) { // 遍历背包容量
            if (j < weight[i]) dp[i][j] = dp[i - 1][j];
            else dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);

        }
    }

    cout << dp[weight.size() - 1][bagweight] << endl;
}

int main() {
    test_2_wei_bag_problem1();
}
```

一维**dp数组方式（滚动数组）**

1. **确定dp数组的定义**

在一维dp数组中，dp[j]表示：容量为j的背包，所背的物品价值可以最大为dp[j]。

1. **一维dp数组的递推公式**

dp[j]可以通过**dp[j - weight[i]]**推导出来，dp[j - weight[i]]表示容量为j - weight[i]的背包所背的最大价值。

dp[j - weight[i]] + value[i] 表示 容量为 j - 物品i重量 的背包 加上 物品i的价值，（也就是容量为j的背包，放入物品i了之后的价值即：dp[j]）

dp[j]有两个选择，一个是**取自己dp[j]** 相当于 二维dp数组中的dp[i-1][j]，即不放物品i，**一个是取dp[j - weight[i]] + value[i]，即放物品i**，指定是取最大的，毕竟是求最大价值。

dp[j] = max(dp[j], dp[j - weight[i]] + value[i]);

3.一维dp数组如何初始化

4.一维dp数组遍历顺序

**先遍历物品嵌套遍历背包容量**

**5.举例推导dp数组**

一维dp，分别用物品0，物品1，物品2 来遍历背包，最终得到结果如下：

![https://img-blog.csdnimg.cn/20210110103614769.png](https://img-blog.csdnimg.cn/20210110103614769.png)

```cpp
void test_1_wei_bag_problem() {
    vector<int> weight = {1, 3, 4};
    vector<int> value = {15, 20, 30};
    int bagWeight = 4;

    // 初始化
    vector<int> dp(bagWeight + 1, 0);
    for(int i = 0; i < weight.size(); i++) { // 遍历物品
        for(int j = bagWeight; j >= weight[i]; j--) { // 遍历背包容量
            dp[j] = max(dp[j], dp[j - weight[i]] + value[i]);
        }
    }
    cout << dp[bagWeight] << endl;
}

int main() {
    test_1_wei_bag_problem();
}
```

## 0416.分割等和子集

**[力扣题目链接(opens new window)](https://leetcode-cn.com/problems/partition-equal-subset-sum/)**

题目难易：中等

给定一个只包含正整数的非空数组。是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

注意: 每个数组中的元素不会超过 100 数组的大小不会超过 200

示例 1: 输入: [1, 5, 11, 5] 输出: true 解释: 数组可以分割成 [1, 5, 5] 和 [11].

示例 2: 输入: [1, 2, 3, 5] 输出: false 解释: 数组不能分割成两个元素和相等的子集.

**如果可以重复多次放入是完全背包，而只能放入一次是01背包**

**只有确定了如下四点，才能把01背包问题套到本题上来。**

- 背包的体积为sum / 2
- 背包要放入的商品（集合里的元素）重量为 元素的数值，价值也为元素的数值
- 背包如果正好装满，说明找到了总和为 sum / 2 的子集。
- 背包中每一个元素是不可重复放入。

**1. 确定dp数组以及下标的含义**

dp[j] 表示： 容量为j的背包，所背的物品价值可以最大为dp[j]。

**dp[j]表示 背包总容量是j，最大可以凑成j的子集总和为dp[j]**

**2. 确定递推公式**

01背包的递推公式为：**dp[j] = max(dp[j], dp[j - weight[i]] + value[i]);**

本题，相当于背包里放入数值，那么**物品i的重量是nums[i]**，其**价值也是nums[i]**：

                              dp[j] = max(dp[j], dp[j - **nums[i]**] + **nums[i]**);

**3. dp数组如何初始化**

dp[0]一定是0，给的价值都是正整数那么非0下标都初始化为0就可以了，如果题目给的价值有负数，那么非0下标就要初始化为负无穷。

**4. 确定遍历顺序**

物品遍历的for循环放在外层，遍历背包的for循环放在内层，且内层for循环倒序遍历！

## ****1049. 最后一块石头的重量 II****

**[力扣题目链接(opens new window)](https://leetcode-cn.com/problems/last-stone-weight-ii/)**

题目难度：中等

有一堆石头，每块石头的重量都是正整数。

每一回合，从中选出任意两块石头，然后将它们一起粉碎。假设石头的重量分别为 x 和 y，且 x <= y。那么粉碎的可能结果如下：

如果 x == y，那么两块石头都会被完全粉碎； 如果 x != y，那么重量为 x 的石头将会完全粉碎，而重量为 y 的石头新重量为 y-x。 最后，最多只会剩下一块石头。返回此石头最小的可能重量。如果没有石头剩下，就返回 0。

示例： 输入：[2,7,4,1,8,1] 输出：1 解释： 组合 2 和 4，得到 2，所以数组转化为 [2,7,1,8,1]， 组合 7 和 8，得到 1，所以数组转化为 [2,1,1,1]， 组合 2 和 1，得到 1，所以数组转化为 [1,1,1]， 组合 1 和 1，得到 0，所以数组转化为 [1]，这就是最优值。

**尽量让石头分成重量相同的两堆，相撞之后剩下的石头最小，这样就化解成01背包问题了**

1. 确定dp数组以及下标的含义

**dp[j]表示容量（这里说容量更形象，其实就是重量）为j的背包，最多可以背dp[j]这么重的石头**。

**2. 确定递推公式**

**dp[j] = max(dp[j], dp[j - stones[i]] + stones[i]);**

**3. dp数组如何初始化**

为重量都不会是负数，所以dp[j]都初始化为0就可以了，这样在递归公式dp[j] = max(dp[j], dp[j - stones[i]] + stones[i]);中dp[j]才不会初始值所覆盖。

**4. 确定遍历顺序**

物品遍历的for循环放在外层，遍历背包的for循环放在内层，且内层for循环倒序遍历！

**5. 举例推导dp数组**

输入：[2,4,1,1]，此时target = (2 + 4 + 1 + 1)/2 = 4 ，dp数组状态图如下：

![https://img-blog.csdnimg.cn/20210121115805904.jpg](https://img-blog.csdnimg.cn/20210121115805904.jpg)

```cpp
class Solution {
public:
    int lastStoneWeightII(vector<int>& stones) {
        vector<int> dp(15001, 0);
        int sum = 0;
        for (int i = 0; i < stones.size(); i++) sum += stones[i];
        int target = sum / 2;
        for (int i = 0; i < stones.size(); i++) { // 遍历物品
            for (int j = target; j >= stones[i]; j--) { // 遍历背包
                dp[j] = max(dp[j], dp[j - stones[i]] + stones[i]);
            }
        }
        return sum - dp[target] - dp[target];
    }
};
```

## 0494.目标和

**[力扣题目链接(opens new window)](https://leetcode-cn.com/problems/target-sum/)**

难度：中等

给定一个非负整数数组，a1, a2, ..., an, 和一个目标数，S。现在你有两个符号 + 和 -。对于数组中的任意一个整数，你都可以从 + 或 -中选择一个符号添加在前面。

返回可以使最终数组和为目标数 S 的所有添加符号的方法数。

示例：

输入：nums: [1, 1, 1, 1, 1], S: 3输出：5

解释：-1+1+1+1+1 = 3+1-1+1+1+1 = 3+1+1-1+1+1 = 3+1+1+1-1+1 = 3+1+1+1+1-1 = 3

一共有5种方法让最终目标和为3。

**回溯**

```cpp
class Solution {
private:
    vector<vector<int>> result;
    vector<int> path;
    void backtracking(vector<int>& candidates, int target, int sum, int startIndex) {
        if (sum == target) {
            result.push_back(path);
        }
        // 如果 sum + candidates[i] > target 就终止遍历
        for (int i = startIndex; i < candidates.size() && sum + candidates[i] <= target; i++) {
            sum += candidates[i];
            path.push_back(candidates[i]);
            backtracking(candidates, target, sum, i + 1);
            sum -= candidates[i];
            path.pop_back();

        }
    }
public:
    int findTargetSumWays(vector<int>& nums, int S) {
        int sum = 0;
        for (int i = 0; i < nums.size(); i++) sum += nums[i];
        if (S > sum) return 0; // 此时没有方案
        if ((S + sum) % 2) return 0; // 此时没有方案，两个int相加的时候要各位小心数值溢出的问题
        int bagSize = (S + sum) / 2; // 转变为组合总和问题，bagsize就是要求的和

        // 以下为回溯法代码
        result.clear();
        path.clear();
        sort(nums.begin(), nums.end()); // 需要排序
        backtracking(nums, bagSize, 0, 0);
        return result.size();
    }
};
```

**动态规划：加法的总和为x，那么减法对应的总和就是sum - x**

dp[j] 表示：填满j（包括j）这么大容积的包，有dp[j]种方法

1. 确定dp数组以及下标的含义

dp[j] 表示：填满j（包括j）这么大容积的包，有dp[j]种方法

2. 确定递推公式

dp[j]，j 为5，

- 已经有一个1（nums[i]） 的话，有 dp[4]种方法 凑成 dp[5]。
- 已经有一个2（nums[i]） 的话，有 dp[3]种方法 凑成 dp[5]。
- 已经有一个3（nums[i]） 的话，有 dp[2]中方法 凑成 dp[5]
- 已经有一个4（nums[i]） 的话，有 dp[1]中方法 凑成 dp[5]
- 已经有一个5 （nums[i]）的话，有 dp[0]中方法 凑成 dp[5]

那么凑整dp[5]有多少方法呢，也就是把 所有的 dp[j - nums[i]] 累加起来

dp[j] += dp[j - nums[i]]

3. dp数组如何初始化

dp[0] = 1，理论上也很好解释，装满容量为0的背包，有1种方法，就是装0件物品。

4. 确定遍历顺序

01背包问题一维dp的遍历，nums放在外循环，target在内循环，且内循环倒序。

5. 举例推导dp数组

输入：nums: [1, 1, 1, 1, 1], S: 3

bagSize = (S + sum) / 2 = (3 + 5) / 2 = 4

dp数组状态变化如下：

![https://img-blog.csdnimg.cn/20210125120743274.jpg](https://img-blog.csdnimg.cn/20210125120743274.jpg)

```cpp
class Solution {
public:
    int findTargetSumWays(vector<int>& nums, int S) {
        int sum = 0;
        for (int i = 0; i < nums.size(); i++) sum += nums[i];
        if (abs(S) > sum) return 0; // 此时没有方案
        if ((S + sum) % 2 == 1) return 0; // 此时没有方案
        int bagSize = (S + sum) / 2;
        vector<int> dp(bagSize + 1, 0);
        dp[0] = 1;
        for (int i = 0; i < nums.size(); i++) {
            for (int j = bagSize; j >= nums[i]; j--) {
                dp[j] += dp[j - nums[i]];
            }
        }
        return dp[bagSize];
    }
};
```

## **0474.一和零**

**[力扣题目链接(opens new window)](https://leetcode-cn.com/problems/ones-and-zeroes/)**

给你一个二进制字符串数组 strs 和两个整数 m 和 n 。

请你找出并返回 strs 的最大子集的大小，该子集中 最多 有 m 个 0 和 n 个 1 。

如果 x 的所有元素也是 y 的元素，集合 x 是集合 y 的 子集 。

示例 1：

输入：strs = ["10", "0001", "111001", "1", "0"], m = 5, n = 3 输出：4

解释：最多有 5 个 0 和 3 个 1 的最大子集是 {"10","0001","1","0"} ，因此答案是 4 。 其他满足题意但较小的子集包括 {"0001","1"} 和 {"10","1","0"} 。{"111001"} 不满足题意，因为它含 4 个 1 ，大于 n 的值 3 。

1. 确定dp数组（dp table）以及下标的含义

**dp[i][j]：最多有i个0和j个1的strs的最大子集的大小为dp[i][j]**。

2. 确定递推公式

01背包的递推公式：dp[j] = max(dp[j], dp[j - weight[i]] + value[i]);

递推公式：dp[i][j] = max(dp[i][j], dp[i - zeroNum][j - oneNum] + 1);(增加一个字符串，所以是+1)

3. dp数组如何初始化

物品价值不会是负数，初始为0，保证递推的时候dp[i][j]不会被初始值覆盖

4. 确定遍历顺序

外层for循环遍历物品，内层for循环遍历背包容量且从后向前遍历！

5. 举例推导dp数组

以输入：["10","0001","111001","1","0"]，m = 3，n = 3为例

最后dp数组的状态如下所示：

![https://img-blog.csdnimg.cn/20210120111201512.jpg](https://img-blog.csdnimg.cn/20210120111201512.jpg)

**代码如下:**

```cpp
class Solution {
public:
    int findMaxForm(vector<string>& strs, int m, int n) {
        vector<vector<int>> dp(m + 1, vector<int> (n + 1, 0)); // 默认初始化0
        for (string str : strs) { // 遍历物品
            int oneNum = 0, zeroNum = 0;
            for (char c : str) {
                if (c == '0') zeroNum++;
                else oneNum++;
            }
            for (int i = m; i >= zeroNum; i--) { // 遍历背包容量且从后向前遍历！
                for (int j = n; j >= oneNum; j--) {
                    dp[i][j] = max(dp[i][j], dp[i - zeroNum][j - oneNum] + 1);
                }
            }
        }
        return dp[m][n];
    }
};
```

# 完全背包

## **理论**

背包最大重量为4。

物品为：

|  | 重量 | 价值 |
| --- | --- | --- |
| 物品0 | 1 | 15 |
| 物品1 | 3 | 20 |
| 物品2 | 4 | 30 |

**每件商品都有无限个！**


🪁 01背包内嵌的循环是**从大到小遍历**，为了保证每个物品仅被添加一次。
完全背包的物品是可以添加多次的，所以要**从小到大去遍历**



完全背包的物品是可以添加多次的，所以要从小到大去遍历，即：

完整的C++测试代码如下：

```cpp
// 先遍历物品，在遍历背包
void test_CompletePack() {
    vector<int> weight = {1, 3, 4};
    vector<int> value = {15, 20, 30};
    int bagWeight = 4;
    vector<int> dp(bagWeight + 1, 0);
    for(int i = 0; i < weight.size(); i++) { // 遍历物品
        for(int j = weight[i]; j <= bagWeight; j++) { // 遍历背包容量
            dp[j] = max(dp[j], dp[j - weight[i]] + value[i]);
        }
    }
    cout << dp[bagWeight] << endl;
}
int main() {
    test_CompletePack();
}

```

```cpp

// 先遍历背包，再遍历物品
void test_CompletePack() {
    vector<int> weight = {1, 3, 4};
    vector<int> value = {15, 20, 30};
    int bagWeight = 4;

    vector<int> dp(bagWeight + 1, 0);

    for(int j = 0; j <= bagWeight; j++) { // 遍历背包容量
        for(int i = 0; i < weight.size(); i++) { // 遍历物品
            if (j - weight[i] >= 0) dp[j] = max(dp[j], dp[j - weight[i]] + value[i]);
        }
    }
    cout << dp[bagWeight] << endl;
}
int main() {
    test_CompletePack();
}
```

## ****518. 零钱兑换 II****

**[力扣题目链接(opens new window)](https://leetcode-cn.com/problems/coin-change-2/)**

难度：中等

给定不同面额的硬币和一个总金额。写出函数来计算可以凑成总金额的硬币组合数。假设每一种面额的硬币有无限个。

示例 1:

输入: amount = 5, coins = [1, 2, 5] 输出: 4 解释: 有四种方式可以凑成总金额: 5=5 5=2+2+1 5=2+1+1+1 5=1+1+1+1+1

1. 确定dp数组以及下标的含义

dp[j]：凑成总金额j的货币组合数为dp[j]

2. 确定递推公式

dp[j] （考虑coins[i]的组合总和） 就是所有的dp[j - coins[i]]（不考虑coins[i]）相加。

所以递推公式：**dp[j] += dp[j - coins[i]];**

3. dp数组如何初始化

首先dp[0]一定要为1，dp[0] = 1是 递归公式的基础。

4. 确定遍历顺序

外层for循环遍历物品（钱币），内层for遍历背包（金钱总额）

5.举例推导dp数

输入: amount = 5, coins = [1, 2, 5] ，dp状态图如下：

![https://img-blog.csdnimg.cn/20210120181331461.jpg](https://img-blog.csdnimg.cn/20210120181331461.jpg)

```cpp
class Solution {
public:
    int change(int amount, vector<int>& coins) {
        vector<int> dp(amount + 1, 0);
        dp[0] = 1;
        for (int i = 0; i < coins.size(); i++) { // 遍历物品
            for (int j = coins[i]; j <= amount; j++) { // 遍历背包
                dp[j] += dp[j - coins[i]];
            }
        }
        return dp[amount];
    }
};
```

## ****377. 组合总和 Ⅳ(排列总和)**

**[力扣题目链接(opens new window)](https://leetcode-cn.com/problems/combination-sum-iv/)**

难度：中等

给定一个由正整数组成且不存在重复数字的数组，找出和为给定目标正整数的组合的个数。

示例:

nums = [1, 2, 3] target = 4

所有可能的组合为： (1, 1, 1, 1) (1, 1, 2) (1, 2, 1) (1, 3) (2, 1, 1) (2, 2) (3, 1)

顺序不同的序列被视作不同的组合。

1. 确定dp数组以及下标的含义

**dp[i]: 凑成目标正整数为i的排列个数为dp[i]**

2. 确定递推公式

求装满背包有几种方法，递推公式一般都是:dp[i] += dp[i - nums[j]]

3. dp数组如何初始化

dp[0]要初始化为1

4. 确定遍历顺序

个数可以不限使用，说明这是一个完全背包。

**如果求组合数就是外层for循环遍历物品，内层for遍历背包**。

**如果求排列数就是外层for遍历背包，内层for循环遍历物品**。

5.举例来推导dp数组

我们再来用示例中的例子推导一下：

![https://img-blog.csdnimg.cn/20210131174250148.jpg](https://img-blog.csdnimg.cn/20210131174250148.jpg)

C++代码如下：

```cpp
class Solution {
public:
    int combinationSum4(vector<int>& nums, int target) {
        vector<int> dp(target + 1, 0);
        dp[0] = 1;
        for (int i = 0; i <= target; i++) { // 遍历背包
            for (int j = 0; j < nums.size(); j++) { // 遍历物品
                if (i - nums[j] >= 0 && dp[i] < INT_MAX - dp[i - nums[j]]) {
                    dp[i] += dp[i - nums[j]];
                }
            }
        }
        return dp[target];
    }
};
```

## ****70. 爬楼梯****

**[力扣题目链接(opens new window)](https://leetcode-cn.com/problems/climbing-stairs/)**

假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

示例 1： 输入： 2 输出： 2 解释： 有两种方法可以爬到楼顶。

1. 1 阶 + 1 阶
2. 2 阶

示例 2： 输入： 3 输出： 3 解释： 有三种方法可以爬到楼顶。

1. 1 阶 + 1 阶 + 1 阶
2. 1 阶 + 2 阶
3. 2 阶 + 1 阶

**1.确定dp数组以及下标的含义**

**dp[i]：爬到有i个台阶的楼顶，有dp[i]种方法**。

**2. 确定递推公式**

dp[i] += dp[i - j]

3. dp数组如何初始化

dp[0] 一定为1,非0的dp[i]初始化为0

4.确定遍历顺序

这是背包里求排列问题，即：**1、2 步 和 2、1 步都是上三个台阶，但是这两种方法不一样！**

所以需将target放在外循环，将nums放在内循环。

```cpp
class Solution {
public:
    int climbStairs(int n) {
        vector<int> dp(n + 1, 0);
        dp[0] = 1;
        for (int i = 1; i <= n; i++) { // 遍历背包：背包容量---楼梯数量
            for (int j = 1; j <= 2; j++) { // 遍历物品：物品大小，爬一层，爬两层
                if (i - j >= 0) dp[i] += dp[i - j];
            }
        }
        return dp[n];
    }
};
```

## ****322. 零钱兑换****

**[力扣题目链接(opens new window)](https://leetcode-cn.com/problems/coin-change/)**

给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

你可以认为每种硬币的数量是无限的。

示例 1： 输入：coins = [1, 2, 5], amount = 11 输出：3 解释：11 = 5 + 5 + 1

示例 2： 输入：coins = [2], amount = 3 输出：-1

1. 确定dp数组以及下标的含义

**dp[j]：凑足总额为j所需钱币的最少个数为dp[j];**

2. 确定递推公式

dp[j] = min(dp[j - coins[i]] + 1, dp[j]);

**3.dp数组如何初始化**

金额为0所需钱币的个数一定是0，那么dp[0] = 0;

考虑到递推公式的特性，dp[j]必须初始化为一个最大的数，否则就会在min(dp[j - coins[i]] + 1, dp[j])比较的过程中被初始值覆盖。

所以下标非0的元素都是应该是最大值。

4. 确定遍历顺序

**那么钱币有顺序和没有顺序都可以，都不影响钱币的最小个数**

**如果求组合数就是外层for循环遍历物品，内层for遍历背包**。

**如果求排列数就是外层for遍历背包，内层for循环遍历物品**。

**所以本题的两个for循环的关系是：外层for循环遍历物品，内层for遍历背包或者外层for遍历背包，内层for循环遍历物品都是可以的！**

本题钱币数量可以无限使用，那么是完全背包。所以遍历的内循环是正序。

5.举例推导dp数组

以输入：coins = [1, 2, 5], amount = 5为例

![https://img-blog.csdnimg.cn/20210201111833906.jpg](https://img-blog.csdnimg.cn/20210201111833906.jpg)

以上分析完毕，C++ 代码如下：

```cpp
// 版本一
class Solution {
public:
    int coinChange(vector<int>& coins, int amount) {
        vector<int> dp(amount + 1, INT_MAX);
        dp[0] = 0;
        for (int i = 0; i < coins.size(); i++) { // 遍历物品
            for (int j = coins[i]; j <= amount; j++) { // 遍历背包
                if (dp[j - coins[i]] != INT_MAX) { // 如果dp[j - coins[i]]是初始值则跳过
                    dp[j] = min(dp[j - coins[i]] + 1, dp[j]);
                }
            }
        }
        if (dp[amount] == INT_MAX) return -1;
        return dp[amount];
    }
};

```

对于遍历方式遍历背包放在外循环，遍历物品放在内循环也是可以的，我就直接给出代码了

```cpp
// 版本二
class Solution {
public:
    int coinChange(vector<int>& coins, int amount) {
        vector<int> dp(amount + 1, INT_MAX);
        dp[0] = 0;
        for (int i = 1; i <= amount; i++) {  // 遍历背包
            for (int j = 0; j < coins.size(); j++) { // 遍历物品
                if (i - coins[j] >= 0 && dp[i - coins[j]] != INT_MAX ) {
								//dp[i-coins[j]]!=INT_MAX：保证dp[i-coins[j]]+1不溢出
                    dp[i] = min(dp[i - coins[j]] + 1, dp[i]);
                }
            }
        }
        if (dp[amount] == INT_MAX) return -1;
        return dp[amount];
    }
};
```

## ****279.完全平方数****

**[力扣题目链接(opens new window)](https://leetcode-cn.com/problems/perfect-squares/)**

给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。

给你一个整数 n ，返回和为 n 的完全平方数的 最少数量 。

完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。

示例 1： 输入：n = 12 输出：3 解释：12 = 4 + 4 + 4

示例 2： 输入：n = 13 输出：2 解释：13 = 4 + 9

1. 确定dp数组（dp table）以及下标的含义

**dp[j]：和为j的完全平方数的最少数量为dp[j]**

1. 确定递推公式

dp[j] 可以由dp[j - i * i]推出， dp[j - i * i] + 1 便可以凑成dp[j]。

**dp[j] = min(dp[j - i * i] + 1, dp[j]);**

3.dp数组如何初始化

dp[0]表示 和为0的完全平方数的最小数量，那么dp[0]一定是0。

**所以非0下标的dp[j]一定要初始为最大值，这样dp[j]在递推的时候才不会被初始值覆盖。**

4. 确定遍历顺序

如果求**组合数**就是外层for循环遍历**物品**，内层for遍历背包。

如果求**排列数**就是外层for**遍历背包**，内层for循环遍历物品。

5. 举例推导dp数组

已输入n为5例，dp状态图如下：

![https://img-blog.csdnimg.cn/20210202112617341.jpg](https://img-blog.csdnimg.cn/20210202112617341.jpg)

C++代码如下：

```cpp
// 版本一
class Solution {
public:
    int numSquares(int n) {
        vector<int> dp(n + 1, INT_MAX);
        dp[0] = 0;
        for (int i = 0; i <= n; i++) { // 遍历背包
            for (int j = 1; j * j <= i; j++) { // 遍历物品
                dp[i] = min(dp[i - j * j] + 1, dp[i]);
            }
        }
        return dp[n];
    }
};

```

同样我在给出先遍历物品，在遍历背包的代码，一样的可以AC的。

```cpp
// 版本二
class Solution {
public:
    int numSquares(int n) {
        vector<int> dp(n + 1, INT_MAX);
        dp[0] = 0;
        for (int i = 1; i * i <= n; i++) { // 遍历物品
            for (int j = 1; j <= n; j++) { // 遍历背包
                if (j - i * i >= 0) {
                    dp[j] = min(dp[j - i * i] + 1, dp[j]);
                }
            }
        }
        return dp[n];
    }
};
```

## ****139.单词拆分****

**[力扣题目链接(opens new window)](https://leetcode-cn.com/problems/word-break/)**

给定一个非空字符串 s 和一个包含非空单词的列表 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。

说明：

拆分时可以重复使用字典中的单词。

你可以假设字典中没有重复的单词。

示例 1： 输入: s = "leetcode", wordDict = ["leet", "code"] 输出: true 解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。

1. 确定dp数组以及下标的含义

**dp[i] : 字符串长度为i的话，dp[i]为true，表示可以拆分为一个或多个在字典中出现的单词**。

2. 确定递推公式

确定dp[j] 是true，且 [j, i] 这个区间的子串出现在字典里，那么dp[i]一定是true。（j < i ）

if([j, i] 这个区间的子串出现在字典里 && dp[j]是true) 那么 dp[i] = true

3. dp数组如何初始化

dp[0]一定要为true,dp[0]表示如果字符串为空的话，说明出现在字典里。

4.确定遍历顺序

题目中说是拆分为一个或多个在字典中出现的单词，所以这是完全背包。

本题最终要求的是是否都出现过，所以对出现单词集合里的元素是组合还是排列，并不在意！

5.举例推导dp[i]

以输入: s = "leetcode", wordDict = ["leet", "code"]为例，dp状态如图：

![https://img-blog.csdnimg.cn/20210202162652727.jpg](https://img-blog.csdnimg.cn/20210202162652727.jpg)

C++代码如下：

```cpp
class Solution {
public:
    bool wordBreak(string s, vector<string>& wordDict) {
        unordered_set<string> wordSet(wordDict.begin(), wordDict.end());
        vector<bool> dp(s.size() + 1, false);
        dp[0] = true;
        for (int i = 1; i <= s.size(); i++) {   // 遍历背包
            for (int j = 0; j < i; j++) {       // 遍历物品
                string word = s.substr(j, i - j); //substr(起始位置，截取的个数)
                if (wordSet.find(word) != wordSet.end() && dp[j]) {
                    dp[i] = true;
                }
            }
        }
        return dp[s.size()];
    }
};
```

# 多重背包

## 概述


🪁 01背包：每个物品只有一件

🪁 完全背包：每个物品无限个

🪁 多重背包：每个物品有限个

背包最大重量为10。

物品为：

|  | 重量 | 价值 | 数量 |
| --- | --- | --- | --- |
| 物品0 | 1 | 15 | 2 |
| 物品1 | 3 | 20 | 3 |
| 物品2 | 4 | 30 | 2 |

问背包能背的物品最大价值是多少？

和如下情况有区别么？

|  | 重量 | 价值 | 数量 |
| --- | --- | --- | --- |
| 物品0 | 1 | 15 | 1 |
| 物品0 | 1 | 15 | 1 |
| 物品1 | 3 | 20 | 1 |
| 物品1 | 3 | 20 | 1 |
| 物品1 | 3 | 20 | 1 |
| 物品2 | 4 | 30 | 1 |
| 物品2 | 4 | 30 | 1 |

毫无区别，这就转成了一个01背包问题了，且每个物品只用一次。

这种方式来实现多重背包的代码如下：

```cpp
void test_multi_pack() {
    vector<int> weight = {1, 3, 4};
    vector<int> value = {15, 20, 30};
    vector<int> nums = {2, 3, 2};
    int bagWeight = 10;
    for (int i = 0; i < nums.size(); i++) {
        while (nums[i] > 1) { // nums[i]保留到1，把其他物品都展开
            weight.push_back(weight[i]);
            value.push_back(value[i]);
            nums[i]--;
        }
    }

    vector<int> dp(bagWeight + 1, 0);
    for(int i = 0; i < weight.size(); i++) { // 遍历物品
        for(int j = bagWeight; j >= weight[i]; j--) { // 遍历背包容量
            dp[j] = max(dp[j], dp[j - weight[i]] + value[i]);
        }
        for (int j = 0; j <= bagWeight; j++) {
            cout << dp[j] << " ";
        }
        cout << endl;
    }
    cout << dp[bagWeight] << endl;

}
int main() {
    test_multi_pack();
}

```

- 时间复杂度：O(m × n × k)，m：物品种类个数，n背包容量，k单类物品数量

也有另一种实现方式，就是把每种商品遍历的个数放在01背包里面在遍历一遍。

代码如下：（详看注释）

```cpp
void test_multi_pack() {
    vector<int> weight = {1, 3, 4};
    vector<int> value = {15, 20, 30};
    vector<int> nums = {2, 3, 2};
    int bagWeight = 10;
    vector<int> dp(bagWeight + 1, 0);

    for(int i = 0; i < weight.size(); i++) { // 遍历物品
        for(int j = bagWeight; j >= weight[i]; j--) { // 遍历背包容量
            // 以上为01背包，然后加一个遍历个数
            for (int k = 1; k <= nums[i] && (j - k * weight[i]) >= 0; k++) { // 遍历个数
                dp[j] = max(dp[j], dp[j - k * weight[i]] + k * value[i]);
            }
        }
        // 打印一下dp数组
        for (int j = 0; j <= bagWeight; j++) {
            cout << dp[j] << " ";
        }
        cout << endl;
    }
    cout << dp[bagWeight] << endl;
}
int main() {
    test_multi_pack();
}
```