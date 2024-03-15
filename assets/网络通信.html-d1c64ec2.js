import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as p,c,a as n,b as s,d as o,f as a}from"./app-f83986bb.js";const r="/assets/nettyloop-4ed461a4.png",t="/assets/nettytransport-36b66828.png",d={},v=a('<h1 id="network" tabindex="-1"><a class="header-anchor" href="#network" aria-hidden="true">#</a> network</h1><h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2><h3 id="网关和路由" tabindex="-1"><a class="header-anchor" href="#网关和路由" aria-hidden="true">#</a> 网关和路由</h3><p>网关主要用于连接异构网络，路由器、交换机、pc、手机都可以作为网关</p><p>路由器主要用于不同网络间的数据转发，处于网络层</p><h3 id="集线器、交换机" tabindex="-1"><a class="header-anchor" href="#集线器、交换机" aria-hidden="true">#</a> 集线器、交换机</h3><p>交换机的不同端口间可以隔离冲突域，保证两个主机间能正常通信，处于数据链路层</p><p>集线器主要用于将多个pc连接通信，存在冲突域，影响通信，处于物理层</p><h3 id="vpn、手机热点" tabindex="-1"><a class="header-anchor" href="#vpn、手机热点" aria-hidden="true">#</a> vpn、手机热点</h3><h3 id="windows共享网络" tabindex="-1"><a class="header-anchor" href="#windows共享网络" aria-hidden="true">#</a> windows共享网络</h3><p>pc有无线和有线两个网卡，通过共享pc无线网络，即将pc的有线网卡作为其他pc的网关，让连接pc的局域网设备能够访问外网</p><h2 id="网络通信判断连接、读取、写超时猜想" tabindex="-1"><a class="header-anchor" href="#网络通信判断连接、读取、写超时猜想" aria-hidden="true">#</a> 网络通信判断连接、读取、写超时猜想</h2><p>1、业务线程执行异步操作，获取异步操作对象，缓存到共享内存中，并阻塞</p><p>2、判断超时线程，若对象存在，对共享内存中进行超时判断，设置超时结果</p><p>3、读写线程获取到结果，设置到共享内存的异步对象中，并删除异步操作对象</p><h2 id="长轮询" tabindex="-1"><a class="header-anchor" href="#长轮询" aria-hidden="true">#</a> 长轮询</h2><ul><li>不断发送请求到服务器</li><li>若请求得到数据，则立即返回，若请求不到数据，则在超时时间内挂起等待，直到有数据或超时返回</li></ul><h2 id="网络通信" tabindex="-1"><a class="header-anchor" href="#网络通信" aria-hidden="true">#</a> 网络通信</h2><h3 id="io流" tabindex="-1"><a class="header-anchor" href="#io流" aria-hidden="true">#</a> IO流</h3><h3 id="channel通道" tabindex="-1"><a class="header-anchor" href="#channel通道" aria-hidden="true">#</a> channel通道</h3><h3 id="buffer缓存区" tabindex="-1"><a class="header-anchor" href="#buffer缓存区" aria-hidden="true">#</a> buffer缓存区</h3><h3 id="io通信模型" tabindex="-1"><a class="header-anchor" href="#io通信模型" aria-hidden="true">#</a> IO通信模型</h3><h3 id="reactor模型" tabindex="-1"><a class="header-anchor" href="#reactor模型" aria-hidden="true">#</a> Reactor模型</h3><blockquote><p>分类</p></blockquote>',24),u={href:"https://so.csdn.net/so/search?q=%E5%A4%9A%E7%BA%BF%E7%A8%8B&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},y=a('<blockquote><p>运行机制</p></blockquote><p>连接注册、事件轮询（select）、事件分发(io事件)、任务处理（非io事件）</p><p><img src="'+r+'" alt=""></p><h3 id="框架" tabindex="-1"><a class="header-anchor" href="#框架" aria-hidden="true">#</a> 框架</h3><h4 id="netty" tabindex="-1"><a class="header-anchor" href="#netty" aria-hidden="true">#</a> netty</h4><h5 id="执行流程" tabindex="-1"><a class="header-anchor" href="#执行流程" aria-hidden="true">#</a> 执行流程</h5><p><img src="'+t+`" alt="执行流程"></p><h5 id="channel" tabindex="-1"><a class="header-anchor" href="#channel" aria-hidden="true">#</a> channel</h5><p>AbstractChannel、AbstractNioChannel</p><p>AbstractNioByteChannel、NIOSocketChannel</p><p>AbstractNioMessageChannel、NioServerSocketChannel</p><ol><li>AbstractChannel的内部抽象AbstractUnsafe的register,register0,</li><li>AbstractNioChannel的doregister方法</li><li>完成channel的注册</li></ol><h5 id="nioeventloop" tabindex="-1"><a class="header-anchor" href="#nioeventloop" aria-hidden="true">#</a> NioEventLoop</h5><blockquote><p>继承链</p></blockquote><p>NioEventLoop、SingleThreadEventLoop 、SingleThreadEventExecutor、AbstractScheduledEventExecutor、AbstractEventExecutor</p><blockquote><p>NioEventLoop</p></blockquote><ul><li>NioEventLoop本身是Executor,内部有executor成员（子executor，只是一个线程工厂，用于创建线程与eventloop绑定，进行事件循环）,此executor并非线程池，</li><li>EventLoop 本身只是一个线程驱动，在其生命周期内只会绑定一个线程，让该线程处理一个 Channel 的所有 IO 事件。</li><li>channel与eventloop绑定，eventloop与thread绑定</li><li>io.netty.channel.AbstractChannel.AbstractUnsafe#register</li><li>在注册channel时，根据选择器选择合适的eventloop，将channel注册到eventloop的选择器中，并将eventloop绑定一个线程并启动</li><li>register和execute是两个核心方法，用于注册channel、添加任务</li></ul><blockquote><p>SingleThreadEventLoop</p></blockquote><ul><li>tailTasks</li></ul><blockquote><p>SingleThreadEventExecutor</p></blockquote><ul><li>addTaskWakesUp 默认false</li><li>maxPendingTasks DEFAULT_MAX_PENDING_EXECUTOR_TASKS;</li><li>taskQueue</li><li>thread 已绑定的线程</li><li>rejectedExecutionHandler</li><li>executor</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">//装饰给定的Executor并确保currentExecutor()在执行过程中从可运行对象内部调用时将返回eventExecutor</span></span>
<span class="line"><span style="color:#000000;">ThreadExecutorMap.apply(executor, this);</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">public static Executor apply(final Executor executor, final EventExecutor eventExecutor) {</span></span>
<span class="line"><span style="color:#000000;">        ObjectUtil.checkNotNull(executor, &quot;executor&quot;);</span></span>
<span class="line"><span style="color:#000000;">        ObjectUtil.checkNotNull(eventExecutor, &quot;eventExecutor&quot;);</span></span>
<span class="line"><span style="color:#000000;">        return new Executor() {</span></span>
<span class="line"><span style="color:#000000;">            @Override</span></span>
<span class="line"><span style="color:#000000;">            public void execute(final Runnable command) {</span></span>
<span class="line"><span style="color:#000000;">                executor.execute(apply(command, eventExecutor));</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">        };</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">    </span></span>
<span class="line"><span style="color:#000000;">public static Runnable apply(final Runnable command, final EventExecutor eventExecutor) {</span></span>
<span class="line"><span style="color:#000000;">    ObjectUtil.checkNotNull(command, &quot;command&quot;);</span></span>
<span class="line"><span style="color:#000000;">    ObjectUtil.checkNotNull(eventExecutor, &quot;eventExecutor&quot;);</span></span>
<span class="line"><span style="color:#000000;">    return new Runnable() {</span></span>
<span class="line"><span style="color:#000000;">        @Override</span></span>
<span class="line"><span style="color:#000000;">        public void run() {</span></span>
<span class="line"><span style="color:#000000;">            setCurrentEventExecutor(eventExecutor);</span></span>
<span class="line"><span style="color:#000000;">            try {</span></span>
<span class="line"><span style="color:#000000;">                command.run();</span></span>
<span class="line"><span style="color:#000000;">            } finally {</span></span>
<span class="line"><span style="color:#000000;">                setCurrentEventExecutor(null);</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">    };</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;">//Set the current EventExecutor that is used by the Thread.</span></span>
<span class="line"><span style="color:#000000;">//mappings是线程局部变量</span></span>
<span class="line"><span style="color:#000000;"> private static void setCurrentEventExecutor(EventExecutor executor) {</span></span>
<span class="line"><span style="color:#000000;">    mappings.set(executor);</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>execute方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">private void execute(Runnable task, boolean immediate) {</span></span>
<span class="line"><span style="color:#000000;">        boolean inEventLoop = inEventLoop();</span></span>
<span class="line"><span style="color:#000000;">        //添加任务到任务对列</span></span>
<span class="line"><span style="color:#000000;">        addTask(task);</span></span>
<span class="line"><span style="color:#000000;">        //判断eventLoop是否与线程绑定</span></span>
<span class="line"><span style="color:#000000;">        if (!inEventLoop) {</span></span>
<span class="line"><span style="color:#000000;">            //创建线程任务，启动线程任务，并绑定线程到eventLoop</span></span>
<span class="line"><span style="color:#000000;">            //执行EventLoop中的run方法</span></span>
<span class="line"><span style="color:#000000;">            startThread();</span></span>
<span class="line"><span style="color:#000000;">            if (isShutdown()) {</span></span>
<span class="line"><span style="color:#000000;">                boolean reject = false;</span></span>
<span class="line"><span style="color:#000000;">                try {</span></span>
<span class="line"><span style="color:#000000;">                    if (removeTask(task)) {</span></span>
<span class="line"><span style="color:#000000;">                        reject = true;</span></span>
<span class="line"><span style="color:#000000;">                    }</span></span>
<span class="line"><span style="color:#000000;">                } catch (UnsupportedOperationException e) {</span></span>
<span class="line"><span style="color:#000000;">                    // The task queue does not support removal so the best thing we can do is to just move on and</span></span>
<span class="line"><span style="color:#000000;">                    // hope we will be able to pick-up the task before its completely terminated.</span></span>
<span class="line"><span style="color:#000000;">                    // In worst case we will log on termination.</span></span>
<span class="line"><span style="color:#000000;">                }</span></span>
<span class="line"><span style="color:#000000;">                if (reject) {</span></span>
<span class="line"><span style="color:#000000;">                    reject();</span></span>
<span class="line"><span style="color:#000000;">                }</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">        if (!addTaskWakesUp &amp;&amp; immediate) {</span></span>
<span class="line"><span style="color:#000000;">            wakeup(inEventLoop);</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>doStartThread方法，创建线程任务执行，绑定线程到eventLoop</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">private void doStartThread() {</span></span>
<span class="line"><span style="color:#000000;">        assert thread == null;</span></span>
<span class="line"><span style="color:#000000;">        executor.execute(new Runnable() {</span></span>
<span class="line"><span style="color:#000000;">            @Override</span></span>
<span class="line"><span style="color:#000000;">            public void run() {</span></span>
<span class="line"><span style="color:#000000;">                thread = Thread.currentThread();</span></span>
<span class="line"><span style="color:#000000;">                if (interrupted) {</span></span>
<span class="line"><span style="color:#000000;">                    thread.interrupt();</span></span>
<span class="line"><span style="color:#000000;">                }</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">                boolean success = false;</span></span>
<span class="line"><span style="color:#000000;">                updateLastExecutionTime();</span></span>
<span class="line"><span style="color:#000000;">                try {</span></span>
<span class="line"><span style="color:#000000;">                    SingleThreadEventExecutor.this.run();</span></span>
<span class="line"><span style="color:#000000;">                    success = true;</span></span>
<span class="line"><span style="color:#000000;">                } catch (Throwable t) {</span></span>
<span class="line"><span style="color:#000000;">                    logger.warn(&quot;Unexpected exception from an event executor: &quot;, t);</span></span>
<span class="line"><span style="color:#000000;">                } finally {</span></span>
<span class="line"><span style="color:#000000;">                    for (;;) {</span></span>
<span class="line"><span style="color:#000000;">                        int oldState = state;</span></span>
<span class="line"><span style="color:#000000;">                        if (oldState &gt;= ST_SHUTTING_DOWN || STATE_UPDATER.compareAndSet(</span></span>
<span class="line"><span style="color:#000000;">                                SingleThreadEventExecutor.this, oldState, ST_SHUTTING_DOWN)) {</span></span>
<span class="line"><span style="color:#000000;">                            break;</span></span>
<span class="line"><span style="color:#000000;">                        }</span></span>
<span class="line"><span style="color:#000000;">                    }</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">                    // Check if confirmShutdown() was called at the end of the loop.</span></span>
<span class="line"><span style="color:#000000;">                    if (success &amp;&amp; gracefulShutdownStartTime == 0) {</span></span>
<span class="line"><span style="color:#000000;">                        if (logger.isErrorEnabled()) {</span></span>
<span class="line"><span style="color:#000000;">                            logger.error(&quot;Buggy &quot; + EventExecutor.class.getSimpleName() + &quot; implementation; &quot; +</span></span>
<span class="line"><span style="color:#000000;">                                    SingleThreadEventExecutor.class.getSimpleName() + &quot;.confirmShutdown() must &quot; +</span></span>
<span class="line"><span style="color:#000000;">                                    &quot;be called before run() implementation terminates.&quot;);</span></span>
<span class="line"><span style="color:#000000;">                        }</span></span>
<span class="line"><span style="color:#000000;">                    }</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">                    try {</span></span>
<span class="line"><span style="color:#000000;">                        // Run all remaining tasks and shutdown hooks. At this point the event loop</span></span>
<span class="line"><span style="color:#000000;">                        // is in ST_SHUTTING_DOWN state still accepting tasks which is needed for</span></span>
<span class="line"><span style="color:#000000;">                        // graceful shutdown with quietPeriod.</span></span>
<span class="line"><span style="color:#000000;">                        for (;;) {</span></span>
<span class="line"><span style="color:#000000;">                            if (confirmShutdown()) {</span></span>
<span class="line"><span style="color:#000000;">                                break;</span></span>
<span class="line"><span style="color:#000000;">                            }</span></span>
<span class="line"><span style="color:#000000;">                        }</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">                        // Now we want to make sure no more tasks can be added from this point. This is</span></span>
<span class="line"><span style="color:#000000;">                        // achieved by switching the state. Any new tasks beyond this point will be rejected.</span></span>
<span class="line"><span style="color:#000000;">                        for (;;) {</span></span>
<span class="line"><span style="color:#000000;">                            int oldState = state;</span></span>
<span class="line"><span style="color:#000000;">                            if (oldState &gt;= ST_SHUTDOWN || STATE_UPDATER.compareAndSet(</span></span>
<span class="line"><span style="color:#000000;">                                    SingleThreadEventExecutor.this, oldState, ST_SHUTDOWN)) {</span></span>
<span class="line"><span style="color:#000000;">                                break;</span></span>
<span class="line"><span style="color:#000000;">                            }</span></span>
<span class="line"><span style="color:#000000;">                        }</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">                        // We have the final set of tasks in the queue now, no more can be added, run all remaining.</span></span>
<span class="line"><span style="color:#000000;">                        // No need to loop here, this is the final pass.</span></span>
<span class="line"><span style="color:#000000;">                        confirmShutdown();</span></span>
<span class="line"><span style="color:#000000;">                    } finally {</span></span>
<span class="line"><span style="color:#000000;">                        try {</span></span>
<span class="line"><span style="color:#000000;">                            cleanup();</span></span>
<span class="line"><span style="color:#000000;">                        } finally {</span></span>
<span class="line"><span style="color:#000000;">                            // Lets remove all FastThreadLocals for the Thread as we are about to terminate and notify</span></span>
<span class="line"><span style="color:#000000;">                            // the future. The user may block on the future and once it unblocks the JVM may terminate</span></span>
<span class="line"><span style="color:#000000;">                            // and start unloading classes.</span></span>
<span class="line"><span style="color:#000000;">                            // See https://github.com/netty/netty/issues/6596.</span></span>
<span class="line"><span style="color:#000000;">                            FastThreadLocal.removeAll();</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">                            STATE_UPDATER.set(SingleThreadEventExecutor.this, ST_TERMINATED);</span></span>
<span class="line"><span style="color:#000000;">                            threadLock.countDown();</span></span>
<span class="line"><span style="color:#000000;">                            int numUserTasks = drainTasks();</span></span>
<span class="line"><span style="color:#000000;">                            if (numUserTasks &gt; 0 &amp;&amp; logger.isWarnEnabled()) {</span></span>
<span class="line"><span style="color:#000000;">                                logger.warn(&quot;An event executor terminated with &quot; +</span></span>
<span class="line"><span style="color:#000000;">                                        &quot;non-empty task queue (&quot; + numUserTasks + &#39;)&#39;);</span></span>
<span class="line"><span style="color:#000000;">                            }</span></span>
<span class="line"><span style="color:#000000;">                            terminationFuture.setSuccess(null);</span></span>
<span class="line"><span style="color:#000000;">                        }</span></span>
<span class="line"><span style="color:#000000;">                    }</span></span>
<span class="line"><span style="color:#000000;">                }</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">        });</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>AbstractScheduledEventExecutor AbstractEventExecutor</p></blockquote><ul><li>parent EventExecutorGroup</li></ul><p>一、任务队列</p><p>普通任务队列</p><p>收尾任务队列</p><p>二、SelectorProvider,jvm中维护的唯一对象</p><p>NIO中的provider，其用于创建selector与channel。并且是单例的</p><p>三、核心方法NioEventLoop中的run方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">@Override</span></span>
<span class="line"><span style="color:#000000;">    protected void run() {</span></span>
<span class="line"><span style="color:#000000;">        int selectCnt = 0;</span></span>
<span class="line"><span style="color:#000000;">        for (;;) {</span></span>
<span class="line"><span style="color:#000000;">            try {</span></span>
<span class="line"><span style="color:#000000;">                int strategy;</span></span>
<span class="line"><span style="color:#000000;">                try {</span></span>
<span class="line"><span style="color:#000000;">                    //返回就绪channel的个数</span></span>
<span class="line"><span style="color:#000000;">                    strategy = selectStrategy.calculateStrategy(selectNowSupplier, hasTasks());</span></span>
<span class="line"><span style="color:#000000;">                    switch (strategy) {</span></span>
<span class="line"><span style="color:#000000;">                    case SelectStrategy.CONTINUE:</span></span>
<span class="line"><span style="color:#000000;">                        continue;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">                    case SelectStrategy.BUSY_WAIT:</span></span>
<span class="line"><span style="color:#000000;">                        // fall-through to SELECT since the busy-wait is not supported with NIO</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">                    case SelectStrategy.SELECT:</span></span>
<span class="line"><span style="color:#000000;">                        long curDeadlineNanos = nextScheduledTaskDeadlineNanos();</span></span>
<span class="line"><span style="color:#000000;">                        if (curDeadlineNanos == -1L) {</span></span>
<span class="line"><span style="color:#000000;">                            curDeadlineNanos = NONE; // nothing on the calendar</span></span>
<span class="line"><span style="color:#000000;">                        }</span></span>
<span class="line"><span style="color:#000000;">                        nextWakeupNanos.set(curDeadlineNanos);</span></span>
<span class="line"><span style="color:#000000;">                        try {</span></span>
<span class="line"><span style="color:#000000;">                            if (!hasTasks()) {</span></span>
<span class="line"><span style="color:#000000;">                                strategy = select(curDeadlineNanos);</span></span>
<span class="line"><span style="color:#000000;">                            }</span></span>
<span class="line"><span style="color:#000000;">                        } finally {</span></span>
<span class="line"><span style="color:#000000;">                            // This update is just to help block unnecessary selector wakeups</span></span>
<span class="line"><span style="color:#000000;">                            // so use of lazySet is ok (no race condition)</span></span>
<span class="line"><span style="color:#000000;">                            nextWakeupNanos.lazySet(AWAKE);</span></span>
<span class="line"><span style="color:#000000;">                        }</span></span>
<span class="line"><span style="color:#000000;">                        // fall through</span></span>
<span class="line"><span style="color:#000000;">                    default:</span></span>
<span class="line"><span style="color:#000000;">                    }</span></span>
<span class="line"><span style="color:#000000;">                } catch (IOException e) {</span></span>
<span class="line"><span style="color:#000000;">                    // If we receive an IOException here its because the Selector is messed up. Let&#39;s rebuild</span></span>
<span class="line"><span style="color:#000000;">                    // the selector and retry. https://github.com/netty/netty/issues/8566</span></span>
<span class="line"><span style="color:#000000;">                    rebuildSelector0();</span></span>
<span class="line"><span style="color:#000000;">                    selectCnt = 0;</span></span>
<span class="line"><span style="color:#000000;">                    handleLoopException(e);</span></span>
<span class="line"><span style="color:#000000;">                    continue;</span></span>
<span class="line"><span style="color:#000000;">                }</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">                selectCnt++;</span></span>
<span class="line"><span style="color:#000000;">                cancelledKeys = 0;</span></span>
<span class="line"><span style="color:#000000;">                needsToSelectAgain = false;</span></span>
<span class="line"><span style="color:#000000;">                final int ioRatio = this.ioRatio;</span></span>
<span class="line"><span style="color:#000000;">                boolean ranTasks;</span></span>
<span class="line"><span style="color:#000000;">                if (ioRatio == 100) {</span></span>
<span class="line"><span style="color:#000000;">                    try {</span></span>
<span class="line"><span style="color:#000000;">                        if (strategy &gt; 0) {</span></span>
<span class="line"><span style="color:#000000;">                            processSelectedKeys();</span></span>
<span class="line"><span style="color:#000000;">                        }</span></span>
<span class="line"><span style="color:#000000;">                    } finally {</span></span>
<span class="line"><span style="color:#000000;">                        // Ensure we always run tasks.</span></span>
<span class="line"><span style="color:#000000;">                        ranTasks = runAllTasks();</span></span>
<span class="line"><span style="color:#000000;">                    }</span></span>
<span class="line"><span style="color:#000000;">                } else if (strategy &gt; 0) {</span></span>
<span class="line"><span style="color:#000000;">                    final long ioStartTime = System.nanoTime();</span></span>
<span class="line"><span style="color:#000000;">                    try {</span></span>
<span class="line"><span style="color:#000000;">                        //处理io读写或连接操作</span></span>
<span class="line"><span style="color:#000000;">                        processSelectedKeys();</span></span>
<span class="line"><span style="color:#000000;">                    } finally {</span></span>
<span class="line"><span style="color:#000000;">                        // Ensure we always run tasks.</span></span>
<span class="line"><span style="color:#000000;">                        final long ioTime = System.nanoTime() - ioStartTime;</span></span>
<span class="line"><span style="color:#000000;">                        ranTasks = runAllTasks(ioTime * (100 - ioRatio) / ioRatio);</span></span>
<span class="line"><span style="color:#000000;">                    }</span></span>
<span class="line"><span style="color:#000000;">                } else {</span></span>
<span class="line"><span style="color:#000000;">                    ranTasks = runAllTasks(0); // This will run the minimum number of tasks</span></span>
<span class="line"><span style="color:#000000;">                }</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">                if (ranTasks || strategy &gt; 0) {</span></span>
<span class="line"><span style="color:#000000;">                    if (selectCnt &gt; MIN_PREMATURE_SELECTOR_RETURNS &amp;&amp; logger.isDebugEnabled()) {</span></span>
<span class="line"><span style="color:#000000;">                        logger.debug(&quot;Selector.select() returned prematurely {} times in a row for Selector {}.&quot;,</span></span>
<span class="line"><span style="color:#000000;">                                selectCnt - 1, selector);</span></span>
<span class="line"><span style="color:#000000;">                    }</span></span>
<span class="line"><span style="color:#000000;">                    selectCnt = 0;</span></span>
<span class="line"><span style="color:#000000;">                } else if (unexpectedSelectorWakeup(selectCnt)) { // Unexpected wakeup (unusual case)</span></span>
<span class="line"><span style="color:#000000;">                    selectCnt = 0;</span></span>
<span class="line"><span style="color:#000000;">                }</span></span>
<span class="line"><span style="color:#000000;">            } catch (CancelledKeyException e) {</span></span>
<span class="line"><span style="color:#000000;">                // Harmless exception - log anyway</span></span>
<span class="line"><span style="color:#000000;">                if (logger.isDebugEnabled()) {</span></span>
<span class="line"><span style="color:#000000;">                    logger.debug(CancelledKeyException.class.getSimpleName() + &quot; raised by a Selector {} - JDK bug?&quot;,</span></span>
<span class="line"><span style="color:#000000;">                            selector, e);</span></span>
<span class="line"><span style="color:#000000;">                }</span></span>
<span class="line"><span style="color:#000000;">            } catch (Error e) {</span></span>
<span class="line"><span style="color:#000000;">                throw (Error) e;</span></span>
<span class="line"><span style="color:#000000;">            } catch (Throwable t) {</span></span>
<span class="line"><span style="color:#000000;">                handleLoopException(t);</span></span>
<span class="line"><span style="color:#000000;">            } finally {</span></span>
<span class="line"><span style="color:#000000;">                // Always handle shutdown even if the loop processing threw an exception.</span></span>
<span class="line"><span style="color:#000000;">                try {</span></span>
<span class="line"><span style="color:#000000;">                    if (isShuttingDown()) {</span></span>
<span class="line"><span style="color:#000000;">                        closeAll();</span></span>
<span class="line"><span style="color:#000000;">                        if (confirmShutdown()) {</span></span>
<span class="line"><span style="color:#000000;">                            return;</span></span>
<span class="line"><span style="color:#000000;">                        }</span></span>
<span class="line"><span style="color:#000000;">                    }</span></span>
<span class="line"><span style="color:#000000;">                } catch (Error e) {</span></span>
<span class="line"><span style="color:#000000;">                    throw (Error) e;</span></span>
<span class="line"><span style="color:#000000;">                } catch (Throwable t) {</span></span>
<span class="line"><span style="color:#000000;">                    handleLoopException(t);</span></span>
<span class="line"><span style="color:#000000;">                }</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>四、processSelectedKey处理IO事件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">private void processSelectedKey(SelectionKey k, AbstractNioChannel ch) {</span></span>
<span class="line"><span style="color:#000000;">    、//获取NioServerSocketchannel或NioSocketChannel的内部类对象NioByteUnSafe、NioMessageUnsafe</span></span>
<span class="line"><span style="color:#000000;">        final AbstractNioChannel.NioUnsafe unsafe = ch.unsafe();</span></span>
<span class="line"><span style="color:#000000;">        if (!k.isValid()) {</span></span>
<span class="line"><span style="color:#000000;">            final EventLoop eventLoop;</span></span>
<span class="line"><span style="color:#000000;">            try {</span></span>
<span class="line"><span style="color:#000000;">                eventLoop = ch.eventLoop();</span></span>
<span class="line"><span style="color:#000000;">            } catch (Throwable ignored) {</span></span>
<span class="line"><span style="color:#000000;">                // If the channel implementation throws an exception because there is no event loop, we ignore this</span></span>
<span class="line"><span style="color:#000000;">                // because we are only trying to determine if ch is registered to this event loop and thus has authority</span></span>
<span class="line"><span style="color:#000000;">                // to close ch.</span></span>
<span class="line"><span style="color:#000000;">                return;</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">            // Only close ch if ch is still registered to this EventLoop. ch could have deregistered from the event loop</span></span>
<span class="line"><span style="color:#000000;">            // and thus the SelectionKey could be cancelled as part of the deregistration process, but the channel is</span></span>
<span class="line"><span style="color:#000000;">            // still healthy and should not be closed.</span></span>
<span class="line"><span style="color:#000000;">            // See https://github.com/netty/netty/issues/5125</span></span>
<span class="line"><span style="color:#000000;">            if (eventLoop == this) {</span></span>
<span class="line"><span style="color:#000000;">                // close the channel if the key is not valid anymore</span></span>
<span class="line"><span style="color:#000000;">                unsafe.close(unsafe.voidPromise());</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">            return;</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">        try {</span></span>
<span class="line"><span style="color:#000000;">            int readyOps = k.readyOps();</span></span>
<span class="line"><span style="color:#000000;">            // We first need to call finishConnect() before try to trigger a read(...) or write(...) as otherwise</span></span>
<span class="line"><span style="color:#000000;">            // the NIO JDK channel implementation may throw a NotYetConnectedException.</span></span>
<span class="line"><span style="color:#000000;">            if ((readyOps &amp; SelectionKey.OP_CONNECT) != 0) {</span></span>
<span class="line"><span style="color:#000000;">                // remove OP_CONNECT as otherwise Selector.select(..) will always return without blocking</span></span>
<span class="line"><span style="color:#000000;">                // See https://github.com/netty/netty/issues/924</span></span>
<span class="line"><span style="color:#000000;">                int ops = k.interestOps();</span></span>
<span class="line"><span style="color:#000000;">                ops &amp;= ~SelectionKey.OP_CONNECT;</span></span>
<span class="line"><span style="color:#000000;">                k.interestOps(ops);</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">                unsafe.finishConnect();</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">            // Process OP_WRITE first as we may be able to write some queued buffers and so free memory.</span></span>
<span class="line"><span style="color:#000000;">            if ((readyOps &amp; SelectionKey.OP_WRITE) != 0) {</span></span>
<span class="line"><span style="color:#000000;">                // Call forceFlush which will also take care of clear the OP_WRITE once there is nothing left to write</span></span>
<span class="line"><span style="color:#000000;">                ch.unsafe().forceFlush();</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">            // Also check for readOps of 0 to workaround possible JDK bug which may otherwise lead</span></span>
<span class="line"><span style="color:#000000;">            // to a spin loop</span></span>
<span class="line"><span style="color:#000000;">            //处理都事件或accept事件</span></span>
<span class="line"><span style="color:#000000;">            if ((readyOps &amp; (SelectionKey.OP_READ | SelectionKey.OP_ACCEPT)) != 0 || readyOps == 0) {</span></span>
<span class="line"><span style="color:#000000;">                //调用channel内部的pipeline的fireChannelread和fireChannelReadComplete方法</span></span>
<span class="line"><span style="color:#000000;">                //处理，即交给pipeline中的handler进行处理</span></span>
<span class="line"><span style="color:#000000;">                unsafe.read();</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">        } catch (CancelledKeyException ignored) {</span></span>
<span class="line"><span style="color:#000000;">            unsafe.close(unsafe.voidPromise());</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="nioeventloopgroup" tabindex="-1"><a class="header-anchor" href="#nioeventloopgroup" aria-hidden="true">#</a> NioEventLoopGroup</h5><p>NioEventLoopGroup本身是Executor,在初始化时，会创建一个executor（也可初始化时传入,用于传到eventLoop中），此executor不是线程池</p><p>创建多个NioEventLoop，默认数量是cpu核心数的两倍。</p><blockquote><p>继承链</p></blockquote><p>NioEventLoopGroup、MultiThreadEventLoopGroup、MultiThreadEventExecutorGroup</p><blockquote><p>MultithreadEventLoopGroup</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">//next方法选取eventLoop，将channel注册到eventLoop中</span></span>
<span class="line"><span style="color:#000000;"> public ChannelFuture register(Channel channel) {</span></span>
<span class="line"><span style="color:#000000;">        return next().register(channel);</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="channelinitializer" tabindex="-1"><a class="header-anchor" href="#channelinitializer" aria-hidden="true">#</a> ChannelInitializer</h5><p>用于将自定义的handler加入到channel的pipeline中，对channel中的信息进行链式处理</p><p>使用场景：</p><ul><li>在ServerBootstrap初始化时，为监听端口accept事件的Channel添加ServerBootstrapAcceptor</li><li>在有新链接进入时，为监听客户端read/write事件的Channel添加用户自定义的ChannelHandler</li></ul><h5 id="channelpipeline" tabindex="-1"><a class="header-anchor" href="#channelpipeline" aria-hidden="true">#</a> channelPipeline</h5><p>pendingHandlerCallbackHead、head属性 解决channel还未注册到eventloop问题</p><h5 id="任务处理机制" tabindex="-1"><a class="header-anchor" href="#任务处理机制" aria-hidden="true">#</a> 任务处理机制</h5><p>netty中eventloop即处理任务队列中的任务，也处理Io事件</p><h5 id="serverbootstrap" tabindex="-1"><a class="header-anchor" href="#serverbootstrap" aria-hidden="true">#</a> serverbootstrap</h5><p>服务器端的快速配置类</p><ul><li><p>配置线程组</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">//2.创建服务端启动引导/辅助类：ServerBootstrap</span></span>
<span class="line"><span style="color:#000000;">ServerBootstrap b = new ServerBootstrap();</span></span>
<span class="line"><span style="color:#000000;">//3.给引导类配置两大线程组,确定了线程模型</span></span>
<span class="line"><span style="color:#000000;">b.group(bossGroup, workerGroup)</span></span>
<span class="line"><span style="color:#000000;">    // (非必备)打印日志</span></span>
<span class="line"><span style="color:#000000;">    .handler(new LoggingHandler(LogLevel.INFO))</span></span>
<span class="line"><span style="color:#000000;">    // 4.指定 IO 模型</span></span>
<span class="line"><span style="color:#000000;">    .channel(NioServerSocketChannel.class)</span></span>
<span class="line"><span style="color:#000000;">    .childHandler(new ChannelInitializer&lt;SocketChannel&gt;() {</span></span>
<span class="line"><span style="color:#000000;">        @Override</span></span>
<span class="line"><span style="color:#000000;">        public void initChannel(SocketChannel ch) {</span></span>
<span class="line"><span style="color:#000000;">            ChannelPipeline p = ch.pipeline();</span></span>
<span class="line"><span style="color:#000000;">            //5.可以自定义客户端消息的业务处理逻辑</span></span>
<span class="line"><span style="color:#000000;">            p.addLast(new HelloServerHandler());</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">    });</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>AbstractBootstrap</p><ul><li><p>initAndRegister</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">final ChannelFuture initAndRegister() {</span></span>
<span class="line"><span style="color:#000000;">        Channel channel = null;</span></span>
<span class="line"><span style="color:#000000;">        try {</span></span>
<span class="line"><span style="color:#000000;">            channel = channelFactory.newChannel();</span></span>
<span class="line"><span style="color:#000000;">            //channel初始化</span></span>
<span class="line"><span style="color:#000000;">            init(channel);</span></span>
<span class="line"><span style="color:#000000;">        } catch (Throwable t) {</span></span>
<span class="line"><span style="color:#000000;">        //........</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">		//config().group()获取bossgroup,调用register方法获取eventlooop,</span></span>
<span class="line"><span style="color:#000000;">    	//再调用eventloop的register方法完成注册</span></span>
<span class="line"><span style="color:#000000;">        ChannelFuture regFuture = config().group().register(channel);</span></span>
<span class="line"><span style="color:#000000;">    	//.....</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>serverbootstrap的init(channel)</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">void init(Channel channel) {</span></span>
<span class="line"><span style="color:#000000;">        setChannelOptions(channel, newOptionsArray(), logger);</span></span>
<span class="line"><span style="color:#000000;">        setAttributes(channel, newAttributesArray());</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">        ChannelPipeline p = channel.pipeline();</span></span>
<span class="line"><span style="color:#000000;">		//定义wocker局部变量信息</span></span>
<span class="line"><span style="color:#000000;">        final EventLoopGroup currentChildGroup = childGroup;</span></span>
<span class="line"><span style="color:#000000;">        final ChannelHandler currentChildHandler = childHandler;</span></span>
<span class="line"><span style="color:#000000;">        final Entry&lt;ChannelOption&lt;?&gt;, Object&gt;[] currentChildOptions = newOptionsArray(childOptions);</span></span>
<span class="line"><span style="color:#000000;">        final Entry&lt;AttributeKey&lt;?&gt;, Object&gt;[] currentChildAttrs = newAttributesArray(childAttrs);</span></span>
<span class="line"><span style="color:#000000;">		//这里若channel没有注册到eventloop，则在channel的pipeline</span></span>
<span class="line"><span style="color:#000000;">    	//暂存channelInitializer,注册成功后执行pipeline.invokeHandlerAddedIfNeeded();</span></span>
<span class="line"><span style="color:#000000;">    	//将自定义handler添加到pipeline中</span></span>
<span class="line"><span style="color:#000000;">        p.addLast(new ChannelInitializer&lt;Channel&gt;() {</span></span>
<span class="line"><span style="color:#000000;">            @Override</span></span>
<span class="line"><span style="color:#000000;">            public void initChannel(final Channel ch) {</span></span>
<span class="line"><span style="color:#000000;">                final ChannelPipeline pipeline = ch.pipeline();</span></span>
<span class="line"><span style="color:#000000;">                ChannelHandler handler = config.handler();</span></span>
<span class="line"><span style="color:#000000;">                if (handler != null) {</span></span>
<span class="line"><span style="color:#000000;">                    pipeline.addLast(handler);</span></span>
<span class="line"><span style="color:#000000;">                }</span></span>
<span class="line"><span style="color:#000000;">				//添加serversocketChannel的handler</span></span>
<span class="line"><span style="color:#000000;">                ch.eventLoop().execute(new Runnable() {</span></span>
<span class="line"><span style="color:#000000;">                    @Override</span></span>
<span class="line"><span style="color:#000000;">                    public void run() {</span></span>
<span class="line"><span style="color:#000000;">                        pipeline.addLast(new ServerBootstrapAcceptor(</span></span>
<span class="line"><span style="color:#000000;">                                ch, currentChildGroup, currentChildHandler, currentChildOptions, currentChildAttrs));</span></span>
<span class="line"><span style="color:#000000;">                    }</span></span>
<span class="line"><span style="color:#000000;">                });</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">        });</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>ServerBootstrapAcceptor</p><p>serverSocketChannel的处理器，创建socketchannel并注册到childGroup的eventloop中</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#0000FF;">public</span><span style="color:#000000;"> </span><span style="color:#267F99;">void</span><span style="color:#000000;"> </span><span style="color:#795E26;">channelRead</span><span style="color:#000000;">(</span><span style="color:#267F99;">ChannelHandlerContext</span><span style="color:#000000;"> ctx, </span><span style="color:#267F99;">Object</span><span style="color:#000000;"> msg) {</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#0000FF;">final</span><span style="color:#000000;"> </span><span style="color:#267F99;">Channel</span><span style="color:#000000;"> </span><span style="color:#001080;">child</span><span style="color:#000000;"> = (Channel) msg;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#001080;">child</span><span style="color:#000000;">.</span><span style="color:#795E26;">pipeline</span><span style="color:#000000;">().</span><span style="color:#795E26;">addLast</span><span style="color:#000000;">(childHandler);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#795E26;">setChannelOptions</span><span style="color:#000000;">(child, childOptions, logger);</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#795E26;">setAttributes</span><span style="color:#000000;">(child, childAttrs);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#AF00DB;">try</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#008000;">//如果eventloop已绑定线程，则不会创建新的线程。</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#001080;">childGroup</span><span style="color:#000000;">.</span><span style="color:#795E26;">register</span><span style="color:#000000;">(child).</span><span style="color:#795E26;">addListener</span><span style="color:#000000;">(</span><span style="color:#AF00DB;">new</span><span style="color:#000000;"> </span><span style="color:#795E26;">ChannelFutureListener</span><span style="color:#000000;">() {</span></span>
<span class="line"><span style="color:#000000;">                    @</span><span style="color:#267F99;">Override</span></span>
<span class="line"><span style="color:#000000;">                    </span><span style="color:#0000FF;">public</span><span style="color:#000000;"> </span><span style="color:#267F99;">void</span><span style="color:#000000;"> </span><span style="color:#795E26;">operationComplete</span><span style="color:#000000;">(</span><span style="color:#267F99;">ChannelFuture</span><span style="color:#000000;"> </span><span style="color:#001080;">future</span><span style="color:#000000;">) </span><span style="color:#0000FF;">throws</span><span style="color:#000000;"> </span><span style="color:#267F99;">Exception</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">                        </span><span style="color:#AF00DB;">if</span><span style="color:#000000;"> (!</span><span style="color:#001080;">future</span><span style="color:#000000;">.</span><span style="color:#795E26;">isSuccess</span><span style="color:#000000;">()) {</span></span>
<span class="line"><span style="color:#000000;">                            </span><span style="color:#795E26;">forceClose</span><span style="color:#000000;">(child, </span><span style="color:#001080;">future</span><span style="color:#000000;">.</span><span style="color:#795E26;">cause</span><span style="color:#000000;">());</span></span>
<span class="line"><span style="color:#000000;">                        }</span></span>
<span class="line"><span style="color:#000000;">                    }</span></span>
<span class="line"><span style="color:#000000;">                });</span></span>
<span class="line"><span style="color:#000000;">            } </span><span style="color:#AF00DB;">catch</span><span style="color:#000000;"> (</span><span style="color:#267F99;">Throwable</span><span style="color:#000000;"> </span><span style="color:#001080;">t</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#795E26;">forceClose</span><span style="color:#000000;">(child, t);</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h5 id="handler" tabindex="-1"><a class="header-anchor" href="#handler" aria-hidden="true">#</a> handler</h5><p>多handler需要在channelread的方法尾部添加ctx.fireChannelRead(msg);链式调用</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#0000FF;">public</span><span style="color:#000000;"> </span><span style="color:#0000FF;">class</span><span style="color:#000000;"> </span><span style="color:#267F99;">DiscardServerHandler</span><span style="color:#000000;"> </span><span style="color:#0000FF;">extends</span><span style="color:#000000;"> </span><span style="color:#267F99;">ChannelInboundHandlerAdapter</span></span>
<span class="line"><span style="color:#000000;">{</span></span>
<span class="line"><span style="color:#000000;">    @</span><span style="color:#267F99;">Override</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0000FF;">public</span><span style="color:#000000;"> </span><span style="color:#267F99;">void</span><span style="color:#000000;"> </span><span style="color:#795E26;">channelRead</span><span style="color:#000000;">(</span><span style="color:#267F99;">ChannelHandlerContext</span><span style="color:#000000;"> </span><span style="color:#001080;">ctx</span><span style="color:#000000;">, </span><span style="color:#267F99;">Object</span><span style="color:#000000;"> </span><span style="color:#001080;">msg</span><span style="color:#000000;">) { </span><span style="color:#008000;">// (2)</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#267F99;">ByteBuf</span><span style="color:#000000;"> </span><span style="color:#001080;">in</span><span style="color:#000000;"> = (ByteBuf) msg;</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#AF00DB;">try</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#AF00DB;">while</span><span style="color:#000000;"> (</span><span style="color:#001080;">in</span><span style="color:#000000;">.</span><span style="color:#795E26;">isReadable</span><span style="color:#000000;">()) { </span><span style="color:#008000;">// (1)</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#001080;">System</span><span style="color:#000000;">.</span><span style="color:#001080;">out</span><span style="color:#000000;">.</span><span style="color:#795E26;">print</span><span style="color:#000000;">((</span><span style="color:#267F99;">char</span><span style="color:#000000;">) </span><span style="color:#001080;">in</span><span style="color:#000000;">.</span><span style="color:#795E26;">readByte</span><span style="color:#000000;">());</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#001080;">System</span><span style="color:#000000;">.</span><span style="color:#001080;">out</span><span style="color:#000000;">.</span><span style="color:#795E26;">flush</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#008000;">//多handler链式调用</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#001080;">ctx</span><span style="color:#000000;">.</span><span style="color:#795E26;">fireChannelRead</span><span style="color:#000000;">(msg);</span></span>
<span class="line"><span style="color:#000000;">        } </span><span style="color:#AF00DB;">finally</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#001080;">ReferenceCountUtil</span><span style="color:#000000;">.</span><span style="color:#795E26;">release</span><span style="color:#000000;">(msg); </span><span style="color:#008000;">// (2)</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">    @</span><span style="color:#267F99;">Override</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0000FF;">public</span><span style="color:#000000;"> </span><span style="color:#267F99;">void</span><span style="color:#000000;"> </span><span style="color:#795E26;">exceptionCaught</span><span style="color:#000000;">(</span><span style="color:#267F99;">ChannelHandlerContext</span><span style="color:#000000;"> </span><span style="color:#001080;">ctx</span><span style="color:#000000;">, </span><span style="color:#267F99;">Throwable</span><span style="color:#000000;"> </span><span style="color:#001080;">cause</span><span style="color:#000000;">) { </span><span style="color:#008000;">// (4)</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#008000;">// Close the connection when an exception is raised.</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#001080;">cause</span><span style="color:#000000;">.</span><span style="color:#795E26;">printStackTrace</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#001080;">ctx</span><span style="color:#000000;">.</span><span style="color:#795E26;">close</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,58);function b(m,h){const l=i("ExternalLinkIcon");return p(),c("div",null,[v,n("p",null,[s("单线程模型、"),n("a",u,[s("多线程"),o(l)]),s("模型、主从多线程模型")]),y])}const x=e(d,[["render",b],["__file","网络通信.html.vue"]]);export{x as default};
