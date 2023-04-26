---
title: STL Algorithms
article: true
date: 2023-04-14
category:
  - Cplus
tag:
  - 算法
  - Cplus
order: 
icon: 🧑
---

::: tip
STL Algorithms
:::
# STL Algorithms

# for_each()


🪁 **The simplest algorithm is for_each(), which just applies an operation to each element of a sequence:**



```cpp
f=for_each(b,e ,f) Do f(x) for each x in [b:e); return f
'''
		**void increment_all(vector<int>& v) // increment each element of v
		{
		for_each(v.begin(),v.end(), [](int& x) {++x;});
		}
'''
```

# count()

```cpp
x=count(b,e,v) //x is the number of elements ∗p in [b:e) such that v==∗p
x=count_if(b,e,v,f) //x is the number of elements ∗p in [b:e) such that f(∗p)
		void f(const string& s)
		{
			auto n_space = count(s.begin(),s.end(),' ');
			auto n_whitespace = count_if(s.begin(),s.end(),isspace);
			// ...
			}

```

# find()


🪁 **The find() family of algorithms do linear searches for some element or predicate match:**



```cpp
p=find(b,e,v) //p points to the first element in [b:e) such that ∗p==v
p=find_if(b,e,f) //p points to the first element in [b:e) such that f(∗p)
p=find_if_not(b,e,f) //p points to the first element in [b:e) such that !f(∗p)
p=find_first_of(b,e ,b2,e2) //p points to the first element in [b:e) such that ∗p==∗qfor some q in [b2:e2)
p=find_first_of(b,e ,b2,e2,f) //p points to the first element in [b:e) such that f(∗p,∗q)for some q in [b2:e2)
p=adjacent_find(b,e) //p points to the first element in [b:e) such that ∗p==∗(p+1)
p=adjacent_find(b,e,f) //p points to the first element in [b:e) such that f(∗p,∗(p+1))
p=find_end(b,e,b2,e2) //p points to the last ∗p in [b:e) such that ∗p==∗q foran element ∗q in [b2:e2)
p=find_end( b,e,b2,e2,f) //p points to the last ∗p in [b:e) such that f(∗p,∗q) foran element ∗q in [b2:e2)
		void f(const string& s)
		{
		auto p_space = find(s.begin(),s.end(),' ');
		auto p_whitespace = find_if(s.begin(),s.end(), isspace);
		// ...
		}


		array<int> x = {1,3,4 };
		array<int> y = {0,2,3,4,5};
		void f()
		{
		auto p = find_first_of(x.begin(),x.end(),y.begin(),y.end); // p = &x[1]
		auto q = find_first_of(p+1,x.end(),y.begin(),y.end()); // q = &x[2]
		}

```

# equal() and mismatch()


🪁 **The equal() and mismatch() algorithms compare pairs of sequences:**



```cpp
equal(b,e,b2) //Is v==v2 for all corresponding elements of[b:e) and [b2:b2+(eïb))?
equal(b,e,b2,f) //Is f(v,v2) for all corresponding elements of[b:e) and [b2:b2+(eïb))?
pair(p1,p2)=mismatch(b,e ,b2) //p1 points to the first element in [b:e) andp2 points to the first element in [b2:b2+(eïb))such that !(∗p1==∗p2) or p1==e
pair(p1,p2)=mismatch(b,e ,b2,f) //p1 points to the first element in [b:e) andp2points to the first element in [b2:b2+(eïb))such that !f(∗p1,∗p2) or p1==e
		template<class In, class In2, class Pred = equal_to<Value_type<In>>>
		pair<In, In2> mismatch(In first, In last, In2 first2, Pred p ={})
		{
		while (first != last && p(∗first,∗first2)) {
		++first;
		++first2;
		}
		return {first,first2};
		}


```

# search()


🪁 **The search() and search_n() algorithms find one sequence as a subsequence in another:**



