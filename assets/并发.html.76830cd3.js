import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as n,f as l}from"./app.6f24b29a.js";const d={},a=l(`<h1 id="\u5E76\u53D1" tabindex="-1"><a class="header-anchor" href="#\u5E76\u53D1" aria-hidden="true">#</a> \u5E76\u53D1</h1><h2 id="\u534F\u7A0B\u4E0E\u901A\u9053" tabindex="-1"><a class="header-anchor" href="#\u534F\u7A0B\u4E0E\u901A\u9053" aria-hidden="true">#</a> \u534F\u7A0B\u4E0E\u901A\u9053</h2><ul><li>main\u534F\u7A0B\u7ED3\u675F\uFF0C\u5176\u4ED6\u534F\u7A0B\u4E5F\u4F1A\u7ED3\u675F</li><li>\u534F\u7A0B\u4E0E\u7CFB\u7EDF\u7EBF\u7A0B\u5E76\u4E0D\u662F\u4E00\u4E00\u5BF9\u5E94\u5173\u7CFB\uFF0C\u534F\u7A0B\u5728\u7EBF\u7A0B\u57FA\u7840\u4E0A\u6267\u884C\uFF0C\u4E00\u822C\u5355\u6838CPU\uFF0C\u4F7F\u7528\u4E00\u4E2A\u7EBF\u7A0B\u6267\u884C\u591A\u4E2A\u534F\u7A0B</li></ul><h3 id="\u4F7F\u7528-gomaxprocs" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-gomaxprocs" aria-hidden="true">#</a> \u4F7F\u7528 GOMAXPROCS</h3><p>1\u3001\u5728 gc \u7F16\u8BD1\u5668\u4E0B\uFF086g \u6216\u8005 8g\uFF09\u4F60\u5FC5\u987B\u8BBE\u7F6E GOMAXPROCS \u4E3A\u4E00\u4E2A\u5927\u4E8E\u9ED8\u8BA4\u503C 1 \u7684\u6570\u503C\u6765\u5141\u8BB8\u8FD0\u884C\u65F6\u652F\u6301\u4F7F\u7528\u591A\u4E8E 1 \u4E2A\u7684\u64CD\u4F5C\u7CFB\u7EDF\u7EBF\u7A0B\uFF0C\u5426\u5219\u6240\u6709\u7684\u534F\u7A0B\u90FD\u4F1A\u5171\u4EAB\u540C\u4E00\u4E2A\u7EBF\u7A0B</p><p>2\u3001GOMAXPROCS \u7B49\u540C\u4E8E\uFF08\u5E76\u53D1\u7684\uFF09\u7EBF\u7A0B\u6570\u91CF\uFF0C\u5728\u4E00\u53F0\u6838\u5FC3\u6570\u591A\u4E8E 1 \u4E2A\u7684\u673A\u5668\u4E0A\uFF0C\u4F1A\u5C3D\u53EF\u80FD\u6709\u7B49\u540C\u4E8E\u6838\u5FC3\u6570\u7684\u7EBF\u7A0B\u5728\u5E76\u884C\u8FD0\u884C\u3002</p><p>3\u3001\u5F53 GOMAXPROCS \u5927\u4E8E 1 \u65F6\uFF0C\u4F1A\u6709\u4E00\u4E2A\u7EBF\u7A0B\u6C60\u7BA1\u7406\u4F17\u591A\u7EBF\u7A0B\u3002gccgo \u7F16\u8BD1\u5668 \u4F1A\u4F7F GOMAXPROCS \u4E0E\u8FD0\u884C\u4E2D\u7684\u534F\u7A0B\u6570\u91CF\u76F8\u7B49\u3002</p><h3 id="close\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#close\u65B9\u6CD5" aria-hidden="true">#</a> close\u65B9\u6CD5</h3><h3 id="select\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#select\u65B9\u6CD5" aria-hidden="true">#</a> select\u65B9\u6CD5</h3><p>select \u8BED\u53E5\u5B9E\u73B0\u4E86\u4E00\u79CD\u76D1\u542C\u6A21\u5F0F\uFF0C\u901A\u5E38\u7528\u5728\uFF08\u65E0\u9650\uFF09\u5FAA\u73AF\u4E2D\uFF1B\u5728\u67D0\u79CD\u60C5\u51B5\u4E0B\uFF0C\u901A\u8FC7 break \u8BED\u53E5\u4F7F\u5FAA\u73AF\u9000\u51FA\u3002</p><ul><li>\u5982\u679C\u90FD\u963B\u585E\u4E86\uFF0C\u4F1A\u7B49\u5F85\u76F4\u5230\u5176\u4E2D\u4E00\u4E2A\u53EF\u4EE5\u5904\u7406</li><li>\u5982\u679C\u591A\u4E2A\u53EF\u4EE5\u5904\u7406\uFF0C\u968F\u673A\u9009\u62E9\u4E00\u4E2A</li><li>\u5982\u679C\u6CA1\u6709\u901A\u9053\u64CD\u4F5C\u53EF\u4EE5\u5904\u7406\u5E76\u4E14\u5199\u4E86 default \u8BED\u53E5\uFF0C\u5B83\u5C31\u4F1A\u6267\u884C\uFF1Adefault \u6C38\u8FDC\u662F\u53EF\u8FD0\u884C\u7684\uFF08\u8FD9\u5C31\u662F\u51C6\u5907\u597D\u4E86\uFF0C\u53EF\u4EE5\u6267\u884C\uFF09</li></ul><h3 id="go-\u5173\u952E\u5B57" tabindex="-1"><a class="header-anchor" href="#go-\u5173\u952E\u5B57" aria-hidden="true">#</a> go \u5173\u952E\u5B57</h3><ul><li>\u7528\u4E8E\u5F00\u542F\u8F7B\u91CF\u7EA7\u7684routine\u534F\u7A0B\uFF0C\u540C\u4E00\u4E2A\u7A0B\u5E8F\u4E2D\u7684\u6240\u6709 goroutine \u5171\u4EAB\u540C\u4E00\u4E2A\u5730\u5740\u7A7A\u95F4\u3002</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import (
        &quot;fmt&quot;
        &quot;time&quot;
)

func say(s string) {
        for i := 0; i &lt; 5; i++ {
                time.Sleep(100 * time.Millisecond)
                fmt.Println(s)
        }
}

func main() {
        go say(&quot;world&quot;)
        say(&quot;hello&quot;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="channel" tabindex="-1"><a class="header-anchor" href="#channel" aria-hidden="true">#</a> channel</h3><ul><li>\u7528\u4E8E\u7EBF\u7A0B\u95F4\u901A\u4FE1\uFF0C\u4E14\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u901A\u9053\u662F\u4E0D\u5E26\u7F13\u51B2\u533A\u7684\uFF0C\u5373\u53D1\u9001\u65B9\u53D1\u9001\u6570\u636E\uFF0C\u63A5\u6536\u65B9\u9700\u8981\u63A5\u53D7\u6570\u636E</li><li>\u901A\u9053\uFF08channel\uFF09\u662F\u7528\u6765\u4F20\u9012\u6570\u636E\u7684\u4E00\u4E2A\u6570\u636E\u7ED3\u6784\u3002</li><li>\u901A\u9053\u53EF\u7528\u4E8E\u4E24\u4E2A goroutine \u4E4B\u95F4\u901A\u8FC7\u4F20\u9012\u4E00\u4E2A\u6307\u5B9A\u7C7B\u578B\u7684\u503C\u6765\u540C\u6B65\u8FD0\u884C\u548C\u901A\u8BAF\u3002\u64CD\u4F5C\u7B26 &lt;- \u7528\u4E8E\u6307\u5B9A\u901A\u9053\u7684\u65B9\u5411\uFF0C\u53D1\u9001\u6216\u63A5\u6536\u3002\u5982\u679C\u672A\u6307\u5B9A\u65B9\u5411\uFF0C\u5219\u4E3A\u53CC\u5411\u901A\u9053\u3002</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ch &lt;- v    // \u628A v \u53D1\u9001\u5230\u901A\u9053 ch
v := &lt;-ch  // \u4ECE ch \u63A5\u6536\u6570\u636E
           // \u5E76\u628A\u503C\u8D4B\u7ED9 v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u58F0\u660E</p></blockquote><p>\u4F7F\u7528chan\u5173\u952E\u5B57\uFF0C\u901A\u9053\u5728\u4F7F\u7528\u524D\u5FC5\u987B\u5148\u521B\u5EFA</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ch := make(chan int)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u901A\u9053\u7F13\u51B2\u533A</p></blockquote><p>\u901A\u9053\u53EF\u4EE5\u8BBE\u7F6E\u7F13\u51B2\u533A\uFF0C\u901A\u8FC7 make \u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u6307\u5B9A\u7F13\u51B2\u533A\u5927\u5C0F\uFF1A</p><p>\u5E26\u7F13\u51B2\u533A\u7684\u901A\u9053\u5141\u8BB8\u53D1\u9001\u7AEF\u7684\u6570\u636E\u53D1\u9001\u548C\u63A5\u6536\u7AEF\u7684\u6570\u636E\u83B7\u53D6\u5904\u4E8E\u5F02\u6B65\u72B6\u6001\uFF0C</p><p>\u5C31\u662F\u8BF4\u53D1\u9001\u7AEF\u53D1\u9001\u7684\u6570\u636E\u53EF\u4EE5\u653E\u5728\u7F13\u51B2\u533A\u91CC\u9762\uFF0C\u53EF\u4EE5\u7B49\u5F85\u63A5\u6536\u7AEF\u53BB\u83B7\u53D6\u6570\u636E\uFF0C\u800C\u4E0D\u662F\u7ACB\u523B\u9700\u8981\u63A5\u6536\u7AEF\u53BB\u83B7\u53D6\u6570\u636E\u3002</p><p>\u4E0D\u8FC7\u7531\u4E8E\u7F13\u51B2\u533A\u7684\u5927\u5C0F\u662F\u6709\u9650\u7684\uFF0C\u6240\u4EE5\u8FD8\u662F\u5FC5\u987B\u6709\u63A5\u6536\u7AEF\u6765\u63A5\u6536\u6570\u636E\u7684\uFF0C\u5426\u5219\u7F13\u51B2\u533A\u4E00\u6EE1\uFF0C\u6570\u636E\u53D1\u9001\u7AEF\u5C31\u65E0\u6CD5\u518D\u53D1\u9001\u6570\u636E\u4E86\u3002</p><p><strong>\u6CE8\u610F</strong>\uFF1A\u5982\u679C\u901A\u9053\u4E0D\u5E26\u7F13\u51B2\uFF0C\u53D1\u9001\u65B9\u4F1A\u963B\u585E\u76F4\u5230\u63A5\u6536\u65B9\u4ECE\u901A\u9053\u4E2D\u63A5\u6536\u4E86\u503C\u3002\u5982\u679C\u901A\u9053\u5E26\u7F13\u51B2\uFF0C\u53D1\u9001\u65B9\u5219\u4F1A\u963B\u585E\u76F4\u5230\u53D1\u9001\u7684\u503C\u88AB\u62F7\u8D1D\u5230\u7F13\u51B2\u533A\u5185\uFF1B\u5982\u679C\u7F13\u51B2\u533A\u5DF2\u6EE1\uFF0C \u5219\u610F\u5473\u7740\u9700\u8981\u7B49\u5F85\u76F4\u5230\u67D0\u4E2A\u63A5\u6536\u65B9\u83B7\u53D6\u5230\u4E00\u4E2A\u503C\u3002\u63A5\u6536\u65B9\u5728\u6709\u503C\u53EF\u4EE5\u63A5\u6536\u4E4B\u524D\u4F1A\u4E00\u76F4\u963B\u585E\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ch := make(chan int, 100)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import &quot;fmt&quot;

func main() {
    // \u8FD9\u91CC\u6211\u4EEC\u5B9A\u4E49\u4E86\u4E00\u4E2A\u53EF\u4EE5\u5B58\u50A8\u6574\u6570\u7C7B\u578B\u7684\u5E26\u7F13\u51B2\u901A\u9053
        // \u7F13\u51B2\u533A\u5927\u5C0F\u4E3A2
        ch := make(chan int, 2)

        // \u56E0\u4E3A ch \u662F\u5E26\u7F13\u51B2\u7684\u901A\u9053\uFF0C\u6211\u4EEC\u53EF\u4EE5\u540C\u65F6\u53D1\u9001\u4E24\u4E2A\u6570\u636E
        // \u800C\u4E0D\u7528\u7ACB\u523B\u9700\u8981\u53BB\u540C\u6B65\u8BFB\u53D6\u6570\u636E
        ch &lt;- 1
        ch &lt;- 2

        // \u83B7\u53D6\u8FD9\u4E24\u4E2A\u6570\u636E
        fmt.Println(&lt;-ch)
        fmt.Println(&lt;-ch)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Go \u904D\u5386\u901A\u9053\u4E0E\u5173\u95ED\u901A\u9053</p></blockquote><p>Go \u901A\u8FC7 range \u5173\u952E\u5B57\u6765\u5B9E\u73B0\u904D\u5386\u8BFB\u53D6\u5230\u7684\u6570\u636E\uFF0C\u7C7B\u4F3C\u4E8E\u4E0E\u6570\u7EC4\u6216\u5207\u7247\u3002\u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>v, ok := &lt;-ch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u901A\u9053\u63A5\u6536\u4E0D\u5230\u6570\u636E\u540E ok \u5C31\u4E3A false\uFF0C\u8FD9\u65F6\u901A\u9053\u5C31\u53EF\u4EE5\u4F7F\u7528 close() \u51FD\u6570\u6765\u5173\u95ED\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import (
        &quot;fmt&quot;
)

func fibonacci(n int, c chan int) {
        x, y := 0, 1
        for i := 0; i &lt; n; i++ {
                c &lt;- x
                x, y = y, x+y
        }
        close(c)
}

func main() {
        c := make(chan int, 10)
        go fibonacci(cap(c), c)
        // range \u51FD\u6570\u904D\u5386\u6BCF\u4E2A\u4ECE\u901A\u9053\u63A5\u6536\u5230\u7684\u6570\u636E\uFF0C\u56E0\u4E3A c \u5728\u53D1\u9001\u5B8C 10 \u4E2A
        // \u6570\u636E\u4E4B\u540E\u5C31\u5173\u95ED\u4E86\u901A\u9053\uFF0C\u6240\u4EE5\u8FD9\u91CC\u6211\u4EEC range \u51FD\u6570\u5728\u63A5\u6536\u5230 10 \u4E2A\u6570\u636E
        // \u4E4B\u540E\u5C31\u7ED3\u675F\u4E86\u3002\u5982\u679C\u4E0A\u9762\u7684 c \u901A\u9053\u4E0D\u5173\u95ED\uFF0C\u90A3\u4E48 range \u51FD\u6570\u5C31\u4E0D
        // \u4F1A\u7ED3\u675F\uFF0C\u4ECE\u800C\u5728\u63A5\u6536\u7B2C 11 \u4E2A\u6570\u636E\u7684\u65F6\u5019\u5C31\u963B\u585E\u4E86\u3002
        for i := range c {
                fmt.Println(i)
        }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33),s=[a];function c(r,v){return i(),n("div",null,s)}const m=e(d,[["render",c],["__file","\u5E76\u53D1.html.vue"]]);export{m as default};
