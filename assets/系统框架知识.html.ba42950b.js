import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as e,f as a}from"./app.6f24b29a.js";const i={},t=a(`<h1 id="frame" tabindex="-1"><a class="header-anchor" href="#frame" aria-hidden="true">#</a> frame</h1><h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> mysql</h2><p>\u8BBE\u7F6Emysql\u6700\u5927\u8FDE\u63A5\u6570 set Global max_connections = 1000</p><p>\u6279\u91CF\u66F4\u65B0</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">UPDATE</span> wms_sn_stock3 a <span class="token keyword">JOIN</span> wms_sn_binding_container3 b <span class="token keyword">on</span> a<span class="token punctuation">.</span>item_sn <span class="token operator">=</span> b<span class="token punctuation">.</span>item_sn <span class="token keyword">set</span> a<span class="token punctuation">.</span>container_code <span class="token operator">=</span> b<span class="token punctuation">.</span>container_code <span class="token keyword">where</span> b<span class="token punctuation">.</span>warehouse_id <span class="token operator">=</span> <span class="token string">&#39;3&#39;</span> <span class="token operator">and</span> b<span class="token punctuation">.</span>tenant_id <span class="token operator">=</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">;</span> 

<span class="token keyword">select</span> a<span class="token punctuation">.</span>item_sn<span class="token punctuation">,</span>b<span class="token punctuation">.</span>item_sn <span class="token keyword">from</span> wms_sn_stock3 a <span class="token keyword">JOIN</span> wms_sn_binding_container3 b <span class="token keyword">on</span> a<span class="token punctuation">.</span>item_sn <span class="token operator">=</span> b<span class="token punctuation">.</span>item_sn  <span class="token keyword">where</span> b<span class="token punctuation">.</span>warehouse_id <span class="token operator">=</span> <span class="token string">&#39;3&#39;</span> <span class="token operator">and</span> b<span class="token punctuation">.</span>tenant_id <span class="token operator">=</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">;</span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>sharding\u4E0D\u652F\u6301\u6279\u91CF\u66F4\u65B0\uFF0C\u5D4C\u5957\u67E5\u8BE2 alibaba Coding\u4EE3\u7801\u89C4\u8303\u68C0\u67E5 mysql-connector-java(jdbc) druid\u6570\u636E\u5E93\u8FDE\u63A5\u6C60 \u4F7F\u7528\u989D\u5916\u5DE5\u5177\u5904\u7406\u6570\u636E\u540E\u4FDD\u5B58\u5230redis\u4E2D\uFF0C\u4F9B\u67E5\u8BE2</p><h2 id="framework" tabindex="-1"><a class="header-anchor" href="#framework" aria-hidden="true">#</a> framework</h2><ul><li>\u57FA\u7840\u4E1A\u52A1\u6CDB\u578B(mapper\u63A5\u53E3\uFF0C\u5B9E\u4F53\u7C7B)\u62BD\u8C61\u7C7BBusinessBiz(\u63D0\u4F9B\u53EF\u4EE5\u5BF9\u57FA\u7840\u4FE1\u606F\u8D4B\u503C\u7684\u66F4\u65B0\u63D2\u5165\u65B9\u6CD5)\u7EE7\u627F\u57FA\u7840\u6CDB\u578B\u62BD\u8C61\u7C7BBaseBiz(\u6CE8\u5165\u4E86mapper\u63A5\u53E3\uFF0C\u63D0\u4F9B\u4E86\u57FA\u672C\u67E5\u8BE2\uFF0C\u66F4\u65B0\u65B9\u6CD5)</li><li>\u901A\u7528mapper\u63A5\u53E3commonMapper(\u7EE7\u627F\u4E86mapper\u63A5\u53E3\uFF0C\u63D0\u4F9B\u4E86\u57FA\u7840\u67E5\u8BE2\u548C\u66F4\u65B0\u65B9\u6CD5)</li><li>\u57FA\u7840\u63A7\u5236\u5C42\u6CDB\u578B&lt;\u4E1A\u52A1\u7C7B\uFF0C\u5B9E\u4F53\uFF0C\u8DEF\u5F84\u4E2D\u6570\u636E\u7C7B\u578B&gt;\u7C7BBaseController\uFF08\u6CE8\u5165\u4E1A\u52A1\u5C42\uFF0C\u63D0\u4F9B\u57FA\u7840\u65B0\u589E\uFF0C\u5220\u9664\uFF0C\u67E5\u8BE2\u63A5\u53E3\uFF09</li><li>\u901A\u7528\u54CD\u5E94\u6CDB\u578B\u7C7BobjectResponse(\u5305\u542B\u6CDB\u578Bdata\u5C5E\u6027)\u7EE7\u627F\u57FA\u7840\u54CD\u5E94\u5BF9\u8C61baseResponse(\u5B9A\u4E49status\u548Cmessage\u5C5E\u6027)\uFF0C\u53EF\u4EE5\u5C06tableobjectResponse\u5408\u5E76\u5230objectResponse\u4E2D\u5B9A\u4E49\u5185\u90E8TableData\u7C7B\uFF0C\u5B9A\u4E49rows,total\u5C5E\u6027</li><li>\u5BF9\u96C6\u5408\u5206\u7EC4\u5904\u7406CollectionUtil.split(new ArrayList&lt;&gt;(custReffIds), 50);</li></ul><blockquote><p>\u81EA\u5B9A\u4E49\u5185\u90E8\u7C7B\u8FDB\u884C\u6570\u636E\u7ED3\u6784\u7684\u7EC4\u7EC7\uFF1A</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@Data
    public class PackBO
    {

        EntryOrder entryOrder;

        List&lt;EntryOrderItem&gt; entryOrderItemList = new ArrayList&lt;&gt;();
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u624B\u52A8\u4E8B\u52A1</p></blockquote><p>\u6CE8\u5165platformtransactionManager\u7C7B\u578BtxManager\uFF0C\u8C03\u7528getTransaction(new DefaultTransactionDefinition())\u83B7\u53D6\u4E8B\u52A1\u72B6\u6001TransactionStatus\uFF0C\u624B\u52A8txManager.commit(),txmanager.rollback</p><h2 id="message" tabindex="-1"><a class="header-anchor" href="#message" aria-hidden="true">#</a> message</h2><ul><li>\u4F7F\u7528\u81EA\u5B9A\u4E49\u6D88\u606F\u7C7BMqContent\uFF0C\u5C01\u88C5\u6D88\u606F\u6570\u636E\uFF08\u6D88\u606F\u7684\u7528\u6237\u4FE1\u606FMqUserInfo\uFF0C\u6D88\u606F\u4F53setBody)\uFF0C\u4F7F\u7528fastjson\u8F6Cstring</li><li>\u81EA\u5B9A\u4E49MessageSender(\u6CE8\u5165rocketmqTemplate,\u8FDB\u884C\u540C\u6B65\u6216\u5F02\u6B65\u6D88\u606F\u53D1\u9001) rocketMQTemplate.syncSendOrderly\uFF0CrocketMQTemplate.syncSend\uFF0CrocketMQTemplate.asyncSend</li><li>@RocketMQMessageListener(topic = &quot;DELETE-DELIVERY-ORDER&quot;, consumerGroup = &quot;DELETE-DELIVERY-ORDER&quot;, consumeMode = ConsumeMode.ORDERLY)</li><li>\u6D88\u8D39\u8005\u5B9E\u73B0RocketMQListener\uFF0C\u91CD\u5199onMessage\u65B9\u6CD5\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>MqContent mqContent = JSONObject.parseObject(message.getBody(), MqContent.class);
List&lt;String&gt; deliveryIds = JSONObject.parseArray(mqContent.getBody().toString(), String.class);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> redis</h2><p>\u6839\u636Eid\u67E5\u8BE2\u5546\u54C1\u4FE1\u606F\u653E\u5728redis\u7F13\u5B58\u4E2D\uFF0C\u82E5\u4FEE\u6539\uFF0C\u6E05\u9664\u7F13\u5B58\uFF0C\u4FEE\u6539\u6570\u636E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>redissonClient.getLock(id)\uFF0C \u591A\u4E2A\u9501\u5B9E\u4F8B\u521B\u5EFA\u591A\u9501\u5B9E\u4F8B\uFF0CRedissonMultiLock lock = new RedissonMultiLock(locks.toArray(new RLock[]{}));
 
tryLock 
 
lock.newCondition()\u7EBF\u7A0B\u901A\u4FE1\uFF0Csignal await signalAll

 return commandExecutor.evalWriteAsync(getName(), LongCodec.INSTANCE, command,
                  &quot;if (redis.call(&#39;exists&#39;, KEYS[1]) == 0) then &quot; +
                      &quot;redis.call(&#39;hset&#39;, KEYS[1], ARGV[2], 1); &quot; +
                      &quot;redis.call(&#39;pexpire&#39;, KEYS[1], ARGV[1]); &quot; +
                      &quot;return nil; &quot; +
                  &quot;end; &quot; +
                  &quot;if (redis.call(&#39;hexists&#39;, KEYS[1], ARGV[2]) == 1) then &quot; +
                      &quot;redis.call(&#39;hincrby&#39;, KEYS[1], ARGV[2], 1); &quot; +
                      &quot;redis.call(&#39;pexpire&#39;, KEYS[1], ARGV[1]); &quot; +
                      &quot;return nil; &quot; +
                  &quot;end; &quot; +
                  &quot;return redis.call(&#39;pttl&#39;, KEYS[1]);&quot;,
                    Collections.&lt;Object&gt;singletonList(getName()), internalLockLeaseTime, getLockName(threadId));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5185\u90E8\u4F7F\u7528hash\u7ED3\u6784\uFF0Chset\u8BBE\u7F6E\u503C</li></ul><h2 id="beanutils" tabindex="-1"><a class="header-anchor" href="#beanutils" aria-hidden="true">#</a> beanUtils:</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    //\u901A\u8FC7class\u83B7\u53D6Bean
    public static &lt;T&gt; T getBean(Class&lt;T&gt; clazz) {
        return getApplicationContext().getBean(clazz);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="es" tabindex="-1"><a class="header-anchor" href="#es" aria-hidden="true">#</a> es</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>BoolQueryBuilder boolQueryBuilder = QueryBuilders.boolQuery();
 IndexParam indexParam = new IndexParam();
            indexParam.setParam(&quot;tenantId&quot;, BaseContextHandler.getTargetTenantId() != null ? BaseContextHandler.getTargetTenantId() : BaseContextHandler.getTenantID());
            MetaData metaData = IndexTools.getIndexType(DailyStock.class, indexParam);

            SearchRequest searchRequest = new SearchRequest(metaData.getSearchIndexNames());
            SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();
            searchSourceBuilder.query(boolQueryBuilder);
            searchSourceBuilder.from(currentPage);
            searchSourceBuilder.size(pageSize);
            searchSourceBuilder.sort(SortBuilders.fieldSort(&quot;month&quot;).order(SortOrder.DESC));
            searchRequest.source(searchSourceBuilder);

            SearchResponse searchResponse = els.search(searchRequest);
            SearchHits hits = searchResponse.getHits();
            SearchHit[] searchHits = hits.getHits();
            for (SearchHit hit : searchHits)
            {
                DailyStock dailyStock = JsonUtils.string2Obj(hit.getSourceAsString(), DailyStock.class);
                resultList.add(dailyStock);
            }
            // \u67E5\u8BE2\u603B\u6570
            long count = els.count(boolQueryBuilder, DailyStock.class, indexParam);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>\u64CD\u4F5Ces\u7684api\u63A5\u53E3ElasticsearchTemplate\uFF0C\u6838\u5FC3RestHighLevelClient client;\u5305\u542BsaveAndRefresh, deleteById,deleteByCondition,scroll\u67E5\u8BE2\uFF0C\u539F\u59CB\u67E5\u8BE2search\u53EF\u5206\u9875</p></li><li><p>elasticsearch-rest-high-level-client-6.7.2.jar</p></li><li><p>\u4F7F\u7528\u7D22\u5F15\u540D\u79F0\uFF0C\u6784\u5EFA\u67E5\u8BE2\u8BF7\u6C42SearchRequest\uFF0C\u5982SearchRequest searchRequest = new SearchRequest(metaData.getSearchIndexNames());</p></li><li><p>\u6784\u5EFA\u67E5\u8BE2\u6765\u6E90SearchSourceBuilder\uFF0C\u652F\u6301\u5206\u9875\u67E5\u8BE2\uFF1AsearchSourceBuilder.query(boolQueryBuilder);searchSourceBuilder.from(currentPage);searchSourceBuilder.size(pageSize);</p></li><li><p>\u67E5\u8BE2\u8BF7\u6C42\u8BBE\u7F6E\u8BBE\u7F6E\u67E5\u8BE2\u6765\u6E90searchRequest.source(searchSourceBuilder);</p></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SearchResponse searchResponse = els.search(searchRequest);
SearchHits hits = searchResponse.getHits();
SearchHit[] searchHits = hits.getHits();
for (SearchHit hit : searchHits)
{
  DailyStock dailyStock = JsonUtils.string2Obj(hit.getSourceAsString(), DailyStock.class);
  resultList.add(dailyStock);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u67E5\u8BE2\u603B\u6570 long count = els.count(boolQueryBuilder, DailyStock.class, indexParam);</p></blockquote><blockquote><p>\u67E5\u8BE2json:</p></blockquote><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;must&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;warehouseId&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;69&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;boost&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;479968903020281856&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;boost&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;customerId&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token string">&quot;142&quot;</span><span class="token punctuation">,</span>
              <span class="token string">&quot;141&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;boost&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;range&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;crtTime&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-02-16T00:00:00.000Z&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
              <span class="token property">&quot;include_lower&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
              <span class="token property">&quot;include_upper&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
              <span class="token property">&quot;boost&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;adjust_pure_negative&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;boost&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>es\u67E5\u8BE2\u547D\u4EE4</p></blockquote><p>curl -X POST &#39;http://192.168.1.39:8081/entryorderitem-58-2021/_search&#39; -H &#39;content-Type:application/json&#39; -d &#39;</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
<span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;entryCatalogId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;20211204&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5220\u9664\u547D\u4EE4</p></blockquote><p>curl -X POST &#39;http://192.168.1.39:9200/forum/_delete_by_query&#39; -H &#39;content-Type:application/json&#39; -d &#39;</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
<span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6D4B\u8BD5&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cache" tabindex="-1"><a class="header-anchor" href="#cache" aria-hidden="true">#</a> cache</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;com.sun.mail&lt;/groupId&gt;
    &lt;artifactId&gt;javax.mail&lt;/artifactId&gt;
    &lt;version&gt;1.6.2&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>private static final TimedCache&lt;String, CustomerVO&gt; CUSTOMER_CACHE =
CacheUtil.newTimedCache(DateUnit.SECOND.getMillis()  * 120);
@PostConstruct
public void init()
{
    ITEM_CACHE.schedulePrune(10);
    ORDER_CACHE.schedulePrune(10);
    ORDER_ITEM_CACHE.schedulePrune(10);
    PICK_TASK_CACHE.schedulePrune(10);
    PICK_LOCATION_CACHE.schedulePrune(10);
    ITEM_STOCK_CACHE.schedulePrune(10);
    CUSTOMER_CACHE.schedulePrune(10);
    WAREHOUSE_CACHE.schedulePrune(10);
    LOCATION_CACHE.schedulePrune(10);
    USER_CACHE.schedulePrune(10);
}
\u4F7F\u7528hutool\u7684CacheUtil\u7684\u5B9A\u65F6\u7F13\u5B58
    \u5E76\u5F00\u542F\u5B9A\u65F6\u6E05\u9664\u4EFB\u52A1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#\u65E5\u5FD7" aria-hidden="true">#</a> \u65E5\u5FD7</h2><p>MDC Threadlocal</p><h2 id="\u4E8B\u52A1\u4E00\u81F4" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u52A1\u4E00\u81F4" aria-hidden="true">#</a> \u4E8B\u52A1\u4E00\u81F4</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>params.put(&quot;replId&quot;, replenishmentTask.getReplId());
// \u5E94\u8865\u6570\u91CF &gt; \u5B58\u50A8\u50A8\u4F4D\u53EF\u7528\u5E93\u5B58\uFF0C\u5219\u5B58\u50A8\u50A8\u4F4D\u53EF\u7528\u5E93\u5B58\u6709\u591A\u5C11\u8865\u591A\u5C11\uFF0C\u5426\u5219\uFF0C\u8865\u5230\u5E94\u8865\u6570\u91CF
params.put(&quot;shouldReplQuantity&quot;, allocateItemStock.getAllocateQty());
params.put(&quot;oldVersion&quot;, replenishmentTask.getVersion());
int flag = updateQuantity(params);
if (0 == flag)
{
log.info(&quot;\u8865\u8D27\u4EFB\u52A1\u5E76\u53D1,\u4E8B\u7269\u56DE\u6EDA&quot;);
throw new BusinessException(&quot;\u8865\u8D27\u4EFB\u52A1\u5E76\u53D1&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="try-catch-finally" tabindex="-1"><a class="header-anchor" href="#try-catch-finally" aria-hidden="true">#</a> try catch finally</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>try
{
    // \u6267\u884C\u4E0A\u67B6\u64CD\u4F5C
    shelveOperator.service(shelveSubmitDTO);
}
finally
{
    redisDistributedLock.delete(orderId);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5E93\u5B58\u5206\u914D\u9501\u5B9A\u5E93\u5B58
\u5DF2\u8BA2\u5355\u660E\u7EC6\u7EF4\u5EA6\uFF0C\u4E00\u6761\u660E\u7EC6\u5BF9\u5E94\u591A\u6761\u5B9E\u65F6\u5E93\u5B58\u660E\u7EC6
\u6839\u636E\u5206\u914D\u8BF7\u6C42AllocateRequest\u548CAllocateResponse\u6784\u5EFA\u62E3\u8D27\u8BF7\u6C42
\u4E00\u4E2A\u62E3\u8D27\u660E\u7EC6\u5BF9\u5E94\u4E00\u6761\u5E93\u5B58\u660E\u7EC6\uFF0C\u53EF\u7528\u91CF\u51CF\u5C11\uFF0C\u9501\u5B9A\u91CF\u589E\u52A0
\u751F\u6210\u62E3\u8D27\u660E\u7EC6
\u5E93\u5B58\u4EA4\u6613\u65E5\u5FD7
\u66F4\u65B0\u53D1\u8D27\u5355\u660E\u7EC6\u5DF2\u5206\u914D\u6570\u91CF
\u66F4\u65B0\u53D1\u8D27\u5355\u72B6\u6001
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>DefaultRocketMQListenerContainer</p><p>AuthClientRunner</p><p>AuthServerRunner</p>`,47),l=[t];function r(o,c){return s(),e("div",null,l)}const p=n(i,[["render",r],["__file","\u7CFB\u7EDF\u6846\u67B6\u77E5\u8BC6.html.vue"]]);export{p as default};
