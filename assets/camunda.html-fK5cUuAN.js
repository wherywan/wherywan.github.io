import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as l,c as n,e as a}from"./app-hoN0JGLf.js";const s={},i=a(`<h1 id="camunda" tabindex="-1"><a class="header-anchor" href="#camunda"><span>camunda</span></a></h1><h2 id="表" tabindex="-1"><a class="header-anchor" href="#表"><span>表</span></a></h2><h3 id="元数据表ge-re" tabindex="-1"><a class="header-anchor" href="#元数据表ge-re"><span>元数据表GE RE</span></a></h3><blockquote><p>ACT_RE_DEPLOYMENT</p></blockquote><ul><li>部署记录表</li></ul><blockquote><p>ACT_GE_BYTEARRAY</p></blockquote><ul><li>流程元数据表，包含XML信息</li></ul><blockquote><p>ACT_RE_PROCDEF</p></blockquote><ul><li>流程定义表</li></ul><h3 id="历史表hi" tabindex="-1"><a class="header-anchor" href="#历史表hi"><span>历史表HI</span></a></h3><blockquote><p>ACT_HI_PROCINST</p></blockquote><ul><li>存放流程实例记录</li></ul><blockquote><p>ACT_HI_TASKINST</p></blockquote><ul><li>存放流程实例的任务记录</li></ul><blockquote><p>ACT_HI_ACTINST</p></blockquote><ul><li>流程实例所有节点记录，开始、结束、任务节点</li></ul><h3 id="运行表ru" tabindex="-1"><a class="header-anchor" href="#运行表ru"><span>运行表RU</span></a></h3><blockquote><p>ACT_RU_EXECUTION</p></blockquote><ul><li>流程实例表</li></ul><blockquote><p>ACT_RU_IDENTITYLINK</p></blockquote><ul><li>负责处理任务的审批人或候选人</li></ul><blockquote><p>ACT_RU_TASK</p></blockquote><ul><li>当前待执行的任务表</li></ul><h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用"><span>基本使用</span></a></h2><h3 id="表关系" tabindex="-1"><a class="header-anchor" href="#表关系"><span>表关系</span></a></h3><ul><li>act_re_procdef</li><li>act_hi_procinst</li><li>act_hi_actinst</li><li>act_hi_taskinst</li><li>act_ru_task</li><li>act_ru_identitylink</li></ul><h3 id="流程的表数据创建过程" tabindex="-1"><a class="header-anchor" href="#流程的表数据创建过程"><span>流程的表数据创建过程</span></a></h3><ol><li>部署流程，act_re_procdef中创建流程定义</li><li>启动流程，act_hi_procinst中创建流程实例</li><li>创建代办任务，在act_ru_task、act_hi_actinst、act_hi_taskinst创建节点实例</li><li>完成代办任务，删除当前代办任务，更新历史活动表和任务表的任务状态和结束时间，创建下一个代办任务</li><li>流程结束，更新历史流程实例表状态或结束时间</li></ol><h3 id="modeler" tabindex="-1"><a class="header-anchor" href="#modeler"><span>Modeler</span></a></h3><ul><li>model创建审批流程图</li><li>配置用户任务节点</li><li>给任务节点配置审批人及处理监听器</li><li>给节点任务配置创建或完成任务监听器</li><li>使用\${变量}或\${表达式}的形式配置候选人，如\${initial}、\${userService.getRole(&quot;role&quot;)}</li></ul><h3 id="spring-boot" tabindex="-1"><a class="header-anchor" href="#spring-boot"><span>spring boot</span></a></h3><blockquote><p>引入jar包</p></blockquote><div class="language-groovy line-numbers-mode" data-ext="groovy" data-title="groovy"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span style="color:#008000;">// gradle</span></span>
<span class="line"><span style="color:#000000;">project(</span><span style="color:#A31515;">&#39;:learning-research&#39;</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#000000;">    dependencies {</span></span>
<span class="line"><span style="color:#000000;">        implementation </span><span style="color:#A31515;">&#39;org.springframework.boot:spring-boot-starter-web&#39;</span></span>
<span class="line"><span style="color:#000000;">        implementation </span><span style="color:#A31515;">&#39;org.camunda.bpm.springboot:camunda-bpm-spring-boot-starter-webapp:7.15.0&#39;</span></span>
<span class="line"><span style="color:#000000;">        implementation </span><span style="color:#A31515;">&#39;mysql:mysql-connector-java&#39;</span></span>
<span class="line"><span style="color:#000000;">        implementation </span><span style="color:#A31515;">&#39;org.springframework.boot:spring-boot-starter-jdbc&#39;</span></span>
<span class="line"><span style="color:#000000;">        implementation </span><span style="color:#A31515;">&#39;junit:junit:4.13.2&#39;</span></span>
<span class="line"><span style="color:#000000;">        implementation </span><span style="color:#A31515;">&#39;com.baomidou:mybatis-plus-boot-starter:3.5.2&#39;</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>流程部署</p></blockquote><ul><li>resource文件夹中创建processes文件夹存放bpmn流程XML</li><li>repositoryservice加载XML文件部署流程</li></ul><blockquote><p>启动流程</p></blockquote><ul><li>runtimeService创建流程实例，配置流程变量</li><li>创建第一个代办任务</li></ul><blockquote><p>执行流程实例中的节点任务</p></blockquote><ul><li>通过代理人及候选代理人查询代办任务</li><li>设置任务处理人</li><li>处理任务，触发任务监听器，执行具体任务操作</li></ul><h3 id="任务的流转处理" tabindex="-1"><a class="header-anchor" href="#任务的流转处理"><span>任务的流转处理</span></a></h3><ul><li>前一个任务节点处理完成，同时创建第二个代办任务</li><li>任务处理时要设置处理意见，同意还是驳回，从而决定任务的流向</li><li>任务流向上的表达式</li></ul><h3 id="监听器" tabindex="-1"><a class="header-anchor" href="#监听器"><span>监听器</span></a></h3><ul><li>任务监听器</li><li>执行监听器</li></ul><h4 id="接口方式" tabindex="-1"><a class="header-anchor" href="#接口方式"><span>接口方式</span></a></h4><ul><li>TaskListener</li><li>ExecutionListener</li><li>实现上述接口,实现notify方法</li></ul><h4 id="spring事件总线" tabindex="-1"><a class="header-anchor" href="#spring事件总线"><span>spring事件总线</span></a></h4><p>使用spring事件机制，即@EventListener注解，使用条件表达式表示处理某一任务的create或complete事件</p><blockquote><p>示例</p></blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span style="color:#000000;">@</span><span style="color:#267F99;">Component</span></span>
<span class="line"><span style="color:#0000FF;">class</span><span style="color:#267F99;"> MyTaskListener</span><span style="color:#000000;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">  @</span><span style="color:#267F99;">EventListener</span><span style="color:#000000;">(condition=</span><span style="color:#A31515;">&quot;#taskDelegate.eventName==&#39;create&#39; &amp;&amp; #taskDelegate.taskDefinitionKey==&#39;task_confirm&#39;&quot;</span><span style="color:#000000;">)</span></span>
<span class="line"><span style="color:#0000FF;">  public</span><span style="color:#267F99;"> void</span><span style="color:#795E26;"> onTaskEvent</span><span style="color:#000000;">(</span><span style="color:#267F99;">DelegateTask</span><span style="color:#001080;"> taskDelegate</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#008000;">  // 处理被task_confirm任务触发的任务事件</span></span>
<span class="line"><span style="color:#000000;">  }</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>开启spring事件配置</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span style="color:#0000FF;">camunda.bpm.eventing.execution=true</span></span>
<span class="line"><span style="color:#0000FF;">camunda.bpm.eventing.history=true</span></span>
<span class="line"><span style="color:#0000FF;">camunda.bpm.eventing.task=true</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些属性分别控制执行、历史事件和任务的三个事件流。</p>`,52),t=[i];function o(p,c){return l(),n("div",null,t)}const u=e(s,[["render",o],["__file","camunda.html.vue"]]),h=JSON.parse('{"path":"/note/web/camunda.html","title":"camunda","lang":"zh-CN","frontmatter":{"category":["web"],"description":"camunda 表 元数据表GE RE ACT_RE_DEPLOYMENT 部署记录表 ACT_GE_BYTEARRAY 流程元数据表，包含XML信息 ACT_RE_PROCDEF 流程定义表 历史表HI ACT_HI_PROCINST 存放流程实例记录 ACT_HI_TASKINST 存放流程实例的任务记录 ACT_HI_ACTINST 流程实例所有...","head":[["meta",{"property":"og:url","content":"https://wherywan.github.io/note/web/camunda.html"}],["meta",{"property":"og:site_name","content":"HONG_JI"}],["meta",{"property":"og:title","content":"camunda"}],["meta",{"property":"og:description","content":"camunda 表 元数据表GE RE ACT_RE_DEPLOYMENT 部署记录表 ACT_GE_BYTEARRAY 流程元数据表，包含XML信息 ACT_RE_PROCDEF 流程定义表 历史表HI ACT_HI_PROCINST 存放流程实例记录 ACT_HI_TASKINST 存放流程实例的任务记录 ACT_HI_ACTINST 流程实例所有..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-08T08:56:17.000Z"}],["meta",{"property":"article:author","content":"wanhongji"}],["meta",{"property":"article:modified_time","content":"2024-11-08T08:56:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"camunda\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-08T08:56:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"wanhongji\\"}]}"]]},"headers":[{"level":2,"title":"表","slug":"表","link":"#表","children":[{"level":3,"title":"元数据表GE RE","slug":"元数据表ge-re","link":"#元数据表ge-re","children":[]},{"level":3,"title":"历史表HI","slug":"历史表hi","link":"#历史表hi","children":[]},{"level":3,"title":"运行表RU","slug":"运行表ru","link":"#运行表ru","children":[]}]},{"level":2,"title":"基本使用","slug":"基本使用","link":"#基本使用","children":[{"level":3,"title":"表关系","slug":"表关系","link":"#表关系","children":[]},{"level":3,"title":"流程的表数据创建过程","slug":"流程的表数据创建过程","link":"#流程的表数据创建过程","children":[]},{"level":3,"title":"Modeler","slug":"modeler","link":"#modeler","children":[]},{"level":3,"title":"spring boot","slug":"spring-boot","link":"#spring-boot","children":[]},{"level":3,"title":"任务的流转处理","slug":"任务的流转处理","link":"#任务的流转处理","children":[]},{"level":3,"title":"监听器","slug":"监听器","link":"#监听器","children":[]}]}],"git":{"createdTime":1665483062000,"updatedTime":1731056177000,"contributors":[{"name":"wanhongji","email":"wherywan@163.com","commits":1},{"name":"wanhongji","email":"wheywan@163.com","commits":1}]},"readingTime":{"minutes":2.26,"words":677},"filePathRelative":"note/web/camunda.md","localizedDate":"2022年10月11日","excerpt":"\\n<h2>表</h2>\\n<h3>元数据表GE RE</h3>\\n<blockquote>\\n<p>ACT_RE_DEPLOYMENT</p>\\n</blockquote>\\n<ul>\\n<li>部署记录表</li>\\n</ul>\\n<blockquote>\\n<p>ACT_GE_BYTEARRAY</p>\\n</blockquote>\\n<ul>\\n<li>流程元数据表，包含XML信息</li>\\n</ul>\\n<blockquote>\\n<p>ACT_RE_PROCDEF</p>\\n</blockquote>\\n<ul>\\n<li>流程定义表</li>\\n</ul>\\n<h3>历史表HI</h3>\\n<blockquote>\\n<p>ACT_HI_PROCINST</p>\\n</blockquote>","autoDesc":true}');export{u as comp,h as data};
