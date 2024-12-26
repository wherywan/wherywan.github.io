import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,e}from"./app-hoN0JGLf.js";const l={},o=e(`<h1 id="multipledatasource" tabindex="-1"><a class="header-anchor" href="#multipledatasource"><span>multipleDatasource</span></a></h1><h2 id="spring-datasource" tabindex="-1"><a class="header-anchor" href="#spring-datasource"><span>spring datasource</span></a></h2><p>这里要想默认数据源生效，要在启动类排除默认数据源配置@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})</p><p>spring datasource提供AbstractRoutingDataSource在获取connection之前切换数据源</p><blockquote><p>DataSourceAutoConfiguration</p></blockquote><p>配置数据源，默认使用spring自带的Hikari数据库连接池</p><blockquote><p>AbstractRoutingDataSource</p></blockquote><ol><li>定义DynamicDataSource类继承抽象类AbstractRoutingDataSource，并实现了determineCurrentLookupKey()方法。</li><li>把配置的多个数据源会放在AbstractRoutingDataSource的 targetDataSources和defaultTargetDataSource中，然后通过afterPropertiesSet()方法将数据源分别进行复制到resolvedDataSources和resolvedDefaultDataSource中。</li><li>调用AbstractRoutingDataSource的getConnection()的方法的时候，先调用determineTargetDataSource()方法返回DataSource在进行getConnection()。</li></ol><blockquote><p>事务</p></blockquote><p>AbstractRoutingDataSource 只支持单库事务，也就是说切换数据源要在开启事务之前执行。 spring DataSourceTransactionManager进行事务管理， 开启事务，会将数据源缓存到DataSourceTransactionObject对象中进行后续的commit rollback等事务操作。</p><p>出现多数据源动态切换失败的原因是因为在事务开启后，数据源就不能再进行随意切换了，也就是说，一个事务对应一个数据源。</p><p>传统的Spring管理事务是放在Service业务层操作的，所以更换数据源的操作要放在这个操作之前进行。也就是切换数据源操作放在Controller层，可是这样操作会造成Controller层代码混乱的结果。</p><p>故而想到的解决方案是将事务管理在数据持久 (Dao层) 开启，切换数据源的操作放在业务层进行操作，就可在事务开启之前顺利进行数据源切换，不会再出现切换失败了。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span style="color:#008000;">//数据源上下文，在做具体查询操作前切换数据源</span></span>
<span class="line"><span style="color:#0000FF;">public</span><span style="color:#0000FF;"> class</span><span style="color:#267F99;"> DataSourceContextHolder</span><span style="color:#000000;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0000FF;">    private</span><span style="color:#0000FF;"> static</span><span style="color:#0000FF;"> final</span><span style="color:#267F99;"> ThreadLocal</span><span style="color:#000000;">&lt;</span><span style="color:#267F99;">DataSourceType</span><span style="color:#000000;">&gt; </span><span style="color:#001080;">contextHolder</span><span style="color:#000000;"> = </span><span style="color:#AF00DB;">new</span><span style="color:#267F99;"> ThreadLocal</span><span style="color:#000000;">&lt;</span><span style="color:#267F99;">DataSourceType</span><span style="color:#000000;">&gt;();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0000FF;">    public</span><span style="color:#0000FF;"> static</span><span style="color:#267F99;"> void</span><span style="color:#795E26;"> clearDataSourceType</span><span style="color:#000000;">() {</span></span>
<span class="line"><span style="color:#001080;">        contextHolder</span><span style="color:#000000;">.</span><span style="color:#795E26;">remove</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0000FF;">    public</span><span style="color:#0000FF;"> static</span><span style="color:#267F99;"> DataSourceType</span><span style="color:#795E26;"> getDataSourceType</span><span style="color:#000000;">() {</span></span>
<span class="line"><span style="color:#AF00DB;">        return</span><span style="color:#000000;"> (DataSourceType) </span><span style="color:#001080;">contextHolder</span><span style="color:#000000;">.</span><span style="color:#795E26;">get</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0000FF;">    public</span><span style="color:#0000FF;"> static</span><span style="color:#267F99;"> void</span><span style="color:#795E26;"> setDataSourceType</span><span style="color:#000000;">(</span><span style="color:#267F99;">DataSourceType</span><span style="color:#001080;"> dataSourceType</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#001080;">        contextHolder</span><span style="color:#000000;">.</span><span style="color:#795E26;">set</span><span style="color:#000000;">(dataSourceType);</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0000FF;">public</span><span style="color:#0000FF;"> enum</span><span style="color:#267F99;"> DataSourceType</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">    dataSource_jeecg, dataSource_enter, dataSource4, mapdataSource</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#0000FF;">public</span><span style="color:#0000FF;"> class</span><span style="color:#267F99;"> DynamicDataSource</span><span style="color:#0000FF;"> extends</span><span style="color:#267F99;"> AbstractRoutingDataSource</span><span style="color:#000000;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#008000;">	/*</span></span>
<span class="line"><span style="color:#008000;">	 * 该方法必须要重写 方法是为了根据数据库标示符取得当前的数据库</span></span>
<span class="line"><span style="color:#008000;">     * 决定使用哪个数据源</span></span>
<span class="line"><span style="color:#008000;">	 */</span></span>
<span class="line"><span style="color:#000000;">	@</span><span style="color:#267F99;">Override</span></span>
<span class="line"><span style="color:#0000FF;">	protected</span><span style="color:#267F99;"> Object</span><span style="color:#795E26;"> determineCurrentLookupKey</span><span style="color:#000000;">() {</span></span>
<span class="line"><span style="color:#267F99;">		DataSourceType</span><span style="color:#001080;"> dataSourceType</span><span style="color:#000000;"> = </span><span style="color:#267F99;">DataSourceContextHolder</span></span>
<span class="line"><span style="color:#000000;">				.</span><span style="color:#795E26;">getDataSourceType</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#AF00DB;">		return</span><span style="color:#000000;"> dataSourceType;</span></span>
<span class="line"><span style="color:#000000;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">	@</span><span style="color:#267F99;">Override</span></span>
<span class="line"><span style="color:#0000FF;">	public</span><span style="color:#267F99;"> void</span><span style="color:#795E26;"> setDataSourceLookup</span><span style="color:#000000;">(</span><span style="color:#267F99;">DataSourceLookup</span><span style="color:#001080;"> dataSourceLookup</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#0000FF;">		super</span><span style="color:#000000;">.</span><span style="color:#795E26;">setDataSourceLookup</span><span style="color:#000000;">(dataSourceLookup);</span></span>
<span class="line"><span style="color:#000000;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#008000;">    //默认数据源</span></span>
<span class="line"><span style="color:#000000;">	@</span><span style="color:#267F99;">Override</span></span>
<span class="line"><span style="color:#0000FF;">	public</span><span style="color:#267F99;"> void</span><span style="color:#795E26;"> setDefaultTargetDataSource</span><span style="color:#000000;">(</span><span style="color:#267F99;">Object</span><span style="color:#001080;"> defaultTargetDataSource</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#0000FF;">		super</span><span style="color:#000000;">.</span><span style="color:#795E26;">setDefaultTargetDataSource</span><span style="color:#000000;">(defaultTargetDataSource);</span></span>
<span class="line"><span style="color:#000000;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#008000;">    //数据源名称和数据源的映射</span></span>
<span class="line"><span style="color:#000000;">	@</span><span style="color:#267F99;">Override</span></span>
<span class="line"><span style="color:#0000FF;">	public</span><span style="color:#267F99;"> void</span><span style="color:#795E26;"> setTargetDataSources</span><span style="color:#000000;">(</span><span style="color:#267F99;">Map</span><span style="color:#000000;">&lt;</span><span style="color:#267F99;">Object</span><span style="color:#000000;">, </span><span style="color:#267F99;">Object</span><span style="color:#000000;">&gt; </span><span style="color:#001080;">targetDataSources</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#0000FF;">		super</span><span style="color:#000000;">.</span><span style="color:#795E26;">setTargetDataSources</span><span style="color:#000000;">(targetDataSources);</span></span>
<span class="line"><span style="color:#000000;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),p=[o];function t(c,r){return a(),n("div",null,p)}const d=s(l,[["render",t],["__file","multipleDatasource.html.vue"]]),y=JSON.parse('{"path":"/note/web/multipleDatasource.html","title":"multipleDatasource","lang":"zh-CN","frontmatter":{"category":["web"],"description":"multipleDatasource spring datasource 这里要想默认数据源生效，要在启动类排除默认数据源配置@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class}) spring datasource提供AbstractRoutingDataSource...","head":[["meta",{"property":"og:url","content":"https://wherywan.github.io/note/web/multipleDatasource.html"}],["meta",{"property":"og:site_name","content":"HONG_JI"}],["meta",{"property":"og:title","content":"multipleDatasource"}],["meta",{"property":"og:description","content":"multipleDatasource spring datasource 这里要想默认数据源生效，要在启动类排除默认数据源配置@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class}) spring datasource提供AbstractRoutingDataSource..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-08T03:26:07.000Z"}],["meta",{"property":"article:author","content":"wanhongji"}],["meta",{"property":"article:modified_time","content":"2023-09-08T03:26:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"multipleDatasource\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-08T03:26:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"wanhongji\\"}]}"]]},"headers":[{"level":2,"title":"spring datasource","slug":"spring-datasource","link":"#spring-datasource","children":[]}],"git":{"createdTime":1662459979000,"updatedTime":1694143567000,"contributors":[{"name":"wanhongji","email":"wherywan@163.com","commits":1}]},"readingTime":{"minutes":1.91,"words":574},"filePathRelative":"note/web/multipleDatasource.md","localizedDate":"2022年9月6日","excerpt":"\\n<h2>spring datasource</h2>\\n<p>这里要想默认数据源生效，要在启动类排除默认数据源配置@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})</p>\\n<p>spring datasource提供AbstractRoutingDataSource在获取connection之前切换数据源</p>\\n<blockquote>\\n<p>DataSourceAutoConfiguration</p>\\n</blockquote>\\n<p>配置数据源，默认使用spring自带的Hikari数据库连接池</p>","autoDesc":true}');export{d as comp,y as data};