```cpp
p=search(b,e ,b2,e2) //p points to the first ∗p in [b:e) such that[p:p+(eïb)) equals [b2:e2)
p=search(b.e ,b2,e2,f) //p points to the first ∗p in [b:e) such that[p:p+(eïb)) equals [b2:e2), using f for element comparison
p=search_n(b,e ,n,v) //p points to the first element of [b:e) such thateach element of [p:p+n) has the value v
p=search_n(b,e ,n,v,f) //p points to the first element of [b:e) such thatfor each element ∗q in [p:p+n) we hav e f(∗p,v)

		string quote {"Why waste time learning, when ignorance is instantaneous?"};
		bool in_quote(const string& s)
		{
		auto p = search(quote .begin(),quote.end(),s.begin(),s.end()); // find s in quote
		return p!=quote.end();
		}
		void g()
		{
		bool b1 = in_quote("learning"); // b1 = true
		bool b2 = in_quote("lemming"); // b2 = false
		}

```

# transform


🪁 **The modifying algorithms (also called mutating sequence algorithms) can (and often do) modify elements of their argument sequences.**



```cpp
p=transform(b,e ,out,f) //Apply ∗q=f(∗p1) to every ∗p1 in [b:e), writing tothe corresponding ∗q in [out:out+(eïb)); p=out+(eïb)
p=transform(b,e ,b2,out,f) //Apply ∗q=f(∗p1,∗p2) to every element in ∗p1 in [b:e) andthe corresponding ∗p2 in [b2:b2+(eïb)), writing tothe corresponding ∗q in [out:out+(eïb)); p=out+(eïb)
	
		void toupper(string& s) // remove case
		{
		transform(s.begin(),s.end(),s.begin(),toupper);
		}

```

# copy()


🪁 **The copy() family of algorithms copy elements from one sequence into another. The following sections list versions of copy() combined with other algorithms, such as replace_copy()**


```cpp
p=copy(b,e ,out) //Copy all elements in [b:e) to [out:p); p=out+(eïb)
p=copy_if(b,e ,out,f) //Copy elements x in [b:e) for which f(x) to [out:p)
p=copy_n(b,n,out) //Copy the first n elements in [b:b+n) to [out:p); p=out+n
p=copy_backward(b,e ,out) //Copy all elements in [b:e) to [out:p),starting with its last element; p=out+(eïb)
p=move(b,e ,out) //Move all elements in [b:e) to [out:p); p=out+(eïb)
p=move_backward(b,e ,out) //Move all elements in [b:e) to [out:p),starting with its last element; p=out+(eïb)

		void f(const vector<char>& vs, vector<char>& v)
		{
		copy(vs.begin(),vs.end(),v.begin()); // might overwr ite end of v
		copy(vs.begin(),vs.end(),back_inser ter(v)); // add elements from vs to end of v
		}


```

# unique()


🪁 **The unique() algorithm removes adjacent duplicate elements from a sequence:**



```cpp
p=unique(b,e) //Move elements in [b:e) such that [b:p) has no adjacent duplicates
p=unique(b,e,f) //Move elements in [b:e) such that [b:p) has no adjacent duplicates;f(∗p,∗(p+1)) defines ‘‘duplicate’’
p=unique_copy(b,e ,out) //Copy [b:e) to [out:p); don’t copy adjacent duplicates
p=unique_copy(b,e ,out,f) //Copy [b:e) to [out:p); don’t copy adjacent duplicates;f(∗p,∗(p+1)) defines ‘‘duplicate’’
		void f(list<string>& ls, vector<string>& vs)
		{
		ls.sort(); // list sort (§31.4.2)
		unique_copy(ls.begin(),ls.end(),back_inser ter(vs));
		}

		void bad(vector<string>& vs) // warning: doesn’t do what it appears to do!
		{
		sort(vs.begin(),vs.end()); // sor t vector
		unique(vs.begin(),vs.end()); // eliminate duplicates (no it doesn’t!)
		}

		int main()
		{
		string s ="abbcccde";
		auto p = unique(s.begin(),s.end());
		cout << s << ' ' << pïs.begin() << '\n';//abcdecde 5
		}

		template<class C>
		void eliminate_duplicates(C& c)
		{
		sort(c.begin(),c.end()); // sor t
		auto p = unique(c.begin(),c.end()); // compact
		c.erase(p,c.end()); // shrink
		}

```

