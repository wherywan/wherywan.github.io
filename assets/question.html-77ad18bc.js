import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,f as l}from"./app-f83986bb.js";const e={},i=l(`<h1 id="question" tabindex="-1"><a class="header-anchor" href="#question" aria-hidden="true">#</a> question</h1><h4 id="事务一致性问题" tabindex="-1"><a class="header-anchor" href="#事务一致性问题" aria-hidden="true">#</a> 事务一致性问题？</h4><h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">/**</span></span>
<span class="line"><span style="color:#000000;">* 查询参数</span></span>
<span class="line"><span style="color:#000000;">  */</span></span>
<span class="line"><span style="color:#000000;">  public class Query extends LinkedHashMap&lt;String, Object&gt; {</span></span>
<span class="line"><span style="color:#000000;">  private static final long serialVersionUID = 1L;</span></span>
<span class="line"><span style="color:#000000;">  //当前页码</span></span>
<span class="line"><span style="color:#000000;">  private int page = 1;</span></span>
<span class="line"><span style="color:#000000;">  //每页条数</span></span>
<span class="line"><span style="color:#000000;">  private int limit = 10;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">  public Query(Map&lt;String, Object&gt; params){</span></span>
<span class="line"><span style="color:#000000;">  this.putAll(params);</span></span>
<span class="line"><span style="color:#000000;">  //分页参数</span></span>
<span class="line"><span style="color:#000000;">  if(params.get(&quot;page&quot;)!=null) {</span></span>
<span class="line"><span style="color:#000000;">  this.page = Integer.parseInt(params.get(&quot;page&quot;).toString());</span></span>
<span class="line"><span style="color:#000000;">  }</span></span>
<span class="line"><span style="color:#000000;">  if(params.get(&quot;limit&quot;)!=null) {</span></span>
<span class="line"><span style="color:#000000;">  this.limit = Integer.parseInt(params.get(&quot;limit&quot;).toString());</span></span>
<span class="line"><span style="color:#000000;">  }</span></span>
<span class="line"><span style="color:#000000;">  this.remove(&quot;page&quot;);</span></span>
<span class="line"><span style="color:#000000;">  this.remove(&quot;limit&quot;);</span></span>
<span class="line"><span style="color:#000000;">  }</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    public int getPage() {</span></span>
<span class="line"><span style="color:#000000;">        return page;</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    public void setPage(int page) {</span></span>
<span class="line"><span style="color:#000000;">        this.page = page;</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    public int getLimit() {</span></span>
<span class="line"><span style="color:#000000;">        return limit;</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    public void setLimit(int limit) {</span></span>
<span class="line"><span style="color:#000000;">        this.limit = limit;</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="递归查询" tabindex="-1"><a class="header-anchor" href="#递归查询" aria-hidden="true">#</a> 递归查询</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">public  List&lt;String&gt; getChild(List&lt;String&gt; pList, List&lt;String&gt; rList)</span></span>
<span class="line"><span style="color:#000000;">{</span></span>
<span class="line"><span style="color:#000000;">//根据当前部门id查询所有子部门的id</span></span>
<span class="line"><span style="color:#000000;">List&lt;String&gt; list = mapper.selectDepartListByParentIds(pList);  //根据parent_id 集合查询子部门</span></span>
<span class="line"><span style="color:#000000;">if (list.size() &gt; 0)</span></span>
<span class="line"><span style="color:#000000;">{</span></span>
<span class="line"><span style="color:#000000;">rList.addAll(list);</span></span>
<span class="line"><span style="color:#000000;">getChild(list, rList);//递归查询</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;">return rList;</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">注意流的自动关闭，读取不到数据</span></span>
<span class="line"><span style="color:#000000;">mysql存时间会损失精度</span></span>
<span class="line"><span style="color:#000000;">日期如果是date类型，传标准字符串比较</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">多线程 容器安全 操作数据库</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">idea测试类运行失败，将模式gradle改为idea</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),p=[i];function c(t,r){return n(),a("div",null,p)}const v=s(e,[["render",c],["__file","question.html.vue"]]);export{v as default};
