import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as e,e as a}from"./app-hoN0JGLf.js";const i="/assets/rocketmq%E6%B6%88%E8%B4%B9%E5%8E%9F%E7%90%86%E5%9B%BE-BCT4zSP-.png",l={},p=a(`<h1 id="rocketmq" tabindex="-1"><a class="header-anchor" href="#rocketmq"><span>RocketMq</span></a></h1><p>ListenerContainerConfiguration实现SmartInitializingSingleton接口</p><p>afterSingletonsInstantiated</p><p>registerContainer</p><p>DefaultRocketMQListenerContainer</p><p>afterPropertiesSet</p><p>initRocketMQPushConsumer</p><p>start</p><p>consumer.start();</p><p>DefaultMQPushConsumer</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>@Override</span></span>
<span class="line"><span>public void start() throws MQClientException {</span></span>
<span class="line"><span>    setConsumerGroup(NamespaceUtil.wrapNamespace(this.getNamespace(), this.consumerGroup));</span></span>
<span class="line"><span>    this.defaultMQPushConsumerImpl.start();</span></span>
<span class="line"><span>    if (null != traceDispatcher) {</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            traceDispatcher.start(this.getNamesrvAddr(), this.getAccessChannel());</span></span>
<span class="line"><span>        } catch (MQClientException e) {</span></span>
<span class="line"><span>            log.warn(&quot;trace dispatcher start failed &quot;, e);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>DefaultMQPushConsumerImpl</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>public synchronized void start() throws MQClientException {</span></span>
<span class="line"><span>        switch (this.serviceState) {</span></span>
<span class="line"><span>            case CREATE_JUST:</span></span>
<span class="line"><span>                log.info(&quot;the consumer [{}] start beginning. messageModel={}, isUnitMode={}&quot;, this.defaultMQPushConsumer.getConsumerGroup(),</span></span>
<span class="line"><span>                    this.defaultMQPushConsumer.getMessageModel(), this.defaultMQPushConsumer.isUnitMode());</span></span>
<span class="line"><span>                this.serviceState = ServiceState.START_FAILED;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                this.checkConfig();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                this.copySubscription();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                if (this.defaultMQPushConsumer.getMessageModel() == MessageModel.CLUSTERING) {</span></span>
<span class="line"><span>                    this.defaultMQPushConsumer.changeInstanceNameToPID();</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                this.mQClientFactory = MQClientManager.getInstance().getAndCreateMQClientInstance(this.defaultMQPushConsumer, this.rpcHook);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                this.rebalanceImpl.setConsumerGroup(this.defaultMQPushConsumer.getConsumerGroup());</span></span>
<span class="line"><span>                this.rebalanceImpl.setMessageModel(this.defaultMQPushConsumer.getMessageModel());</span></span>
<span class="line"><span>                this.rebalanceImpl.setAllocateMessageQueueStrategy(this.defaultMQPushConsumer.getAllocateMessageQueueStrategy());</span></span>
<span class="line"><span>                this.rebalanceImpl.setmQClientFactory(this.mQClientFactory);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                this.pullAPIWrapper = new PullAPIWrapper(</span></span>
<span class="line"><span>                    mQClientFactory,</span></span>
<span class="line"><span>                    this.defaultMQPushConsumer.getConsumerGroup(), isUnitMode());</span></span>
<span class="line"><span>                this.pullAPIWrapper.registerFilterMessageHook(filterMessageHookList);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                if (this.defaultMQPushConsumer.getOffsetStore() != null) {</span></span>
<span class="line"><span>                    this.offsetStore = this.defaultMQPushConsumer.getOffsetStore();</span></span>
<span class="line"><span>                } else {</span></span>
<span class="line"><span>                    switch (this.defaultMQPushConsumer.getMessageModel()) {</span></span>
<span class="line"><span>                        case BROADCASTING:</span></span>
<span class="line"><span>                            this.offsetStore = new LocalFileOffsetStore(this.mQClientFactory, this.defaultMQPushConsumer.getConsumerGroup());</span></span>
<span class="line"><span>                            break;</span></span>
<span class="line"><span>                        case CLUSTERING:</span></span>
<span class="line"><span>                            this.offsetStore = new RemoteBrokerOffsetStore(this.mQClientFactory, this.defaultMQPushConsumer.getConsumerGroup());</span></span>
<span class="line"><span>                            break;</span></span>
<span class="line"><span>                        default:</span></span>
<span class="line"><span>                            break;</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                    this.defaultMQPushConsumer.setOffsetStore(this.offsetStore);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                this.offsetStore.load();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                if (this.getMessageListenerInner() instanceof MessageListenerOrderly) {</span></span>
<span class="line"><span>                    this.consumeOrderly = true;</span></span>
<span class="line"><span>                    this.consumeMessageService =</span></span>
<span class="line"><span>                        new ConsumeMessageOrderlyService(this, (MessageListenerOrderly) this.getMessageListenerInner());</span></span>
<span class="line"><span>                } else if (this.getMessageListenerInner() instanceof MessageListenerConcurrently) {</span></span>
<span class="line"><span>                    this.consumeOrderly = false;</span></span>
<span class="line"><span>                    this.consumeMessageService =</span></span>
<span class="line"><span>                        new ConsumeMessageConcurrentlyService(this, (MessageListenerConcurrently) this.getMessageListenerInner());</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                this.consumeMessageService.start();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                boolean registerOK = mQClientFactory.registerConsumer(this.defaultMQPushConsumer.getConsumerGroup(), this);</span></span>
<span class="line"><span>                if (!registerOK) {</span></span>
<span class="line"><span>                    this.serviceState = ServiceState.CREATE_JUST;</span></span>
<span class="line"><span>                    this.consumeMessageService.shutdown();</span></span>
<span class="line"><span>                    throw new MQClientException(&quot;The consumer group[&quot; + this.defaultMQPushConsumer.getConsumerGroup()</span></span>
<span class="line"><span>                        + &quot;] has been created before, specify another name please.&quot; + FAQUrl.suggestTodo(FAQUrl.GROUP_NAME_DUPLICATE_URL),</span></span>
<span class="line"><span>                        null);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                mQClientFactory.start();</span></span>
<span class="line"><span>                log.info(&quot;the consumer [{}] start OK.&quot;, this.defaultMQPushConsumer.getConsumerGroup());</span></span>
<span class="line"><span>                this.serviceState = ServiceState.RUNNING;</span></span>
<span class="line"><span>                break;</span></span>
<span class="line"><span>            case RUNNING:</span></span>
<span class="line"><span>            case START_FAILED:</span></span>
<span class="line"><span>            case SHUTDOWN_ALREADY:</span></span>
<span class="line"><span>                throw new MQClientException(&quot;The PushConsumer service state not OK, maybe started once, &quot;</span></span>
<span class="line"><span>                    + this.serviceState</span></span>
<span class="line"><span>                    + FAQUrl.suggestTodo(FAQUrl.CLIENT_SERVICE_NOT_OK),</span></span>
<span class="line"><span>                    null);</span></span>
<span class="line"><span>            default:</span></span>
<span class="line"><span>                break;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        this.updateTopicSubscribeInfoWhenSubscriptionChanged();</span></span>
<span class="line"><span>        this.mQClientFactory.checkClientInBroker();</span></span>
<span class="line"><span>        this.mQClientFactory.sendHeartbeatToAllBrokerWithLock();</span></span>
<span class="line"><span>        this.mQClientFactory.rebalanceImmediately();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mQClientFactory.start();</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>public void start() throws MQClientException {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        synchronized (this) {</span></span>
<span class="line"><span>            switch (this.serviceState) {</span></span>
<span class="line"><span>                case CREATE_JUST:</span></span>
<span class="line"><span>                    this.serviceState = ServiceState.START_FAILED;</span></span>
<span class="line"><span>                    // If not specified,looking address from name server</span></span>
<span class="line"><span>                    if (null == this.clientConfig.getNamesrvAddr()) {</span></span>
<span class="line"><span>                        this.mQClientAPIImpl.fetchNameServerAddr();</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                    // Start request-response channel</span></span>
<span class="line"><span>                    this.mQClientAPIImpl.start();</span></span>
<span class="line"><span>                    // Start various schedule tasks</span></span>
<span class="line"><span>                    this.startScheduledTask();</span></span>
<span class="line"><span>                    // Start pull service</span></span>
<span class="line"><span>                    this.pullMessageService.start();</span></span>
<span class="line"><span>                    // Start rebalance service</span></span>
<span class="line"><span>                    this.rebalanceService.start();</span></span>
<span class="line"><span>                    // Start push service</span></span>
<span class="line"><span>                    this.defaultMQProducer.getDefaultMQProducerImpl().start(false);</span></span>
<span class="line"><span>                    log.info(&quot;the client factory [{}] start OK&quot;, this.clientId);</span></span>
<span class="line"><span>                    this.serviceState = ServiceState.RUNNING;</span></span>
<span class="line"><span>                    break;</span></span>
<span class="line"><span>                case RUNNING:</span></span>
<span class="line"><span>                    break;</span></span>
<span class="line"><span>                case SHUTDOWN_ALREADY:</span></span>
<span class="line"><span>                    break;</span></span>
<span class="line"><span>                case START_FAILED:</span></span>
<span class="line"><span>                    throw new MQClientException(&quot;The Factory object[&quot; + this.getClientId() + &quot;] has been created before, and failed.&quot;, null);</span></span>
<span class="line"><span>                default:</span></span>
<span class="line"><span>                    break;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2><p>在点击一键发货功能对库存扣减，同时生成各种单据。</p><p>在对实时库存明细扣减时，会根据拣货明细生成库存扣减消息，进行异步库存扣减</p><p>在进行相应操作时，会生成操作日志，发送到操作日志消息队列</p><p>在生成单据的报表信息，保存到es数据库</p><p>消息丢失的情况？</p><ul><li>消息发送时，内部有重试机制，同步发送，发送失败，消息存入消息表，使用xxl定时任务重新发送</li><li>数据存盘时，默认异步刷盘，即数据发送到broker服务器，还未存盘。同步刷盘</li><li>消费时，默认消费方式，消息消费结束后，发送消息到broker表示已经消费，删除消息</li></ul><p>重复消费解决方式？</p><ul><li>我的理解，存储对应消息的唯一id,设置过期时间</li><li>将已消费的消息存表</li></ul><p>解耦 削峰 异步</p><p>线程内部维护了ThreadLocal.ThreadLocalMap threadLocals = null;的变量，每开启线程向线程局部变量存值会初始化threadLocals，并以线程局部变量对象为键，null为值初始化值</p><p>每次都是获取存放在线程局部变量中的值，或设置值到线程局部变量中</p><h2 id="消费原理" tabindex="-1"><a class="header-anchor" href="#消费原理"><span>消费原理</span></a></h2><ul><li>推送消息的本质是拉取消息</li></ul><h3 id="消费者侧" tabindex="-1"><a class="header-anchor" href="#消费者侧"><span>消费者侧</span></a></h3><h4 id="listenercontainerconfiguration实现applicationcontextaware、smartinitializingsingleton" tabindex="-1"><a class="header-anchor" href="#listenercontainerconfiguration实现applicationcontextaware、smartinitializingsingleton"><span>ListenerContainerConfiguration实现ApplicationContextAware、SmartInitializingSingleton</span></a></h4><ul><li>registerContainer 注册所有监听器容器</li></ul><h4 id="defaultrocketmqlistenercontainer" tabindex="-1"><a class="header-anchor" href="#defaultrocketmqlistenercontainer"><span>DefaultRocketMQListenerContainer</span></a></h4><p>实现InitializingBean、SmartLifecycle接口</p><ul><li>start 优先在单例对像创建完成后，由ListenerContainerConfiguration创建监听容器并启动， 否则在容器启动后执行，启动消费者,执行DefaultMQPushConsumer的start方法</li><li>afterProperties 执行 initRocketMQPushConsumer初始化</li></ul><h2 id="defaultmqpullconsumerimpl" tabindex="-1"><a class="header-anchor" href="#defaultmqpullconsumerimpl"><span>DefaultMqpullConsumerImpl</span></a></h2><p>DefaultMqpullConsumerImpl实现DefaultMqpullConsumer接口，主要是start方法，启动以下服务service mqclientService,pullMessageService，rebalanceservice, consumeMessgeOrderlyservice</p><ul><li><p>消费者组</p></li><li><p>消费者ID</p></li><li><p>消息队列</p></li><li><p>分配策略</p></li><li><p>pullRequest</p></li><li><p>MessageModel 消费集群还是广播</p></li><li><p>consumeModel 有序消费还是多线程</p></li></ul><p>broker中的commit文件</p><h3 id="broker侧" tabindex="-1"><a class="header-anchor" href="#broker侧"><span>broker侧</span></a></h3><ul><li>PullMessageProcessor</li><li>PullRequestHoldService</li><li>ReputMessageService</li><li>notifyMessageArriving方法</li></ul><blockquote><p>消费原理图</p></blockquote><p><img src="`+i+'" alt=""></p>',43),t=[p];function r(c,d){return n(),e("div",null,t)}const v=s(l,[["render",r],["__file","rocketmq.html.vue"]]),m=JSON.parse('{"path":"/note/%E4%B8%AD%E9%97%B4%E4%BB%B6/rocketmq.html","title":"RocketMq","lang":"zh-CN","frontmatter":{"description":"RocketMq ListenerContainerConfiguration实现SmartInitializingSingleton接口 afterSingletonsInstantiated registerContainer DefaultRocketMQListenerContainer afterPropertiesSet initRocke...","head":[["meta",{"property":"og:url","content":"https://wherywan.github.io/note/%E4%B8%AD%E9%97%B4%E4%BB%B6/rocketmq.html"}],["meta",{"property":"og:site_name","content":"HONG_JI"}],["meta",{"property":"og:title","content":"RocketMq"}],["meta",{"property":"og:description","content":"RocketMq ListenerContainerConfiguration实现SmartInitializingSingleton接口 afterSingletonsInstantiated registerContainer DefaultRocketMQListenerContainer afterPropertiesSet initRocke..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-12T18:03:19.000Z"}],["meta",{"property":"article:author","content":"wanhongji"}],["meta",{"property":"article:modified_time","content":"2023-03-12T18:03:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RocketMq\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-12T18:03:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"wanhongji\\"}]}"]]},"headers":[{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":2,"title":"消费原理","slug":"消费原理","link":"#消费原理","children":[{"level":3,"title":"消费者侧","slug":"消费者侧","link":"#消费者侧","children":[]}]},{"level":2,"title":"DefaultMqpullConsumerImpl","slug":"defaultmqpullconsumerimpl","link":"#defaultmqpullconsumerimpl","children":[{"level":3,"title":"broker侧","slug":"broker侧","link":"#broker侧","children":[]}]}],"git":{"createdTime":1652023673000,"updatedTime":1678644199000,"contributors":[{"name":"wanhongji","email":"wherywan@163.com","commits":3},{"name":"wanhongji","email":"wan_hongji@163.com","commits":1}]},"readingTime":{"minutes":2.72,"words":816},"filePathRelative":"note/中间件/rocketmq.md","localizedDate":"2022年5月8日","excerpt":"\\n<p>ListenerContainerConfiguration实现SmartInitializingSingleton接口</p>\\n<p>afterSingletonsInstantiated</p>\\n<p>registerContainer</p>\\n<p>DefaultRocketMQListenerContainer</p>\\n<p>afterPropertiesSet</p>\\n<p>initRocketMQPushConsumer</p>\\n<p>start</p>\\n<p>consumer.start();</p>\\n<p>DefaultMQPushConsumer</p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"shiki light-plus\\" style=\\"background-color:#FFFFFF;color:#000000\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span>@Override</span></span>\\n<span class=\\"line\\"><span>public void start() throws MQClientException {</span></span>\\n<span class=\\"line\\"><span>    setConsumerGroup(NamespaceUtil.wrapNamespace(this.getNamespace(), this.consumerGroup));</span></span>\\n<span class=\\"line\\"><span>    this.defaultMQPushConsumerImpl.start();</span></span>\\n<span class=\\"line\\"><span>    if (null != traceDispatcher) {</span></span>\\n<span class=\\"line\\"><span>        try {</span></span>\\n<span class=\\"line\\"><span>            traceDispatcher.start(this.getNamesrvAddr(), this.getAccessChannel());</span></span>\\n<span class=\\"line\\"><span>        } catch (MQClientException e) {</span></span>\\n<span class=\\"line\\"><span>            log.warn(\\"trace dispatcher start failed \\", e);</span></span>\\n<span class=\\"line\\"><span>        }</span></span>\\n<span class=\\"line\\"><span>    }</span></span>\\n<span class=\\"line\\"><span>}</span></span>\\n<span class=\\"line\\"><span></span></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{v as comp,m as data};
