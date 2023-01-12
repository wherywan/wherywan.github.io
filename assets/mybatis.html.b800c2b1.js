import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as n,f as s}from"./app.6f24b29a.js";const a={},l=s(`<h1 id="mybatis" tabindex="-1"><a class="header-anchor" href="#mybatis" aria-hidden="true">#</a> mybatis</h1><blockquote><p>\u6838\u5FC3</p></blockquote><ul><li>\u6570\u636E\u6E90datasource</li><li>Configuration</li><li>sqlSessionFactory</li><li>sqlSessionTemplate</li><li>\u4EE3\u7406\u5BF9\u8C61</li><li>\u7F13\u5B58</li></ul><h2 id="datasource" tabindex="-1"><a class="header-anchor" href="#datasource" aria-hidden="true">#</a> DataSource</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u6570\u636E\u5E93\u914D\u7F6E
#\u6570\u636E\u5E93\u8FDE\u63A5\u6C60\u540D
spring.datasource.name=test
# \u6570\u636E\u5E93\u8FDE\u63A5\u5730\u5740
spring.datasource.url=\${DATASOURCE_URL:jdbc:mysql://\${MYSQL_HOST:localhost}:\${MYSQL_PORT:3306}/\${MYSQL_DATASOURCE:scms_bms}?useUnicode=true&amp;characterEncoding=UTF8}
# \u6570\u636E\u5E93\u8D26\u53F7
spring.datasource.username=\${MYSQL_USER:root}
# \u6570\u636E\u5E93\u5BC6\u7801
spring.datasource.password=\${MYSQL_PASSWORD:root}
# \u6570\u636E\u5E93\u9A71\u52A8\u540D
spring.datasource.driver-class-name=com.mysql.jdbc.Driver
# \u6570\u636E\u5E93\u8FDE\u63A5\u6C60\u7C7B\u578B
spring.datasource.type=com.zaxxer.hikari.HikariDataSource
# \u6C60\u4E2D\u7EF4\u62A4\u7684\u6700\u5C0F\u7A7A\u95F2\u8FDE\u63A5\u6570
spring.datasource.hikari.minimum-idle=5
# \u6C60\u4E2D\u6700\u5927\u8FDE\u63A5\u6570\uFF0C\u5305\u62EC\u95F2\u7F6E\u548C\u4F7F\u7528\u4E2D\u7684\u8FDE\u63A5 \u5982\u679CmaxPoolSize\u5C0F\u4E8E1\uFF0C\u5219\u4F1A\u88AB\u91CD\u7F6E\u3002\u5F53minIdle&lt;=0\u88AB\u91CD\u7F6E\u4E3ADEFAULT_POOL_SIZE\u5219\u4E3A10;\u5982\u679CminIdle&gt;0\u5219\u91CD\u7F6E\u4E3AminIdle\u7684\u503C
spring.datasource.hikari.maximum-pool-size=15
# \u81EA\u52A8\u63D0\u4EA4\u4ECE\u6C60\u4E2D\u8FD4\u56DE\u7684\u8FDE\u63A5
spring.datasource.hikari.auto-commit=true
# \u8FDE\u63A5\u5141\u8BB8\u5728\u6C60\u4E2D\u95F2\u7F6E\u7684\u6700\u957F\u65F6\u95F4
spring.datasource.hikari.idle-timeout=30000
# \u8FDE\u63A5\u6C60\u7684\u7528\u6237\u5B9A\u4E49\u540D\u79F0\uFF0C\u4E3B\u8981\u51FA\u73B0\u5728\u65E5\u5FD7\u8BB0\u5F55\u548CJMX\u7BA1\u7406\u63A7\u5236\u53F0\u4E2D\u4EE5\u8BC6\u522B\u6C60\u548C\u6C60\u914D\u7F6E
spring.datasource.hikari.pool-name=DatebookHikariCP
# \u6C60\u4E2D\u8FDE\u63A5\u6700\u957F\u751F\u547D\u5468\u671F \u5982\u679C\u4E0D\u7B49\u4E8E0\u4E14\u5C0F\u4E8E30\u79D2\u5219\u4F1A\u88AB\u91CD\u7F6E\u56DE30\u5206\u949F
spring.datasource.hikari.max-lifetime=1800000
# \u7B49\u5F85\u6765\u81EA\u6C60\u7684\u8FDE\u63A5\u7684\u6700\u5927\u6BEB\u79D2\u6570 \u5982\u679C\u5C0F\u4E8E250\u6BEB\u79D2\uFF0C\u5219\u88AB\u91CD\u7F6E\u56DE30\u79D2
spring.datasource.hikari.connection-timeout=30000
# \u8FDE\u63A5\u5065\u5EB7\u6D4B\u8BD5\u7684sql
spring.datasource.hikari.connection-test-query=SELECT 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Java SQL\u6846\u67B6\u5141\u8BB8\u591A\u4E2A\u6570\u636E\u5E93\u9A71\u52A8\u7A0B\u5E8F\u3002\u6BCF\u4E2A\u9A71\u52A8\u7A0B\u5E8F\u90FD\u5E94\u8BE5\u63D0\u4F9B\u4E00\u4E2A\u5B9E\u73B0driver\u63A5\u53E3\u7684\u7C7B
DriverManager\u5C06\u5C1D\u8BD5\u52A0\u8F7D\u5C3D\u53EF\u80FD\u591A\u7684\u9A71\u52A8\u7A0B\u5E8F\uFF0C\u56E0\u4E3A\u5B83\u53EF\u4EE5\u627E\u5230\uFF0C\u7136\u540E\u4E3A\u4EFB\u4F55\u7ED9\u5B9A\u7684\u8FDE\u63A5\u8BF7\u6C42\uFF0C\u5B83\u5C06\u8F6E\u6D41\u8981\u6C42\u6BCF\u4E2A\u9A71\u52A8\u7A0B\u5E8F\u5C1D\u8BD5\u8FDE\u63A5\u5230\u76EE\u6807URL\u3002
\u5F53\u4E00\u4E2ADriver\u7C7B\u88AB\u52A0\u8F7D\u65F6\uFF0C\u5B83\u5E94\u8BE5\u521B\u5EFA\u4E00\u4E2A\u81EA\u5DF1\u7684\u5B9E\u4F8B\u5E76\u6CE8\u518C\u5230DriverManager\u3002\u8FD9\u610F\u5473\u7740\u7528\u6237\u53EF\u4EE5\u52A0\u8F7D\u548C\u6CE8\u518C

\u6839\u636Eapplication.yml\u4E2D\u7684\u914D\u7F6E\uFF0C\u6784\u5EFA\u6570\u636E\u6E90Datasource,\u5305\u62EC\u4EE5\u4E0B\u4FE1\u606F\uFF1A
1\u3001\u6570\u636E\u5E93\u5730\u5740\u7AEF\u53E3\u3001\u7528\u6237\u540D\u5BC6\u7801
2\u3001\u6570\u636E\u5E93\u9A71\u52A8\u540D spring.datasource.driver-class-name=com.mysql.jdbc.Driver\uFF0C\u7528\u4E8E\u8FDE\u63A5\u76EE\u6807\u6570\u636E\u5E93
3\u3001\u6570\u636E\u5E93\u8FDE\u63A5\u6C60\u914D\u7F6E
	- \u4F7F\u7528\u7684\u6570\u636E\u5E93\u8FDE\u63A5\u6C60
	   com.alibaba.druid.pool.DruidDataSource
	   com.zaxxer.hikari.HikariDataSource
	- \u5BF9\u5E94\u8FDE\u63A5\u6C60\u914D\u7F6E
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jar\u5305\u5F15\u7528\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#jar\u5305\u5F15\u7528\u65B9\u5F0F" aria-hidden="true">#</a> jar\u5305\u5F15\u7528\u65B9\u5F0F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>springBoot\u4EC5\u4EC5\u662F\u901A\u8FC7starter\uFF0C\u4EE5\u53CA\u81EA\u52A8\u914D\u7F6E\u76F8\u5173\u7684\uFF1A
1\u3001spring.factiries
2\u3001@Configure
\u6765\u7B80\u5316\u914D\u7F6E\uFF0C\u81EA\u52A8\u5C06bean\u6CE8\u518C\u5230spring\u7684ioc\u5BB9\u5668\u4E2D\u6784\u5EFA\u7EC4\u4EF6\u8FD0\u884C\u73AF\u5883
springboot\u7684\u6838\u5FC3jar\u5305\u5982\u4E0B\uFF0C\u6BCF\u4E2A\u652F\u6301springboot\u81EA\u52A8\u914D\u7F6E\u7684\u7EC4\u4EF6\u90FD\u4F1A\u5F15\u7528
org.springframework.boot: spring-boot:2.3.9.RLEASE
org.springframework.boot: spring-boot-autoConfigure:2.3.9.RLEASE
	\u7528\u4E8E\u8BFB\u53D6\u914D\u7F6E\u6587\u4EF6\u7684\u4FE1\u606F\uFF0C\u6765\u8FDB\u884C\u81EA\u52A8\u914D\u7F6E\uFF0C\u5982
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u901A\u8FC7starter\u5F15\u5165jar\u5305\u6784\u5EFAweb\u73AF\u5883\uFF1A org.springframework.boot:spring-boot-starter-web:2.3.2.RELEASE
compile &#39;org.springframework:spring-jdbc:5.2.18.Release&#39;
compile &#39;org.springframework:spring-aop:5.2.18.Release&#39;
compile &#39;org.springframework:spring-webmvc:5.2.18.Release&#39;
\u5355\u72EC\u5F15\u7528\uFF1A\u5BF9spring\u7684\u7248\u672C\u5347\u7EA7\uFF0C\u5B83\u4F1A\u5BF9\u4EE5\u4E0A\u7248\u672C\u8FDB\u884C\u8986\u76D6\uFF0C\u66F4\u65B0\u5982\u4E0B\u6700\u65B0\u7248\u672C
compile &#39;org.springframework:spring-jdbc:5.3.18&#39;
compile &#39;org.springframework:spring-aop:5.3.18&#39;
compile &#39;org.springframework:spring-webmvc:5.3.18&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5DE5\u4F5C\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u4F5C\u539F\u7406" aria-hidden="true">#</a> \u5DE5\u4F5C\u539F\u7406</h2><ul><li><p>mybatis-config.xml</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4F7F\u7528\u4E86springboot\u7684\u81EA\u52A8\u914D\u7F6E\u529F\u80FD\u4EE3\u66FF\u914D\u7F6E\u6587\u4EF6\u914D\u7F6E\u7684\u65B9\u5F0F
# mybatis\u914D\u7F6E
# mybatis mapper\u626B\u63CF\u8DEF\u5F84
mybatis.mapper-locations=classpath*:mapper/*.xml
# mybatis\u5B9E\u4F53\u7C7B\u626B\u63CF\u8DEF\u5F84
mybatis.type-aliases-package=com.saascloud.scms.wms.entity
# \u81EA\u52A8\u9A7C\u5CF0\u547D\u540D\u8F6C\u6362
mybatis.configuration.map-underscore-to-camel-case=true
# mybatis\u7684mapper\u7236\u7C7B
mapper.mappers=com.saascloud.common.core.mapper.CommonMapper
# mybatis\u6570\u636E\u5E93\u81EA\u589E\u4E3B\u952E\u7C7B\u578B
#mapper.identity=MYSQL
# mybatis\u662F\u5426\u4E0D\u80FD\u4E3A\u7A7A
mapper.not-empty=false
#ide\u81EA\u52A8\u63D0\u793Amapper\u4E3A\u539F\u503C
mapper.style=normal
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>\u901A\u8FC7sqlSessionFactoryBean\u7684getObject\u65B9\u6CD5\u5F97\u5230sqlSessionFactory</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@Bean
 @ConditionalOnMissingBean
 public SqlSessionFactory sqlSessionFactory(DataSource dataSource) throws Exception {
        SqlSessionFactoryBean factory = new SqlSessionFactoryBean();
        factory.setDataSource(dataSource);
        factory.setVfs(SpringBootVFS.class);
        if (StringUtils.hasText(this.properties.getConfigLocation())) {	   factory.setConfigLocation(this.resourceLoader.getResource(this.properties.getConfigLocation()));
        }
        applyConfiguration(factory);
        if (this.properties.getConfigurationProperties() != null) {
            factory.setConfigurationProperties(this.properties.getConfigurationProperties());
        }
        if (!ObjectUtils.isEmpty(this.interceptors)) {
            factory.setPlugins(this.interceptors);
        }
        if (this.databaseIdProvider != null) {
            factory.setDatabaseIdProvider(this.databaseIdProvider);
        }
        if (StringUtils.hasLength(this.properties.getTypeAliasesPackage())) {
            factory.setTypeAliasesPackage(this.properties.getTypeAliasesPackage());
        }
        if (this.properties.getTypeAliasesSuperType() != null) {
            factory.setTypeAliasesSuperType(this.properties.getTypeAliasesSuperType());
        }
        if (StringUtils.hasLength(this.properties.getTypeHandlersPackage())) {
            factory.setTypeHandlersPackage(this.properties.getTypeHandlersPackage());
        }
        if (!ObjectUtils.isEmpty(this.properties.resolveMapperLocations())) {
            factory.setMapperLocations(this.properties.resolveMapperLocations());
        }
        return factory.getObject();
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>getObject\u4F1A\u8C03\u7528afterPropertiesSet\u65B9\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@Override
  public SqlSessionFactory getObject() throws Exception {
    if (this.sqlSessionFactory == null) {
      afterPropertiesSet();
    }
    return this.sqlSessionFactory;
  }
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>afterProperties\u8C03\u7528buildSqlSessionFactory\u65B9\u6CD5\u6784\u5EFAsqlSessionFactory,\u6838\u5FC3\u662FsqlSessionFactory\u4E2D\u7684configuration\u5BF9\u8C61(\u5305\u542Bxml\u7B49mappedStatement\u4FE1\u606F)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@Override
  public void afterPropertiesSet() throws Exception {
    notNull(dataSource, &quot;Property &#39;dataSource&#39; is required&quot;);
    notNull(sqlSessionFactoryBuilder, &quot;Property &#39;sqlSessionFactoryBuilder&#39; is required&quot;);
    state((configuration == null &amp;&amp; configLocation == null) || !(configuration != null &amp;&amp; configLocation != null),
              &quot;Property &#39;configuration&#39; and &#39;configLocation&#39; can not specified with together&quot;);

    this.sqlSessionFactory = buildSqlSessionFactory();
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>buildSqlSessionFactory</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  protected SqlSessionFactory buildSqlSessionFactory() throws IOException {

 Configuration configuration;

 XMLConfigBuilder xmlConfigBuilder = null;
 if (this.configuration != null) {
   configuration = this.configuration;
   if (configuration.getVariables() == null) {
     configuration.setVariables(this.configurationProperties);
   } else if (this.configurationProperties != null) {
     configuration.getVariables().putAll(this.configurationProperties);
   }
 } else if (this.configLocation != null) {
   xmlConfigBuilder = new XMLConfigBuilder(this.configLocation.getInputStream(), null, this.configurationProperties);
   configuration = xmlConfigBuilder.getConfiguration();
 } else {
   if (LOGGER.isDebugEnabled()) {
     LOGGER.debug(&quot;Property &#39;configuration&#39; or &#39;configLocation&#39; not specified, using default MyBatis Configuration&quot;);
   }
   configuration = new Configuration();
   if (this.configurationProperties != null) {
     configuration.setVariables(this.configurationProperties);
   }
 }

 if (this.objectFactory != null) {
   configuration.setObjectFactory(this.objectFactory);
 }

 if (this.objectWrapperFactory != null) {
   configuration.setObjectWrapperFactory(this.objectWrapperFactory);
 }

 if (this.vfs != null) {
   configuration.setVfsImpl(this.vfs);
 }

 if (hasLength(this.typeAliasesPackage)) {
   String[] typeAliasPackageArray = tokenizeToStringArray(this.typeAliasesPackage,
       ConfigurableApplicationContext.CONFIG_LOCATION_DELIMITERS);
   for (String packageToScan : typeAliasPackageArray) {
     configuration.getTypeAliasRegistry().registerAliases(packageToScan,
             typeAliasesSuperType == null ? Object.class : typeAliasesSuperType);
     if (LOGGER.isDebugEnabled()) {
       LOGGER.debug(&quot;Scanned package: &#39;&quot; + packageToScan + &quot;&#39; for aliases&quot;);
     }
   }
 }

 if (!isEmpty(this.typeAliases)) {
   for (Class&lt;?&gt; typeAlias : this.typeAliases) {
     configuration.getTypeAliasRegistry().registerAlias(typeAlias);
     if (LOGGER.isDebugEnabled()) {
       LOGGER.debug(&quot;Registered type alias: &#39;&quot; + typeAlias + &quot;&#39;&quot;);
     }
   }
 }

 if (!isEmpty(this.plugins)) {
   for (Interceptor plugin : this.plugins) {
     configuration.addInterceptor(plugin);
     if (LOGGER.isDebugEnabled()) {
       LOGGER.debug(&quot;Registered plugin: &#39;&quot; + plugin + &quot;&#39;&quot;);
     }
   }
 }

 if (hasLength(this.typeHandlersPackage)) {
   String[] typeHandlersPackageArray = tokenizeToStringArray(this.typeHandlersPackage,
       ConfigurableApplicationContext.CONFIG_LOCATION_DELIMITERS);
   for (String packageToScan : typeHandlersPackageArray) {
     configuration.getTypeHandlerRegistry().register(packageToScan);
     if (LOGGER.isDebugEnabled()) {
       LOGGER.debug(&quot;Scanned package: &#39;&quot; + packageToScan + &quot;&#39; for type handlers&quot;);
     }
   }
 }

 if (!isEmpty(this.typeHandlers)) {
   for (TypeHandler&lt;?&gt; typeHandler : this.typeHandlers) {
     configuration.getTypeHandlerRegistry().register(typeHandler);
     if (LOGGER.isDebugEnabled()) {
       LOGGER.debug(&quot;Registered type handler: &#39;&quot; + typeHandler + &quot;&#39;&quot;);
     }
   }
 }

 if (this.databaseIdProvider != null) {//fix #64 set databaseId before parse mapper xmls
   try {
     configuration.setDatabaseId(this.databaseIdProvider.getDatabaseId(this.dataSource));
   } catch (SQLException e) {
     throw new NestedIOException(&quot;Failed getting a databaseId&quot;, e);
   }
 }

 if (this.cache != null) {
   configuration.addCache(this.cache);
 }

 if (xmlConfigBuilder != null) {
   try {
     xmlConfigBuilder.parse();

     if (LOGGER.isDebugEnabled()) {
       LOGGER.debug(&quot;Parsed configuration file: &#39;&quot; + this.configLocation + &quot;&#39;&quot;);
     }
   } catch (Exception ex) {
     throw new NestedIOException(&quot;Failed to parse config resource: &quot; + this.configLocation, ex);
   } finally {
     ErrorContext.instance().reset();
   }
 }
//\u9ED8\u8BA4\u521B\u5EFAspring\u4E8B\u52A1\u5DE5\u5382
 if (this.transactionFactory == null) {
   this.transactionFactory = new SpringManagedTransactionFactory();
 }
//\u6839\u636E\u4E8B\u52A1\u5DE5\u5382\u548C\u6570\u636E\u6E90\u521B\u5EFA\u73AF\u5883\u5BF9\u8C61\u5230configuration
 configuration.setEnvironment(new Environment(this.environment, this.transactionFactory, this.dataSource));

 if (!isEmpty(this.mapperLocations)) {
   for (Resource mapperLocation : this.mapperLocations) {
     if (mapperLocation == null) {
       continue;
     }

     try {
        //\u89E3\u6790xml\u6587\u4EF6\u751F\u6210MappedStatement 
       XMLMapperBuilder xmlMapperBuilder = new XMLMapperBuilder(mapperLocation.getInputStream(),
           configuration, mapperLocation.toString(), configuration.getSqlFragments());
       xmlMapperBuilder.parse();
     } catch (Exception e) {
       throw new NestedIOException(&quot;Failed to parse mapping resource: &#39;&quot; + mapperLocation + &quot;&#39;&quot;, e);
     } finally {
       ErrorContext.instance().reset();
     }

     if (LOGGER.isDebugEnabled()) {
       LOGGER.debug(&quot;Parsed mapper file: &#39;&quot; + mapperLocation + &quot;&#39;&quot;);
     }
   }
 } else {
   if (LOGGER.isDebugEnabled()) {
     LOGGER.debug(&quot;Property &#39;mapperLocations&#39; was not specified or no matching resources found&quot;);
   }
 }

 return this.sqlSessionFactoryBuilder.build(configuration);
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>\u200B</p></li><li><p>sqlsession</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u901A\u8FC7sqlSessionFactory\u7684openSession\u65B9\u6CD5\u83B7\u53D6sqlSession
\u6B63\u5E38\u8C03\u7528mapper\u63A5\u53E3\u7684\u65B9\u6CD5\u6267\u884Csql\u64CD\u4F5C\u65F6\u4F1A\u521B\u5EFAsqlSession\u5BF9\u8C61

private SqlSession openSessionFromDataSource(ExecutorType execType, TransactionIsolationLevel level, boolean autoCommit) {
    Transaction tx = null;
    try {
      final Environment environment = configuration.getEnvironment();
      final TransactionFactory transactionFactory = getTransactionFactoryFromEnvironment(environment);
      //\u521B\u5EFA\u4E8B\u52A1\u5BF9\u8C61
      tx = transactionFactory.newTransaction(environment.getDataSource(), level, autoCommit);
      //\u521B\u5EFA\u6267\u884C\u5668\u5BF9\u8C61\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E\u62E6\u622A\u5668\u5BF9\u6267\u884C\u5668\u589E\u5F3A\uFF0C\u751F\u6210\u4EE3\u7406\u5BF9\u8C61\uFF0C\u5728\u6267\u884Cquery\u65B9\u6CD5\u65F6\uFF0C\u6267\u884C\u62E6\u622A\u5668\u65B9\u6CD5
      final Executor executor = configuration.newExecutor(tx, execType);
      return new DefaultSqlSession(configuration, executor, autoCommit);
    } catch (Exception e) {
      closeTransaction(tx); // may have fetched a connection so lets call close()
      throw ExceptionFactory.wrapException(&quot;Error opening session.  Cause: &quot; + e, e);
    } finally {
      ErrorContext.instance().reset();
    }
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>executor</p><p>\u200B</p></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sqlsession\u62E6\u622A\u5668 
private class SqlSessionInterceptor implements InvocationHandler {
    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
      SqlSession sqlSession = getSqlSession(
          SqlSessionTemplate.this.sqlSessionFactory,
          SqlSessionTemplate.this.executorType,
          SqlSessionTemplate.this.exceptionTranslator);
          // sqlSession\u662FdefaultSqlSession
      try {
        Object result = method.invoke(sqlSession, args);
        if (!isSqlSessionTransactional(sqlSession, SqlSessionTemplate.this.sqlSessionFactory)) {
          // force commit even on non-dirty sessions because some databases require
          // a commit/rollback before calling close()
          sqlSession.commit(true);
        }
        return result;
      } catch (Throwable t) {
        Throwable unwrapped = unwrapThrowable(t);
        if (SqlSessionTemplate.this.exceptionTranslator != null &amp;&amp; unwrapped instanceof PersistenceException) {
          // release the connection to avoid a deadlock if the translator is no loaded. See issue #22
          closeSqlSession(sqlSession, SqlSessionTemplate.this.sqlSessionFactory);
          sqlSession = null;
          Throwable translated = SqlSessionTemplate.this.exceptionTranslator.translateExceptionIfPossible((PersistenceException) unwrapped);
          if (translated != null) {
            unwrapped = translated;
          }
        }
        throw unwrapped;
      } finally {
        if (sqlSession != null) {
          closeSqlSession(sqlSession, SqlSessionTemplate.this.sqlSessionFactory);
        }
      }
    }
  }

   SqlSessionTemplate
   @Override
  public &lt;E&gt; List&lt;E&gt; selectList(String statement, Object parameter) {
  	//this.sqlSessionProxy(\u5373sqlsession\u7684\u4EE3\u7406\u5BF9\u8C61),\u8C03\u7528\u5904\u7406\u5668SqlSessionInterceptor
    return this.sqlSessionProxy.&lt;E&gt; selectList(statement, parameter);
  }
  MapperMethod\u7684excute\u65B9\u6CD5,\u521D\u59CB\u5316\u65F6\u6784\u5EFAsqlCommand\u548CmethodSignature

  MapperProxy\u7684invoke\u65B9\u6CD5

  MapperProxyFactory\u7684newInstance\u751F\u4EA7mapper\u63A5\u53E3\u7684\u4EE3\u7406\u5BF9\u8C61\uFF0C\u8C03\u7528\u5904\u7406\u5668MapperProxy

  mapperRegistry\u7684getMapper
  configuration\u7684getMapper

  MapperFactoryBean\u7684getObject

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u62E6\u622A\u5668" tabindex="-1"><a class="header-anchor" href="#\u62E6\u622A\u5668" aria-hidden="true">#</a> \u62E6\u622A\u5668</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//mybatis\u7684\u62E6\u622A\u5668\u53EF\u4EE5\u5BF9Executor,statementHandler,parameterhandler\uFF0CresltsestHandler\u589E\u5F3A
\u6838\u5FC3\uFF1A
@Intercepts(
    {
        @Signature(type = Executor.class, method = &quot;query&quot;, args = {MappedStatement.class, Object.class, RowBounds.class, ResultHandler.class}),
        @Signature(type = Executor.class, method = &quot;query&quot;, args = {MappedStatement.class, Object.class, RowBounds.class, ResultHandler.class, CacheKey.class, BoundSql.class}),
    }
)
@Intercepts({@Signature(method = &quot;prepare&quot;, type = StatementHandler.class, args = {Connection.class, Integer.class})})
 @Override
    public Object plugin(Object target)
    {
        if (target instanceof StatementHandler)
        {
            return Plugin.wrap(target, this);
        }
        return target;
    }
    //\u5206\u9875\u63D2\u4EF6 \u5C06\u5206\u9875\u4FE1\u606Fpage(\u5F53\u524D\u9875\uFF0C\u6BCF\u9875\u6761\u6570\uFF0C\u662F\u5426count\u6570\u91CF)\u653E\u5728\u7EBF\u7A0B\u5C40\u90E8\u53D8\u91CF\u4E2D\uFF1APageHelper.startPage(query.getPage(), query.getLimit());
    //\u5728\u6267\u884Cjdbc\u67E5\u8BE2\u524D\uFF0C\u62E6\u622A\u5668\u8FDB\u884C\u62E6\u622A\u5904\u7406\uFF0C\u4ECE\u7EBF\u7A0B\u5C40\u90E8\u53D8\u91CF\u4E2D\u53D6\u5206\u9875\u4FE1\u606F\u6784\u5EFA\u67E5\u8BE2sql\u8BED\u53E5
    //PageInterceptor implements Interceptor,\u91CD\u5199intercept\u65B9\u6CD5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mapperinterface\u4EE3\u7406\u5BF9\u8C61\u7684\u751F\u6210" tabindex="-1"><a class="header-anchor" href="#mapperinterface\u4EE3\u7406\u5BF9\u8C61\u7684\u751F\u6210" aria-hidden="true">#</a> mapperinterface\u4EE3\u7406\u5BF9\u8C61\u7684\u751F\u6210</h2><p>\u5728\u5BB9\u5668\u521D\u59CB\u5316\u65F6\u4F7F\u7528ClasspathMapperScanner,\u751F\u6210mapperinterface\u7684mapperfactoryBean\u7528\u4E8E\u751F\u6210mapper\u4EE3\u7406\u5BF9\u8C61 \u5DE5\u5382bean\u901A\u8FC7getObject\u65B9\u6CD5\u83B7\u53D6\u5176\u751F\u4EA7\u7684\u5BF9\u8C61</p><h2 id="mapperautoconfiguration" tabindex="-1"><a class="header-anchor" href="#mapperautoconfiguration" aria-hidden="true">#</a> MapperAutoConfiguration</h2><p>registerBeanDefinitions\u65B9\u6CD5\u5904\u7406Mapper\u63A5\u53E3\u751F\u6210beanDefinition\u6CE8\u518C\u5230spring\u4E2D\uFF0C\u5E76\u540E\u7F6E\u5904\u7406\u4E3A\u5DE5\u5382bean</p>`,18),r=[l];function d(t,c){return e(),n("div",null,r)}const u=i(a,[["render",d],["__file","mybatis.html.vue"]]);export{u as default};
