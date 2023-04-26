---
title: string相关函数
article: true
date: 2023-04-14
category:
  - C plus
tag:
  - 算法
  - C plus
order: 
icon: 🧑
---

::: tip
string相关函数
:::
# string相关函数

# C++ 标准库一共包含 33 个C++ 头文件：
::: tip
**< algorithm >**, < bitset >, < complex >, **< deque >**, < exception >,  < fstream >,  < functional >, < iomanip >, < ios >, < iosfwd >, < iostream >, < istream >, < iterator >,  < limits >,  **< list >**, < locale >, **< map >**, < memory >, < new >, < numeric >, < ostream >, **< queue >, < set >,** < sstream >, < stack >, < stdexcept >, < streambuf >, **< string >**, < strstream >,  < typeinfo >,  < utility >, < valarray >, **< vector >**
:::

# **初始化方式**

```cpp
**The most common variants are also the simplest:**
string s0; // the empty string
string s1 {"As simple as that!"}; // construct from C-style string
string s2 {s1}; // copy constr uctor

**Almost always, the destructor is implicitly invoked.
There is no string constructor that takes only a number of elements:**

string s3 {7}; // error : no string(int)
string s4 {'a'}; // error : no string(char)
string s5 {7,'a'}; // OK: 7 'a's
string s6 {0}; // danger : passing nullptr

**The declaration of s6 shows a mistake sometimes made by programmers used to C-style strings:**
const char∗ p = 0; // set p to ‘‘no string’’
```

# 基本**函数**

```cpp
n=s.size() //n is the number of characters in s
n=s.length() //n=s.size()
n=s.max_size() //n is the largest possible value of s.size()
s.resize(n,c) //Make s.size()==n; added elements get the value c
s.resize(n) //s.resiz e(n,C{})
s.reserve(n) //重新设定字符串的内存空间,nSize大于size时才生效.
n=s.capacity() //s can hold n characters without further allocation
	
	string s1="def";
    string s2="abc";
    s2=s1+s2;//"defabc"
    cout<<s2.size()<<endl;//6
    cout<<s2.capacity()<<endl;//15**

s.clear() Make s empty
s.empty() Is s empty?

```

```cpp
s.front() //s[0]
s.back() //s[s.size()-1]
s.push_back(c) //Append the character c
s.pop_back() //Remove the last character from s: s.erase(s.size()ï1)
s+=x //Append x at the end of s; x can be a character, a string,a C-style string, or an initializer_list<char_type>
s=s1+s2 //Concatenation: optimized version of s=s1; s+=s2;
		
	string s1="def";
    string s2="abc";
    s2=s1+s2;//"defabc"
		
n2=s.copy(s2,n,pos) //s gets the characters from s2[pos:n)]
n2=s.copy(s2,n) //s gets all the characters from s2; n=s.copy(s2,n,0)

s.swap(s2) //Exchange the values of s and s2; noexcept
swap(s,s2) //s.swap(s2)
```

```cpp
getline(in,s,d) //Read characters from in into s until the character,d is encountered; d is removed from in but not appended to s
getline(in,s) //getline(in,s,'\n') where '\n' is widened to match the string’s character type
```

**可以利用vector循环读入**

```cpp
vector<string> lines;
for (string s; getline(cin,s);)
	lines.push_back(s);
```

# 格式转换：


🪁 **stoi(str, 0, 2); //将字符串 str 从 0 位置之后的数字的 2 进制数，转换为十进制**



