import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as p,c,a as s,b as n,d as r,e as a}from"./app-hoN0JGLf.js";const t="/assets/nettyloop-BW3SIHM_.png",d="/assets/nettytransport-Bjl3kp6L.png",o={},v=a('<h1 id="network" tabindex="-1"><a class="header-anchor" href="#network"><span>network</span></a></h1><h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念"><span>概念</span></a></h2><h3 id="网关和路由" tabindex="-1"><a class="header-anchor" href="#网关和路由"><span>网关和路由</span></a></h3><p>网关主要用于连接异构网络，路由器、交换机、pc、手机都可以作为网关</p><p>路由器主要用于不同网络间的数据转发，处于网络层</p><h3 id="集线器、交换机" tabindex="-1"><a class="header-anchor" href="#集线器、交换机"><span>集线器、交换机</span></a></h3><p>交换机的不同端口间可以隔离冲突域，保证两个主机间能正常通信，处于数据链路层</p><p>集线器主要用于将多个pc连接通信，存在冲突域，影响通信，处于物理层</p><h3 id="vpn、手机热点" tabindex="-1"><a class="header-anchor" href="#vpn、手机热点"><span>vpn、手机热点</span></a></h3><h3 id="windows共享网络" tabindex="-1"><a class="header-anchor" href="#windows共享网络"><span>windows共享网络</span></a></h3><p>pc有无线和有线两个网卡，通过共享pc无线网络，即将pc的有线网卡作为其他pc的网关，让连接pc的局域网设备能够访问外网</p><h2 id="网络通信判断连接、读取、写超时猜想" tabindex="-1"><a class="header-anchor" href="#网络通信判断连接、读取、写超时猜想"><span>网络通信判断连接、读取、写超时猜想</span></a></h2><p>1、业务线程执行异步操作，获取异步操作对象，缓存到共享内存中，并阻塞</p><p>2、判断超时线程，若对象存在，对共享内存中进行超时判断，设置超时结果</p><p>3、读写线程获取到结果，设置到共享内存的异步对象中，并删除异步操作对象</p><h2 id="长轮询" tabindex="-1"><a class="header-anchor" href="#长轮询"><span>长轮询</span></a></h2><ul><li>不断发送请求到服务器</li><li>若请求得到数据，则立即返回，若请求不到数据，则在超时时间内挂起等待，直到有数据或超时返回</li></ul><h2 id="网络通信" tabindex="-1"><a class="header-anchor" href="#网络通信"><span>网络通信</span></a></h2><h3 id="io流" tabindex="-1"><a class="header-anchor" href="#io流"><span>IO流</span></a></h3><h3 id="channel通道" tabindex="-1"><a class="header-anchor" href="#channel通道"><span>channel通道</span></a></h3><h3 id="buffer缓存区" tabindex="-1"><a class="header-anchor" href="#buffer缓存区"><span>buffer缓存区</span></a></h3><h3 id="io通信模型" tabindex="-1"><a class="header-anchor" href="#io通信模型"><span>IO通信模型</span></a></h3><h3 id="reactor模型" tabindex="-1"><a class="header-anchor" href="#reactor模型"><span>Reactor模型</span></a></h3><blockquote><p>分类</p></blockquote>',24),u={href:"https://so.csdn.net/so/search?q=%E5%A4%9A%E7%BA%BF%E7%A8%8B&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},b=a('<blockquote><p>运行机制</p></blockquote><p>连接注册、事件轮询（select）、事件分发(io事件)、任务处理（非io事件）</p><p><img src="'+t+'" alt=""></p><h3 id="框架" tabindex="-1"><a class="header-anchor" href="#框架"><span>框架</span></a></h3><h4 id="netty" tabindex="-1"><a class="header-anchor" href="#netty"><span>netty</span></a></h4><h5 id="执行流程" tabindex="-1"><a class="header-anchor" href="#执行流程"><span>执行流程</span></a></h5><p><img src="'+d+`" alt="执行流程"></p><h5 id="channel" tabindex="-1"><a class="header-anchor" href="#channel"><span>channel</span></a></h5><p>AbstractChannel、AbstractNioChannel</p><p>AbstractNioByteChannel、NIOSocketChannel</p><p>AbstractNioMessageChannel、NioServerSocketChannel</p><ol><li>AbstractChannel的内部抽象AbstractUnsafe的register,register0,</li><li>AbstractNioChannel的doregister方法</li><li>完成channel的注册</li></ol><h5 id="nioeventloop" tabindex="-1"><a class="header-anchor" href="#nioeventloop"><span>NioEventLoop</span></a></h5><blockquote><p>继承链</p></blockquote><p>NioEventLoop、SingleThreadEventLoop 、SingleThreadEventExecutor、AbstractScheduledEventExecutor、AbstractEventExecutor</p><blockquote><p>NioEventLoop</p></blockquote><ul><li>NioEventLoop本身是Executor,内部有executor成员（子executor，只是一个线程工厂，用于创建线程与eventloop绑定，进行事件循环）,此executor并非线程池，</li><li>EventLoop 本身只是一个线程驱动，在其生命周期内只会绑定一个线程，让该线程处理一个 Channel 的所有 IO 事件。</li><li>channel与eventloop绑定，eventloop与thread绑定</li><li>io.netty.channel.AbstractChannel.AbstractUnsafe#register</li><li>在注册channel时，根据选择器选择合适的eventloop，将channel注册到eventloop的选择器中，并将eventloop绑定一个线程并启动</li><li>register和execute是两个核心方法，用于注册channel、添加任务</li></ul><blockquote><p>SingleThreadEventLoop</p></blockquote><ul><li>tailTasks</li></ul><blockquote><p>SingleThreadEventExecutor</p></blockquote><ul><li>addTaskWakesUp 默认false</li><li>maxPendingTasks DEFAULT_MAX_PENDING_EXECUTOR_TASKS;</li><li>taskQueue</li><li>thread 已绑定的线程</li><li>rejectedExecutionHandler</li><li>executor</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>//装饰给定的Executor并确保currentExecutor()在执行过程中从可运行对象内部调用时将返回eventExecutor</span></span>
<span class="line"><span>ThreadExecutorMap.apply(executor, this);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public static Executor apply(final Executor executor, final EventExecutor eventExecutor) {</span></span>
<span class="line"><span>        ObjectUtil.checkNotNull(executor, &quot;executor&quot;);</span></span>
<span class="line"><span>        ObjectUtil.checkNotNull(eventExecutor, &quot;eventExecutor&quot;);</span></span>
<span class="line"><span>        return new Executor() {</span></span>
<span class="line"><span>            @Override</span></span>
<span class="line"><span>            public void execute(final Runnable command) {</span></span>
<span class="line"><span>                executor.execute(apply(command, eventExecutor));</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>public static Runnable apply(final Runnable command, final EventExecutor eventExecutor) {</span></span>
<span class="line"><span>    ObjectUtil.checkNotNull(command, &quot;command&quot;);</span></span>
<span class="line"><span>    ObjectUtil.checkNotNull(eventExecutor, &quot;eventExecutor&quot;);</span></span>
<span class="line"><span>    return new Runnable() {</span></span>
<span class="line"><span>        @Override</span></span>
<span class="line"><span>        public void run() {</span></span>
<span class="line"><span>            setCurrentEventExecutor(eventExecutor);</span></span>
<span class="line"><span>            try {</span></span>
<span class="line"><span>                command.run();</span></span>
<span class="line"><span>            } finally {</span></span>
<span class="line"><span>                setCurrentEventExecutor(null);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>//Set the current EventExecutor that is used by the Thread.</span></span>
<span class="line"><span>//mappings是线程局部变量</span></span>
<span class="line"><span> private static void setCurrentEventExecutor(EventExecutor executor) {</span></span>
<span class="line"><span>    mappings.set(executor);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>execute方法</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>private void execute(Runnable task, boolean immediate) {</span></span>
<span class="line"><span>        boolean inEventLoop = inEventLoop();</span></span>
<span class="line"><span>        //添加任务到任务对列</span></span>
<span class="line"><span>        addTask(task);</span></span>
<span class="line"><span>        //判断eventLoop是否与线程绑定</span></span>
<span class="line"><span>        if (!inEventLoop) {</span></span>
<span class="line"><span>            //创建线程任务，启动线程任务，并绑定线程到eventLoop</span></span>
<span class="line"><span>            //执行EventLoop中的run方法</span></span>
<span class="line"><span>            startThread();</span></span>
<span class="line"><span>            if (isShutdown()) {</span></span>
<span class="line"><span>                boolean reject = false;</span></span>
<span class="line"><span>                try {</span></span>
<span class="line"><span>                    if (removeTask(task)) {</span></span>
<span class="line"><span>                        reject = true;</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                } catch (UnsupportedOperationException e) {</span></span>
<span class="line"><span>                    // The task queue does not support removal so the best thing we can do is to just move on and</span></span>
<span class="line"><span>                    // hope we will be able to pick-up the task before its completely terminated.</span></span>
<span class="line"><span>                    // In worst case we will log on termination.</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                if (reject) {</span></span>
<span class="line"><span>                    reject();</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (!addTaskWakesUp &amp;&amp; immediate) {</span></span>
<span class="line"><span>            wakeup(inEventLoop);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>doStartThread方法，创建线程任务执行，绑定线程到eventLoop</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>private void doStartThread() {</span></span>
<span class="line"><span>        assert thread == null;</span></span>
<span class="line"><span>        executor.execute(new Runnable() {</span></span>
<span class="line"><span>            @Override</span></span>
<span class="line"><span>            public void run() {</span></span>
<span class="line"><span>                thread = Thread.currentThread();</span></span>
<span class="line"><span>                if (interrupted) {</span></span>
<span class="line"><span>                    thread.interrupt();</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                boolean success = false;</span></span>
<span class="line"><span>                updateLastExecutionTime();</span></span>
<span class="line"><span>                try {</span></span>
<span class="line"><span>                    SingleThreadEventExecutor.this.run();</span></span>
<span class="line"><span>                    success = true;</span></span>
<span class="line"><span>                } catch (Throwable t) {</span></span>
<span class="line"><span>                    logger.warn(&quot;Unexpected exception from an event executor: &quot;, t);</span></span>
<span class="line"><span>                } finally {</span></span>
<span class="line"><span>                    for (;;) {</span></span>
<span class="line"><span>                        int oldState = state;</span></span>
<span class="line"><span>                        if (oldState &gt;= ST_SHUTTING_DOWN || STATE_UPDATER.compareAndSet(</span></span>
<span class="line"><span>                                SingleThreadEventExecutor.this, oldState, ST_SHUTTING_DOWN)) {</span></span>
<span class="line"><span>                            break;</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    // Check if confirmShutdown() was called at the end of the loop.</span></span>
<span class="line"><span>                    if (success &amp;&amp; gracefulShutdownStartTime == 0) {</span></span>
<span class="line"><span>                        if (logger.isErrorEnabled()) {</span></span>
<span class="line"><span>                            logger.error(&quot;Buggy &quot; + EventExecutor.class.getSimpleName() + &quot; implementation; &quot; +</span></span>
<span class="line"><span>                                    SingleThreadEventExecutor.class.getSimpleName() + &quot;.confirmShutdown() must &quot; +</span></span>
<span class="line"><span>                                    &quot;be called before run() implementation terminates.&quot;);</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    try {</span></span>
<span class="line"><span>                        // Run all remaining tasks and shutdown hooks. At this point the event loop</span></span>
<span class="line"><span>                        // is in ST_SHUTTING_DOWN state still accepting tasks which is needed for</span></span>
<span class="line"><span>                        // graceful shutdown with quietPeriod.</span></span>
<span class="line"><span>                        for (;;) {</span></span>
<span class="line"><span>                            if (confirmShutdown()) {</span></span>
<span class="line"><span>                                break;</span></span>
<span class="line"><span>                            }</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                        // Now we want to make sure no more tasks can be added from this point. This is</span></span>
<span class="line"><span>                        // achieved by switching the state. Any new tasks beyond this point will be rejected.</span></span>
<span class="line"><span>                        for (;;) {</span></span>
<span class="line"><span>                            int oldState = state;</span></span>
<span class="line"><span>                            if (oldState &gt;= ST_SHUTDOWN || STATE_UPDATER.compareAndSet(</span></span>
<span class="line"><span>                                    SingleThreadEventExecutor.this, oldState, ST_SHUTDOWN)) {</span></span>
<span class="line"><span>                                break;</span></span>
<span class="line"><span>                            }</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                        // We have the final set of tasks in the queue now, no more can be added, run all remaining.</span></span>
<span class="line"><span>                        // No need to loop here, this is the final pass.</span></span>
<span class="line"><span>                        confirmShutdown();</span></span>
<span class="line"><span>                    } finally {</span></span>
<span class="line"><span>                        try {</span></span>
<span class="line"><span>                            cleanup();</span></span>
<span class="line"><span>                        } finally {</span></span>
<span class="line"><span>                            // Lets remove all FastThreadLocals for the Thread as we are about to terminate and notify</span></span>
<span class="line"><span>                            // the future. The user may block on the future and once it unblocks the JVM may terminate</span></span>
<span class="line"><span>                            // and start unloading classes.</span></span>
<span class="line"><span>                            // See https://github.com/netty/netty/issues/6596.</span></span>
<span class="line"><span>                            FastThreadLocal.removeAll();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                            STATE_UPDATER.set(SingleThreadEventExecutor.this, ST_TERMINATED);</span></span>
<span class="line"><span>                            threadLock.countDown();</span></span>
<span class="line"><span>                            int numUserTasks = drainTasks();</span></span>
<span class="line"><span>                            if (numUserTasks &gt; 0 &amp;&amp; logger.isWarnEnabled()) {</span></span>
<span class="line"><span>                                logger.warn(&quot;An event executor terminated with &quot; +</span></span>
<span class="line"><span>                                        &quot;non-empty task queue (&quot; + numUserTasks + &#39;)&#39;);</span></span>
<span class="line"><span>                            }</span></span>
<span class="line"><span>                            terminationFuture.setSuccess(null);</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>AbstractScheduledEventExecutor AbstractEventExecutor</p></blockquote><ul><li>parent EventExecutorGroup</li></ul><p>一、任务队列</p><p>普通任务队列</p><p>收尾任务队列</p><p>二、SelectorProvider,jvm中维护的唯一对象</p><p>NIO中的provider，其用于创建selector与channel。并且是单例的</p><p>三、核心方法NioEventLoop中的run方法</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>@Override</span></span>
<span class="line"><span>    protected void run() {</span></span>
<span class="line"><span>        int selectCnt = 0;</span></span>
<span class="line"><span>        for (;;) {</span></span>
<span class="line"><span>            try {</span></span>
<span class="line"><span>                int strategy;</span></span>
<span class="line"><span>                try {</span></span>
<span class="line"><span>                    //返回就绪channel的个数</span></span>
<span class="line"><span>                    strategy = selectStrategy.calculateStrategy(selectNowSupplier, hasTasks());</span></span>
<span class="line"><span>                    switch (strategy) {</span></span>
<span class="line"><span>                    case SelectStrategy.CONTINUE:</span></span>
<span class="line"><span>                        continue;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    case SelectStrategy.BUSY_WAIT:</span></span>
<span class="line"><span>                        // fall-through to SELECT since the busy-wait is not supported with NIO</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    case SelectStrategy.SELECT:</span></span>
<span class="line"><span>                        long curDeadlineNanos = nextScheduledTaskDeadlineNanos();</span></span>
<span class="line"><span>                        if (curDeadlineNanos == -1L) {</span></span>
<span class="line"><span>                            curDeadlineNanos = NONE; // nothing on the calendar</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                        nextWakeupNanos.set(curDeadlineNanos);</span></span>
<span class="line"><span>                        try {</span></span>
<span class="line"><span>                            if (!hasTasks()) {</span></span>
<span class="line"><span>                                strategy = select(curDeadlineNanos);</span></span>
<span class="line"><span>                            }</span></span>
<span class="line"><span>                        } finally {</span></span>
<span class="line"><span>                            // This update is just to help block unnecessary selector wakeups</span></span>
<span class="line"><span>                            // so use of lazySet is ok (no race condition)</span></span>
<span class="line"><span>                            nextWakeupNanos.lazySet(AWAKE);</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                        // fall through</span></span>
<span class="line"><span>                    default:</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                } catch (IOException e) {</span></span>
<span class="line"><span>                    // If we receive an IOException here its because the Selector is messed up. Let&#39;s rebuild</span></span>
<span class="line"><span>                    // the selector and retry. https://github.com/netty/netty/issues/8566</span></span>
<span class="line"><span>                    rebuildSelector0();</span></span>
<span class="line"><span>                    selectCnt = 0;</span></span>
<span class="line"><span>                    handleLoopException(e);</span></span>
<span class="line"><span>                    continue;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                selectCnt++;</span></span>
<span class="line"><span>                cancelledKeys = 0;</span></span>
<span class="line"><span>                needsToSelectAgain = false;</span></span>
<span class="line"><span>                final int ioRatio = this.ioRatio;</span></span>
<span class="line"><span>                boolean ranTasks;</span></span>
<span class="line"><span>                if (ioRatio == 100) {</span></span>
<span class="line"><span>                    try {</span></span>
<span class="line"><span>                        if (strategy &gt; 0) {</span></span>
<span class="line"><span>                            processSelectedKeys();</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    } finally {</span></span>
<span class="line"><span>                        // Ensure we always run tasks.</span></span>
<span class="line"><span>                        ranTasks = runAllTasks();</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                } else if (strategy &gt; 0) {</span></span>
<span class="line"><span>                    final long ioStartTime = System.nanoTime();</span></span>
<span class="line"><span>                    try {</span></span>
<span class="line"><span>                        //处理io读写或连接操作</span></span>
<span class="line"><span>                        processSelectedKeys();</span></span>
<span class="line"><span>                    } finally {</span></span>
<span class="line"><span>                        // Ensure we always run tasks.</span></span>
<span class="line"><span>                        final long ioTime = System.nanoTime() - ioStartTime;</span></span>
<span class="line"><span>                        ranTasks = runAllTasks(ioTime * (100 - ioRatio) / ioRatio);</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                } else {</span></span>
<span class="line"><span>                    ranTasks = runAllTasks(0); // This will run the minimum number of tasks</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                if (ranTasks || strategy &gt; 0) {</span></span>
<span class="line"><span>                    if (selectCnt &gt; MIN_PREMATURE_SELECTOR_RETURNS &amp;&amp; logger.isDebugEnabled()) {</span></span>
<span class="line"><span>                        logger.debug(&quot;Selector.select() returned prematurely {} times in a row for Selector {}.&quot;,</span></span>
<span class="line"><span>                                selectCnt - 1, selector);</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                    selectCnt = 0;</span></span>
<span class="line"><span>                } else if (unexpectedSelectorWakeup(selectCnt)) { // Unexpected wakeup (unusual case)</span></span>
<span class="line"><span>                    selectCnt = 0;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            } catch (CancelledKeyException e) {</span></span>
<span class="line"><span>                // Harmless exception - log anyway</span></span>
<span class="line"><span>                if (logger.isDebugEnabled()) {</span></span>
<span class="line"><span>                    logger.debug(CancelledKeyException.class.getSimpleName() + &quot; raised by a Selector {} - JDK bug?&quot;,</span></span>
<span class="line"><span>                            selector, e);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            } catch (Error e) {</span></span>
<span class="line"><span>                throw (Error) e;</span></span>
<span class="line"><span>            } catch (Throwable t) {</span></span>
<span class="line"><span>                handleLoopException(t);</span></span>
<span class="line"><span>            } finally {</span></span>
<span class="line"><span>                // Always handle shutdown even if the loop processing threw an exception.</span></span>
<span class="line"><span>                try {</span></span>
<span class="line"><span>                    if (isShuttingDown()) {</span></span>
<span class="line"><span>                        closeAll();</span></span>
<span class="line"><span>                        if (confirmShutdown()) {</span></span>
<span class="line"><span>                            return;</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                } catch (Error e) {</span></span>
<span class="line"><span>                    throw (Error) e;</span></span>
<span class="line"><span>                } catch (Throwable t) {</span></span>
<span class="line"><span>                    handleLoopException(t);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>四、processSelectedKey处理IO事件</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>private void processSelectedKey(SelectionKey k, AbstractNioChannel ch) {</span></span>
<span class="line"><span>    、//获取NioServerSocketchannel或NioSocketChannel的内部类对象NioByteUnSafe、NioMessageUnsafe</span></span>
<span class="line"><span>        final AbstractNioChannel.NioUnsafe unsafe = ch.unsafe();</span></span>
<span class="line"><span>        if (!k.isValid()) {</span></span>
<span class="line"><span>            final EventLoop eventLoop;</span></span>
<span class="line"><span>            try {</span></span>
<span class="line"><span>                eventLoop = ch.eventLoop();</span></span>
<span class="line"><span>            } catch (Throwable ignored) {</span></span>
<span class="line"><span>                // If the channel implementation throws an exception because there is no event loop, we ignore this</span></span>
<span class="line"><span>                // because we are only trying to determine if ch is registered to this event loop and thus has authority</span></span>
<span class="line"><span>                // to close ch.</span></span>
<span class="line"><span>                return;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            // Only close ch if ch is still registered to this EventLoop. ch could have deregistered from the event loop</span></span>
<span class="line"><span>            // and thus the SelectionKey could be cancelled as part of the deregistration process, but the channel is</span></span>
<span class="line"><span>            // still healthy and should not be closed.</span></span>
<span class="line"><span>            // See https://github.com/netty/netty/issues/5125</span></span>
<span class="line"><span>            if (eventLoop == this) {</span></span>
<span class="line"><span>                // close the channel if the key is not valid anymore</span></span>
<span class="line"><span>                unsafe.close(unsafe.voidPromise());</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            int readyOps = k.readyOps();</span></span>
<span class="line"><span>            // We first need to call finishConnect() before try to trigger a read(...) or write(...) as otherwise</span></span>
<span class="line"><span>            // the NIO JDK channel implementation may throw a NotYetConnectedException.</span></span>
<span class="line"><span>            if ((readyOps &amp; SelectionKey.OP_CONNECT) != 0) {</span></span>
<span class="line"><span>                // remove OP_CONNECT as otherwise Selector.select(..) will always return without blocking</span></span>
<span class="line"><span>                // See https://github.com/netty/netty/issues/924</span></span>
<span class="line"><span>                int ops = k.interestOps();</span></span>
<span class="line"><span>                ops &amp;= ~SelectionKey.OP_CONNECT;</span></span>
<span class="line"><span>                k.interestOps(ops);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                unsafe.finishConnect();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // Process OP_WRITE first as we may be able to write some queued buffers and so free memory.</span></span>
<span class="line"><span>            if ((readyOps &amp; SelectionKey.OP_WRITE) != 0) {</span></span>
<span class="line"><span>                // Call forceFlush which will also take care of clear the OP_WRITE once there is nothing left to write</span></span>
<span class="line"><span>                ch.unsafe().forceFlush();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // Also check for readOps of 0 to workaround possible JDK bug which may otherwise lead</span></span>
<span class="line"><span>            // to a spin loop</span></span>
<span class="line"><span>            //处理都事件或accept事件</span></span>
<span class="line"><span>            if ((readyOps &amp; (SelectionKey.OP_READ | SelectionKey.OP_ACCEPT)) != 0 || readyOps == 0) {</span></span>
<span class="line"><span>                //调用channel内部的pipeline的fireChannelread和fireChannelReadComplete方法</span></span>
<span class="line"><span>                //处理，即交给pipeline中的handler进行处理</span></span>
<span class="line"><span>                unsafe.read();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        } catch (CancelledKeyException ignored) {</span></span>
<span class="line"><span>            unsafe.close(unsafe.voidPromise());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="nioeventloopgroup" tabindex="-1"><a class="header-anchor" href="#nioeventloopgroup"><span>NioEventLoopGroup</span></a></h5><p>NioEventLoopGroup本身是Executor,在初始化时，会创建一个executor（也可初始化时传入,用于传到eventLoop中），此executor不是线程池</p><p>创建多个NioEventLoop，默认数量是cpu核心数的两倍。</p><blockquote><p>继承链</p></blockquote><p>NioEventLoopGroup、MultiThreadEventLoopGroup、MultiThreadEventExecutorGroup</p><blockquote><p>MultithreadEventLoopGroup</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>//next方法选取eventLoop，将channel注册到eventLoop中</span></span>
<span class="line"><span> public ChannelFuture register(Channel channel) {</span></span>
<span class="line"><span>        return next().register(channel);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="channelinitializer" tabindex="-1"><a class="header-anchor" href="#channelinitializer"><span>ChannelInitializer</span></a></h5><p>用于将自定义的handler加入到channel的pipeline中，对channel中的信息进行链式处理</p><p>使用场景：</p><ul><li>在ServerBootstrap初始化时，为监听端口accept事件的Channel添加ServerBootstrapAcceptor</li><li>在有新链接进入时，为监听客户端read/write事件的Channel添加用户自定义的ChannelHandler</li></ul><h5 id="channelpipeline" tabindex="-1"><a class="header-anchor" href="#channelpipeline"><span>channelPipeline</span></a></h5><p>pendingHandlerCallbackHead、head属性 解决channel还未注册到eventloop问题</p><h5 id="任务处理机制" tabindex="-1"><a class="header-anchor" href="#任务处理机制"><span>任务处理机制</span></a></h5><p>netty中eventloop即处理任务队列中的任务，也处理Io事件</p><h5 id="serverbootstrap" tabindex="-1"><a class="header-anchor" href="#serverbootstrap"><span>serverbootstrap</span></a></h5><p>服务器端的快速配置类</p><ul><li><p>配置线程组</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>//2.创建服务端启动引导/辅助类：ServerBootstrap</span></span>
<span class="line"><span>ServerBootstrap b = new ServerBootstrap();</span></span>
<span class="line"><span>//3.给引导类配置两大线程组,确定了线程模型</span></span>
<span class="line"><span>b.group(bossGroup, workerGroup)</span></span>
<span class="line"><span>    // (非必备)打印日志</span></span>
<span class="line"><span>    .handler(new LoggingHandler(LogLevel.INFO))</span></span>
<span class="line"><span>    // 4.指定 IO 模型</span></span>
<span class="line"><span>    .channel(NioServerSocketChannel.class)</span></span>
<span class="line"><span>    .childHandler(new ChannelInitializer&lt;SocketChannel&gt;() {</span></span>
<span class="line"><span>        @Override</span></span>
<span class="line"><span>        public void initChannel(SocketChannel ch) {</span></span>
<span class="line"><span>            ChannelPipeline p = ch.pipeline();</span></span>
<span class="line"><span>            //5.可以自定义客户端消息的业务处理逻辑</span></span>
<span class="line"><span>            p.addLast(new HelloServerHandler());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>AbstractBootstrap</p><ul><li><p>initAndRegister</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>final ChannelFuture initAndRegister() {</span></span>
<span class="line"><span>        Channel channel = null;</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            channel = channelFactory.newChannel();</span></span>
<span class="line"><span>            //channel初始化</span></span>
<span class="line"><span>            init(channel);</span></span>
<span class="line"><span>        } catch (Throwable t) {</span></span>
<span class="line"><span>        //........</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>		//config().group()获取bossgroup,调用register方法获取eventlooop,</span></span>
<span class="line"><span>    	//再调用eventloop的register方法完成注册</span></span>
<span class="line"><span>        ChannelFuture regFuture = config().group().register(channel);</span></span>
<span class="line"><span>    	//.....</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>serverbootstrap的init(channel)</p></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>void init(Channel channel) {</span></span>
<span class="line"><span>        setChannelOptions(channel, newOptionsArray(), logger);</span></span>
<span class="line"><span>        setAttributes(channel, newAttributesArray());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ChannelPipeline p = channel.pipeline();</span></span>
<span class="line"><span>		//定义wocker局部变量信息</span></span>
<span class="line"><span>        final EventLoopGroup currentChildGroup = childGroup;</span></span>
<span class="line"><span>        final ChannelHandler currentChildHandler = childHandler;</span></span>
<span class="line"><span>        final Entry&lt;ChannelOption&lt;?&gt;, Object&gt;[] currentChildOptions = newOptionsArray(childOptions);</span></span>
<span class="line"><span>        final Entry&lt;AttributeKey&lt;?&gt;, Object&gt;[] currentChildAttrs = newAttributesArray(childAttrs);</span></span>
<span class="line"><span>		//这里若channel没有注册到eventloop，则在channel的pipeline</span></span>
<span class="line"><span>    	//暂存channelInitializer,注册成功后执行pipeline.invokeHandlerAddedIfNeeded();</span></span>
<span class="line"><span>    	//将自定义handler添加到pipeline中</span></span>
<span class="line"><span>        p.addLast(new ChannelInitializer&lt;Channel&gt;() {</span></span>
<span class="line"><span>            @Override</span></span>
<span class="line"><span>            public void initChannel(final Channel ch) {</span></span>
<span class="line"><span>                final ChannelPipeline pipeline = ch.pipeline();</span></span>
<span class="line"><span>                ChannelHandler handler = config.handler();</span></span>
<span class="line"><span>                if (handler != null) {</span></span>
<span class="line"><span>                    pipeline.addLast(handler);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>				//添加serversocketChannel的handler</span></span>
<span class="line"><span>                ch.eventLoop().execute(new Runnable() {</span></span>
<span class="line"><span>                    @Override</span></span>
<span class="line"><span>                    public void run() {</span></span>
<span class="line"><span>                        pipeline.addLast(new ServerBootstrapAcceptor(</span></span>
<span class="line"><span>                                ch, currentChildGroup, currentChildHandler, currentChildOptions, currentChildAttrs));</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                });</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>ServerBootstrapAcceptor</p><p>serverSocketChannel的处理器，创建socketchannel并注册到childGroup的eventloop中</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span style="color:#0000FF;">public</span><span style="color:#267F99;"> void</span><span style="color:#795E26;"> channelRead</span><span style="color:#000000;">(</span><span style="color:#267F99;">ChannelHandlerContext</span><span style="color:#000000;"> ctx, </span><span style="color:#267F99;">Object</span><span style="color:#000000;"> msg) {</span></span>
<span class="line"><span style="color:#0000FF;">            final</span><span style="color:#267F99;"> Channel</span><span style="color:#001080;"> child</span><span style="color:#000000;"> = (Channel) msg;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#001080;">            child</span><span style="color:#000000;">.</span><span style="color:#795E26;">pipeline</span><span style="color:#000000;">().</span><span style="color:#795E26;">addLast</span><span style="color:#000000;">(childHandler);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#795E26;">            setChannelOptions</span><span style="color:#000000;">(child, childOptions, logger);</span></span>
<span class="line"><span style="color:#795E26;">            setAttributes</span><span style="color:#000000;">(child, childAttrs);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AF00DB;">            try</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#008000;">                //如果eventloop已绑定线程，则不会创建新的线程。</span></span>
<span class="line"><span style="color:#001080;">                childGroup</span><span style="color:#000000;">.</span><span style="color:#795E26;">register</span><span style="color:#000000;">(child).</span><span style="color:#795E26;">addListener</span><span style="color:#000000;">(</span><span style="color:#AF00DB;">new</span><span style="color:#795E26;"> ChannelFutureListener</span><span style="color:#000000;">() {</span></span>
<span class="line"><span style="color:#000000;">                    @</span><span style="color:#267F99;">Override</span></span>
<span class="line"><span style="color:#0000FF;">                    public</span><span style="color:#267F99;"> void</span><span style="color:#795E26;"> operationComplete</span><span style="color:#000000;">(</span><span style="color:#267F99;">ChannelFuture</span><span style="color:#001080;"> future</span><span style="color:#000000;">) </span><span style="color:#0000FF;">throws</span><span style="color:#267F99;"> Exception</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#AF00DB;">                        if</span><span style="color:#000000;"> (!</span><span style="color:#001080;">future</span><span style="color:#000000;">.</span><span style="color:#795E26;">isSuccess</span><span style="color:#000000;">()) {</span></span>
<span class="line"><span style="color:#795E26;">                            forceClose</span><span style="color:#000000;">(child, </span><span style="color:#001080;">future</span><span style="color:#000000;">.</span><span style="color:#795E26;">cause</span><span style="color:#000000;">());</span></span>
<span class="line"><span style="color:#000000;">                        }</span></span>
<span class="line"><span style="color:#000000;">                    }</span></span>
<span class="line"><span style="color:#000000;">                });</span></span>
<span class="line"><span style="color:#000000;">            } </span><span style="color:#AF00DB;">catch</span><span style="color:#000000;"> (</span><span style="color:#267F99;">Throwable</span><span style="color:#001080;"> t</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#795E26;">                forceClose</span><span style="color:#000000;">(child, t);</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h5 id="handler" tabindex="-1"><a class="header-anchor" href="#handler"><span>handler</span></a></h5><p>多handler需要在channelread的方法尾部添加ctx.fireChannelRead(msg);链式调用</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span style="color:#0000FF;">public</span><span style="color:#0000FF;"> class</span><span style="color:#267F99;"> DiscardServerHandler</span><span style="color:#0000FF;"> extends</span><span style="color:#267F99;"> ChannelInboundHandlerAdapter</span></span>
<span class="line"><span style="color:#000000;">{</span></span>
<span class="line"><span style="color:#000000;">    @</span><span style="color:#267F99;">Override</span></span>
<span class="line"><span style="color:#0000FF;">    public</span><span style="color:#267F99;"> void</span><span style="color:#795E26;"> channelRead</span><span style="color:#000000;">(</span><span style="color:#267F99;">ChannelHandlerContext</span><span style="color:#001080;"> ctx</span><span style="color:#000000;">, </span><span style="color:#267F99;">Object</span><span style="color:#001080;"> msg</span><span style="color:#000000;">) { </span><span style="color:#008000;">// (2)</span></span>
<span class="line"><span style="color:#267F99;">        ByteBuf</span><span style="color:#001080;"> in</span><span style="color:#000000;"> = (ByteBuf) msg;</span></span>
<span class="line"><span style="color:#AF00DB;">        try</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#AF00DB;">            while</span><span style="color:#000000;"> (</span><span style="color:#001080;">in</span><span style="color:#000000;">.</span><span style="color:#795E26;">isReadable</span><span style="color:#000000;">()) { </span><span style="color:#008000;">// (1)</span></span>
<span class="line"><span style="color:#001080;">                System</span><span style="color:#000000;">.</span><span style="color:#001080;">out</span><span style="color:#000000;">.</span><span style="color:#795E26;">print</span><span style="color:#000000;">((</span><span style="color:#267F99;">char</span><span style="color:#000000;">) </span><span style="color:#001080;">in</span><span style="color:#000000;">.</span><span style="color:#795E26;">readByte</span><span style="color:#000000;">());</span></span>
<span class="line"><span style="color:#001080;">                System</span><span style="color:#000000;">.</span><span style="color:#001080;">out</span><span style="color:#000000;">.</span><span style="color:#795E26;">flush</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#008000;">            //多handler链式调用</span></span>
<span class="line"><span style="color:#001080;">            ctx</span><span style="color:#000000;">.</span><span style="color:#795E26;">fireChannelRead</span><span style="color:#000000;">(msg);</span></span>
<span class="line"><span style="color:#000000;">        } </span><span style="color:#AF00DB;">finally</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#001080;">            ReferenceCountUtil</span><span style="color:#000000;">.</span><span style="color:#795E26;">release</span><span style="color:#000000;">(msg); </span><span style="color:#008000;">// (2)</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">    @</span><span style="color:#267F99;">Override</span></span>
<span class="line"><span style="color:#0000FF;">    public</span><span style="color:#267F99;"> void</span><span style="color:#795E26;"> exceptionCaught</span><span style="color:#000000;">(</span><span style="color:#267F99;">ChannelHandlerContext</span><span style="color:#001080;"> ctx</span><span style="color:#000000;">, </span><span style="color:#267F99;">Throwable</span><span style="color:#001080;"> cause</span><span style="color:#000000;">) { </span><span style="color:#008000;">// (4)</span></span>
<span class="line"><span style="color:#008000;">        // Close the connection when an exception is raised.</span></span>
<span class="line"><span style="color:#001080;">        cause</span><span style="color:#000000;">.</span><span style="color:#795E26;">printStackTrace</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#001080;">        ctx</span><span style="color:#000000;">.</span><span style="color:#795E26;">close</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,58);function m(h,y){const e=i("ExternalLinkIcon");return p(),c("div",null,[v,s("p",null,[n("单线程模型、"),s("a",u,[n("多线程"),r(e)]),n("模型、主从多线程模型")]),b])}const E=l(o,[["render",m],["__file","网络通信.html.vue"]]),x=JSON.parse('{"path":"/note/%E7%BD%91%E7%BB%9C%E9%80%9A%E4%BF%A1/%E7%BD%91%E7%BB%9C%E9%80%9A%E4%BF%A1.html","title":"network","lang":"zh-CN","frontmatter":{"description":"network 概念 网关和路由 网关主要用于连接异构网络，路由器、交换机、pc、手机都可以作为网关 路由器主要用于不同网络间的数据转发，处于网络层 集线器、交换机 交换机的不同端口间可以隔离冲突域，保证两个主机间能正常通信，处于数据链路层 集线器主要用于将多个pc连接通信，存在冲突域，影响通信，处于物理层 vpn、手机热点 windows共享网络 p...","head":[["meta",{"property":"og:url","content":"https://wherywan.github.io/note/%E7%BD%91%E7%BB%9C%E9%80%9A%E4%BF%A1/%E7%BD%91%E7%BB%9C%E9%80%9A%E4%BF%A1.html"}],["meta",{"property":"og:site_name","content":"HONG_JI"}],["meta",{"property":"og:title","content":"network"}],["meta",{"property":"og:description","content":"network 概念 网关和路由 网关主要用于连接异构网络，路由器、交换机、pc、手机都可以作为网关 路由器主要用于不同网络间的数据转发，处于网络层 集线器、交换机 交换机的不同端口间可以隔离冲突域，保证两个主机间能正常通信，处于数据链路层 集线器主要用于将多个pc连接通信，存在冲突域，影响通信，处于物理层 vpn、手机热点 windows共享网络 p..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-06T10:18:26.000Z"}],["meta",{"property":"article:author","content":"wanhongji"}],["meta",{"property":"article:modified_time","content":"2023-01-06T10:18:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"network\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-01-06T10:18:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"wanhongji\\"}]}"]]},"headers":[{"level":2,"title":"概念","slug":"概念","link":"#概念","children":[{"level":3,"title":"网关和路由","slug":"网关和路由","link":"#网关和路由","children":[]},{"level":3,"title":"集线器、交换机","slug":"集线器、交换机","link":"#集线器、交换机","children":[]},{"level":3,"title":"vpn、手机热点","slug":"vpn、手机热点","link":"#vpn、手机热点","children":[]},{"level":3,"title":"windows共享网络","slug":"windows共享网络","link":"#windows共享网络","children":[]}]},{"level":2,"title":"网络通信判断连接、读取、写超时猜想","slug":"网络通信判断连接、读取、写超时猜想","link":"#网络通信判断连接、读取、写超时猜想","children":[]},{"level":2,"title":"长轮询","slug":"长轮询","link":"#长轮询","children":[]},{"level":2,"title":"网络通信","slug":"网络通信","link":"#网络通信","children":[{"level":3,"title":"IO流","slug":"io流","link":"#io流","children":[]},{"level":3,"title":"channel通道","slug":"channel通道","link":"#channel通道","children":[]},{"level":3,"title":"buffer缓存区","slug":"buffer缓存区","link":"#buffer缓存区","children":[]},{"level":3,"title":"IO通信模型","slug":"io通信模型","link":"#io通信模型","children":[]},{"level":3,"title":"Reactor模型","slug":"reactor模型","link":"#reactor模型","children":[]},{"level":3,"title":"框架","slug":"框架","link":"#框架","children":[]}]}],"git":{"createdTime":1657433681000,"updatedTime":1673000306000,"contributors":[{"name":"wanhongji","email":"wherywan@163.com","commits":5},{"name":"wanhongji","email":"wan_hongji@163.com","commits":1}]},"readingTime":{"minutes":8.57,"words":2572},"filePathRelative":"note/网络通信/网络通信.md","localizedDate":"2022年7月10日","excerpt":"\\n<h2>概念</h2>\\n<h3>网关和路由</h3>\\n<p>网关主要用于连接异构网络，路由器、交换机、pc、手机都可以作为网关</p>\\n<p>路由器主要用于不同网络间的数据转发，处于网络层</p>\\n<h3>集线器、交换机</h3>\\n<p>交换机的不同端口间可以隔离冲突域，保证两个主机间能正常通信，处于数据链路层</p>\\n<p>集线器主要用于将多个pc连接通信，存在冲突域，影响通信，处于物理层</p>\\n<h3>vpn、手机热点</h3>\\n<h3>windows共享网络</h3>\\n<p>pc有无线和有线两个网卡，通过共享pc无线网络，即将pc的有线网卡作为其他pc的网关，让连接pc的局域网设备能够访问外网</p>","autoDesc":true}');export{E as comp,x as data};
