import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as c,c as t,a as s,b as a,d as e,e as l}from"./app-hoN0JGLf.js";const r={},o=l('<h1 id="es" tabindex="-1"><a class="header-anchor" href="#es"><span>es</span></a></h1><h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念"><span>概念</span></a></h2><p>es是一个可扩展的高性能的用于数据分析的全文搜索引擎。提供了收集、分析、存储数据的功能。</p><ul><li>分片是底层的工作单元，文档保存在分片内，分片保存在集群节点</li><li>索引自动分片</li><li>内部使用lucene做索引及搜索</li><li>进一部封装lucene的内部复杂性</li><li>提供restful接口Api</li></ul><table><thead><tr><th style="text-align:left;">es</th><th>mysql</th><th>es</th><th>mysql</th></tr></thead><tbody><tr><td style="text-align:left;">index</td><td>database</td><td>everything is indexed 倒排索引</td><td>index</td></tr><tr><td style="text-align:left;">type</td><td>table</td><td>query dsl</td><td>dsl</td></tr><tr><td style="text-align:left;">document</td><td>row</td><td>get url</td><td>select</td></tr><tr><td style="text-align:left;">field</td><td>column</td><td>put url</td><td>update</td></tr><tr><td style="text-align:left;">mapping</td><td>scheme</td><td></td><td></td></tr></tbody></table><p>mapping 定义了索引下字段处理规则，索引如何建立，索引类型，是否分词处理，如何分词处理</p><p>scheme定义了表及表字段，表和字段的关系</p><p>@Document作用于类，用于标记实体类为文档对象，使用json格式将数据存储，实际发送json格式的字符串给es。</p><p>存储在es的一条数据即是一个文档，es会索引每个 文档的内容，索引是document集，可进行分片存储数据，分片可进行备份</p><h2 id="字段数据类型" tabindex="-1"><a class="header-anchor" href="#字段数据类型"><span>字段数据类型</span></a></h2><ul><li>keyword 类型</li></ul><p>keyword 类型：存储数据时候，不会分词建立索引，支持模糊、支持精确匹配；支持聚合、排序操作。</p><p>keyword 类型的最大支持的长度为——32766个UTF-8类型的字符，可以通过设置 ignore_above 指定自持字符长度，超过给定长度后的数据将不被索引，无法通过 term 精确匹配检索返回结果。</p><p>使用场景： 存储邮箱号码、url、name、title，手机号码、主机名、状态码、邮政编码、标签、年龄、性别等数据。 用于筛选数据（例如: select * from x where status=&#39;open&#39;)、排序、聚合(统计)）。 直接将完整的文本保存到倒排索引中。</p><ul><li>text 类型</li></ul><p>text 类型：存储数据时候，会自动分词，并生成索引，支持全文检索、支持模糊、精确查询；不支持聚合和排序操作。</p><p>text 类型的最大支持的字符长度无限制，适合大字段存储。</p><p>使用场景： 存储全文搜索数据，例如：邮箱内容、地址、代码块、博客文章内容等。</p><p>默认结合 standard analyzer（标准解析器）对文本进行分词、倒排索引。 默认结合标准分析器进行词命中、词频相关度打分。</p><p><strong>所以创建索引时，当字段需要进行排序、分组、聚合等操作时，需要使用 keyword 类型。</strong></p><h2 id="es集群" tabindex="-1"><a class="header-anchor" href="#es集群"><span>es集群</span></a></h2>',21),d={href:"https://www.cnblogs.com/hyq0823/p/11569606.html",target:"_blank",rel:"noopener noreferrer"},u=s("h2",{id:"match、match-phrase、match-phrase-prefix的区别",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#match、match-phrase、match-phrase-prefix的区别"},[s("span",null,"match、match_phrase、match_phrase_prefix的区别")])],-1),v={href:"https://zhuanlan.zhihu.com/p/142641300",target:"_blank",rel:"noopener noreferrer"},m=l('<ul><li>match 检索关键字分词，只要有一个包含在文档的字段的分词结果中</li><li>match_phrase 会将检索关键词分词。match_phrase的分词结果必须在被检索字段的分词中都包含，而且顺序必须相同，而且默认必须都是连续的。</li><li>match_phrase_prefix 与match_phrase查询类似，但是会对最后一个Token在倒排序索引列表中进行通配符搜索。Token的模糊匹配数控制：max_expansions 默认值为50</li></ul><h2 id="倒排索引" tabindex="-1"><a class="header-anchor" href="#倒排索引"><span>倒排索引</span></a></h2><p>以分词后的单词或词组作为键，document或记录地址作为值</p><h2 id="正排索引" tabindex="-1"><a class="header-anchor" href="#正排索引"><span>正排索引</span></a></h2><p>与倒排索引相反</p><h2 id="内核" tabindex="-1"><a class="header-anchor" href="#内核"><span>内核</span></a></h2>',6),b={href:"https://blog.csdn.net/m386084855/article/details/120750641",target:"_blank",rel:"noopener noreferrer"},y=l(`<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api"><span>api</span></a></h2><h3 id="查看节点负载" tabindex="-1"><a class="header-anchor" href="#查看节点负载"><span>查看节点负载</span></a></h3><p>Elasticsearch 中的负载平均值通常是指节点的负载平均1分钟值（1-minute load average）。</p><p>这是根据节点的线程队列长度和线程等待时间等指标计算得出的。负载平均值越高，表示节点当前的负荷越大，有更多的请求正在等待处理。</p><div class="language-http line-numbers-mode" data-ext="http" data-title="http"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span style="color:#AF00DB;">GET</span><span style="color:#000000;"> http://&lt;elasticsearch_host&gt;:&lt;port&gt;/_nodes/stats/os</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="更新" tabindex="-1"><a class="header-anchor" href="#更新"><span>更新</span></a></h2><ul><li>根据id更新</li><li>查询后脚本更新</li></ul><h3 id="update-7-14" tabindex="-1"><a class="header-anchor" href="#update-7-14"><span>_update 7.14</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span># 更新对应字段</span></span>
<span class="line"><span>POST manufacturer_device/_update/DEA0637BC19YZ6636093</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;doc&quot;: {</span></span>
<span class="line"><span>     &quot;collector_no&quot; : &quot;DEA0637BC1&quot;,</span></span>
<span class="line"><span>    &quot;inverter_no&quot; : &quot;9YZ6636093&quot;,</span></span>
<span class="line"><span>    &quot;manufacturer&quot; : &quot;growattapi&quot;,</span></span>
<span class="line"><span>    &quot;type&quot; : 1</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span># 存在更新，不存在使用要更新字段插入</span></span>
<span class="line"><span>POST manufacturer_device/_update/DEA0637BC19YZ6636093</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;doc&quot;: {</span></span>
<span class="line"><span>    &quot;type&quot; : 2</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;doc_as_upsert&quot;: true</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 存在更新，不存在使用upsert要更新字段插入</span></span>
<span class="line"><span>POST manufacturer_device/_update/DEA0637BC19YZ6636093</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;doc&quot;: {</span></span>
<span class="line"><span>     &quot;collector_no&quot; : &quot;DEA0637BC1&quot;,</span></span>
<span class="line"><span>    &quot;inverter_no&quot; : &quot;9YZ6636093&quot;,</span></span>
<span class="line"><span>    &quot;manufacturer&quot; : &quot;growattapi&quot;,</span></span>
<span class="line"><span>    &quot;type&quot; : 1</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;upsert&quot;: {}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span># 文档存在使用脚本更新，不存在插入后，根据scripted_upsert是否使用脚本更新</span></span>
<span class="line"><span>POST manufacturer_device/_update/DEA0637BC19YZ6636093</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;scripted_upsert&quot;: true,</span></span>
<span class="line"><span>  &quot;script&quot;: {</span></span>
<span class="line"><span>    &quot;source&quot;: &quot;ctx._source.type += params.count&quot;,</span></span>
<span class="line"><span>    &quot;lang&quot;: &quot;painless&quot;,</span></span>
<span class="line"><span>    &quot;params&quot;: {</span></span>
<span class="line"><span>      &quot;count&quot;: 1</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;upsert&quot;: {}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 根据条件更新</span></span>
<span class="line"><span>POST manufacturer_device/_update_by_query</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;query&quot;: {},</span></span>
<span class="line"><span>  &quot;script&quot;: {</span></span>
<span class="line"><span>    &quot;source&quot;: &quot;SCRIPT&quot;,</span></span>
<span class="line"><span>    &quot;lang&quot;: &quot;painless&quot;,</span></span>
<span class="line"><span>    &quot;params&quot;: {</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="update" tabindex="-1"><a class="header-anchor" href="#update"><span>_update</span></a></h3>`,10),h={href:"https://blog.csdn.net/he1234555/article/details/126575957",target:"_blank",rel:"noopener noreferrer"},q=l(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>PUT test/type1/1</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;counter&quot; : 1,</span></span>
<span class="line"><span>    &quot;tags&quot; : [&quot;red&quot;]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>POST test/type1/1/_update</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;script&quot; : {</span></span>
<span class="line"><span>        &quot;source&quot;: &quot;ctx._source.counter += params.count&quot;,</span></span>
<span class="line"><span>        &quot;lang&quot;: &quot;painless&quot;,</span></span>
<span class="line"><span>        &quot;params&quot; : {</span></span>
<span class="line"><span>            &quot;count&quot; : 4</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>POST test/type1/1/_update</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;script&quot; : {</span></span>
<span class="line"><span>        &quot;source&quot;: &quot;ctx._source.tags.add(params.tag)&quot;,</span></span>
<span class="line"><span>        &quot;lang&quot;: &quot;painless&quot;,</span></span>
<span class="line"><span>        &quot;params&quot; : {</span></span>
<span class="line"><span>            &quot;tag&quot; : &quot;blue&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 添加字段</span></span>
<span class="line"><span>POST test/type1/1/_update</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;script&quot; : &quot;ctx._source.new_field = &#39;value_of_new_field&#39;&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>//删除字段</span></span>
<span class="line"><span>POST test/type1/1/_update</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;script&quot; : &quot;ctx._source.remove(&#39;new_field&#39;)&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="update-by-query" tabindex="-1"><a class="header-anchor" href="#update-by-query"><span>_update_by_query</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>POST index_name/_update_by_query</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;query&quot;: {</span></span>
<span class="line"><span>    &quot;match&quot;: {</span></span>
<span class="line"><span>      &quot;条件&quot;: &quot;8fe6e9b2a9330862&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;script&quot;: {</span></span>
<span class="line"><span>    &quot;source&quot;: &quot;ctx._source[&#39;column&#39;] = params[&#39;one&#39;]&quot;,</span></span>
<span class="line"><span>    &quot;params&quot;: {</span></span>
<span class="line"><span>      &quot;one&quot;: &quot;修改后的值&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例:</span></span>
<span class="line"><span>POST xxxx_company/_update_by_query</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;query&quot;: {</span></span>
<span class="line"><span>    &quot;match&quot;: {</span></span>
<span class="line"><span>      &quot;_id&quot;: &quot;8fe6e9b2a9330862&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;script&quot;: {</span></span>
<span class="line"><span>    &quot;source&quot;: &quot;ctx._source[&#39;eps&#39;] = params[&#39;one&#39;]&quot;,</span></span>
<span class="line"><span>    &quot;params&quot;: {</span></span>
<span class="line"><span>      &quot;one&quot;: {</span></span>
<span class="line"><span>        &quot;value&quot;: 1.0,</span></span>
<span class="line"><span>        &quot;value_usd&quot;: 1.1</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="搜索" tabindex="-1"><a class="header-anchor" href="#搜索"><span>搜索</span></a></h2><p>查询分为基于文本和基于词项的查询。</p><p>filter 和must_not不打分</p><h3 id="term-terms" tabindex="-1"><a class="header-anchor" href="#term-terms"><span>term/terms</span></a></h3><ul><li>term精确匹配不分词查询，需保证存储也是完整，不分词存储，使用keyword类型</li><li>terms传递多个字段，匹配其中一个字段即可</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>GET /customer/doc/_search/</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;query&quot;: {</span></span>
<span class="line"><span>    &quot;term&quot;: {</span></span>
<span class="line"><span>      &quot;title&quot;:   &quot;blog&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>-- filter查询,必须相等,过滤</span></span>
<span class="line"><span>{&quot;query&quot;: {</span></span>
<span class="line"><span>    &quot;bool&quot;: {</span></span>
<span class="line"><span>      &quot;filter&quot;: {</span></span>
<span class="line"><span>        &quot;term&quot;: {&quot;id&quot;: &quot;13&quot;}</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- bool使用terms</span></span>
<span class="line"><span>{&quot;query&quot;: {</span></span>
<span class="line"><span>    &quot;bool&quot;: {</span></span>
<span class="line"><span>      &quot;must&quot;: [</span></span>
<span class="line"><span>       {&quot;terms&quot;:{&quot;node_standard_code&quot;:[1001,1002,1004,1007]}}</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{&quot;query&quot;: {</span></span>
<span class="line"><span>    &quot;bool&quot;: {</span></span>
<span class="line"><span>      &quot;filter&quot;: {</span></span>
<span class="line"><span>       {&quot;terms&quot;:{&quot;node_standard_code&quot;:[1001,1002,1004,1007]}}</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="指定字段查询-match" tabindex="-1"><a class="header-anchor" href="#指定字段查询-match"><span>指定字段查询：match</span></a></h3><p>es使用match,会对查询条件分词后进行匹配查询，match本质是对term的结果组合</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>如果要在字段中搜索特定字词，可以使用match; 如下语句将查询address 字段中包含 mill 或者 lane的数据</span></span>
<span class="line"><span></span></span>
<span class="line"><span>GET /bank/_search</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;query&quot;: { &quot;match&quot;: { &quot;address&quot;: &quot;mill lane&quot; } }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="搜索所有macth-all" tabindex="-1"><a class="header-anchor" href="#搜索所有macth-all"><span>搜索所有macth_all</span></a></h3><p>es查询所有matchall ,sort排序</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>GET /bank/_search</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;query&quot;: { &quot;match_all&quot;: {} },</span></span>
<span class="line"><span>  &quot;sort&quot;: [</span></span>
<span class="line"><span>    { &quot;account_number&quot;: &quot;asc&quot; }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分页查询-from-size" tabindex="-1"><a class="header-anchor" href="#分页查询-from-size"><span>分页查询(from+size)</span></a></h3><p>es分页查询from,size</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>GET /bank/_search</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;query&quot;: { &quot;match_all&quot;: {} },</span></span>
<span class="line"><span>  &quot;sort&quot;: [</span></span>
<span class="line"><span>    { &quot;account_number&quot;: &quot;asc&quot; }</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;from&quot;: 10,</span></span>
<span class="line"><span>  &quot;size&quot;: 10</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查询段落匹配-match-phrase" tabindex="-1"><a class="header-anchor" href="#查询段落匹配-match-phrase"><span>查询段落匹配：match_phrase</span></a></h3><p>es的match_phrase</p><p>如果我们希望查询的条件是 address字段中包含 &quot;mill lane&quot;，则可以使用<code>match_phrase</code></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>GET /bank/_search</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;query&quot;: { &quot;match_phrase&quot;: { &quot;address&quot;: &quot;mill lane&quot; } }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多条件查询-bool" tabindex="-1"><a class="header-anchor" href="#多条件查询-bool"><span>多条件查询: bool</span></a></h3><p>如果要构造更复杂的查询，可以使用<code>bool</code>查询来组合多个查询条件。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>GET /bank/_search</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;query&quot;: {</span></span>
<span class="line"><span>    &quot;bool&quot;: {</span></span>
<span class="line"><span>      &quot;must&quot;: [</span></span>
<span class="line"><span>        { &quot;match&quot;: { &quot;age&quot;: &quot;40&quot; } }</span></span>
<span class="line"><span>      ],</span></span>
<span class="line"><span>      &quot;must_not&quot;: [</span></span>
<span class="line"><span>        { &quot;match&quot;: { &quot;state&quot;: &quot;ID&quot; } }</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>must</code>, <code>should</code>, <code>must_not</code> 和 <code>filter</code> 都是<code>bool</code>查询的子句。那么<code>filter</code>和上述<code>query</code>子句有啥区别呢？</p><p>两者都可以写查询条件，而且语法也类似。区别在于，<strong>query 上下文的条件是用来给文档打分的，匹配越好 _score 越高；filter 的条件只产生两种结果：符合与不符合，后者被过滤掉</strong>。</p><h3 id="聚合查询-aggregation" tabindex="-1"><a class="header-anchor" href="#聚合查询-aggregation"><span>聚合查询：Aggregation</span></a></h3><p><strong>我们知道SQL中有group by，在ES中它叫Aggregation，即聚合运算。</strong></p><h4 id="简单聚合" tabindex="-1"><a class="header-anchor" href="#简单聚合"><span>简单聚合</span></a></h4><p>比如我们希望计算出account每个州的统计数量， 使用<code>aggs</code>关键字对<code>state</code>字段聚合，被聚合的字段无需对分词统计，所以使用<code>state.keyword</code>对整个字段统计</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>GET /bank/_search</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;size&quot;: 0,</span></span>
<span class="line"><span>  &quot;aggs&quot;: {</span></span>
<span class="line"><span>    &quot;group_by_state&quot;: {</span></span>
<span class="line"><span>      &quot;terms&quot;: {</span></span>
<span class="line"><span>        &quot;field&quot;: &quot;state.keyword&quot;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="嵌套聚合" tabindex="-1"><a class="header-anchor" href="#嵌套聚合"><span>嵌套聚合</span></a></h4><p>ES还可以处理个聚合条件的嵌套。</p><p>比如承接上个例子， 计算每个州的平均结余。涉及到的就是在对state分组的基础上，嵌套计算avg(balance):</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>GET /bank/_search</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;size&quot;: 0,</span></span>
<span class="line"><span>  &quot;aggs&quot;: {</span></span>
<span class="line"><span>    &quot;group_by_state&quot;: {</span></span>
<span class="line"><span>      &quot;terms&quot;: {</span></span>
<span class="line"><span>        &quot;field&quot;: &quot;state.keyword&quot;</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      &quot;aggs&quot;: {</span></span>
<span class="line"><span>        &quot;average_balance&quot;: {</span></span>
<span class="line"><span>          &quot;avg&quot;: {</span></span>
<span class="line"><span>            &quot;field&quot;: &quot;balance&quot;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="对聚合结果排序" tabindex="-1"><a class="header-anchor" href="#对聚合结果排序"><span>对聚合结果排序</span></a></h4><p>可以通过在aggs中对嵌套聚合的结果进行排序</p><p>比如承接上个例子， 对嵌套计算出的avg(balance)，这里是average_balance，进行排序</p><h2 id="索引管理" tabindex="-1"><a class="header-anchor" href="#索引管理"><span>索引管理</span></a></h2><h3 id="创建索引" tabindex="-1"><a class="header-anchor" href="#创建索引"><span>创建索引</span></a></h3><p>我们创建一个user 索引<code>test-index-users</code>，其中包含三个属性：name，age, remarks; 存储在一个分片一个副本上。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>PUT /test-index-users</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;settings&quot;: {</span></span>
<span class="line"><span>		&quot;number_of_shards&quot;: 1,</span></span>
<span class="line"><span>		&quot;number_of_replicas&quot;: 1</span></span>
<span class="line"><span>	},</span></span>
<span class="line"><span>  &quot;mappings&quot;: {</span></span>
<span class="line"><span>    &quot;properties&quot;: {</span></span>
<span class="line"><span>      &quot;name&quot;: {</span></span>
<span class="line"><span>        &quot;type&quot;: &quot;text&quot;,</span></span>
<span class="line"><span>        &quot;fields&quot;: {</span></span>
<span class="line"><span>          &quot;keyword&quot;: { //不进行分词索引</span></span>
<span class="line"><span>            &quot;type&quot;: &quot;keyword&quot;,</span></span>
<span class="line"><span>            &quot;ignore_above&quot;: 256</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      &quot;age&quot;: {</span></span>
<span class="line"><span>        &quot;type&quot;: &quot;long&quot;</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      &quot;remarks&quot;: {</span></span>
<span class="line"><span>        &quot;type&quot;: &quot;text&quot; // 数据类型</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分词结果" tabindex="-1"><a class="header-anchor" href="#分词结果"><span>分词结果</span></a></h2>`,45),g={href:"https://www.jianshu.com/p/9823288ff1d1",target:"_blank",rel:"noopener noreferrer"},F=l(`<p>term条件的区分大小写，而实际上，text数据经过默认的standard analyzer分词器分词，大写字母全部转为了小写字母，并存入了倒排索引以供搜索。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span># 创建索引</span></span>
<span class="line"><span>PUT test_match</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看字段的分词后存储在倒排索引的值</span></span>
<span class="line"><span>GET test_match/_analyze</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;field&quot;: &quot;{field}&quot;,</span></span>
<span class="line"><span>  &quot;text&quot;: []</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="信息查看" tabindex="-1"><a class="header-anchor" href="#信息查看"><span>信息查看</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>//查看索引设置</span></span>
<span class="line"><span>get indexName/settings</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//查看字段映射</span></span>
<span class="line"><span>get indexName/mappings</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看分词结果" tabindex="-1"><a class="header-anchor" href="#查看分词结果"><span>查看分词结果</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>GET device_info/_doc/230277cdcd684105945aaa246707e0a3/_termvectors?fields=name</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="修改查询限制" tabindex="-1"><a class="header-anchor" href="#修改查询限制"><span>修改查询限制</span></a></h2><h3 id="设置结果最大窗口" tabindex="-1"><a class="header-anchor" href="#设置结果最大窗口"><span>设置结果最大窗口</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>put _all/_settings</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>&quot;index.max_result_window&quot;:200000</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>searchSourceBuilder.trackTotalHits(true);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>GET 索引名/_search</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>&quot;query&quot;: {</span></span>
<span class="line"><span>      &quot;match_all&quot;: {}</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>&quot;track_total_hits&quot;:true</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建索引添加配置" tabindex="-1"><a class="header-anchor" href="#创建索引添加配置"><span>创建索引添加配置</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>&quot;settings&quot;:{</span></span>
<span class="line"><span>        &quot;index&quot;:{</span></span>
<span class="line"><span>              &quot;max_result_window&quot;: 500000</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scroll查询" tabindex="-1"><a class="header-anchor" href="#scroll查询"><span>scroll查询</span></a></h3>`,12),x={href:"https://cloud.tencent.com/developer/article/2050983",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.cnblogs.com/xing901022/p/5284902.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://blog.csdn.net/lom9357bye/article/details/64500638",target:"_blank",rel:"noopener noreferrer"},S=l(`<p>一次从各分片中查到所有匹配的文档，返回分片数*size大小的hits记录，并获得下一次的游标位置</p><p>根据游标位置获取下一批结果，可设置结果维持的查询时间</p><p>查询条件中设置了滚动条件之后，在滚动的有效时间范围内，比如上面设置的是1分钟内，可以保持搜索的上下文环境的时间（滚动时间），</p><p>在具体查询过程中，每滚动一次，es会产生一个scrollId，用于记录每次滚动的结果，直到滚动到无法继续查询数据的时候结束</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>//使用order_id 进行排序，保持游标查询窗口5分钟。</span></span>
<span class="line"><span>GET 索引名称/_search?scroll=5m</span></span>
<span class="line"><span>{ &quot;query&quot;: { &quot;match_all&quot;: {}}, &quot;sort&quot; : [&quot;order_id&quot;], &quot;size&quot;: 1000</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//传递字段 _scroll_id 到 _search/scroll 查询接口获取下一批结果</span></span>
<span class="line"><span>GET _search/scroll</span></span>
<span class="line"><span>{ &quot;scroll&quot;: &quot;5m&quot;, &quot;scroll_id&quot; : &quot;FGluY2x1ZGVfY29udGV4dF91dWlkDXF1ZXJ5QW5kRmV0Y2gBFmV0cjE1Q3JfUmpXeF95NVlyVDlFUncAAAAAAACmmBZTc29KeGx0dFEyYUo2VTVEVWMtdnF3&quot;}</span></span>
<span class="line"><span>//清理</span></span>
<span class="line"><span>DELETE _search/scroll{ &quot;scroll_id&quot;:&quot;FGluY2x1ZGVfY29udGV4dF91dWlkDXF1ZXJ5QW5kRmV0Y2gBFmV0cjE1Q3JfUmpXeF95NVlyVDlFUncAAAAAAACmmBZTc29KeGx0dFEyYUo2VTVEVWMtdnF3&quot;}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>示例代码</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>final Scroll scroll = new Scroll(TimeValue.timeValueMinutes(1L));</span></span>
<span class="line"><span>SearchRequest searchRequest = new SearchRequest(&quot;kibana_sample_data_ecommerce&quot;);</span></span>
<span class="line"><span>searchRequest.scroll(scroll);</span></span>
<span class="line"><span>SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();</span></span>
<span class="line"><span>searchSourceBuilder.query(matchQuery(&quot;title&quot;, &quot;Elasticsearch&quot;));</span></span>
<span class="line"><span>searchRequest.source(searchSourceBuilder);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SearchResponse searchResponse = client.search(searchRequest, RequestOptions.DEFAULT);</span></span>
<span class="line"><span>String scrollId = searchResponse.getScrollId();</span></span>
<span class="line"><span>SearchHit[] searchHits = searchResponse.getHits().getHits();while (searchHits != null &amp;&amp; searchHits.length &gt; 0) {</span></span>
<span class="line"><span> SearchScrollRequest scrollRequest = new SearchScrollRequest(scrollId);</span></span>
<span class="line"><span> scrollRequest.scroll(scroll);</span></span>
<span class="line"><span> searchResponse = client.scroll(scrollRequest, RequestOptions.DEFAULT);</span></span>
<span class="line"><span> scrollId = searchResponse.getScrollId();</span></span>
<span class="line"><span> searchHits = searchResponse.getHits().getHits();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ClearScrollRequest clearScrollRequest = new ClearScrollRequest();</span></span>
<span class="line"><span>clearScrollRequest.addScrollId(scrollId);</span></span>
<span class="line"><span>ClearScrollResponse clearScrollResponse = client.clearScroll(clearScrollRequest, RequestOptions.DEFAULT);</span></span>
<span class="line"><span>boolean succeeded = clearScrollResponse.isSucceeded();</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>工具示例</p></blockquote>`,8),k={href:"https://huaweicloud.csdn.net/63356949d3efff3090b56265.html",target:"_blank",rel:"noopener noreferrer"},E=l(`<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span style="color:#0000FF;">package</span><span style="color:#000000;"> com.yq.demo.</span><span style="color:#CD3131;">U</span><span style="color:#000000;">til;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0000FF;">import</span><span style="color:#000000;"> org.apache.commons.lang3.ArrayUtils;</span></span>
<span class="line"><span style="color:#0000FF;">import</span><span style="color:#000000;"> org.elasticsearch.action.search.ClearScrollRequest;</span></span>
<span class="line"><span style="color:#0000FF;">import</span><span style="color:#000000;"> org.elasticsearch.action.search.SearchRequest;</span></span>
<span class="line"><span style="color:#0000FF;">import</span><span style="color:#000000;"> org.elasticsearch.action.search.SearchResponse;</span></span>
<span class="line"><span style="color:#0000FF;">import</span><span style="color:#000000;"> org.elasticsearch.action.search.SearchScrollRequest;</span></span>
<span class="line"><span style="color:#0000FF;">import</span><span style="color:#000000;"> org.elasticsearch.action.support.IndicesOptions;</span></span>
<span class="line"><span style="color:#0000FF;">import</span><span style="color:#000000;"> org.elasticsearch.client.RequestOptions;</span></span>
<span class="line"><span style="color:#0000FF;">import</span><span style="color:#000000;"> org.elasticsearch.client.RestHighLevelClient;</span></span>
<span class="line"><span style="color:#0000FF;">import</span><span style="color:#000000;"> org.elasticsearch.core.TimeValue;</span></span>
<span class="line"><span style="color:#0000FF;">import</span><span style="color:#000000;"> org.elasticsearch.index.query.QueryBuilder;</span></span>
<span class="line"><span style="color:#0000FF;">import</span><span style="color:#000000;"> org.elasticsearch.search.Scroll;</span></span>
<span class="line"><span style="color:#0000FF;">import</span><span style="color:#000000;"> org.elasticsearch.search.SearchHit;</span></span>
<span class="line"><span style="color:#0000FF;">import</span><span style="color:#000000;"> org.elasticsearch.search.aggregations.AggregationBuilder;</span></span>
<span class="line"><span style="color:#0000FF;">import</span><span style="color:#000000;"> org.elasticsearch.search.builder.SearchSourceBuilder;</span></span>
<span class="line"><span style="color:#0000FF;">import</span><span style="color:#000000;"> org.elasticsearch.search.sort.SortOrder;</span></span>
<span class="line"><span style="color:#0000FF;">import</span><span style="color:#000000;"> org.slf4j.Logger;</span></span>
<span class="line"><span style="color:#0000FF;">import</span><span style="color:#000000;"> org.slf4j.LoggerFactory;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0000FF;">import</span><span style="color:#000000;"> java.util.ArrayList;</span></span>
<span class="line"><span style="color:#0000FF;">import</span><span style="color:#000000;"> java.util.List;</span></span>
<span class="line"><span style="color:#0000FF;">import</span><span style="color:#000000;"> java.util.function.Function;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0000FF;">public</span><span style="color:#0000FF;"> class</span><span style="color:#267F99;"> ESUtil</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#0000FF;">    private</span><span style="color:#0000FF;"> static</span><span style="color:#0000FF;"> final</span><span style="color:#267F99;"> Logger</span><span style="color:#001080;"> log</span><span style="color:#000000;"> = </span><span style="color:#001080;">LoggerFactory</span><span style="color:#000000;">.</span><span style="color:#795E26;">getLogger</span><span style="color:#000000;">(</span><span style="color:#001080;">ESUtil</span><span style="color:#000000;">.</span><span style="color:#001080;">class</span><span style="color:#000000;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0000FF;">    private</span><span style="color:#0000FF;"> static</span><span style="color:#0000FF;"> final</span><span style="color:#267F99;"> long</span><span style="color:#001080;"> SCROLL_TIMEOUT</span><span style="color:#000000;"> = </span><span style="color:#098658;">180000</span><span style="color:#000000;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0000FF;">    private</span><span style="color:#0000FF;"> static</span><span style="color:#267F99;"> int</span><span style="color:#001080;"> SIZE</span><span style="color:#000000;"> = </span><span style="color:#098658;">1000</span><span style="color:#000000;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0000FF;">    private</span><span style="color:#0000FF;"> static</span><span style="color:#267F99;"> int</span><span style="color:#001080;"> MAX_BUFFER</span><span style="color:#000000;"> = </span><span style="color:#098658;">209715200</span><span style="color:#000000;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#008000;">    /**</span></span>
<span class="line"><span style="color:#008000;">     * 构建SearchResponse</span></span>
<span class="line"><span style="color:#008000;">     *</span></span>
<span class="line"><span style="color:#008000;">     * </span><span style="color:#0000FF;">@param</span><span style="color:#001080;"> client</span><span style="color:#008000;">     restHighLevelClient</span></span>
<span class="line"><span style="color:#008000;">     * </span><span style="color:#0000FF;">@param</span><span style="color:#001080;"> indices</span><span style="color:#008000;">    索引</span></span>
<span class="line"><span style="color:#008000;">     * </span><span style="color:#0000FF;">@param</span><span style="color:#001080;"> query</span><span style="color:#008000;">      queryBuilder</span></span>
<span class="line"><span style="color:#008000;">     * </span><span style="color:#0000FF;">@param</span><span style="color:#001080;"> includes</span><span style="color:#008000;">   包含的字段</span></span>
<span class="line"><span style="color:#008000;">     * </span><span style="color:#0000FF;">@param</span><span style="color:#001080;"> orderField</span><span style="color:#008000;"> 排序字段</span></span>
<span class="line"><span style="color:#008000;">     * </span><span style="color:#0000FF;">@param</span><span style="color:#001080;"> order</span><span style="color:#008000;">      排序类型</span></span>
<span class="line"><span style="color:#008000;">     * </span><span style="color:#0000FF;">@param</span><span style="color:#001080;"> fun</span><span style="color:#008000;">        返回函数</span></span>
<span class="line"><span style="color:#008000;">     * </span><span style="color:#0000FF;">@param</span><span style="color:#001080;"> &lt;T&gt;</span><span style="color:#008000;">        返回类型</span></span>
<span class="line"><span style="color:#008000;">     * </span><span style="color:#0000FF;">@return</span><span style="color:#008000;"> List, 可以使用fun转换为T结果</span></span>
<span class="line"><span style="color:#008000;">     * </span><span style="color:#0000FF;">@throws</span><span style="color:#267F99;"> Exception</span></span>
<span class="line"><span style="color:#008000;">     */</span></span>
<span class="line"><span style="color:#0000FF;">    public</span><span style="color:#0000FF;"> static</span><span style="color:#000000;"> &lt;</span><span style="color:#267F99;">T</span><span style="color:#000000;">&gt; </span><span style="color:#267F99;">List</span><span style="color:#000000;">&lt;</span><span style="color:#267F99;">T</span><span style="color:#000000;">&gt; </span><span style="color:#795E26;">searchResponse</span><span style="color:#000000;">(</span><span style="color:#267F99;">RestHighLevelClient</span><span style="color:#001080;"> client</span><span style="color:#000000;">, </span><span style="color:#267F99;">String</span><span style="color:#000000;">[] </span><span style="color:#001080;">indices</span><span style="color:#000000;">, </span><span style="color:#267F99;">QueryBuilder</span><span style="color:#001080;"> query</span><span style="color:#000000;">, </span><span style="color:#267F99;">String</span><span style="color:#000000;">[] </span><span style="color:#001080;">includes</span><span style="color:#000000;">, </span><span style="color:#267F99;">String</span><span style="color:#001080;"> orderField</span><span style="color:#000000;">, </span><span style="color:#267F99;">SortOrder</span><span style="color:#001080;"> order</span><span style="color:#000000;">, </span><span style="color:#267F99;">Function</span><span style="color:#000000;">&lt;</span><span style="color:#267F99;">SearchHit</span><span style="color:#000000;">, </span><span style="color:#267F99;">T</span><span style="color:#000000;">&gt; </span><span style="color:#001080;">fun</span><span style="color:#000000;">) </span><span style="color:#0000FF;">throws</span><span style="color:#267F99;"> Exception</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#008000;">        //滚动查询的Scroll</span></span>
<span class="line"><span style="color:#267F99;">        Scroll</span><span style="color:#001080;"> scroll</span><span style="color:#000000;"> = </span><span style="color:#AF00DB;">new</span><span style="color:#795E26;"> Scroll</span><span style="color:#000000;">(</span><span style="color:#001080;">TimeValue</span><span style="color:#000000;">.</span><span style="color:#795E26;">timeValueMillis</span><span style="color:#000000;">(SCROLL_TIMEOUT));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#008000;">        //构建searchRequest</span></span>
<span class="line"><span style="color:#267F99;">        SearchRequest</span><span style="color:#001080;"> request</span><span style="color:#000000;"> = </span><span style="color:#AF00DB;">new</span><span style="color:#795E26;"> SearchRequest</span><span style="color:#000000;">(indices);</span></span>
<span class="line"><span style="color:#267F99;">        SearchSourceBuilder</span><span style="color:#001080;"> sourceBuilder</span><span style="color:#000000;"> = </span><span style="color:#AF00DB;">new</span><span style="color:#795E26;"> SearchSourceBuilder</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#AF00DB;">        if</span><span style="color:#000000;"> (includes != </span><span style="color:#0000FF;">null</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#008000;">            //构造器加入需要查找的字段</span></span>
<span class="line"><span style="color:#001080;">            sourceBuilder</span><span style="color:#000000;">.</span><span style="color:#795E26;">fetchSource</span><span style="color:#000000;">(includes, </span><span style="color:#0000FF;">null</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#008000;">        //加入query语句</span></span>
<span class="line"><span style="color:#001080;">        sourceBuilder</span><span style="color:#000000;">.</span><span style="color:#795E26;">query</span><span style="color:#000000;">(query);</span></span>
<span class="line"><span style="color:#008000;">        //每次滚动的长度</span></span>
<span class="line"><span style="color:#001080;">        sourceBuilder</span><span style="color:#000000;">.</span><span style="color:#795E26;">size</span><span style="color:#000000;">(SIZE);</span></span>
<span class="line"><span style="color:#008000;">        //加入排序字段</span></span>
<span class="line"><span style="color:#AF00DB;">        if</span><span style="color:#000000;"> (orderField != </span><span style="color:#0000FF;">null</span><span style="color:#000000;"> &amp;&amp; !</span><span style="color:#A31515;">&quot;&quot;</span><span style="color:#000000;">.</span><span style="color:#795E26;">equals</span><span style="color:#000000;">(</span><span style="color:#001080;">orderField</span><span style="color:#000000;">.</span><span style="color:#795E26;">trim</span><span style="color:#000000;">())) {</span></span>
<span class="line"><span style="color:#001080;">            sourceBuilder</span><span style="color:#000000;">.</span><span style="color:#795E26;">sort</span><span style="color:#000000;">(orderField, order);</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#008000;">        //加入scroll和构造器</span></span>
<span class="line"><span style="color:#001080;">        request</span><span style="color:#000000;">.</span><span style="color:#795E26;">scroll</span><span style="color:#000000;">(scroll);</span></span>
<span class="line"><span style="color:#001080;">        request</span><span style="color:#000000;">.</span><span style="color:#795E26;">source</span><span style="color:#000000;">(sourceBuilder);</span></span>
<span class="line"><span style="color:#008000;">        //存储scroll的list</span></span>
<span class="line"><span style="color:#267F99;">        List</span><span style="color:#000000;">&lt;</span><span style="color:#267F99;">String</span><span style="color:#000000;">&gt; </span><span style="color:#001080;">scrollIdList</span><span style="color:#000000;"> = </span><span style="color:#AF00DB;">new</span><span style="color:#267F99;"> ArrayList</span><span style="color:#000000;">&lt;&gt;();</span></span>
<span class="line"><span style="color:#008000;">        //返回结果</span></span>
<span class="line"><span style="color:#267F99;">        SearchResponse</span><span style="color:#001080;"> searchResponse</span><span style="color:#000000;"> = </span><span style="color:#001080;">client</span><span style="color:#000000;">.</span><span style="color:#795E26;">search</span><span style="color:#000000;">(request, </span><span style="color:#001080;">RequestOptions</span><span style="color:#000000;">.</span><span style="color:#001080;">DEFAULT</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#008000;">        //拿到第一个ScrollId（游标）</span></span>
<span class="line"><span style="color:#267F99;">        String</span><span style="color:#001080;"> scrollId</span><span style="color:#000000;"> = </span><span style="color:#001080;">searchResponse</span><span style="color:#000000;">.</span><span style="color:#795E26;">getScrollId</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#008000;">        //拿到hits结果</span></span>
<span class="line"><span style="color:#267F99;">        SearchHit</span><span style="color:#000000;">[] </span><span style="color:#001080;">hits</span><span style="color:#000000;"> = </span><span style="color:#001080;">searchResponse</span><span style="color:#000000;">.</span><span style="color:#795E26;">getHits</span><span style="color:#000000;">().</span><span style="color:#795E26;">getHits</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#008000;">        //保存返回结果List</span></span>
<span class="line"><span style="color:#267F99;">        List</span><span style="color:#000000;">&lt;</span><span style="color:#267F99;">T</span><span style="color:#000000;">&gt; </span><span style="color:#001080;">result</span><span style="color:#000000;"> = </span><span style="color:#AF00DB;">new</span><span style="color:#267F99;"> ArrayList</span><span style="color:#000000;">&lt;&gt;();</span></span>
<span class="line"><span style="color:#001080;">        scrollIdList</span><span style="color:#000000;">.</span><span style="color:#795E26;">add</span><span style="color:#000000;">(scrollId);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AF00DB;">        try</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#008000;">            //滚动查询将SearchHit封装到result中</span></span>
<span class="line"><span style="color:#AF00DB;">            while</span><span style="color:#000000;"> (</span><span style="color:#001080;">ArrayUtils</span><span style="color:#000000;">.</span><span style="color:#795E26;">isNotEmpty</span><span style="color:#000000;">(hits)) {</span></span>
<span class="line"><span style="color:#AF00DB;">                for</span><span style="color:#000000;"> (</span><span style="color:#267F99;">SearchHit</span><span style="color:#001080;"> hit</span><span style="color:#AF00DB;"> :</span><span style="color:#000000;"> hits) {</span></span>
<span class="line"><span style="color:#008000;">                    //Function&lt;SearchHit, T&gt;, 输入SearchHit，经过操作后，返回T结果</span></span>
<span class="line"><span style="color:#001080;">                    result</span><span style="color:#000000;">.</span><span style="color:#795E26;">add</span><span style="color:#000000;">(</span><span style="color:#001080;">fun</span><span style="color:#000000;">.</span><span style="color:#795E26;">apply</span><span style="color:#000000;">(hit));</span></span>
<span class="line"><span style="color:#000000;">                }</span></span>
<span class="line"><span style="color:#008000;">                //说明滚动完了，返回结果即可</span></span>
<span class="line"><span style="color:#AF00DB;">                if</span><span style="color:#000000;"> (</span><span style="color:#001080;">hits</span><span style="color:#000000;">.</span><span style="color:#001080;">length</span><span style="color:#000000;"> &lt; SIZE) {</span></span>
<span class="line"><span style="color:#AF00DB;">                    break</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">                }</span></span>
<span class="line"><span style="color:#008000;">                //继续滚动，根据上一个游标，得到这次开始查询位置</span></span>
<span class="line"><span style="color:#267F99;">                SearchScrollRequest</span><span style="color:#001080;"> searchScrollRequest</span><span style="color:#000000;"> = </span><span style="color:#AF00DB;">new</span><span style="color:#795E26;"> SearchScrollRequest</span><span style="color:#000000;">(scrollId);</span></span>
<span class="line"><span style="color:#001080;">                searchScrollRequest</span><span style="color:#000000;">.</span><span style="color:#795E26;">scroll</span><span style="color:#000000;">(scroll);</span></span>
<span class="line"><span style="color:#008000;">                //得到结果</span></span>
<span class="line"><span style="color:#267F99;">                SearchResponse</span><span style="color:#001080;"> searchScrollResponse</span><span style="color:#000000;"> = </span><span style="color:#001080;">client</span><span style="color:#000000;">.</span><span style="color:#795E26;">scroll</span><span style="color:#000000;">(searchScrollRequest, </span><span style="color:#001080;">RequestOptions</span><span style="color:#000000;">.</span><span style="color:#001080;">DEFAULT</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#008000;">                //定位游标</span></span>
<span class="line"><span style="color:#000000;">                scrollId = </span><span style="color:#001080;">searchScrollResponse</span><span style="color:#000000;">.</span><span style="color:#795E26;">getScrollId</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#000000;">                hits = </span><span style="color:#001080;">searchScrollResponse</span><span style="color:#000000;">.</span><span style="color:#795E26;">getHits</span><span style="color:#000000;">().</span><span style="color:#795E26;">getHits</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#001080;">                scrollIdList</span><span style="color:#000000;">.</span><span style="color:#795E26;">add</span><span style="color:#000000;">(scrollId);</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">        } </span><span style="color:#AF00DB;">finally</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#008000;">            //清理scroll,释放资源</span></span>
<span class="line"><span style="color:#267F99;">            ClearScrollRequest</span><span style="color:#001080;"> clearScrollRequest</span><span style="color:#000000;"> = </span><span style="color:#AF00DB;">new</span><span style="color:#795E26;"> ClearScrollRequest</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#001080;">            clearScrollRequest</span><span style="color:#000000;">.</span><span style="color:#795E26;">setScrollIds</span><span style="color:#000000;">(scrollIdList);</span></span>
<span class="line"><span style="color:#001080;">            client</span><span style="color:#000000;">.</span><span style="color:#795E26;">clearScroll</span><span style="color:#000000;">(clearScrollRequest, </span><span style="color:#001080;">RequestOptions</span><span style="color:#000000;">.</span><span style="color:#001080;">DEFAULT</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#AF00DB;">        return</span><span style="color:#000000;"> result;</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#008000;">    /**</span></span>
<span class="line"><span style="color:#008000;">     * 聚合查询的SearchResponse</span></span>
<span class="line"><span style="color:#008000;">     * </span><span style="color:#0000FF;">@param</span><span style="color:#001080;"> client</span></span>
<span class="line"><span style="color:#008000;">     * </span><span style="color:#0000FF;">@param</span><span style="color:#001080;"> indices</span><span style="color:#008000;">        索引</span></span>
<span class="line"><span style="color:#008000;">     * </span><span style="color:#0000FF;">@param</span><span style="color:#001080;"> query</span><span style="color:#008000;"> QueryBuilder</span></span>
<span class="line"><span style="color:#008000;">     * </span><span style="color:#0000FF;">@param</span><span style="color:#001080;"> aggregations</span><span style="color:#008000;">  AggregationBuilder</span></span>
<span class="line"><span style="color:#008000;">     * </span><span style="color:#0000FF;">@return</span><span style="color:#008000;"> SearchResponse</span></span>
<span class="line"><span style="color:#008000;">     * </span><span style="color:#0000FF;">@throws</span><span style="color:#267F99;"> Exception</span></span>
<span class="line"><span style="color:#008000;">     */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0000FF;">    public</span><span style="color:#0000FF;"> static</span><span style="color:#267F99;"> SearchResponse</span><span style="color:#795E26;"> searchResponse</span><span style="color:#000000;">(</span><span style="color:#267F99;">RestHighLevelClient</span><span style="color:#001080;"> client</span><span style="color:#000000;">, </span><span style="color:#267F99;">String</span><span style="color:#000000;">[] </span><span style="color:#001080;">indices</span><span style="color:#000000;">, </span><span style="color:#267F99;">QueryBuilder</span><span style="color:#001080;"> query</span><span style="color:#000000;">, </span><span style="color:#267F99;">AggregationBuilder</span><span style="color:#000000;">... </span><span style="color:#001080;">aggregations</span><span style="color:#000000;">) </span><span style="color:#0000FF;">throws</span><span style="color:#267F99;"> Exception</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#008000;">        //构建request请求</span></span>
<span class="line"><span style="color:#267F99;">        SearchRequest</span><span style="color:#001080;"> request</span><span style="color:#000000;"> = </span><span style="color:#AF00DB;">new</span><span style="color:#795E26;"> SearchRequest</span><span style="color:#000000;">(indices);</span></span>
<span class="line"><span style="color:#267F99;">        SearchSourceBuilder</span><span style="color:#001080;"> sourceBuilder</span><span style="color:#000000;"> = </span><span style="color:#AF00DB;">new</span><span style="color:#795E26;"> SearchSourceBuilder</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#001080;">        sourceBuilder</span><span style="color:#000000;">.</span><span style="color:#795E26;">query</span><span style="color:#000000;">(query);</span></span>
<span class="line"><span style="color:#008000;">        //加入Agg</span></span>
<span class="line"><span style="color:#AF00DB;">        if</span><span style="color:#000000;"> (aggregations != </span><span style="color:#0000FF;">null</span><span style="color:#000000;"> &amp;&amp; </span><span style="color:#001080;">aggregations</span><span style="color:#000000;">.</span><span style="color:#001080;">length</span><span style="color:#000000;"> &gt; </span><span style="color:#098658;">0</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#AF00DB;">            for</span><span style="color:#000000;"> (</span><span style="color:#267F99;">AggregationBuilder</span><span style="color:#001080;"> aggregation</span><span style="color:#AF00DB;"> :</span><span style="color:#000000;"> aggregations) {</span></span>
<span class="line"><span style="color:#001080;">                sourceBuilder</span><span style="color:#000000;">.</span><span style="color:#795E26;">aggregation</span><span style="color:#000000;">(aggregation);</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#001080;">        sourceBuilder</span><span style="color:#000000;">.</span><span style="color:#795E26;">size</span><span style="color:#000000;">(</span><span style="color:#098658;">0</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#008000;">        //忽略不可用索引，只用于开放索引</span></span>
<span class="line"><span style="color:#001080;">        request</span><span style="color:#000000;">.</span><span style="color:#795E26;">indicesOptions</span><span style="color:#000000;">(</span><span style="color:#001080;">IndicesOptions</span><span style="color:#000000;">.</span><span style="color:#795E26;">lenientExpandOpen</span><span style="color:#000000;">());</span></span>
<span class="line"><span style="color:#001080;">        request</span><span style="color:#000000;">.</span><span style="color:#795E26;">source</span><span style="color:#000000;">(sourceBuilder);</span></span>
<span class="line"><span style="color:#AF00DB;">        return</span><span style="color:#001080;"> client</span><span style="color:#000000;">.</span><span style="color:#795E26;">search</span><span style="color:#000000;">(request, </span><span style="color:#001080;">RequestOptions</span><span style="color:#000000;">.</span><span style="color:#001080;">DEFAULT</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="聚合" tabindex="-1"><a class="header-anchor" href="#聚合"><span>聚合</span></a></h2>`,2),R={href:"https://www.cnblogs.com/GreenLeaves/p/16571521.html",target:"_blank",rel:"noopener noreferrer"},B={href:"https://blog.csdn.net/xljx_1/article/details/128841346",target:"_blank",rel:"noopener noreferrer"},T=l(`<h3 id="聚合并获取聚合列表数据" tabindex="-1"><a class="header-anchor" href="#聚合并获取聚合列表数据"><span>聚合并获取聚合列表数据</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>GET device_info/_search</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;query&quot;: {</span></span>
<span class="line"><span>    &quot;bool&quot;: {</span></span>
<span class="line"><span>      &quot;must_not&quot;: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>          &quot;term&quot;: {</span></span>
<span class="line"><span>            &quot;is_delete&quot;: {</span></span>
<span class="line"><span>              &quot;value&quot;: &quot;1&quot;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;size&quot;: 0,</span></span>
<span class="line"><span>  &quot;aggs&quot;: {</span></span>
<span class="line"><span>    &quot;test&quot;: {</span></span>
<span class="line"><span>      &quot;terms&quot;: {</span></span>
<span class="line"><span>        &quot;field&quot;: &quot;device_key&quot;,</span></span>
<span class="line"><span>        &quot;min_doc_count&quot;: 2,</span></span>
<span class="line"><span>        #限制桶数量</span></span>
<span class="line"><span>        &quot;size&quot;: 2</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      &quot;aggs&quot;: {</span></span>
<span class="line"><span>        &quot;test2&quot;: {</span></span>
<span class="line"><span>          &quot;top_hits&quot;: {</span></span>
<span class="line"><span>            #限制分组记录数</span></span>
<span class="line"><span>            &quot;size&quot;: 2,</span></span>
<span class="line"><span>            &quot;_source&quot;: {</span></span>
<span class="line"><span>              &quot;includes&quot;: [</span></span>
<span class="line"><span>                &quot;dev_type&quot;,</span></span>
<span class="line"><span>                &quot;device_key&quot;</span></span>
<span class="line"><span>              ]</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bool查询" tabindex="-1"><a class="header-anchor" href="#bool查询"><span>bool查询</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>GET notify_log_2023-04/_search</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;query&quot;: {</span></span>
<span class="line"><span>    &quot;bool&quot;: {</span></span>
<span class="line"><span>      &quot;must&quot;: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>          &quot;term&quot;: {</span></span>
<span class="line"><span>            &quot;notifyType&quot;: {</span></span>
<span class="line"><span>              &quot;value&quot;: &quot;webhook&quot;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;sort&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;notifyTime&quot;: {</span></span>
<span class="line"><span>        &quot;order&quot;: &quot;desc&quot;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;from&quot;: 1000</span></span>
<span class="line"><span>  &quot;size&quot;: 3</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="deleterequest、deletebyqueryrequest区别" tabindex="-1"><a class="header-anchor" href="#deleterequest、deletebyqueryrequest区别"><span>DeleteRequest、DeleteByQueryRequest区别</span></a></h2><h2 id="原生查询api" tabindex="-1"><a class="header-anchor" href="#原生查询api"><span>原生查询api</span></a></h2><h3 id="java-api" tabindex="-1"><a class="header-anchor" href="#java-api"><span>java-api</span></a></h3><blockquote><p>search查询</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>//SearchSourceBuilder sourceBuilder = alarmLogMapper.getSearchSourceBuilder(wrapper);</span></span>
<span class="line"><span>        //sourceBuilder.from(10000);</span></span>
<span class="line"><span>        //sourceBuilder.size(10);</span></span>
<span class="line"><span>        //wrapper.setSearchSourceBuilder(sourceBuilder);</span></span>
<span class="line"><span>        //sourceBuilder.trackTotalHits(Boolean.TRUE);</span></span>
<span class="line"><span>        //</span></span>
<span class="line"><span>        //SearchResponse searchResponse = alarmLogMapper.search(wrapper);</span></span>
<span class="line"><span>        //SearchHit[] hits = searchResponse.getHits().getHits();</span></span>
<span class="line"><span>        //List&lt;AlarmLog&gt; logs = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>        //for (SearchHit hit : hits) {</span></span>
<span class="line"><span>        //    AlarmLog log = JSON.parseObject(hit.getSourceAsString(), AlarmLog.class);</span></span>
<span class="line"><span>        //    logs.add(log);</span></span>
<span class="line"><span>        //}</span></span>
<span class="line"><span>        //log.info(JSON.toJSONString(logs));</span></span>
<span class="line"><span>        //SearchScrollRequest scrollRequest = new SearchScrollRequest();</span></span>
<span class="line"><span>        //</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>清除缓存</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>public boolean clearIndicesCache(String indexName){</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            ClearIndicesCacheRequest request = new ClearIndicesCacheRequest(indexName);</span></span>
<span class="line"><span>            //Set the query flag to true</span></span>
<span class="line"><span>            request.queryCache(true);</span></span>
<span class="line"><span>            // Set the fielddata flag to true</span></span>
<span class="line"><span>            request.fieldDataCache(true);</span></span>
<span class="line"><span>            // Set the request flag to true</span></span>
<span class="line"><span>            request.requestCache(true);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            ClearIndicesCacheResponse response = restHighLevelClient.indices().clearCache(request, RequestOptions.DEFAULT);</span></span>
<span class="line"><span>            if (response.getFailedShards()&gt;0) {</span></span>
<span class="line"><span>                return false;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            return true;</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>聚合</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span> PropertyCountVO propertyCountVO = new PropertyCountVO();</span></span>
<span class="line"><span>        //获取当前用户下所有产品id</span></span>
<span class="line"><span>        LambdaQueryWrapper&lt;DeviceProduct&gt; productWrapper = new LambdaQueryWrapper&lt;&gt;();</span></span>
<span class="line"><span>        productWrapper.eq(DeviceProduct::getIsDelete, Boolean.FALSE);</span></span>
<span class="line"><span>        UserUtils.addUserIdTerm(productWrapper);</span></span>
<span class="line"><span>        List&lt;String&gt; productIds = deviceProductMapper.selectList(productWrapper).stream().map(DeviceProduct::getId).collect(Collectors.toList());</span></span>
<span class="line"><span>        if (CollectionUtil.isEmpty(productIds) || StringUtils.isBlank(propertyCountQuery.getType())</span></span>
<span class="line"><span>                || null == propertyCountQuery.getStartTime() || null == propertyCountQuery.getEndTime()) {</span></span>
<span class="line"><span>            return Result.succeed(propertyCountVO);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //聚合</span></span>
<span class="line"><span>        String indexName = IndexConstants.DEVICE_DATA_PROPERTY_ALIAS;</span></span>
<span class="line"><span>        LambdaEsQueryWrapper&lt;DevicePoint&gt; lambdaQueryWrapper = new LambdaEsQueryWrapper&lt;&gt;();</span></span>
<span class="line"><span>        lambdaQueryWrapper.index(indexName);</span></span>
<span class="line"><span>        lambdaQueryWrapper.in(DevicePoint::getProductId, productIds);</span></span>
<span class="line"><span>        lambdaQueryWrapper.ge(DevicePoint::getCreateTime, propertyCountQuery.getStartTime().getTime());</span></span>
<span class="line"><span>        lambdaQueryWrapper.le(DevicePoint::getCreateTime, propertyCountQuery.getEndTime().getTime());</span></span>
<span class="line"><span>        lambdaQueryWrapper.orderByDesc(DevicePoint::getCreateTime);</span></span>
<span class="line"><span>        SearchSourceBuilder builder =  devicePointMapper.getSearchSourceBuilder(lambdaQueryWrapper);</span></span>
<span class="line"><span>        DateHistogramAggregationBuilder dateHistogramAggregationBuilder = new DateHistogramAggregationBuilder(PROPERTY_COUNT);</span></span>
<span class="line"><span>        dateHistogramAggregationBuilder.timeZone(ZoneId.systemDefault());</span></span>
<span class="line"><span>        dateHistogramAggregationBuilder.field(&quot;createTime&quot;);</span></span>
<span class="line"><span>        if (HOUR.equals(propertyCountQuery.getType())) {</span></span>
<span class="line"><span>            dateHistogramAggregationBuilder.calendarInterval(DateHistogramInterval.HOUR).format(HOUR_FORMAT);</span></span>
<span class="line"><span>        } else if (DAY.equals(propertyCountQuery.getType())) {</span></span>
<span class="line"><span>            dateHistogramAggregationBuilder.calendarInterval(DateHistogramInterval.DAY).format(DAY_FORMAT);</span></span>
<span class="line"><span>        } else  {</span></span>
<span class="line"><span>            dateHistogramAggregationBuilder.calendarInterval(DateHistogramInterval.MONTH).format(MONTH_FORMAT);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        builder.aggregation(dateHistogramAggregationBuilder);</span></span>
<span class="line"><span>        lambdaQueryWrapper.setSearchSourceBuilder(builder);</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            log.info(&quot;查询条件&quot;, lambdaQueryWrapper);</span></span>
<span class="line"><span>            SearchResponse searchResponse = devicePointMapper.search(lambdaQueryWrapper);</span></span>
<span class="line"><span>            Map&lt;String, Aggregation&gt; resultMap = searchResponse.getAggregations().asMap();</span></span>
<span class="line"><span>            if (CollectionUtils.isNotEmpty(resultMap)) {</span></span>
<span class="line"><span>                if (resultMap.containsKey(PROPERTY_COUNT)) {</span></span>
<span class="line"><span>                    Histogram histogram = (Histogram) resultMap.get(PROPERTY_COUNT);</span></span>
<span class="line"><span>                    List&lt;? extends Histogram.Bucket&gt; buckets = histogram.getBuckets();</span></span>
<span class="line"><span>                    if (CollectionUtils.isNotEmpty(buckets)) {</span></span>
<span class="line"><span>                        List&lt;PropertyCountVO.DateValue&gt; dateValues;</span></span>
<span class="line"><span>                        Long count = buckets.stream().map(MultiBucketsAggregation.Bucket::getDocCount).mapToLong(item-&gt;item).sum();</span></span>
<span class="line"><span>                        dateValues = buckets.stream().map(item -&gt; {</span></span>
<span class="line"><span>                            PropertyCountVO.DateValue value = new PropertyCountVO.DateValue();</span></span>
<span class="line"><span>                            value.setCount(item.getDocCount());</span></span>
<span class="line"><span>                            value.setTimeString(item.getKeyAsString());</span></span>
<span class="line"><span>                            return value;</span></span>
<span class="line"><span>                        }).collect(Collectors.toList());</span></span>
<span class="line"><span>                        propertyCountVO.setDateCount(dateValues);</span></span>
<span class="line"><span>                        propertyCountVO.setTotalCount(count);</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>            log.error(&quot;未知错误&quot;, e);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function A(D,w){const n=i("ExternalLinkIcon");return c(),t("div",null,[o,s("p",null,[s("a",d,[a("参考"),e(n)])]),u,s("p",null,[s("a",v,[a("参考"),e(n)])]),m,s("p",null,[s("a",b,[a("query then fetch"),e(n)])]),y,s("p",null,[s("a",h,[a("参考"),e(n)])]),q,s("p",null,[s("a",g,[a("参考"),e(n)])]),F,s("p",null,[s("a",x,[a("参考"),e(n)])]),s("p",null,[s("a",_,[a("参考"),e(n)])]),s("p",null,[s("a",f,[a("参考"),e(n)])]),S,s("p",null,[s("a",k,[a("参考"),e(n)])]),E,s("p",null,[s("a",R,[a("参考"),e(n)])]),s("p",null,[s("a",B,[a("参考"),e(n)])]),T])}const O=p(r,[["render",A],["__file","es.html.vue"]]),I=JSON.parse('{"path":"/note/%E4%B8%AD%E9%97%B4%E4%BB%B6/es.html","title":"es","lang":"zh-CN","frontmatter":{"description":"es 概念 es是一个可扩展的高性能的用于数据分析的全文搜索引擎。提供了收集、分析、存储数据的功能。 分片是底层的工作单元，文档保存在分片内，分片保存在集群节点 索引自动分片 内部使用lucene做索引及搜索 进一部封装lucene的内部复杂性 提供restful接口Api mapping 定义了索引下字段处理规则，索引如何建立，索引类型，是否分词处理...","head":[["meta",{"property":"og:url","content":"https://wherywan.github.io/note/%E4%B8%AD%E9%97%B4%E4%BB%B6/es.html"}],["meta",{"property":"og:site_name","content":"HONG_JI"}],["meta",{"property":"og:title","content":"es"}],["meta",{"property":"og:description","content":"es 概念 es是一个可扩展的高性能的用于数据分析的全文搜索引擎。提供了收集、分析、存储数据的功能。 分片是底层的工作单元，文档保存在分片内，分片保存在集群节点 索引自动分片 内部使用lucene做索引及搜索 进一部封装lucene的内部复杂性 提供restful接口Api mapping 定义了索引下字段处理规则，索引如何建立，索引类型，是否分词处理..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-14T01:15:31.000Z"}],["meta",{"property":"article:author","content":"wanhongji"}],["meta",{"property":"article:modified_time","content":"2023-12-14T01:15:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"es\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-14T01:15:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"wanhongji\\"}]}"]]},"headers":[{"level":2,"title":"概念","slug":"概念","link":"#概念","children":[]},{"level":2,"title":"字段数据类型","slug":"字段数据类型","link":"#字段数据类型","children":[]},{"level":2,"title":"es集群","slug":"es集群","link":"#es集群","children":[]},{"level":2,"title":"match、match_phrase、match_phrase_prefix的区别","slug":"match、match-phrase、match-phrase-prefix的区别","link":"#match、match-phrase、match-phrase-prefix的区别","children":[]},{"level":2,"title":"倒排索引","slug":"倒排索引","link":"#倒排索引","children":[]},{"level":2,"title":"正排索引","slug":"正排索引","link":"#正排索引","children":[]},{"level":2,"title":"内核","slug":"内核","link":"#内核","children":[]},{"level":2,"title":"api","slug":"api","link":"#api","children":[{"level":3,"title":"查看节点负载","slug":"查看节点负载","link":"#查看节点负载","children":[]}]},{"level":2,"title":"更新","slug":"更新","link":"#更新","children":[{"level":3,"title":"_update 7.14","slug":"update-7-14","link":"#update-7-14","children":[]},{"level":3,"title":"_update","slug":"update","link":"#update","children":[]},{"level":3,"title":"_update_by_query","slug":"update-by-query","link":"#update-by-query","children":[]}]},{"level":2,"title":"搜索","slug":"搜索","link":"#搜索","children":[{"level":3,"title":"term/terms","slug":"term-terms","link":"#term-terms","children":[]},{"level":3,"title":"指定字段查询：match","slug":"指定字段查询-match","link":"#指定字段查询-match","children":[]},{"level":3,"title":"搜索所有macth_all","slug":"搜索所有macth-all","link":"#搜索所有macth-all","children":[]},{"level":3,"title":"分页查询(from+size)","slug":"分页查询-from-size","link":"#分页查询-from-size","children":[]},{"level":3,"title":"查询段落匹配：match_phrase","slug":"查询段落匹配-match-phrase","link":"#查询段落匹配-match-phrase","children":[]},{"level":3,"title":"多条件查询: bool","slug":"多条件查询-bool","link":"#多条件查询-bool","children":[]},{"level":3,"title":"聚合查询：Aggregation","slug":"聚合查询-aggregation","link":"#聚合查询-aggregation","children":[]}]},{"level":2,"title":"索引管理","slug":"索引管理","link":"#索引管理","children":[{"level":3,"title":"创建索引","slug":"创建索引","link":"#创建索引","children":[]}]},{"level":2,"title":"分词结果","slug":"分词结果","link":"#分词结果","children":[]},{"level":2,"title":"信息查看","slug":"信息查看","link":"#信息查看","children":[]},{"level":2,"title":"查看分词结果","slug":"查看分词结果","link":"#查看分词结果","children":[]},{"level":2,"title":"修改查询限制","slug":"修改查询限制","link":"#修改查询限制","children":[{"level":3,"title":"设置结果最大窗口","slug":"设置结果最大窗口","link":"#设置结果最大窗口","children":[]},{"level":3,"title":"创建索引添加配置","slug":"创建索引添加配置","link":"#创建索引添加配置","children":[]},{"level":3,"title":"scroll查询","slug":"scroll查询","link":"#scroll查询","children":[]}]},{"level":2,"title":"聚合","slug":"聚合","link":"#聚合","children":[{"level":3,"title":"聚合并获取聚合列表数据","slug":"聚合并获取聚合列表数据","link":"#聚合并获取聚合列表数据","children":[]}]},{"level":2,"title":"bool查询","slug":"bool查询","link":"#bool查询","children":[]},{"level":2,"title":"DeleteRequest、DeleteByQueryRequest区别","slug":"deleterequest、deletebyqueryrequest区别","link":"#deleterequest、deletebyqueryrequest区别","children":[]},{"level":2,"title":"原生查询api","slug":"原生查询api","link":"#原生查询api","children":[{"level":3,"title":"java-api","slug":"java-api","link":"#java-api","children":[]}]}],"git":{"createdTime":1657433155000,"updatedTime":1702516531000,"contributors":[{"name":"wanhongji","email":"wherywan@163.com","commits":8},{"name":"wanhongji","email":"wan_hongji@163.com","commits":1}]},"readingTime":{"minutes":11.02,"words":3306},"filePathRelative":"note/中间件/es.md","localizedDate":"2022年7月10日","excerpt":"\\n<h2>概念</h2>\\n<p>es是一个可扩展的高性能的用于数据分析的全文搜索引擎。提供了收集、分析、存储数据的功能。</p>\\n<ul>\\n<li>分片是底层的工作单元，文档保存在分片内，分片保存在集群节点</li>\\n<li>索引自动分片</li>\\n<li>内部使用lucene做索引及搜索</li>\\n<li>进一部封装lucene的内部复杂性</li>\\n<li>提供restful接口Api</li>\\n</ul>\\n<table>\\n<thead>\\n<tr>\\n<th style=\\"text-align:left\\">es</th>\\n<th>mysql</th>\\n<th>es</th>\\n<th>mysql</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td style=\\"text-align:left\\">index</td>\\n<td>database</td>\\n<td>everything is indexed 倒排索引</td>\\n<td>index</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">type</td>\\n<td>table</td>\\n<td>query dsl</td>\\n<td>dsl</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">document</td>\\n<td>row</td>\\n<td>get url</td>\\n<td>select</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">field</td>\\n<td>column</td>\\n<td>put url</td>\\n<td>update</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">mapping</td>\\n<td>scheme</td>\\n<td></td>\\n<td></td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{O as comp,I as data};
