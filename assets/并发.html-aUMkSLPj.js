import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e}from"./app-hoN0JGLf.js";const l={},i=e(`<h1 id="并发" tabindex="-1"><a class="header-anchor" href="#并发"><span>并发</span></a></h1><h2 id="协程与通道" tabindex="-1"><a class="header-anchor" href="#协程与通道"><span>协程与通道</span></a></h2><ul><li>main协程结束，其他协程也会结束</li><li>协程与系统线程并不是一一对应关系，协程在线程基础上执行，一般单核CPU，使用一个线程执行多个协程</li></ul><h3 id="使用-gomaxprocs" tabindex="-1"><a class="header-anchor" href="#使用-gomaxprocs"><span>使用 GOMAXPROCS</span></a></h3><p>1、在 gc 编译器下（6g 或者 8g）你必须设置 GOMAXPROCS 为一个大于默认值 1 的数值来允许运行时支持使用多于 1 个的操作系统线程，否则所有的协程都会共享同一个线程</p><p>2、GOMAXPROCS 等同于（并发的）线程数量，在一台核心数多于 1 个的机器上，会尽可能有等同于核心数的线程在并行运行。</p><p>3、当 GOMAXPROCS 大于 1 时，会有一个线程池管理众多线程。gccgo 编译器 会使 GOMAXPROCS 与运行中的协程数量相等。</p><h3 id="close方法" tabindex="-1"><a class="header-anchor" href="#close方法"><span>close方法</span></a></h3><h3 id="select方法" tabindex="-1"><a class="header-anchor" href="#select方法"><span>select方法</span></a></h3><p>select 语句实现了一种监听模式，通常用在（无限）循环中；在某种情况下，通过 break 语句使循环退出。</p><ul><li>如果都阻塞了，会等待直到其中一个可以处理</li><li>如果多个可以处理，随机选择一个</li><li>如果没有通道操作可以处理并且写了 default 语句，它就会执行：default 永远是可运行的（这就是准备好了，可以执行）</li></ul><h3 id="go-关键字" tabindex="-1"><a class="header-anchor" href="#go-关键字"><span>go 关键字</span></a></h3><ul><li>用于开启轻量级的routine协程，同一个程序中的所有 goroutine 共享同一个地址空间。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>        &quot;fmt&quot;</span></span>
<span class="line"><span>        &quot;time&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func say(s string) {</span></span>
<span class="line"><span>        for i := 0; i &lt; 5; i++ {</span></span>
<span class="line"><span>                time.Sleep(100 * time.Millisecond)</span></span>
<span class="line"><span>                fmt.Println(s)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>        go say(&quot;world&quot;)</span></span>
<span class="line"><span>        say(&quot;hello&quot;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="channel" tabindex="-1"><a class="header-anchor" href="#channel"><span>channel</span></a></h3><ul><li>用于线程间通信，且默认情况下，通道是不带缓冲区的，即发送方发送数据，接收方需要接受数据</li><li>通道（channel）是用来传递数据的一个数据结构。</li><li>通道可用于两个 goroutine 之间通过传递一个指定类型的值来同步运行和通讯。操作符 &lt;- 用于指定通道的方向，发送或接收。如果未指定方向，则为双向通道。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>ch &lt;- v    // 把 v 发送到通道 ch</span></span>
<span class="line"><span>v := &lt;-ch  // 从 ch 接收数据</span></span>
<span class="line"><span>           // 并把值赋给 v</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>声明</p></blockquote><p>使用chan关键字，通道在使用前必须先创建</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>ch := make(chan int)</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>通道缓冲区</p></blockquote><p>通道可以设置缓冲区，通过 make 的第二个参数指定缓冲区大小：</p><p>带缓冲区的通道允许发送端的数据发送和接收端的数据获取处于异步状态，</p><p>就是说发送端发送的数据可以放在缓冲区里面，可以等待接收端去获取数据，而不是立刻需要接收端去获取数据。</p><p>不过由于缓冲区的大小是有限的，所以还是必须有接收端来接收数据的，否则缓冲区一满，数据发送端就无法再发送数据了。</p><p><strong>注意</strong>：如果通道不带缓冲，发送方会阻塞直到接收方从通道中接收了值。如果通道带缓冲，发送方则会阻塞直到发送的值被拷贝到缓冲区内；如果缓冲区已满， 则意味着需要等待直到某个接收方获取到一个值。接收方在有值可以接收之前会一直阻塞。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>ch := make(chan int, 100)</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &quot;fmt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>    // 这里我们定义了一个可以存储整数类型的带缓冲通道</span></span>
<span class="line"><span>        // 缓冲区大小为2</span></span>
<span class="line"><span>        ch := make(chan int, 2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 因为 ch 是带缓冲的通道，我们可以同时发送两个数据</span></span>
<span class="line"><span>        // 而不用立刻需要去同步读取数据</span></span>
<span class="line"><span>        ch &lt;- 1</span></span>
<span class="line"><span>        ch &lt;- 2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 获取这两个数据</span></span>
<span class="line"><span>        fmt.Println(&lt;-ch)</span></span>
<span class="line"><span>        fmt.Println(&lt;-ch)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Go 遍历通道与关闭通道</p></blockquote><p>Go 通过 range 关键字来实现遍历读取到的数据，类似于与数组或切片。格式如下：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>v, ok := &lt;-ch</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果通道接收不到数据后 ok 就为 false，这时通道就可以使用 close() 函数来关闭。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>        &quot;fmt&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func fibonacci(n int, c chan int) {</span></span>
<span class="line"><span>        x, y := 0, 1</span></span>
<span class="line"><span>        for i := 0; i &lt; n; i++ {</span></span>
<span class="line"><span>                c &lt;- x</span></span>
<span class="line"><span>                x, y = y, x+y</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        close(c)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>        c := make(chan int, 10)</span></span>
<span class="line"><span>        go fibonacci(cap(c), c)</span></span>
<span class="line"><span>        // range 函数遍历每个从通道接收到的数据，因为 c 在发送完 10 个</span></span>
<span class="line"><span>        // 数据之后就关闭了通道，所以这里我们 range 函数在接收到 10 个数据</span></span>
<span class="line"><span>        // 之后就结束了。如果上面的 c 通道不关闭，那么 range 函数就不</span></span>
<span class="line"><span>        // 会结束，从而在接收第 11 个数据的时候就阻塞了。</span></span>
<span class="line"><span>        for i := range c {</span></span>
<span class="line"><span>                fmt.Println(i)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33),p=[i];function c(t,d){return s(),a("div",null,p)}const v=n(l,[["render",c],["__file","并发.html.vue"]]),u=JSON.parse('{"path":"/note/go/%E5%B9%B6%E5%8F%91.html","title":"并发","lang":"zh-CN","frontmatter":{"description":"并发 协程与通道 main协程结束，其他协程也会结束 协程与系统线程并不是一一对应关系，协程在线程基础上执行，一般单核CPU，使用一个线程执行多个协程 使用 GOMAXPROCS 1、在 gc 编译器下（6g 或者 8g）你必须设置 GOMAXPROCS 为一个大于默认值 1 的数值来允许运行时支持使用多于 1 个的操作系统线程，否则所有的协程都会共享...","head":[["meta",{"property":"og:url","content":"https://wherywan.github.io/note/go/%E5%B9%B6%E5%8F%91.html"}],["meta",{"property":"og:site_name","content":"HONG_JI"}],["meta",{"property":"og:title","content":"并发"}],["meta",{"property":"og:description","content":"并发 协程与通道 main协程结束，其他协程也会结束 协程与系统线程并不是一一对应关系，协程在线程基础上执行，一般单核CPU，使用一个线程执行多个协程 使用 GOMAXPROCS 1、在 gc 编译器下（6g 或者 8g）你必须设置 GOMAXPROCS 为一个大于默认值 1 的数值来允许运行时支持使用多于 1 个的操作系统线程，否则所有的协程都会共享..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-11-05T13:39:07.000Z"}],["meta",{"property":"article:author","content":"wanhongji"}],["meta",{"property":"article:modified_time","content":"2022-11-05T13:39:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"并发\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-11-05T13:39:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"wanhongji\\"}]}"]]},"headers":[{"level":2,"title":"协程与通道","slug":"协程与通道","link":"#协程与通道","children":[{"level":3,"title":"使用 GOMAXPROCS","slug":"使用-gomaxprocs","link":"#使用-gomaxprocs","children":[]},{"level":3,"title":"close方法","slug":"close方法","link":"#close方法","children":[]},{"level":3,"title":"select方法","slug":"select方法","link":"#select方法","children":[]},{"level":3,"title":"go 关键字","slug":"go-关键字","link":"#go-关键字","children":[]},{"level":3,"title":"channel","slug":"channel","link":"#channel","children":[]}]}],"git":{"createdTime":1667655547000,"updatedTime":1667655547000,"contributors":[{"name":"wanhongji","email":"wherywan@163.com","commits":1}]},"readingTime":{"minutes":3.84,"words":1152},"filePathRelative":"note/go/并发.md","localizedDate":"2022年11月5日","excerpt":"\\n<h2>协程与通道</h2>\\n<ul>\\n<li>main协程结束，其他协程也会结束</li>\\n<li>协程与系统线程并不是一一对应关系，协程在线程基础上执行，一般单核CPU，使用一个线程执行多个协程</li>\\n</ul>\\n<h3>使用 GOMAXPROCS</h3>\\n<p>1、在 gc 编译器下（6g 或者 8g）你必须设置 GOMAXPROCS 为一个大于默认值 1 的数值来允许运行时支持使用多于 1 个的操作系统线程，否则所有的协程都会共享同一个线程</p>\\n<p>2、GOMAXPROCS 等同于（并发的）线程数量，在一台核心数多于 1 个的机器上，会尽可能有等同于核心数的线程在并行运行。</p>","autoDesc":true}');export{v as comp,u as data};
