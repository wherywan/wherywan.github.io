import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as o,b as s,d as n,e as p,f as l,r}from"./app.6f24b29a.js";const c={},i=s("h1",{id:"router",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#router","aria-hidden":"true"},"#"),n(" router")],-1),u=s("h2",{id:"react-router",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#react-router","aria-hidden":"true"},"#"),n(" react router")],-1),d={href:"https://v5.reactrouter.com/web/",target:"_blank",rel:"noopener noreferrer"},k=l(`<blockquote><p>\u5F15\u5165\u6A21\u5757</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  BrowserRouter <span class="token keyword">as</span> Router<span class="token punctuation">,</span>
  Switch<span class="token punctuation">,</span>
  Route<span class="token punctuation">,</span>
  Link<span class="token punctuation">,</span>
  useParams
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-router-dom&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>useHistory()</p></blockquote><p>\u5B58\u653E\u6765\u6E90\u8DEF\u7531</p><blockquote><p>useLocation()</p></blockquote><p>\u83B7\u53D6\u76EE\u7684\u8DEF\u7531\u53C2\u6570</p><blockquote><p>useParam()</p></blockquote><p>\u83B7\u53D6\u8DEF\u7531\u4E2D\u7684\u53C2\u6570</p><blockquote><p>useRouteMatch()</p></blockquote><p>\u83B7\u53D6\u5339\u914D\u7684\u8DEF\u7531\u5BF9\u8C61</p><h3 id="basic" tabindex="-1"><a class="header-anchor" href="#basic" aria-hidden="true">#</a> basic</h3><ul><li>Link \u8DF3\u8F6C\u7684\u5730\u5740</li><li>switch \u9009\u62E9\u8DEF\u7531</li><li>Route path \u76EE\u6807\u8DEF\u7531</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">BasicExample</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Router<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">&quot;/&quot;</span><span class="token operator">&gt;</span>Home<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">&quot;/about&quot;</span><span class="token operator">&gt;</span>About<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">&quot;/dashboard&quot;</span><span class="token operator">&gt;</span>Dashboard<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>

        <span class="token operator">&lt;</span>hr <span class="token operator">/</span><span class="token operator">&gt;</span>

        <span class="token punctuation">{</span><span class="token comment">/*
          A &lt;Switch&gt; looks through all its children &lt;Route&gt;
          elements and renders the first one whose path
          matches the current URL. Use a &lt;Switch&gt; any time
          you have multiple routes, but you want only one
          of them to render at a time
        */</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>Switch<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Route exact path<span class="token operator">=</span><span class="token string">&quot;/&quot;</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>Home <span class="token operator">/</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>Route<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&quot;/about&quot;</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>About <span class="token operator">/</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>Route<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&quot;/dashboard&quot;</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>Dashboard <span class="token operator">/</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>Route<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Switch<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Router<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u76EE\u6807\u8DEF\u7531\u4E2D\u8BBE\u7F6E\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u76EE\u6807\u8DEF\u7531\u4E2D\u8BBE\u7F6E\u53C2\u6570" aria-hidden="true">#</a> \u76EE\u6807\u8DEF\u7531\u4E2D\u8BBE\u7F6E\u53C2\u6570</h3><ul><li>\u4F7F\u7528useParam\u94A9\u5B50\u83B7\u53D6\u8DEF\u7531\u53C2\u6570</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">ParamsExample</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Router<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>Accounts<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>

        <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">&quot;/netflix&quot;</span><span class="token operator">&gt;</span>Netflix<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">&quot;/zillow-group&quot;</span><span class="token operator">&gt;</span>Zillow Group<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">&quot;/yahoo&quot;</span><span class="token operator">&gt;</span>Yahoo<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">&quot;/modus-create&quot;</span><span class="token operator">&gt;</span>Modus Create<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>

        <span class="token operator">&lt;</span>Switch<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&quot;/:id&quot;</span> children<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Child <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Switch<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Router<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// We can use the \`useParams\` hook here to access</span>
  <span class="token comment">// the dynamic pieces of the URL.</span>
  <span class="token keyword">let</span> <span class="token punctuation">{</span> id <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h3<span class="token operator">&gt;</span><span class="token constant">ID</span><span class="token operator">:</span> <span class="token punctuation">{</span>id<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8DEF\u7531\u5D4C\u5957nesting" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u5D4C\u5957nesting" aria-hidden="true">#</a> \u8DEF\u7531\u5D4C\u5957nesting</h3><ul><li>\u4F7F\u7528useRouteMatch()\u65B9\u6CD5\u83B7\u53D6\u5339\u914D\u7684\u8DEF\u5F84</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token punctuation">{</span> path<span class="token punctuation">,</span> url <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRouteMatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u8DEF\u7531\u91CD\u5B9A\u5411redirects-auth" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u91CD\u5B9A\u5411redirects-auth" aria-hidden="true">#</a> \u8DEF\u7531\u91CD\u5B9A\u5411redirects(Auth)</h3><ul><li>\u91CD\u5B9A\u5411\u7684\u76EE\u6807\u8DEF\u7531</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// A wrapper for &lt;Route&gt; that redirects to the login</span>
<span class="token comment">// screen if you&#39;re not yet authenticated.</span>
<span class="token keyword">function</span> <span class="token function">PrivateRoute</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children<span class="token punctuation">,</span> <span class="token operator">...</span>rest <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> auth <span class="token operator">=</span> <span class="token function">useAuth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Route
      <span class="token punctuation">{</span><span class="token operator">...</span>rest<span class="token punctuation">}</span>
      render<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> location <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
        auth<span class="token punctuation">.</span>user <span class="token operator">?</span> <span class="token punctuation">(</span>
          children
        <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>Redirect
            to<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
              <span class="token literal-property property">pathname</span><span class="token operator">:</span> <span class="token string">&quot;/login&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">from</span><span class="token operator">:</span> location <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="custom-link" tabindex="-1"><a class="header-anchor" href="#custom-link" aria-hidden="true">#</a> custom link</h3><h3 id="prevent-transitions-\u963B\u6B62\u8F6C\u79FB" tabindex="-1"><a class="header-anchor" href="#prevent-transitions-\u963B\u6B62\u8F6C\u79FB" aria-hidden="true">#</a> prevent transitions \u963B\u6B62\u8F6C\u79FB</h3>`,24);function v(m,b){const a=r("ExternalLinkIcon");return e(),o("div",null,[i,u,s("p",null,[s("a",d,[n("\u53C2\u8003"),p(a)])]),k])}const f=t(c,[["render",v],["__file","router.html.vue"]]);export{f as default};