# remove() and replace()

🪁 **The remove() algorithm ‘‘removes’’ elements to the end of a sequence:**



```cpp
p=remove(b,e ,v) //Remove elements with value v from [b:e),such that [b:p) becomes the elements for which !(∗q==v)
p=remove_if(b,e ,v,f) //Remove elements ∗q from [b:e),such that [b:p) becomes the elements for which !f(∗q)
p=remove_copy(b,e ,out,v) //Copy elements from [b:e) for which !(∗q==v) to [out:p)
p=remove_copy_if(b,e ,out,f) //Copy elements from [b:e) for which !f(∗q) to [out:p)reverse(b,e) Reverse the order of elements in [b:e)
p=reverse_copy(b,e ,out) //Copy [b:e) into [out:p) in rev erse order

replace(b,e,v,v2) //Replace elements ∗p in [b:e) for which ∗p==v with v2
replace_if(b,e,f,v2) //Replace elements ∗p in [b:e) for which f(∗p) with v2
p=replace_copy(b,e ,out,v,v2) //Copy [b:e) to [out:p),replacing elements for which ∗p==v with v2
p=replace_copy_if(b,e ,out,f,v2) //Copy [b:e) to [out:p),replacing elements for which f(∗p,v) with v2
		string s {"∗CamelCase∗IsUgly∗"};
		cout << s << '\n'; // *CamelCase*IsUgly*
		auto p = remove(s.begin(),s.end(),'∗');
		copy(s.begin(),p,ostream_iterator<char>{cout}); // CamelCaseIsUgly
		cout << s << '\n'; // CamelCaseIsUglyly*

```

# **rotate(), random_shuffle(), and partition()**


🪁 **The rotate(), random_shuffle(), and partition() algorithms provide systematic ways of moving elements around in a sequence:**



```cpp
p=rotate(b,m,e) //Left-rotate elements: treat [b:e) as a circlewith the first element right after the last;move ∗(b+i) to ∗((b+(i+(eïm))%(eïb));note: ∗b moves to ∗m; p=b+(eïm)
p=rotate_copy(b,m,e ,out) //Copy [b:e) into a rotated sequence [out:p)

random_shuffle(b,e) //Shuffle elements of [b:e), usingthe default random number generator
random_shuffle(b,e,f) //Shuffle elements of [b:e), usingthe random number generator f
shuffle(b,e,f) //Shuffle elements of [b:e), usingthe uniform random number generator f

		void f(deque<Card>& dc, My_rand& r)
		{
		random_shuffle(dc.begin(),dc.end(),r);
		// ...
		}

p=partition(b,e,f) //Place elements for which f(∗p1) in [b:p)and other elements in [p:e)
p=stable_par tition(b,e,f) //Place elements for which f(∗p1) in [b:p)and other elements in [p:e);preserve relative order
pair(p1,p2)=partition_copy(b,e ,out1,out2,f) //Copy elements of [b:e) for which f(∗p)into [out1:p1) and elements of [b:e)for which !f(∗p) into [out2:p2)
p=partition_point(b,e,f) //For [b:e) p is the pointsuch that all_of(b,p,f) and none_of(p,e,f)
is_partitioned(b,e,f) //Does every element of [b:e) for which f(∗p)precede every element for which !f(∗p)?
```

# Permutations


🪁 **x is true if the next_∗ operation succeeded, otherwise false,Permutations are used to generate combinations of elements of a sequence. For example, the permutations of abc are acb, bac, bca, cab, and cba.**


```cpp
x=next_permutation(b,e) //Make [b:e) the next permutation in lexicographical order
x=next_permutation(b,e ,f) //Make [b:e) the next permutation, using f for comparison
x=prev_permutation(b,e) //Make [b:e) the previous permutation in lexicographical order
x=prev_permutation(b,e ,f) //Make [b:e) the previous permutation, using f for comparison
is_permutation(b,e ,b2) //Is there a permutation of [b2:b2+(eïb)) that compares equalto [b,e)?
is_permutation(b,e ,b2,f) //Is there a permutation of [b2:b2+(eïb)) that compares equalto [b,e), using f(∗p,∗q) as the element comparison?
		vector<char> v {'a','b','c'};
		while(next_permutation(v.begin(),v.end()))
		cout << v[0] << v[1] << v[2] << ' ';

```

