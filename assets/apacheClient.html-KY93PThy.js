import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as s,e as a}from"./app-hoN0JGLf.js";const l={},i=a(`<h1 id="apache-http-client" tabindex="-1"><a class="header-anchor" href="#apache-http-client"><span>apache-http-client</span></a></h1><h2 id="asyncclient" tabindex="-1"><a class="header-anchor" href="#asyncclient"><span>asyncClient</span></a></h2><h3 id="核心注意点" tabindex="-1"><a class="header-anchor" href="#核心注意点"><span>核心注意点</span></a></h3><ul><li>连接池中的连接有过期时间和空闲最大存活时间60s</li><li>注意多层异步回调</li><li>在收到响应后，handler的responseCompleted()释放连接</li><li>DefaultClientExchangeHandlerImpl是核心，和connection关联，处理请求和响应</li><li>在conn、ExchangeHandler之间进行交互</li></ul><h3 id="pool" tabindex="-1"><a class="header-anchor" href="#pool"><span>pool</span></a></h3><p>连接池，用于管理连接远程端点的连接(socket)</p><ul><li>IOSessionImpl</li><li>InternalDispatch派发事件</li><li>HttpAsyncRequestExecutor处理派发的事件，交给conn连接中的exchangeHandler处理</li><li>BaseIOReactor</li><li>DefaultConnectingIOReactor <ul><li>processEvents的processSessionRequests处理要添加通道的session请求，注册socketChannel到BaseIOReactor的selector中</li><li>processEvents处理连接完成事件，并将socketChannel注册到BaseIOReactor的selector中，并移除DefaultConnectingIOReactor的选择器selector中的channel</li></ul></li><li>IOReactor</li></ul><h4 id="defaultnhttpclientconnection" tabindex="-1"><a class="header-anchor" href="#defaultnhttpclientconnection"><span>DefaultNHttpClientConnection</span></a></h4><blockquote><p>produceOutput</p></blockquote><ul><li>处理写事件</li><li>是否有需写入的数据，没有执行requestReady方法，获取连接绑定的exchangeHandler构造请求，提交请求，即写数据到outbuf，等待输出到channel,并设置连接状态</li><li>内容编码器是否存在，存在调用outputReady方法处理</li><li>写数据到通道 注意： 在执行requestReady和outputReady过程中，需判断连接状态，改变连接socketChannel所绑定的selectionkey中的interestOps,忽略写事件，关注读事件</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>    public void produceOutput(final NHttpClientEventHandler handler) {</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            if (this.status == ACTIVE) {</span></span>
<span class="line"><span>                if (this.contentEncoder == null &amp;&amp; !this.outbuf.hasData()) {</span></span>
<span class="line"><span>                    handler.requestReady(this);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                if (this.contentEncoder != null) {</span></span>
<span class="line"><span>                    handler.outputReady(this, this.contentEncoder);</span></span>
<span class="line"><span>                    if (this.contentEncoder.isCompleted()) {</span></span>
<span class="line"><span>                        resetOutput();</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            if (this.outbuf.hasData()) {</span></span>
<span class="line"><span>                final int bytesWritten = this.outbuf.flush(this.session.channel());</span></span>
<span class="line"><span>                if (bytesWritten &gt; 0) {</span></span>
<span class="line"><span>                    this.outTransportMetrics.incrementBytesTransferred(bytesWritten);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            if (!this.outbuf.hasData()) {</span></span>
<span class="line"><span>                if (this.status == CLOSING) {</span></span>
<span class="line"><span>                    this.session.close();</span></span>
<span class="line"><span>                    this.status = CLOSED;</span></span>
<span class="line"><span>                    resetOutput();</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        } catch (final Exception ex) {</span></span>
<span class="line"><span>            handler.exception(this, ex);</span></span>
<span class="line"><span>        } finally {</span></span>
<span class="line"><span>            // Finally set the buffered output flag</span></span>
<span class="line"><span>            this.hasBufferedOutput = this.outbuf.hasData();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="请求" tabindex="-1"><a class="header-anchor" href="#请求"><span>请求</span></a></h3><ul><li>DefaultClientExchangeHandlerImpl</li><li>从连接池获取连接，并在连接的上下文设置DefaultClientExchangeHandlerImpl的实例handler</li><li>设置连接conn的感兴趣事件</li></ul><h3 id="响应" tabindex="-1"><a class="header-anchor" href="#响应"><span>响应</span></a></h3>`,14),t=[i];function p(c,o){return e(),s("div",null,t)}const h=n(l,[["render",p],["__file","apacheClient.html.vue"]]),u=JSON.parse('{"path":"/note/%E7%BD%91%E7%BB%9C%E9%80%9A%E4%BF%A1/apacheClient.html","title":"apache-http-client","lang":"zh-CN","frontmatter":{"description":"apache-http-client asyncClient 核心注意点 连接池中的连接有过期时间和空闲最大存活时间60s 注意多层异步回调 在收到响应后，handler的responseCompleted()释放连接 DefaultClientExchangeHandlerImpl是核心，和connection关联，处理请求和响应 在conn、Exc...","head":[["meta",{"property":"og:url","content":"https://wherywan.github.io/note/%E7%BD%91%E7%BB%9C%E9%80%9A%E4%BF%A1/apacheClient.html"}],["meta",{"property":"og:site_name","content":"HONG_JI"}],["meta",{"property":"og:title","content":"apache-http-client"}],["meta",{"property":"og:description","content":"apache-http-client asyncClient 核心注意点 连接池中的连接有过期时间和空闲最大存活时间60s 注意多层异步回调 在收到响应后，handler的responseCompleted()释放连接 DefaultClientExchangeHandlerImpl是核心，和connection关联，处理请求和响应 在conn、Exc..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-29T15:13:31.000Z"}],["meta",{"property":"article:author","content":"wanhongji"}],["meta",{"property":"article:modified_time","content":"2023-11-29T15:13:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"apache-http-client\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-29T15:13:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"wanhongji\\"}]}"]]},"headers":[{"level":2,"title":"asyncClient","slug":"asyncclient","link":"#asyncclient","children":[{"level":3,"title":"核心注意点","slug":"核心注意点","link":"#核心注意点","children":[]},{"level":3,"title":"pool","slug":"pool","link":"#pool","children":[]},{"level":3,"title":"请求","slug":"请求","link":"#请求","children":[]},{"level":3,"title":"响应","slug":"响应","link":"#响应","children":[]}]}],"git":{"createdTime":1701270811000,"updatedTime":1701270811000,"contributors":[{"name":"wanhongji","email":"wherywan@163.com","commits":1}]},"readingTime":{"minutes":1.33,"words":399},"filePathRelative":"note/网络通信/apacheClient.md","localizedDate":"2023年11月29日","excerpt":"\\n<h2>asyncClient</h2>\\n<h3>核心注意点</h3>\\n<ul>\\n<li>连接池中的连接有过期时间和空闲最大存活时间60s</li>\\n<li>注意多层异步回调</li>\\n<li>在收到响应后，handler的responseCompleted()释放连接</li>\\n<li>DefaultClientExchangeHandlerImpl是核心，和connection关联，处理请求和响应</li>\\n<li>在conn、ExchangeHandler之间进行交互</li>\\n</ul>\\n<h3>pool</h3>\\n<p>连接池，用于管理连接远程端点的连接(socket)</p>\\n<ul>\\n<li>IOSessionImpl</li>\\n<li>InternalDispatch派发事件</li>\\n<li>HttpAsyncRequestExecutor处理派发的事件，交给conn连接中的exchangeHandler处理</li>\\n<li>BaseIOReactor</li>\\n<li>DefaultConnectingIOReactor\\n<ul>\\n<li>processEvents的processSessionRequests处理要添加通道的session请求，注册socketChannel到BaseIOReactor的selector中</li>\\n<li>processEvents处理连接完成事件，并将socketChannel注册到BaseIOReactor的selector中，并移除DefaultConnectingIOReactor的选择器selector中的channel</li>\\n</ul>\\n</li>\\n<li>IOReactor</li>\\n</ul>","autoDesc":true}');export{h as comp,u as data};
