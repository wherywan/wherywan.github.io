import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,o,c as r,a as n,b as i,d as e,e as l}from"./app-hoN0JGLf.js";const p={},u=l(`<h1 id="mybatis-plus" tabindex="-1"><a class="header-anchor" href="#mybatis-plus"><span>mybatis-plus</span></a></h1><h2 id="mybatisplusautoconfiguration和mybatisautoconfiguration优先级问题" tabindex="-1"><a class="header-anchor" href="#mybatisplusautoconfiguration和mybatisautoconfiguration优先级问题"><span>MybatisPlusAutoConfiguration和MybatisAutoConfiguration优先级问题</span></a></h2><p>在AutoConfigurationSorter类中，因为MybatisAutoConfiguration和MybatisPlusAutoConfiguration两个自动配置类都没有指定AutoConfigureOrder， 所以就直接按照全限定类名进行排序了。</p><h2 id="自定义内容" tabindex="-1"><a class="header-anchor" href="#自定义内容"><span>自定义内容</span></a></h2><ul><li>MybatisPlusAutoConfiguration <ul><li>sqlSessionFactory方法</li></ul></li><li>MybatisSqlSessionFactoryBean <ul><li>buildSqlSessionFactory方法</li></ul></li><li>MybatisConfiguration</li><li>MybatisMapperRegistry继承MapperRegistry</li><li>MybatisMapperProxyFactory</li><li>MybatisMapperAnnotationBuilder</li><li>AutoConfiguredMapperScannerRegistrar</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span> @Configuration</span></span>
<span class="line"><span>    @Import(AutoConfiguredMapperScannerRegistrar.class)</span></span>
<span class="line"><span>    @ConditionalOnMissingBean({MapperFactoryBean.class, MapperScannerConfigurer.class})</span></span>
<span class="line"><span>    public static class MapperScannerRegistrarNotFoundConfiguration implements InitializingBean {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        @Override</span></span>
<span class="line"><span>        public void afterPropertiesSet() {</span></span>
<span class="line"><span>            logger.debug(</span></span>
<span class="line"><span>                &quot;Not found configuration for registering mapper bean using @MapperScan, MapperFactoryBean and MapperScannerConfigurer.&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mapperscannerconfigurer实现beandefinitionregistrypostprocessor" tabindex="-1"><a class="header-anchor" href="#mapperscannerconfigurer实现beandefinitionregistrypostprocessor"><span>MapperScannerConfigurer实现BeanDefinitionRegistryPostProcessor</span></a></h2><p>创建ClassPathMapperScanner scanner = new ClassPathMapperScanner(registry);</p><p>processBeanDefinitions(beanDefinitions);转为工厂beanDefinition</p><p>扫描mapper为MapperFactoryBean</p>`,10),c={href:"https://blog.csdn.net/java_lujj/article/details/126698143",target:"_blank",rel:"noopener noreferrer"},d={href:"https://article.itxueyuan.com/QnMJr1",target:"_blank",rel:"noopener noreferrer"},y=n("h2",{id:"配置加载流程",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置加载流程"},[n("span",null,"配置加载流程")])],-1),g=n("ol",null,[n("li",null,"MybatisPlusAutoConfiguration下的sqlSessionFactory方法"),n("li",null,"MybatisSqlSessionFactoryBean下的buildSqlSessionFactory方法"),n("li",null,"xmlMapperBuilder.parse()生成对应@Mapper注解的类的方法的MappedStatement"),n("li",null,"bindMapperForNamespace"),n("li",null,"MybatisConfiguration的addMapper, mybatisMapperRegistry.addMapper(type);"),n("li",null,"缓存MapperProxyFactory用于生成Mapper代理对象,knownMappers.put(type, new MybatisMapperProxyFactory<>(type));"),n("li",null,"MybatisMapperAnnotationBuilder下的parse方法，解析xml为MappedStatement,注入 CURD 动态 SQL ,")],-1);function b(m,f){const a=s("ExternalLinkIcon");return o(),r("div",null,[u,n("p",null,[n("a",c,[i("参考依赖注入"),e(a)])]),n("p",null,[n("a",d,[i("参考依赖注入"),e(a)])]),y,g])}const C=t(p,[["render",b],["__file","mybatisplus.html.vue"]]),A=JSON.parse('{"path":"/note/%E4%B8%AD%E9%97%B4%E4%BB%B6/mybatisplus.html","title":"mybatis-plus","lang":"zh-CN","frontmatter":{"description":"mybatis-plus MybatisPlusAutoConfiguration和MybatisAutoConfiguration优先级问题 在AutoConfigurationSorter类中，因为MybatisAutoConfiguration和MybatisPlusAutoConfiguration两个自动配置类都没有指定AutoConfigu...","head":[["meta",{"property":"og:url","content":"https://wherywan.github.io/note/%E4%B8%AD%E9%97%B4%E4%BB%B6/mybatisplus.html"}],["meta",{"property":"og:site_name","content":"HONG_JI"}],["meta",{"property":"og:title","content":"mybatis-plus"}],["meta",{"property":"og:description","content":"mybatis-plus MybatisPlusAutoConfiguration和MybatisAutoConfiguration优先级问题 在AutoConfigurationSorter类中，因为MybatisAutoConfiguration和MybatisPlusAutoConfiguration两个自动配置类都没有指定AutoConfigu..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-07T01:26:56.000Z"}],["meta",{"property":"article:author","content":"wanhongji"}],["meta",{"property":"article:modified_time","content":"2023-04-07T01:26:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"mybatis-plus\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-07T01:26:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"wanhongji\\"}]}"]]},"headers":[{"level":2,"title":"MybatisPlusAutoConfiguration和MybatisAutoConfiguration优先级问题","slug":"mybatisplusautoconfiguration和mybatisautoconfiguration优先级问题","link":"#mybatisplusautoconfiguration和mybatisautoconfiguration优先级问题","children":[]},{"level":2,"title":"自定义内容","slug":"自定义内容","link":"#自定义内容","children":[]},{"level":2,"title":"MapperScannerConfigurer实现BeanDefinitionRegistryPostProcessor","slug":"mapperscannerconfigurer实现beandefinitionregistrypostprocessor","link":"#mapperscannerconfigurer实现beandefinitionregistrypostprocessor","children":[]},{"level":2,"title":"配置加载流程","slug":"配置加载流程","link":"#配置加载流程","children":[]}],"git":{"createdTime":1680830816000,"updatedTime":1680830816000,"contributors":[{"name":"wanhongji","email":"wherywan@163.com","commits":1}]},"readingTime":{"minutes":0.73,"words":219},"filePathRelative":"note/中间件/mybatisplus.md","localizedDate":"2023年4月7日","excerpt":"\\n<h2>MybatisPlusAutoConfiguration和MybatisAutoConfiguration优先级问题</h2>\\n<p>在AutoConfigurationSorter类中，因为MybatisAutoConfiguration和MybatisPlusAutoConfiguration两个自动配置类都没有指定AutoConfigureOrder，\\n所以就直接按照全限定类名进行排序了。</p>\\n<h2>自定义内容</h2>\\n<ul>\\n<li>MybatisPlusAutoConfiguration\\n<ul>\\n<li>sqlSessionFactory方法</li>\\n</ul>\\n</li>\\n<li>MybatisSqlSessionFactoryBean\\n<ul>\\n<li>buildSqlSessionFactory方法</li>\\n</ul>\\n</li>\\n<li>MybatisConfiguration</li>\\n<li>MybatisMapperRegistry继承MapperRegistry</li>\\n<li>MybatisMapperProxyFactory</li>\\n<li>MybatisMapperAnnotationBuilder</li>\\n<li>AutoConfiguredMapperScannerRegistrar</li>\\n</ul>","autoDesc":true}');export{C as comp,A as data};