**Similarly, the return value for prev_permutation() is false if [b:e) already contains the first permutation (abc in the example); in that case, it returns the last permutation (cba in the example).**

# fill()


🪁 **The fill() family of algorithms provide ways of assigning to and initializing elements of a sequence**



```cpp
fill(b,e,v) //Assign v to each element of [b:e)
p=fill_n(b,n,v) //Assign v to each element of [b:b+n); p=b+n
generate(b,e ,f) //Assign f() to each element of [b:e)
p=generate_n(b,n,f) //Assign f() to each element of [b:b+n); p=b+n

uninitialized_fill(b,e,v) //Initialize each element in [b:e) with v
p=uninitialized_fill_n(b,n,v) //Initialize each element in [b:b+n) with v; p=b+n
p=uninitialized_copy(b,e ,out) //Initialize each element of [out:out+(eïb)); p=b+nwith its corresponding element from [b:e)
p=uninitialized_copy_n(b,n,out) //Initialize each element of [out:out+n)with its corresponding element from [b:b+n); p=b+n
		int v1[900];
		array<int,900> v2;
		vector v3;
		void f()
		{
		fill(begin(v1),end(v1),99); // set all elements of v1 to 99
		generate(begin(v2),end(v2),Randint{}); // set to random values (§40.7)
		// output 200 random integers in the interval [0:100):
		generate_n(ostream_iterator<int>{cout},200,Urand{100}); // see §40.7
		fill_n(back_inser ter{v3},20,99); // add 20 elements with the value 99 to v3
		}

		vector<string> vs {"Breugel","El Greco","Delacroix","Constable"};
		vector<string> vs2 {"Hals","Goya","Renoir","Turner"};
		copy(vs.begin(),vs.end(),vs2.begin()); // OK
		uninitialized_copy(vs.begin(),vs.end(),vs2.begin()); // leaks!

```

# swap()


🪁 **A swap() algorithm exchanges the values of two objects:**



```cpp
swap(x,y) //Exchange the values of x and y
p=swap_rang es(b,e,b2) //swap(v,v2) corresponding elements in [b:e) and [b2,b2+(eïb))
iter_swap(p,q) //swap(∗p,∗q)

		void use(vector<int>& v, int∗ p)
		{
		swap_rang es(v.begin(),v.end(),p); // exchange values
		}

```

# Sorting and Searching


🪁 **Sorting and searching in sorted sequences are fundamental, and the needs of programmers are quite varied. Comparison is by default done using the < operator, and equivalence of values a and b is determined by !(a<b)&&!(b<a) rather than requiring operator ==.**