```cpp
x=stoi(s,p,b) //String to int; x is an integer; read starting with s[0]，if p!=nullptr, ∗p is set to the number of characters used for x;b is the base of the number (between 2 and 36, inclusive)
x=stoi(s,p) //x=stoi(s,p,10); decimal numbers
x=stoi(s) //x=stoi(s,nullptr,10); decimal numbers; don’t report the character count
x=stol(s,p,b) //String to long
x=stoul(s,p,b) //String to unsigned long
x=stoll(s,p,b) //String to long long
x=stoull(s,p,b) //String to unsigned long long
x=stof(s,p) //String to float
x=stod(s,p) //String to double
x=stold(s,p) //String to long double
s=to_string(x) //s is a string representation of x; x must be an integer or floating-point value

		string s = "123.45";
		auto x1 = stoi(s); // x1 = 123
		auto x2 = stod(s); // x2 = 123.45
		auto x5 = stoi(s4); // x5 = 149
		auto x6 = stoi(s4,nullptr,10); // x6 = 149
		auto x7 = stoi(s4,nullptr,8); // x7 = 12=1*(8+4
		auto x8 = stoi(s4,nullptr,16); // x8 = 5279=15+9*16+4*16*16+1*16*16*16

//stoi()函数如果传入的字符串s中含有不是数字的字符，则只会识别到从开头到第一个非法字符之 前，如果第一个字符就是非法字符则会报错
```

# 插入函数

```cpp
s.append(x) //Append x at the end of s; x can be a character, a string,a C-style string, or an initializer_list<char_type>
s.append(b,e) //Append [b:e) at the end of s
s.append(s2,pos,n) //Append s2[pos:pos+n) to the end of s
s.append(p,n) //Append the characters [p:p+n) to the end of s; p is a C-style string
s.append(n,c) //Append n copies of character c to the end of s
s.insert(pos,x) //Insert x before s[pos]; x can be a character, a string,a C-style string, or an initializer_list<char_type>
s.insert(p,c) //Insert c before iterator p
s.insert(p,n,c) //Insert n copies of c before iterator p
insert(p,b,e) //Insert [b:e) before iterator p
s.erase(pos) //Remove trailing characters from s, starting with s[pos];s.size() becomes pos
s.erase(pos,n) //Remove n characters from s, starting with s[pos];s.size() becomes max(pos,s.size()ïn)

		void add_middle(string& s, const string& middle) // add middle name
		{
		auto p = s.find(' ');
		s.insert(p,' '+middle);
		}
		void test()
		{
		string dmr = "Dennis Ritchie";
		add_middle(dmr,"MacAlistair");//Dennis MacAlistair Ritchie
		cout << dmr << '\n';
		}

```

# 替换函数

```cpp
s.replace(pos,n,s2,pos2,n2) //Replace s[pos:pos+n) with s2[pos2:pos2+n2)
s.replace(pos,n,p,n2) //Replace s[pos:pos+n) with [p:p+n2);s2 is a string or a C-style string
s=s.replace(pos,n,s2) //Replace s[pos:pos+n) with s2;s2 is a string or a C-style string
s.replace(pos,n,n2,c) //Replace s[pos:pos+n) with n2 copies of the character c
s.replace(b,e,x) //Replace [b:e) with x; x is a string, a C-style string,or an initializer_list<char_type>
s.replace(b,e,p,n) //Replace [b:e) with [p:p+n)
s.replace(b,e,n,c) //Replace [b:e) with n copies of the character c
s.replace(b,e,b2,e2) //Replace [b:e) with [b2:e2)

		void f()
		{
		string s = "but I have heard it works even if you don't believe in it";
		s.replace(0,4,""); // erase initial "but "
		s.replace(s.find("even"),4,"only");
		s.replace(s.find(" don't"),6,""); // erase by replacing with ""
		assert(s=="I have heard it works only if you believe in it");
		}

```

# 查找函数

```cpp
pos=s.find(x) //Find x in s; pos is the index of the first character found or string::npos
pos=s.find(x,pos2) //pos=find(basic_string(s,pos2)
pos=s.find(p,pos2,n) //pos=s.find(basic_string{p,n},pos2)

pos=s.rfind(x,pos2) //Find x in s[0:pos2); pos is the position of the first characterof the x closest to the end of s or string::npos
pos=s.rfind(x) //pos=s.rfind(p,string::npos)
pos=s.rfind(p,pos2,n) //pos=s.rfind(basic_string{p,n},pos2)

		void f()
		{
		string s {"accdcde"};
		auto i1 = s.find("cd"); // i1==2 s[2]=='c' && s[3]=='d'
		auto i2 = s.rfind("cd"); // i2==4 s[4]=='c' && s[5]=='d'
		}**

```

