import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as s,b as i,d as n,e as a,f as v,r}from"./app.6f24b29a.js";const u={},c=i("h1",{id:"go",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#go","aria-hidden":"true"},"#"),n(" go")],-1),t={href:"https://www.runoob.com/go",target:"_blank",rel:"noopener noreferrer"},m=v(`<h2 id="\u6784\u5EFA\u8FD0\u884C" tabindex="-1"><a class="header-anchor" href="#\u6784\u5EFA\u8FD0\u884C" aria-hidden="true">#</a> \u6784\u5EFA\u8FD0\u884C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u7F16\u8BD1\u8FD0\u884C</span>
go build hello.go 

<span class="token comment"># \u7F16\u8BD1\u4E3A\u53EF\u6267\u884C\u6587\u4EF6</span>
go build hello.go
<span class="token comment"># \u8FD0\u884C</span>
./ hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8BED\u8A00\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u8BED\u8A00\u7ED3\u6784" aria-hidden="true">#</a> \u8BED\u8A00\u7ED3\u6784</h2><ul><li>\u5305\u58F0\u660E</li><li>\u5F15\u5165\u5305</li><li>\u51FD\u6570</li><li>\u53D8\u91CF</li><li>\u8BED\u53E5 &amp; \u8868\u8FBE\u5F0F</li><li>\u6CE8\u91CA</li><li>\u6CE8\u610F <ul><li>\u5F53\u6807\u8BC6\u7B26\uFF08\u5305\u62EC\u5E38\u91CF\u3001\u53D8\u91CF\u3001\u7C7B\u578B\u3001\u51FD\u6570\u540D\u3001\u7ED3\u6784\u5B57\u6BB5\u7B49\u7B49\uFF09\u4EE5\u4E00\u4E2A\u5927\u5199\u5B57\u6BCD\u5F00\u5934\uFF0C\u5982\uFF1AGroup1\uFF0C\u90A3\u4E48\u4F7F\u7528\u8FD9\u79CD\u5F62\u5F0F\u7684\u6807\u8BC6\u7B26\u7684\u5BF9\u8C61\u5C31\u53EF\u4EE5\u88AB\u5916\u90E8\u5305\u7684\u4EE3\u7801\u6240\u4F7F\u7528\uFF08\u5BA2\u6237\u7AEF\u7A0B\u5E8F\u9700\u8981\u5148\u5BFC\u5165\u8FD9\u4E2A\u5305\uFF09\uFF0C\u8FD9\u88AB\u79F0\u4E3A\u5BFC\u51FA\uFF08\u50CF\u9762\u5411\u5BF9\u8C61\u8BED\u8A00\u4E2D\u7684 public\uFF09\uFF1B \u6807\u8BC6\u7B26\u5982\u679C\u4EE5\u5C0F\u5199\u5B57\u6BCD\u5F00\u5934\uFF0C\u5219\u5BF9\u5305\u5916\u662F\u4E0D\u53EF\u89C1\u7684\uFF0C\u4F46\u662F\u4ED6\u4EEC\u5728\u6574\u4E2A\u5305\u7684\u5185\u90E8\u662F\u53EF\u89C1\u5E76\u4E14\u53EF\u7528\u7684\uFF08\u50CF\u9762\u5411\u5BF9\u8C61\u8BED\u8A00\u4E2D\u7684 protected \uFF09</li><li>{ \u4E0D\u80FD\u5355\u72EC\u653E\u5728\u4E00\u884C\uFF0C\u6240\u4EE5\u4EE5\u4E0B\u4EE3\u7801\u5728\u8FD0\u884C\u65F6\u4F1A\u4EA7\u751F\u9519\u8BEF\uFF1A<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import &quot;fmt&quot;

func main()  
{  // \u9519\u8BEF\uFF0C{ \u4E0D\u80FD\u5728\u5355\u72EC\u7684\u884C\u4E0A
    fmt.Println(&quot;Hello, World!&quot;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h2 id="\u57FA\u7840\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u8BED\u6CD5" aria-hidden="true">#</a> \u57FA\u7840\u8BED\u6CD5</h2><blockquote><p>\u5305</p></blockquote><ul><li>\u6587\u4EF6\u540D\u4E0E\u5305\u540D\u6CA1\u6709\u76F4\u63A5\u5173\u7CFB\uFF0C\u4E0D\u4E00\u5B9A\u8981\u5C06\u6587\u4EF6\u540D\u4E0E\u5305\u540D\u5B9A\u6210\u540C\u4E00\u4E2A\u3002</li><li>\u6587\u4EF6\u5939\u540D\u4E0E\u5305\u540D\u6CA1\u6709\u76F4\u63A5\u5173\u7CFB\uFF0C\u5E76\u975E\u9700\u8981\u4E00\u81F4\u3002</li><li>\u540C\u4E00\u4E2A\u6587\u4EF6\u5939\u4E0B\u7684\u6587\u4EF6\u53EA\u80FD\u6709\u4E00\u4E2A\u5305\u540D\uFF0C\u5426\u5219\u7F16\u8BD1\u62A5\u9519</li></ul><blockquote><p>\u5173\u952E\u5B57 \u683C\u5F0F\u5316\u5B57\u7B26\u4E32</p></blockquote><p>Go \u8BED\u8A00\u4E2D\u4F7F\u7528 fmt.Sprintf \u683C\u5F0F\u5316\u5B57\u7B26\u4E32\u5E76\u8D4B\u503C\u7ED9\u65B0\u4E32\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import (
    &quot;fmt&quot;
)

func main() {
   // %d \u8868\u793A\u6574\u578B\u6570\u5B57\uFF0C%s \u8868\u793A\u5B57\u7B26\u4E32
    var stockcode=123
    var enddate=&quot;2020-12-31&quot;
    var url=&quot;Code=%d&amp;endDate=%s&quot;
    var target_url=fmt.Sprintf(url,stockcode,enddate)
    fmt.Println(target_url)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5206\u9694\u7B26</p></blockquote><p>\u5728 Go \u7A0B\u5E8F\u4E2D\uFF0C\u4E00\u884C\u4EE3\u8868\u4E00\u4E2A\u8BED\u53E5\u7ED3\u675F\u3002\u6BCF\u4E2A\u8BED\u53E5\u4E0D\u9700\u8981\u50CF C \u5BB6\u65CF\u4E2D\u7684\u5176\u5B83\u8BED\u8A00\u4E00\u6837\u4EE5\u5206\u53F7 ; \u7ED3\u5C3E</p><blockquote><p>\u6807\u8BC6\u7B26</p></blockquote><p>\u6807\u8BC6\u7B26\u7528\u6765\u547D\u540D\u53D8\u91CF\u3001\u7C7B\u578B\u7B49\u7A0B\u5E8F\u5B9E\u4F53\u3002\u4E00\u4E2A\u6807\u8BC6\u7B26\u5B9E\u9645\u4E0A\u5C31\u662F\u4E00\u4E2A\u6216\u662F\u591A\u4E2A\u5B57\u6BCD(A~Z\u548Ca~z)\u6570\u5B57(0~9)\u3001\u4E0B\u5212\u7EBF_\u7EC4\u6210\u7684\u5E8F\u5217\uFF0C\u4F46\u662F\u7B2C\u4E00\u4E2A\u5B57\u7B26\u5FC5\u987B\u662F\u5B57\u6BCD\u6216\u4E0B\u5212\u7EBF\u800C\u4E0D\u80FD\u662F\u6570\u5B57\u3002</p><h2 id="\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> \u6570\u636E\u7C7B\u578B</h2><h3 id="\u5E03\u5C14\u578B" tabindex="-1"><a class="header-anchor" href="#\u5E03\u5C14\u578B" aria-hidden="true">#</a> \u5E03\u5C14\u578B</h3><h3 id="\u6570\u5B57\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u6570\u5B57\u7C7B\u578B" aria-hidden="true">#</a> \u6570\u5B57\u7C7B\u578B</h3><h3 id="\u6D3E\u751F\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u6D3E\u751F\u7C7B\u578B" aria-hidden="true">#</a> \u6D3E\u751F\u7C7B\u578B:</h3><ul><li>(a) \u6307\u9488\u7C7B\u578B\uFF08Pointer\uFF09</li><li>(b) \u6570\u7EC4\u7C7B\u578B</li><li>(c) \u7ED3\u6784\u5316\u7C7B\u578B(struct)</li><li>(d) Channel \u7C7B\u578B</li><li>(e) \u51FD\u6570\u7C7B\u578B</li><li>(f) \u5207\u7247\u7C7B\u578B</li><li>(g) \u63A5\u53E3\u7C7B\u578B\uFF08interface\uFF09</li><li>(h) Map \u7C7B\u578B</li></ul><h2 id="\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF" aria-hidden="true">#</a> \u53D8\u91CF</h2><p>Go \u8BED\u8A00\u53D8\u91CF\u540D\u7531\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF\u7EC4\u6210\uFF0C\u5176\u4E2D\u9996\u4E2A\u5B57\u7B26\u4E0D\u80FD\u4E3A\u6570\u5B57\u3002</p><p>\u58F0\u660E\u53D8\u91CF\u7684\u4E00\u822C\u5F62\u5F0F\u662F\u4F7F\u7528 var \u5173\u952E\u5B57\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main
import &quot;fmt&quot;
func main() {
    var a string = &quot;Runoob&quot;
    fmt.Println(a)

    var b, c int = 1, 2
    fmt.Println(b, c)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u53D8\u91CF\u58F0\u660E" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF\u58F0\u660E" aria-hidden="true">#</a> \u53D8\u91CF\u58F0\u660E</h3><blockquote><p>\u7B2C\u4E00\u79CD\uFF0C\u6307\u5B9A\u53D8\u91CF\u7C7B\u578B\uFF0C\u5982\u679C\u6CA1\u6709\u521D\u59CB\u5316\uFF0C\u5219\u53D8\u91CF\u9ED8\u8BA4\u4E3A\u96F6\u503C\u3002</p></blockquote><ul><li>\u6570\u503C\u7C7B\u578B\uFF08\u5305\u62ECcomplex64/128\uFF09\u4E3A 0</li><li>\u5E03\u5C14\u7C7B\u578B\u4E3A false</li><li>\u5B57\u7B26\u4E32\u4E3A &quot;&quot;\uFF08\u7A7A\u5B57\u7B26\u4E32\uFF09</li><li>\u4EE5\u4E0B\u51E0\u79CD\u7C7B\u578B\u4E3A nil\uFF1A<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  var a *int
  var a []int
  var a map[string] int
  var a chan int
  var a func(string) int
  var a error // error \u662F\u63A5\u53E3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><blockquote><p>\u7B2C\u4E8C\u79CD\uFF0C\u6839\u636E\u503C\u81EA\u884C\u5224\u5B9A\u53D8\u91CF\u7C7B\u578B\u3002 \u7B2C\u4E09\u79CD\uFF0C\u5982\u679C\u53D8\u91CF\u5DF2\u7ECF\u4F7F\u7528 var \u58F0\u660E\u8FC7\u4E86\uFF0C\u518D\u4F7F\u7528 := \u58F0\u660E\u53D8\u91CF\uFF0C\u5C31\u4EA7\u751F\u7F16\u8BD1\u9519\u8BEF</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var intVal int 
intVal :=1 // \u8FD9\u65F6\u5019\u4F1A\u4EA7\u751F\u7F16\u8BD1\u9519\u8BEF\uFF0C\u56E0\u4E3A intVal \u5DF2\u7ECF\u58F0\u660E\uFF0C\u4E0D\u9700\u8981\u91CD\u65B0\u58F0\u660E


intVal := 1 // \u6B64\u65F6\u4E0D\u4F1A\u4EA7\u751F\u7F16\u8BD1\u9519\u8BEF\uFF0C\u56E0\u4E3A\u6709\u58F0\u660E\u65B0\u7684\u53D8\u91CF\uFF0C\u56E0\u4E3A := \u662F\u4E00\u4E2A\u58F0\u660E\u8BED\u53E5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u591A\u53D8\u91CF\u58F0\u660E" tabindex="-1"><a class="header-anchor" href="#\u591A\u53D8\u91CF\u58F0\u660E" aria-hidden="true">#</a> \u591A\u53D8\u91CF\u58F0\u660E</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> //\u7C7B\u578B\u76F8\u540C\u591A\u4E2A\u53D8\u91CF, \u975E\u5168\u5C40\u53D8\u91CF
var vname1, vname2, vname3 type
vname1, vname2, vname3 = v1, v2, v3

var vname1, vname2, vname3 = v1, v2, v3 // \u548C python \u5F88\u50CF,\u4E0D\u9700\u8981\u663E\u793A\u58F0\u660E\u7C7B\u578B\uFF0C\u81EA\u52A8\u63A8\u65AD

vname1, vname2, vname3 := v1, v2, v3 // \u51FA\u73B0\u5728 := \u5DE6\u4FA7\u7684\u53D8\u91CF\u4E0D\u5E94\u8BE5\u662F\u5DF2\u7ECF\u88AB\u58F0\u660E\u8FC7\u7684\uFF0C\u5426\u5219\u4F1A\u5BFC\u81F4\u7F16\u8BD1\u9519\u8BEF


// \u8FD9\u79CD\u56E0\u5F0F\u5206\u89E3\u5173\u952E\u5B57\u7684\u5199\u6CD5\u4E00\u822C\u7528\u4E8E\u58F0\u660E\u5168\u5C40\u53D8\u91CF
var (
    vname1 v_type1
    vname2 v_type2
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

var x, y int
var (  // \u8FD9\u79CD\u56E0\u5F0F\u5206\u89E3\u5173\u952E\u5B57\u7684\u5199\u6CD5\u4E00\u822C\u7528\u4E8E\u58F0\u660E\u5168\u5C40\u53D8\u91CF
    a int
    b bool
)

var c, d int = 1, 2
var e, f = 123, &quot;hello&quot;

//\u8FD9\u79CD\u4E0D\u5E26\u58F0\u660E\u683C\u5F0F\u7684\u53EA\u80FD\u5728\u51FD\u6570\u4F53\u4E2D\u51FA\u73B0
//g, h := 123, &quot;hello&quot;

func main(){
    g, h := 123, &quot;hello&quot;
    println(x, y, a, b, c, d, e, f, g, h)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u503C\u7C7B\u578B\u548C\u5F15\u7528\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u503C\u7C7B\u578B\u548C\u5F15\u7528\u7C7B\u578B" aria-hidden="true">#</a> \u503C\u7C7B\u578B\u548C\u5F15\u7528\u7C7B\u578B</h3><h3 id="\u4F7F\u7528-\u8D4B\u503C\u64CD\u4F5C\u7B26" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-\u8D4B\u503C\u64CD\u4F5C\u7B26" aria-hidden="true">#</a> \u4F7F\u7528 := \u8D4B\u503C\u64CD\u4F5C\u7B26</h3><p>\u53EA\u80FD\u88AB\u7528\u5728\u51FD\u6570\u4F53\u5185\uFF0C\u800C\u4E0D\u53EF\u4EE5\u7528\u4E8E\u5168\u5C40\u53D8\u91CF\u7684\u58F0\u660E\u4E0E\u8D4B\u503C\u3002\u4F7F\u7528\u64CD\u4F5C\u7B26 := \u53EF\u4EE5\u9AD8\u6548\u5730\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u53D8\u91CF\uFF0C\u79F0\u4E4B\u4E3A\u521D\u59CB\u5316\u58F0\u660E\u3002</p><p>\u5982\u679C\u4F60\u58F0\u660E\u4E86\u4E00\u4E2A\u5C40\u90E8\u53D8\u91CF\u5374\u6CA1\u6709\u5728\u76F8\u540C\u7684\u4EE3\u7801\u5757\u4E2D\u4F7F\u7528\u5B83\uFF0C\u540C\u6837\u4F1A\u5F97\u5230\u7F16\u8BD1\u9519\u8BEF</p><p>\u5168\u5C40\u53D8\u91CF\u662F\u5141\u8BB8\u58F0\u660E\u4F46\u4E0D\u4F7F\u7528\u7684\u3002 \u540C\u4E00\u7C7B\u578B\u7684\u591A\u4E2A\u53D8\u91CF\u53EF\u4EE5\u58F0\u660E\u5728\u540C\u4E00\u884C</p><h3 id="\u7A7A\u767D\u6807\u8BC6\u7B26\u5728\u51FD\u6570\u8FD4\u56DE\u503C\u65F6\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u7A7A\u767D\u6807\u8BC6\u7B26\u5728\u51FD\u6570\u8FD4\u56DE\u503C\u65F6\u7684\u4F7F\u7528" aria-hidden="true">#</a> \u7A7A\u767D\u6807\u8BC6\u7B26\u5728\u51FD\u6570\u8FD4\u56DE\u503C\u65F6\u7684\u4F7F\u7528</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import &quot;fmt&quot;

func main() {
  _,numb,strs := numbers() //\u53EA\u83B7\u53D6\u51FD\u6570\u8FD4\u56DE\u503C\u7684\u540E\u4E24\u4E2A
  fmt.Println(numb,strs)
}

//\u4E00\u4E2A\u53EF\u4EE5\u8FD4\u56DE\u591A\u4E2A\u503C\u7684\u51FD\u6570
func numbers()(int,int,string){
  a , b , c := 1 , 2 , &quot;str&quot;
  return a,b,c
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5E38\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5E38\u91CF" aria-hidden="true">#</a> \u5E38\u91CF</h2><ul><li>\u5E38\u91CF\u5B9A\u4E49\u683C\u5F0F</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const identifier [type] = value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u5E38\u91CF\u7528\u4F5C\u679A\u4E3E</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const (
    Unknown = 0
    Female = 1
    Male = 2
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5E38\u91CF\u53EF\u4EE5\u7528len(), cap(), unsafe.Sizeof()\u51FD\u6570\u8BA1\u7B97\u8868\u8FBE\u5F0F\u7684\u503C\u3002\u5E38\u91CF\u8868\u8FBE\u5F0F\u4E2D\uFF0C\u51FD\u6570\u5FC5\u987B\u662F\u5185\u7F6E\u51FD\u6570\uFF0C\u5426\u5219\u7F16\u8BD1\u4E0D\u8FC7\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import &quot;unsafe&quot;
const (
    a = &quot;abc&quot;
    b = len(a)
    c = unsafe.Sizeof(a)
)

func main(){
    println(a, b, c)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="iota" tabindex="-1"><a class="header-anchor" href="#iota" aria-hidden="true">#</a> iota</h3><p>ota\uFF0C\u7279\u6B8A\u5E38\u91CF\uFF0C\u53EF\u4EE5\u8BA4\u4E3A\u662F\u4E00\u4E2A\u53EF\u4EE5\u88AB\u7F16\u8BD1\u5668\u4FEE\u6539\u7684\u5E38\u91CF\u3002</p><p>iota \u5728 const\u5173\u952E\u5B57\u51FA\u73B0\u65F6\u5C06\u88AB\u91CD\u7F6E\u4E3A 0(const \u5185\u90E8\u7684\u7B2C\u4E00\u884C\u4E4B\u524D)\uFF0Cconst \u4E2D\u6BCF\u65B0\u589E\u4E00\u884C\u5E38\u91CF\u58F0\u660E\u5C06\u4F7F iota \u8BA1\u6570\u4E00\u6B21(iota \u53EF\u7406\u89E3\u4E3A const \u8BED\u53E5\u5757\u4E2D\u7684\u884C\u7D22\u5F15)\u3002</p><p>iota \u53EF\u4EE5\u88AB\u7528\u4F5C\u679A\u4E3E\u503C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const (
    a = iota
    b = iota
    c = iota
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B2C\u4E00\u4E2A iota \u7B49\u4E8E 0\uFF0C\u6BCF\u5F53 iota \u5728\u65B0\u7684\u4E00\u884C\u88AB\u4F7F\u7528\u65F6\uFF0C\u5B83\u7684\u503C\u90FD\u4F1A\u81EA\u52A8\u52A0 1\uFF1B\u6240\u4EE5 a=0, b=1, c=2 \u53EF\u4EE5\u7B80\u5199\u4E3A\u5982\u4E0B\u5F62\u5F0F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const (
    a = iota
    b
    c
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u7528\u6CD5</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import &quot;fmt&quot;

func main() {
    const (
            a = iota   //0
            b          //1
            c          //2
            d = &quot;ha&quot;   //\u72EC\u7ACB\u503C\uFF0Ciota += 1
            e          //&quot;ha&quot;   iota += 1
            f = 100    //iota +=1
            g          //100  iota +=1
            h = iota   //7,\u6062\u590D\u8BA1\u6570
            i          //8
    )
    fmt.Println(a,b,c,d,e,f,g,h,i)
}

// 0 1 2 ha ha 100 100 7 8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u8FD0\u7B97\u7B26</h2><blockquote><p>go\u7279\u6B8A\u8FD0\u7B97\u7B26</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&amp;	\u8FD4\u56DE\u53D8\u91CF\u5B58\u50A8\u5730\u5740	&amp;a    \u5C06\u7ED9\u51FA\u53D8\u91CF\u7684\u5B9E\u9645\u5730\u5740\u3002
* \u6307\u9488\u53D8\u91CF\u3002	*a    \u662F\u4E00\u4E2A\u6307\u9488\u53D8\u91CF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6761\u4EF6\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#\u6761\u4EF6\u8BED\u53E5" aria-hidden="true">#</a> \u6761\u4EF6\u8BED\u53E5</h2><ul><li>Go \u6CA1\u6709\u4E09\u76EE\u8FD0\u7B97\u7B26\uFF0C\u6240\u4EE5\u4E0D\u652F\u6301 ?: \u5F62\u5F0F\u7684\u6761\u4EF6\u5224\u65AD\u3002</li></ul><blockquote><p>if</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import &quot;fmt&quot;

func main() {
   /* \u5B9A\u4E49\u5C40\u90E8\u53D8\u91CF */
   var a int = 10
 
   /* \u4F7F\u7528 if \u8BED\u53E5\u5224\u65AD\u5E03\u5C14\u8868\u8FBE\u5F0F */
   if a &lt; 20 {
       /* \u5982\u679C\u6761\u4EF6\u4E3A true \u5219\u6267\u884C\u4EE5\u4E0B\u8BED\u53E5 */
       fmt.Printf(&quot;a \u5C0F\u4E8E 20\\n&quot; )
   }
   fmt.Printf(&quot;a \u7684\u503C\u4E3A : %d\\n&quot;, a)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>select</p></blockquote><ul><li>\u6BCF\u4E2A case \u90FD\u5FC5\u987B\u662F\u4E00\u4E2A\u901A\u4FE1</li><li>\u6240\u6709 channel \u8868\u8FBE\u5F0F\u90FD\u4F1A\u88AB\u6C42\u503C</li><li>\u6240\u6709\u88AB\u53D1\u9001\u7684\u8868\u8FBE\u5F0F\u90FD\u4F1A\u88AB\u6C42\u503C</li><li>\u5982\u679C\u4EFB\u610F\u67D0\u4E2A\u901A\u4FE1\u53EF\u4EE5\u8FDB\u884C\uFF0C\u5B83\u5C31\u6267\u884C\uFF0C\u5176\u4ED6\u88AB\u5FFD\u7565\u3002</li><li>\u5982\u679C\u6709\u591A\u4E2A case \u90FD\u53EF\u4EE5\u8FD0\u884C\uFF0CSelect \u4F1A\u968F\u673A\u516C\u5E73\u5730\u9009\u51FA\u4E00\u4E2A\u6267\u884C\u3002\u5176\u4ED6\u4E0D\u4F1A\u6267\u884C\u3002 <ul><li>\u5426\u5219\uFF1A <ul><li>\u5982\u679C\u6709 default \u5B50\u53E5\uFF0C\u5219\u6267\u884C\u8BE5\u8BED\u53E5\u3002</li><li>\u5982\u679C\u6CA1\u6709 default \u5B50\u53E5\uFF0Cselect \u5C06\u963B\u585E\uFF0C\u76F4\u5230\u67D0\u4E2A\u901A\u4FE1\u53EF\u4EE5\u8FD0\u884C\uFF1BGo \u4E0D\u4F1A\u91CD\u65B0\u5BF9 channel \u6216\u503C\u8FDB\u884C\u6C42\u503C\u3002</li></ul></li></ul></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>select {
    case communication clause  :
       statement(s);      
    case communication clause  :
       statement(s);
    /* \u4F60\u53EF\u4EE5\u5B9A\u4E49\u4EFB\u610F\u6570\u91CF\u7684 case */
    default : /* \u53EF\u9009 */
       statement(s);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5FAA\u73AF\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#\u5FAA\u73AF\u8BED\u53E5" aria-hidden="true">#</a> \u5FAA\u73AF\u8BED\u53E5</h2><ul><li>for</li><li>break</li><li>continue</li><li>goto</li></ul><h3 id="for\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#for\u5FAA\u73AF" aria-hidden="true">#</a> for\u5FAA\u73AF</h3><p>Go \u8BED\u8A00\u7684 For \u5FAA\u73AF\u6709 3 \u79CD\u5F62\u5F0F\uFF0C\u53EA\u6709\u5176\u4E2D\u7684\u4E00\u79CD\u4F7F\u7528\u5206\u53F7\u3002</p><ul><li>for init; condition; post { }</li><li>for condition { }</li><li>for { }</li><li>init\uFF1A \u4E00\u822C\u4E3A\u8D4B\u503C\u8868\u8FBE\u5F0F\uFF0C\u7ED9\u63A7\u5236\u53D8\u91CF\u8D4B\u521D\u503C\uFF1B</li><li>condition\uFF1A \u5173\u7CFB\u8868\u8FBE\u5F0F\u6216\u903B\u8F91\u8868\u8FBE\u5F0F\uFF0C\u5FAA\u73AF\u63A7\u5236\u6761\u4EF6\uFF1B</li><li>post\uFF1A \u4E00\u822C\u4E3A\u8D4B\u503C\u8868\u8FBE\u5F0F\uFF0C\u7ED9\u63A7\u5236\u53D8\u91CF\u589E\u91CF\u6216\u51CF\u91CF\u3002</li></ul><p>for \u5FAA\u73AF\u7684 range \u683C\u5F0F\u53EF\u4EE5\u5BF9 slice\u3001map\u3001\u6570\u7EC4\u3001\u5B57\u7B26\u4E32\u7B49\u8FDB\u884C\u8FED\u4EE3\u5FAA\u73AF\u3002\u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>for key, value := range oldMap {
    newMap[key] = value
}

// \u5982\u679C\u53EA\u60F3\u8BFB\u53D6 value\uFF0C\u683C\u5F0F\u5982\u4E0B\uFF1A
for _, value := range oldMap

//\u4F7F\u7528
package main
import &quot;fmt&quot;

func main() {
   strings := []string{&quot;google&quot;, &quot;runoob&quot;}
   for i, s := range strings {
      fmt.Println(i, s)
   }


   numbers := [6]int{1, 2, 3, 5}
   for i,x:= range numbers {
      fmt.Printf(&quot;\u7B2C %d \u4F4D x \u7684\u503C = %d\\n&quot;, i,x)
   }  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5FAA\u73AF\u5D4C\u5957" tabindex="-1"><a class="header-anchor" href="#\u5FAA\u73AF\u5D4C\u5957" aria-hidden="true">#</a> \u5FAA\u73AF\u5D4C\u5957</h3><h3 id="goto" tabindex="-1"><a class="header-anchor" href="#goto" aria-hidden="true">#</a> goto</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import &quot;fmt&quot;

func main() {
   /* \u5B9A\u4E49\u5C40\u90E8\u53D8\u91CF */
   var a int = 10

   /* \u5FAA\u73AF */
   LOOP: for a &lt; 20 {
      if a == 15 {
         /* \u8DF3\u8FC7\u8FED\u4EE3 */
         a = a + 1
         goto LOOP
      }
      fmt.Printf(&quot;a\u7684\u503C\u4E3A : %d\\n&quot;, a)
      a++    
   }  
}

\u4EE5\u4E0A\u5B9E\u4F8B\u6267\u884C\u7ED3\u679C\u4E3A\uFF1A

a\u7684\u503C\u4E3A : 10
a\u7684\u503C\u4E3A : 11
a\u7684\u503C\u4E3A : 12
a\u7684\u503C\u4E3A : 13
a\u7684\u503C\u4E3A : 14
a\u7684\u503C\u4E3A : 16
a\u7684\u503C\u4E3A : 17
a\u7684\u503C\u4E3A : 18
a\u7684\u503C\u4E3A : 19
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570" aria-hidden="true">#</a> \u51FD\u6570</h2><h3 id="go-init-\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#go-init-\u51FD\u6570" aria-hidden="true">#</a> go init \u51FD\u6570</h3><ul><li>go \u5185\u7F6E\u7684\u51FD\u6570\uFF0C\u5728main\u51FD\u6570\u4E4B\u524D\u6267\u884C\uFF0C\u5E38\u7528\u4E8E\u6570\u636E\u7684\u521D\u59CB\u5316</li><li>\u4E0D\u80FD\u88AB\u5176\u4ED6\u51FD\u6570\u8C03\u7528\uFF0C\u800C\u662F\u5728main\u51FD\u6570\u6267\u884C\u4E4B\u524D\uFF0C\u81EA\u52A8\u88AB\u8C03\u7528</li><li>init\u51FD\u6570\u4E0D\u80FD\u4F5C\u4E3A\u53C2\u6570\u4F20\u5165</li><li>\u4E0D\u80FD\u6709\u4F20\u5165\u53C2\u6570\u548C\u8FD4\u56DE\u503C</li><li>\u6BCF\u4E2A\u6E90\u6587\u4EF6\u80FD\u5305\u542B\u591A\u4E2Ainit\u51FD\u6570\uFF1A</li><li>\u5BFC\u5305\u987A\u5E8F\u51B3\u5B9Ainit\u51FD\u6570\u6267\u884C\u987A\u5E8F\uFF1A\u6700\u5185\u5C42\u7684\u5148\u6267\u884C\uFF0C\u82E5main\u5305 \u5F15\u5165test1\u5305 test1\u5305\u5F15\u5165test2\u5305 \u5219test2\u5305\u4E2D\u7684init\u51FD\u6570\u5148\u6267\u884C</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func init () {

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="defer-\u548C\u8FFD\u8E2A" tabindex="-1"><a class="header-anchor" href="#defer-\u548C\u8FFD\u8E2A" aria-hidden="true">#</a> defer \u548C\u8FFD\u8E2A</h3><p>\u5173\u952E\u5B57 defer \u5141\u8BB8\u6211\u4EEC\u63A8\u8FDF\u5230\u51FD\u6570\u8FD4\u56DE\u4E4B\u524D\uFF08\u6216\u4EFB\u610F\u4F4D\u7F6E\u6267\u884C return \u8BED\u53E5\u4E4B\u540E\uFF09\u4E00\u523B\u624D\u6267\u884C\u67D0\u4E2A\u8BED\u53E5\u6216\u51FD\u6570\uFF08\u4E3A\u4EC0\u4E48\u8981\u5728\u8FD4\u56DE\u4E4B\u540E\u624D\u6267\u884C\u8FD9\u4E9B\u8BED\u53E5\uFF1F\u56E0\u4E3A return \u8BED\u53E5\u540C\u6837\u53EF\u4EE5\u5305\u542B\u4E00\u4E9B\u64CD\u4F5C\uFF0C\u800C\u4E0D\u662F\u5355\u7EAF\u5730\u8FD4\u56DE\u67D0\u4E2A\u503C\uFF09\u3002</p><p>\u5173\u952E\u5B57 defer \u7684\u7528\u6CD5\u7C7B\u4F3C\u4E8E\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\u8BED\u8A00 Java \u548C C# \u7684 finally \u8BED\u53E5\u5757\uFF0C\u5B83\u4E00\u822C\u7528\u4E8E\u91CA\u653E\u67D0\u4E9B\u5DF2\u5206\u914D\u7684\u8D44\u6E90\u3002</p><p>\u5F53\u6709\u591A\u4E2A defer \u884C\u4E3A\u88AB\u6CE8\u518C\u65F6\uFF0C\u5B83\u4EEC\u4F1A\u4EE5\u9006\u5E8F\u6267\u884C\uFF08\u7C7B\u4F3C\u6808\uFF0C\u5373\u540E\u8FDB\u5148\u51FA\uFF09\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func f() {
    for i := 0; i &lt; 5; i++ {
        defer fmt.Printf(&quot;%d &quot;, i)
    }
}
// \u4E0A\u9762\u7684\u4EE3\u7801\u5C06\u4F1A\u8F93\u51FA\uFF1A4 3 2 1 0\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u51FD\u6570\u548C\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u548C\u63A5\u53E3" aria-hidden="true">#</a> \u51FD\u6570\u548C\u63A5\u53E3</h3><ul><li>\u51FD\u6570\u53EF\u4EE5\u663E\u793A\u58F0\u660E\uFF0C\u9690\u5F0F\u5B9E\u73B0\u63A5\u53E3\u65B9\u6CD5\uFF0C\u51FD\u6570\u5F0F\u7684\u591A\u6001,\u63A5\u53E3\u5F15\u7528\u6307\u5411\u51FD\u6570\u5BF9\u8C61</li><li>HandlerFunc()\u5F3A\u5236\u5C06\u51FD\u6570\u8F6C\u4E3AHandlerFunc\u7C7B\u578B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
type Handler interface {
	ServeHTTP(ResponseWriter, *Request)
}

type HandlerFunc func(ResponseWriter, *Request)

// ServeHTTP calls f(w, r).
func (f HandlerFunc) ServeHTTP(w ResponseWriter, r *Request) {
	f(w, r)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/* \u51FD\u6570\u8FD4\u56DE\u4E24\u4E2A\u6570\u7684\u6700\u5927\u503C */
func max(num1, num2 int) int {
   /* \u58F0\u660E\u5C40\u90E8\u53D8\u91CF */
   var result int

   if (num1 &gt; num2) {
      result = num1
   } else {
      result = num2
   }
   return result
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u51FD\u6570\u8FD4\u56DE\u591A\u4E2A\u503C</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import &quot;fmt&quot;

func swap(x, y string) (string, string) {
   return y, x
}

func main() {
   a, b := swap(&quot;Google&quot;, &quot;Runoob&quot;)
   fmt.Println(a, b)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u51FD\u6570\u53C2\u6570</p></blockquote><ul><li>\u503C\u4F20\u9012</li><li>\u5F15\u7528\u4F20\u9012</li><li>\u9ED8\u8BA4\u503C\u4F20\u9012</li></ul><blockquote><p>\u7528\u6CD5</p></blockquote><ul><li>\u4F5C\u4E3A\u53C2\u6570</li><li>\u95ED\u5305\uFF0C\u533F\u540D\u51FD\u6570</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4EE5\u4E0B\u5B9E\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u521B\u5EFA\u4E86\u51FD\u6570 getSequence() \uFF0C\u8FD4\u56DE\u53E6\u5916\u4E00\u4E2A\u51FD\u6570\u3002\u8BE5\u51FD\u6570\u7684\u76EE\u7684\u662F\u5728\u95ED\u5305\u4E2D\u9012\u589E i \u53D8\u91CF\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A

package main

import &quot;fmt&quot;

func getSequence() func() int {
   i:=0
   return func() int {
      i+=1
     return i  
   }
}

func main(){
   /* nextNumber \u4E3A\u4E00\u4E2A\u51FD\u6570\uFF0C\u51FD\u6570 i \u4E3A 0 */
   nextNumber := getSequence()  

   /* \u8C03\u7528 nextNumber \u51FD\u6570\uFF0Ci \u53D8\u91CF\u81EA\u589E 1 \u5E76\u8FD4\u56DE */
   fmt.Println(nextNumber())
   fmt.Println(nextNumber())
   fmt.Println(nextNumber())
   
   /* \u521B\u5EFA\u65B0\u7684\u51FD\u6570 nextNumber1\uFF0C\u5E76\u67E5\u770B\u7ED3\u679C */
   nextNumber1 := getSequence()  
   fmt.Println(nextNumber1())
   fmt.Println(nextNumber1())
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u51FD\u6570\u65B9\u6CD5</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Go \u8BED\u8A00\u4E2D\u540C\u65F6\u6709\u51FD\u6570\u548C\u65B9\u6CD5\u3002\u4E00\u4E2A\u65B9\u6CD5\u5C31\u662F\u4E00\u4E2A\u5305\u542B\u4E86\u63A5\u53D7\u8005\u7684\u51FD\u6570\uFF0C\u63A5\u53D7\u8005\u53EF\u4EE5\u662F\u547D\u540D\u7C7B\u578B\u6216\u8005\u7ED3\u6784\u4F53\u7C7B\u578B\u7684\u4E00\u4E2A\u503C\u6216\u8005\u662F\u4E00\u4E2A\u6307\u9488\u3002\u6240\u6709\u7ED9\u5B9A\u7C7B\u578B\u7684\u65B9\u6CD5\u5C5E\u4E8E\u8BE5\u7C7B\u578B\u7684\u65B9\u6CD5\u96C6\u3002\u8BED\u6CD5\u683C\u5F0F\u5982\u4E0B\uFF1A

package main

import (
   &quot;fmt&quot;  
)

/* \u5B9A\u4E49\u7ED3\u6784\u4F53 */
type Circle struct {
  radius float64
}

func main() {
  var c1 Circle
  c1.radius = 10.00
  fmt.Println(&quot;\u5706\u7684\u9762\u79EF = &quot;, c1.getArea())
}

//\u8BE5 method \u5C5E\u4E8E Circle \u7C7B\u578B\u5BF9\u8C61\u4E2D\u7684\u65B9\u6CD5
func (c Circle) getArea() float64 {
  //c.radius \u5373\u4E3A Circle \u7C7B\u578B\u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027
  return 3.14 * c.radius * c.radius
}


\u6267\u884C\u7ED3\u679C\u4E3A\uFF1A

\u5706\u7684\u9762\u79EF =  314
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u4F5C\u7528\u57DF</h2><p>\u4F5C\u7528\u57DF\u4E3A\u5DF2\u58F0\u660E\u6807\u8BC6\u7B26\u6240\u8868\u793A\u7684\u5E38\u91CF\u3001\u7C7B\u578B\u3001\u53D8\u91CF\u3001\u51FD\u6570\u6216\u5305\u5728\u6E90\u4EE3\u7801\u4E2D\u7684\u4F5C\u7528\u8303\u56F4\u3002</p><p>Go \u8BED\u8A00\u4E2D\u53D8\u91CF\u53EF\u4EE5\u5728\u4E09\u4E2A\u5730\u65B9\u58F0\u660E\uFF1A</p><ul><li>\u51FD\u6570\u5185\u5B9A\u4E49\u7684\u53D8\u91CF\u79F0\u4E3A\u5C40\u90E8\u53D8\u91CF</li><li>\u51FD\u6570\u5916\u5B9A\u4E49\u7684\u53D8\u91CF\u79F0\u4E3A\u5168\u5C40\u53D8\u91CF</li><li>\u51FD\u6570\u5B9A\u4E49\u4E2D\u7684\u53D8\u91CF\u79F0\u4E3A\u5F62\u5F0F\u53C2\u6570</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import &quot;fmt&quot;

/* \u58F0\u660E\u5168\u5C40\u53D8\u91CF */
var a int = 20;

func main() {
   /* main \u51FD\u6570\u4E2D\u58F0\u660E\u5C40\u90E8\u53D8\u91CF */
   var a int = 10
   var b int = 20
   var c int = 0

   fmt.Printf(&quot;main()\u51FD\u6570\u4E2D a = %d\\n&quot;,  a);
   c = sum( a, b);
   fmt.Printf(&quot;main()\u51FD\u6570\u4E2D c = %d\\n&quot;,  c);
}

/* \u51FD\u6570\u5B9A\u4E49-\u4E24\u6570\u76F8\u52A0 */
func sum(a, b int) int {
   fmt.Printf(&quot;sum() \u51FD\u6570\u4E2D a = %d\\n&quot;,  a);
   fmt.Printf(&quot;sum() \u51FD\u6570\u4E2D b = %d\\n&quot;,  b);

   return a + b;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u58F0\u660E\u6570\u7EC4</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Go \u8BED\u8A00\u6570\u7EC4\u58F0\u660E\u9700\u8981\u6307\u5B9A\u5143\u7D20\u7C7B\u578B\u53CA\u5143\u7D20\u4E2A\u6570\uFF0C\u8BED\u6CD5\u683C\u5F0F\u5982\u4E0B\uFF1A

var variable_name [SIZE] variable_type

\u4EE5\u4E0A\u4E3A\u4E00\u7EF4\u6570\u7EC4\u7684\u5B9A\u4E49\u65B9\u5F0F\u3002\u4F8B\u5982\u4EE5\u4E0B\u5B9A\u4E49\u4E86\u6570\u7EC4 balance \u957F\u5EA6\u4E3A 10 \u7C7B\u578B\u4E3A float32\uFF1A

var balance [10] float32
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u521D\u59CB\u5316</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4EE5\u4E0B\u6F14\u793A\u4E86\u6570\u7EC4\u521D\u59CB\u5316\uFF1A

var balance = [5]float32{1000.0, 2.0, 3.4, 7.0, 50.0}
\u6211\u4EEC\u4E5F\u53EF\u4EE5\u901A\u8FC7\u5B57\u9762\u91CF\u5728\u58F0\u660E\u6570\u7EC4\u7684\u540C\u65F6\u5FEB\u901F\u521D\u59CB\u5316\u6570\u7EC4\uFF1A

balance := [5]float32{1000.0, 2.0, 3.4, 7.0, 50.0}
\u5982\u679C\u6570\u7EC4\u957F\u5EA6\u4E0D\u786E\u5B9A\uFF0C\u53EF\u4EE5\u4F7F\u7528 ... \u4EE3\u66FF\u6570\u7EC4\u7684\u957F\u5EA6\uFF0C\u7F16\u8BD1\u5668\u4F1A\u6839\u636E\u5143\u7D20\u4E2A\u6570\u81EA\u884C\u63A8\u65AD\u6570\u7EC4\u7684\u957F\u5EA6\uFF1A

var balance = [...]float32{1000.0, 2.0, 3.4, 7.0, 50.0}
\u6216
balance := [...]float32{1000.0, 2.0, 3.4, 7.0, 50.0}
\u5982\u679C\u8BBE\u7F6E\u4E86\u6570\u7EC4\u7684\u957F\u5EA6\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u901A\u8FC7\u6307\u5B9A\u4E0B\u6807\u6765\u521D\u59CB\u5316\u5143\u7D20\uFF1A

//  \u5C06\u7D22\u5F15\u4E3A 1 \u548C 3 \u7684\u5143\u7D20\u521D\u59CB\u5316
balance := [5]float32{1:2.0,3:7.0}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6837\u4F8B</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import &quot;fmt&quot;

func main() {
   var i,j,k int
   // \u58F0\u660E\u6570\u7EC4\u7684\u540C\u65F6\u5FEB\u901F\u521D\u59CB\u5316\u6570\u7EC4
   balance := [5]float32{1000.0, 2.0, 3.4, 7.0, 50.0}

   /* \u8F93\u51FA\u6570\u7EC4\u5143\u7D20 */         ...
   for i = 0; i &lt; 5; i++ {
      fmt.Printf(&quot;balance[%d] = %f\\n&quot;, i, balance[i] )
   }
   
   balance2 := [...]float32{1000.0, 2.0, 3.4, 7.0, 50.0}
   /* \u8F93\u51FA\u6BCF\u4E2A\u6570\u7EC4\u5143\u7D20\u7684\u503C */
   for j = 0; j &lt; 5; j++ {
      fmt.Printf(&quot;balance2[%d] = %f\\n&quot;, j, balance2[j] )
   }

   //  \u5C06\u7D22\u5F15\u4E3A 1 \u548C 3 \u7684\u5143\u7D20\u521D\u59CB\u5316
   balance3 := [5]float32{1:2.0,3:7.0}  
   for k = 0; k &lt; 5; k++ {
      fmt.Printf(&quot;balance3[%d] = %f\\n&quot;, k, balance3[k] )
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#\u6307\u9488" aria-hidden="true">#</a> \u6307\u9488</h2><p>\u6211\u4EEC\u90FD\u77E5\u9053\uFF0C\u53D8\u91CF\u662F\u4E00\u79CD\u4F7F\u7528\u65B9\u4FBF\u7684\u5360\u4F4D\u7B26\uFF0C\u7528\u4E8E\u5F15\u7528\u8BA1\u7B97\u673A\u5185\u5B58\u5730\u5740\u3002</p><p>Go \u8BED\u8A00\u7684\u53D6\u5730\u5740\u7B26\u662F &amp;\uFF0C\u653E\u5230\u4E00\u4E2A\u53D8\u91CF\u524D\u4F7F\u7528\u5C31\u4F1A\u8FD4\u56DE\u76F8\u5E94\u53D8\u91CF\u7684\u5185\u5B58\u5730\u5740\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import &quot;fmt&quot;

func main() {
   var a int = 10  

   fmt.Printf(&quot;\u53D8\u91CF\u7684\u5730\u5740: %x\\n&quot;, &amp;a  )
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4EC0\u4E48\u662F\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u6307\u9488" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u6307\u9488</h3><p>\u4E00\u4E2A\u6307\u9488\u53D8\u91CF\u6307\u5411\u4E86\u4E00\u4E2A\u503C\u7684\u5185\u5B58\u5730\u5740\u3002</p><p>\u7C7B\u4F3C\u4E8E\u53D8\u91CF\u548C\u5E38\u91CF\uFF0C\u5728\u4F7F\u7528\u6307\u9488\u524D\u4F60\u9700\u8981\u58F0\u660E\u6307\u9488\u3002\u6307\u9488\u58F0\u660E\u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var var_name *var-type
var-type \u4E3A\u6307\u9488\u7C7B\u578B\uFF0Cvar_name \u4E3A\u6307\u9488\u53D8\u91CF\u540D\uFF0C* \u53F7\u7528\u4E8E\u6307\u5B9A\u53D8\u91CF\u662F\u4F5C\u4E3A\u4E00\u4E2A\u6307\u9488\u3002\u4EE5\u4E0B\u662F\u6709\u6548\u7684\u6307\u9488\u58F0\u660E\uFF1A

var ip *int        /* \u6307\u5411\u6574\u578B*/
var fp *float32    /* \u6307\u5411\u6D6E\u70B9\u578B */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5982\u4F55\u4F7F\u7528\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u4F7F\u7528\u6307\u9488" aria-hidden="true">#</a> \u5982\u4F55\u4F7F\u7528\u6307\u9488</h3><p>\u6307\u9488\u4F7F\u7528\u6D41\u7A0B\uFF1A</p><ul><li>\u5B9A\u4E49\u6307\u9488\u53D8\u91CF\u3002</li><li>\u4E3A\u6307\u9488\u53D8\u91CF\u8D4B\u503C\u3002</li><li>\u8BBF\u95EE\u6307\u9488\u53D8\u91CF\u4E2D\u6307\u5411\u5730\u5740\u7684\u503C\u3002</li></ul><p>\u5728\u6307\u9488\u7C7B\u578B\u524D\u9762\u52A0\u4E0A * \u53F7\uFF08\u524D\u7F00\uFF09\u6765\u83B7\u53D6\u6307\u9488\u6240\u6307\u5411\u7684\u5185\u5BB9\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import &quot;fmt&quot;

func main() {
   var a int= 20   /* \u58F0\u660E\u5B9E\u9645\u53D8\u91CF */
   var ip *int        /* \u58F0\u660E\u6307\u9488\u53D8\u91CF */

   ip = &amp;a  /* \u6307\u9488\u53D8\u91CF\u7684\u5B58\u50A8\u5730\u5740 */

   fmt.Printf(&quot;a \u53D8\u91CF\u7684\u5730\u5740\u662F: %x\\n&quot;, &amp;a  )

   /* \u6307\u9488\u53D8\u91CF\u7684\u5B58\u50A8\u5730\u5740 */
   fmt.Printf(&quot;ip \u53D8\u91CF\u50A8\u5B58\u7684\u6307\u9488\u5730\u5740: %x\\n&quot;, ip )

   /* \u4F7F\u7528\u6307\u9488\u8BBF\u95EE\u503C */
   fmt.Printf(&quot;*ip \u53D8\u91CF\u7684\u503C: %d\\n&quot;, *ip )
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7A7A\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#\u7A7A\u6307\u9488" aria-hidden="true">#</a> \u7A7A\u6307\u9488</h3><p>\u5F53\u4E00\u4E2A\u6307\u9488\u88AB\u5B9A\u4E49\u540E\u6CA1\u6709\u5206\u914D\u5230\u4EFB\u4F55\u53D8\u91CF\u65F6\uFF0C\u5B83\u7684\u503C\u4E3A nil\u3002</p><p>nil \u6307\u9488\u4E5F\u79F0\u4E3A\u7A7A\u6307\u9488\u3002</p><p>nil\u5728\u6982\u5FF5\u4E0A\u548C\u5176\u5B83\u8BED\u8A00\u7684null\u3001None\u3001nil\u3001NULL\u4E00\u6837\uFF0C\u90FD\u6307\u4EE3\u96F6\u503C\u6216\u7A7A\u503C\u3002</p><p>\u4E00\u4E2A\u6307\u9488\u53D8\u91CF\u901A\u5E38\u7F29\u5199\u4E3A ptr\u3002</p><h3 id="\u6307\u9488\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u6307\u9488\u6570\u7EC4" aria-hidden="true">#</a> \u6307\u9488\u6570\u7EC4</h3><p>\u5373\u5B58\u653E\u5730\u5740\u7684\u6570\u7EC4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import &quot;fmt&quot;

const MAX int = 3

func main() {
   a := []int{10,100,200}
   var i int
   var ptr [MAX]*int;

   for  i = 0; i &lt; MAX; i++ {
      ptr[i] = &amp;a[i] /* \u6574\u6570\u5730\u5740\u8D4B\u503C\u7ED9\u6307\u9488\u6570\u7EC4 */
   }

   for  i = 0; i &lt; MAX; i++ {
      fmt.Printf(&quot;a[%d] = %d\\n&quot;, i,*ptr[i] )
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6307\u5411\u6307\u9488\u7684\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#\u6307\u5411\u6307\u9488\u7684\u6307\u9488" aria-hidden="true">#</a> \u6307\u5411\u6307\u9488\u7684\u6307\u9488</h3><p>\u5982\u679C\u4E00\u4E2A\u6307\u9488\u53D8\u91CF\u5B58\u653E\u7684\u53C8\u662F\u53E6\u4E00\u4E2A\u6307\u9488\u53D8\u91CF\u7684\u5730\u5740\uFF0C\u5219\u79F0\u8FD9\u4E2A\u6307\u9488\u53D8\u91CF\u4E3A\u6307\u5411\u6307\u9488\u7684\u6307\u9488\u53D8\u91CF\u3002</p><p>\u5F53\u5B9A\u4E49\u4E00\u4E2A\u6307\u5411\u6307\u9488\u7684\u6307\u9488\u53D8\u91CF\u65F6\uFF0C\u7B2C\u4E00\u4E2A\u6307\u9488\u5B58\u653E\u7B2C\u4E8C\u4E2A\u6307\u9488\u7684\u5730\u5740\uFF0C\u7B2C\u4E8C\u4E2A\u6307\u9488\u5B58\u653E\u53D8\u91CF\u7684\u5730\u5740\uFF1A</p><p>\u6307\u5411\u6307\u9488\u7684\u6307\u9488\u53D8\u91CF\u58F0\u660E\u683C\u5F0F\u5982\u4E0B\uFF1A</p><p>var ptr **int;</p><p>\u8BBF\u95EE\u6307\u5411\u6307\u9488\u7684\u6307\u9488\u53D8\u91CF\u503C\u9700\u8981\u4F7F\u7528\u4E24\u4E2A * \u53F7\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import &quot;fmt&quot;

func main() {

   var a int
   var ptr *int
   var pptr **int

   a = 3000

   /* \u6307\u9488 ptr \u5730\u5740 */
   ptr = &amp;a

   /* \u6307\u5411\u6307\u9488 ptr \u5730\u5740 */
   pptr = &amp;ptr

   /* \u83B7\u53D6 pptr \u7684\u503C */
   fmt.Printf(&quot;\u53D8\u91CF a = %d\\n&quot;, a )
   fmt.Printf(&quot;\u6307\u9488\u53D8\u91CF *ptr = %d\\n&quot;, *ptr )
   fmt.Printf(&quot;\u6307\u5411\u6307\u9488\u7684\u6307\u9488\u53D8\u91CF **pptr = %d\\n&quot;, **pptr)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7ED3\u6784\u4F53" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784\u4F53" aria-hidden="true">#</a> \u7ED3\u6784\u4F53</h2><p>\u53EF\u7C7B\u6BD4Java\u4E2D\u7684\u7C7B\u6982\u5FF5</p><p>Go \u8BED\u8A00\u4E2D\u6570\u7EC4\u53EF\u4EE5\u5B58\u50A8\u540C\u4E00\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u4F46\u5728\u7ED3\u6784\u4F53\u4E2D\u6211\u4EEC\u53EF\u4EE5\u4E3A\u4E0D\u540C\u9879\u5B9A\u4E49\u4E0D\u540C\u7684\u6570\u636E\u7C7B\u578B\u3002</p><p>\u7ED3\u6784\u4F53\u662F\u7531\u4E00\u7CFB\u5217\u5177\u6709\u76F8\u540C\u7C7B\u578B\u6216\u4E0D\u540C\u7C7B\u578B\u7684\u6570\u636E\u6784\u6210\u7684\u6570\u636E\u96C6\u5408\u3002</p><h3 id="\u5B9A\u4E49\u7ED3\u6784\u4F53" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u7ED3\u6784\u4F53" aria-hidden="true">#</a> \u5B9A\u4E49\u7ED3\u6784\u4F53</h3><p>\u7ED3\u6784\u4F53\u5B9A\u4E49\u9700\u8981\u4F7F\u7528 type \u548C struct \u8BED\u53E5\u3002struct \u8BED\u53E5\u5B9A\u4E49\u4E00\u4E2A\u65B0\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u7ED3\u6784\u4F53\u4E2D\u6709\u4E00\u4E2A\u6216\u591A\u4E2A\u6210\u5458\u3002type \u8BED\u53E5\u8BBE\u5B9A\u4E86\u7ED3\u6784\u4F53\u7684\u540D\u79F0\u3002\u7ED3\u6784\u4F53\u7684\u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>type struct_variable_type struct {
   member definition
   member definition
   ...
   member definition
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6837\u4F8B</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import &quot;fmt&quot;

type Books struct {
   title string
   author string
   subject string
   book_id int
}


func main() {

    // \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u7ED3\u6784\u4F53
    fmt.Println(Books{&quot;Go \u8BED\u8A00&quot;, &quot;www.runoob.com&quot;, &quot;Go \u8BED\u8A00\u6559\u7A0B&quot;, 6495407})

    // \u4E5F\u53EF\u4EE5\u4F7F\u7528 key =&gt; value \u683C\u5F0F
    fmt.Println(Books{title: &quot;Go \u8BED\u8A00&quot;, author: &quot;www.runoob.com&quot;, subject: &quot;Go \u8BED\u8A00\u6559\u7A0B&quot;, book_id: 6495407})

    // \u5FFD\u7565\u7684\u5B57\u6BB5\u4E3A 0 \u6216 \u7A7A
   fmt.Println(Books{title: &quot;Go \u8BED\u8A00&quot;, author: &quot;www.runoob.com&quot;})
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8BBF\u95EE\u7ED3\u6784\u4F53\u6210\u5458" tabindex="-1"><a class="header-anchor" href="#\u8BBF\u95EE\u7ED3\u6784\u4F53\u6210\u5458" aria-hidden="true">#</a> \u8BBF\u95EE\u7ED3\u6784\u4F53\u6210\u5458</h3><p>\u5982\u679C\u8981\u8BBF\u95EE\u7ED3\u6784\u4F53\u6210\u5458\uFF0C\u9700\u8981\u4F7F\u7528\u70B9\u53F7 . \u64CD\u4F5C\u7B26\uFF0C\u683C\u5F0F\u4E3A\uFF1A</p><p>\u7ED3\u6784\u4F53.\u6210\u5458\u540D</p><h3 id="\u7ED3\u6784\u4F53\u4F5C\u4E3A\u51FD\u6570\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784\u4F53\u4F5C\u4E3A\u51FD\u6570\u53C2\u6570" aria-hidden="true">#</a> \u7ED3\u6784\u4F53\u4F5C\u4E3A\u51FD\u6570\u53C2\u6570</h3><h3 id="\u7ED3\u6784\u4F53\u4F5C\u4E3A\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784\u4F53\u4F5C\u4E3A\u6307\u9488" aria-hidden="true">#</a> \u7ED3\u6784\u4F53\u4F5C\u4E3A\u6307\u9488</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import &quot;fmt&quot;

type Books struct {
   title string
   author string
   subject string
   book_id int
}

func main() {
   var Book1 Books        /* \u58F0\u660E Book1 \u4E3A Books \u7C7B\u578B */
   var Book2 Books        /* \u58F0\u660E Book2 \u4E3A Books \u7C7B\u578B */

   /* book 1 \u63CF\u8FF0 */
   Book1.title = &quot;Go \u8BED\u8A00&quot;
   Book1.author = &quot;www.runoob.com&quot;
   Book1.subject = &quot;Go \u8BED\u8A00\u6559\u7A0B&quot;
   Book1.book_id = 6495407

   /* book 2 \u63CF\u8FF0 */
   Book2.title = &quot;Python \u6559\u7A0B&quot;
   Book2.author = &quot;www.runoob.com&quot;
   Book2.subject = &quot;Python \u8BED\u8A00\u6559\u7A0B&quot;
   Book2.book_id = 6495700

   /* \u6253\u5370 Book1 \u4FE1\u606F */
   printBook(&amp;Book1)

   /* \u6253\u5370 Book2 \u4FE1\u606F */
   printBook(&amp;Book2)
}
func printBook( book *Books ) {
   fmt.Printf( &quot;Book title : %s\\n&quot;, book.title)
   fmt.Printf( &quot;Book author : %s\\n&quot;, book.author)
   fmt.Printf( &quot;Book subject : %s\\n&quot;, book.subject)
   fmt.Printf( &quot;Book book_id : %d\\n&quot;, book.book_id)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5207\u7247slice" tabindex="-1"><a class="header-anchor" href="#\u5207\u7247slice" aria-hidden="true">#</a> \u5207\u7247slice</h2><blockquote><p>\u5B9A\u4E49\u5207\u7247</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4F60\u53EF\u4EE5\u58F0\u660E\u4E00\u4E2A\u672A\u6307\u5B9A\u5927\u5C0F\u7684\u6570\u7EC4\u6765\u5B9A\u4E49\u5207\u7247\uFF1A

var identifier []type
\u5207\u7247\u4E0D\u9700\u8981\u8BF4\u660E\u957F\u5EA6\u3002

\u6216\u4F7F\u7528 make() \u51FD\u6570\u6765\u521B\u5EFA\u5207\u7247:

var slice1 []type = make([]type, len)

\u4E5F\u53EF\u4EE5\u7B80\u5199\u4E3A

slice1 := make([]type, len)
\u4E5F\u53EF\u4EE5\u6307\u5B9A\u5BB9\u91CF\uFF0C\u5176\u4E2D capacity \u4E3A\u53EF\u9009\u53C2\u6570\u3002

make([]T, length, capacity)
\u8FD9\u91CC len \u662F\u6570\u7EC4\u7684\u957F\u5EA6\u5E76\u4E14\u4E5F\u662F\u5207\u7247\u7684\u521D\u59CB\u957F\u5EA6\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u521D\u59CB\u5316</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>s :=[] int {1,2,3 } 
\u76F4\u63A5\u521D\u59CB\u5316\u5207\u7247\uFF0C[] \u8868\u793A\u662F\u5207\u7247\u7C7B\u578B\uFF0C{1,2,3} \u521D\u59CB\u5316\u503C\u4F9D\u6B21\u662F 1,2,3\uFF0C\u5176 cap=len=3\u3002

s := arr[:] 
\u521D\u59CB\u5316\u5207\u7247 s\uFF0C\u662F\u6570\u7EC4 arr \u7684\u5F15\u7528\u3002

s := arr[startIndex:endIndex] 
\u5C06 arr \u4E2D\u4ECE\u4E0B\u6807 startIndex \u5230 endIndex-1 \u4E0B\u7684\u5143\u7D20\u521B\u5EFA\u4E3A\u4E00\u4E2A\u65B0\u7684\u5207\u7247\u3002

s := arr[startIndex:] 
\u9ED8\u8BA4 endIndex \u65F6\u5C06\u8868\u793A\u4E00\u76F4\u5230arr\u7684\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u3002

s := arr[:endIndex] 
\u9ED8\u8BA4 startIndex \u65F6\u5C06\u8868\u793A\u4ECE arr \u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\u5F00\u59CB\u3002

s1 := s[startIndex:endIndex] 
\u901A\u8FC7\u5207\u7247 s \u521D\u59CB\u5316\u5207\u7247 s1\u3002

s :=make([]int,len,cap) 
\u901A\u8FC7\u5185\u7F6E\u51FD\u6570 make() \u521D\u59CB\u5316\u5207\u7247s\uFF0C[]int \u6807\u8BC6\u4E3A\u5176\u5143\u7D20\u7C7B\u578B\u4E3A int \u7684\u5207\u7247\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>len() \u548C cap() \u51FD\u6570</p></blockquote><p>\u5207\u7247\u662F\u53EF\u7D22\u5F15\u7684\uFF0C\u5E76\u4E14\u53EF\u4EE5\u7531 len() \u65B9\u6CD5\u83B7\u53D6\u957F\u5EA6\u3002</p><p>\u5207\u7247\u63D0\u4F9B\u4E86\u8BA1\u7B97\u5BB9\u91CF\u7684\u65B9\u6CD5 cap() \u53EF\u4EE5\u6D4B\u91CF\u5207\u7247\u6700\u957F\u53EF\u4EE5\u8FBE\u5230\u591A\u5C11\u3002</p><blockquote><p>\u7A7A(nil)\u5207\u7247</p></blockquote><p>\u4E00\u4E2A\u5207\u7247\u5728\u672A\u521D\u59CB\u5316\u4E4B\u524D\u9ED8\u8BA4\u4E3A nil\uFF0C\u957F\u5EA6\u4E3A 0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import &quot;fmt&quot;

func main() {
   var numbers []int

   printSlice(numbers)

   if(numbers == nil){
      fmt.Printf(&quot;\u5207\u7247\u662F\u7A7A\u7684&quot;)
   }
}

func printSlice(x []int){
   fmt.Printf(&quot;len=%d cap=%d slice=%v\\n&quot;,len(x),cap(x),x)
}
\u4EE5\u4E0A\u5B9E\u4F8B\u8FD0\u884C\u8F93\u51FA\u7ED3\u679C\u4E3A:

len=0 cap=0 slice=[]
\u5207\u7247\u662F\u7A7A\u7684
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5207\u7247\u622A\u53D6 append() \u548C copy() \u51FD\u6570</p></blockquote><p>\u5982\u679C\u60F3\u589E\u52A0\u5207\u7247\u7684\u5BB9\u91CF\uFF0C\u6211\u4EEC\u5FC5\u987B\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u66F4\u5927\u7684\u5207\u7247\u5E76\u628A\u539F\u5206\u7247\u7684\u5185\u5BB9\u90FD\u62F7\u8D1D\u8FC7\u6765\u3002</p><p>\u4E0B\u9762\u7684\u4EE3\u7801\u63CF\u8FF0\u4E86\u4ECE\u62F7\u8D1D\u5207\u7247\u7684 copy \u65B9\u6CD5\u548C\u5411\u5207\u7247\u8FFD\u52A0\u65B0\u5143\u7D20\u7684 append \u65B9\u6CD5\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import &quot;fmt&quot;

func main() {
   var numbers []int
   printSlice(numbers)

   /* \u5141\u8BB8\u8FFD\u52A0\u7A7A\u5207\u7247 */
   numbers = append(numbers, 0)
   printSlice(numbers)

   /* \u5411\u5207\u7247\u6DFB\u52A0\u4E00\u4E2A\u5143\u7D20 */
   numbers = append(numbers, 1)
   printSlice(numbers)

   /* \u540C\u65F6\u6DFB\u52A0\u591A\u4E2A\u5143\u7D20 */
   numbers = append(numbers, 2,3,4)
   printSlice(numbers)

   /* \u521B\u5EFA\u5207\u7247 numbers1 \u662F\u4E4B\u524D\u5207\u7247\u7684\u4E24\u500D\u5BB9\u91CF*/
   numbers1 := make([]int, len(numbers), (cap(numbers))*2)

   /* \u62F7\u8D1D numbers \u7684\u5185\u5BB9\u5230 numbers1 */
   copy(numbers1,numbers)
   printSlice(numbers1)  
}

func printSlice(x []int){
   fmt.Printf(&quot;len=%d cap=%d slice=%v\\n&quot;,len(x),cap(x),x)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8303\u56F4range" tabindex="-1"><a class="header-anchor" href="#\u8303\u56F4range" aria-hidden="true">#</a> \u8303\u56F4range</h2><p>Go \u8BED\u8A00\u4E2D range \u5173\u952E\u5B57\u7528\u4E8E for \u5FAA\u73AF\u4E2D\u8FED\u4EE3\u6570\u7EC4(array)\u3001\u5207\u7247(slice)\u3001\u901A\u9053(channel)\u6216\u96C6\u5408(map)\u7684\u5143\u7D20\u3002 \u5728\u6570\u7EC4\u548C\u5207\u7247\u4E2D\u5B83\u8FD4\u56DE\u5143\u7D20\u7684\u7D22\u5F15\u548C\u7D22\u5F15\u5BF9\u5E94\u7684\u503C\uFF0C\u5728\u96C6\u5408\u4E2D\u8FD4\u56DE key-value \u5BF9\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>for key, value := range oldMap {
    newMap[key] = value
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="map\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#map\u96C6\u5408" aria-hidden="true">#</a> Map\u96C6\u5408</h2><blockquote><p>\u5B9A\u4E49map</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u53EF\u4EE5\u4F7F\u7528\u5185\u5EFA\u51FD\u6570 make \u4E5F\u53EF\u4EE5\u4F7F\u7528 map \u5173\u952E\u5B57\u6765\u5B9A\u4E49 Map:

/* \u58F0\u660E\u53D8\u91CF\uFF0C\u9ED8\u8BA4 map \u662F nil */
var map_variable map[key_data_type]value_data_type

/* \u4F7F\u7528 make \u51FD\u6570 */
map_variable := make(map[key_data_type]value_data_type)
\u5982\u679C\u4E0D\u521D\u59CB\u5316 map\uFF0C\u90A3\u4E48\u5C31\u4F1A\u521B\u5EFA\u4E00\u4E2A nil map\u3002nil map \u4E0D\u80FD\u7528\u6765\u5B58\u653E\u952E\u503C\u5BF9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import &quot;fmt&quot;

func main() {
    var countryCapitalMap map[string]string /*\u521B\u5EFA\u96C6\u5408 */
    countryCapitalMap = make(map[string]string)

    /* map\u63D2\u5165key - value\u5BF9,\u5404\u4E2A\u56FD\u5BB6\u5BF9\u5E94\u7684\u9996\u90FD */
    countryCapitalMap [ &quot;France&quot; ] = &quot;\u5DF4\u9ECE&quot;
    countryCapitalMap [ &quot;Italy&quot; ] = &quot;\u7F57\u9A6C&quot;
    countryCapitalMap [ &quot;Japan&quot; ] = &quot;\u4E1C\u4EAC&quot;
    countryCapitalMap [ &quot;India &quot; ] = &quot;\u65B0\u5FB7\u91CC&quot;

    /*\u4F7F\u7528\u952E\u8F93\u51FA\u5730\u56FE\u503C */
    for country := range countryCapitalMap {
        fmt.Println(country, &quot;\u9996\u90FD\u662F&quot;, countryCapitalMap [country])
    }

    /*\u67E5\u770B\u5143\u7D20\u5728\u96C6\u5408\u4E2D\u662F\u5426\u5B58\u5728 */
    capital, ok := countryCapitalMap [ &quot;American&quot; ] /*\u5982\u679C\u786E\u5B9A\u662F\u771F\u5B9E\u7684,\u5219\u5B58\u5728,\u5426\u5219\u4E0D\u5B58\u5728 */
    /*fmt.Println(capital) */
    /*fmt.Println(ok) */
    if (ok) {
        fmt.Println(&quot;American \u7684\u9996\u90FD\u662F&quot;, capital)
    } else {
        fmt.Println(&quot;American \u7684\u9996\u90FD\u4E0D\u5B58\u5728&quot;)
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>delete() \u51FD\u6570</p></blockquote><p>delete() \u51FD\u6570\u7528\u4E8E\u5220\u9664\u96C6\u5408\u7684\u5143\u7D20, \u53C2\u6570\u4E3A map \u548C\u5176\u5BF9\u5E94\u7684 key</p><h2 id="\u9012\u5F52\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u9012\u5F52\u51FD\u6570" aria-hidden="true">#</a> \u9012\u5F52\u51FD\u6570</h2><p>\u9012\u5F52\uFF0C\u5C31\u662F\u5728\u8FD0\u884C\u7684\u8FC7\u7A0B\u4E2D\u8C03\u7528\u81EA\u5DF1\u3002</p><p>Go \u8BED\u8A00\u652F\u6301\u9012\u5F52\u3002\u4F46\u6211\u4EEC\u5728\u4F7F\u7528\u9012\u5F52\u65F6\uFF0C\u5F00\u53D1\u8005\u9700\u8981\u8BBE\u7F6E\u9000\u51FA\u6761\u4EF6\uFF0C\u5426\u5219\u9012\u5F52\u5C06\u9677\u5165\u65E0\u9650\u5FAA\u73AF\u4E2D\u3002</p><blockquote><p>\u6590\u6CE2\u90A3\u5951\u6570\u5217</p></blockquote><p>\u4EE5\u4E0B\u5B9E\u4F8B\u901A\u8FC7 Go \u8BED\u8A00\u7684\u9012\u5F52\u51FD\u6570\u5B9E\u73B0\u6590\u6CE2\u90A3\u5951\u6570\u5217\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5B9E\u4F8B
package main

import &quot;fmt&quot;

func fibonacci(n int) int {
if n &lt; 2 {
return n
}
return fibonacci(n-2) + fibonacci(n-1)
}

func main() {
var i int
for i = 0; i &lt; 10; i++ {
fmt.Printf(&quot;%d\\t&quot;, fibonacci(i))
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7C7B\u578B\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u8F6C\u6362" aria-hidden="true">#</a> \u7C7B\u578B\u8F6C\u6362</h2><ul><li>go \u4E0D\u652F\u6301\u9690\u5F0F\u8F6C\u6362\u7C7B\u578B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import &quot;fmt&quot;

func main() {
   var sum int = 17
   var count int = 5
   var mean float32
   
   mean = float32(sum)/float32(count)
   fmt.Printf(&quot;mean \u7684\u503C\u4E3A: %f\\n&quot;,mean)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3" aria-hidden="true">#</a> \u63A5\u53E3</h2><p>Go \u8BED\u8A00\u63D0\u4F9B\u4E86\u53E6\u5916\u4E00\u79CD\u6570\u636E\u7C7B\u578B\u5373\u63A5\u53E3\uFF0C\u5B83\u628A\u6240\u6709\u7684\u5177\u6709\u5171\u6027\u7684\u65B9\u6CD5\u5B9A\u4E49\u5728\u4E00\u8D77\uFF0C\u4EFB\u4F55\u5176\u4ED6\u7C7B\u578B\u53EA\u8981\u5B9E\u73B0\u4E86\u8FD9\u4E9B\u65B9\u6CD5\u5C31\u662F\u5B9E\u73B0\u4E86\u8FD9\u4E2A\u63A5\u53E3</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import (
    &quot;fmt&quot;
)

type Phone interface {
    call()
}

type NokiaPhone struct {
}

func (nokiaPhone NokiaPhone) call() {
    fmt.Println(&quot;I am Nokia, I can call you!&quot;)
}

type IPhone struct {
}

func (iPhone IPhone) call() {
    fmt.Println(&quot;I am iPhone, I can call you!&quot;)
}

func main() {
    var phone Phone

    phone = new(NokiaPhone)
    phone.call()

    phone = new(IPhone)
    phone.call()

}


\u5728\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u5B9A\u4E49\u4E86\u4E00\u4E2A\u63A5\u53E3Phone\uFF0C\u63A5\u53E3\u91CC\u9762\u6709\u4E00\u4E2A\u65B9\u6CD5call()\u3002\u7136\u540E\u6211\u4EEC\u5728main\u51FD\u6570\u91CC\u9762\u5B9A\u4E49\u4E86\u4E00\u4E2APhone\u7C7B\u578B\u53D8\u91CF\uFF0C\u5E76\u5206\u522B\u4E3A\u4E4B\u8D4B\u503C\u4E3ANokiaPhone\u548CIPhone\u3002\u7136\u540E\u8C03\u7528call()\u65B9\u6CD5\uFF0C\u8F93\u51FA\u7ED3\u679C\u5982\u4E0B\uFF1A

I am Nokia, I can call you!
I am iPhone, I can call you!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9519\u8BEF\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u9519\u8BEF\u5904\u7406" aria-hidden="true">#</a> \u9519\u8BEF\u5904\u7406</h2><p>Go \u8BED\u8A00\u901A\u8FC7\u5185\u7F6E\u7684\u9519\u8BEF\u63A5\u53E3\u63D0\u4F9B\u4E86\u975E\u5E38\u7B80\u5355\u7684\u9519\u8BEF\u5904\u7406\u673A\u5236\u3002</p><p>error\u7C7B\u578B\u662F\u4E00\u4E2A\u63A5\u53E3\u7C7B\u578B\uFF0C\u8FD9\u662F\u5B83\u7684\u5B9A\u4E49\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>type error interface {
Error() string
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u53EF\u4EE5\u5728\u7F16\u7801\u4E2D\u901A\u8FC7\u5B9E\u73B0 error \u63A5\u53E3\u7C7B\u578B\u6765\u751F\u6210\u9519\u8BEF\u4FE1\u606F\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import (
    &quot;fmt&quot;
)

// \u5B9A\u4E49\u4E00\u4E2A DivideError \u7ED3\u6784
type DivideError struct {
    dividee int
    divider int
}

// \u5B9E\u73B0 \`error\` \u63A5\u53E3
func (de *DivideError) Error() string {
    strFormat := \`
    Cannot proceed, the divider is zero.
    dividee: %d
    divider: 0
\`
    return fmt.Sprintf(strFormat, de.dividee)
}

// \u5B9A\u4E49 \`int\` \u7C7B\u578B\u9664\u6CD5\u8FD0\u7B97\u7684\u51FD\u6570
func Divide(varDividee int, varDivider int) (result int, errorMsg string) {
    if varDivider == 0 {
            dData := DivideError{
                    dividee: varDividee,
                    divider: varDivider,
            }
            errorMsg = dData.Error()
            return
    } else {
            return varDividee / varDivider, &quot;&quot;
    }

}

func main() {

    // \u6B63\u5E38\u60C5\u51B5
    if result, errorMsg := Divide(100, 10); errorMsg == &quot;&quot; {
            fmt.Println(&quot;100/10 = &quot;, result)
    }
    // \u5F53\u9664\u6570\u4E3A\u96F6\u7684\u65F6\u5019\u4F1A\u8FD4\u56DE\u9519\u8BEF\u4FE1\u606F
    if _, errorMsg := Divide(100, 0); errorMsg != &quot;&quot; {
            fmt.Println(&quot;errorMsg is: &quot;, errorMsg)
    }

}
\u6267\u884C\u4EE5\u4E0A\u7A0B\u5E8F\uFF0C\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A

100/10 =  10
errorMsg is:  
    Cannot proceed, the divider is zero.
    dividee: 100
    divider: 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8FD0\u884C\u65F6\u5F02\u5E38\u548C-panic" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C\u65F6\u5F02\u5E38\u548C-panic" aria-hidden="true">#</a> \u8FD0\u884C\u65F6\u5F02\u5E38\u548C panic</h3><p>\u5F53\u53D1\u751F\u50CF\u6570\u7EC4\u4E0B\u6807\u8D8A\u754C\u6216\u7C7B\u578B\u65AD\u8A00\u5931\u8D25\u8FD9\u6837\u7684\u8FD0\u884C\u9519\u8BEF\u65F6\uFF0CGo \u8FD0\u884C\u65F6\u4F1A\u89E6\u53D1\u8FD0\u884C\u65F6 panic\uFF0C\u4F34\u968F\u7740\u7A0B\u5E8F\u7684\u5D29\u6E83\u629B\u51FA\u4E00\u4E2A runtime.Error \u63A5\u53E3\u7C7B\u578B\u7684\u503C\u3002\u8FD9\u4E2A\u9519\u8BEF\u503C\u6709\u4E2A RuntimeError() \u65B9\u6CD5\u7528\u4E8E\u533A\u522B\u666E\u901A\u9519\u8BEF\u3002</p><p>panic \u53EF\u4EE5\u76F4\u63A5\u4ECE\u4EE3\u7801\u521D\u59CB\u5316\uFF1A\u5F53\u9519\u8BEF\u6761\u4EF6\uFF08\u6211\u4EEC\u6240\u6D4B\u8BD5\u7684\u4EE3\u7801\uFF09\u5F88\u4E25\u82DB\u4E14\u4E0D\u53EF\u6062\u590D\uFF0C\u7A0B\u5E8F\u4E0D\u80FD\u7EE7\u7EED\u8FD0\u884C\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 panic \u51FD\u6570\u4EA7\u751F\u4E00\u4E2A\u4E2D\u6B62\u7A0B\u5E8F\u7684\u8FD0\u884C\u65F6\u9519\u8BEF\u3002panic \u63A5\u6536\u4E00\u4E2A\u505A\u4EFB\u610F\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u901A\u5E38\u662F\u5B57\u7B26\u4E32\uFF0C\u5728\u7A0B\u5E8F\u6B7B\u4EA1\u65F6\u88AB\u6253\u5370\u51FA\u6765\u3002Go \u8FD0\u884C\u65F6\u8D1F\u8D23\u4E2D\u6B62\u7A0B\u5E8F\u5E76\u7ED9\u51FA\u8C03\u8BD5\u4FE1\u606F\u3002</p><p>Go panicking\uFF1A</p><p>\u5728\u591A\u5C42\u5D4C\u5957\u7684\u51FD\u6570\u8C03\u7528\u4E2D\u8C03\u7528 panic\uFF0C\u53EF\u4EE5\u9A6C\u4E0A\u4E2D\u6B62\u5F53\u524D\u51FD\u6570\u7684\u6267\u884C\uFF0C\u6240\u6709\u7684 defer \u8BED\u53E5\u90FD\u4F1A\u4FDD\u8BC1\u6267\u884C\u5E76\u628A\u63A7\u5236\u6743\u4EA4\u8FD8\u7ED9\u63A5\u6536\u5230 panic \u7684\u51FD\u6570\u8C03\u7528\u8005\u3002\u8FD9\u6837\u5411\u4E0A\u5192\u6CE1\u76F4\u5230\u6700\u9876\u5C42\uFF0C\u5E76\u6267\u884C\uFF08\u6BCF\u5C42\u7684\uFF09 defer\uFF0C\u5728\u6808\u9876\u5904\u7A0B\u5E8F\u5D29\u6E83\uFF0C\u5E76\u5728\u547D\u4EE4\u884C\u4E2D\u7528\u4F20\u7ED9 panic \u7684\u503C\u62A5\u544A\u9519\u8BEF\u60C5\u51B5\uFF1A\u8FD9\u4E2A\u7EC8\u6B62\u8FC7\u7A0B\u5C31\u662F panicking\u3002</p><h3 id="\u4ECE-panic-\u4E2D\u6062\u590D-recover" tabindex="-1"><a class="header-anchor" href="#\u4ECE-panic-\u4E2D\u6062\u590D-recover" aria-hidden="true">#</a> \u4ECE panic \u4E2D\u6062\u590D\uFF08Recover\uFF09</h3><p>\u6B63\u5982\u540D\u5B57\u4E00\u6837\uFF0C\u8FD9\u4E2A\uFF08recover\uFF09\u5185\u5EFA\u51FD\u6570\u88AB\u7528\u4E8E\u4ECE panic \u6216 \u9519\u8BEF\u573A\u666F\u4E2D\u6062\u590D\uFF1A\u8BA9\u7A0B\u5E8F\u53EF\u4EE5\u4ECE panicking \u91CD\u65B0\u83B7\u5F97\u63A7\u5236\u6743\uFF0C\u505C\u6B62\u7EC8\u6B62\u8FC7\u7A0B\u8FDB\u800C\u6062\u590D\u6B63\u5E38\u6267\u884C\u3002</p><p>recover \u53EA\u80FD\u5728 defer \u4FEE\u9970\u7684\u51FD\u6570\uFF08\u53C2\u89C1 6.4 \u8282\uFF09\u4E2D\u4F7F\u7528\uFF1A\u7528\u4E8E\u53D6\u5F97 panic \u8C03\u7528\u4E2D\u4F20\u9012\u8FC7\u6765\u7684\u9519\u8BEF\u503C\uFF0C\u5982\u679C\u662F\u6B63\u5E38\u6267\u884C\uFF0C\u8C03\u7528 recover \u4F1A\u8FD4\u56DE nil\uFF0C\u4E14\u6CA1\u6709\u5176\u5B83\u6548\u679C\u3002</p><p>\u603B\u7ED3\uFF1Apanic \u4F1A\u5BFC\u81F4\u6808\u88AB\u5C55\u5F00\u76F4\u5230 defer \u4FEE\u9970\u7684 recover () \u88AB\u8C03\u7528\u6216\u8005\u7A0B\u5E8F\u4E2D\u6B62\u3002</p><p>\u8FD9\u8DDF Java \u548C .NET \u8FD9\u6837\u7684\u8BED\u8A00\u4E2D\u7684 catch \u5757\u7C7B\u4F3C\u3002</p>`,202);function b(o,p){const e=r("ExternalLinkIcon");return d(),s("div",null,[c,i("p",null,[i("a",t,[n("\u53C2\u8003"),a(e)])]),m])}const g=l(u,[["render",b],["__file","go.html.vue"]]);export{g as default};