```cpp
sort(b,e) //Sort [b:e)
sort(b,e,f) //Sort [b:e), using f(∗p,∗q) as the sorting criterion

stable_sor t(b,e) //Sort [b:e) maintaining order of equal elements
stable_sor t(b,e,f) //Sort [b:e), using f(∗p,∗q) as the sorting criterion,maintaining order of equal elements
partial_sort(b,m,e) //Sort enough of [b:e) to get [b:m) into order;[m:e) need not be sorted
partial_sort(b,m,e,f) //Sort enough of [b:e) to get [b:m) into order, usingf(∗p,∗q) as the sorting criterion; [m:e) need not be sorted
p=partial_sort_copy(b,e ,b2,e2) //Sort enough of [b:e) to copy the first e2ïb2 elementsinto [b2:e2);p is the smaller of b2 and b2+(eïb)
p=partial_sort_copy(b,e ,b2,e2,f) //Sort enough of [b:e) to copy the first e2ïb2 elementsinto [b2:e2), using f for comparison;p is the smaller of b2 and b2+(eïb)
is_sorted(b,e) //Is [b:e) sorted?
is_sorted(b,e,f) //Is [b:e) sorted, using f for comparison?
p=is_sorted_until(b,e) //p points to the first element in [b:e) that is not in order
p=is_sorted_until(b,e,f) //p points to the first element in [b:e) that is not in order,using f for comparison
nth_element(b,n,e) //∗n is in the position it would be in if [b:e) was sorted;elements in [b:n) are <= ∗n and ∗n <= elements in [n:e)
nth_element(b,n,e,f) //∗n is in the position it would be in if [b:e) was sorted;elements in [b:n) are <= ∗n and ∗n <= elements in [n:e),using f for comparison

		template<typename List>
		void sort_list(List& lst)
		{
		vector v {lst.begin(),lst.end()}; // initialize from lst
		sort(v); // use container sort (§32.2)
		copy(v,lst);
		}

		void f(const vector<Book>& sales) // find the top ten books
		{
		vector<Book> bestsellers(10);
		partial_sort_copy(sales.begin(),sales.end(),
		bestsellers.begin(),bestsellers.end(),
		[](const Book& b1, const Book& b2) { return b1.copies_sold()>b2.copies_sold(); });
		copy(bestsellers.begin(),bestsellers.end(),ostream_iterator<Book>{cout,"\n"});
		}

		vector<int> v;
		for (int i=0; i<1000; ++i)
		v.push_back(randint(1000)); // §40.7
		constexpr int n = 30;
		nth_element(v.begin(), v.begin()+n, v.end());
		cout << "nth: " << v[n] < '\n';
		for (int i=0; i<n; ++i)
		cout << v[i] << ' ';
		This produces:
		//nth: 24
		//10 8 15 19 21 15 8 7 6 17 21 2 18 8 1 9 3 21 20 18 10 7 3 3 8 11 11 22 22 23

		vector<string> vs = {"Helsinki","Copenhagen","Oslo","Stockholm"};
		vector<char∗> vcs = {"Helsinki","Copenhagen","Oslo","Stockholm"};
		void use()
		{
		sort(vs); // I have defined a range version of sort()
		sort(vcs);
		for (auto& x : vs)
		cout << x << ' '
		cout << '\n';
		for (auto& x : vcs)
		cout << x << ' ';
		
		//This prints:
		//Copenhagen Helsinki Stockholm Oslo
		//Helsinki Copenhagen Oslo Stockholm	
		sort(vcs, [](const char∗ p, const char∗ q){ return strcmp(p,q)<0; });
```

# Binary Search

🪁 **The binary_search() family of algorithms provide binary searches of ordered (sorted) sequences:**



```cpp
p=lower_bound(b,e ,v) //p points to the first occurrence of v in [b:e)
p=lower_bound(b,e ,v,f) //p points to the first occurrence of v in [b:e),using f for comparison
p=upper_bound(b,e,v) p //points to the first value larger than v in [b:e)
p=upper_bound(b,e,v,f) //p points to the first value larger than v in [b:e),using f for comparison
binary_search(b,e ,v) //Is v in the sorted sequence [b:e)?
binary_search(b,e ,v,f) //Is v in the sorted sequence [b:e), using f for comparison?
pair(p1,p2)=equal_range(b,e,v) //[p1,p2) is the subsequence of [b:e) with the value v;basically, a binary search for v
pair(p1,p2)=equal_range(b,e,v,f) //[p1,p2) is the subsequence of [b:e) with the value v,using f for comparison; basically, a binary search for v

		**void f(vector<int>& c)
		{
		if (binary_search(c.begin(),c.end(),7)) { // is 7 in c?
		// ...
		}
		// ...
		}

		void g(vector<int>& c)
		{
		auto p = find(c.begin(),c.end(),7); // probably slow: O(N); c needn’t be sorted
		auto q = lower_bound(c.begin(),c.end(),7); // probably fast: O(log(N)); c must be sorted
		// ...
		}


```

# merge()

🪁 **The merge algorithms combine two ordered (sorted) sequences into one:**



