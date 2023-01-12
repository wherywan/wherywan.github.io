import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as s,f as n}from"./app.6f24b29a.js";const l="/assets/rocketmq\u6D88\u8D39\u539F\u7406\u56FE.1a49b214.png",r={},t=n(`<h1 id="rocketmq" tabindex="-1"><a class="header-anchor" href="#rocketmq" aria-hidden="true">#</a> RocketMq</h1><p>ListenerContainerConfiguration\u5B9E\u73B0SmartInitializingSingleton\u63A5\u53E3</p><p>afterSingletonsInstantiated</p><p>registerContainer</p><p>DefaultRocketMQListenerContainer</p><p>afterPropertiesSet</p><p>initRocketMQPushConsumer</p><p>start</p><p>consumer.start();</p><p>DefaultMQPushConsumer</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@Override
public void start() throws MQClientException {
    setConsumerGroup(NamespaceUtil.wrapNamespace(this.getNamespace(), this.consumerGroup));
    this.defaultMQPushConsumerImpl.start();
    if (null != traceDispatcher) {
        try {
            traceDispatcher.start(this.getNamesrvAddr(), this.getAccessChannel());
        } catch (MQClientException e) {
            log.warn(&quot;trace dispatcher start failed &quot;, e);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>DefaultMQPushConsumerImpl</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public synchronized void start() throws MQClientException {
        switch (this.serviceState) {
            case CREATE_JUST:
                log.info(&quot;the consumer [{}] start beginning. messageModel={}, isUnitMode={}&quot;, this.defaultMQPushConsumer.getConsumerGroup(),
                    this.defaultMQPushConsumer.getMessageModel(), this.defaultMQPushConsumer.isUnitMode());
                this.serviceState = ServiceState.START_FAILED;

                this.checkConfig();

                this.copySubscription();

                if (this.defaultMQPushConsumer.getMessageModel() == MessageModel.CLUSTERING) {
                    this.defaultMQPushConsumer.changeInstanceNameToPID();
                }

                this.mQClientFactory = MQClientManager.getInstance().getAndCreateMQClientInstance(this.defaultMQPushConsumer, this.rpcHook);

                this.rebalanceImpl.setConsumerGroup(this.defaultMQPushConsumer.getConsumerGroup());
                this.rebalanceImpl.setMessageModel(this.defaultMQPushConsumer.getMessageModel());
                this.rebalanceImpl.setAllocateMessageQueueStrategy(this.defaultMQPushConsumer.getAllocateMessageQueueStrategy());
                this.rebalanceImpl.setmQClientFactory(this.mQClientFactory);

                this.pullAPIWrapper = new PullAPIWrapper(
                    mQClientFactory,
                    this.defaultMQPushConsumer.getConsumerGroup(), isUnitMode());
                this.pullAPIWrapper.registerFilterMessageHook(filterMessageHookList);

                if (this.defaultMQPushConsumer.getOffsetStore() != null) {
                    this.offsetStore = this.defaultMQPushConsumer.getOffsetStore();
                } else {
                    switch (this.defaultMQPushConsumer.getMessageModel()) {
                        case BROADCASTING:
                            this.offsetStore = new LocalFileOffsetStore(this.mQClientFactory, this.defaultMQPushConsumer.getConsumerGroup());
                            break;
                        case CLUSTERING:
                            this.offsetStore = new RemoteBrokerOffsetStore(this.mQClientFactory, this.defaultMQPushConsumer.getConsumerGroup());
                            break;
                        default:
                            break;
                    }
                    this.defaultMQPushConsumer.setOffsetStore(this.offsetStore);
                }
                this.offsetStore.load();

                if (this.getMessageListenerInner() instanceof MessageListenerOrderly) {
                    this.consumeOrderly = true;
                    this.consumeMessageService =
                        new ConsumeMessageOrderlyService(this, (MessageListenerOrderly) this.getMessageListenerInner());
                } else if (this.getMessageListenerInner() instanceof MessageListenerConcurrently) {
                    this.consumeOrderly = false;
                    this.consumeMessageService =
                        new ConsumeMessageConcurrentlyService(this, (MessageListenerConcurrently) this.getMessageListenerInner());
                }

                this.consumeMessageService.start();

                boolean registerOK = mQClientFactory.registerConsumer(this.defaultMQPushConsumer.getConsumerGroup(), this);
                if (!registerOK) {
                    this.serviceState = ServiceState.CREATE_JUST;
                    this.consumeMessageService.shutdown();
                    throw new MQClientException(&quot;The consumer group[&quot; + this.defaultMQPushConsumer.getConsumerGroup()
                        + &quot;] has been created before, specify another name please.&quot; + FAQUrl.suggestTodo(FAQUrl.GROUP_NAME_DUPLICATE_URL),
                        null);
                }

                mQClientFactory.start();
                log.info(&quot;the consumer [{}] start OK.&quot;, this.defaultMQPushConsumer.getConsumerGroup());
                this.serviceState = ServiceState.RUNNING;
                break;
            case RUNNING:
            case START_FAILED:
            case SHUTDOWN_ALREADY:
                throw new MQClientException(&quot;The PushConsumer service state not OK, maybe started once, &quot;
                    + this.serviceState
                    + FAQUrl.suggestTodo(FAQUrl.CLIENT_SERVICE_NOT_OK),
                    null);
            default:
                break;
        }

        this.updateTopicSubscribeInfoWhenSubscriptionChanged();
        this.mQClientFactory.checkClientInBroker();
        this.mQClientFactory.sendHeartbeatToAllBrokerWithLock();
        this.mQClientFactory.rebalanceImmediately();
    }
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mQClientFactory.start();</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public void start() throws MQClientException {

        synchronized (this) {
            switch (this.serviceState) {
                case CREATE_JUST:
                    this.serviceState = ServiceState.START_FAILED;
                    // If not specified,looking address from name server
                    if (null == this.clientConfig.getNamesrvAddr()) {
                        this.mQClientAPIImpl.fetchNameServerAddr();
                    }
                    // Start request-response channel
                    this.mQClientAPIImpl.start();
                    // Start various schedule tasks
                    this.startScheduledTask();
                    // Start pull service
                    this.pullMessageService.start();
                    // Start rebalance service
                    this.rebalanceService.start();
                    // Start push service
                    this.defaultMQProducer.getDefaultMQProducerImpl().start(false);
                    log.info(&quot;the client factory [{}] start OK&quot;, this.clientId);
                    this.serviceState = ServiceState.RUNNING;
                    break;
                case RUNNING:
                    break;
                case SHUTDOWN_ALREADY:
                    break;
                case START_FAILED:
                    throw new MQClientException(&quot;The Factory object[&quot; + this.getClientId() + &quot;] has been created before, and failed.&quot;, null);
                default:
                    break;
            }
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><p>\u5728\u70B9\u51FB\u4E00\u952E\u53D1\u8D27\u529F\u80FD\u5BF9\u5E93\u5B58\u6263\u51CF\uFF0C\u540C\u65F6\u751F\u6210\u5404\u79CD\u5355\u636E\u3002</p><p>\u5728\u5BF9\u5B9E\u65F6\u5E93\u5B58\u660E\u7EC6\u6263\u51CF\u65F6\uFF0C\u4F1A\u6839\u636E\u62E3\u8D27\u660E\u7EC6\u751F\u6210\u5E93\u5B58\u6263\u51CF\u6D88\u606F\uFF0C\u8FDB\u884C\u5F02\u6B65\u5E93\u5B58\u6263\u51CF</p><p>\u5728\u8FDB\u884C\u76F8\u5E94\u64CD\u4F5C\u65F6\uFF0C\u4F1A\u751F\u6210\u64CD\u4F5C\u65E5\u5FD7\uFF0C\u53D1\u9001\u5230\u64CD\u4F5C\u65E5\u5FD7\u6D88\u606F\u961F\u5217</p><p>\u5728\u751F\u6210\u5355\u636E\u7684\u62A5\u8868\u4FE1\u606F\uFF0C\u4FDD\u5B58\u5230es\u6570\u636E\u5E93</p><p>\u6D88\u606F\u4E22\u5931\u7684\u60C5\u51B5\uFF1F</p><ul><li>\u6D88\u606F\u53D1\u9001\u65F6\uFF0C\u5185\u90E8\u6709\u91CD\u8BD5\u673A\u5236\uFF0C\u540C\u6B65\u53D1\u9001\uFF0C\u53D1\u9001\u5931\u8D25\uFF0C\u6D88\u606F\u5B58\u5165\u6D88\u606F\u8868\uFF0C\u4F7F\u7528xxl\u5B9A\u65F6\u4EFB\u52A1\u91CD\u65B0\u53D1\u9001</li><li>\u6570\u636E\u5B58\u76D8\u65F6\uFF0C\u9ED8\u8BA4\u5F02\u6B65\u5237\u76D8\uFF0C\u5373\u6570\u636E\u53D1\u9001\u5230broker\u670D\u52A1\u5668\uFF0C\u8FD8\u672A\u5B58\u76D8\u3002\u540C\u6B65\u5237\u76D8</li><li>\u6D88\u8D39\u65F6\uFF0C\u9ED8\u8BA4\u6D88\u8D39\u65B9\u5F0F\uFF0C\u6D88\u606F\u6D88\u8D39\u7ED3\u675F\u540E\uFF0C\u53D1\u9001\u6D88\u606F\u5230broker\u8868\u793A\u5DF2\u7ECF\u6D88\u8D39\uFF0C\u5220\u9664\u6D88\u606F</li></ul><p>\u91CD\u590D\u6D88\u8D39\u89E3\u51B3\u65B9\u5F0F\uFF1F</p><ul><li>\u6211\u7684\u7406\u89E3\uFF0C\u5B58\u50A8\u5BF9\u5E94\u6D88\u606F\u7684\u552F\u4E00id,\u8BBE\u7F6E\u8FC7\u671F\u65F6\u95F4</li><li>\u5C06\u5DF2\u6D88\u8D39\u7684\u6D88\u606F\u5B58\u8868</li></ul><p>\u89E3\u8026 \u524A\u5CF0 \u5F02\u6B65</p><p>\u7EBF\u7A0B\u5185\u90E8\u7EF4\u62A4\u4E86ThreadLocal.ThreadLocalMap threadLocals = null;\u7684\u53D8\u91CF\uFF0C\u6BCF\u5F00\u542F\u7EBF\u7A0B\u5411\u7EBF\u7A0B\u5C40\u90E8\u53D8\u91CF\u5B58\u503C\u4F1A\u521D\u59CB\u5316threadLocals\uFF0C\u5E76\u4EE5\u7EBF\u7A0B\u5C40\u90E8\u53D8\u91CF\u5BF9\u8C61\u4E3A\u952E\uFF0Cnull\u4E3A\u503C\u521D\u59CB\u5316\u503C</p><p>\u6BCF\u6B21\u90FD\u662F\u83B7\u53D6\u5B58\u653E\u5728\u7EBF\u7A0B\u5C40\u90E8\u53D8\u91CF\u4E2D\u7684\u503C\uFF0C\u6216\u8BBE\u7F6E\u503C\u5230\u7EBF\u7A0B\u5C40\u90E8\u53D8\u91CF\u4E2D</p><h2 id="\u6D88\u8D39\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u6D88\u8D39\u539F\u7406" aria-hidden="true">#</a> \u6D88\u8D39\u539F\u7406</h2><ul><li>\u63A8\u9001\u6D88\u606F\u7684\u672C\u8D28\u662F\u62C9\u53D6\u6D88\u606F</li></ul><h3 id="\u6D88\u8D39\u8005\u4FA7" tabindex="-1"><a class="header-anchor" href="#\u6D88\u8D39\u8005\u4FA7" aria-hidden="true">#</a> \u6D88\u8D39\u8005\u4FA7</h3><p>DefaultMqpullConsumerImpl\u5B9E\u73B0DefaultMqpullConsumer\u63A5\u53E3\uFF0C\u4E3B\u8981\u662Fstart\u65B9\u6CD5\uFF0C mqclientService,pullMessageService\uFF0Crebalanceservice, consumeMessgeOrderlyservice</p><p>MessageModel</p><p>consumeModel</p><p>broker\u4E2D\u7684commit\u6587\u4EF6</p><h3 id="broker\u4FA7" tabindex="-1"><a class="header-anchor" href="#broker\u4FA7" aria-hidden="true">#</a> broker\u4FA7</h3><ul><li>PullMessageProcessor</li><li>PullRequestHoldService</li><li>ReputMessageService</li><li>notifyMessageArriving\u65B9\u6CD5</li></ul><blockquote><p>\u6D88\u8D39\u539F\u7406\u56FE</p></blockquote><p><img src="`+l+'" alt=""></p>',38),a=[t];function d(u,c){return i(),s("div",null,a)}const m=e(r,[["render",d],["__file","rocketmq.html.vue"]]);export{m as default};
