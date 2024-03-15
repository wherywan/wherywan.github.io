import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,f as l}from"./app-f83986bb.js";const e={},i=l(`<h1 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> rust</h1><h2 id="特征" tabindex="-1"><a class="header-anchor" href="#特征" aria-hidden="true">#</a> 特征</h2><ul><li>Display特征</li></ul><h2 id="类型" tabindex="-1"><a class="header-anchor" href="#类型" aria-hidden="true">#</a> 类型</h2><h3 id="单元类型" tabindex="-1"><a class="header-anchor" href="#单元类型" aria-hidden="true">#</a> 单元类型</h3><p>（）</p><h2 id="gc" tabindex="-1"><a class="header-anchor" href="#gc" aria-hidden="true">#</a> gc</h2><p>变量在离开作用域后，就自动释放其占用的内存：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">{</span></span>
<span class="line"><span style="color:#000000;">    let s = String::from(&quot;hello&quot;); // 从此处起，s 是有效的</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    // 使用 s</span></span>
<span class="line"><span style="color:#000000;">}                                  // 此作用域已结束，</span></span>
<span class="line"><span style="color:#000000;">                                   // s 不再有效，内存被释放</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>与其它系统编程语言的 free 函数相同，Rust 也提供了一个释放内存的函数： drop，但是不同的是，其它语言要手动调用 free 来释放每一个变量占用的内存，</p><p>而 Rust 则在变量离开作用域时，自动调用 drop 函数: 上面代码中，Rust 在结尾的 } 处自动调用 drop。</p><h2 id="所有权和借用" tabindex="-1"><a class="header-anchor" href="#所有权和借用" aria-hidden="true">#</a> 所有权和借用</h2><ul><li>mut关键字，标识是否可变</li><li>&amp;、mut符号的使用 借用不可变所有权、可变所有权</li><li>let 声明变量不可变</li><li>栈和堆</li><li>同一时刻，你只能拥有要么一个可变引用, 要么任意多个不可变引用</li><li>引用必须总是有效的</li></ul><h3 id="copy特征" tabindex="-1"><a class="header-anchor" href="#copy特征" aria-hidden="true">#</a> copy特征</h3><p>实现了 Copy 特征的类型无需所有权转移，可以直接在赋值时进行 数据拷贝，其中 bool 和 u64 类型就实现了 Copy 特征</p><h2 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h2><ul><li>底层是字节数组</li><li>字符串字面量返回的是字符串的地址</li><li>字符串的一些操作是基于原有字符串操作，不同于其他语言</li></ul><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#008000;">//创建的字符串对象</span></span>
<span class="line"><span style="color:#267F99;">String</span><span style="color:#000000;">::</span><span style="color:#795E26;">from</span><span style="color:#000000;">(</span><span style="color:#A31515;">&quot;hello,world&quot;</span><span style="color:#000000;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0000FF;">let</span><span style="color:#000000;"> </span><span style="color:#001080;">s</span><span style="color:#000000;"> = </span><span style="color:#A31515;">&quot;Hello, world!&quot;</span><span style="color:#000000;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0000FF;">let</span><span style="color:#000000;"> </span><span style="color:#001080;">s</span><span style="color:#000000;">: &amp;</span><span style="color:#267F99;">str</span><span style="color:#000000;"> = </span><span style="color:#A31515;">&quot;Hello, world!&quot;</span><span style="color:#000000;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="切片" tabindex="-1"><a class="header-anchor" href="#切片" aria-hidden="true">#</a> 切片</h3><ul><li>在Rust中，切片类型&amp;str是一个对字符串数据的引用，它包含了指向字符串数据的指针和长度信息。当调用.as_str()方法将String转换为&amp;str时，实际上是创建了一个指向原有字符串数据的切片。</li><li>切片操作并不会创建新的字符串对象。它只是创建了一个引用，让我们可以对原始字符串进行部分访问。</li></ul><h3 id="string与-str的转换" tabindex="-1"><a class="header-anchor" href="#string与-str的转换" aria-hidden="true">#</a> string与&amp;str的转换</h3><blockquote><p>&amp;str -&gt; string</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">String::from(&quot;hello,world&quot;)</span></span>
<span class="line"><span style="color:#000000;">&quot;hello,world&quot;.to_string()</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">fn main() {</span></span>
<span class="line"><span style="color:#000000;">    let s = String::from(&quot;hello,world!&quot;);</span></span>
<span class="line"><span style="color:#000000;">    say_hello(&amp;s);</span></span>
<span class="line"><span style="color:#000000;">    say_hello(&amp;s[..]);</span></span>
<span class="line"><span style="color:#000000;">    say_hello(s.as_str());</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">fn say_hello(s: &amp;str) {</span></span>
<span class="line"><span style="color:#000000;">    println!(&quot;{}&quot;,s);</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="存储" tabindex="-1"><a class="header-anchor" href="#存储" aria-hidden="true">#</a> 存储</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">let original_string = String::from(&quot;Hello, world!&quot;);</span></span>
<span class="line"><span style="color:#000000;">let str_reference: &amp;str = original_string.as_str();</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>如何理解original_string和str_reference存放的内容都是指向堆上字符串的地址吗？</p></blockquote><p>original_string和str_reference都存放的是指向堆上字符串数据的地址。不过需要注意的是，original_string拥有该字符串数据的所有权， 而str_reference只是一个引用，它不拥有字符串数据的所有权。</p><h2 id="结构体" tabindex="-1"><a class="header-anchor" href="#结构体" aria-hidden="true">#</a> 结构体</h2><ul><li>把结构体中具有所有权的字段转移出去后，将无法再访问该字段，但是可以正常访问其它的字段。</li></ul><blockquote><p>定义</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">struct User {</span></span>
<span class="line"><span style="color:#000000;">    active: bool,</span></span>
<span class="line"><span style="color:#000000;">    username: String,</span></span>
<span class="line"><span style="color:#000000;">    email: String,</span></span>
<span class="line"><span style="color:#000000;">    sign_in_count: u64,</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个结构体由几部分组成：</p><ul><li>通过关键字 struct 定义</li><li>一个清晰明确的结构体 名称</li><li>几个有名字的结构体 字段</li></ul><blockquote><p>创建</p></blockquote><ul><li>初始化实例时，每个字段都需要进行初始化</li><li>初始化时的字段顺序不需要和结构体定义时的顺序一致</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">    let user1 = User {</span></span>
<span class="line"><span style="color:#000000;">        email: String::from(&quot;someone@example.com&quot;),</span></span>
<span class="line"><span style="color:#000000;">        username: String::from(&quot;someusername123&quot;),</span></span>
<span class="line"><span style="color:#000000;">        active: true,</span></span>
<span class="line"><span style="color:#000000;">        sign_in_count: 1,</span></span>
<span class="line"><span style="color:#000000;">    };</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>简写</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">//若变量同名可以省略</span></span>
<span class="line"><span style="color:#000000;">fn build_user(email: String, username: String) -&gt; User {</span></span>
<span class="line"><span style="color:#000000;">    User {</span></span>
<span class="line"><span style="color:#000000;">        email,</span></span>
<span class="line"><span style="color:#000000;">        username,</span></span>
<span class="line"><span style="color:#000000;">        active: true,</span></span>
<span class="line"><span style="color:#000000;">        sign_in_count: 1,</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>更新</p></blockquote><ul><li>.. 语法表明凡是我们没有显式声明的字段，全部从 user1 中自动获取。需要注意的是 ..user1 必须在结构体的尾部使用。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">  let user2 = User {</span></span>
<span class="line"><span style="color:#000000;">        active: user1.active,</span></span>
<span class="line"><span style="color:#000000;">        username: user1.username,</span></span>
<span class="line"><span style="color:#000000;">        email: String::from(&quot;another@example.com&quot;),</span></span>
<span class="line"><span style="color:#000000;">        sign_in_count: user1.sign_in_count,</span></span>
<span class="line"><span style="color:#000000;">    };</span></span>
<span class="line"><span style="color:#000000;">  let user2 = User {</span></span>
<span class="line"><span style="color:#000000;">        email: String::from(&quot;another@example.com&quot;),</span></span>
<span class="line"><span style="color:#000000;">        ..user1</span></span>
<span class="line"><span style="color:#000000;">    };</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="单元结构体" tabindex="-1"><a class="header-anchor" href="#单元结构体" aria-hidden="true">#</a> 单元结构体</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">struct AlwaysEqual;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">let subject = AlwaysEqual;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">// 我们不关心 AlwaysEqual 的字段数据，只关心它的行为，因此将它声明为单元结构体，然后再为它实现某个特征</span></span>
<span class="line"><span style="color:#000000;">impl SomeTrait for AlwaysEqual {</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="结构体数据的所有权" tabindex="-1"><a class="header-anchor" href="#结构体数据的所有权" aria-hidden="true">#</a> 结构体数据的所有权</h3><p>在之前的 User 结构体的定义中,我们使用了自身拥有所有权的 String 类型而不是基于引用的 &amp;str 字符串切片类型。这是一个有意而为之的选择：</p><p>因为我们想要这个结构体拥有它所有的数据，而不是从其它地方借用数据。</p><p>你也可以让 User 结构体从其它对象借用数据，不过这么做，就需要引入生命周期(lifetimes)这个新概念</p><h3 id="打印" tabindex="-1"><a class="header-anchor" href="#打印" aria-hidden="true">#</a> 打印</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">#[derive(Debug)]</span></span>
<span class="line"><span style="color:#000000;">struct Rectangle {</span></span>
<span class="line"><span style="color:#000000;">    width: u32,</span></span>
<span class="line"><span style="color:#000000;">    height: u32,</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">fn main() {</span></span>
<span class="line"><span style="color:#000000;">    let rect1 = Rectangle {</span></span>
<span class="line"><span style="color:#000000;">        width: 30,</span></span>
<span class="line"><span style="color:#000000;">        height: 50,</span></span>
<span class="line"><span style="color:#000000;">    };</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    println!(&quot;rect1 is {:?}&quot;, rect1);</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="枚举" tabindex="-1"><a class="header-anchor" href="#枚举" aria-hidden="true">#</a> 枚举</h2><p>枚举类型是一个类型，它会包含所有可能的枚举成员, 而枚举值是该类型中的具体某个成员的实例。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">fn main() {</span></span>
<span class="line"><span style="color:#000000;">    let heart = PokerSuit::Hearts;</span></span>
<span class="line"><span style="color:#000000;">    let diamond = PokerSuit::Diamonds;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    print_suit(heart);</span></span>
<span class="line"><span style="color:#000000;">    print_suit(diamond);</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">fn print_suit(card: PokerSuit) {</span></span>
<span class="line"><span style="color:#000000;">    println!(&quot;{:?}&quot;,card);</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">enum PokerCard {</span></span>
<span class="line"><span style="color:#000000;">    Clubs(u8),</span></span>
<span class="line"><span style="color:#000000;">    Spades(u8),</span></span>
<span class="line"><span style="color:#000000;">    Diamonds(char),</span></span>
<span class="line"><span style="color:#000000;">    Hearts(char),</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">fn main() {</span></span>
<span class="line"><span style="color:#000000;">   let c1 = PokerCard::Spades(5);</span></span>
<span class="line"><span style="color:#000000;">   let c2 = PokerCard::Diamonds(&#39;A&#39;);</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>任何类型的数据都可以放入枚举成员中</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">enum Message {</span></span>
<span class="line"><span style="color:#000000;">    Quit,</span></span>
<span class="line"><span style="color:#000000;">    Move { x: i32, y: i32 },</span></span>
<span class="line"><span style="color:#000000;">    Write(String),</span></span>
<span class="line"><span style="color:#000000;">    ChangeColor(i32, i32, i32),</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">fn main() {</span></span>
<span class="line"><span style="color:#000000;">    let m1 = Message::Quit;</span></span>
<span class="line"><span style="color:#000000;">    let m2 = Message::Move{x:1,y:1};</span></span>
<span class="line"><span style="color:#000000;">    let m3 = Message::ChangeColor(255,255,0);</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="option-枚举用于处理空值" tabindex="-1"><a class="header-anchor" href="#option-枚举用于处理空值" aria-hidden="true">#</a> Option 枚举用于处理空值</h3><h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h2><ul><li>array 固定长度数组</li><li>vector 动态数组</li></ul><blockquote><p>声明</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">fn main() {</span></span>
<span class="line"><span style="color:#000000;">    let a = [1, 2, 3, 4, 5];</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">let a: [i32; 5] = [1, 2, 3, 4, 5];</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>非基础类型</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">let array: [String; 8] = std::array::from_fn(|_i| String::from(&quot;rust is good!&quot;));</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">println!(&quot;{:#?}&quot;, array);</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>数组切片</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">let a: [i32; 5] = [1, 2, 3, 4, 5];</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">let slice: &amp;[i32] = &amp;a[1..3];</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">assert_eq!(slice, &amp;[2, 3]);</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>使用</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">fn main() {</span></span>
<span class="line"><span style="color:#000000;">  // 编译器自动推导出one的类型</span></span>
<span class="line"><span style="color:#000000;">  let one             = [1, 2, 3];</span></span>
<span class="line"><span style="color:#000000;">  // 显式类型标注</span></span>
<span class="line"><span style="color:#000000;">  let two: [u8; 3]    = [1, 2, 3];</span></span>
<span class="line"><span style="color:#000000;">  let blank1          = [0; 3];</span></span>
<span class="line"><span style="color:#000000;">  let blank2: [u8; 3] = [0; 3];</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">  // arrays是一个二维数组，其中每一个元素都是一个数组，元素类型是[u8; 3]</span></span>
<span class="line"><span style="color:#000000;">  let arrays: [[u8; 3]; 4]  = [one, two, blank1, blank2];</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">  // 借用arrays的元素用作循环中</span></span>
<span class="line"><span style="color:#000000;">  for a in &amp;arrays {</span></span>
<span class="line"><span style="color:#000000;">    print!(&quot;{:?}: &quot;, a);</span></span>
<span class="line"><span style="color:#000000;">    // 将a变成一个迭代器，用于循环</span></span>
<span class="line"><span style="color:#000000;">    // 你也可以直接用for n in a {}来进行循环</span></span>
<span class="line"><span style="color:#000000;">    for n in a.iter() {</span></span>
<span class="line"><span style="color:#000000;">      print!(&quot;\\t{} + 10 = {}&quot;, n, n+10);</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    let mut sum = 0;</span></span>
<span class="line"><span style="color:#000000;">    // 0..a.len,是一个 Rust 的语法糖，其实就等于一个数组，元素是从0,1,2一直增加到到a.len-1</span></span>
<span class="line"><span style="color:#000000;">    for i in 0..a.len() {</span></span>
<span class="line"><span style="color:#000000;">      sum += a[i];</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">    println!(&quot;\\t({:?} = {})&quot;, a, sum);</span></span>
<span class="line"><span style="color:#000000;">  }</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="循环" tabindex="-1"><a class="header-anchor" href="#循环" aria-hidden="true">#</a> 循环</h2><h3 id="for" tabindex="-1"><a class="header-anchor" href="#for" aria-hidden="true">#</a> for</h3><p>使用方法 等价使用方式 所有权 for item in collection for item in IntoIterator::into_iter(collection) 转移所有权 for item in &amp;collection for item in collection.iter() 不可变借用 for item in &amp;mut collection for item in collection.iter_mut() 可变借用</p><blockquote><p>获取元素索引</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">fn main() {</span></span>
<span class="line"><span style="color:#000000;">    let a = [4, 3, 2, 1];</span></span>
<span class="line"><span style="color:#000000;">    // \`.iter()\` 方法把 \`a\` 数组变成一个迭代器</span></span>
<span class="line"><span style="color:#000000;">    for (i, v) in a.iter().enumerate() {</span></span>
<span class="line"><span style="color:#000000;">        println!(&quot;第{}个元素是{}&quot;, i + 1, v);</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="loop无限循环" tabindex="-1"><a class="header-anchor" href="#loop无限循环" aria-hidden="true">#</a> loop无限循环</h3><ul><li>break 可以单独使用，也可以带一个返回值，有些类似 return</li><li>loop 是一个表达式，因此可以返回一个值</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">fn main() {</span></span>
<span class="line"><span style="color:#000000;">    let mut counter = 0;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    let result = loop {</span></span>
<span class="line"><span style="color:#000000;">        counter += 1;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">        if counter == 10 {</span></span>
<span class="line"><span style="color:#000000;">            break counter * 2;</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">    };</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    println!(&quot;The result is {}&quot;, result);</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模式匹配" tabindex="-1"><a class="header-anchor" href="#模式匹配" aria-hidden="true">#</a> 模式匹配</h2><h3 id="match" tabindex="-1"><a class="header-anchor" href="#match" aria-hidden="true">#</a> match</h3><ol><li>match 的匹配必须要穷举出所有可能，因此这里用 _ 来代表未列出的所有可能性</li><li>match 的每一个分支都必须是一个表达式，且所有分支的表达式最终返回值的类型必须相同</li><li>X | Y，类似逻辑运算符 或，代表该分支可以匹配 X 也可以匹配 Y，只要满足一个即可</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">enum Direction {</span></span>
<span class="line"><span style="color:#000000;">    East,</span></span>
<span class="line"><span style="color:#000000;">    West,</span></span>
<span class="line"><span style="color:#000000;">    North,</span></span>
<span class="line"><span style="color:#000000;">    South,</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">fn main() {</span></span>
<span class="line"><span style="color:#000000;">    let dire = Direction::South;</span></span>
<span class="line"><span style="color:#000000;">    match dire {</span></span>
<span class="line"><span style="color:#000000;">        Direction::East =&gt; println!(&quot;East&quot;),</span></span>
<span class="line"><span style="color:#000000;">        Direction::North | Direction::South =&gt; {</span></span>
<span class="line"><span style="color:#000000;">            println!(&quot;South or North&quot;);</span></span>
<span class="line"><span style="color:#000000;">        },</span></span>
<span class="line"><span style="color:#000000;">        _ =&gt; println!(&quot;West&quot;),</span></span>
<span class="line"><span style="color:#000000;">    };</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>使用 match 表达式赋值</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">enum IpAddr {</span></span>
<span class="line"><span style="color:#000000;">   Ipv4,</span></span>
<span class="line"><span style="color:#000000;">   Ipv6</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">fn main() {</span></span>
<span class="line"><span style="color:#000000;">    let ip1 = IpAddr::Ipv6;</span></span>
<span class="line"><span style="color:#000000;">    let ip_str = match ip1 {</span></span>
<span class="line"><span style="color:#000000;">        IpAddr::Ipv4 =&gt; &quot;127.0.0.1&quot;,</span></span>
<span class="line"><span style="color:#000000;">        _ =&gt; &quot;::1&quot;,</span></span>
<span class="line"><span style="color:#000000;">    };</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    println!(&quot;{}&quot;, ip_str);</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>模式绑定</p></blockquote><ul><li>从模式中取出绑定的值</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">enum Action {</span></span>
<span class="line"><span style="color:#000000;">    Say(String),</span></span>
<span class="line"><span style="color:#000000;">    MoveTo(i32, i32),</span></span>
<span class="line"><span style="color:#000000;">    ChangeColorRGB(u16, u16, u16),</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">fn main() {</span></span>
<span class="line"><span style="color:#000000;">    let actions = [</span></span>
<span class="line"><span style="color:#000000;">        Action::Say(&quot;Hello Rust&quot;.to_string()),</span></span>
<span class="line"><span style="color:#000000;">        Action::MoveTo(1,2),</span></span>
<span class="line"><span style="color:#000000;">        Action::ChangeColorRGB(255,255,0),</span></span>
<span class="line"><span style="color:#000000;">    ];</span></span>
<span class="line"><span style="color:#000000;">    for action in actions { </span></span>
<span class="line"><span style="color:#000000;">        match action {</span></span>
<span class="line"><span style="color:#000000;">            Action::Say(s) =&gt; {</span></span>
<span class="line"><span style="color:#000000;">                println!(&quot;{}&quot;, s);</span></span>
<span class="line"><span style="color:#000000;">            },</span></span>
<span class="line"><span style="color:#000000;">            Action::MoveTo(x, y) =&gt; {</span></span>
<span class="line"><span style="color:#000000;">                println!(&quot;point from (0, 0) move to ({}, {})&quot;, x, y);</span></span>
<span class="line"><span style="color:#000000;">            },</span></span>
<span class="line"><span style="color:#000000;">            Action::ChangeColorRGB(r, g, _) =&gt; {</span></span>
<span class="line"><span style="color:#000000;">                println!(&quot;change color into &#39;(r:{}, g:{}, b:0)&#39;, &#39;b&#39; has been ignored&quot;,</span></span>
<span class="line"><span style="color:#000000;">                    r, g,</span></span>
<span class="line"><span style="color:#000000;">                );</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>穷尽匹配</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">enum Direction {</span></span>
<span class="line"><span style="color:#000000;">    East,</span></span>
<span class="line"><span style="color:#000000;">    West,</span></span>
<span class="line"><span style="color:#000000;">    North,</span></span>
<span class="line"><span style="color:#000000;">    South,</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">fn main() {</span></span>
<span class="line"><span style="color:#000000;">    let dire = Direction::South;</span></span>
<span class="line"><span style="color:#000000;">    match dire {</span></span>
<span class="line"><span style="color:#000000;">        Direction::East =&gt; println!(&quot;East&quot;),</span></span>
<span class="line"><span style="color:#000000;">        Direction::North | Direction::South =&gt; {</span></span>
<span class="line"><span style="color:#000000;">            println!(&quot;South or North&quot;);</span></span>
<span class="line"><span style="color:#000000;">        },</span></span>
<span class="line"><span style="color:#000000;">    };</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>没有处理 Direction::West 的情况，因此会报错</strong></p><blockquote><p>通配符_</p></blockquote><p>当我们不想在匹配时列出所有值的时候，可以使用 Rust 提供的一个特殊模式，例如，u8 可以拥有 0 到 255 的有效的值， 但是我们只关心 1、3、5 和 7 这几个值，不想列出其它的 0、2、4、6、8、9 一直到 255 的值。 那么, 我们不必一个一个列出所有值, 因为可以使用特殊的模式 _ 替代</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">let some_u8_value = 0u8;</span></span>
<span class="line"><span style="color:#000000;">match some_u8_value {</span></span>
<span class="line"><span style="color:#000000;">    1 =&gt; println!(&quot;one&quot;),</span></span>
<span class="line"><span style="color:#000000;">    3 =&gt; println!(&quot;three&quot;),</span></span>
<span class="line"><span style="color:#000000;">    5 =&gt; println!(&quot;five&quot;),</span></span>
<span class="line"><span style="color:#000000;">    7 =&gt; println!(&quot;seven&quot;),</span></span>
<span class="line"><span style="color:#000000;">    _ =&gt; (),</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="if-let-匹配" tabindex="-1"><a class="header-anchor" href="#if-let-匹配" aria-hidden="true">#</a> if let 匹配</h4><ul><li>当你只要匹配一个条件，且忽略其他条件时就用 if let ，否则都用 match。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">if let Some(3) = v {</span></span>
<span class="line"><span style="color:#000000;">    println!(&quot;three&quot;);</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="matches-宏" tabindex="-1"><a class="header-anchor" href="#matches-宏" aria-hidden="true">#</a> matches!宏</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">let foo = &#39;f&#39;;</span></span>
<span class="line"><span style="color:#000000;">assert!(matches!(foo, &#39;A&#39;..=&#39;Z&#39; | &#39;a&#39;..=&#39;z&#39;));</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">let bar = Some(4);</span></span>
<span class="line"><span style="color:#000000;">assert!(matches!(bar, Some(x) if x &gt; 2));</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="变量遮蔽" tabindex="-1"><a class="header-anchor" href="#变量遮蔽" aria-hidden="true">#</a> 变量遮蔽</h4><p>无论是 match 还是 if let，这里都是一个新的代码块，而且这里的绑定相当于新变量，如果你使用同名变量，会发生变量遮蔽:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">fn main() {</span></span>
<span class="line"><span style="color:#000000;">   let age = Some(30);</span></span>
<span class="line"><span style="color:#000000;">   println!(&quot;在匹配前，age是{:?}&quot;, age);</span></span>
<span class="line"><span style="color:#000000;">   match age {</span></span>
<span class="line"><span style="color:#000000;">       Some(x) =&gt;  println!(&quot;匹配出来的age是{}&quot;, x),</span></span>
<span class="line"><span style="color:#000000;">       _ =&gt; ()</span></span>
<span class="line"><span style="color:#000000;">   }</span></span>
<span class="line"><span style="color:#000000;">   println!(&quot;在匹配后，age是{:?}&quot;, age);</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="option结构匹配" tabindex="-1"><a class="header-anchor" href="#option结构匹配" aria-hidden="true">#</a> option结构匹配</h3><ul><li>Option 枚举，它用来解决 Rust 中变量是否有值的问题</li><li>一个变量要么有值：Some(T), 要么为空：None。</li><li>因为 Option，Some，None 都包含在 prelude 中，因此你可以直接通过名称来使用它们，而无需以 Option::Some 这种形式去使用， 总之，千万不要因为调用路径变短了，就忘记 Some 和 None 也是 Option 底下的枚举成员！</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">enum Option&lt;T&gt; {</span></span>
<span class="line"><span style="color:#000000;">    Some(T),</span></span>
<span class="line"><span style="color:#000000;">    None,</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模式适用场景" tabindex="-1"><a class="header-anchor" href="#模式适用场景" aria-hidden="true">#</a> 模式适用场景</h3><blockquote><p>while let</p></blockquote><ul><li>pop 方法取出动态数组的最后一个元素并返回 Some(value)</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">// Vec是动态数组</span></span>
<span class="line"><span style="color:#000000;">let mut stack = Vec::new();</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">// 向数组尾部插入元素</span></span>
<span class="line"><span style="color:#000000;">stack.push(1);</span></span>
<span class="line"><span style="color:#000000;">stack.push(2);</span></span>
<span class="line"><span style="color:#000000;">stack.push(3);</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">// stack.pop从数组尾部弹出元素</span></span>
<span class="line"><span style="color:#000000;">while let Some(top) = stack.pop() {</span></span>
<span class="line"><span style="color:#000000;">    println!(&quot;{}&quot;, top);</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法method" tabindex="-1"><a class="header-anchor" href="#方法method" aria-hidden="true">#</a> 方法Method</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">#[derive(Debug)]</span></span>
<span class="line"><span style="color:#000000;">struct Rectangle {</span></span>
<span class="line"><span style="color:#000000;">    width: u32,</span></span>
<span class="line"><span style="color:#000000;">    height: u32,</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">impl Rectangle {</span></span>
<span class="line"><span style="color:#000000;">    fn area(&amp;self) -&gt; u32 {</span></span>
<span class="line"><span style="color:#000000;">        self.width * self.height</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">fn main() {</span></span>
<span class="line"><span style="color:#000000;">    let rect1 = Rectangle { width: 30, height: 50 };</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    println!(</span></span>
<span class="line"><span style="color:#000000;">        &quot;The area of the rectangle is {} square pixels.&quot;,</span></span>
<span class="line"><span style="color:#000000;">        rect1.area()</span></span>
<span class="line"><span style="color:#000000;">    );</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="self、-self-和-mut-self" tabindex="-1"><a class="header-anchor" href="#self、-self-和-mut-self" aria-hidden="true">#</a> self、&amp;self 和 &amp;mut self</h3><ul><li>&amp;self 其实是 self: &amp;Self 的简写（注意大小写）</li><li>self 表示 Rectangle 的所有权转移到该方法中，这种形式用的较少</li><li>&amp;self 表示该方法对 Rectangle 的不可变借用</li><li>&amp;mut self 表示可变借用</li></ul><h3 id="方法名跟结构体字段名相同" tabindex="-1"><a class="header-anchor" href="#方法名跟结构体字段名相同" aria-hidden="true">#</a> 方法名跟结构体字段名相同</h3><ul><li>方法跟字段同名，往往适用于实现 getter 访问器</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">pub struct Rectangle {</span></span>
<span class="line"><span style="color:#000000;">    width: u32,</span></span>
<span class="line"><span style="color:#000000;">    height: u32,</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">impl Rectangle {</span></span>
<span class="line"><span style="color:#000000;">    pub fn new(width: u32, height: u32) -&gt; Self {</span></span>
<span class="line"><span style="color:#000000;">        Rectangle { width, height }</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">    pub fn width(&amp;self) -&gt; u32 {</span></span>
<span class="line"><span style="color:#000000;">        return self.width;</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">fn main() {</span></span>
<span class="line"><span style="color:#000000;">    let rect1 = Rectangle::new(30, 50);</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    println!(&quot;{}&quot;, rect1.width());</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>运算符-&gt; 到哪去了？</p></blockquote><p>在 C/C++ 语言中，有两个不同的运算符来调用方法：. 直接在对象上调用方法，而 -&gt; 在一个对象的指针上调用方法，这时需要先解引用指针。</p><p>换句话说，如果 object 是一个指针，那么 object-&gt;something() 和 (*object).something() 是一样的。</p><p>Rust 有一个叫 自动引用和解引用的功能。方法调用是 Rust 中少数几个拥有这种行为的地方。</p><p>Rust 会自动为 object 添加 &amp;、&amp;mut 或 * 以便使 object 与方法签名匹配。</p><h3 id="关联函数" tabindex="-1"><a class="header-anchor" href="#关联函数" aria-hidden="true">#</a> 关联函数</h3><p>定义在 impl 中且没有 self 的函数被称之为关联函数： 因为它没有 self，不能用 f.read() 的形式调用，</p><p>因此它是一个函数而不是方法，它又在 impl 中，与结构体紧密关联，因此称为关联函数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">impl Rectangle {</span></span>
<span class="line"><span style="color:#000000;">    fn new(w: u32, h: u32) -&gt; Rectangle {</span></span>
<span class="line"><span style="color:#000000;">        Rectangle { width: w, height: h }</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Rust 中有一个约定俗成的规则，使用 new 来作为构造器的名称，出于设计上的考虑，Rust 特地没有用 new 作为关键字。</p><p>因为是函数，所以不能用 . 的方式来调用，我们需要用 :: 来调用，例如 let sq = Rectangle::new(3, 3);。</p><p>这个方法位于结构体的命名空间中：:: 语法用于关联函数和模块创建的命名空间。</p><h3 id="为枚举实现方法" tabindex="-1"><a class="header-anchor" href="#为枚举实现方法" aria-hidden="true">#</a> 为枚举实现方法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">#![allow(unused)]</span></span>
<span class="line"><span style="color:#000000;">enum Message {</span></span>
<span class="line"><span style="color:#000000;">    Quit,</span></span>
<span class="line"><span style="color:#000000;">    Move { x: i32, y: i32 },</span></span>
<span class="line"><span style="color:#000000;">    Write(String),</span></span>
<span class="line"><span style="color:#000000;">    ChangeColor(i32, i32, i32),</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">impl Message {</span></span>
<span class="line"><span style="color:#000000;">    fn call(&amp;self) {</span></span>
<span class="line"><span style="color:#000000;">        // 在这里定义方法体</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">fn main() {</span></span>
<span class="line"><span style="color:#000000;">    let m = Message::Write(String::from(&quot;hello&quot;));</span></span>
<span class="line"><span style="color:#000000;">    m.call();</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="泛型和特征" tabindex="-1"><a class="header-anchor" href="#泛型和特征" aria-hidden="true">#</a> 泛型和特征</h2><h3 id="枚举中使用泛型" tabindex="-1"><a class="header-anchor" href="#枚举中使用泛型" aria-hidden="true">#</a> 枚举中使用泛型</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">enum Option&lt;T&gt; {</span></span>
<span class="line"><span style="color:#000000;">    Some(T),</span></span>
<span class="line"><span style="color:#000000;">    None,</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;">enum Result&lt;T, E&gt; {</span></span>
<span class="line"><span style="color:#000000;">    Ok(T),</span></span>
<span class="line"><span style="color:#000000;">    Err(E),</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法中使用泛型" tabindex="-1"><a class="header-anchor" href="#方法中使用泛型" aria-hidden="true">#</a> 方法中使用泛型</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">struct Point&lt;T&gt; {</span></span>
<span class="line"><span style="color:#000000;">    x: T,</span></span>
<span class="line"><span style="color:#000000;">    y: T,</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">impl&lt;T&gt; Point&lt;T&gt; {</span></span>
<span class="line"><span style="color:#000000;">    fn x(&amp;self) -&gt; &amp;T {</span></span>
<span class="line"><span style="color:#000000;">        &amp;self.x</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">fn main() {</span></span>
<span class="line"><span style="color:#000000;">    let p = Point { x: 5, y: 10 };</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    println!(&quot;p.x = {}&quot;, p.x());</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>为具体的泛型类型实现方法</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">//这段代码意味着 Point&lt;f32&gt; 类型会有一个方法 distance_from_origin，而其他 T 不是 f32 类型的 Point&lt;T&gt; 实例则没有定义此方法。</span></span>
<span class="line"><span style="color:#000000;">//这个方法计算点实例与坐标(0.0, 0.0) 之间的距离，并使用了只能用于浮点型的数学运算符。</span></span>
<span class="line"><span style="color:#000000;">impl Point&lt;f32&gt; {</span></span>
<span class="line"><span style="color:#000000;">    fn distance_from_origin(&amp;self) -&gt; f32 {</span></span>
<span class="line"><span style="color:#000000;">        (self.x.powi(2) + self.y.powi(2)).sqrt()</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="const-泛型" tabindex="-1"><a class="header-anchor" href="#const-泛型" aria-hidden="true">#</a> const 泛型</h3><ul><li>[i32; 2] 和 [i32; 3] 是不同的数组类型</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">fn display_array(arr: &amp;[i32]) {</span></span>
<span class="line"><span style="color:#000000;">    println!(&quot;{:?}&quot;, arr);</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;">fn main() {</span></span>
<span class="line"><span style="color:#000000;">    let arr: [i32; 3] = [1, 2, 3];</span></span>
<span class="line"><span style="color:#000000;">    display_array(&amp;arr);</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    let arr: [i32;2] = [1,2];</span></span>
<span class="line"><span style="color:#000000;">    display_array(&amp;arr);</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">fn display_array&lt;T: std::fmt::Debug, const N: usize&gt;(arr: [T; N]) {</span></span>
<span class="line"><span style="color:#000000;">    println!(&quot;{:?}&quot;, arr);</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;">fn main() {</span></span>
<span class="line"><span style="color:#000000;">    let arr: [i32; 3] = [1, 2, 3];</span></span>
<span class="line"><span style="color:#000000;">    display_array(arr);</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    let arr: [i32; 2] = [1, 2];</span></span>
<span class="line"><span style="color:#000000;">    display_array(arr);</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="特征-1" tabindex="-1"><a class="header-anchor" href="#特征-1" aria-hidden="true">#</a> 特征</h3><ul><li>和接口类似</li></ul><blockquote><p>默认实现</p></blockquote><ul><li>你可以在特征中定义具有默认实现的方法，这样其它类型无需再实现该方法，或者也可以选择重载该方法：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">pub trait Summary {</span></span>
<span class="line"><span style="color:#000000;">    fn summarize(&amp;self) -&gt; String {</span></span>
<span class="line"><span style="color:#000000;">        String::from(&quot;(Read more...)&quot;)</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">impl Summary for Post {}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">impl Summary for Weibo {</span></span>
<span class="line"><span style="color:#000000;">    fn summarize(&amp;self) -&gt; String {</span></span>
<span class="line"><span style="color:#000000;">        format!(&quot;{}发表了微博{}&quot;, self.username, self.content)</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>使用特征作为函数参数</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">pub fn notify(item: &amp;impl Summary) {</span></span>
<span class="line"><span style="color:#000000;">    println!(&quot;Breaking news! {}&quot;, item.summarize());</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>特征约束</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">pub fn notify&lt;T: Summary&gt;(item: &amp;T) {</span></span>
<span class="line"><span style="color:#000000;">    println!(&quot;Breaking news! {}&quot;, item.summarize());</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>多重约束</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">pub fn notify(item: &amp;(impl Summary + Display)) {}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">pub fn notify&lt;T: Summary + Display&gt;(item: &amp;T) {}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>where约束</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">fn some_function&lt;T, U&gt;(t: &amp;T, u: &amp;U) -&gt; i32</span></span>
<span class="line"><span style="color:#000000;">    where T: Display + Clone,</span></span>
<span class="line"><span style="color:#000000;">          U: Clone + Debug</span></span>
<span class="line"><span style="color:#000000;">{}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>函数返回中的 impl Trait</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">fn returns_summarizable() -&gt; impl Summary {</span></span>
<span class="line"><span style="color:#000000;">    Weibo {</span></span>
<span class="line"><span style="color:#000000;">        username: String::from(&quot;sunface&quot;),</span></span>
<span class="line"><span style="color:#000000;">        content: String::from(</span></span>
<span class="line"><span style="color:#000000;">            &quot;m1 max太厉害了，电脑再也不会卡&quot;,</span></span>
<span class="line"><span style="color:#000000;">        )</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>通过 derive 派生特征 调用方法需要引入特征</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">use std::convert::TryInto;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">fn main() {</span></span>
<span class="line"><span style="color:#000000;">  let a: i32 = 10;</span></span>
<span class="line"><span style="color:#000000;">  let b: u16 = 100;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">  let b_ = b.try_into()</span></span>
<span class="line"><span style="color:#000000;">            .unwrap();</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">  if a &lt; b_ {</span></span>
<span class="line"><span style="color:#000000;">    println!(&quot;Ten is less than one hundred.&quot;);</span></span>
<span class="line"><span style="color:#000000;">  }</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="特征对象" tabindex="-1"><a class="header-anchor" href="#特征对象" aria-hidden="true">#</a> 特征对象</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">//draw1 函数的参数是 Box&lt;dyn Draw&gt; 形式的特征对象，该特征对象是通过 Box::new(x) 的方式创建的</span></span>
<span class="line"><span style="color:#000000;">//draw2 函数的参数是 &amp;dyn Draw 形式的特征对象，该特征对象是通过 &amp;x 的方式创建的</span></span>
<span class="line"><span style="color:#000000;">//dyn 关键字只用在特征对象的类型声明上，在创建时无需使用 dyn</span></span>
<span class="line"><span style="color:#000000;">trait Draw {</span></span>
<span class="line"><span style="color:#000000;">    fn draw(&amp;self) -&gt; String;</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">impl Draw for u8 {</span></span>
<span class="line"><span style="color:#000000;">    fn draw(&amp;self) -&gt; String {</span></span>
<span class="line"><span style="color:#000000;">        format!(&quot;u8: {}&quot;, *self)</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">impl Draw for f64 {</span></span>
<span class="line"><span style="color:#000000;">    fn draw(&amp;self) -&gt; String {</span></span>
<span class="line"><span style="color:#000000;">        format!(&quot;f64: {}&quot;, *self)</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">// 若 T 实现了 Draw 特征， 则调用该函数时传入的 Box&lt;T&gt; 可以被隐式转换成函数参数签名中的 Box&lt;dyn Draw&gt;</span></span>
<span class="line"><span style="color:#000000;">fn draw1(x: Box&lt;dyn Draw&gt;) {</span></span>
<span class="line"><span style="color:#000000;">    // 由于实现了 Deref 特征，Box 智能指针会自动解引用为它所包裹的值，然后调用该值对应的类型上定义的 \`draw\` 方法</span></span>
<span class="line"><span style="color:#000000;">    x.draw();</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">fn draw2(x: &amp;dyn Draw) {</span></span>
<span class="line"><span style="color:#000000;">    x.draw();</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">fn main() {</span></span>
<span class="line"><span style="color:#000000;">    let x = 1.1f64;</span></span>
<span class="line"><span style="color:#000000;">    // do_something(&amp;x);</span></span>
<span class="line"><span style="color:#000000;">    let y = 8u8;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    // x 和 y 的类型 T 都实现了 \`Draw\` 特征，因为 Box&lt;T&gt; 可以在函数调用时隐式地被转换为特征对象 Box&lt;dyn Draw&gt; </span></span>
<span class="line"><span style="color:#000000;">    // 基于 x 的值创建一个 Box&lt;f64&gt; 类型的智能指针，指针指向的数据被放置在了堆上</span></span>
<span class="line"><span style="color:#000000;">    draw1(Box::new(x));</span></span>
<span class="line"><span style="color:#000000;">    // 基于 y 的值创建一个 Box&lt;u8&gt; 类型的智能指针</span></span>
<span class="line"><span style="color:#000000;">    draw1(Box::new(y));</span></span>
<span class="line"><span style="color:#000000;">    draw2(&amp;x);</span></span>
<span class="line"><span style="color:#000000;">    draw2(&amp;y);</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>特征对象的动态分发 Self 与 self</p></blockquote><p>在 Rust 中，有两个self，一个指代当前的实例对象，一个指代实现特征或者方法类型：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">trait Draw {</span></span>
<span class="line"><span style="color:#000000;">    fn draw(&amp;self) -&gt; Self;</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">#[derive(Clone)]</span></span>
<span class="line"><span style="color:#000000;">struct Button;</span></span>
<span class="line"><span style="color:#000000;">impl Draw for Button {</span></span>
<span class="line"><span style="color:#000000;">    fn draw(&amp;self) -&gt; Self {</span></span>
<span class="line"><span style="color:#000000;">        return self.clone()</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">fn main() {</span></span>
<span class="line"><span style="color:#000000;">    let button = Button;</span></span>
<span class="line"><span style="color:#000000;">    let newb = button.draw();</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码中，self指代的就是当前的实例对象，也就是 button.draw() 中的 button 实例，Self 则指代的是 Button 类型。</p><blockquote><p>特征对象的限制</p></blockquote><p>不是所有特征都能拥有特征对象，只有对象安全的特征才行。当一个特征的所有方法都有如下属性时，它的对象才是安全的：</p><ul><li>方法的返回类型不能是 Self</li><li>方法没有任何泛型参数</li></ul><h3 id="深入特征" tabindex="-1"><a class="header-anchor" href="#深入特征" aria-hidden="true">#</a> 深入特征</h3><h2 id="集合" tabindex="-1"><a class="header-anchor" href="#集合" aria-hidden="true">#</a> 集合</h2><h3 id="动态数组-vector" tabindex="-1"><a class="header-anchor" href="#动态数组-vector" aria-hidden="true">#</a> 动态数组 vector</h3><h4 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">let v: Vec&lt;i32&gt; = Vec::new();</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">let mut v = Vec::new();</span></span>
<span class="line"><span style="color:#000000;">v.push(1);</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">//创建固定长度的数组</span></span>
<span class="line"><span style="color:#000000;">Vec::with_capacity(capacity) </span></span>
<span class="line"><span style="color:#000000;">//vec![]创建</span></span>
<span class="line"><span style="color:#000000;">let v = vec![1, 2, 3];</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="vector-与其元素共存亡" tabindex="-1"><a class="header-anchor" href="#vector-与其元素共存亡" aria-hidden="true">#</a> Vector 与其元素共存亡</h4><p>跟结构体一样，Vector 类型在超出作用域范围后，会被自动删除：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">{</span></span>
<span class="line"><span style="color:#000000;">    let v = vec![1, 2, 3];</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    // ...</span></span>
<span class="line"><span style="color:#000000;">} // &lt;- v超出作用域并在此处被删除</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="从-vector-中读取元素" tabindex="-1"><a class="header-anchor" href="#从-vector-中读取元素" aria-hidden="true">#</a> 从 Vector 中读取元素</h4><p>读取指定位置的元素有两种方式可选：</p><ul><li>通过下标索引访问。</li><li>使用 get 方法。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">let v = vec![1, 2, 3, 4, 5];</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">let third: &amp;i32 = &amp;v[2];</span></span>
<span class="line"><span style="color:#000000;">println!(&quot;第三个元素是 {}&quot;, third);</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">match v.get(2) {</span></span>
<span class="line"><span style="color:#000000;">    Some(third) =&gt; println!(&quot;第三个元素是 {third}&quot;),</span></span>
<span class="line"><span style="color:#000000;">    None =&gt; println!(&quot;去你的第三个元素，根本没有！&quot;),</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="下标索引与-get-的区别" tabindex="-1"><a class="header-anchor" href="#下标索引与-get-的区别" aria-hidden="true">#</a> 下标索引与 .get 的区别</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">let v = vec![1, 2, 3, 4, 5];</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">let does_not_exist = &amp;v[100];</span></span>
<span class="line"><span style="color:#000000;">let does_not_exist = v.get(100);</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行以上代码，&amp;v[100] 的访问方式会导致程序无情报错退出，因为发生了数组越界访问。 但是 v.get 就不会，它在内部做了处理，有值的时候返回 Some(T)，无值的时候返回 None，因此 v.get 的使用方式非常安全。</p><h4 id="同时借用多个数组元素" tabindex="-1"><a class="header-anchor" href="#同时借用多个数组元素" aria-hidden="true">#</a> 同时借用多个数组元素</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">let v = vec![1, 2, 3];</span></span>
<span class="line"><span style="color:#000000;">for i in &amp;v {</span></span>
<span class="line"><span style="color:#000000;">    println!(&quot;{i}&quot;);</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">let mut v = vec![1, 2, 3];</span></span>
<span class="line"><span style="color:#000000;">for i in &amp;mut v {</span></span>
<span class="line"><span style="color:#000000;">    *i += 10</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="排序" tabindex="-1"><a class="header-anchor" href="#排序" aria-hidden="true">#</a> 排序</h4><ul><li>稳定排序</li><li>不稳定排序，即相等元素的顺序是否改变</li></ul><h3 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> map</h3><p>可以使用 new 方法来创建 HashMap，然后通过 insert 方法插入键值对。</p><p>HashMap 并没有包含在 Rust 的 prelude 中（Rust 为了简化用户使用，提前将最常用的类型自动引入到作用域中）。</p><h4 id="数组到map的转换" tabindex="-1"><a class="header-anchor" href="#数组到map的转换" aria-hidden="true">#</a> 数组到map的转换</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">fn main() {</span></span>
<span class="line"><span style="color:#000000;">    use std::collections::HashMap;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    let teams_list = vec![</span></span>
<span class="line"><span style="color:#000000;">        (&quot;中国队&quot;.to_string(), 100),</span></span>
<span class="line"><span style="color:#000000;">        (&quot;美国队&quot;.to_string(), 10),</span></span>
<span class="line"><span style="color:#000000;">        (&quot;日本队&quot;.to_string(), 50),</span></span>
<span class="line"><span style="color:#000000;">    ];</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    let teams_map: HashMap&lt;_,_&gt; = teams_list.into_iter().collect();</span></span>
<span class="line"><span style="color:#000000;">    </span></span>
<span class="line"><span style="color:#000000;">    println!(&quot;{:?}&quot;,teams_map)</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="所有权转移" tabindex="-1"><a class="header-anchor" href="#所有权转移" aria-hidden="true">#</a> 所有权转移</h4><ul><li>若类型实现 Copy 特征，该类型会被复制进 HashMap，因此无所谓所有权</li><li>若没实现 Copy 特征，所有权将被转移给 HashMap 中</li></ul><h4 id="get-方法可以获取元素" tabindex="-1"><a class="header-anchor" href="#get-方法可以获取元素" aria-hidden="true">#</a> get 方法可以获取元素</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">use std::collections::HashMap;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">let mut scores = HashMap::new();</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">scores.insert(String::from(&quot;Blue&quot;), 10);</span></span>
<span class="line"><span style="color:#000000;">scores.insert(String::from(&quot;Yellow&quot;), 50);</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">let team_name = String::from(&quot;Blue&quot;);</span></span>
<span class="line"><span style="color:#000000;">let score: Option&lt;&amp;i32&gt; = scores.get(&amp;team_name);</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">// get 方法返回一个 Option&lt;&amp;i32&gt; 类型：当查询不到时，会返回一个 None，查询到时返回 Some(&amp;i32)</span></span>
<span class="line"><span style="color:#000000;">// &amp;i32 是对 HashMap 中值的借用，如果不使用借用，可能会发生所有权的转移</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="更新键值" tabindex="-1"><a class="header-anchor" href="#更新键值" aria-hidden="true">#</a> 更新键值</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">fn main() {</span></span>
<span class="line"><span style="color:#000000;">    use std::collections::HashMap;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    let mut scores = HashMap::new();</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    scores.insert(&quot;Blue&quot;, 10);</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    // 覆盖已有的值</span></span>
<span class="line"><span style="color:#000000;">    let old = scores.insert(&quot;Blue&quot;, 20);</span></span>
<span class="line"><span style="color:#000000;">    assert_eq!(old, Some(10));</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    // 查询新插入的值</span></span>
<span class="line"><span style="color:#000000;">    let new = scores.get(&quot;Blue&quot;);</span></span>
<span class="line"><span style="color:#000000;">    assert_eq!(new, Some(&amp;20));</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    // 查询Yellow对应的值，若不存在则插入新值</span></span>
<span class="line"><span style="color:#000000;">    let v = scores.entry(&quot;Yellow&quot;).or_insert(5);</span></span>
<span class="line"><span style="color:#000000;">    assert_eq!(*v, 5); // 不存在，插入5</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    // 查询Yellow对应的值，若不存在则插入新值</span></span>
<span class="line"><span style="color:#000000;">    let v = scores.entry(&quot;Yellow&quot;).or_insert(50);</span></span>
<span class="line"><span style="color:#000000;">    assert_eq!(*v, 5); // 已经存在，因此50没有插入</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">use std::collections::HashMap;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">let text = &quot;hello world wonderful world&quot;;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">let mut map = HashMap::new();</span></span>
<span class="line"><span style="color:#000000;">// 根据空格来切分字符串(英文单词都是通过空格切分)</span></span>
<span class="line"><span style="color:#000000;">for word in text.split_whitespace() {</span></span>
<span class="line"><span style="color:#000000;">    let count = map.entry(word).or_insert(0);</span></span>
<span class="line"><span style="color:#000000;">    *count += 1;</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">println!(&quot;{:?}&quot;, map);</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>or_insert 返回了 &amp;mut v 引用，因此可以通过该可变引用直接修改 map 中对应的值</li><li>使用 count 引用时，需要先进行解引用 *count，否则会出现类型不匹配</li></ul><h2 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h2><h2 id="函数式编程" tabindex="-1"><a class="header-anchor" href="#函数式编程" aria-hidden="true">#</a> 函数式编程</h2><h3 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h3><p>闭包是一种匿名函数，它可以赋值给变量也可以作为参数传递给其它函数，不同于函数的是，它允许捕获调用者作用域中的值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">fn main() {</span></span>
<span class="line"><span style="color:#000000;">   let x = 1;</span></span>
<span class="line"><span style="color:#000000;">   let sum = |y| x + y;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    assert_eq!(3, sum(2));</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>形式</p></blockquote><ul><li>闭包中最后一行表达式返回的值，就是闭包执行后的返回值</li><li>闭包赋值给变量，并不是把闭包执行后的结果赋值</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">|param1, param2,...| {</span></span>
<span class="line"><span style="color:#000000;">    语句1;</span></span>
<span class="line"><span style="color:#000000;">    语句2;</span></span>
<span class="line"><span style="color:#000000;">    返回表达式</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">|param1| 返回表达式</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>类型推导</p></blockquote><ul><li>当编译器推导出一种类型后，它就会一直使用该类型</li></ul><h4 id="结构体中的闭包" tabindex="-1"><a class="header-anchor" href="#结构体中的闭包" aria-hidden="true">#</a> 结构体中的闭包</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">struct Cacher&lt;T&gt;</span></span>
<span class="line"><span style="color:#000000;">where</span></span>
<span class="line"><span style="color:#000000;">    T: Fn(u32) -&gt; u32,</span></span>
<span class="line"><span style="color:#000000;">{</span></span>
<span class="line"><span style="color:#000000;">    query: T,</span></span>
<span class="line"><span style="color:#000000;">    value: Option&lt;u32&gt;,</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="捕获作用域中的值" tabindex="-1"><a class="header-anchor" href="#捕获作用域中的值" aria-hidden="true">#</a> 捕获作用域中的值</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">fn main() {</span></span>
<span class="line"><span style="color:#000000;">    let x = 4;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    let equal_to_x = |z| z == x;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    let y = 4;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    assert!(equal_to_x(y));</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="三种-fn-特征" tabindex="-1"><a class="header-anchor" href="#三种-fn-特征" aria-hidden="true">#</a> 三种 Fn 特征</h4><p>闭包捕获变量有三种途径，恰好对应函数参数的三种传入方式：转移所有权、可变借用、不可变借用</p><blockquote><p>FnOnce，该类型的闭包会拿走被捕获变量的所有权。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">fn fn_once&lt;F&gt;(func: F)</span></span>
<span class="line"><span style="color:#000000;">where</span></span>
<span class="line"><span style="color:#000000;">    F: FnOnce(usize) -&gt; bool,</span></span>
<span class="line"><span style="color:#000000;">{</span></span>
<span class="line"><span style="color:#000000;">    println!(&quot;{}&quot;, func(3));</span></span>
<span class="line"><span style="color:#000000;">    println!(&quot;{}&quot;, func(4));</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">fn main() {</span></span>
<span class="line"><span style="color:#000000;">    let x = vec![1, 2, 3];</span></span>
<span class="line"><span style="color:#000000;">    fn_once(|z|{z == x.len()})</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"># 因为 F 没有实现 Copy 特征，所以会报错，那么我们添加一个约束，试试实现了 Copy 的闭包：</span></span>
<span class="line"><span style="color:#000000;">fn fn_once&lt;F&gt;(func: F)</span></span>
<span class="line"><span style="color:#000000;">where</span></span>
<span class="line"><span style="color:#000000;">    F: FnOnce(usize) -&gt; bool + Copy,// 改动在这里</span></span>
<span class="line"><span style="color:#000000;">{</span></span>
<span class="line"><span style="color:#000000;">    println!(&quot;{}&quot;, func(3));</span></span>
<span class="line"><span style="color:#000000;">    println!(&quot;{}&quot;, func(4));</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">fn main() {</span></span>
<span class="line"><span style="color:#000000;">    let x = vec![1, 2, 3];</span></span>
<span class="line"><span style="color:#000000;">    fn_once(|z|{z == x.len()})</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>FnMut，它以可变借用的方式捕获了环境中的值，因此可以修改该值</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">fn main() {</span></span>
<span class="line"><span style="color:#000000;">    let mut s = String::new();</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    let update_string =  |str| s.push_str(str);</span></span>
<span class="line"><span style="color:#000000;">    update_string(&quot;hello&quot;);</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    println!(&quot;{:?}&quot;,s);</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"># 想要在闭包内部捕获可变借用，需要把该闭包声明为可变类型，也就是 update_string 要修改为 mut update_string：</span></span>
<span class="line"><span style="color:#000000;">fn main() {</span></span>
<span class="line"><span style="color:#000000;">    let mut s = String::new();</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    let mut update_string =  |str| s.push_str(str);</span></span>
<span class="line"><span style="color:#000000;">    update_string(&quot;hello&quot;);</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    println!(&quot;{:?}&quot;,s);</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Fn 特征，它以不可变借用的方式捕获环境中的值</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="三种-fn-的关系" tabindex="-1"><a class="header-anchor" href="#三种-fn-的关系" aria-hidden="true">#</a> 三种 Fn 的关系</h4><p>实际上，一个闭包并不仅仅实现某一种 Fn 特征，规则如下</p><ul><li>所有的闭包都自动实现了 FnOnce 特征，因此任何一个闭包都至少可以被调用一次</li><li>没有移出所捕获变量的所有权的闭包自动实现了 FnMut 特征</li><li>不需要对捕获变量进行改变的闭包自动实现了 Fn 特征</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">fn main() {</span></span>
<span class="line"><span style="color:#000000;">    let s = String::new();</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    let update_string =  || println!(&quot;{}&quot;,s);</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    exec(update_string);</span></span>
<span class="line"><span style="color:#000000;">    exec1(update_string);</span></span>
<span class="line"><span style="color:#000000;">    exec2(update_string);</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">fn exec&lt;F: FnOnce()&gt;(f: F)  {</span></span>
<span class="line"><span style="color:#000000;">    f()</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">fn exec1&lt;F: FnMut()&gt;(mut f: F)  {</span></span>
<span class="line"><span style="color:#000000;">    f()</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">fn exec2&lt;F: Fn()&gt;(f: F)  {</span></span>
<span class="line"><span style="color:#000000;">    f()</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="迭代器" tabindex="-1"><a class="header-anchor" href="#迭代器" aria-hidden="true">#</a> 迭代器</h3><ul><li>数组不是迭代器，数组实现了 IntoIterator 特征，Rust 通过 for 语法糖，自动把实现了该特征的数组类型转换为迭代器</li><li>迭代器实现了Iterator 特征</li></ul>`,221),p=[i];function c(r,o){return n(),a("div",null,p)}const v=s(e,[["render",c],["__file","rust.html.vue"]]);export{v as default};
