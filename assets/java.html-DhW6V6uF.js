import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as p,c as t,a as s,b as n,d as c,e as a}from"./app-hoN0JGLf.js";const o={},r=a(`<h1 id="java" tabindex="-1"><a class="header-anchor" href="#java"><span>java</span></a></h1><h2 id="运算符优先级" tabindex="-1"><a class="header-anchor" href="#运算符优先级"><span>运算符优先级</span></a></h2><h2 id="知识点" tabindex="-1"><a class="header-anchor" href="#知识点"><span>知识点</span></a></h2><p>文件写入不到build的resource目录下</p><h2 id="集合" tabindex="-1"><a class="header-anchor" href="#集合"><span>集合</span></a></h2><p>最上层的Collections和Map接口</p><p>其中List和Set接口继承Collections</p><p>常用的是ArrayList和HashMap和HashSet</p><ul><li><p>List</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>ArrayList和LinkedList是其实现类，元素顺序是有序的，容量10</span></span>
<span class="line"><span>ArrayList底层实现是Object[]数组，LinkedList是双向链表。</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Set</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>HashSet是其实现类，元素是无序的</span></span>
<span class="line"><span>HashSet底层是基于hashMap结构</span></span>
<span class="line"><span>TreeSet是其实现类，元素是有序的</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Map</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>HashMap是其实现类，存放键值对元素，容量是16</span></span>
<span class="line"><span>底层是基于数组加链表和红黑树，链表长度大于8会转化为红黑树，如果数组元素小于64，会先进行扩容</span></span>
<span class="line"><span>TreeMap</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="集合遍历删除元素" tabindex="-1"><a class="header-anchor" href="#集合遍历删除元素"><span>集合遍历删除元素</span></a></h3><ul><li>for:遍历 本质上是转换为迭代器操作</li><li>只能在迭代器中遍历做删除操作，且只能用迭代器的remove方法</li></ul><h2 id="exception" tabindex="-1"><a class="header-anchor" href="#exception"><span>Exception</span></a></h2><p>自上而下的类结构</p><ul><li><p>Throwable</p><ul><li><p>Error</p></li><li><p>Exception</p><ul><li><p>检查时异常，必须进行处理,直接继承Exception,需显式处理,在方法上声明throws</p></li><li><p>非受检异常，即RunException</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>数组越界，空指针，类型转换等异常</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li></ul></li></ul><h2 id="thread" tabindex="-1"><a class="header-anchor" href="#thread"><span>Thread</span></a></h2><h3 id="线程状态" tabindex="-1"><a class="header-anchor" href="#线程状态"><span>线程状态</span></a></h3><ol><li>NEW：线程对象已经被创建，但是还没有调用start()方法启动。</li><li>RUNNABLE：线程正在执行或者等待CPU时间片，处于可运行状态。</li><li>BLOCKED：线程在等待锁的释放，无法继续执行，处于阻塞状态。</li><li>WAITING：线程正在等待另一个线程的通知或者等待IO操作完成。</li><li>TIMED_WAITING：线程正在等待另一个线程的通知或者等待IO操作完成，但是可以设置等待时间。</li><li>TERMINATED：线程已经执行完毕或者因为异常而终止，处于终止状态。</li></ol><h3 id="线程池" tabindex="-1"><a class="header-anchor" href="#线程池"><span>线程池</span></a></h3><p>若线程池在执行任务过程中，抛出运行时异常，线程池会进行处理，标记线程已完成，同时创建新的线程替代它执行其他任务 注意线程池的工作线程是循环执行的，调用消息队列的take方法获取任务，当任务队列为空，线程就会等待状态，等待被唤醒，释放cpu资源和锁资源</p><h3 id="测试样例" tabindex="-1"><a class="header-anchor" href="#测试样例"><span>测试样例</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span style="color:#0000FF;">public</span><span style="color:#0000FF;"> class</span><span style="color:#267F99;"> TestService</span><span style="color:#000000;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0000FF;">    public</span><span style="color:#0000FF;"> static</span><span style="color:#267F99;"> void</span><span style="color:#795E26;"> main</span><span style="color:#000000;">(</span><span style="color:#267F99;">String</span><span style="color:#000000;">[] </span><span style="color:#001080;">args</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#267F99;">        ExecutorService</span><span style="color:#001080;"> executor1</span><span style="color:#000000;"> = </span><span style="color:#001080;">Executors</span><span style="color:#000000;">.</span><span style="color:#795E26;">newSingleThreadExecutor</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#267F99;">        ExecutorService</span><span style="color:#001080;"> executor2</span><span style="color:#000000;"> = </span><span style="color:#001080;">Executors</span><span style="color:#000000;">.</span><span style="color:#795E26;">newSingleThreadExecutor</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#AF00DB;">        for</span><span style="color:#000000;"> (</span><span style="color:#267F99;">int</span><span style="color:#001080;"> i</span><span style="color:#000000;"> = </span><span style="color:#098658;">1</span><span style="color:#000000;">; i &lt; </span><span style="color:#098658;">11</span><span style="color:#000000;">; i++) {</span></span>
<span class="line"><span style="color:#267F99;">            AtomicInteger</span><span style="color:#001080;"> finalI</span><span style="color:#000000;"> = </span><span style="color:#AF00DB;">new</span><span style="color:#795E26;"> AtomicInteger</span><span style="color:#000000;">(i);</span></span>
<span class="line"><span style="color:#AF00DB;">            if</span><span style="color:#000000;"> (</span><span style="color:#001080;">finalI</span><span style="color:#000000;">.</span><span style="color:#795E26;">get</span><span style="color:#000000;">() &gt; </span><span style="color:#098658;">5</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#001080;">                executor2</span><span style="color:#000000;">.</span><span style="color:#795E26;">execute</span><span style="color:#000000;">(() </span><span style="color:#0000FF;">-&gt;</span><span style="color:#000000;">{</span></span>
<span class="line"><span style="color:#AF00DB;">                    if</span><span style="color:#000000;"> (</span><span style="color:#098658;">7</span><span style="color:#000000;"> == </span><span style="color:#001080;">finalI</span><span style="color:#000000;">.</span><span style="color:#795E26;">get</span><span style="color:#000000;">()) {</span></span>
<span class="line"><span style="color:#001080;">                        executor1</span><span style="color:#000000;">.</span><span style="color:#795E26;">shutdown</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#AF00DB;">                        try</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#001080;">                            Thread</span><span style="color:#000000;">.</span><span style="color:#795E26;">sleep</span><span style="color:#000000;">(</span><span style="color:#098658;">5000</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#000000;">                        } </span><span style="color:#AF00DB;">catch</span><span style="color:#000000;"> (</span><span style="color:#267F99;">InterruptedException</span><span style="color:#001080;"> e</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#AF00DB;">                            throw</span><span style="color:#AF00DB;"> new</span><span style="color:#795E26;"> RuntimeException</span><span style="color:#000000;">(e);</span></span>
<span class="line"><span style="color:#000000;">                        }</span></span>
<span class="line"><span style="color:#000000;">                    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#001080;">                    System</span><span style="color:#000000;">.</span><span style="color:#001080;">out</span><span style="color:#000000;">.</span><span style="color:#795E26;">println</span><span style="color:#000000;">(</span><span style="color:#A31515;">&quot;++&quot;</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#001080;">                    System</span><span style="color:#000000;">.</span><span style="color:#001080;">out</span><span style="color:#000000;">.</span><span style="color:#795E26;">println</span><span style="color:#000000;">(</span><span style="color:#001080;">executor1</span><span style="color:#000000;">.</span><span style="color:#795E26;">isShutdown</span><span style="color:#000000;">());</span></span>
<span class="line"><span style="color:#001080;">                    System</span><span style="color:#000000;">.</span><span style="color:#001080;">out</span><span style="color:#000000;">.</span><span style="color:#795E26;">println</span><span style="color:#000000;">(</span><span style="color:#A31515;">&quot;任务&quot;</span><span style="color:#000000;"> + </span><span style="color:#001080;">finalI</span><span style="color:#000000;">.</span><span style="color:#795E26;">get</span><span style="color:#000000;">());</span></span>
<span class="line"><span style="color:#001080;">                    System</span><span style="color:#000000;">.</span><span style="color:#001080;">out</span><span style="color:#000000;">.</span><span style="color:#795E26;">println</span><span style="color:#000000;">(</span><span style="color:#A31515;">&quot;--&quot;</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#000000;">                } );</span></span>
<span class="line"><span style="color:#000000;">            } </span><span style="color:#AF00DB;">else</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#001080;">                executor1</span><span style="color:#000000;">.</span><span style="color:#795E26;">execute</span><span style="color:#000000;">(() </span><span style="color:#0000FF;">-&gt;</span><span style="color:#000000;">{</span></span>
<span class="line"><span style="color:#AF00DB;">                    if</span><span style="color:#000000;"> (</span><span style="color:#098658;">3</span><span style="color:#000000;"> == </span><span style="color:#001080;">finalI</span><span style="color:#000000;">.</span><span style="color:#795E26;">get</span><span style="color:#000000;">()) {</span></span>
<span class="line"><span style="color:#AF00DB;">                        throw</span><span style="color:#AF00DB;"> new</span><span style="color:#795E26;"> RuntimeException</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#008000;">                        //try {</span></span>
<span class="line"><span style="color:#008000;">                        //    Thread.sleep(5000);</span></span>
<span class="line"><span style="color:#008000;">                        //} catch (InterruptedException e) {</span></span>
<span class="line"><span style="color:#008000;">                        //    throw new RuntimeException(e);</span></span>
<span class="line"><span style="color:#008000;">                        //}</span></span>
<span class="line"><span style="color:#000000;">                    }</span></span>
<span class="line"><span style="color:#001080;">                    System</span><span style="color:#000000;">.</span><span style="color:#001080;">out</span><span style="color:#000000;">.</span><span style="color:#795E26;">println</span><span style="color:#000000;">(</span><span style="color:#001080;">Thread</span><span style="color:#000000;">.</span><span style="color:#795E26;">currentThread</span><span style="color:#000000;">().</span><span style="color:#795E26;">getName</span><span style="color:#000000;">());</span></span>
<span class="line"><span style="color:#001080;">                    System</span><span style="color:#000000;">.</span><span style="color:#001080;">out</span><span style="color:#000000;">.</span><span style="color:#795E26;">println</span><span style="color:#000000;">(</span><span style="color:#A31515;">&quot;任务&quot;</span><span style="color:#000000;"> + </span><span style="color:#001080;">finalI</span><span style="color:#000000;">.</span><span style="color:#795E26;">get</span><span style="color:#000000;">());</span></span>
<span class="line"><span style="color:#000000;">                } );</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="守护线程和用户线程" tabindex="-1"><a class="header-anchor" href="#守护线程和用户线程"><span>守护线程和用户线程</span></a></h3>`,22),d={href:"https://www.cnblogs.com/pengai/articles/15827826.html",target:"_blank",rel:"noopener noreferrer"},v=a(`<p>但是有一个例外情况，如果这些子线程都是守护线程，那么子线程会随着主线程结束而结束。</p><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h3><ul><li><p>Runable接口，继承Thread</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>重写run方法，构建线程任务</span></span>
<span class="line"><span>start方法启用线程</span></span>
<span class="line"><span>jion方法将子线程加入当前主线程，控制线程执行顺序</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>线程池的方式，ThreadPoolExecutor</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>核心线程数，最大线程数，阻塞队列，线程工厂，超时时间（即线程最大的空闲时间，若超出时间，则销毁线程），拒绝策略</span></span>
<span class="line"><span>核心时getTask，线程获取等待队列中的任务</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>ExecutorService executorService = new ThreadPoolExecutor(10,15,60, TimeUnit.SECONDS,new LinkedBlockingDeque&lt;&gt;(20),</span></span>
<span class="line"><span>            Executors.defaultThreadFactory(),new ThreadPoolExecutor.CallerRunsPolicy());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        List&lt;List&lt;Inventory&gt;&gt; splitStocks = CollectionUtil.split(list.getData().getRows(),25);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        CountDownLatch count = new CountDownLatch(splitStocks.size());</span></span>
<span class="line"><span>        Long startTime = new Date().getTime();</span></span>
<span class="line"><span>        for(List list1: splitStocks)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            executorService.execute(new ThreadTask(count,customerItemStockVOS,list1,itemStockBiz,receiptRecordBiz,receiptBiz));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        try</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            count.await(120,TimeUnit.SECONDS);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        catch (InterruptedException e)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        Long endTime = new Date().getTime();</span></span>
<span class="line"><span>        log.info(&quot;耗时&quot;+(endTime-startTime));</span></span>
<span class="line"><span>	static class ThreadTask implements Runnable</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        private CountDownLatch c;</span></span>
<span class="line"><span>        private List&lt;CustomerItemStockVO&gt; customerItemStockVOS;</span></span>
<span class="line"><span>        private List&lt;Inventory&gt; list;</span></span>
<span class="line"><span>        private ItemStockBiz itemStockBiz;</span></span>
<span class="line"><span>        private ReceiptRecordBiz receiptRecordBiz;</span></span>
<span class="line"><span>        private ReceiptBiz receiptBiz;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public ThreadTask(CountDownLatch c,List&lt;CustomerItemStockVO&gt; customerItemStockVOS,List&lt;Inventory&gt; list,ItemStockBiz itemStockBiz,</span></span>
<span class="line"><span>            ReceiptRecordBiz receiptRecordBiz, ReceiptBiz receiptBiz)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            this.customerItemStockVOS = customerItemStockVOS;</span></span>
<span class="line"><span>            this.c = c;</span></span>
<span class="line"><span>            this.list = list;</span></span>
<span class="line"><span>            this.receiptBiz = receiptBiz;</span></span>
<span class="line"><span>            this.receiptRecordBiz = receiptRecordBiz;</span></span>
<span class="line"><span>            this.itemStockBiz = itemStockBiz;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        @Override</span></span>
<span class="line"><span>        public void run(){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            try</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                list.forEach(item -&gt; {</span></span>
<span class="line"><span>                    CustomerItemStockVO customerItemStockVO = new CustomerItemStockVO();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    Map&lt;String,Object&gt; requestParams = new HashMap&lt;&gt;();</span></span>
<span class="line"><span>                    requestParams.put(&quot;tenantId&quot;,item.getTenantId());</span></span>
<span class="line"><span>                    requestParams.put(&quot;warehouseId&quot;,item.getWarehouseId());</span></span>
<span class="line"><span>                    requestParams.put(&quot;customerId&quot;,item.getCustomerId());</span></span>
<span class="line"><span>                    requestParams.put(&quot;itemId&quot;,item.getItemId());</span></span>
<span class="line"><span>                    requestParams.put(&quot;normalFlag&quot;,item.getNormalFlag());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    List&lt;ItemStock&gt; itemStockList = itemStockBiz.selectForItemCache(requestParams);</span></span>
<span class="line"><span>                    List&lt;ItemStockVo&gt; itemStockVoList = itemStockBiz.assembleDate1(itemStockList);</span></span>
<span class="line"><span>                    BigDecimal quantity = BigDecimal.ZERO;</span></span>
<span class="line"><span>                    BigDecimal usableQty = BigDecimal.ZERO;</span></span>
<span class="line"><span>                    BigDecimal lockQty = BigDecimal.ZERO;</span></span>
<span class="line"><span>                    BigDecimal frozenQuantity = BigDecimal.ZERO;</span></span>
<span class="line"><span>                    BigDecimal diffQty = BigDecimal.ZERO;</span></span>
<span class="line"><span>                    BigDecimal outGoingCache = BigDecimal.ZERO;</span></span>
<span class="line"><span>                    BigDecimal storageCache = BigDecimal.ZERO;</span></span>
<span class="line"><span>                    BigDecimal returnQty = BigDecimal.ZERO;</span></span>
<span class="line"><span>                    BigDecimal replLockQty = BigDecimal.ZERO;</span></span>
<span class="line"><span>                    BigDecimal pieceNum = BigDecimal.ZERO;</span></span>
<span class="line"><span>                    BigDecimal oddQuantity = BigDecimal.ZERO;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    for (ItemStockVo itemStockVo : itemStockVoList)</span></span>
<span class="line"><span>                    {</span></span>
<span class="line"><span>                        BeanUtil.copyProperties(itemStockVo, customerItemStockVO);</span></span>
<span class="line"><span>                        // 可用库存、锁定库存（越库缓存+补货缓存+拣货库位+存储库位）</span></span>
<span class="line"><span>                        if (itemStockVo.getLocationType()</span></span>
<span class="line"><span>                            .equals(WmsConstant.Location.LocationType.REPOSITORY_LOCATION.getCode())</span></span>
<span class="line"><span>                            ||</span></span>
<span class="line"><span>                            itemStockVo.getLocationType().equals(WmsConstant.Location.LocationType.PICKING_LOCATION.getCode())</span></span>
<span class="line"><span>                            || itemStockVo.getLocationType()</span></span>
<span class="line"><span>                            .equals(WmsConstant.Location.LocationType.REPLENISHMENT_CACHE.getCode())</span></span>
<span class="line"><span>                            || itemStockVo.getLocationType()</span></span>
<span class="line"><span>                            .equals(WmsConstant.Location.LocationType.CROSS_DATABASE_CACHE.getCode()))</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            usableQty = itemStockVo.getUsableQuantity().add(usableQty);</span></span>
<span class="line"><span>                            lockQty = itemStockVo.getLockQuantity().add(lockQty);</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                        // 冻结数量（拣货库位+存储库位）</span></span>
<span class="line"><span>                        if (itemStockVo.getLocationType().equals(WmsConstant.Location.LocationType.PICKING_LOCATION.getCode())</span></span>
<span class="line"><span>                            || itemStockVo.getLocationType()</span></span>
<span class="line"><span>                            .equals(WmsConstant.Location.LocationType.REPOSITORY_LOCATION.getCode()))</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            frozenQuantity = itemStockVo.getFrozenQuantity().add(frozenQuantity);</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                        // 差异数量（差异库位）</span></span>
<span class="line"><span>                        if (itemStockVo.getLocationType().equals(WmsConstant.Location.LocationType.ABNORMAL_LOCATION.getCode()))</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            diffQty = itemStockVo.getUsableQuantity().add(diffQty);</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                        // 出库缓存（出库缓存的可用库存总量）</span></span>
<span class="line"><span>                        if (itemStockVo.getLocationType().equals(WmsConstant.Location.LocationType.OUTGOING_CACHE.getCode()))</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            outGoingCache = itemStockVo.getUsableQuantity().add(outGoingCache);</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                        //  入库缓存（入库缓存的可用库存总量）</span></span>
<span class="line"><span>                        if (itemStockVo.getLocationType().equals(WmsConstant.Location.LocationType.STORAGE_CACHE.getCode()))</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            storageCache = itemStockVo.getUsableQuantity().add(storageCache);</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                        //  返库数量（发货异常的库存总量）</span></span>
<span class="line"><span>                        if (itemStockVo.getLocationType().equals(WmsConstant.Location.LocationType.DELIVERY_ABNORMAL.getCode()))</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            returnQty = itemStockVo.getQuantity().add(returnQty);</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                        //  补货锁定库存、整件数量、 散件数量 （直接累加）</span></span>
<span class="line"><span>                        replLockQty = itemStockVo.getReplLockQuantity().add(replLockQty);</span></span>
<span class="line"><span>                        pieceNum = itemStockVo.getPieceNum().add(pieceNum);</span></span>
<span class="line"><span>                        oddQuantity = itemStockVo.getOddQuantity().add(oddQuantity);</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                    // 总库存数 = 可用库存+锁定库存+差异数量+冻结数量+入库缓存+出库缓存+返库数量+补货锁定数量</span></span>
<span class="line"><span>                    quantity = usableQty.add(lockQty).add(diffQty) .add(frozenQuantity) .add(storageCache).add(outGoingCache).add(returnQty).add(replLockQty);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    if (itemStockVoList.isEmpty())</span></span>
<span class="line"><span>                    {</span></span>
<span class="line"><span>                        BeanUtil.copyProperties(item, customerItemStockVO);</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                    customerItemStockVO.setGoodsCode(item.getGoodsCode());</span></span>
<span class="line"><span>                    customerItemStockVO.setQuantity(quantity);</span></span>
<span class="line"><span>                    customerItemStockVO.setUsableQty(usableQty);</span></span>
<span class="line"><span>                    customerItemStockVO.setLockQty(lockQty);</span></span>
<span class="line"><span>                    customerItemStockVO.setFrozenQuantity(frozenQuantity);</span></span>
<span class="line"><span>                    customerItemStockVO.setDiffQty(diffQty);</span></span>
<span class="line"><span>                    customerItemStockVO.setOutGoingCache(outGoingCache);</span></span>
<span class="line"><span>                    customerItemStockVO.setStorageCache(storageCache);</span></span>
<span class="line"><span>                    customerItemStockVO.setReturnQty(returnQty);</span></span>
<span class="line"><span>                    customerItemStockVO.setReplLockQty(replLockQty);</span></span>
<span class="line"><span>                    customerItemStockVO.setPieceNum(pieceNum);</span></span>
<span class="line"><span>                    customerItemStockVO.setOddQuantity(oddQuantity);</span></span>
<span class="line"><span>                    // 下单锁定（已下单未发运数量）orderQty;</span></span>
<span class="line"><span>                    customerItemStockVO.setOrderQty(item.getOrderQty());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    ReceiptRecord receiptRecord = new ReceiptRecord();</span></span>
<span class="line"><span>                    receiptRecord.setTenantId(item.getTenantId());</span></span>
<span class="line"><span>                    receiptRecord.setWarehouseId(item.getWarehouseId());</span></span>
<span class="line"><span>                    receiptRecord.setCustomerId(item.getCustomerId());</span></span>
<span class="line"><span>                    receiptRecord.setItemId(item.getItemId());</span></span>
<span class="line"><span>                    receiptRecord.setNormalFlag(item.getNormalFlag());</span></span>
<span class="line"><span>                    receiptRecord.setQcStatus(WmsConstant.Receipt.QcStatus.WAIT_QC.getCode());</span></span>
<span class="line"><span>                    // 收货在途（新纪录+收货中的待收货数）</span></span>
<span class="line"><span>                    Receipt receipt =new Receipt();</span></span>
<span class="line"><span>                    receipt.setTenantId(item.getTenantId());</span></span>
<span class="line"><span>                    receipt.setWarehouseId(item.getWarehouseId());</span></span>
<span class="line"><span>                    receipt.setCustomerId(item.getCustomerId());</span></span>
<span class="line"><span>                    receipt.setReceiptStatus(WmsConstant.Receipt.ReceiptStatus.NEW.getCode());</span></span>
<span class="line"><span>                    List&lt;Receipt&gt; receipts=receiptBiz.selectList(receipt);</span></span>
<span class="line"><span>                    receipt.setReceiptStatus(WmsConstant.Receipt.ReceiptStatus.RECEIVING.getCode());</span></span>
<span class="line"><span>                    receipts.addAll(receiptBiz.selectList(receipt));</span></span>
<span class="line"><span>                    if(receipts.size()&gt;0){</span></span>
<span class="line"><span>                        BigDecimal expectQty = BigDecimal.valueOf(receipts.stream().mapToDouble(i -&gt; i.getExpectedQuantity().doubleValue()).sum());</span></span>
<span class="line"><span>                        BigDecimal receivedQty = BigDecimal.valueOf(receipts.stream().mapToDouble(i -&gt; i.getReceivedQuantity().doubleValue()).sum());</span></span>
<span class="line"><span>                        customerItemStockVO.setIntransitQuantity(expectQty.subtract(receivedQty));</span></span>
<span class="line"><span>                    }else{</span></span>
<span class="line"><span>                        customerItemStockVO.setIntransitQuantity(BigDecimal.ZERO);</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    List&lt;ReceiptRecord&gt; receiptRecords = receiptRecordBiz.selectList(receiptRecord);</span></span>
<span class="line"><span>                    // 待质检量（待质检的收货记录的实际收货数量）</span></span>
<span class="line"><span>                    if (receiptRecords.size() &gt; 0)</span></span>
<span class="line"><span>                    {</span></span>
<span class="line"><span>                        customerItemStockVO.setQrQty(BigDecimal.valueOf(receiptRecords.stream().mapToInt(record -&gt; record.getReceivedQuantity().intValue()).sum()));</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                    else</span></span>
<span class="line"><span>                    {</span></span>
<span class="line"><span>                        customerItemStockVO.setQrQty(BigDecimal.ZERO);</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                    // 汇总的数据塞值</span></span>
<span class="line"><span>                    customerItemStockVOS.add(customerItemStockVO);</span></span>
<span class="line"><span>                });</span></span>
<span class="line"><span>                c.countDown();</span></span>
<span class="line"><span>//                System.out.println(Thread.currentThread().getName()+&quot;  task&quot; + i);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            catch (Exception e)</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                e.printStackTrace();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="线程间的通信" tabindex="-1"><a class="header-anchor" href="#线程间的通信"><span>线程间的通信</span></a></h3><ul><li>wait、notify、notifyAll</li><li>condition、aWait、signal、signalAll</li></ul><h3 id="线程执行顺序" tabindex="-1"><a class="header-anchor" href="#线程执行顺序"><span>线程执行顺序</span></a></h3><ul><li>countDownLatch</li><li>join</li><li>Future类获取异步线程结果</li></ul><h2 id="queue" tabindex="-1"><a class="header-anchor" href="#queue"><span>Queue</span></a></h2><blockquote><p>offer和add区别</p></blockquote><p>都是向队列添加元素，offer方法若队列已满，则返回false，不会报错</p><blockquote><p>remove和poll区别</p></blockquote><p>向队列移除元素，poll方法若队列已空，则返回false，不会报错</p>`,12);function u(m,b){const e=i("ExternalLinkIcon");return p(),t("div",null,[r,s("p",null,[s("a",d,[n("参考"),c(e)]),n(" 线程不像进程，一个进程中的线程之间是没有父子之分的，都是平级关系。即线程都是一样的, 退出了一个不会影响另外一个。")]),v])}const g=l(o,[["render",u],["__file","java.html.vue"]]),k=JSON.parse('{"path":"/note/java/java.html","title":"java","lang":"zh-CN","frontmatter":{"description":"java 运算符优先级 知识点 文件写入不到build的resource目录下 集合 最上层的Collections和Map接口 其中List和Set接口继承Collections 常用的是ArrayList和HashMap和HashSet List Set Map 集合遍历删除元素 for:遍历 本质上是转换为迭代器操作 只能在迭代器中遍历做删除操作...","head":[["meta",{"property":"og:url","content":"https://wherywan.github.io/note/java/java.html"}],["meta",{"property":"og:site_name","content":"HONG_JI"}],["meta",{"property":"og:title","content":"java"}],["meta",{"property":"og:description","content":"java 运算符优先级 知识点 文件写入不到build的resource目录下 集合 最上层的Collections和Map接口 其中List和Set接口继承Collections 常用的是ArrayList和HashMap和HashSet List Set Map 集合遍历删除元素 for:遍历 本质上是转换为迭代器操作 只能在迭代器中遍历做删除操作..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-02T04:40:31.000Z"}],["meta",{"property":"article:author","content":"wanhongji"}],["meta",{"property":"article:modified_time","content":"2023-08-02T04:40:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"java\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-02T04:40:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"wanhongji\\"}]}"]]},"headers":[{"level":2,"title":"运算符优先级","slug":"运算符优先级","link":"#运算符优先级","children":[]},{"level":2,"title":"知识点","slug":"知识点","link":"#知识点","children":[]},{"level":2,"title":"集合","slug":"集合","link":"#集合","children":[{"level":3,"title":"集合遍历删除元素","slug":"集合遍历删除元素","link":"#集合遍历删除元素","children":[]}]},{"level":2,"title":"Exception","slug":"exception","link":"#exception","children":[]},{"level":2,"title":"Thread","slug":"thread","link":"#thread","children":[{"level":3,"title":"线程状态","slug":"线程状态","link":"#线程状态","children":[]},{"level":3,"title":"线程池","slug":"线程池","link":"#线程池","children":[]},{"level":3,"title":"测试样例","slug":"测试样例","link":"#测试样例","children":[]},{"level":3,"title":"守护线程和用户线程","slug":"守护线程和用户线程","link":"#守护线程和用户线程","children":[]},{"level":3,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":3,"title":"线程间的通信","slug":"线程间的通信","link":"#线程间的通信","children":[]},{"level":3,"title":"线程执行顺序","slug":"线程执行顺序","link":"#线程执行顺序","children":[]}]},{"level":2,"title":"Queue","slug":"queue","link":"#queue","children":[]}],"git":{"createdTime":1654706857000,"updatedTime":1690951231000,"contributors":[{"name":"wanhongji","email":"wherywan@163.com","commits":6},{"name":"wanhongji","email":"wan_hongji@163.com","commits":1}]},"readingTime":{"minutes":5.29,"words":1586},"filePathRelative":"note/java/java.md","localizedDate":"2022年6月8日","excerpt":"\\n<h2>运算符优先级</h2>\\n<h2>知识点</h2>\\n<p>文件写入不到build的resource目录下</p>\\n<h2>集合</h2>\\n<p>最上层的Collections和Map接口</p>\\n<p>其中List和Set接口继承Collections</p>\\n<p>常用的是ArrayList和HashMap和HashSet</p>\\n<ul>\\n<li>\\n<p>List</p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"shiki light-plus\\" style=\\"background-color:#FFFFFF;color:#000000\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span>ArrayList和LinkedList是其实现类，元素顺序是有序的，容量10</span></span>\\n<span class=\\"line\\"><span>ArrayList底层实现是Object[]数组，LinkedList是双向链表。</span></span>\\n<span class=\\"line\\"><span></span></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>Set</p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"shiki light-plus\\" style=\\"background-color:#FFFFFF;color:#000000\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span>HashSet是其实现类，元素是无序的</span></span>\\n<span class=\\"line\\"><span>HashSet底层是基于hashMap结构</span></span>\\n<span class=\\"line\\"><span>TreeSet是其实现类，元素是有序的</span></span>\\n<span class=\\"line\\"><span></span></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>Map</p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"shiki light-plus\\" style=\\"background-color:#FFFFFF;color:#000000\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span>HashMap是其实现类，存放键值对元素，容量是16</span></span>\\n<span class=\\"line\\"><span>底层是基于数组加链表和红黑树，链表长度大于8会转化为红黑树，如果数组元素小于64，会先进行扩容</span></span>\\n<span class=\\"line\\"><span>TreeMap</span></span>\\n<span class=\\"line\\"><span></span></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ul>","autoDesc":true}');export{g as comp,k as data};
