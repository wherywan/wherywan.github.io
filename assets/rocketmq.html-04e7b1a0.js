import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as e,f as a}from"./app-f83986bb.js";const l="/assets/rocketmq消费原理图-1a49b214.png",i={},p=a(`<h1 id="rocketmq" tabindex="-1"><a class="header-anchor" href="#rocketmq" aria-hidden="true">#</a> RocketMq</h1><p>ListenerContainerConfiguration实现SmartInitializingSingleton接口</p><p>afterSingletonsInstantiated</p><p>registerContainer</p><p>DefaultRocketMQListenerContainer</p><p>afterPropertiesSet</p><p>initRocketMQPushConsumer</p><p>start</p><p>consumer.start();</p><p>DefaultMQPushConsumer</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">@Override</span></span>
<span class="line"><span style="color:#000000;">public void start() throws MQClientException {</span></span>
<span class="line"><span style="color:#000000;">    setConsumerGroup(NamespaceUtil.wrapNamespace(this.getNamespace(), this.consumerGroup));</span></span>
<span class="line"><span style="color:#000000;">    this.defaultMQPushConsumerImpl.start();</span></span>
<span class="line"><span style="color:#000000;">    if (null != traceDispatcher) {</span></span>
<span class="line"><span style="color:#000000;">        try {</span></span>
<span class="line"><span style="color:#000000;">            traceDispatcher.start(this.getNamesrvAddr(), this.getAccessChannel());</span></span>
<span class="line"><span style="color:#000000;">        } catch (MQClientException e) {</span></span>
<span class="line"><span style="color:#000000;">            log.warn(&quot;trace dispatcher start failed &quot;, e);</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>DefaultMQPushConsumerImpl</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">public synchronized void start() throws MQClientException {</span></span>
<span class="line"><span style="color:#000000;">        switch (this.serviceState) {</span></span>
<span class="line"><span style="color:#000000;">            case CREATE_JUST:</span></span>
<span class="line"><span style="color:#000000;">                log.info(&quot;the consumer [{}] start beginning. messageModel={}, isUnitMode={}&quot;, this.defaultMQPushConsumer.getConsumerGroup(),</span></span>
<span class="line"><span style="color:#000000;">                    this.defaultMQPushConsumer.getMessageModel(), this.defaultMQPushConsumer.isUnitMode());</span></span>
<span class="line"><span style="color:#000000;">                this.serviceState = ServiceState.START_FAILED;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">                this.checkConfig();</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">                this.copySubscription();</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">                if (this.defaultMQPushConsumer.getMessageModel() == MessageModel.CLUSTERING) {</span></span>
<span class="line"><span style="color:#000000;">                    this.defaultMQPushConsumer.changeInstanceNameToPID();</span></span>
<span class="line"><span style="color:#000000;">                }</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">                this.mQClientFactory = MQClientManager.getInstance().getAndCreateMQClientInstance(this.defaultMQPushConsumer, this.rpcHook);</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">                this.rebalanceImpl.setConsumerGroup(this.defaultMQPushConsumer.getConsumerGroup());</span></span>
<span class="line"><span style="color:#000000;">                this.rebalanceImpl.setMessageModel(this.defaultMQPushConsumer.getMessageModel());</span></span>
<span class="line"><span style="color:#000000;">                this.rebalanceImpl.setAllocateMessageQueueStrategy(this.defaultMQPushConsumer.getAllocateMessageQueueStrategy());</span></span>
<span class="line"><span style="color:#000000;">                this.rebalanceImpl.setmQClientFactory(this.mQClientFactory);</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">                this.pullAPIWrapper = new PullAPIWrapper(</span></span>
<span class="line"><span style="color:#000000;">                    mQClientFactory,</span></span>
<span class="line"><span style="color:#000000;">                    this.defaultMQPushConsumer.getConsumerGroup(), isUnitMode());</span></span>
<span class="line"><span style="color:#000000;">                this.pullAPIWrapper.registerFilterMessageHook(filterMessageHookList);</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">                if (this.defaultMQPushConsumer.getOffsetStore() != null) {</span></span>
<span class="line"><span style="color:#000000;">                    this.offsetStore = this.defaultMQPushConsumer.getOffsetStore();</span></span>
<span class="line"><span style="color:#000000;">                } else {</span></span>
<span class="line"><span style="color:#000000;">                    switch (this.defaultMQPushConsumer.getMessageModel()) {</span></span>
<span class="line"><span style="color:#000000;">                        case BROADCASTING:</span></span>
<span class="line"><span style="color:#000000;">                            this.offsetStore = new LocalFileOffsetStore(this.mQClientFactory, this.defaultMQPushConsumer.getConsumerGroup());</span></span>
<span class="line"><span style="color:#000000;">                            break;</span></span>
<span class="line"><span style="color:#000000;">                        case CLUSTERING:</span></span>
<span class="line"><span style="color:#000000;">                            this.offsetStore = new RemoteBrokerOffsetStore(this.mQClientFactory, this.defaultMQPushConsumer.getConsumerGroup());</span></span>
<span class="line"><span style="color:#000000;">                            break;</span></span>
<span class="line"><span style="color:#000000;">                        default:</span></span>
<span class="line"><span style="color:#000000;">                            break;</span></span>
<span class="line"><span style="color:#000000;">                    }</span></span>
<span class="line"><span style="color:#000000;">                    this.defaultMQPushConsumer.setOffsetStore(this.offsetStore);</span></span>
<span class="line"><span style="color:#000000;">                }</span></span>
<span class="line"><span style="color:#000000;">                this.offsetStore.load();</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">                if (this.getMessageListenerInner() instanceof MessageListenerOrderly) {</span></span>
<span class="line"><span style="color:#000000;">                    this.consumeOrderly = true;</span></span>
<span class="line"><span style="color:#000000;">                    this.consumeMessageService =</span></span>
<span class="line"><span style="color:#000000;">                        new ConsumeMessageOrderlyService(this, (MessageListenerOrderly) this.getMessageListenerInner());</span></span>
<span class="line"><span style="color:#000000;">                } else if (this.getMessageListenerInner() instanceof MessageListenerConcurrently) {</span></span>
<span class="line"><span style="color:#000000;">                    this.consumeOrderly = false;</span></span>
<span class="line"><span style="color:#000000;">                    this.consumeMessageService =</span></span>
<span class="line"><span style="color:#000000;">                        new ConsumeMessageConcurrentlyService(this, (MessageListenerConcurrently) this.getMessageListenerInner());</span></span>
<span class="line"><span style="color:#000000;">                }</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">                this.consumeMessageService.start();</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">                boolean registerOK = mQClientFactory.registerConsumer(this.defaultMQPushConsumer.getConsumerGroup(), this);</span></span>
<span class="line"><span style="color:#000000;">                if (!registerOK) {</span></span>
<span class="line"><span style="color:#000000;">                    this.serviceState = ServiceState.CREATE_JUST;</span></span>
<span class="line"><span style="color:#000000;">                    this.consumeMessageService.shutdown();</span></span>
<span class="line"><span style="color:#000000;">                    throw new MQClientException(&quot;The consumer group[&quot; + this.defaultMQPushConsumer.getConsumerGroup()</span></span>
<span class="line"><span style="color:#000000;">                        + &quot;] has been created before, specify another name please.&quot; + FAQUrl.suggestTodo(FAQUrl.GROUP_NAME_DUPLICATE_URL),</span></span>
<span class="line"><span style="color:#000000;">                        null);</span></span>
<span class="line"><span style="color:#000000;">                }</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">                mQClientFactory.start();</span></span>
<span class="line"><span style="color:#000000;">                log.info(&quot;the consumer [{}] start OK.&quot;, this.defaultMQPushConsumer.getConsumerGroup());</span></span>
<span class="line"><span style="color:#000000;">                this.serviceState = ServiceState.RUNNING;</span></span>
<span class="line"><span style="color:#000000;">                break;</span></span>
<span class="line"><span style="color:#000000;">            case RUNNING:</span></span>
<span class="line"><span style="color:#000000;">            case START_FAILED:</span></span>
<span class="line"><span style="color:#000000;">            case SHUTDOWN_ALREADY:</span></span>
<span class="line"><span style="color:#000000;">                throw new MQClientException(&quot;The PushConsumer service state not OK, maybe started once, &quot;</span></span>
<span class="line"><span style="color:#000000;">                    + this.serviceState</span></span>
<span class="line"><span style="color:#000000;">                    + FAQUrl.suggestTodo(FAQUrl.CLIENT_SERVICE_NOT_OK),</span></span>
<span class="line"><span style="color:#000000;">                    null);</span></span>
<span class="line"><span style="color:#000000;">            default:</span></span>
<span class="line"><span style="color:#000000;">                break;</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">        this.updateTopicSubscribeInfoWhenSubscriptionChanged();</span></span>
<span class="line"><span style="color:#000000;">        this.mQClientFactory.checkClientInBroker();</span></span>
<span class="line"><span style="color:#000000;">        this.mQClientFactory.sendHeartbeatToAllBrokerWithLock();</span></span>
<span class="line"><span style="color:#000000;">        this.mQClientFactory.rebalanceImmediately();</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">    </span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mQClientFactory.start();</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">public void start() throws MQClientException {</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">        synchronized (this) {</span></span>
<span class="line"><span style="color:#000000;">            switch (this.serviceState) {</span></span>
<span class="line"><span style="color:#000000;">                case CREATE_JUST:</span></span>
<span class="line"><span style="color:#000000;">                    this.serviceState = ServiceState.START_FAILED;</span></span>
<span class="line"><span style="color:#000000;">                    // If not specified,looking address from name server</span></span>
<span class="line"><span style="color:#000000;">                    if (null == this.clientConfig.getNamesrvAddr()) {</span></span>
<span class="line"><span style="color:#000000;">                        this.mQClientAPIImpl.fetchNameServerAddr();</span></span>
<span class="line"><span style="color:#000000;">                    }</span></span>
<span class="line"><span style="color:#000000;">                    // Start request-response channel</span></span>
<span class="line"><span style="color:#000000;">                    this.mQClientAPIImpl.start();</span></span>
<span class="line"><span style="color:#000000;">                    // Start various schedule tasks</span></span>
<span class="line"><span style="color:#000000;">                    this.startScheduledTask();</span></span>
<span class="line"><span style="color:#000000;">                    // Start pull service</span></span>
<span class="line"><span style="color:#000000;">                    this.pullMessageService.start();</span></span>
<span class="line"><span style="color:#000000;">                    // Start rebalance service</span></span>
<span class="line"><span style="color:#000000;">                    this.rebalanceService.start();</span></span>
<span class="line"><span style="color:#000000;">                    // Start push service</span></span>
<span class="line"><span style="color:#000000;">                    this.defaultMQProducer.getDefaultMQProducerImpl().start(false);</span></span>
<span class="line"><span style="color:#000000;">                    log.info(&quot;the client factory [{}] start OK&quot;, this.clientId);</span></span>
<span class="line"><span style="color:#000000;">                    this.serviceState = ServiceState.RUNNING;</span></span>
<span class="line"><span style="color:#000000;">                    break;</span></span>
<span class="line"><span style="color:#000000;">                case RUNNING:</span></span>
<span class="line"><span style="color:#000000;">                    break;</span></span>
<span class="line"><span style="color:#000000;">                case SHUTDOWN_ALREADY:</span></span>
<span class="line"><span style="color:#000000;">                    break;</span></span>
<span class="line"><span style="color:#000000;">                case START_FAILED:</span></span>
<span class="line"><span style="color:#000000;">                    throw new MQClientException(&quot;The Factory object[&quot; + this.getClientId() + &quot;] has been created before, and failed.&quot;, null);</span></span>
<span class="line"><span style="color:#000000;">                default:</span></span>
<span class="line"><span style="color:#000000;">                    break;</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>在点击一键发货功能对库存扣减，同时生成各种单据。</p><p>在对实时库存明细扣减时，会根据拣货明细生成库存扣减消息，进行异步库存扣减</p><p>在进行相应操作时，会生成操作日志，发送到操作日志消息队列</p><p>在生成单据的报表信息，保存到es数据库</p><p>消息丢失的情况？</p><ul><li>消息发送时，内部有重试机制，同步发送，发送失败，消息存入消息表，使用xxl定时任务重新发送</li><li>数据存盘时，默认异步刷盘，即数据发送到broker服务器，还未存盘。同步刷盘</li><li>消费时，默认消费方式，消息消费结束后，发送消息到broker表示已经消费，删除消息</li></ul><p>重复消费解决方式？</p><ul><li>我的理解，存储对应消息的唯一id,设置过期时间</li><li>将已消费的消息存表</li></ul><p>解耦 削峰 异步</p><p>线程内部维护了ThreadLocal.ThreadLocalMap threadLocals = null;的变量，每开启线程向线程局部变量存值会初始化threadLocals，并以线程局部变量对象为键，null为值初始化值</p><p>每次都是获取存放在线程局部变量中的值，或设置值到线程局部变量中</p><h2 id="消费原理" tabindex="-1"><a class="header-anchor" href="#消费原理" aria-hidden="true">#</a> 消费原理</h2><ul><li>推送消息的本质是拉取消息</li></ul><h3 id="消费者侧" tabindex="-1"><a class="header-anchor" href="#消费者侧" aria-hidden="true">#</a> 消费者侧</h3><h4 id="listenercontainerconfiguration实现applicationcontextaware、smartinitializingsingleton" tabindex="-1"><a class="header-anchor" href="#listenercontainerconfiguration实现applicationcontextaware、smartinitializingsingleton" aria-hidden="true">#</a> ListenerContainerConfiguration实现ApplicationContextAware、SmartInitializingSingleton</h4><ul><li>registerContainer 注册所有监听器容器</li></ul><h4 id="defaultrocketmqlistenercontainer" tabindex="-1"><a class="header-anchor" href="#defaultrocketmqlistenercontainer" aria-hidden="true">#</a> DefaultRocketMQListenerContainer</h4><p>实现InitializingBean、SmartLifecycle接口</p><ul><li>start 优先在单例对像创建完成后，由ListenerContainerConfiguration创建监听容器并启动， 否则在容器启动后执行，启动消费者,执行DefaultMQPushConsumer的start方法</li><li>afterProperties 执行 initRocketMQPushConsumer初始化</li></ul><h2 id="defaultmqpullconsumerimpl" tabindex="-1"><a class="header-anchor" href="#defaultmqpullconsumerimpl" aria-hidden="true">#</a> DefaultMqpullConsumerImpl</h2><p>DefaultMqpullConsumerImpl实现DefaultMqpullConsumer接口，主要是start方法，启动以下服务service mqclientService,pullMessageService，rebalanceservice, consumeMessgeOrderlyservice</p><ul><li><p>消费者组</p></li><li><p>消费者ID</p></li><li><p>消息队列</p></li><li><p>分配策略</p></li><li><p>pullRequest</p></li><li><p>MessageModel 消费集群还是广播</p></li><li><p>consumeModel 有序消费还是多线程</p></li></ul><p>broker中的commit文件</p><h3 id="broker侧" tabindex="-1"><a class="header-anchor" href="#broker侧" aria-hidden="true">#</a> broker侧</h3><ul><li>PullMessageProcessor</li><li>PullRequestHoldService</li><li>ReputMessageService</li><li>notifyMessageArriving方法</li></ul><blockquote><p>消费原理图</p></blockquote><p><img src="`+l+'" alt=""></p>',43),r=[p];function t(c,o){return n(),e("div",null,r)}const v=s(i,[["render",t],["__file","rocketmq.html.vue"]]);export{v as default};
