---
title: 面试问题
article: true
---

# 算法学习
- **二分查找：给定升序数组和目标值，求目标值下标**
    
    ```cpp
    while(letf<=right){
        int mid=left+(right-left)/2;
        if(nums[mid]>target){
            right=mind-1;
        }else if(nums[mid]<target){
            left=mid+1;
        }else{
            return mid;//找到了
        }
    }
    ```
    
- **移除元素：给定一个数组和移除的val,求数组新长度**
    
    ```cpp
    //1.
    for (int i = 0; i < size; i++) {
                if (nums[i] == val) { // 发现需要移除的元素，就将数组集体向前移动一位
                    for (int j = i + 1; j < size; j++) {
                        nums[j - 1] = nums[j];
                    }
                    i--; // 因为下标i以后的数值都向前移动了一位，所以i也向前移动一位
                    size--; // 此时数组的大小-1
                }
            }
    return size;
    //2.
    int slowIndex = 0;//用于表示有多少个不是目标值
            for (int fastIndex = 0; fastIndex < nums.size(); fastIndex++) {
              //快指针持续往前走，慢指针只有和目标值不相等才往前走  
    					if (val != nums[fastIndex]) {//如果不等于，那么
                    nums[slowIndex++] = nums[fastIndex];
                }
    }
    return slowIndex;
    ```
    
- **有序数组平方和：给定一个非递减数组，求每个数字平方和形成的非递减新数组**
    
    ```cpp
    //1.
    for(int i=0;i<nums.size();i++){
    	nums[i]*=nums[i];//先求平方
    }
    sort(nums.begin(),nums.end());//后排序
    
    //2.
    int k = nums.size() - 1;
    for (int i = 0, j = num.size() - 1; i <= j;) { // 注意这里要i <= j，因为最后要处理两个元素
    	//边平方边排序,左边比右边小
    	if(nums[i]*nums[i]<nums[j]*nums[j]){
    			result[k--]=nums[j]//说明最大值右边的
    			j--;右边往前移动
    	}else{
    			result[k--]=nums[i]//说明大值是左边的
    			i++;右边往前移动
    	}
    }
    ```
    
- **长度最小的子数组：给定一个正整数s和一个正整数数组，求大于s的长度最小的子数组**
    
    ```cpp
    int result=INT32_MAX;//由于要比较谁更小，所以要拿一个最大值进行比较
    int sum=0;//子序列的和
    int sublength=0;//子序列长度
    for (int i = 0; i < nums.size(); i++) { // 设置子序列起点为i
    	sum=0;
    	for (int j = i; j < nums.size(); j++) { // 设置子序列终止位置为j
    		sum+=nums[j];//把起点和终点的值都加起来
    		if(sum>s){
    			sublength=j-i+1;
    			result=result<sublength?result:sublength;
    		}
    	}
    }
    return result==INT_MAX32?0:result;//如果还是最大值，那说明没找到，一个循环都没进，所以返回0
    ```
    
- **螺旋数组：给定一个正整数n，生成一个包含 1 到 n^2 所有元素**
    
    ```cpp
    vector<vector<int>> res(n, vector<int>(n, 0)); // 使用vector定义一个二维数组
    int startx=0,starty=0;//每次循环的起点
    int loop=n/2;//确定循环的次数：3--1（中间剩下一个点最后加），4--2
    int mid=n/2;
    int count=1;//给矩阵赋值的函数
    int offset=1;//控制每一圈遍历的长度
    int i,j;
    while (loop --) {
        i = startx;
        j = starty;
        // 模拟填充上行从左到右(左闭右开)
        for (j = starty; j < n - offset; j++) {
    	     res[startx][j] = count++;
         }
       // 模拟填充右侧从上到下(左闭右开)
       // 模拟填充下行从右到左(左闭右开)
       // 模拟填充左侧从下到上(左闭右开)
       // 第二圈开始的时候，起始位置要各自加1， 例如：第一圈起始位置是(0, 0)，第二圈起始位置是(1, 1)
       startx++;
       starty++;
    	// offset 控制每一圈里每一条边遍历的长度
      offset += 1;
    }
    if(n%2) res[mid][mid]=count;//奇数，把中间的值给填上
    return res;
    ```
    
- **反转字符串：将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出**
    
    ```cpp
    for(int i=0;j=s.size()-1;i<s.size()/2;i++,j--){
    	swap(s[i],s[j]);
    }
    void swap(char &s1,char &s2){
    	char tmp=s1;
    	s1=s2;
      s2=tmp;
    }
    ```
    