```cpp
p=merge(b,e ,b2,e2,out) //Merge two sorted sequences [b2:e2) and [b:e) into [out:p)
p=merge(b,e ,b2,e2,out,f) //Merge two sorted sequences [b2:e2) and [b:e)into [out,out+p), using f as the comparison
inplace_merge(b,m,e) //Merge two sorted subsequences [b:m) and [m:e)into a sorted sequence [b:e)
inplace_merge(b,m,e ,f) //Merge two sorted subsequences [b:m) and [m:e)into a sorted sequence [b:e), using f as the comparison
		vector<int> v {3,1,4,2};
		list<double> lst {0.5,1.5,2,2.5}; // lst is in order
		sort(v.begin(),v.end()); // put v in order
		vector<double> v2;
		merge(v.begin(),v.end(),lst.begin(),lst.end(),back_inser ter(v2)); // merger v and lst into v2
		for (double x : v2)
		cout << x << ", ";**
//For inserters, see §33.2.2. The output is:
		//0.5, 1, 1.5, 2, 2, 2.5, 3, 4,

```

# Set Algorithms


🪁 **These algorithms treat a sequence as a set of elements and provide the basic set operations. The input sequences are supposed to be sorted and the output sequences are also sorted.**



```cpp
includes(b,e ,b2,e2) //Are all elements of [b:e) also in [b2:e2)?
includes(b,e ,b2,e2,f) //Are all elements of [b:e) also in [b2:e2),using f for comparison?
p=set_union(b,e,b2,e2,out) //Construct a sorted sequence [out:p)of elements that are in either [b:e) or [b2:e2)
p=set_union(b,e,b2,e2,out,f) //Construct a sorted sequence [out:p)of elements that are in either [b:e) or [b2:e2),using f for comparison
p=set_intersection(b,e ,b2,e2,out) //Construct a sorted sequence [out:p)of elements that are in both [b:e) and [b2:e2)
p=set_intersection(b,e ,b2,e2,out,f) //Construct a sorted sequence [out:p)of elements that are in both [b:e) and [b2:e2),using f for comparison
p=set_difference(b,e ,b2,e2,out) //Construct a sorted sequence [out:p)of elements that are in [b:e) but not in [b2:e2)
p=set_difference(b,e ,b2,e2,out,f) //Construct a sorted sequence [out:p)of elements that are in [b:e) but not in [b2:e2),using f for comparison
p=set_symmetric_difference(b,e ,b2,e2,out) //Construct a sorted sequence [out:p)of elements that are in [b:e) or [b2:e2)but not in both
p=set_symmetric_difference(b,e ,b2,e2,out,f) //Construct a sorted sequence [out:p)of elements that are in [b:e) or [b2:e2)but not in both, using f for comparison

			string s1 = "qwertyasdfgzxcvb";
			string s2 = "poiuyasdfg/.,mnb";
			sort(s1.begin(),s1.end()); // the set algorithms require sorted sequences
			sort(s2.begin(),s2.end());
			string s3(s1.size()+s2.siz e(),'∗'); // set aside enough space for the largest possible result
			cout << s3 << '\n';
			auto up = set_union(s1.begin(),s1.end(),s2.begin(),s2.end(),s3.begin());
			cout << s3 << '\n';
			for (auto p = s3.begin(); p!=up; ++p)
			cout << ∗p;
			cout << '\n';
			s3.assign(s1.size()+s2.size(),'+');
			up = set_difference(s1.begin(),s1.end(),s2.begin(),s2.end(),s3.begin());
			cout << s3 << '\n';
			for (auto p = s3.begin(); p!=up; ++p)
			cout << ∗p;
			cout << '\n';
			//This little test produces:
			//∗∗∗∗∗∗∗∗∗∗∗∗∗∗∗∗∗∗∗∗∗∗∗∗∗∗∗∗∗∗∗
			//,./abcdefgimnopqrstuvxyz
			//ceqrtvwxz++++++++++++++++++++++
			//ceqrtvwxz

```

# Heaps


🪁 **A heap is a compact data structure that keeps the element with the highest value first. Think of a heap as a representation of a binary tree. The heap algorithms allow a programmer to treat a random-access sequence as a heap:**



