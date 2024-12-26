import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,e as i}from"./app-hoN0JGLf.js";const e={},l=i(`<h1 id="mybatis" tabindex="-1"><a class="header-anchor" href="#mybatis"><span>mybatis</span></a></h1><blockquote><p>核心</p></blockquote><ul><li>数据源datasource</li><li>Configuration</li><li>sqlSessionFactory</li><li>sqlSessionTemplate</li><li>代理对象</li><li>缓存</li></ul><h2 id="datasource" tabindex="-1"><a class="header-anchor" href="#datasource"><span>DataSource</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span># 数据库配置</span></span>
<span class="line"><span>#数据库连接池名</span></span>
<span class="line"><span>spring.datasource.name=test</span></span>
<span class="line"><span># 数据库连接地址</span></span>
<span class="line"><span>spring.datasource.url=\${DATASOURCE_URL:jdbc:mysql://\${MYSQL_HOST:localhost}:\${MYSQL_PORT:3306}/\${MYSQL_DATASOURCE:scms_bms}?useUnicode=true&amp;characterEncoding=UTF8}</span></span>
<span class="line"><span># 数据库账号</span></span>
<span class="line"><span>spring.datasource.username=\${MYSQL_USER:root}</span></span>
<span class="line"><span># 数据库密码</span></span>
<span class="line"><span>spring.datasource.password=\${MYSQL_PASSWORD:root}</span></span>
<span class="line"><span># 数据库驱动名</span></span>
<span class="line"><span>spring.datasource.driver-class-name=com.mysql.jdbc.Driver</span></span>
<span class="line"><span># 数据库连接池类型</span></span>
<span class="line"><span>spring.datasource.type=com.zaxxer.hikari.HikariDataSource</span></span>
<span class="line"><span># 池中维护的最小空闲连接数</span></span>
<span class="line"><span>spring.datasource.hikari.minimum-idle=5</span></span>
<span class="line"><span># 池中最大连接数，包括闲置和使用中的连接 如果maxPoolSize小于1，则会被重置。当minIdle&lt;=0被重置为DEFAULT_POOL_SIZE则为10;如果minIdle&gt;0则重置为minIdle的值</span></span>
<span class="line"><span>spring.datasource.hikari.maximum-pool-size=15</span></span>
<span class="line"><span># 自动提交从池中返回的连接</span></span>
<span class="line"><span>spring.datasource.hikari.auto-commit=true</span></span>
<span class="line"><span># 连接允许在池中闲置的最长时间</span></span>
<span class="line"><span>spring.datasource.hikari.idle-timeout=30000</span></span>
<span class="line"><span># 连接池的用户定义名称，主要出现在日志记录和JMX管理控制台中以识别池和池配置</span></span>
<span class="line"><span>spring.datasource.hikari.pool-name=DatebookHikariCP</span></span>
<span class="line"><span># 池中连接最长生命周期 如果不等于0且小于30秒则会被重置回30分钟</span></span>
<span class="line"><span>spring.datasource.hikari.max-lifetime=1800000</span></span>
<span class="line"><span># 等待来自池的连接的最大毫秒数 如果小于250毫秒，则被重置回30秒</span></span>
<span class="line"><span>spring.datasource.hikari.connection-timeout=30000</span></span>
<span class="line"><span># 连接健康测试的sql</span></span>
<span class="line"><span>spring.datasource.hikari.connection-test-query=SELECT 1</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Java SQL框架允许多个数据库驱动程序。每个驱动程序都应该提供一个实现driver接口的类</span></span>
<span class="line"><span>DriverManager将尝试加载尽可能多的驱动程序，因为它可以找到，然后为任何给定的连接请求，它将轮流要求每个驱动程序尝试连接到目标URL。</span></span>
<span class="line"><span>当一个Driver类被加载时，它应该创建一个自己的实例并注册到DriverManager。这意味着用户可以加载和注册</span></span>
<span class="line"><span></span></span>
<span class="line"><span>根据application.yml中的配置，构建数据源Datasource,包括以下信息：</span></span>
<span class="line"><span>1、数据库地址端口、用户名密码</span></span>
<span class="line"><span>2、数据库驱动名 spring.datasource.driver-class-name=com.mysql.jdbc.Driver，用于连接目标数据库</span></span>
<span class="line"><span>3、数据库连接池配置</span></span>
<span class="line"><span>	- 使用的数据库连接池</span></span>
<span class="line"><span>	   com.alibaba.druid.pool.DruidDataSource</span></span>
<span class="line"><span>	   com.zaxxer.hikari.HikariDataSource</span></span>
<span class="line"><span>	- 对应连接池配置</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jar包引用方式" tabindex="-1"><a class="header-anchor" href="#jar包引用方式"><span>jar包引用方式</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>springBoot仅仅是通过starter，以及自动配置相关的：</span></span>
<span class="line"><span>1、spring.factiries</span></span>
<span class="line"><span>2、@Configure</span></span>
<span class="line"><span>来简化配置，自动将bean注册到spring的ioc容器中构建组件运行环境</span></span>
<span class="line"><span>springboot的核心jar包如下，每个支持springboot自动配置的组件都会引用</span></span>
<span class="line"><span>org.springframework.boot: spring-boot:2.3.9.RLEASE</span></span>
<span class="line"><span>org.springframework.boot: spring-boot-autoConfigure:2.3.9.RLEASE</span></span>
<span class="line"><span>	用于读取配置文件的信息，来进行自动配置，如</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>通过starter引入jar包构建web环境： org.springframework.boot:spring-boot-starter-web:2.3.2.RELEASE</span></span>
<span class="line"><span>compile &#39;org.springframework:spring-jdbc:5.2.18.Release&#39;</span></span>
<span class="line"><span>compile &#39;org.springframework:spring-aop:5.2.18.Release&#39;</span></span>
<span class="line"><span>compile &#39;org.springframework:spring-webmvc:5.2.18.Release&#39;</span></span>
<span class="line"><span>单独引用：对spring的版本升级，它会对以上版本进行覆盖，更新如下最新版本</span></span>
<span class="line"><span>compile &#39;org.springframework:spring-jdbc:5.3.18&#39;</span></span>
<span class="line"><span>compile &#39;org.springframework:spring-aop:5.3.18&#39;</span></span>
<span class="line"><span>compile &#39;org.springframework:spring-webmvc:5.3.18&#39;</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="工作原理" tabindex="-1"><a class="header-anchor" href="#工作原理"><span>工作原理</span></a></h2><ul><li><p>mybatis-config.xml</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>使用了springboot的自动配置功能代替配置文件配置的方式</span></span>
<span class="line"><span># mybatis配置</span></span>
<span class="line"><span># mybatis mapper扫描路径</span></span>
<span class="line"><span>mybatis.mapper-locations=classpath*:mapper/*.xml</span></span>
<span class="line"><span># mybatis实体类扫描路径</span></span>
<span class="line"><span>mybatis.type-aliases-package=com.saascloud.scms.wms.entity</span></span>
<span class="line"><span># 自动驼峰命名转换</span></span>
<span class="line"><span>mybatis.configuration.map-underscore-to-camel-case=true</span></span>
<span class="line"><span># mybatis的mapper父类</span></span>
<span class="line"><span>mapper.mappers=com.saascloud.common.core.mapper.CommonMapper</span></span>
<span class="line"><span># mybatis数据库自增主键类型</span></span>
<span class="line"><span>#mapper.identity=MYSQL</span></span>
<span class="line"><span># mybatis是否不能为空</span></span>
<span class="line"><span>mapper.not-empty=false</span></span>
<span class="line"><span>#ide自动提示mapper为原值</span></span>
<span class="line"><span>mapper.style=normal</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>通过sqlSessionFactoryBean的getObject方法得到sqlSessionFactory</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>@Bean</span></span>
<span class="line"><span> @ConditionalOnMissingBean</span></span>
<span class="line"><span> public SqlSessionFactory sqlSessionFactory(DataSource dataSource) throws Exception {</span></span>
<span class="line"><span>        SqlSessionFactoryBean factory = new SqlSessionFactoryBean();</span></span>
<span class="line"><span>        factory.setDataSource(dataSource);</span></span>
<span class="line"><span>        factory.setVfs(SpringBootVFS.class);</span></span>
<span class="line"><span>        if (StringUtils.hasText(this.properties.getConfigLocation())) {	   factory.setConfigLocation(this.resourceLoader.getResource(this.properties.getConfigLocation()));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        applyConfiguration(factory);</span></span>
<span class="line"><span>        if (this.properties.getConfigurationProperties() != null) {</span></span>
<span class="line"><span>            factory.setConfigurationProperties(this.properties.getConfigurationProperties());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        if (!ObjectUtils.isEmpty(this.interceptors)) {</span></span>
<span class="line"><span>            factory.setPlugins(this.interceptors);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        if (this.databaseIdProvider != null) {</span></span>
<span class="line"><span>            factory.setDatabaseIdProvider(this.databaseIdProvider);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        if (StringUtils.hasLength(this.properties.getTypeAliasesPackage())) {</span></span>
<span class="line"><span>            factory.setTypeAliasesPackage(this.properties.getTypeAliasesPackage());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        if (this.properties.getTypeAliasesSuperType() != null) {</span></span>
<span class="line"><span>            factory.setTypeAliasesSuperType(this.properties.getTypeAliasesSuperType());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        if (StringUtils.hasLength(this.properties.getTypeHandlersPackage())) {</span></span>
<span class="line"><span>            factory.setTypeHandlersPackage(this.properties.getTypeHandlersPackage());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        if (!ObjectUtils.isEmpty(this.properties.resolveMapperLocations())) {</span></span>
<span class="line"><span>            factory.setMapperLocations(this.properties.resolveMapperLocations());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return factory.getObject();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>getObject会调用afterPropertiesSet方法</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>@Override</span></span>
<span class="line"><span>  public SqlSessionFactory getObject() throws Exception {</span></span>
<span class="line"><span>    if (this.sqlSessionFactory == null) {</span></span>
<span class="line"><span>      afterPropertiesSet();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return this.sqlSessionFactory;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span> </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>afterProperties调用buildSqlSessionFactory方法构建sqlSessionFactory,核心是sqlSessionFactory中的configuration对象(包含xml等mappedStatement信息)</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>@Override</span></span>
<span class="line"><span>  public void afterPropertiesSet() throws Exception {</span></span>
<span class="line"><span>    notNull(dataSource, &quot;Property &#39;dataSource&#39; is required&quot;);</span></span>
<span class="line"><span>    notNull(sqlSessionFactoryBuilder, &quot;Property &#39;sqlSessionFactoryBuilder&#39; is required&quot;);</span></span>
<span class="line"><span>    state((configuration == null &amp;&amp; configLocation == null) || !(configuration != null &amp;&amp; configLocation != null),</span></span>
<span class="line"><span>              &quot;Property &#39;configuration&#39; and &#39;configLocation&#39; can not specified with together&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    this.sqlSessionFactory = buildSqlSessionFactory();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>buildSqlSessionFactory</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>  protected SqlSessionFactory buildSqlSessionFactory() throws IOException {</span></span>
<span class="line"><span></span></span>
<span class="line"><span> Configuration configuration;</span></span>
<span class="line"><span></span></span>
<span class="line"><span> XMLConfigBuilder xmlConfigBuilder = null;</span></span>
<span class="line"><span> if (this.configuration != null) {</span></span>
<span class="line"><span>   configuration = this.configuration;</span></span>
<span class="line"><span>   if (configuration.getVariables() == null) {</span></span>
<span class="line"><span>     configuration.setVariables(this.configurationProperties);</span></span>
<span class="line"><span>   } else if (this.configurationProperties != null) {</span></span>
<span class="line"><span>     configuration.getVariables().putAll(this.configurationProperties);</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span> } else if (this.configLocation != null) {</span></span>
<span class="line"><span>   xmlConfigBuilder = new XMLConfigBuilder(this.configLocation.getInputStream(), null, this.configurationProperties);</span></span>
<span class="line"><span>   configuration = xmlConfigBuilder.getConfiguration();</span></span>
<span class="line"><span> } else {</span></span>
<span class="line"><span>   if (LOGGER.isDebugEnabled()) {</span></span>
<span class="line"><span>     LOGGER.debug(&quot;Property &#39;configuration&#39; or &#39;configLocation&#39; not specified, using default MyBatis Configuration&quot;);</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>   configuration = new Configuration();</span></span>
<span class="line"><span>   if (this.configurationProperties != null) {</span></span>
<span class="line"><span>     configuration.setVariables(this.configurationProperties);</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span></span></span>
<span class="line"><span> if (this.objectFactory != null) {</span></span>
<span class="line"><span>   configuration.setObjectFactory(this.objectFactory);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span></span></span>
<span class="line"><span> if (this.objectWrapperFactory != null) {</span></span>
<span class="line"><span>   configuration.setObjectWrapperFactory(this.objectWrapperFactory);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span></span></span>
<span class="line"><span> if (this.vfs != null) {</span></span>
<span class="line"><span>   configuration.setVfsImpl(this.vfs);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span></span></span>
<span class="line"><span> if (hasLength(this.typeAliasesPackage)) {</span></span>
<span class="line"><span>   String[] typeAliasPackageArray = tokenizeToStringArray(this.typeAliasesPackage,</span></span>
<span class="line"><span>       ConfigurableApplicationContext.CONFIG_LOCATION_DELIMITERS);</span></span>
<span class="line"><span>   for (String packageToScan : typeAliasPackageArray) {</span></span>
<span class="line"><span>     configuration.getTypeAliasRegistry().registerAliases(packageToScan,</span></span>
<span class="line"><span>             typeAliasesSuperType == null ? Object.class : typeAliasesSuperType);</span></span>
<span class="line"><span>     if (LOGGER.isDebugEnabled()) {</span></span>
<span class="line"><span>       LOGGER.debug(&quot;Scanned package: &#39;&quot; + packageToScan + &quot;&#39; for aliases&quot;);</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span></span></span>
<span class="line"><span> if (!isEmpty(this.typeAliases)) {</span></span>
<span class="line"><span>   for (Class&lt;?&gt; typeAlias : this.typeAliases) {</span></span>
<span class="line"><span>     configuration.getTypeAliasRegistry().registerAlias(typeAlias);</span></span>
<span class="line"><span>     if (LOGGER.isDebugEnabled()) {</span></span>
<span class="line"><span>       LOGGER.debug(&quot;Registered type alias: &#39;&quot; + typeAlias + &quot;&#39;&quot;);</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span></span></span>
<span class="line"><span> if (!isEmpty(this.plugins)) {</span></span>
<span class="line"><span>   for (Interceptor plugin : this.plugins) {</span></span>
<span class="line"><span>     configuration.addInterceptor(plugin);</span></span>
<span class="line"><span>     if (LOGGER.isDebugEnabled()) {</span></span>
<span class="line"><span>       LOGGER.debug(&quot;Registered plugin: &#39;&quot; + plugin + &quot;&#39;&quot;);</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span></span></span>
<span class="line"><span> if (hasLength(this.typeHandlersPackage)) {</span></span>
<span class="line"><span>   String[] typeHandlersPackageArray = tokenizeToStringArray(this.typeHandlersPackage,</span></span>
<span class="line"><span>       ConfigurableApplicationContext.CONFIG_LOCATION_DELIMITERS);</span></span>
<span class="line"><span>   for (String packageToScan : typeHandlersPackageArray) {</span></span>
<span class="line"><span>     configuration.getTypeHandlerRegistry().register(packageToScan);</span></span>
<span class="line"><span>     if (LOGGER.isDebugEnabled()) {</span></span>
<span class="line"><span>       LOGGER.debug(&quot;Scanned package: &#39;&quot; + packageToScan + &quot;&#39; for type handlers&quot;);</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span></span></span>
<span class="line"><span> if (!isEmpty(this.typeHandlers)) {</span></span>
<span class="line"><span>   for (TypeHandler&lt;?&gt; typeHandler : this.typeHandlers) {</span></span>
<span class="line"><span>     configuration.getTypeHandlerRegistry().register(typeHandler);</span></span>
<span class="line"><span>     if (LOGGER.isDebugEnabled()) {</span></span>
<span class="line"><span>       LOGGER.debug(&quot;Registered type handler: &#39;&quot; + typeHandler + &quot;&#39;&quot;);</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span></span></span>
<span class="line"><span> if (this.databaseIdProvider != null) {//fix #64 set databaseId before parse mapper xmls</span></span>
<span class="line"><span>   try {</span></span>
<span class="line"><span>     configuration.setDatabaseId(this.databaseIdProvider.getDatabaseId(this.dataSource));</span></span>
<span class="line"><span>   } catch (SQLException e) {</span></span>
<span class="line"><span>     throw new NestedIOException(&quot;Failed getting a databaseId&quot;, e);</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span></span></span>
<span class="line"><span> if (this.cache != null) {</span></span>
<span class="line"><span>   configuration.addCache(this.cache);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span></span></span>
<span class="line"><span> if (xmlConfigBuilder != null) {</span></span>
<span class="line"><span>   try {</span></span>
<span class="line"><span>     xmlConfigBuilder.parse();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     if (LOGGER.isDebugEnabled()) {</span></span>
<span class="line"><span>       LOGGER.debug(&quot;Parsed configuration file: &#39;&quot; + this.configLocation + &quot;&#39;&quot;);</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>   } catch (Exception ex) {</span></span>
<span class="line"><span>     throw new NestedIOException(&quot;Failed to parse config resource: &quot; + this.configLocation, ex);</span></span>
<span class="line"><span>   } finally {</span></span>
<span class="line"><span>     ErrorContext.instance().reset();</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>//默认创建spring事务工厂</span></span>
<span class="line"><span> if (this.transactionFactory == null) {</span></span>
<span class="line"><span>   this.transactionFactory = new SpringManagedTransactionFactory();</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>//根据事务工厂和数据源创建环境对象到configuration</span></span>
<span class="line"><span> configuration.setEnvironment(new Environment(this.environment, this.transactionFactory, this.dataSource));</span></span>
<span class="line"><span></span></span>
<span class="line"><span> if (!isEmpty(this.mapperLocations)) {</span></span>
<span class="line"><span>   for (Resource mapperLocation : this.mapperLocations) {</span></span>
<span class="line"><span>     if (mapperLocation == null) {</span></span>
<span class="line"><span>       continue;</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     try {</span></span>
<span class="line"><span>        //解析xml文件生成MappedStatement </span></span>
<span class="line"><span>       XMLMapperBuilder xmlMapperBuilder = new XMLMapperBuilder(mapperLocation.getInputStream(),</span></span>
<span class="line"><span>           configuration, mapperLocation.toString(), configuration.getSqlFragments());</span></span>
<span class="line"><span>       xmlMapperBuilder.parse();</span></span>
<span class="line"><span>     } catch (Exception e) {</span></span>
<span class="line"><span>       throw new NestedIOException(&quot;Failed to parse mapping resource: &#39;&quot; + mapperLocation + &quot;&#39;&quot;, e);</span></span>
<span class="line"><span>     } finally {</span></span>
<span class="line"><span>       ErrorContext.instance().reset();</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     if (LOGGER.isDebugEnabled()) {</span></span>
<span class="line"><span>       LOGGER.debug(&quot;Parsed mapper file: &#39;&quot; + mapperLocation + &quot;&#39;&quot;);</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span> } else {</span></span>
<span class="line"><span>   if (LOGGER.isDebugEnabled()) {</span></span>
<span class="line"><span>     LOGGER.debug(&quot;Property &#39;mapperLocations&#39; was not specified or no matching resources found&quot;);</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span></span></span>
<span class="line"><span> return this.sqlSessionFactoryBuilder.build(configuration);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>​</p></li><li><p>sqlsession</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>通过sqlSessionFactory的openSession方法获取sqlSession</span></span>
<span class="line"><span>正常调用mapper接口的方法执行sql操作时会创建sqlSession对象</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private SqlSession openSessionFromDataSource(ExecutorType execType, TransactionIsolationLevel level, boolean autoCommit) {</span></span>
<span class="line"><span>    Transaction tx = null;</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>      final Environment environment = configuration.getEnvironment();</span></span>
<span class="line"><span>      final TransactionFactory transactionFactory = getTransactionFactoryFromEnvironment(environment);</span></span>
<span class="line"><span>      //创建事务对象</span></span>
<span class="line"><span>      tx = transactionFactory.newTransaction(environment.getDataSource(), level, autoCommit);</span></span>
<span class="line"><span>      //创建执行器对象，这里可以通过配置拦截器对执行器增强，生成代理对象，在执行query方法时，执行拦截器方法</span></span>
<span class="line"><span>      final Executor executor = configuration.newExecutor(tx, execType);</span></span>
<span class="line"><span>      return new DefaultSqlSession(configuration, executor, autoCommit);</span></span>
<span class="line"><span>    } catch (Exception e) {</span></span>
<span class="line"><span>      closeTransaction(tx); // may have fetched a connection so lets call close()</span></span>
<span class="line"><span>      throw ExceptionFactory.wrapException(&quot;Error opening session.  Cause: &quot; + e, e);</span></span>
<span class="line"><span>    } finally {</span></span>
<span class="line"><span>      ErrorContext.instance().reset();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>executor</p></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>sqlsession拦截器 </span></span>
<span class="line"><span>private class SqlSessionInterceptor implements InvocationHandler {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {</span></span>
<span class="line"><span>      SqlSession sqlSession = getSqlSession(</span></span>
<span class="line"><span>          SqlSessionTemplate.this.sqlSessionFactory,</span></span>
<span class="line"><span>          SqlSessionTemplate.this.executorType,</span></span>
<span class="line"><span>          SqlSessionTemplate.this.exceptionTranslator);</span></span>
<span class="line"><span>          // sqlSession是defaultSqlSession</span></span>
<span class="line"><span>      try {</span></span>
<span class="line"><span>        Object result = method.invoke(sqlSession, args);</span></span>
<span class="line"><span>        if (!isSqlSessionTransactional(sqlSession, SqlSessionTemplate.this.sqlSessionFactory)) {</span></span>
<span class="line"><span>          // force commit even on non-dirty sessions because some databases require</span></span>
<span class="line"><span>          // a commit/rollback before calling close()</span></span>
<span class="line"><span>          sqlSession.commit(true);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return result;</span></span>
<span class="line"><span>      } catch (Throwable t) {</span></span>
<span class="line"><span>        Throwable unwrapped = unwrapThrowable(t);</span></span>
<span class="line"><span>        if (SqlSessionTemplate.this.exceptionTranslator != null &amp;&amp; unwrapped instanceof PersistenceException) {</span></span>
<span class="line"><span>          // release the connection to avoid a deadlock if the translator is no loaded. See issue #22</span></span>
<span class="line"><span>          closeSqlSession(sqlSession, SqlSessionTemplate.this.sqlSessionFactory);</span></span>
<span class="line"><span>          sqlSession = null;</span></span>
<span class="line"><span>          Throwable translated = SqlSessionTemplate.this.exceptionTranslator.translateExceptionIfPossible((PersistenceException) unwrapped);</span></span>
<span class="line"><span>          if (translated != null) {</span></span>
<span class="line"><span>            unwrapped = translated;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        throw unwrapped;</span></span>
<span class="line"><span>      } finally {</span></span>
<span class="line"><span>        if (sqlSession != null) {</span></span>
<span class="line"><span>          closeSqlSession(sqlSession, SqlSessionTemplate.this.sqlSessionFactory);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   SqlSessionTemplate</span></span>
<span class="line"><span>   @Override</span></span>
<span class="line"><span>  public &lt;E&gt; List&lt;E&gt; selectList(String statement, Object parameter) {</span></span>
<span class="line"><span>  	//this.sqlSessionProxy(即sqlsession的代理对象),调用处理器SqlSessionInterceptor</span></span>
<span class="line"><span>    return this.sqlSessionProxy.&lt;E&gt; selectList(statement, parameter);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  MapperMethod的excute方法,初始化时构建sqlCommand和methodSignature</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  MapperProxy的invoke方法</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  MapperProxyFactory的newInstance生产mapper接口的代理对象，调用处理器MapperProxy</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  mapperRegistry的getMapper</span></span>
<span class="line"><span>  configuration的getMapper</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  MapperFactoryBean的getObject</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="拦截器" tabindex="-1"><a class="header-anchor" href="#拦截器"><span>拦截器</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>//mybatis的拦截器可以对Executor,statementHandler,parameterhandler，resltsestHandler增强</span></span>
<span class="line"><span>核心：</span></span>
<span class="line"><span>@Intercepts(</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        @Signature(type = Executor.class, method = &quot;query&quot;, args = {MappedStatement.class, Object.class, RowBounds.class, ResultHandler.class}),</span></span>
<span class="line"><span>        @Signature(type = Executor.class, method = &quot;query&quot;, args = {MappedStatement.class, Object.class, RowBounds.class, ResultHandler.class, CacheKey.class, BoundSql.class}),</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>@Intercepts({@Signature(method = &quot;prepare&quot;, type = StatementHandler.class, args = {Connection.class, Integer.class})})</span></span>
<span class="line"><span> @Override</span></span>
<span class="line"><span>    public Object plugin(Object target)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        if (target instanceof StatementHandler)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            return Plugin.wrap(target, this);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return target;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //分页插件 将分页信息page(当前页，每页条数，是否count数量)放在线程局部变量中：PageHelper.startPage(query.getPage(), query.getLimit());</span></span>
<span class="line"><span>    //在执行jdbc查询前，拦截器进行拦截处理，从线程局部变量中取分页信息构建查询sql语句</span></span>
<span class="line"><span>    //PageInterceptor implements Interceptor,重写intercept方法</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mapperinterface代理对象的生成" tabindex="-1"><a class="header-anchor" href="#mapperinterface代理对象的生成"><span>mapperinterface代理对象的生成</span></a></h2><p>在容器初始化时使用ClasspathMapperScanner,生成mapperinterface的mapperfactoryBean用于生成mapper代理对象 工厂bean通过getObject方法获取其生产的对象</p><h2 id="mapperautoconfiguration" tabindex="-1"><a class="header-anchor" href="#mapperautoconfiguration"><span>MapperAutoConfiguration</span></a></h2><p>registerBeanDefinitions方法处理Mapper接口生成beanDefinition注册到spring中，并后置处理为工厂bean</p>`,18),p=[l];function c(r,t){return n(),a("div",null,p)}const v=s(e,[["render",c],["__file","mybatis.html.vue"]]),u=JSON.parse('{"path":"/note/%E4%B8%AD%E9%97%B4%E4%BB%B6/mybatis.html","title":"mybatis","lang":"zh-CN","frontmatter":{"description":"mybatis 核心 数据源datasource Configuration sqlSessionFactory sqlSessionTemplate 代理对象 缓存 DataSource jar包引用方式 工作原理 mybatis-config.xml 通过sqlSessionFactoryBean的getObject方法得到sqlSessionFa...","head":[["meta",{"property":"og:url","content":"https://wherywan.github.io/note/%E4%B8%AD%E9%97%B4%E4%BB%B6/mybatis.html"}],["meta",{"property":"og:site_name","content":"HONG_JI"}],["meta",{"property":"og:title","content":"mybatis"}],["meta",{"property":"og:description","content":"mybatis 核心 数据源datasource Configuration sqlSessionFactory sqlSessionTemplate 代理对象 缓存 DataSource jar包引用方式 工作原理 mybatis-config.xml 通过sqlSessionFactoryBean的getObject方法得到sqlSessionFa..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-07T01:26:56.000Z"}],["meta",{"property":"article:author","content":"wanhongji"}],["meta",{"property":"article:modified_time","content":"2023-04-07T01:26:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"mybatis\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-07T01:26:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"wanhongji\\"}]}"]]},"headers":[{"level":2,"title":"DataSource","slug":"datasource","link":"#datasource","children":[]},{"level":2,"title":"jar包引用方式","slug":"jar包引用方式","link":"#jar包引用方式","children":[]},{"level":2,"title":"工作原理","slug":"工作原理","link":"#工作原理","children":[]},{"level":2,"title":"拦截器","slug":"拦截器","link":"#拦截器","children":[]},{"level":2,"title":"mapperinterface代理对象的生成","slug":"mapperinterface代理对象的生成","link":"#mapperinterface代理对象的生成","children":[]},{"level":2,"title":"MapperAutoConfiguration","slug":"mapperautoconfiguration","link":"#mapperautoconfiguration","children":[]}],"git":{"createdTime":1653463410000,"updatedTime":1680830816000,"contributors":[{"name":"wanhongji","email":"wherywan@163.com","commits":2},{"name":"wanhongji","email":"wan_hongji@163.com","commits":1}]},"readingTime":{"minutes":6.24,"words":1872},"filePathRelative":"note/中间件/mybatis.md","localizedDate":"2022年5月25日","excerpt":"\\n<blockquote>\\n<p>核心</p>\\n</blockquote>\\n<ul>\\n<li>数据源datasource</li>\\n<li>Configuration</li>\\n<li>sqlSessionFactory</li>\\n<li>sqlSessionTemplate</li>\\n<li>代理对象</li>\\n<li>缓存</li>\\n</ul>\\n<h2>DataSource</h2>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"shiki light-plus\\" style=\\"background-color:#FFFFFF;color:#000000\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span># 数据库配置</span></span>\\n<span class=\\"line\\"><span>#数据库连接池名</span></span>\\n<span class=\\"line\\"><span>spring.datasource.name=test</span></span>\\n<span class=\\"line\\"><span># 数据库连接地址</span></span>\\n<span class=\\"line\\"><span>spring.datasource.url=${DATASOURCE_URL:jdbc:mysql://${MYSQL_HOST:localhost}:${MYSQL_PORT:3306}/${MYSQL_DATASOURCE:scms_bms}?useUnicode=true&amp;characterEncoding=UTF8}</span></span>\\n<span class=\\"line\\"><span># 数据库账号</span></span>\\n<span class=\\"line\\"><span>spring.datasource.username=${MYSQL_USER:root}</span></span>\\n<span class=\\"line\\"><span># 数据库密码</span></span>\\n<span class=\\"line\\"><span>spring.datasource.password=${MYSQL_PASSWORD:root}</span></span>\\n<span class=\\"line\\"><span># 数据库驱动名</span></span>\\n<span class=\\"line\\"><span>spring.datasource.driver-class-name=com.mysql.jdbc.Driver</span></span>\\n<span class=\\"line\\"><span># 数据库连接池类型</span></span>\\n<span class=\\"line\\"><span>spring.datasource.type=com.zaxxer.hikari.HikariDataSource</span></span>\\n<span class=\\"line\\"><span># 池中维护的最小空闲连接数</span></span>\\n<span class=\\"line\\"><span>spring.datasource.hikari.minimum-idle=5</span></span>\\n<span class=\\"line\\"><span># 池中最大连接数，包括闲置和使用中的连接 如果maxPoolSize小于1，则会被重置。当minIdle&lt;=0被重置为DEFAULT_POOL_SIZE则为10;如果minIdle&gt;0则重置为minIdle的值</span></span>\\n<span class=\\"line\\"><span>spring.datasource.hikari.maximum-pool-size=15</span></span>\\n<span class=\\"line\\"><span># 自动提交从池中返回的连接</span></span>\\n<span class=\\"line\\"><span>spring.datasource.hikari.auto-commit=true</span></span>\\n<span class=\\"line\\"><span># 连接允许在池中闲置的最长时间</span></span>\\n<span class=\\"line\\"><span>spring.datasource.hikari.idle-timeout=30000</span></span>\\n<span class=\\"line\\"><span># 连接池的用户定义名称，主要出现在日志记录和JMX管理控制台中以识别池和池配置</span></span>\\n<span class=\\"line\\"><span>spring.datasource.hikari.pool-name=DatebookHikariCP</span></span>\\n<span class=\\"line\\"><span># 池中连接最长生命周期 如果不等于0且小于30秒则会被重置回30分钟</span></span>\\n<span class=\\"line\\"><span>spring.datasource.hikari.max-lifetime=1800000</span></span>\\n<span class=\\"line\\"><span># 等待来自池的连接的最大毫秒数 如果小于250毫秒，则被重置回30秒</span></span>\\n<span class=\\"line\\"><span>spring.datasource.hikari.connection-timeout=30000</span></span>\\n<span class=\\"line\\"><span># 连接健康测试的sql</span></span>\\n<span class=\\"line\\"><span>spring.datasource.hikari.connection-test-query=SELECT 1</span></span>\\n<span class=\\"line\\"><span></span></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{v as comp,u as data};
