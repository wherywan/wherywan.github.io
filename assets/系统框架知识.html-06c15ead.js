import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,f as l}from"./app-f83986bb.js";const e={},i=l(`<h1 id="frame" tabindex="-1"><a class="header-anchor" href="#frame" aria-hidden="true">#</a> frame</h1><h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> mysql</h2><p>设置mysql最大连接数 set Global max_connections = 1000</p><p>批量更新</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#0000FF;">UPDATE</span><span style="color:#000000;"> wms_sn_stock3 a </span><span style="color:#0000FF;">JOIN</span><span style="color:#000000;"> wms_sn_binding_container3 b </span><span style="color:#0000FF;">on</span><span style="color:#000000;"> a.item_sn = b.item_sn </span><span style="color:#0000FF;">set</span><span style="color:#000000;"> a.container_code = b.container_code </span><span style="color:#0000FF;">where</span><span style="color:#000000;"> b.warehouse_id = </span><span style="color:#A31515;">&#39;3&#39;</span><span style="color:#000000;"> </span><span style="color:#0000FF;">and</span><span style="color:#000000;"> b.tenant_id = </span><span style="color:#A31515;">&#39;3&#39;</span><span style="color:#000000;">; </span></span>
<span class="line"></span>
<span class="line"><span style="color:#0000FF;">select</span><span style="color:#000000;"> a.item_sn,b.item_sn </span><span style="color:#0000FF;">from</span><span style="color:#000000;"> wms_sn_stock3 a </span><span style="color:#0000FF;">JOIN</span><span style="color:#000000;"> wms_sn_binding_container3 b </span><span style="color:#0000FF;">on</span><span style="color:#000000;"> a.item_sn = b.item_sn  </span><span style="color:#0000FF;">where</span><span style="color:#000000;"> b.warehouse_id = </span><span style="color:#A31515;">&#39;3&#39;</span><span style="color:#000000;"> </span><span style="color:#0000FF;">and</span><span style="color:#000000;"> b.tenant_id = </span><span style="color:#A31515;">&#39;3&#39;</span><span style="color:#000000;">; </span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>sharding不支持批量更新，嵌套查询 alibaba Coding代码规范检查 mysql-connector-java(jdbc) druid数据库连接池 使用额外工具处理数据后保存到redis中，供查询</p><h2 id="framework" tabindex="-1"><a class="header-anchor" href="#framework" aria-hidden="true">#</a> framework</h2><ul><li>基础业务泛型(mapper接口，实体类)抽象类BusinessBiz(提供可以对基础信息赋值的更新插入方法)继承基础泛型抽象类BaseBiz(注入了mapper接口，提供了基本查询，更新方法)</li><li>通用mapper接口commonMapper(继承了mapper接口，提供了基础查询和更新方法)</li><li>基础控制层泛型&lt;业务类，实体，路径中数据类型&gt;类BaseController（注入业务层，提供基础新增，删除，查询接口）</li><li>通用响应泛型类objectResponse(包含泛型data属性)继承基础响应对象baseResponse(定义status和message属性)，可以将tableobjectResponse合并到objectResponse中定义内部TableData类，定义rows,total属性</li><li>对集合分组处理CollectionUtil.split(new ArrayList&lt;&gt;(custReffIds), 50);</li></ul><blockquote><p>自定义内部类进行数据结构的组织：</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">@Data</span></span>
<span class="line"><span style="color:#000000;">    public class PackBO</span></span>
<span class="line"><span style="color:#000000;">    {</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">        EntryOrder entryOrder;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">        List&lt;EntryOrderItem&gt; entryOrderItemList = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>手动事务</p></blockquote><p>注入platformtransactionManager类型txManager，调用getTransaction(new DefaultTransactionDefinition())获取事务状态TransactionStatus，手动txManager.commit(),txmanager.rollback</p><h2 id="message" tabindex="-1"><a class="header-anchor" href="#message" aria-hidden="true">#</a> message</h2><ul><li>使用自定义消息类MqContent，封装消息数据（消息的用户信息MqUserInfo，消息体setBody)，使用fastjson转string</li><li>自定义MessageSender(注入rocketmqTemplate,进行同步或异步消息发送) rocketMQTemplate.syncSendOrderly，rocketMQTemplate.syncSend，rocketMQTemplate.asyncSend</li><li>@RocketMQMessageListener(topic = &quot;DELETE-DELIVERY-ORDER&quot;, consumerGroup = &quot;DELETE-DELIVERY-ORDER&quot;, consumeMode = ConsumeMode.ORDERLY)</li><li>消费者实现RocketMQListener，重写onMessage方法：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">MqContent mqContent = JSONObject.parseObject(message.getBody(), MqContent.class);</span></span>
<span class="line"><span style="color:#000000;">List&lt;String&gt; deliveryIds = JSONObject.parseArray(mqContent.getBody().toString(), String.class);</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> redis</h2><p>根据id查询商品信息放在redis缓存中，若修改，清除缓存，修改数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">redissonClient.getLock(id)， 多个锁实例创建多锁实例，RedissonMultiLock lock = new RedissonMultiLock(locks.toArray(new RLock[]{}));</span></span>
<span class="line"><span style="color:#000000;"> </span></span>
<span class="line"><span style="color:#000000;">tryLock </span></span>
<span class="line"><span style="color:#000000;"> </span></span>
<span class="line"><span style="color:#000000;">lock.newCondition()线程通信，signal await signalAll</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;"> return commandExecutor.evalWriteAsync(getName(), LongCodec.INSTANCE, command,</span></span>
<span class="line"><span style="color:#000000;">                  &quot;if (redis.call(&#39;exists&#39;, KEYS[1]) == 0) then &quot; +</span></span>
<span class="line"><span style="color:#000000;">                      &quot;redis.call(&#39;hset&#39;, KEYS[1], ARGV[2], 1); &quot; +</span></span>
<span class="line"><span style="color:#000000;">                      &quot;redis.call(&#39;pexpire&#39;, KEYS[1], ARGV[1]); &quot; +</span></span>
<span class="line"><span style="color:#000000;">                      &quot;return nil; &quot; +</span></span>
<span class="line"><span style="color:#000000;">                  &quot;end; &quot; +</span></span>
<span class="line"><span style="color:#000000;">                  &quot;if (redis.call(&#39;hexists&#39;, KEYS[1], ARGV[2]) == 1) then &quot; +</span></span>
<span class="line"><span style="color:#000000;">                      &quot;redis.call(&#39;hincrby&#39;, KEYS[1], ARGV[2], 1); &quot; +</span></span>
<span class="line"><span style="color:#000000;">                      &quot;redis.call(&#39;pexpire&#39;, KEYS[1], ARGV[1]); &quot; +</span></span>
<span class="line"><span style="color:#000000;">                      &quot;return nil; &quot; +</span></span>
<span class="line"><span style="color:#000000;">                  &quot;end; &quot; +</span></span>
<span class="line"><span style="color:#000000;">                  &quot;return redis.call(&#39;pttl&#39;, KEYS[1]);&quot;,</span></span>
<span class="line"><span style="color:#000000;">                    Collections.&lt;Object&gt;singletonList(getName()), internalLockLeaseTime, getLockName(threadId));</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>内部使用hash结构，hset设置值</li></ul><h2 id="beanutils" tabindex="-1"><a class="header-anchor" href="#beanutils" aria-hidden="true">#</a> beanUtils:</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">    //通过class获取Bean</span></span>
<span class="line"><span style="color:#000000;">    public static &lt;T&gt; T getBean(Class&lt;T&gt; clazz) {</span></span>
<span class="line"><span style="color:#000000;">        return getApplicationContext().getBean(clazz);</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="es" tabindex="-1"><a class="header-anchor" href="#es" aria-hidden="true">#</a> es</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">BoolQueryBuilder boolQueryBuilder = QueryBuilders.boolQuery();</span></span>
<span class="line"><span style="color:#000000;"> IndexParam indexParam = new IndexParam();</span></span>
<span class="line"><span style="color:#000000;">            indexParam.setParam(&quot;tenantId&quot;, BaseContextHandler.getTargetTenantId() != null ? BaseContextHandler.getTargetTenantId() : BaseContextHandler.getTenantID());</span></span>
<span class="line"><span style="color:#000000;">            MetaData metaData = IndexTools.getIndexType(DailyStock.class, indexParam);</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">            SearchRequest searchRequest = new SearchRequest(metaData.getSearchIndexNames());</span></span>
<span class="line"><span style="color:#000000;">            SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();</span></span>
<span class="line"><span style="color:#000000;">            searchSourceBuilder.query(boolQueryBuilder);</span></span>
<span class="line"><span style="color:#000000;">            searchSourceBuilder.from(currentPage);</span></span>
<span class="line"><span style="color:#000000;">            searchSourceBuilder.size(pageSize);</span></span>
<span class="line"><span style="color:#000000;">            searchSourceBuilder.sort(SortBuilders.fieldSort(&quot;month&quot;).order(SortOrder.DESC));</span></span>
<span class="line"><span style="color:#000000;">            searchRequest.source(searchSourceBuilder);</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">            SearchResponse searchResponse = els.search(searchRequest);</span></span>
<span class="line"><span style="color:#000000;">            SearchHits hits = searchResponse.getHits();</span></span>
<span class="line"><span style="color:#000000;">            SearchHit[] searchHits = hits.getHits();</span></span>
<span class="line"><span style="color:#000000;">            for (SearchHit hit : searchHits)</span></span>
<span class="line"><span style="color:#000000;">            {</span></span>
<span class="line"><span style="color:#000000;">                DailyStock dailyStock = JsonUtils.string2Obj(hit.getSourceAsString(), DailyStock.class);</span></span>
<span class="line"><span style="color:#000000;">                resultList.add(dailyStock);</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">            // 查询总数</span></span>
<span class="line"><span style="color:#000000;">            long count = els.count(boolQueryBuilder, DailyStock.class, indexParam);</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>操作es的api接口ElasticsearchTemplate，核心RestHighLevelClient client;包含saveAndRefresh, deleteById,deleteByCondition,scroll查询，原始查询search可分页</p></li><li><p>elasticsearch-rest-high-level-client-6.7.2.jar</p></li><li><p>使用索引名称，构建查询请求SearchRequest，如SearchRequest searchRequest = new SearchRequest(metaData.getSearchIndexNames());</p></li><li><p>构建查询来源SearchSourceBuilder，支持分页查询：searchSourceBuilder.query(boolQueryBuilder);searchSourceBuilder.from(currentPage);searchSourceBuilder.size(pageSize);</p></li><li><p>查询请求设置设置查询来源searchRequest.source(searchSourceBuilder);</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">SearchResponse searchResponse = els.search(searchRequest);</span></span>
<span class="line"><span style="color:#000000;">SearchHits hits = searchResponse.getHits();</span></span>
<span class="line"><span style="color:#000000;">SearchHit[] searchHits = hits.getHits();</span></span>
<span class="line"><span style="color:#000000;">for (SearchHit hit : searchHits)</span></span>
<span class="line"><span style="color:#000000;">{</span></span>
<span class="line"><span style="color:#000000;">  DailyStock dailyStock = JsonUtils.string2Obj(hit.getSourceAsString(), DailyStock.class);</span></span>
<span class="line"><span style="color:#000000;">  resultList.add(dailyStock);</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>查询总数 long count = els.count(boolQueryBuilder, DailyStock.class, indexParam);</p></blockquote><blockquote><p>查询json:</p></blockquote><div class="language-json line-numbers-mode" data-ext="json"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">{</span></span>
<span class="line"><span style="color:#000000;">  </span><span style="color:#0451A5;">&quot;query&quot;</span><span style="color:#000000;">: {</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0451A5;">&quot;bool&quot;</span><span style="color:#000000;">: {</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#0451A5;">&quot;must&quot;</span><span style="color:#000000;">: [</span></span>
<span class="line"><span style="color:#000000;">        {</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#0451A5;">&quot;term&quot;</span><span style="color:#000000;">: {</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;warehouseId&quot;</span><span style="color:#000000;">: {</span></span>
<span class="line"><span style="color:#000000;">              </span><span style="color:#0451A5;">&quot;value&quot;</span><span style="color:#000000;">: </span><span style="color:#A31515;">&quot;69&quot;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">              </span><span style="color:#0451A5;">&quot;boost&quot;</span><span style="color:#000000;">: </span><span style="color:#098658;">1</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">          }</span></span>
<span class="line"><span style="color:#000000;">        },</span></span>
<span class="line"><span style="color:#000000;">        {</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#0451A5;">&quot;term&quot;</span><span style="color:#000000;">: {</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;id&quot;</span><span style="color:#000000;">: {</span></span>
<span class="line"><span style="color:#000000;">              </span><span style="color:#0451A5;">&quot;value&quot;</span><span style="color:#000000;">: </span><span style="color:#A31515;">&quot;479968903020281856&quot;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">              </span><span style="color:#0451A5;">&quot;boost&quot;</span><span style="color:#000000;">: </span><span style="color:#098658;">1</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">          }</span></span>
<span class="line"><span style="color:#000000;">        },</span></span>
<span class="line"><span style="color:#000000;">        {</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#0451A5;">&quot;terms&quot;</span><span style="color:#000000;">: {</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;customerId&quot;</span><span style="color:#000000;">: [</span></span>
<span class="line"><span style="color:#000000;">              </span><span style="color:#A31515;">&quot;142&quot;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">              </span><span style="color:#A31515;">&quot;141&quot;</span></span>
<span class="line"><span style="color:#000000;">            ],</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;boost&quot;</span><span style="color:#000000;">: </span><span style="color:#098658;">1</span></span>
<span class="line"><span style="color:#000000;">          }</span></span>
<span class="line"><span style="color:#000000;">        },</span></span>
<span class="line"><span style="color:#000000;">        {</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#0451A5;">&quot;range&quot;</span><span style="color:#000000;">: {</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;crtTime&quot;</span><span style="color:#000000;">: {</span></span>
<span class="line"><span style="color:#000000;">              </span><span style="color:#0451A5;">&quot;from&quot;</span><span style="color:#000000;">: </span><span style="color:#A31515;">&quot;2022-02-16T00:00:00.000Z&quot;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">              </span><span style="color:#0451A5;">&quot;to&quot;</span><span style="color:#000000;">: </span><span style="color:#0000FF;">null</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">              </span><span style="color:#0451A5;">&quot;include_lower&quot;</span><span style="color:#000000;">: </span><span style="color:#0000FF;">true</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">              </span><span style="color:#0451A5;">&quot;include_upper&quot;</span><span style="color:#000000;">: </span><span style="color:#0000FF;">true</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">              </span><span style="color:#0451A5;">&quot;boost&quot;</span><span style="color:#000000;">: </span><span style="color:#098658;">1</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">          }</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">      ],</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#0451A5;">&quot;adjust_pure_negative&quot;</span><span style="color:#000000;">: </span><span style="color:#0000FF;">true</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#0451A5;">&quot;boost&quot;</span><span style="color:#000000;">: </span><span style="color:#098658;">1</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">  }</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>es查询命令</p></blockquote><p>curl -X POST &#39;http://192.168.1.39:8081/entryorderitem-58-2021/_search&#39; -H &#39;content-Type:application/json&#39; -d &#39;</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">{</span></span>
<span class="line"><span style="color:#0451A5;">&quot;query&quot;</span><span style="color:#000000;">: {</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0451A5;">&quot;match&quot;</span><span style="color:#000000;">: {</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#0451A5;">&quot;entryCatalogId&quot;</span><span style="color:#000000;">: </span><span style="color:#A31515;">&quot;20211204&quot;</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">  }</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>删除命令</p></blockquote><p>curl -X POST &#39;http://192.168.1.39:9200/forum/_delete_by_query&#39; -H &#39;content-Type:application/json&#39; -d &#39;</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">{</span></span>
<span class="line"><span style="color:#0451A5;">&quot;query&quot;</span><span style="color:#000000;">: {</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0451A5;">&quot;match&quot;</span><span style="color:#000000;">: {</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#0451A5;">&quot;name&quot;</span><span style="color:#000000;">: </span><span style="color:#A31515;">&quot;测试&quot;</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">  }</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cache" tabindex="-1"><a class="header-anchor" href="#cache" aria-hidden="true">#</a> cache</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#000000;">    &lt;groupId&gt;com.sun.mail&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#000000;">    &lt;artifactId&gt;javax.mail&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#000000;">    &lt;version&gt;1.6.2&lt;/version&gt;</span></span>
<span class="line"><span style="color:#000000;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">private static final TimedCache&lt;String, CustomerVO&gt; CUSTOMER_CACHE =</span></span>
<span class="line"><span style="color:#000000;">CacheUtil.newTimedCache(DateUnit.SECOND.getMillis()  * 120);</span></span>
<span class="line"><span style="color:#000000;">@PostConstruct</span></span>
<span class="line"><span style="color:#000000;">public void init()</span></span>
<span class="line"><span style="color:#000000;">{</span></span>
<span class="line"><span style="color:#000000;">    ITEM_CACHE.schedulePrune(10);</span></span>
<span class="line"><span style="color:#000000;">    ORDER_CACHE.schedulePrune(10);</span></span>
<span class="line"><span style="color:#000000;">    ORDER_ITEM_CACHE.schedulePrune(10);</span></span>
<span class="line"><span style="color:#000000;">    PICK_TASK_CACHE.schedulePrune(10);</span></span>
<span class="line"><span style="color:#000000;">    PICK_LOCATION_CACHE.schedulePrune(10);</span></span>
<span class="line"><span style="color:#000000;">    ITEM_STOCK_CACHE.schedulePrune(10);</span></span>
<span class="line"><span style="color:#000000;">    CUSTOMER_CACHE.schedulePrune(10);</span></span>
<span class="line"><span style="color:#000000;">    WAREHOUSE_CACHE.schedulePrune(10);</span></span>
<span class="line"><span style="color:#000000;">    LOCATION_CACHE.schedulePrune(10);</span></span>
<span class="line"><span style="color:#000000;">    USER_CACHE.schedulePrune(10);</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;">使用hutool的CacheUtil的定时缓存</span></span>
<span class="line"><span style="color:#000000;">    并开启定时清除任务</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="日志" tabindex="-1"><a class="header-anchor" href="#日志" aria-hidden="true">#</a> 日志</h2><p>MDC Threadlocal</p><h2 id="事务一致" tabindex="-1"><a class="header-anchor" href="#事务一致" aria-hidden="true">#</a> 事务一致</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">params.put(&quot;replId&quot;, replenishmentTask.getReplId());</span></span>
<span class="line"><span style="color:#000000;">// 应补数量 &gt; 存储储位可用库存，则存储储位可用库存有多少补多少，否则，补到应补数量</span></span>
<span class="line"><span style="color:#000000;">params.put(&quot;shouldReplQuantity&quot;, allocateItemStock.getAllocateQty());</span></span>
<span class="line"><span style="color:#000000;">params.put(&quot;oldVersion&quot;, replenishmentTask.getVersion());</span></span>
<span class="line"><span style="color:#000000;">int flag = updateQuantity(params);</span></span>
<span class="line"><span style="color:#000000;">if (0 == flag)</span></span>
<span class="line"><span style="color:#000000;">{</span></span>
<span class="line"><span style="color:#000000;">log.info(&quot;补货任务并发,事物回滚&quot;);</span></span>
<span class="line"><span style="color:#000000;">throw new BusinessException(&quot;补货任务并发&quot;);</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="try-catch-finally" tabindex="-1"><a class="header-anchor" href="#try-catch-finally" aria-hidden="true">#</a> try catch finally</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">try</span></span>
<span class="line"><span style="color:#000000;">{</span></span>
<span class="line"><span style="color:#000000;">    // 执行上架操作</span></span>
<span class="line"><span style="color:#000000;">    shelveOperator.service(shelveSubmitDTO);</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;">finally</span></span>
<span class="line"><span style="color:#000000;">{</span></span>
<span class="line"><span style="color:#000000;">    redisDistributedLock.delete(orderId);</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">库存分配锁定库存</span></span>
<span class="line"><span style="color:#000000;">已订单明细维度，一条明细对应多条实时库存明细</span></span>
<span class="line"><span style="color:#000000;">根据分配请求AllocateRequest和AllocateResponse构建拣货请求</span></span>
<span class="line"><span style="color:#000000;">一个拣货明细对应一条库存明细，可用量减少，锁定量增加</span></span>
<span class="line"><span style="color:#000000;">生成拣货明细</span></span>
<span class="line"><span style="color:#000000;">库存交易日志</span></span>
<span class="line"><span style="color:#000000;">更新发货单明细已分配数量</span></span>
<span class="line"><span style="color:#000000;">更新发货单状态</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>DefaultRocketMQListenerContainer</p><p>AuthClientRunner</p><p>AuthServerRunner</p>`,47),p=[i];function o(c,r){return n(),a("div",null,p)}const u=s(e,[["render",o],["__file","系统框架知识.html.vue"]]);export{u as default};
