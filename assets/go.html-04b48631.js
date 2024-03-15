import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as p,c,a as s,b as n,d as l,f as r}from"./app-f83986bb.js";const o={},d=s("h1",{id:"go",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#go","aria-hidden":"true"},"#"),n(" go")],-1),t={href:"https://www.runoob.com/go",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.cnblogs.com/xiaqiuchu/p/14196882.html",target:"_blank",rel:"noopener noreferrer"},u=r(`<h2 id="构建运行" tabindex="-1"><a class="header-anchor" href="#构建运行" aria-hidden="true">#</a> 构建运行</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#008000;"># 编译运行</span></span>
<span class="line"><span style="color:#795E26;">go</span><span style="color:#000000;"> </span><span style="color:#A31515;">build</span><span style="color:#000000;"> </span><span style="color:#A31515;">hello.go</span><span style="color:#000000;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#008000;"># 编译为可执行文件</span></span>
<span class="line"><span style="color:#795E26;">go</span><span style="color:#000000;"> </span><span style="color:#A31515;">build</span><span style="color:#000000;"> </span><span style="color:#A31515;">hello.go</span></span>
<span class="line"><span style="color:#008000;"># 运行</span></span>
<span class="line"><span style="color:#795E26;">./</span><span style="color:#000000;"> </span><span style="color:#A31515;">hello</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="语言结构" tabindex="-1"><a class="header-anchor" href="#语言结构" aria-hidden="true">#</a> 语言结构</h2><ul><li>包声明</li><li>引入包</li><li>函数</li><li>变量</li><li>语句 &amp; 表达式</li><li>注释</li><li>注意 <ul><li>当标识符（包括常量、变量、类型、函数名、结构字段等等）以一个大写字母开头，如：Group1，那么使用这种形式的标识符的对象就可以被外部包的代码所使用（客户端程序需要先导入这个包），这被称为导出（像面向对象语言中的 public）； 标识符如果以小写字母开头，则对包外是不可见的，但是他们在整个包的内部是可见并且可用的（像面向对象语言中的 protected ）</li><li>{ 不能单独放在一行，所以以下代码在运行时会产生错误：<div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">package main</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">import &quot;fmt&quot;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">func main()  </span></span>
<span class="line"><span style="color:#000000;">{  // 错误，{ 不能在单独的行上</span></span>
<span class="line"><span style="color:#000000;">    fmt.Println(&quot;Hello, World!&quot;)</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h2 id="基础语法" tabindex="-1"><a class="header-anchor" href="#基础语法" aria-hidden="true">#</a> 基础语法</h2><blockquote><p>包</p></blockquote><ul><li>文件名与包名没有直接关系，不一定要将文件名与包名定成同一个。</li><li>文件夹名与包名没有直接关系，并非需要一致。</li><li>同一个文件夹下的文件只能有一个包名，否则编译报错</li></ul><blockquote><p>关键字 格式化字符串</p></blockquote><p>Go 语言中使用 fmt.Sprintf 格式化字符串并赋值给新串：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">package main</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">import (</span></span>
<span class="line"><span style="color:#000000;">    &quot;fmt&quot;</span></span>
<span class="line"><span style="color:#000000;">)</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">func main() {</span></span>
<span class="line"><span style="color:#000000;">   // %d 表示整型数字，%s 表示字符串</span></span>
<span class="line"><span style="color:#000000;">    var stockcode=123</span></span>
<span class="line"><span style="color:#000000;">    var enddate=&quot;2020-12-31&quot;</span></span>
<span class="line"><span style="color:#000000;">    var url=&quot;Code=%d&amp;endDate=%s&quot;</span></span>
<span class="line"><span style="color:#000000;">    var target_url=fmt.Sprintf(url,stockcode,enddate)</span></span>
<span class="line"><span style="color:#000000;">    fmt.Println(target_url)</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>分隔符</p></blockquote><p>在 Go 程序中，一行代表一个语句结束。每个语句不需要像 C 家族中的其它语言一样以分号 ; 结尾</p><blockquote><p>标识符</p></blockquote><p>标识符用来命名变量、类型等程序实体。一个标识符实际上就是一个或是多个字母(A~Z和a~z)数字(0~9)、下划线_组成的序列，但是第一个字符必须是字母或下划线而不能是数字。</p><h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2><h3 id="布尔型" tabindex="-1"><a class="header-anchor" href="#布尔型" aria-hidden="true">#</a> 布尔型</h3><h3 id="数字类型" tabindex="-1"><a class="header-anchor" href="#数字类型" aria-hidden="true">#</a> 数字类型</h3><h3 id="派生类型" tabindex="-1"><a class="header-anchor" href="#派生类型" aria-hidden="true">#</a> 派生类型:</h3><ul><li>(a) 指针类型（Pointer）</li><li>(b) 数组类型</li><li>(c) 结构化类型(struct)</li><li>(d) Channel 类型</li><li>(e) 函数类型</li><li>(f) 切片类型</li><li>(g) 接口类型（interface）</li><li>(h) Map 类型</li></ul><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><p>Go 语言变量名由字母、数字、下划线组成，其中首个字符不能为数字。</p><p>声明变量的一般形式是使用 var 关键字：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">package main</span></span>
<span class="line"><span style="color:#000000;">import &quot;fmt&quot;</span></span>
<span class="line"><span style="color:#000000;">func main() {</span></span>
<span class="line"><span style="color:#000000;">    var a string = &quot;Runoob&quot;</span></span>
<span class="line"><span style="color:#000000;">    fmt.Println(a)</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    var b, c int = 1, 2</span></span>
<span class="line"><span style="color:#000000;">    fmt.Println(b, c)</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量声明" tabindex="-1"><a class="header-anchor" href="#变量声明" aria-hidden="true">#</a> 变量声明</h3><blockquote><p>第一种，指定变量类型，如果没有初始化，则变量默认为零值。</p></blockquote><ul><li>数值类型（包括complex64/128）为 0</li><li>布尔类型为 false</li><li>字符串为 &quot;&quot;（空字符串）</li><li>以下几种类型为 nil：<div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">  var a *int</span></span>
<span class="line"><span style="color:#000000;">  var a []int</span></span>
<span class="line"><span style="color:#000000;">  var a map[string] int</span></span>
<span class="line"><span style="color:#000000;">  var a chan int</span></span>
<span class="line"><span style="color:#000000;">  var a func(string) int</span></span>
<span class="line"><span style="color:#000000;">  var a error // error 是接口</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><blockquote><p>第二种，根据值自行判定变量类型。 第三种，如果变量已经使用 var 声明过了，再使用 := 声明变量，就产生编译错误</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">var intVal int </span></span>
<span class="line"><span style="color:#000000;">intVal :=1 // 这时候会产生编译错误，因为 intVal 已经声明，不需要重新声明</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">intVal := 1 // 此时不会产生编译错误，因为有声明新的变量，因为 := 是一个声明语句</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多变量声明" tabindex="-1"><a class="header-anchor" href="#多变量声明" aria-hidden="true">#</a> 多变量声明</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;"> //类型相同多个变量, 非全局变量</span></span>
<span class="line"><span style="color:#000000;">var vname1, vname2, vname3 type</span></span>
<span class="line"><span style="color:#000000;">vname1, vname2, vname3 = v1, v2, v3</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">var vname1, vname2, vname3 = v1, v2, v3 // 和 python 很像,不需要显示声明类型，自动推断</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">vname1, vname2, vname3 := v1, v2, v3 // 出现在 := 左侧的变量不应该是已经被声明过的，否则会导致编译错误</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">// 这种因式分解关键字的写法一般用于声明全局变量</span></span>
<span class="line"><span style="color:#000000;">var (</span></span>
<span class="line"><span style="color:#000000;">    vname1 v_type1</span></span>
<span class="line"><span style="color:#000000;">    vname2 v_type2</span></span>
<span class="line"><span style="color:#000000;">)</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">package main</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">var x, y int</span></span>
<span class="line"><span style="color:#000000;">var (  // 这种因式分解关键字的写法一般用于声明全局变量</span></span>
<span class="line"><span style="color:#000000;">    a int</span></span>
<span class="line"><span style="color:#000000;">    b bool</span></span>
<span class="line"><span style="color:#000000;">)</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">var c, d int = 1, 2</span></span>
<span class="line"><span style="color:#000000;">var e, f = 123, &quot;hello&quot;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">//这种不带声明格式的只能在函数体中出现</span></span>
<span class="line"><span style="color:#000000;">//g, h := 123, &quot;hello&quot;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">func main(){</span></span>
<span class="line"><span style="color:#000000;">    g, h := 123, &quot;hello&quot;</span></span>
<span class="line"><span style="color:#000000;">    println(x, y, a, b, c, d, e, f, g, h)</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="值类型和引用类型" tabindex="-1"><a class="header-anchor" href="#值类型和引用类型" aria-hidden="true">#</a> 值类型和引用类型</h3><h3 id="使用-赋值操作符" tabindex="-1"><a class="header-anchor" href="#使用-赋值操作符" aria-hidden="true">#</a> 使用 := 赋值操作符</h3><p>只能被用在函数体内，而不可以用于全局变量的声明与赋值。使用操作符 := 可以高效地创建一个新的变量，称之为初始化声明。</p><p>如果你声明了一个局部变量却没有在相同的代码块中使用它，同样会得到编译错误</p><p>全局变量是允许声明但不使用的。 同一类型的多个变量可以声明在同一行</p><h3 id="空白标识符在函数返回值时的使用" tabindex="-1"><a class="header-anchor" href="#空白标识符在函数返回值时的使用" aria-hidden="true">#</a> 空白标识符在函数返回值时的使用</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">package main</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">import &quot;fmt&quot;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">func main() {</span></span>
<span class="line"><span style="color:#000000;">  _,numb,strs := numbers() //只获取函数返回值的后两个</span></span>
<span class="line"><span style="color:#000000;">  fmt.Println(numb,strs)</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">//一个可以返回多个值的函数</span></span>
<span class="line"><span style="color:#000000;">func numbers()(int,int,string){</span></span>
<span class="line"><span style="color:#000000;">  a , b , c := 1 , 2 , &quot;str&quot;</span></span>
<span class="line"><span style="color:#000000;">  return a,b,c</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常量" tabindex="-1"><a class="header-anchor" href="#常量" aria-hidden="true">#</a> 常量</h2><ul><li>常量定义格式</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">const identifier [type] = value</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>常量用作枚举</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">const (</span></span>
<span class="line"><span style="color:#000000;">    Unknown = 0</span></span>
<span class="line"><span style="color:#000000;">    Female = 1</span></span>
<span class="line"><span style="color:#000000;">    Male = 2</span></span>
<span class="line"><span style="color:#000000;">)</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>常量可以用len(), cap(), unsafe.Sizeof()函数计算表达式的值。常量表达式中，函数必须是内置函数，否则编译不过：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">package main</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">import &quot;unsafe&quot;</span></span>
<span class="line"><span style="color:#000000;">const (</span></span>
<span class="line"><span style="color:#000000;">    a = &quot;abc&quot;</span></span>
<span class="line"><span style="color:#000000;">    b = len(a)</span></span>
<span class="line"><span style="color:#000000;">    c = unsafe.Sizeof(a)</span></span>
<span class="line"><span style="color:#000000;">)</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">func main(){</span></span>
<span class="line"><span style="color:#000000;">    println(a, b, c)</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="iota" tabindex="-1"><a class="header-anchor" href="#iota" aria-hidden="true">#</a> iota</h3><p>ota，特殊常量，可以认为是一个可以被编译器修改的常量。</p><p>iota 在 const关键字出现时将被重置为 0(const 内部的第一行之前)，const 中每新增一行常量声明将使 iota 计数一次(iota 可理解为 const 语句块中的行索引)。</p><p>iota 可以被用作枚举值：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">const (</span></span>
<span class="line"><span style="color:#000000;">    a = iota</span></span>
<span class="line"><span style="color:#000000;">    b = iota</span></span>
<span class="line"><span style="color:#000000;">    c = iota</span></span>
<span class="line"><span style="color:#000000;">)</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第一个 iota 等于 0，每当 iota 在新的一行被使用时，它的值都会自动加 1；所以 a=0, b=1, c=2 可以简写为如下形式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">const (</span></span>
<span class="line"><span style="color:#000000;">    a = iota</span></span>
<span class="line"><span style="color:#000000;">    b</span></span>
<span class="line"><span style="color:#000000;">    c</span></span>
<span class="line"><span style="color:#000000;">)</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>用法</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">package main</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">import &quot;fmt&quot;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">func main() {</span></span>
<span class="line"><span style="color:#000000;">    const (</span></span>
<span class="line"><span style="color:#000000;">            a = iota   //0</span></span>
<span class="line"><span style="color:#000000;">            b          //1</span></span>
<span class="line"><span style="color:#000000;">            c          //2</span></span>
<span class="line"><span style="color:#000000;">            d = &quot;ha&quot;   //独立值，iota += 1</span></span>
<span class="line"><span style="color:#000000;">            e          //&quot;ha&quot;   iota += 1</span></span>
<span class="line"><span style="color:#000000;">            f = 100    //iota +=1</span></span>
<span class="line"><span style="color:#000000;">            g          //100  iota +=1</span></span>
<span class="line"><span style="color:#000000;">            h = iota   //7,恢复计数</span></span>
<span class="line"><span style="color:#000000;">            i          //8</span></span>
<span class="line"><span style="color:#000000;">    )</span></span>
<span class="line"><span style="color:#000000;">    fmt.Println(a,b,c,d,e,f,g,h,i)</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">// 0 1 2 ha ha 100 100 7 8</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h2><blockquote><p>go特殊运算符</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">&amp;	返回变量存储地址	&amp;a    将给出变量的实际地址。</span></span>
<span class="line"><span style="color:#000000;">* 指针变量。	*a    是一个指针变量</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="条件语句" tabindex="-1"><a class="header-anchor" href="#条件语句" aria-hidden="true">#</a> 条件语句</h2><ul><li>Go 没有三目运算符，所以不支持 ?: 形式的条件判断。</li></ul><blockquote><p>if</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">package main</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">import &quot;fmt&quot;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">func main() {</span></span>
<span class="line"><span style="color:#000000;">   /* 定义局部变量 */</span></span>
<span class="line"><span style="color:#000000;">   var a int = 10</span></span>
<span class="line"><span style="color:#000000;"> </span></span>
<span class="line"><span style="color:#000000;">   /* 使用 if 语句判断布尔表达式 */</span></span>
<span class="line"><span style="color:#000000;">   if a &lt; 20 {</span></span>
<span class="line"><span style="color:#000000;">       /* 如果条件为 true 则执行以下语句 */</span></span>
<span class="line"><span style="color:#000000;">       fmt.Printf(&quot;a 小于 20\\n&quot; )</span></span>
<span class="line"><span style="color:#000000;">   }</span></span>
<span class="line"><span style="color:#000000;">   fmt.Printf(&quot;a 的值为 : %d\\n&quot;, a)</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>select</p></blockquote><ul><li>每个 case 都必须是一个通信</li><li>所有 channel 表达式都会被求值</li><li>所有被发送的表达式都会被求值</li><li>如果任意某个通信可以进行，它就执行，其他被忽略。</li><li>如果有多个 case 都可以运行，Select 会随机公平地选出一个执行。其他不会执行。 <ul><li>否则： <ul><li>如果有 default 子句，则执行该语句。</li><li>如果没有 default 子句，select 将阻塞，直到某个通信可以运行；Go 不会重新对 channel 或值进行求值。</li></ul></li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">select {</span></span>
<span class="line"><span style="color:#000000;">    case communication clause  :</span></span>
<span class="line"><span style="color:#000000;">       statement(s);      </span></span>
<span class="line"><span style="color:#000000;">    case communication clause  :</span></span>
<span class="line"><span style="color:#000000;">       statement(s);</span></span>
<span class="line"><span style="color:#000000;">    /* 你可以定义任意数量的 case */</span></span>
<span class="line"><span style="color:#000000;">    default : /* 可选 */</span></span>
<span class="line"><span style="color:#000000;">       statement(s);</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="循环语句" tabindex="-1"><a class="header-anchor" href="#循环语句" aria-hidden="true">#</a> 循环语句</h2><ul><li>for</li><li>break</li><li>continue</li><li>goto</li></ul><h3 id="for循环" tabindex="-1"><a class="header-anchor" href="#for循环" aria-hidden="true">#</a> for循环</h3><p>Go 语言的 For 循环有 3 种形式，只有其中的一种使用分号。</p><ul><li>for init; condition; post { }</li><li>for condition { }</li><li>for { }</li><li>init： 一般为赋值表达式，给控制变量赋初值；</li><li>condition： 关系表达式或逻辑表达式，循环控制条件；</li><li>post： 一般为赋值表达式，给控制变量增量或减量。</li></ul><p>for 循环的 range 格式可以对 slice、map、数组、字符串等进行迭代循环。格式如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">for key, value := range oldMap {</span></span>
<span class="line"><span style="color:#000000;">    newMap[key] = value</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">// 如果只想读取 value，格式如下：</span></span>
<span class="line"><span style="color:#000000;">for _, value := range oldMap</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">//使用</span></span>
<span class="line"><span style="color:#000000;">package main</span></span>
<span class="line"><span style="color:#000000;">import &quot;fmt&quot;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">func main() {</span></span>
<span class="line"><span style="color:#000000;">   strings := []string{&quot;google&quot;, &quot;runoob&quot;}</span></span>
<span class="line"><span style="color:#000000;">   for i, s := range strings {</span></span>
<span class="line"><span style="color:#000000;">      fmt.Println(i, s)</span></span>
<span class="line"><span style="color:#000000;">   }</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">   numbers := [6]int{1, 2, 3, 5}</span></span>
<span class="line"><span style="color:#000000;">   for i,x:= range numbers {</span></span>
<span class="line"><span style="color:#000000;">      fmt.Printf(&quot;第 %d 位 x 的值 = %d\\n&quot;, i,x)</span></span>
<span class="line"><span style="color:#000000;">   }  </span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="循环嵌套" tabindex="-1"><a class="header-anchor" href="#循环嵌套" aria-hidden="true">#</a> 循环嵌套</h3><h3 id="goto" tabindex="-1"><a class="header-anchor" href="#goto" aria-hidden="true">#</a> goto</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">package main</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">import &quot;fmt&quot;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">func main() {</span></span>
<span class="line"><span style="color:#000000;">   /* 定义局部变量 */</span></span>
<span class="line"><span style="color:#000000;">   var a int = 10</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">   /* 循环 */</span></span>
<span class="line"><span style="color:#000000;">   LOOP: for a &lt; 20 {</span></span>
<span class="line"><span style="color:#000000;">      if a == 15 {</span></span>
<span class="line"><span style="color:#000000;">         /* 跳过迭代 */</span></span>
<span class="line"><span style="color:#000000;">         a = a + 1</span></span>
<span class="line"><span style="color:#000000;">         goto LOOP</span></span>
<span class="line"><span style="color:#000000;">      }</span></span>
<span class="line"><span style="color:#000000;">      fmt.Printf(&quot;a的值为 : %d\\n&quot;, a)</span></span>
<span class="line"><span style="color:#000000;">      a++    </span></span>
<span class="line"><span style="color:#000000;">   }  </span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">以上实例执行结果为：</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">a的值为 : 10</span></span>
<span class="line"><span style="color:#000000;">a的值为 : 11</span></span>
<span class="line"><span style="color:#000000;">a的值为 : 12</span></span>
<span class="line"><span style="color:#000000;">a的值为 : 13</span></span>
<span class="line"><span style="color:#000000;">a的值为 : 14</span></span>
<span class="line"><span style="color:#000000;">a的值为 : 16</span></span>
<span class="line"><span style="color:#000000;">a的值为 : 17</span></span>
<span class="line"><span style="color:#000000;">a的值为 : 18</span></span>
<span class="line"><span style="color:#000000;">a的值为 : 19</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><h3 id="go-init-函数" tabindex="-1"><a class="header-anchor" href="#go-init-函数" aria-hidden="true">#</a> go init 函数</h3><ul><li>go 内置的函数，在main函数之前执行，常用于数据的初始化</li><li>不能被其他函数调用，而是在main函数执行之前，自动被调用</li><li>init函数不能作为参数传入</li><li>不能有传入参数和返回值</li><li>每个源文件能包含多个init函数：</li><li>导包顺序决定init函数执行顺序：最内层的先执行，若main包 引入test1包 test1包引入test2包 则test2包中的init函数先执行</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">func init () {</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="defer-和追踪" tabindex="-1"><a class="header-anchor" href="#defer-和追踪" aria-hidden="true">#</a> defer 和追踪</h3><p>关键字 defer 允许我们推迟到函数返回之前（或任意位置执行 return 语句之后）一刻才执行某个语句或函数（为什么要在返回之后才执行这些语句？因为 return 语句同样可以包含一些操作，而不是单纯地返回某个值）。</p><p>关键字 defer 的用法类似于面向对象编程语言 Java 和 C# 的 finally 语句块，它一般用于释放某些已分配的资源。</p><p>当有多个 defer 行为被注册时，它们会以逆序执行（类似栈，即后进先出）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">func f() {</span></span>
<span class="line"><span style="color:#000000;">    for i := 0; i &lt; 5; i++ {</span></span>
<span class="line"><span style="color:#000000;">        defer fmt.Printf(&quot;%d &quot;, i)</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;">// 上面的代码将会输出：4 3 2 1 0。</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数和接口" tabindex="-1"><a class="header-anchor" href="#函数和接口" aria-hidden="true">#</a> 函数和接口</h3><ul><li>函数可以显示声明，隐式实现接口方法，函数式的多态,接口引用指向函数对象</li><li>HandlerFunc()强制将函数转为HandlerFunc类型</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">type Handler interface {</span></span>
<span class="line"><span style="color:#000000;">	ServeHTTP(ResponseWriter, *Request)</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">type HandlerFunc func(ResponseWriter, *Request)</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">// ServeHTTP calls f(w, r).</span></span>
<span class="line"><span style="color:#000000;">func (f HandlerFunc) ServeHTTP(w ResponseWriter, r *Request) {</span></span>
<span class="line"><span style="color:#000000;">	f(w, r)</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">/* 函数返回两个数的最大值 */</span></span>
<span class="line"><span style="color:#000000;">func max(num1, num2 int) int {</span></span>
<span class="line"><span style="color:#000000;">   /* 声明局部变量 */</span></span>
<span class="line"><span style="color:#000000;">   var result int</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">   if (num1 &gt; num2) {</span></span>
<span class="line"><span style="color:#000000;">      result = num1</span></span>
<span class="line"><span style="color:#000000;">   } else {</span></span>
<span class="line"><span style="color:#000000;">      result = num2</span></span>
<span class="line"><span style="color:#000000;">   }</span></span>
<span class="line"><span style="color:#000000;">   return result</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>函数返回多个值</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">package main</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">import &quot;fmt&quot;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">func swap(x, y string) (string, string) {</span></span>
<span class="line"><span style="color:#000000;">   return y, x</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">func main() {</span></span>
<span class="line"><span style="color:#000000;">   a, b := swap(&quot;Google&quot;, &quot;Runoob&quot;)</span></span>
<span class="line"><span style="color:#000000;">   fmt.Println(a, b)</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>函数参数</p></blockquote><ul><li>值传递</li><li>引用传递</li><li>默认值传递</li></ul><blockquote><p>用法</p></blockquote><ul><li>作为参数</li><li>闭包，匿名函数</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">以下实例中，我们创建了函数 getSequence() ，返回另外一个函数。该函数的目的是在闭包中递增 i 变量，代码如下：</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">package main</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">import &quot;fmt&quot;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">func getSequence() func() int {</span></span>
<span class="line"><span style="color:#000000;">   i:=0</span></span>
<span class="line"><span style="color:#000000;">   return func() int {</span></span>
<span class="line"><span style="color:#000000;">      i+=1</span></span>
<span class="line"><span style="color:#000000;">     return i  </span></span>
<span class="line"><span style="color:#000000;">   }</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">func main(){</span></span>
<span class="line"><span style="color:#000000;">   /* nextNumber 为一个函数，函数 i 为 0 */</span></span>
<span class="line"><span style="color:#000000;">   nextNumber := getSequence()  </span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">   /* 调用 nextNumber 函数，i 变量自增 1 并返回 */</span></span>
<span class="line"><span style="color:#000000;">   fmt.Println(nextNumber())</span></span>
<span class="line"><span style="color:#000000;">   fmt.Println(nextNumber())</span></span>
<span class="line"><span style="color:#000000;">   fmt.Println(nextNumber())</span></span>
<span class="line"><span style="color:#000000;">   </span></span>
<span class="line"><span style="color:#000000;">   /* 创建新的函数 nextNumber1，并查看结果 */</span></span>
<span class="line"><span style="color:#000000;">   nextNumber1 := getSequence()  </span></span>
<span class="line"><span style="color:#000000;">   fmt.Println(nextNumber1())</span></span>
<span class="line"><span style="color:#000000;">   fmt.Println(nextNumber1())</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>函数方法</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">Go 语言中同时有函数和方法。一个方法就是一个包含了接受者的函数，接受者可以是命名类型或者结构体类型的一个值或者是一个指针。所有给定类型的方法属于该类型的方法集。语法格式如下：</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">package main</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">import (</span></span>
<span class="line"><span style="color:#000000;">   &quot;fmt&quot;  </span></span>
<span class="line"><span style="color:#000000;">)</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">/* 定义结构体 */</span></span>
<span class="line"><span style="color:#000000;">type Circle struct {</span></span>
<span class="line"><span style="color:#000000;">  radius float64</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">func main() {</span></span>
<span class="line"><span style="color:#000000;">  var c1 Circle</span></span>
<span class="line"><span style="color:#000000;">  c1.radius = 10.00</span></span>
<span class="line"><span style="color:#000000;">  fmt.Println(&quot;圆的面积 = &quot;, c1.getArea())</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">//该 method 属于 Circle 类型对象中的方法</span></span>
<span class="line"><span style="color:#000000;">func (c Circle) getArea() float64 {</span></span>
<span class="line"><span style="color:#000000;">  //c.radius 即为 Circle 类型对象中的属性</span></span>
<span class="line"><span style="color:#000000;">  return 3.14 * c.radius * c.radius</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">执行结果为：</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">圆的面积 =  314</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域" aria-hidden="true">#</a> 作用域</h2><p>作用域为已声明标识符所表示的常量、类型、变量、函数或包在源代码中的作用范围。</p><p>Go 语言中变量可以在三个地方声明：</p><ul><li>函数内定义的变量称为局部变量</li><li>函数外定义的变量称为全局变量</li><li>函数定义中的变量称为形式参数</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">package main</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">import &quot;fmt&quot;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">/* 声明全局变量 */</span></span>
<span class="line"><span style="color:#000000;">var a int = 20;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">func main() {</span></span>
<span class="line"><span style="color:#000000;">   /* main 函数中声明局部变量 */</span></span>
<span class="line"><span style="color:#000000;">   var a int = 10</span></span>
<span class="line"><span style="color:#000000;">   var b int = 20</span></span>
<span class="line"><span style="color:#000000;">   var c int = 0</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">   fmt.Printf(&quot;main()函数中 a = %d\\n&quot;,  a);</span></span>
<span class="line"><span style="color:#000000;">   c = sum( a, b);</span></span>
<span class="line"><span style="color:#000000;">   fmt.Printf(&quot;main()函数中 c = %d\\n&quot;,  c);</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">/* 函数定义-两数相加 */</span></span>
<span class="line"><span style="color:#000000;">func sum(a, b int) int {</span></span>
<span class="line"><span style="color:#000000;">   fmt.Printf(&quot;sum() 函数中 a = %d\\n&quot;,  a);</span></span>
<span class="line"><span style="color:#000000;">   fmt.Printf(&quot;sum() 函数中 b = %d\\n&quot;,  b);</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">   return a + b;</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>声明数组</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">Go 语言数组声明需要指定元素类型及元素个数，语法格式如下：</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">var variable_name [SIZE] variable_type</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">以上为一维数组的定义方式。例如以下定义了数组 balance 长度为 10 类型为 float32：</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">var balance [10] float32</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>初始化</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">以下演示了数组初始化：</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">var balance = [5]float32{1000.0, 2.0, 3.4, 7.0, 50.0}</span></span>
<span class="line"><span style="color:#000000;">我们也可以通过字面量在声明数组的同时快速初始化数组：</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">balance := [5]float32{1000.0, 2.0, 3.4, 7.0, 50.0}</span></span>
<span class="line"><span style="color:#000000;">如果数组长度不确定，可以使用 ... 代替数组的长度，编译器会根据元素个数自行推断数组的长度：</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">var balance = [...]float32{1000.0, 2.0, 3.4, 7.0, 50.0}</span></span>
<span class="line"><span style="color:#000000;">或</span></span>
<span class="line"><span style="color:#000000;">balance := [...]float32{1000.0, 2.0, 3.4, 7.0, 50.0}</span></span>
<span class="line"><span style="color:#000000;">如果设置了数组的长度，我们还可以通过指定下标来初始化元素：</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">//  将索引为 1 和 3 的元素初始化</span></span>
<span class="line"><span style="color:#000000;">balance := [5]float32{1:2.0,3:7.0}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>样例</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">package main</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">import &quot;fmt&quot;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">func main() {</span></span>
<span class="line"><span style="color:#000000;">   var i,j,k int</span></span>
<span class="line"><span style="color:#000000;">   // 声明数组的同时快速初始化数组</span></span>
<span class="line"><span style="color:#000000;">   balance := [5]float32{1000.0, 2.0, 3.4, 7.0, 50.0}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">   /* 输出数组元素 */         ...</span></span>
<span class="line"><span style="color:#000000;">   for i = 0; i &lt; 5; i++ {</span></span>
<span class="line"><span style="color:#000000;">      fmt.Printf(&quot;balance[%d] = %f\\n&quot;, i, balance[i] )</span></span>
<span class="line"><span style="color:#000000;">   }</span></span>
<span class="line"><span style="color:#000000;">   </span></span>
<span class="line"><span style="color:#000000;">   balance2 := [...]float32{1000.0, 2.0, 3.4, 7.0, 50.0}</span></span>
<span class="line"><span style="color:#000000;">   /* 输出每个数组元素的值 */</span></span>
<span class="line"><span style="color:#000000;">   for j = 0; j &lt; 5; j++ {</span></span>
<span class="line"><span style="color:#000000;">      fmt.Printf(&quot;balance2[%d] = %f\\n&quot;, j, balance2[j] )</span></span>
<span class="line"><span style="color:#000000;">   }</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">   //  将索引为 1 和 3 的元素初始化</span></span>
<span class="line"><span style="color:#000000;">   balance3 := [5]float32{1:2.0,3:7.0}  </span></span>
<span class="line"><span style="color:#000000;">   for k = 0; k &lt; 5; k++ {</span></span>
<span class="line"><span style="color:#000000;">      fmt.Printf(&quot;balance3[%d] = %f\\n&quot;, k, balance3[k] )</span></span>
<span class="line"><span style="color:#000000;">   }</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="指针" tabindex="-1"><a class="header-anchor" href="#指针" aria-hidden="true">#</a> 指针</h2><p>我们都知道，变量是一种使用方便的占位符，用于引用计算机内存地址。</p><p>Go 语言的取地址符是 &amp;，放到一个变量前使用就会返回相应变量的内存地址。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">package main</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">import &quot;fmt&quot;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">func main() {</span></span>
<span class="line"><span style="color:#000000;">   var a int = 10  </span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">   fmt.Printf(&quot;变量的地址: %x\\n&quot;, &amp;a  )</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="什么是指针" tabindex="-1"><a class="header-anchor" href="#什么是指针" aria-hidden="true">#</a> 什么是指针</h3><p>一个指针变量指向了一个值的内存地址。</p><p>类似于变量和常量，在使用指针前你需要声明指针。指针声明格式如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">var var_name *var-type</span></span>
<span class="line"><span style="color:#000000;">var-type 为指针类型，var_name 为指针变量名，* 号用于指定变量是作为一个指针。以下是有效的指针声明：</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">var ip *int        /* 指向整型*/</span></span>
<span class="line"><span style="color:#000000;">var fp *float32    /* 指向浮点型 */</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="如何使用指针" tabindex="-1"><a class="header-anchor" href="#如何使用指针" aria-hidden="true">#</a> 如何使用指针</h3><p>指针使用流程：</p><ul><li>定义指针变量。</li><li>为指针变量赋值。</li><li>访问指针变量中指向地址的值。</li></ul><p>在指针类型前面加上 * 号（前缀）来获取指针所指向的内容。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">package main</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">import &quot;fmt&quot;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">func main() {</span></span>
<span class="line"><span style="color:#000000;">   var a int= 20   /* 声明实际变量 */</span></span>
<span class="line"><span style="color:#000000;">   var ip *int        /* 声明指针变量 */</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">   ip = &amp;a  /* 指针变量的存储地址 */</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">   fmt.Printf(&quot;a 变量的地址是: %x\\n&quot;, &amp;a  )</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">   /* 指针变量的存储地址 */</span></span>
<span class="line"><span style="color:#000000;">   fmt.Printf(&quot;ip 变量储存的指针地址: %x\\n&quot;, ip )</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">   /* 使用指针访问值 */</span></span>
<span class="line"><span style="color:#000000;">   fmt.Printf(&quot;*ip 变量的值: %d\\n&quot;, *ip )</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="空指针" tabindex="-1"><a class="header-anchor" href="#空指针" aria-hidden="true">#</a> 空指针</h3><p>当一个指针被定义后没有分配到任何变量时，它的值为 nil。</p><p>nil 指针也称为空指针。</p><p>nil在概念上和其它语言的null、None、nil、NULL一样，都指代零值或空值。</p><p>一个指针变量通常缩写为 ptr。</p><h3 id="指针数组" tabindex="-1"><a class="header-anchor" href="#指针数组" aria-hidden="true">#</a> 指针数组</h3><p>即存放地址的数组</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">package main</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">import &quot;fmt&quot;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">const MAX int = 3</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">func main() {</span></span>
<span class="line"><span style="color:#000000;">   a := []int{10,100,200}</span></span>
<span class="line"><span style="color:#000000;">   var i int</span></span>
<span class="line"><span style="color:#000000;">   var ptr [MAX]*int;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">   for  i = 0; i &lt; MAX; i++ {</span></span>
<span class="line"><span style="color:#000000;">      ptr[i] = &amp;a[i] /* 整数地址赋值给指针数组 */</span></span>
<span class="line"><span style="color:#000000;">   }</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">   for  i = 0; i &lt; MAX; i++ {</span></span>
<span class="line"><span style="color:#000000;">      fmt.Printf(&quot;a[%d] = %d\\n&quot;, i,*ptr[i] )</span></span>
<span class="line"><span style="color:#000000;">   }</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="指向指针的指针" tabindex="-1"><a class="header-anchor" href="#指向指针的指针" aria-hidden="true">#</a> 指向指针的指针</h3><p>如果一个指针变量存放的又是另一个指针变量的地址，则称这个指针变量为指向指针的指针变量。</p><p>当定义一个指向指针的指针变量时，第一个指针存放第二个指针的地址，第二个指针存放变量的地址：</p><p>指向指针的指针变量声明格式如下：</p><p>var ptr **int;</p><p>访问指向指针的指针变量值需要使用两个 * 号，如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">package main</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">import &quot;fmt&quot;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">func main() {</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">   var a int</span></span>
<span class="line"><span style="color:#000000;">   var ptr *int</span></span>
<span class="line"><span style="color:#000000;">   var pptr **int</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">   a = 3000</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">   /* 指针 ptr 地址 */</span></span>
<span class="line"><span style="color:#000000;">   ptr = &amp;a</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">   /* 指向指针 ptr 地址 */</span></span>
<span class="line"><span style="color:#000000;">   pptr = &amp;ptr</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">   /* 获取 pptr 的值 */</span></span>
<span class="line"><span style="color:#000000;">   fmt.Printf(&quot;变量 a = %d\\n&quot;, a )</span></span>
<span class="line"><span style="color:#000000;">   fmt.Printf(&quot;指针变量 *ptr = %d\\n&quot;, *ptr )</span></span>
<span class="line"><span style="color:#000000;">   fmt.Printf(&quot;指向指针的指针变量 **pptr = %d\\n&quot;, **pptr)</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结构体" tabindex="-1"><a class="header-anchor" href="#结构体" aria-hidden="true">#</a> 结构体</h2><p>可类比Java中的类概念</p><p>Go 语言中数组可以存储同一类型的数据，但在结构体中我们可以为不同项定义不同的数据类型。</p><p>结构体是由一系列具有相同类型或不同类型的数据构成的数据集合。</p><h3 id="定义结构体" tabindex="-1"><a class="header-anchor" href="#定义结构体" aria-hidden="true">#</a> 定义结构体</h3><p>结构体定义需要使用 type 和 struct 语句。struct 语句定义一个新的数据类型，结构体中有一个或多个成员。type 语句设定了结构体的名称。结构体的格式如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">type struct_variable_type struct {</span></span>
<span class="line"><span style="color:#000000;">   member definition</span></span>
<span class="line"><span style="color:#000000;">   member definition</span></span>
<span class="line"><span style="color:#000000;">   ...</span></span>
<span class="line"><span style="color:#000000;">   member definition</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>样例</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">package main</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">import &quot;fmt&quot;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">type Books struct {</span></span>
<span class="line"><span style="color:#000000;">   title string</span></span>
<span class="line"><span style="color:#000000;">   author string</span></span>
<span class="line"><span style="color:#000000;">   subject string</span></span>
<span class="line"><span style="color:#000000;">   book_id int</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">func main() {</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    // 创建一个新的结构体</span></span>
<span class="line"><span style="color:#000000;">    fmt.Println(Books{&quot;Go 语言&quot;, &quot;www.runoob.com&quot;, &quot;Go 语言教程&quot;, 6495407})</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    // 也可以使用 key =&gt; value 格式</span></span>
<span class="line"><span style="color:#000000;">    fmt.Println(Books{title: &quot;Go 语言&quot;, author: &quot;www.runoob.com&quot;, subject: &quot;Go 语言教程&quot;, book_id: 6495407})</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    // 忽略的字段为 0 或 空</span></span>
<span class="line"><span style="color:#000000;">   fmt.Println(Books{title: &quot;Go 语言&quot;, author: &quot;www.runoob.com&quot;})</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="访问结构体成员" tabindex="-1"><a class="header-anchor" href="#访问结构体成员" aria-hidden="true">#</a> 访问结构体成员</h3><p>如果要访问结构体成员，需要使用点号 . 操作符，格式为：</p><p>结构体.成员名</p><h3 id="结构体作为函数参数" tabindex="-1"><a class="header-anchor" href="#结构体作为函数参数" aria-hidden="true">#</a> 结构体作为函数参数</h3><h3 id="结构体作为指针" tabindex="-1"><a class="header-anchor" href="#结构体作为指针" aria-hidden="true">#</a> 结构体作为指针</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">package main</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">import &quot;fmt&quot;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">type Books struct {</span></span>
<span class="line"><span style="color:#000000;">   title string</span></span>
<span class="line"><span style="color:#000000;">   author string</span></span>
<span class="line"><span style="color:#000000;">   subject string</span></span>
<span class="line"><span style="color:#000000;">   book_id int</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">func main() {</span></span>
<span class="line"><span style="color:#000000;">   var Book1 Books        /* 声明 Book1 为 Books 类型 */</span></span>
<span class="line"><span style="color:#000000;">   var Book2 Books        /* 声明 Book2 为 Books 类型 */</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">   /* book 1 描述 */</span></span>
<span class="line"><span style="color:#000000;">   Book1.title = &quot;Go 语言&quot;</span></span>
<span class="line"><span style="color:#000000;">   Book1.author = &quot;www.runoob.com&quot;</span></span>
<span class="line"><span style="color:#000000;">   Book1.subject = &quot;Go 语言教程&quot;</span></span>
<span class="line"><span style="color:#000000;">   Book1.book_id = 6495407</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">   /* book 2 描述 */</span></span>
<span class="line"><span style="color:#000000;">   Book2.title = &quot;Python 教程&quot;</span></span>
<span class="line"><span style="color:#000000;">   Book2.author = &quot;www.runoob.com&quot;</span></span>
<span class="line"><span style="color:#000000;">   Book2.subject = &quot;Python 语言教程&quot;</span></span>
<span class="line"><span style="color:#000000;">   Book2.book_id = 6495700</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">   /* 打印 Book1 信息 */</span></span>
<span class="line"><span style="color:#000000;">   printBook(&amp;Book1)</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">   /* 打印 Book2 信息 */</span></span>
<span class="line"><span style="color:#000000;">   printBook(&amp;Book2)</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;">func printBook( book *Books ) {</span></span>
<span class="line"><span style="color:#000000;">   fmt.Printf( &quot;Book title : %s\\n&quot;, book.title)</span></span>
<span class="line"><span style="color:#000000;">   fmt.Printf( &quot;Book author : %s\\n&quot;, book.author)</span></span>
<span class="line"><span style="color:#000000;">   fmt.Printf( &quot;Book subject : %s\\n&quot;, book.subject)</span></span>
<span class="line"><span style="color:#000000;">   fmt.Printf( &quot;Book book_id : %d\\n&quot;, book.book_id)</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="切片slice" tabindex="-1"><a class="header-anchor" href="#切片slice" aria-hidden="true">#</a> 切片slice</h2><blockquote><p>定义切片</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">你可以声明一个未指定大小的数组来定义切片：</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">var identifier []type</span></span>
<span class="line"><span style="color:#000000;">切片不需要说明长度。</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">或使用 make() 函数来创建切片:</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">var slice1 []type = make([]type, len)</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">也可以简写为</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">slice1 := make([]type, len)</span></span>
<span class="line"><span style="color:#000000;">也可以指定容量，其中 capacity 为可选参数。</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">make([]T, length, capacity)</span></span>
<span class="line"><span style="color:#000000;">这里 len 是数组的长度并且也是切片的初始长度。</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>初始化</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">s :=[] int {1,2,3 } </span></span>
<span class="line"><span style="color:#000000;">直接初始化切片，[] 表示是切片类型，{1,2,3} 初始化值依次是 1,2,3，其 cap=len=3。</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">s := arr[:] </span></span>
<span class="line"><span style="color:#000000;">初始化切片 s，是数组 arr 的引用。</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">s := arr[startIndex:endIndex] </span></span>
<span class="line"><span style="color:#000000;">将 arr 中从下标 startIndex 到 endIndex-1 下的元素创建为一个新的切片。</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">s := arr[startIndex:] </span></span>
<span class="line"><span style="color:#000000;">默认 endIndex 时将表示一直到arr的最后一个元素。</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">s := arr[:endIndex] </span></span>
<span class="line"><span style="color:#000000;">默认 startIndex 时将表示从 arr 的第一个元素开始。</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">s1 := s[startIndex:endIndex] </span></span>
<span class="line"><span style="color:#000000;">通过切片 s 初始化切片 s1。</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">s :=make([]int,len,cap) </span></span>
<span class="line"><span style="color:#000000;">通过内置函数 make() 初始化切片s，[]int 标识为其元素类型为 int 的切片。</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>len() 和 cap() 函数</p></blockquote><p>切片是可索引的，并且可以由 len() 方法获取长度。</p><p>切片提供了计算容量的方法 cap() 可以测量切片最长可以达到多少。</p><blockquote><p>空(nil)切片</p></blockquote><p>一个切片在未初始化之前默认为 nil，长度为 0</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">package main</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">import &quot;fmt&quot;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">func main() {</span></span>
<span class="line"><span style="color:#000000;">   var numbers []int</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">   printSlice(numbers)</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">   if(numbers == nil){</span></span>
<span class="line"><span style="color:#000000;">      fmt.Printf(&quot;切片是空的&quot;)</span></span>
<span class="line"><span style="color:#000000;">   }</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">func printSlice(x []int){</span></span>
<span class="line"><span style="color:#000000;">   fmt.Printf(&quot;len=%d cap=%d slice=%v\\n&quot;,len(x),cap(x),x)</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;">以上实例运行输出结果为:</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">len=0 cap=0 slice=[]</span></span>
<span class="line"><span style="color:#000000;">切片是空的</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>切片截取 append() 和 copy() 函数</p></blockquote><p>如果想增加切片的容量，我们必须创建一个新的更大的切片并把原分片的内容都拷贝过来。</p><p>下面的代码描述了从拷贝切片的 copy 方法和向切片追加新元素的 append 方法。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">package main</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">import &quot;fmt&quot;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">func main() {</span></span>
<span class="line"><span style="color:#000000;">   var numbers []int</span></span>
<span class="line"><span style="color:#000000;">   printSlice(numbers)</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">   /* 允许追加空切片 */</span></span>
<span class="line"><span style="color:#000000;">   numbers = append(numbers, 0)</span></span>
<span class="line"><span style="color:#000000;">   printSlice(numbers)</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">   /* 向切片添加一个元素 */</span></span>
<span class="line"><span style="color:#000000;">   numbers = append(numbers, 1)</span></span>
<span class="line"><span style="color:#000000;">   printSlice(numbers)</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">   /* 同时添加多个元素 */</span></span>
<span class="line"><span style="color:#000000;">   numbers = append(numbers, 2,3,4)</span></span>
<span class="line"><span style="color:#000000;">   printSlice(numbers)</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">   /* 创建切片 numbers1 是之前切片的两倍容量*/</span></span>
<span class="line"><span style="color:#000000;">   numbers1 := make([]int, len(numbers), (cap(numbers))*2)</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">   /* 拷贝 numbers 的内容到 numbers1 */</span></span>
<span class="line"><span style="color:#000000;">   copy(numbers1,numbers)</span></span>
<span class="line"><span style="color:#000000;">   printSlice(numbers1)  </span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">func printSlice(x []int){</span></span>
<span class="line"><span style="color:#000000;">   fmt.Printf(&quot;len=%d cap=%d slice=%v\\n&quot;,len(x),cap(x),x)</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="范围range" tabindex="-1"><a class="header-anchor" href="#范围range" aria-hidden="true">#</a> 范围range</h2><p>Go 语言中 range 关键字用于 for 循环中迭代数组(array)、切片(slice)、通道(channel)或集合(map)的元素。 在数组和切片中它返回元素的索引和索引对应的值，在集合中返回 key-value 对。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">for key, value := range oldMap {</span></span>
<span class="line"><span style="color:#000000;">    newMap[key] = value</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="map集合" tabindex="-1"><a class="header-anchor" href="#map集合" aria-hidden="true">#</a> Map集合</h2><blockquote><p>定义map</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">可以使用内建函数 make 也可以使用 map 关键字来定义 Map:</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">/* 声明变量，默认 map 是 nil */</span></span>
<span class="line"><span style="color:#000000;">var map_variable map[key_data_type]value_data_type</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">/* 使用 make 函数 */</span></span>
<span class="line"><span style="color:#000000;">map_variable := make(map[key_data_type]value_data_type)</span></span>
<span class="line"><span style="color:#000000;">如果不初始化 map，那么就会创建一个 nil map。nil map 不能用来存放键值对</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">package main</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">import &quot;fmt&quot;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">func main() {</span></span>
<span class="line"><span style="color:#000000;">    var countryCapitalMap map[string]string /*创建集合 */</span></span>
<span class="line"><span style="color:#000000;">    countryCapitalMap = make(map[string]string)</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    /* map插入key - value对,各个国家对应的首都 */</span></span>
<span class="line"><span style="color:#000000;">    countryCapitalMap [ &quot;France&quot; ] = &quot;巴黎&quot;</span></span>
<span class="line"><span style="color:#000000;">    countryCapitalMap [ &quot;Italy&quot; ] = &quot;罗马&quot;</span></span>
<span class="line"><span style="color:#000000;">    countryCapitalMap [ &quot;Japan&quot; ] = &quot;东京&quot;</span></span>
<span class="line"><span style="color:#000000;">    countryCapitalMap [ &quot;India &quot; ] = &quot;新德里&quot;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    /*使用键输出地图值 */</span></span>
<span class="line"><span style="color:#000000;">    for country := range countryCapitalMap {</span></span>
<span class="line"><span style="color:#000000;">        fmt.Println(country, &quot;首都是&quot;, countryCapitalMap [country])</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    /*查看元素在集合中是否存在 */</span></span>
<span class="line"><span style="color:#000000;">    capital, ok := countryCapitalMap [ &quot;American&quot; ] /*如果确定是真实的,则存在,否则不存在 */</span></span>
<span class="line"><span style="color:#000000;">    /*fmt.Println(capital) */</span></span>
<span class="line"><span style="color:#000000;">    /*fmt.Println(ok) */</span></span>
<span class="line"><span style="color:#000000;">    if (ok) {</span></span>
<span class="line"><span style="color:#000000;">        fmt.Println(&quot;American 的首都是&quot;, capital)</span></span>
<span class="line"><span style="color:#000000;">    } else {</span></span>
<span class="line"><span style="color:#000000;">        fmt.Println(&quot;American 的首都不存在&quot;)</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>delete() 函数</p></blockquote><p>delete() 函数用于删除集合的元素, 参数为 map 和其对应的 key</p><h2 id="递归函数" tabindex="-1"><a class="header-anchor" href="#递归函数" aria-hidden="true">#</a> 递归函数</h2><p>递归，就是在运行的过程中调用自己。</p><p>Go 语言支持递归。但我们在使用递归时，开发者需要设置退出条件，否则递归将陷入无限循环中。</p><blockquote><p>斐波那契数列</p></blockquote><p>以下实例通过 Go 语言的递归函数实现斐波那契数列：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">实例</span></span>
<span class="line"><span style="color:#000000;">package main</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">import &quot;fmt&quot;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">func fibonacci(n int) int {</span></span>
<span class="line"><span style="color:#000000;">if n &lt; 2 {</span></span>
<span class="line"><span style="color:#000000;">return n</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;">return fibonacci(n-2) + fibonacci(n-1)</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">func main() {</span></span>
<span class="line"><span style="color:#000000;">var i int</span></span>
<span class="line"><span style="color:#000000;">for i = 0; i &lt; 10; i++ {</span></span>
<span class="line"><span style="color:#000000;">fmt.Printf(&quot;%d\\t&quot;, fibonacci(i))</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类型转换" tabindex="-1"><a class="header-anchor" href="#类型转换" aria-hidden="true">#</a> 类型转换</h2><ul><li>go 不支持隐式转换类型</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">package main</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">import &quot;fmt&quot;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">func main() {</span></span>
<span class="line"><span style="color:#000000;">   var sum int = 17</span></span>
<span class="line"><span style="color:#000000;">   var count int = 5</span></span>
<span class="line"><span style="color:#000000;">   var mean float32</span></span>
<span class="line"><span style="color:#000000;">   </span></span>
<span class="line"><span style="color:#000000;">   mean = float32(sum)/float32(count)</span></span>
<span class="line"><span style="color:#000000;">   fmt.Printf(&quot;mean 的值为: %f\\n&quot;,mean)</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h2><p>Go 语言提供了另外一种数据类型即接口，它把所有的具有共性的方法定义在一起，任何其他类型只要实现了这些方法就是实现了这个接口</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">package main</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">import (</span></span>
<span class="line"><span style="color:#000000;">    &quot;fmt&quot;</span></span>
<span class="line"><span style="color:#000000;">)</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">type Phone interface {</span></span>
<span class="line"><span style="color:#000000;">    call()</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">type NokiaPhone struct {</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">func (nokiaPhone NokiaPhone) call() {</span></span>
<span class="line"><span style="color:#000000;">    fmt.Println(&quot;I am Nokia, I can call you!&quot;)</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">type IPhone struct {</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">func (iPhone IPhone) call() {</span></span>
<span class="line"><span style="color:#000000;">    fmt.Println(&quot;I am iPhone, I can call you!&quot;)</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">func main() {</span></span>
<span class="line"><span style="color:#000000;">    var phone Phone</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    phone = new(NokiaPhone)</span></span>
<span class="line"><span style="color:#000000;">    phone.call()</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    phone = new(IPhone)</span></span>
<span class="line"><span style="color:#000000;">    phone.call()</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">在上面的例子中，我们定义了一个接口Phone，接口里面有一个方法call()。然后我们在main函数里面定义了一个Phone类型变量，并分别为之赋值为NokiaPhone和IPhone。然后调用call()方法，输出结果如下：</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">I am Nokia, I can call you!</span></span>
<span class="line"><span style="color:#000000;">I am iPhone, I can call you!</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="错误处理" tabindex="-1"><a class="header-anchor" href="#错误处理" aria-hidden="true">#</a> 错误处理</h2><p>Go 语言通过内置的错误接口提供了非常简单的错误处理机制。</p><p>error类型是一个接口类型，这是它的定义：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">type error interface {</span></span>
<span class="line"><span style="color:#000000;">Error() string</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以在编码中通过实现 error 接口类型来生成错误信息。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">package main</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">import (</span></span>
<span class="line"><span style="color:#000000;">    &quot;fmt&quot;</span></span>
<span class="line"><span style="color:#000000;">)</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">// 定义一个 DivideError 结构</span></span>
<span class="line"><span style="color:#000000;">type DivideError struct {</span></span>
<span class="line"><span style="color:#000000;">    dividee int</span></span>
<span class="line"><span style="color:#000000;">    divider int</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">// 实现 \`error\` 接口</span></span>
<span class="line"><span style="color:#000000;">func (de *DivideError) Error() string {</span></span>
<span class="line"><span style="color:#000000;">    strFormat := \`</span></span>
<span class="line"><span style="color:#000000;">    Cannot proceed, the divider is zero.</span></span>
<span class="line"><span style="color:#000000;">    dividee: %d</span></span>
<span class="line"><span style="color:#000000;">    divider: 0</span></span>
<span class="line"><span style="color:#000000;">\`</span></span>
<span class="line"><span style="color:#000000;">    return fmt.Sprintf(strFormat, de.dividee)</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">// 定义 \`int\` 类型除法运算的函数</span></span>
<span class="line"><span style="color:#000000;">func Divide(varDividee int, varDivider int) (result int, errorMsg string) {</span></span>
<span class="line"><span style="color:#000000;">    if varDivider == 0 {</span></span>
<span class="line"><span style="color:#000000;">            dData := DivideError{</span></span>
<span class="line"><span style="color:#000000;">                    dividee: varDividee,</span></span>
<span class="line"><span style="color:#000000;">                    divider: varDivider,</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">            errorMsg = dData.Error()</span></span>
<span class="line"><span style="color:#000000;">            return</span></span>
<span class="line"><span style="color:#000000;">    } else {</span></span>
<span class="line"><span style="color:#000000;">            return varDividee / varDivider, &quot;&quot;</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">func main() {</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    // 正常情况</span></span>
<span class="line"><span style="color:#000000;">    if result, errorMsg := Divide(100, 10); errorMsg == &quot;&quot; {</span></span>
<span class="line"><span style="color:#000000;">            fmt.Println(&quot;100/10 = &quot;, result)</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">    // 当除数为零的时候会返回错误信息</span></span>
<span class="line"><span style="color:#000000;">    if _, errorMsg := Divide(100, 0); errorMsg != &quot;&quot; {</span></span>
<span class="line"><span style="color:#000000;">            fmt.Println(&quot;errorMsg is: &quot;, errorMsg)</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;">执行以上程序，输出结果为：</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">100/10 =  10</span></span>
<span class="line"><span style="color:#000000;">errorMsg is:  </span></span>
<span class="line"><span style="color:#000000;">    Cannot proceed, the divider is zero.</span></span>
<span class="line"><span style="color:#000000;">    dividee: 100</span></span>
<span class="line"><span style="color:#000000;">    divider: 0</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运行时异常和-panic" tabindex="-1"><a class="header-anchor" href="#运行时异常和-panic" aria-hidden="true">#</a> 运行时异常和 panic</h3><p>当发生像数组下标越界或类型断言失败这样的运行错误时，Go 运行时会触发运行时 panic，伴随着程序的崩溃抛出一个 runtime.Error 接口类型的值。这个错误值有个 RuntimeError() 方法用于区别普通错误。</p><p>panic 可以直接从代码初始化：当错误条件（我们所测试的代码）很严苛且不可恢复，程序不能继续运行时，可以使用 panic 函数产生一个中止程序的运行时错误。panic 接收一个做任意类型的参数，通常是字符串，在程序死亡时被打印出来。Go 运行时负责中止程序并给出调试信息。</p><p>Go panicking：</p><p>在多层嵌套的函数调用中调用 panic，可以马上中止当前函数的执行，所有的 defer 语句都会保证执行并把控制权交还给接收到 panic 的函数调用者。这样向上冒泡直到最顶层，并执行（每层的） defer，在栈顶处程序崩溃，并在命令行中用传给 panic 的值报告错误情况：这个终止过程就是 panicking。</p><h3 id="从-panic-中恢复-recover" tabindex="-1"><a class="header-anchor" href="#从-panic-中恢复-recover" aria-hidden="true">#</a> 从 panic 中恢复（Recover）</h3><p>正如名字一样，这个（recover）内建函数被用于从 panic 或 错误场景中恢复：让程序可以从 panicking 重新获得控制权，停止终止过程进而恢复正常执行。</p><p>recover 只能在 defer 修饰的函数（参见 6.4 节）中使用：用于取得 panic 调用中传递过来的错误值，如果是正常执行，调用 recover 会返回 nil，且没有其它效果。</p><p>总结：panic 会导致栈被展开直到 defer 修饰的 recover () 被调用或者程序中止。</p><p>这跟 Java 和 .NET 这样的语言中的 catch 块类似。</p>`,202);function m(b,y){const a=i("ExternalLinkIcon");return p(),c("div",null,[d,s("p",null,[s("a",t,[n("参考"),l(a)])]),s("p",null,[s("a",v,[n("参考"),l(a)])]),u])}const g=e(o,[["render",m],["__file","go.html.vue"]]);export{g as default};