🪁 **x can be a character, a string, or a C-style string; p is a C-style string. All operations are noexcept.**


```cpp
pos2=s.find_first_of(x,pos) //Find a character from x in s[pos:s.size());pos2 is the position of the first character from xin s[pos:s.size()) or string::npos
pos=s.find_first_of(x) //pos=s.find_first_of(s2,0)
pos2=s.find_first_of(p,pos,n) //pos2=s.find_first_of(pos,basic_string{p,n})
pos2=s.find_last_of(x,pos) //Find a character from x in s[0:pos);pos2 is the position of the character from xclosest to the end of s or string::npos
pos=s.find_last_of(x) //pos=s.find_first_of(s2,0)
pos2=s.find_last_of(p,pos,n) //pos2=s.find_last_of(pos2,basic_string{p,n})
pos2=s.find_first_not_of(x,pos) //Find a character not from x in s[pos:s.size());pos2 is the position of the first character from xnot in s[pos:s.size()) or string::npos
pos=s.find_first_not_of(x) //pos=s.find_first_not_of(s2,0)
pos2=s.find_first_not_of(p,pos,n) //pos2=s.find_first_not_of(pos,basic_string{p,n})
pos2=s.find_last_not_of(x,pos) //Find a character not from x in s[0:pos);pos is the position of the characterfrom x closest to the end of s or string::npos
pos=s.find_last_not_of(x) //pos=s.find_first_not_of(s2,0)
pos2=s.find_last_not_of(p,pos,n) //pos=s.find_last_not_of(pos,basic_string{p,n})


		string s {"accdcde"};
		auto i1 = s.find("cd"); // i1==2 s[2=='c' && s[3]=='d'
		auto i2 = s.rfind("cd"); // i2==4 s[4]=='c' && s[5]=='d'
		auto i3 = s.find_first_of("cd"); // i3==1 s[1]=='c'
		auto i4 = s.find_last_of("cd"); // i4==5 s[5]=='d'
		auto i5 = s.find_first_not_of("cd"); // i5==0 s[0]!='c' && s[0]!='d'
		auto i6 = s.find_last_not_of("cd"); // i6==6 s[6]!='c' && s[6]!='d'**

```

# 截取函数

```cpp
s2=s.substr(pos,n) //s2=basic_string(&s[pos],m) where m=min(s.size()ïn,n)
s2=s.substr(pos) //s2=s.substr(pos,string::npos)
s2=s.substr() //s2=s.substr(0,string::npos)

		void user()
		{
		string s = "Mary had a little lamb";
		string s2 = s.substr(0,4); // s2 == "Mary"
		s2 = "Rose"; // does not change s
		}

```

# 比较函数

```cpp
n=s.compare(s2) //A lexicographical comparison of s and s2;using char_traits<C>::compare() for comparison;n=0 if s==s2; n<0 if s<s2; n>0 if s2>s; noexcept;
n2=s.compare(pos,n,s2) //n2=basic_string{s,pos,n}.compare(s2)
n2=s.compare(pos,n,s2,pos2,n2) //n2=basic_string{s,pos,n}.compare(basic_string{s2,pos2,n2})
n=s.compare(p) //n=compare(basic_string{p});p is a C-style string
n2=s.compare(pos,n,p) //n2=basic_string{s,pos,n}.compare(basic_string{p});p is a C-style string
n2=s.compare(pos,n,p,n2) //n2=basic_string{s,pos,n}.compare(basic_string{p,n2});p is a C-style string
		void f()
		{
		string s = "Mary had a little lamb";
		string s2 = s.substr(0,4); // s2 == "Mary"
		auto i1 = s.compare(s2); // i1 is positive
		auto i2 = s.compare(0,4,s2); // i2==0
		}

```