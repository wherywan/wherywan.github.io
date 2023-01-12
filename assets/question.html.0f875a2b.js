import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as n,f as s}from"./app.6f24b29a.js";const l={},d=s(`<h1 id="question" tabindex="-1"><a class="header-anchor" href="#question" aria-hidden="true">#</a> question</h1><h4 id="\u4E8B\u52A1\u4E00\u81F4\u6027\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u52A1\u4E00\u81F4\u6027\u95EE\u9898" aria-hidden="true">#</a> \u4E8B\u52A1\u4E00\u81F4\u6027\u95EE\u9898\uFF1F</h4><h3 id="\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#\u7EE7\u627F" aria-hidden="true">#</a> \u7EE7\u627F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
* \u67E5\u8BE2\u53C2\u6570
  */
  public class Query extends LinkedHashMap&lt;String, Object&gt; {
  private static final long serialVersionUID = 1L;
  //\u5F53\u524D\u9875\u7801
  private int page = 1;
  //\u6BCF\u9875\u6761\u6570
  private int limit = 10;

  public Query(Map&lt;String, Object&gt; params){
  this.putAll(params);
  //\u5206\u9875\u53C2\u6570
  if(params.get(&quot;page&quot;)!=null) {
  this.page = Integer.parseInt(params.get(&quot;page&quot;).toString());
  }
  if(params.get(&quot;limit&quot;)!=null) {
  this.limit = Integer.parseInt(params.get(&quot;limit&quot;).toString());
  }
  this.remove(&quot;page&quot;);
  this.remove(&quot;limit&quot;);
  }


    public int getPage() {
        return page;
    }

    public void setPage(int page) {
        this.page = page;
    }

    public int getLimit() {
        return limit;
    }

    public void setLimit(int limit) {
        this.limit = limit;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9012\u5F52\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u9012\u5F52\u67E5\u8BE2" aria-hidden="true">#</a> \u9012\u5F52\u67E5\u8BE2</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public  List&lt;String&gt; getChild(List&lt;String&gt; pList, List&lt;String&gt; rList)
{
//\u6839\u636E\u5F53\u524D\u90E8\u95E8id\u67E5\u8BE2\u6240\u6709\u5B50\u90E8\u95E8\u7684id
List&lt;String&gt; list = mapper.selectDepartListByParentIds(pList);  //\u6839\u636Eparent_id \u96C6\u5408\u67E5\u8BE2\u5B50\u90E8\u95E8
if (list.size() &gt; 0)
{
rList.addAll(list);
getChild(list, rList);//\u9012\u5F52\u67E5\u8BE2
}
return rList;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6CE8\u610F\u6D41\u7684\u81EA\u52A8\u5173\u95ED\uFF0C\u8BFB\u53D6\u4E0D\u5230\u6570\u636E
mysql\u5B58\u65F6\u95F4\u4F1A\u635F\u5931\u7CBE\u5EA6
\u65E5\u671F\u5982\u679C\u662Fdate\u7C7B\u578B\uFF0C\u4F20\u6807\u51C6\u5B57\u7B26\u4E32\u6BD4\u8F83

\u591A\u7EBF\u7A0B \u5BB9\u5668\u5B89\u5168 \u64CD\u4F5C\u6570\u636E\u5E93

idea\u6D4B\u8BD5\u7C7B\u8FD0\u884C\u5931\u8D25\uFF0C\u5C06\u6A21\u5F0Fgradle\u6539\u4E3Aidea
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),a=[d];function t(r,v){return e(),n("div",null,a)}const m=i(l,[["render",t],["__file","question.html.vue"]]);export{m as default};