- **反转字符串：给定一个字符串 s 和一个整数 k,每隔 2k 个字符的前 k 个字符进行反转**
    
    ```cpp
    string reverseStr(string s,int k){
    	for(int i=0;i<s.size();i+=2*k){
    			if(i+k<=s.size()){
    				reverse(s.begin()+i,s.begin()+i+k)
    			}else{
    				reverse(s.begin()+i,s.end());
    			}
    	}
    	return s;
    }
    
    ```
    
- **替换空格：把字符串 s 中的每个空格替换成"%20"**
    
    **扩充数组到每个空格替换成"%20"之后的大小。然后从后向前替换空格，也就是双指针法**
    
    ```cpp
    int count=0;//统计空格个数
    int s_oldsize=s.size();
    for(int i=0;i<s.size();i++){
    	if(s[i]==" ") count++;
    }
    // 扩充字符串s的大小，也就是每个空格替换成"%20"之后的大小
    s.resize(s.size() + count * 2);//因为之前有一个空格，所以加2*count就够了
    int s_newsize=s.size();
    //j<i说明，空格补满了，前面都是字符了
    for(int i=s_newsize-1,j=s_oldsize-1;j<i;i--,j--){
    	if(s[j]!=" ") s[i]=s[j]
    	else{
    		s[i]="0";s[i-1]="2";s[i-2]="%";
    		i=i-2;//因为还有i--，所以-2就够了
    	}		
    }
    
    ```
    
- ****翻转字符串里的单词：****输入: "the sky is blue"，输出: "blue is sky the"
    
    ```cpp
    //移除多余的空格
    void removeExtraSpaces(string& s) {
        for (int i = s.size() - 1; i > 0; i--) {
            if (s[i] == s[i - 1] && s[i] == ' ') {
                s.erase(s.begin() + i);
            }
        }
        // 删除字符串最后面的空格
        if (s.size() > 0 && s[s.size() - 1] == ' ') {
            s.erase(s.begin() + s.size() - 1);
        }
        // 删除字符串最前面的空格
        if (s.size() > 0 && s[0] == ' ') {
            s.erase(s.begin());
        }
    }
    	//反转字符串
     void reverse(string&s,int start,int end){
    		for(int i=start,int j=end;i<j;i++,j--){
    		 swap(s[i],s[j]);
    	}
    }
    
    string reverseWords(string s) {
            removeExtraSpaces(s); //去除多余空格，保证单词之间之只有一个空格，且字符串首尾没空格。
            reverse(s, 0, s.size() - 1);
            int start = 0; //removeExtraSpaces后保证第一个单词的开始下标一定是0。
            for (int i = 0; i <= s.size(); ++i) {
                if (i == s.size() || s[i] == ' ') { //到达空格或者串尾，说明一个单词结束。进行翻转。
                    reverse(s, start, i - 1); //翻转，注意是左闭右闭 []的翻转。
                    start = i + 1; //更新下一个单词的开始下标start
                }
            }
            return s;
        }
    
    ```
    
- **左旋转字符串：给定字符串和数字k，把前k个字符串放到末尾：** 输入: s = "abcdefg", k = 2，输出: "cdefgab"
    
    ```cpp
    
    string reverseLeftWords(string s, int n) {
    	reverse(s.begin(),s.begin()+k);//s = "bacdefg"
    	reverse(s.begin()k+1,s.end());//s="bagfedc"
    	reverse(s.begin(),s.end());//s="cdefgab"
    }
    ```
    
- 深度优先遍历和广度优先遍历的区别
    
    （1）深度优先遍历：对**每一个可能的分支路径深入到不能再深入为止**，而且每个结点只能访问一次。要特别注意的是，二叉树的深度优先遍历比较特殊，可以细分为先序遍历、中序遍历、后序遍历。具体说明如下：
    
    - 先序遍历：对任一子树，先访问根，然后遍历其左子树，最后遍历其右子树。
    - 中序遍历：对任一子树，先遍历其左子树，然后访问根，最后遍历其右子树。
    - 后序遍历：对任一子树，先遍历其左子树，然后遍历其右子树，最后访问根。
    
    （2）广度优先遍历：又叫层次遍历，从上往下对每一层依次访问，在每一层中，从左往右（也可以从右往左）访问结点，访问完一层就进入下一层，直到没有结点可以访问为止。