```cpp
make_heap(b,e) //Make [b:e) ready to be used as a heap
make_heap(b,e,f) //Make [b:e) ready to be used as a heap, using f for comparison
push_heap(b,e) //Add ∗(eï1) to the heap [b:eï1); afterward [b:e) is a heap
push_heap(b,e,f) //Add an element to the heap [b:eï1), using f for comparison
pop_heap(b,e) //Remove ∗(eï1) from the heap [b:e); afterward, [b:eï1) is a heap
pop_heap(b,e,f) //Remove element from the heap [b:e), using f for comparison
sort_heap(b,e) //Sort the heap [b:e)
sort_heap(b,e,f) //Sort the heap [b:e), using f for comparison
is_heap(b,e) //Is [b:e) a heap?
is_heap(b,e,f) //Is [b:e) a heap, using f for comparison?
p=is_heap_until(b,e) //p is the largest p such that [b:p) is a heap
p=is_heap_until(b,e,f) //p is the largest p such that [b:p) is a heap, using f for comparison

		string s = "herewego";
		make_heap(s.begin(),s.end()); // rogheeew
		pop_heap(s.begin(),s.end()); // rogheeew
		pop_heap(s.begin(),s.end()ï1); // ohgeeerw
		pop_heap(s.begin(),s.end()ï2); // hegeeorw
		∗(s.end()ï3)='f';
		push_heap(s.begin(),s.end()ï2); // hegeefrw
		∗(s.end()ï2)='x';
		push_heap(s.begin(),s.end()ï1); // xeheefge
		∗(s.end()ï1)='y';
		push_heap(s.begin(),s.end()); // yxheefge
		sort_heap(s.begin(),s.end()); // eeefghxy
		reverse(s.begin(),s.end()); // yxhgfeee**

```

# lexicographical_compare()


🪁 **A lexicographical compare is the rule we use to order words in dictionaries**



```cpp
lexicographical_compare(b,e ,b2,e2) //Is [b:e)<[b2:e2)?
lexicographical_compare(b,e ,b2,e2,f) //Is [b:e)<[b2:e2), using f for element comparison?

		string n1 {"10000"};
		string n2 {"999"};
		bool b1 = lexicographical_compare(n1.begin(),n1.end(),n2.begin(),n2.end()); // b1 == true
		n1 = "Zebra";
		n2 = "Aardvark";
		bool b2 = lexicographical_compare(n1.begin(),n1.end(),n2.begin(),n2.end()); // b2 == false

```

# Min and Max

```cpp
x=min(a,b) //x is the smaller of a and b
x=min(a,b,f) //x is the smaller of a and b, using f for comparison
x=min({elem}) //x is the smallest element in {elem}
x=min({elem},f) //x is the smallest element in {elem},using f for the element comparison
x=max(a,b) //x is the larger of a and b
x=max(a,b,f) //x is the larger of a and b, using f for comparison
x=max({elem}) //x is the largest element in {elem}
x=max({elem},f) //x is the largest element in {elem},using f for the element comparison
pair(x,y)=minmax(a,b) //x is min(a,b) and y is max(a,b)
pair(x,y)=minmax(a,b,f) //x is min(a,b,f) and y is max(a,b,f)
pair(x,y)=minmax({elem}) //x is min({elem}) and y is max({elem})
pair(x,y)=minmax({elem},f) //x is min({elem},f) and y is max({elem},f)
p=min_element(b,e) //p points to the smallest element of [b:e) or e
p=min_element(b,e,f) //p points to the smallest element of [b:e) or e,using f for the element comparison
p=max_element(b,e) //p points to the largest element of [b:e) or e
p=max_element(b,e,f) //p points to the largest element of [b:e) or e,using f for the element comparison
pair(x,y)=minmax_element(b,e) //x is min_element(b,e) and y is max_element(b,e)
pair(x,y)=minmax_element(b,e,f) //x is min_element(b,e,f) and y is max_element(b,e,f)

		int x = 7;
		int y = 9;
		++min(x,y); // the result of min(x,y) is a const int&
		++min({x,y}); // error : the result of min({x,y}) is an rvalue (an initializer_list is immutable)

		string s = "Large_Hadron_Collider";
		auto p = minmax_element(s.begin(),s.end(),
		[](char c1,char c2) { return toupper(c1)<toupper(c2); });
		cout << "min==" << ∗(p.first) << ' ' << "max==" << ∗(p.second) << '\n';

```