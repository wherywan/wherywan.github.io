import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as p,c,a as s,b as n,d as o,f as a}from"./app-f83986bb.js";const t={},r=a(`<h1 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> java</h1><h2 id="运算符优先级" tabindex="-1"><a class="header-anchor" href="#运算符优先级" aria-hidden="true">#</a> 运算符优先级</h2><h2 id="知识点" tabindex="-1"><a class="header-anchor" href="#知识点" aria-hidden="true">#</a> 知识点</h2><p>文件写入不到build的resource目录下</p><h2 id="集合" tabindex="-1"><a class="header-anchor" href="#集合" aria-hidden="true">#</a> 集合</h2><p>最上层的Collections和Map接口</p><p>其中List和Set接口继承Collections</p><p>常用的是ArrayList和HashMap和HashSet</p><ul><li><p>List</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">ArrayList和LinkedList是其实现类，元素顺序是有序的，容量10</span></span>
<span class="line"><span style="color:#000000;">ArrayList底层实现是Object[]数组，LinkedList是双向链表。</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Set</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">HashSet是其实现类，元素是无序的</span></span>
<span class="line"><span style="color:#000000;">HashSet底层是基于hashMap结构</span></span>
<span class="line"><span style="color:#000000;">TreeSet是其实现类，元素是有序的</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Map</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">HashMap是其实现类，存放键值对元素，容量是16</span></span>
<span class="line"><span style="color:#000000;">底层是基于数组加链表和红黑树，链表长度大于8会转化为红黑树，如果数组元素小于64，会先进行扩容</span></span>
<span class="line"><span style="color:#000000;">TreeMap</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="集合遍历删除元素" tabindex="-1"><a class="header-anchor" href="#集合遍历删除元素" aria-hidden="true">#</a> 集合遍历删除元素</h3><ul><li>for:遍历 本质上是转换为迭代器操作</li><li>只能在迭代器中遍历做删除操作，且只能用迭代器的remove方法</li></ul><h2 id="exception" tabindex="-1"><a class="header-anchor" href="#exception" aria-hidden="true">#</a> Exception</h2><p>自上而下的类结构</p><ul><li><p>Throwable</p><ul><li><p>Error</p></li><li><p>Exception</p><ul><li><p>检查时异常，必须进行处理,直接继承Exception,需显式处理,在方法上声明throws</p></li><li><p>非受检异常，即RunException</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">数组越界，空指针，类型转换等异常</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li></ul></li></ul><h2 id="thread" tabindex="-1"><a class="header-anchor" href="#thread" aria-hidden="true">#</a> Thread</h2><h3 id="线程状态" tabindex="-1"><a class="header-anchor" href="#线程状态" aria-hidden="true">#</a> 线程状态</h3><ol><li>NEW：线程对象已经被创建，但是还没有调用start()方法启动。</li><li>RUNNABLE：线程正在执行或者等待CPU时间片，处于可运行状态。</li><li>BLOCKED：线程在等待锁的释放，无法继续执行，处于阻塞状态。</li><li>WAITING：线程正在等待另一个线程的通知或者等待IO操作完成。</li><li>TIMED_WAITING：线程正在等待另一个线程的通知或者等待IO操作完成，但是可以设置等待时间。</li><li>TERMINATED：线程已经执行完毕或者因为异常而终止，处于终止状态。</li></ol><h3 id="线程池" tabindex="-1"><a class="header-anchor" href="#线程池" aria-hidden="true">#</a> 线程池</h3><p>若线程池在执行任务过程中，抛出运行时异常，线程池会进行处理，标记线程已完成，同时创建新的线程替代它执行其他任务 注意线程池的工作线程是循环执行的，调用消息队列的take方法获取任务，当任务队列为空，线程就会等待状态，等待被唤醒，释放cpu资源和锁资源</p><h3 id="测试样例" tabindex="-1"><a class="header-anchor" href="#测试样例" aria-hidden="true">#</a> 测试样例</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#0000FF;">public</span><span style="color:#000000;"> </span><span style="color:#0000FF;">class</span><span style="color:#000000;"> </span><span style="color:#267F99;">TestService</span><span style="color:#000000;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0000FF;">public</span><span style="color:#000000;"> </span><span style="color:#0000FF;">static</span><span style="color:#000000;"> </span><span style="color:#267F99;">void</span><span style="color:#000000;"> </span><span style="color:#795E26;">main</span><span style="color:#000000;">(</span><span style="color:#267F99;">String</span><span style="color:#000000;">[] </span><span style="color:#001080;">args</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#267F99;">ExecutorService</span><span style="color:#000000;"> </span><span style="color:#001080;">executor1</span><span style="color:#000000;"> = </span><span style="color:#001080;">Executors</span><span style="color:#000000;">.</span><span style="color:#795E26;">newSingleThreadExecutor</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#267F99;">ExecutorService</span><span style="color:#000000;"> </span><span style="color:#001080;">executor2</span><span style="color:#000000;"> = </span><span style="color:#001080;">Executors</span><span style="color:#000000;">.</span><span style="color:#795E26;">newSingleThreadExecutor</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#AF00DB;">for</span><span style="color:#000000;"> (</span><span style="color:#267F99;">int</span><span style="color:#000000;"> </span><span style="color:#001080;">i</span><span style="color:#000000;"> = </span><span style="color:#098658;">1</span><span style="color:#000000;">; i &lt; </span><span style="color:#098658;">11</span><span style="color:#000000;">; i++) {</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#267F99;">AtomicInteger</span><span style="color:#000000;"> </span><span style="color:#001080;">finalI</span><span style="color:#000000;"> = </span><span style="color:#AF00DB;">new</span><span style="color:#000000;"> </span><span style="color:#795E26;">AtomicInteger</span><span style="color:#000000;">(i);</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#AF00DB;">if</span><span style="color:#000000;"> (</span><span style="color:#001080;">finalI</span><span style="color:#000000;">.</span><span style="color:#795E26;">get</span><span style="color:#000000;">() &gt; </span><span style="color:#098658;">5</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#001080;">executor2</span><span style="color:#000000;">.</span><span style="color:#795E26;">execute</span><span style="color:#000000;">(() </span><span style="color:#0000FF;">-&gt;</span><span style="color:#000000;">{</span></span>
<span class="line"><span style="color:#000000;">                    </span><span style="color:#AF00DB;">if</span><span style="color:#000000;"> (</span><span style="color:#098658;">7</span><span style="color:#000000;"> == </span><span style="color:#001080;">finalI</span><span style="color:#000000;">.</span><span style="color:#795E26;">get</span><span style="color:#000000;">()) {</span></span>
<span class="line"><span style="color:#000000;">                        </span><span style="color:#001080;">executor1</span><span style="color:#000000;">.</span><span style="color:#795E26;">shutdown</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#000000;">                        </span><span style="color:#AF00DB;">try</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">                            </span><span style="color:#001080;">Thread</span><span style="color:#000000;">.</span><span style="color:#795E26;">sleep</span><span style="color:#000000;">(</span><span style="color:#098658;">5000</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#000000;">                        } </span><span style="color:#AF00DB;">catch</span><span style="color:#000000;"> (</span><span style="color:#267F99;">InterruptedException</span><span style="color:#000000;"> </span><span style="color:#001080;">e</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#000000;">                            </span><span style="color:#AF00DB;">throw</span><span style="color:#000000;"> </span><span style="color:#AF00DB;">new</span><span style="color:#000000;"> </span><span style="color:#795E26;">RuntimeException</span><span style="color:#000000;">(e);</span></span>
<span class="line"><span style="color:#000000;">                        }</span></span>
<span class="line"><span style="color:#000000;">                    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">                    </span><span style="color:#001080;">System</span><span style="color:#000000;">.</span><span style="color:#001080;">out</span><span style="color:#000000;">.</span><span style="color:#795E26;">println</span><span style="color:#000000;">(</span><span style="color:#A31515;">&quot;++&quot;</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#000000;">                    </span><span style="color:#001080;">System</span><span style="color:#000000;">.</span><span style="color:#001080;">out</span><span style="color:#000000;">.</span><span style="color:#795E26;">println</span><span style="color:#000000;">(</span><span style="color:#001080;">executor1</span><span style="color:#000000;">.</span><span style="color:#795E26;">isShutdown</span><span style="color:#000000;">());</span></span>
<span class="line"><span style="color:#000000;">                    </span><span style="color:#001080;">System</span><span style="color:#000000;">.</span><span style="color:#001080;">out</span><span style="color:#000000;">.</span><span style="color:#795E26;">println</span><span style="color:#000000;">(</span><span style="color:#A31515;">&quot;任务&quot;</span><span style="color:#000000;"> + </span><span style="color:#001080;">finalI</span><span style="color:#000000;">.</span><span style="color:#795E26;">get</span><span style="color:#000000;">());</span></span>
<span class="line"><span style="color:#000000;">                    </span><span style="color:#001080;">System</span><span style="color:#000000;">.</span><span style="color:#001080;">out</span><span style="color:#000000;">.</span><span style="color:#795E26;">println</span><span style="color:#000000;">(</span><span style="color:#A31515;">&quot;--&quot;</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#000000;">                } );</span></span>
<span class="line"><span style="color:#000000;">            } </span><span style="color:#AF00DB;">else</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#001080;">executor1</span><span style="color:#000000;">.</span><span style="color:#795E26;">execute</span><span style="color:#000000;">(() </span><span style="color:#0000FF;">-&gt;</span><span style="color:#000000;">{</span></span>
<span class="line"><span style="color:#000000;">                    </span><span style="color:#AF00DB;">if</span><span style="color:#000000;"> (</span><span style="color:#098658;">3</span><span style="color:#000000;"> == </span><span style="color:#001080;">finalI</span><span style="color:#000000;">.</span><span style="color:#795E26;">get</span><span style="color:#000000;">()) {</span></span>
<span class="line"><span style="color:#000000;">                        </span><span style="color:#AF00DB;">throw</span><span style="color:#000000;"> </span><span style="color:#AF00DB;">new</span><span style="color:#000000;"> </span><span style="color:#795E26;">RuntimeException</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#000000;">                        </span><span style="color:#008000;">//try {</span></span>
<span class="line"><span style="color:#000000;">                        </span><span style="color:#008000;">//    Thread.sleep(5000);</span></span>
<span class="line"><span style="color:#000000;">                        </span><span style="color:#008000;">//} catch (InterruptedException e) {</span></span>
<span class="line"><span style="color:#000000;">                        </span><span style="color:#008000;">//    throw new RuntimeException(e);</span></span>
<span class="line"><span style="color:#000000;">                        </span><span style="color:#008000;">//}</span></span>
<span class="line"><span style="color:#000000;">                    }</span></span>
<span class="line"><span style="color:#000000;">                    </span><span style="color:#001080;">System</span><span style="color:#000000;">.</span><span style="color:#001080;">out</span><span style="color:#000000;">.</span><span style="color:#795E26;">println</span><span style="color:#000000;">(</span><span style="color:#001080;">Thread</span><span style="color:#000000;">.</span><span style="color:#795E26;">currentThread</span><span style="color:#000000;">().</span><span style="color:#795E26;">getName</span><span style="color:#000000;">());</span></span>
<span class="line"><span style="color:#000000;">                    </span><span style="color:#001080;">System</span><span style="color:#000000;">.</span><span style="color:#001080;">out</span><span style="color:#000000;">.</span><span style="color:#795E26;">println</span><span style="color:#000000;">(</span><span style="color:#A31515;">&quot;任务&quot;</span><span style="color:#000000;"> + </span><span style="color:#001080;">finalI</span><span style="color:#000000;">.</span><span style="color:#795E26;">get</span><span style="color:#000000;">());</span></span>
<span class="line"><span style="color:#000000;">                } );</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="守护线程和用户线程" tabindex="-1"><a class="header-anchor" href="#守护线程和用户线程" aria-hidden="true">#</a> 守护线程和用户线程</h3>`,22),d={href:"https://www.cnblogs.com/pengai/articles/15827826.html",target:"_blank",rel:"noopener noreferrer"},u=a(`<p>但是有一个例外情况，如果这些子线程都是守护线程，那么子线程会随着主线程结束而结束。</p><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><ul><li><p>Runable接口，继承Thread</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">重写run方法，构建线程任务</span></span>
<span class="line"><span style="color:#000000;">start方法启用线程</span></span>
<span class="line"><span style="color:#000000;">jion方法将子线程加入当前主线程，控制线程执行顺序</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>线程池的方式，ThreadPoolExecutor</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">核心线程数，最大线程数，阻塞队列，线程工厂，超时时间（即线程最大的空闲时间，若超出时间，则销毁线程），拒绝策略</span></span>
<span class="line"><span style="color:#000000;">核心时getTask，线程获取等待队列中的任务</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">ExecutorService executorService = new ThreadPoolExecutor(10,15,60, TimeUnit.SECONDS,new LinkedBlockingDeque&lt;&gt;(20),</span></span>
<span class="line"><span style="color:#000000;">            Executors.defaultThreadFactory(),new ThreadPoolExecutor.CallerRunsPolicy());</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">        List&lt;List&lt;Inventory&gt;&gt; splitStocks = CollectionUtil.split(list.getData().getRows(),25);</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">        CountDownLatch count = new CountDownLatch(splitStocks.size());</span></span>
<span class="line"><span style="color:#000000;">        Long startTime = new Date().getTime();</span></span>
<span class="line"><span style="color:#000000;">        for(List list1: splitStocks)</span></span>
<span class="line"><span style="color:#000000;">        {</span></span>
<span class="line"><span style="color:#000000;">            executorService.execute(new ThreadTask(count,customerItemStockVOS,list1,itemStockBiz,receiptRecordBiz,receiptBiz));</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">        try</span></span>
<span class="line"><span style="color:#000000;">        {</span></span>
<span class="line"><span style="color:#000000;">            count.await(120,TimeUnit.SECONDS);</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">        catch (InterruptedException e)</span></span>
<span class="line"><span style="color:#000000;">        {</span></span>
<span class="line"><span style="color:#000000;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">        Long endTime = new Date().getTime();</span></span>
<span class="line"><span style="color:#000000;">        log.info(&quot;耗时&quot;+(endTime-startTime));</span></span>
<span class="line"><span style="color:#000000;">	static class ThreadTask implements Runnable</span></span>
<span class="line"><span style="color:#000000;">    {</span></span>
<span class="line"><span style="color:#000000;">        private CountDownLatch c;</span></span>
<span class="line"><span style="color:#000000;">        private List&lt;CustomerItemStockVO&gt; customerItemStockVOS;</span></span>
<span class="line"><span style="color:#000000;">        private List&lt;Inventory&gt; list;</span></span>
<span class="line"><span style="color:#000000;">        private ItemStockBiz itemStockBiz;</span></span>
<span class="line"><span style="color:#000000;">        private ReceiptRecordBiz receiptRecordBiz;</span></span>
<span class="line"><span style="color:#000000;">        private ReceiptBiz receiptBiz;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">        public ThreadTask(CountDownLatch c,List&lt;CustomerItemStockVO&gt; customerItemStockVOS,List&lt;Inventory&gt; list,ItemStockBiz itemStockBiz,</span></span>
<span class="line"><span style="color:#000000;">            ReceiptRecordBiz receiptRecordBiz, ReceiptBiz receiptBiz)</span></span>
<span class="line"><span style="color:#000000;">        {</span></span>
<span class="line"><span style="color:#000000;">            this.customerItemStockVOS = customerItemStockVOS;</span></span>
<span class="line"><span style="color:#000000;">            this.c = c;</span></span>
<span class="line"><span style="color:#000000;">            this.list = list;</span></span>
<span class="line"><span style="color:#000000;">            this.receiptBiz = receiptBiz;</span></span>
<span class="line"><span style="color:#000000;">            this.receiptRecordBiz = receiptRecordBiz;</span></span>
<span class="line"><span style="color:#000000;">            this.itemStockBiz = itemStockBiz;</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">        @Override</span></span>
<span class="line"><span style="color:#000000;">        public void run(){</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">            try</span></span>
<span class="line"><span style="color:#000000;">            {</span></span>
<span class="line"><span style="color:#000000;">                list.forEach(item -&gt; {</span></span>
<span class="line"><span style="color:#000000;">                    CustomerItemStockVO customerItemStockVO = new CustomerItemStockVO();</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">                    Map&lt;String,Object&gt; requestParams = new HashMap&lt;&gt;();</span></span>
<span class="line"><span style="color:#000000;">                    requestParams.put(&quot;tenantId&quot;,item.getTenantId());</span></span>
<span class="line"><span style="color:#000000;">                    requestParams.put(&quot;warehouseId&quot;,item.getWarehouseId());</span></span>
<span class="line"><span style="color:#000000;">                    requestParams.put(&quot;customerId&quot;,item.getCustomerId());</span></span>
<span class="line"><span style="color:#000000;">                    requestParams.put(&quot;itemId&quot;,item.getItemId());</span></span>
<span class="line"><span style="color:#000000;">                    requestParams.put(&quot;normalFlag&quot;,item.getNormalFlag());</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">                    List&lt;ItemStock&gt; itemStockList = itemStockBiz.selectForItemCache(requestParams);</span></span>
<span class="line"><span style="color:#000000;">                    List&lt;ItemStockVo&gt; itemStockVoList = itemStockBiz.assembleDate1(itemStockList);</span></span>
<span class="line"><span style="color:#000000;">                    BigDecimal quantity = BigDecimal.ZERO;</span></span>
<span class="line"><span style="color:#000000;">                    BigDecimal usableQty = BigDecimal.ZERO;</span></span>
<span class="line"><span style="color:#000000;">                    BigDecimal lockQty = BigDecimal.ZERO;</span></span>
<span class="line"><span style="color:#000000;">                    BigDecimal frozenQuantity = BigDecimal.ZERO;</span></span>
<span class="line"><span style="color:#000000;">                    BigDecimal diffQty = BigDecimal.ZERO;</span></span>
<span class="line"><span style="color:#000000;">                    BigDecimal outGoingCache = BigDecimal.ZERO;</span></span>
<span class="line"><span style="color:#000000;">                    BigDecimal storageCache = BigDecimal.ZERO;</span></span>
<span class="line"><span style="color:#000000;">                    BigDecimal returnQty = BigDecimal.ZERO;</span></span>
<span class="line"><span style="color:#000000;">                    BigDecimal replLockQty = BigDecimal.ZERO;</span></span>
<span class="line"><span style="color:#000000;">                    BigDecimal pieceNum = BigDecimal.ZERO;</span></span>
<span class="line"><span style="color:#000000;">                    BigDecimal oddQuantity = BigDecimal.ZERO;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">                    for (ItemStockVo itemStockVo : itemStockVoList)</span></span>
<span class="line"><span style="color:#000000;">                    {</span></span>
<span class="line"><span style="color:#000000;">                        BeanUtil.copyProperties(itemStockVo, customerItemStockVO);</span></span>
<span class="line"><span style="color:#000000;">                        // 可用库存、锁定库存（越库缓存+补货缓存+拣货库位+存储库位）</span></span>
<span class="line"><span style="color:#000000;">                        if (itemStockVo.getLocationType()</span></span>
<span class="line"><span style="color:#000000;">                            .equals(WmsConstant.Location.LocationType.REPOSITORY_LOCATION.getCode())</span></span>
<span class="line"><span style="color:#000000;">                            ||</span></span>
<span class="line"><span style="color:#000000;">                            itemStockVo.getLocationType().equals(WmsConstant.Location.LocationType.PICKING_LOCATION.getCode())</span></span>
<span class="line"><span style="color:#000000;">                            || itemStockVo.getLocationType()</span></span>
<span class="line"><span style="color:#000000;">                            .equals(WmsConstant.Location.LocationType.REPLENISHMENT_CACHE.getCode())</span></span>
<span class="line"><span style="color:#000000;">                            || itemStockVo.getLocationType()</span></span>
<span class="line"><span style="color:#000000;">                            .equals(WmsConstant.Location.LocationType.CROSS_DATABASE_CACHE.getCode()))</span></span>
<span class="line"><span style="color:#000000;">                        {</span></span>
<span class="line"><span style="color:#000000;">                            usableQty = itemStockVo.getUsableQuantity().add(usableQty);</span></span>
<span class="line"><span style="color:#000000;">                            lockQty = itemStockVo.getLockQuantity().add(lockQty);</span></span>
<span class="line"><span style="color:#000000;">                        }</span></span>
<span class="line"><span style="color:#000000;">                        // 冻结数量（拣货库位+存储库位）</span></span>
<span class="line"><span style="color:#000000;">                        if (itemStockVo.getLocationType().equals(WmsConstant.Location.LocationType.PICKING_LOCATION.getCode())</span></span>
<span class="line"><span style="color:#000000;">                            || itemStockVo.getLocationType()</span></span>
<span class="line"><span style="color:#000000;">                            .equals(WmsConstant.Location.LocationType.REPOSITORY_LOCATION.getCode()))</span></span>
<span class="line"><span style="color:#000000;">                        {</span></span>
<span class="line"><span style="color:#000000;">                            frozenQuantity = itemStockVo.getFrozenQuantity().add(frozenQuantity);</span></span>
<span class="line"><span style="color:#000000;">                        }</span></span>
<span class="line"><span style="color:#000000;">                        // 差异数量（差异库位）</span></span>
<span class="line"><span style="color:#000000;">                        if (itemStockVo.getLocationType().equals(WmsConstant.Location.LocationType.ABNORMAL_LOCATION.getCode()))</span></span>
<span class="line"><span style="color:#000000;">                        {</span></span>
<span class="line"><span style="color:#000000;">                            diffQty = itemStockVo.getUsableQuantity().add(diffQty);</span></span>
<span class="line"><span style="color:#000000;">                        }</span></span>
<span class="line"><span style="color:#000000;">                        // 出库缓存（出库缓存的可用库存总量）</span></span>
<span class="line"><span style="color:#000000;">                        if (itemStockVo.getLocationType().equals(WmsConstant.Location.LocationType.OUTGOING_CACHE.getCode()))</span></span>
<span class="line"><span style="color:#000000;">                        {</span></span>
<span class="line"><span style="color:#000000;">                            outGoingCache = itemStockVo.getUsableQuantity().add(outGoingCache);</span></span>
<span class="line"><span style="color:#000000;">                        }</span></span>
<span class="line"><span style="color:#000000;">                        //  入库缓存（入库缓存的可用库存总量）</span></span>
<span class="line"><span style="color:#000000;">                        if (itemStockVo.getLocationType().equals(WmsConstant.Location.LocationType.STORAGE_CACHE.getCode()))</span></span>
<span class="line"><span style="color:#000000;">                        {</span></span>
<span class="line"><span style="color:#000000;">                            storageCache = itemStockVo.getUsableQuantity().add(storageCache);</span></span>
<span class="line"><span style="color:#000000;">                        }</span></span>
<span class="line"><span style="color:#000000;">                        //  返库数量（发货异常的库存总量）</span></span>
<span class="line"><span style="color:#000000;">                        if (itemStockVo.getLocationType().equals(WmsConstant.Location.LocationType.DELIVERY_ABNORMAL.getCode()))</span></span>
<span class="line"><span style="color:#000000;">                        {</span></span>
<span class="line"><span style="color:#000000;">                            returnQty = itemStockVo.getQuantity().add(returnQty);</span></span>
<span class="line"><span style="color:#000000;">                        }</span></span>
<span class="line"><span style="color:#000000;">                        //  补货锁定库存、整件数量、 散件数量 （直接累加）</span></span>
<span class="line"><span style="color:#000000;">                        replLockQty = itemStockVo.getReplLockQuantity().add(replLockQty);</span></span>
<span class="line"><span style="color:#000000;">                        pieceNum = itemStockVo.getPieceNum().add(pieceNum);</span></span>
<span class="line"><span style="color:#000000;">                        oddQuantity = itemStockVo.getOddQuantity().add(oddQuantity);</span></span>
<span class="line"><span style="color:#000000;">                    }</span></span>
<span class="line"><span style="color:#000000;">                    // 总库存数 = 可用库存+锁定库存+差异数量+冻结数量+入库缓存+出库缓存+返库数量+补货锁定数量</span></span>
<span class="line"><span style="color:#000000;">                    quantity = usableQty.add(lockQty).add(diffQty) .add(frozenQuantity) .add(storageCache).add(outGoingCache).add(returnQty).add(replLockQty);</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">                    if (itemStockVoList.isEmpty())</span></span>
<span class="line"><span style="color:#000000;">                    {</span></span>
<span class="line"><span style="color:#000000;">                        BeanUtil.copyProperties(item, customerItemStockVO);</span></span>
<span class="line"><span style="color:#000000;">                    }</span></span>
<span class="line"><span style="color:#000000;">                    customerItemStockVO.setGoodsCode(item.getGoodsCode());</span></span>
<span class="line"><span style="color:#000000;">                    customerItemStockVO.setQuantity(quantity);</span></span>
<span class="line"><span style="color:#000000;">                    customerItemStockVO.setUsableQty(usableQty);</span></span>
<span class="line"><span style="color:#000000;">                    customerItemStockVO.setLockQty(lockQty);</span></span>
<span class="line"><span style="color:#000000;">                    customerItemStockVO.setFrozenQuantity(frozenQuantity);</span></span>
<span class="line"><span style="color:#000000;">                    customerItemStockVO.setDiffQty(diffQty);</span></span>
<span class="line"><span style="color:#000000;">                    customerItemStockVO.setOutGoingCache(outGoingCache);</span></span>
<span class="line"><span style="color:#000000;">                    customerItemStockVO.setStorageCache(storageCache);</span></span>
<span class="line"><span style="color:#000000;">                    customerItemStockVO.setReturnQty(returnQty);</span></span>
<span class="line"><span style="color:#000000;">                    customerItemStockVO.setReplLockQty(replLockQty);</span></span>
<span class="line"><span style="color:#000000;">                    customerItemStockVO.setPieceNum(pieceNum);</span></span>
<span class="line"><span style="color:#000000;">                    customerItemStockVO.setOddQuantity(oddQuantity);</span></span>
<span class="line"><span style="color:#000000;">                    // 下单锁定（已下单未发运数量）orderQty;</span></span>
<span class="line"><span style="color:#000000;">                    customerItemStockVO.setOrderQty(item.getOrderQty());</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">                    ReceiptRecord receiptRecord = new ReceiptRecord();</span></span>
<span class="line"><span style="color:#000000;">                    receiptRecord.setTenantId(item.getTenantId());</span></span>
<span class="line"><span style="color:#000000;">                    receiptRecord.setWarehouseId(item.getWarehouseId());</span></span>
<span class="line"><span style="color:#000000;">                    receiptRecord.setCustomerId(item.getCustomerId());</span></span>
<span class="line"><span style="color:#000000;">                    receiptRecord.setItemId(item.getItemId());</span></span>
<span class="line"><span style="color:#000000;">                    receiptRecord.setNormalFlag(item.getNormalFlag());</span></span>
<span class="line"><span style="color:#000000;">                    receiptRecord.setQcStatus(WmsConstant.Receipt.QcStatus.WAIT_QC.getCode());</span></span>
<span class="line"><span style="color:#000000;">                    // 收货在途（新纪录+收货中的待收货数）</span></span>
<span class="line"><span style="color:#000000;">                    Receipt receipt =new Receipt();</span></span>
<span class="line"><span style="color:#000000;">                    receipt.setTenantId(item.getTenantId());</span></span>
<span class="line"><span style="color:#000000;">                    receipt.setWarehouseId(item.getWarehouseId());</span></span>
<span class="line"><span style="color:#000000;">                    receipt.setCustomerId(item.getCustomerId());</span></span>
<span class="line"><span style="color:#000000;">                    receipt.setReceiptStatus(WmsConstant.Receipt.ReceiptStatus.NEW.getCode());</span></span>
<span class="line"><span style="color:#000000;">                    List&lt;Receipt&gt; receipts=receiptBiz.selectList(receipt);</span></span>
<span class="line"><span style="color:#000000;">                    receipt.setReceiptStatus(WmsConstant.Receipt.ReceiptStatus.RECEIVING.getCode());</span></span>
<span class="line"><span style="color:#000000;">                    receipts.addAll(receiptBiz.selectList(receipt));</span></span>
<span class="line"><span style="color:#000000;">                    if(receipts.size()&gt;0){</span></span>
<span class="line"><span style="color:#000000;">                        BigDecimal expectQty = BigDecimal.valueOf(receipts.stream().mapToDouble(i -&gt; i.getExpectedQuantity().doubleValue()).sum());</span></span>
<span class="line"><span style="color:#000000;">                        BigDecimal receivedQty = BigDecimal.valueOf(receipts.stream().mapToDouble(i -&gt; i.getReceivedQuantity().doubleValue()).sum());</span></span>
<span class="line"><span style="color:#000000;">                        customerItemStockVO.setIntransitQuantity(expectQty.subtract(receivedQty));</span></span>
<span class="line"><span style="color:#000000;">                    }else{</span></span>
<span class="line"><span style="color:#000000;">                        customerItemStockVO.setIntransitQuantity(BigDecimal.ZERO);</span></span>
<span class="line"><span style="color:#000000;">                    }</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">                    List&lt;ReceiptRecord&gt; receiptRecords = receiptRecordBiz.selectList(receiptRecord);</span></span>
<span class="line"><span style="color:#000000;">                    // 待质检量（待质检的收货记录的实际收货数量）</span></span>
<span class="line"><span style="color:#000000;">                    if (receiptRecords.size() &gt; 0)</span></span>
<span class="line"><span style="color:#000000;">                    {</span></span>
<span class="line"><span style="color:#000000;">                        customerItemStockVO.setQrQty(BigDecimal.valueOf(receiptRecords.stream().mapToInt(record -&gt; record.getReceivedQuantity().intValue()).sum()));</span></span>
<span class="line"><span style="color:#000000;">                    }</span></span>
<span class="line"><span style="color:#000000;">                    else</span></span>
<span class="line"><span style="color:#000000;">                    {</span></span>
<span class="line"><span style="color:#000000;">                        customerItemStockVO.setQrQty(BigDecimal.ZERO);</span></span>
<span class="line"><span style="color:#000000;">                    }</span></span>
<span class="line"><span style="color:#000000;">                    // 汇总的数据塞值</span></span>
<span class="line"><span style="color:#000000;">                    customerItemStockVOS.add(customerItemStockVO);</span></span>
<span class="line"><span style="color:#000000;">                });</span></span>
<span class="line"><span style="color:#000000;">                c.countDown();</span></span>
<span class="line"><span style="color:#000000;">//                System.out.println(Thread.currentThread().getName()+&quot;  task&quot; + i);</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">            catch (Exception e)</span></span>
<span class="line"><span style="color:#000000;">            {</span></span>
<span class="line"><span style="color:#000000;">                e.printStackTrace();</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="线程间的通信" tabindex="-1"><a class="header-anchor" href="#线程间的通信" aria-hidden="true">#</a> 线程间的通信</h3><ul><li>wait、notify、notifyAll</li><li>condition、aWait、signal、signalAll</li></ul><h3 id="线程执行顺序" tabindex="-1"><a class="header-anchor" href="#线程执行顺序" aria-hidden="true">#</a> 线程执行顺序</h3><ul><li>countDownLatch</li><li>join</li><li>Future类获取异步线程结果</li></ul><h2 id="queue" tabindex="-1"><a class="header-anchor" href="#queue" aria-hidden="true">#</a> Queue</h2><blockquote><p>offer和add区别</p></blockquote><p>都是向队列添加元素，offer方法若队列已满，则返回false，不会报错</p><blockquote><p>remove和poll区别</p></blockquote><p>向队列移除元素，poll方法若队列已空，则返回false，不会报错</p>`,12);function v(y,m){const e=i("ExternalLinkIcon");return p(),c("div",null,[r,s("p",null,[s("a",d,[n("参考"),o(e)]),n(" 线程不像进程，一个进程中的线程之间是没有父子之分的，都是平级关系。即线程都是一样的, 退出了一个不会影响另外一个。")]),u])}const g=l(t,[["render",v],["__file","java.html.vue"]]);export{g as default};
