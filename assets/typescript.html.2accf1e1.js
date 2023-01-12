import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as e}from"./app.6f24b29a.js";const p={},t=e(`<h1 id="ts" tabindex="-1"><a class="header-anchor" href="#ts" aria-hidden="true">#</a> ts</h1><p>\u5B83\u662Fjavascript\u7684\u62D3\u5C55\uFF0C\u4F7F\u7528\u58F0\u660E\u6587\u4EF6\u548Cts\u6587\u4EF6\u6765\u63CF\u8FF0\uFF0C\u6700\u7EC8\u4F1A\u5C06ts\u7F16\u8BD1\u4E3Ajs\uFF0C\u5176\u4E2D\u58F0\u660E\u6587\u4EF6\u7528\u4E8E\u8BED\u4E49\u68C0\u67E5,ts\u548Cjs\u662F\u6838\u5FC3,d.ts\u6587\u4EF6\u662Fts\u7684\u7ED3\u6784</p><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><ul><li>\u4EE5 \u53D8\u91CF\u540D \uFF1A\u7C7B\u578B \u5B9A\u4E49\u53D8\u91CF</li><li>\u4EE5 \u53D8\u91CF\u540D \uFF1A\u7C7B\u578B = &#39;test&#39; \u5B9A\u4E49\u53D8\u91CF\u5E76\u8D4B\u503C</li><li>\u4EE5\uFF1F\u8868\u793A\u53D8\u91CF\u662F\u5426\u53EF\u9009</li><li>\u7ED3\u5408\u7BAD\u5934\u51FD\u6570</li></ul><blockquote><p>\u6837\u4F8B</p></blockquote><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">type</span> <span class="token class-name">BuildCommand</span> <span class="token operator">=</span> <span class="token punctuation">(</span>sourceDir<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> commandOptions<span class="token operator">?</span><span class="token operator">:</span> BuildCommandOptions<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">/**
 * CLI options of \`build\` command
 */</span>
<span class="token keyword">interface</span> <span class="token class-name">BuildCommandOptions</span> <span class="token punctuation">{</span>
    dest<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    temp<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    cache<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    debug<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    config<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    cleanTemp<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    cleanCache<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">declare</span> <span class="token keyword">const</span> <span class="token function-variable function">createBuild</span><span class="token operator">:</span> <span class="token punctuation">(</span>defaultAppConfig<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>AppConfig<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> BuildCommand<span class="token punctuation">;</span>

<span class="token comment">/**
 * Type of \`dev\` command function
 */</span>
<span class="token keyword">declare</span> <span class="token keyword">type</span> <span class="token class-name">DevCommand</span> <span class="token operator">=</span> <span class="token punctuation">(</span>sourceDir<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> commandOptions<span class="token operator">?</span><span class="token operator">:</span> DevCommandOptions<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u51FD\u6570\u7684\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u7684\u7C7B\u578B" aria-hidden="true">#</a> \u51FD\u6570\u7684\u7C7B\u578B</h2><p>\u51FD\u6570\u58F0\u660E\uFF08Function Declaration\uFF09\u548C\u51FD\u6570\u8868\u8FBE\u5F0F\uFF08Function Expression\uFF09</p><blockquote><p>\u7528\u63A5\u53E3\u5B9A\u4E49\u51FD\u6570\u7684\u7C7B\u578B</p></blockquote><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">SearchFunc</span> <span class="token punctuation">{</span>
    <span class="token punctuation">(</span>source<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> subString<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> mySearch<span class="token operator">:</span> SearchFunc<span class="token punctuation">;</span>

<span class="token function-variable function">mySearch</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>source<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> subString<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> source<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>subString<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u53C2\u6570\u9ED8\u8BA4\u503C</p></blockquote><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">buildName</span><span class="token punctuation">(</span>firstName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> lastName<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;Cat&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> firstName <span class="token operator">+</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> lastName<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> tomcat <span class="token operator">=</span> <span class="token function">buildName</span><span class="token punctuation">(</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Cat&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> tom <span class="token operator">=</span> <span class="token function">buildName</span><span class="token punctuation">(</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E0E\u6216\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u4E0E\u6216\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u4E0E\u6216\u8FD0\u7B97\u7B26</h2><blockquote><p>&amp;</p></blockquote><p>\u53D6\u4EA4\u96C6</p><blockquote><p>|</p></blockquote><p>\u53D6\u5E76\u96C6</p><h2 id="\u65AD\u8A00" tabindex="-1"><a class="header-anchor" href="#\u65AD\u8A00" aria-hidden="true">#</a> \u65AD\u8A00</h2><p>\u4E00\u822C\u4F7F\u7528\uFF1A \u503C as \u7C7B\u578B</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Cat</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Fish</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token function">swim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">isFish</span><span class="token punctuation">(</span>animal<span class="token operator">:</span> Cat <span class="token operator">|</span> Fish<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token punctuation">(</span>animal <span class="token keyword">as</span> Fish<span class="token punctuation">)</span><span class="token punctuation">.</span>swim <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token keyword">interface</span> <span class="token class-name">ApiError</span> <span class="token keyword">extends</span> <span class="token class-name">Error</span> <span class="token punctuation">{</span>
    code<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">HttpError</span> <span class="token keyword">extends</span> <span class="token class-name">Error</span> <span class="token punctuation">{</span>
    statusCode<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">isApiError</span><span class="token punctuation">(</span>error<span class="token operator">:</span> Error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token punctuation">(</span>error <span class="token keyword">as</span> ApiError<span class="token punctuation">)</span><span class="token punctuation">.</span>code <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u7C7B\u578B\u65AD\u8A00 vs \u6CDB\u578B</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function getCacheData(key: string): any {
    return (window as any).cache[key];
}

interface Cat {
    name: string;
    run(): void;
}

const tom = getCacheData(&#39;tom&#39;) as Cat;
tom.run();

function getCacheData&lt;T&gt;(key: string): T {
    return (window as any).cache[key];
}

interface Cat {
    name: string;
    run(): void;
}

const tom = getCacheData&lt;Cat&gt;(&#39;tom&#39;);
tom.run();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u58F0\u660E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u58F0\u660E\u6587\u4EF6" aria-hidden="true">#</a> \u58F0\u660E\u6587\u4EF6</h2><blockquote><p>\u4EC0\u4E48\u662F\u58F0\u660E\u8BED\u53E5</p></blockquote><p>\u5047\u5982\u6211\u4EEC\u60F3\u4F7F\u7528\u7B2C\u4E09\u65B9\u5E93 jQuery\uFF0C\u4E00\u79CD\u5E38\u89C1\u7684\u65B9\u5F0F\u662F\u5728 html \u4E2D\u901A\u8FC7 script \u6807\u7B7E\u5F15\u5165 jQuery\uFF0C\u7136\u540E\u5C31\u53EF\u4EE5\u4F7F\u7528\u5168\u5C40\u53D8\u91CF $ \u6216 jQuery \u4E86\u3002</p><p>\u6211\u4EEC\u901A\u5E38\u8FD9\u6837\u83B7\u53D6\u4E00\u4E2A id \u662F foo \u7684\u5143\u7D20\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// or</span>
<span class="token function">jQuery</span><span class="token punctuation">(</span><span class="token string">&#39;#foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u662F\u5728 ts \u4E2D\uFF0C\u7F16\u8BD1\u5668\u5E76\u4E0D\u77E5\u9053 $ \u6216 jQuery \u662F\u4EC0\u4E48\u4E1C\u897F\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">jQuery</span><span class="token punctuation">(</span><span class="token string">&#39;#foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ERROR: Cannot find name &#39;jQuery&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u65F6\uFF0C\u6211\u4EEC\u9700\u8981\u4F7F\u7528 declare var \u6765\u5B9A\u4E49\u5B83\u7684\u7C7B\u578B2\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">var</span> <span class="token function-variable function">jQuery</span><span class="token operator">:</span> <span class="token punctuation">(</span>selector<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span><span class="token punctuation">;</span>

<span class="token function">jQuery</span><span class="token punctuation">(</span><span class="token string">&#39;#foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u4F8B\u4E2D\uFF0Cdeclare var \u5E76\u6CA1\u6709\u771F\u7684\u5B9A\u4E49\u4E00\u4E2A\u53D8\u91CF\uFF0C\u53EA\u662F\u5B9A\u4E49\u4E86\u5168\u5C40\u53D8\u91CF jQuery \u7684\u7C7B\u578B\uFF0C\u4EC5\u4EC5\u4F1A\u7528\u4E8E\u7F16\u8BD1\u65F6\u7684\u68C0\u67E5\uFF0C\u5728\u7F16\u8BD1\u7ED3\u679C\u4E2D\u4F1A\u88AB\u5220\u9664</p><blockquote><p>\u4EC0\u4E48\u662F\u58F0\u660E\u6587\u4EF6</p></blockquote><p>\u901A\u5E38\u6211\u4EEC\u4F1A\u628A\u58F0\u660E\u8BED\u53E5\u653E\u5230\u4E00\u4E2A\u5355\u72EC\u7684\u6587\u4EF6\uFF08jQuery.d.ts\uFF09\u4E2D</p><p>\u58F0\u660E\u6587\u4EF6\u5FC5\u9700\u4EE5 .d.ts \u4E3A\u540E\u7F00\u3002</p><h2 id="\u4E66\u5199\u58F0\u660E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E66\u5199\u58F0\u660E\u6587\u4EF6" aria-hidden="true">#</a> \u4E66\u5199\u58F0\u660E\u6587\u4EF6</h2><h3 id="\u5168\u5C40\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u53D8\u91CF" aria-hidden="true">#</a> \u5168\u5C40\u53D8\u91CF</h3><p>\u5168\u5C40\u53D8\u91CF\u662F\u6700\u7B80\u5355\u7684\u4E00\u79CD\u573A\u666F\uFF0C\u4E4B\u524D\u4E3E\u7684\u4F8B\u5B50\u5C31\u662F\u901A\u8FC7 script \u6807\u7B7E\u5F15\u5165 jQuery\uFF0C\u6CE8\u5165\u5168\u5C40\u53D8\u91CF $ \u548C jQuery\u3002</p><ul><li>declare var \u58F0\u660E\u5168\u5C40\u53D8\u91CF</li><li>declare function \u58F0\u660E\u5168\u5C40\u65B9\u6CD5</li><li>declare class \u58F0\u660E\u5168\u5C40\u7C7B</li><li>declare enum \u58F0\u660E\u5168\u5C40\u679A\u4E3E\u7C7B\u578B</li><li>declare namespace \u58F0\u660E\uFF08\u542B\u6709\u5B50\u5C5E\u6027\u7684\uFF09\u5168\u5C40\u5BF9\u8C61</li><li>interface \u548C type \u58F0\u660E\u5168\u5C40\u7C7B\u578B</li></ul><blockquote><p>declare var | const |let</p></blockquote><p>\u5F53\u6211\u4EEC\u4F7F\u7528 const \u5B9A\u4E49\u65F6\uFF0C\u8868\u793A\u6B64\u65F6\u7684\u5168\u5C40\u53D8\u91CF\u662F\u4E00\u4E2A\u5E38\u91CF\uFF0C\u4E0D\u5141\u8BB8\u518D\u53BB\u4FEE\u6539\u5B83\u7684\u503C\u4E86</p><blockquote><p>declare function</p></blockquote><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// src/jQuery.d.ts</span>

<span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">jQuery</span><span class="token punctuation">(</span>selector<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">jQuery</span><span class="token punctuation">(</span><span class="token function-variable function">domReadyCallback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>

<span class="token comment">// src/index.ts</span>

<span class="token function">jQuery</span><span class="token punctuation">(</span><span class="token string">&#39;#foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">jQuery</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;Dom Ready!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>declare class</p></blockquote><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// src/Animal.d.ts</span>

<span class="token keyword">declare</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// src/index.ts</span>

<span class="token keyword">let</span> cat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>declare namespace</p></blockquote><p>\u5B83\u7528\u6765\u8868\u793A\u5168\u5C40\u53D8\u91CF\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5305\u542B\u5F88\u591A\u5B50\u5C5E\u6027\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// src/jQuery.d.ts</span>

<span class="token keyword">declare</span> <span class="token keyword">namespace</span> jQuery <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">ajax</span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> settings<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> version<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token keyword">class</span> <span class="token class-name">Event</span> <span class="token punctuation">{</span>
        <span class="token function">blur</span><span class="token punctuation">(</span>eventType<span class="token operator">:</span> EventType<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">enum</span> EventType <span class="token punctuation">{</span>
        CustomClick
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// src/index.ts</span>

jQuery<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token string">&#39;/api/get_something&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>jQuery<span class="token punctuation">.</span>version<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> e <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">jQuery</span><span class="token punctuation">.</span><span class="token function">Event</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
e<span class="token punctuation">.</span><span class="token function">blur</span><span class="token punctuation">(</span>jQuery<span class="token punctuation">.</span>EventType<span class="token punctuation">.</span>CustomClick<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u9632\u6B62\u547D\u540D\u51B2\u7A81</p></blockquote><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">namespace</span> jQuery <span class="token punctuation">{</span>
    <span class="token keyword">interface</span> <span class="token class-name">AjaxSettings</span> <span class="token punctuation">{</span>
        method<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&#39;GET&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;POST&#39;</span>
        data<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function">ajax</span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> settings<span class="token operator">?</span><span class="token operator">:</span> AjaxSettings<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// src/index.ts</span>

<span class="token keyword">let</span> settings<span class="token operator">:</span> jQuery<span class="token punctuation">.</span>AjaxSettings <span class="token operator">=</span> <span class="token punctuation">{</span>
    method<span class="token operator">:</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span>
    data<span class="token operator">:</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
jQuery<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token string">&#39;/api/post_something&#39;</span><span class="token punctuation">,</span> settings<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="npm\u5305" tabindex="-1"><a class="header-anchor" href="#npm\u5305" aria-hidden="true">#</a> npm\u5305</h3><p>npm \u5305\u7684\u58F0\u660E\u6587\u4EF6\u4E3B\u8981\u6709\u4EE5\u4E0B\u51E0\u79CD\u8BED\u6CD5\uFF1A</p><ul><li>export \u5BFC\u51FA\u53D8\u91CF</li><li>export namespace \u5BFC\u51FA\uFF08\u542B\u6709\u5B50\u5C5E\u6027\u7684\uFF09\u5BF9\u8C61</li><li>export default ES6 \u9ED8\u8BA4\u5BFC\u51FA</li><li>export = commonjs \u5BFC\u51FA\u6A21\u5757</li></ul><blockquote><p>export</p></blockquote><p>npm \u5305\u7684\u58F0\u660E\u6587\u4EF6\u4E0E\u5168\u5C40\u53D8\u91CF\u7684\u58F0\u660E\u6587\u4EF6\u6709\u5F88\u5927\u533A\u522B\u3002\u5728 npm \u5305\u7684\u58F0\u660E\u6587\u4EF6\u4E2D\uFF0C\u4F7F\u7528 declare \u4E0D\u518D\u4F1A\u58F0\u660E\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF\uFF0C\u800C\u53EA\u4F1A\u5728\u5F53\u524D\u6587\u4EF6\u4E2D\u58F0\u660E\u4E00\u4E2A\u5C40\u90E8\u53D8\u91CF\u3002</p><p>\u53EA\u6709\u5728\u58F0\u660E\u6587\u4EF6\u4E2D\u4F7F\u7528 export \u5BFC\u51FA\uFF0C\u7136\u540E\u5728\u4F7F\u7528\u65B9 import \u5BFC\u5165\u540E\uFF0C\u624D\u4F1A\u5E94\u7528\u5230\u8FD9\u4E9B\u7C7B\u578B\u58F0\u660E\u3002</p><p>export \u7684\u8BED\u6CD5\u4E0E\u666E\u901A\u7684 ts \u4E2D\u7684\u8BED\u6CD5\u7C7B\u4F3C\uFF0C\u533A\u522B\u4EC5\u5728\u4E8E\u58F0\u660E\u6587\u4EF6\u4E2D\u7981\u6B62\u5B9A\u4E49\u5177\u4F53\u7684\u5B9E\u73B0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// types/foo/index.d.ts

export const name: string;
export function getName(): string;
export class Animal {
    constructor(name: string);
    sayHi(): string;
}
export enum Directions {
    Up,
    Down,
    Left,
    Right
}
export interface Options {
    data: any;
}

// src/index.ts

import { name, getName, Animal, Directions, Options } from &#39;foo&#39;;

console.log(name);
let myName = getName();
let cat = new Animal(&#39;Tom&#39;);
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
let options: Options = {
    data: {
        name: &#39;foo&#39;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6DF7\u7528 declare \u548C export</p></blockquote><p>\u6211\u4EEC\u4E5F\u53EF\u4EE5\u4F7F\u7528 declare \u5148\u58F0\u660E\u591A\u4E2A\u53D8\u91CF\uFF0C\u6700\u540E\u518D\u7528 export \u4E00\u6B21\u6027\u5BFC\u51FA\u3002\u4E0A\u4F8B\u7684\u58F0\u660E\u6587\u4EF6\u53EF\u4EE5\u7B49\u4EF7\u7684\u6539\u5199\u4E3A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// types/foo/index.d.ts</span>

<span class="token keyword">declare</span> <span class="token keyword">const</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token keyword">declare</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">declare</span> <span class="token keyword">enum</span> Directions <span class="token punctuation">{</span>
    Up<span class="token punctuation">,</span>
    Down<span class="token punctuation">,</span>
    Left<span class="token punctuation">,</span>
    Right
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Options</span> <span class="token punctuation">{</span>
    data<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> getName<span class="token punctuation">,</span> Animal<span class="token punctuation">,</span> Directions<span class="token punctuation">,</span> Options <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>export namespace</p></blockquote><p>\u4E0E declare namespace \u7C7B\u4F3C\uFF0Cexport namespace \u7528\u6765\u5BFC\u51FA\u4E00\u4E2A\u62E5\u6709\u5B50\u5C5E\u6027\u7684\u5BF9\u8C61</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// types/foo/index.d.ts

export namespace foo {
    const name: string;
    namespace bar {
        function baz(): string;
    }
}

// src/index.ts

import { foo } from &#39;foo&#39;;

console.log(foo.name);
foo.bar.baz();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>export default</p></blockquote><p>\u5728 ES6 \u6A21\u5757\u7CFB\u7EDF\u4E2D\uFF0C\u4F7F\u7528 export default \u53EF\u4EE5\u5BFC\u51FA\u4E00\u4E2A\u9ED8\u8BA4\u503C\uFF0C\u4F7F\u7528\u65B9\u53EF\u4EE5\u7528 import foo from &#39;foo&#39; \u800C\u4E0D\u662F import { foo } from &#39;foo&#39; \u6765\u5BFC\u5165\u8FD9\u4E2A\u9ED8\u8BA4\u503C\u3002</p><p>\u6CE8\u610F\uFF0C\u53EA\u6709 function\u3001class \u548C interface \u53EF\u4EE5\u76F4\u63A5\u9ED8\u8BA4\u5BFC\u51FA\uFF0C\u5176\u4ED6\u7684\u53D8\u91CF\u9700\u8981\u5148\u5B9A\u4E49\u51FA\u6765\uFF0C\u518D\u9ED8\u8BA4\u5BFC\u51FA</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// types/foo/index.d.ts</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

<span class="token comment">// src/index.ts</span>

<span class="token keyword">import</span> foo <span class="token keyword">from</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">;</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// types/foo/index.d.ts</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Directions<span class="token punctuation">;</span>

<span class="token keyword">declare</span> <span class="token keyword">enum</span> Directions <span class="token punctuation">{</span>
    Up<span class="token punctuation">,</span>
    Down<span class="token punctuation">,</span>
    Left<span class="token punctuation">,</span>
    Right
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>export=</p></blockquote><p>\u5728 commonjs \u89C4\u8303\u4E2D\uFF0C\u6211\u4EEC\u7528\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5BFC\u51FA\u4E00\u4E2A\u6A21\u5757\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6574\u4F53\u5BFC\u51FA</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> foo<span class="token punctuation">;</span>
<span class="token comment">// \u5355\u4E2A\u5BFC\u51FA</span>
exports<span class="token punctuation">.</span>bar <span class="token operator">=</span> bar<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728 ts \u4E2D\uFF0C\u9488\u5BF9\u8FD9\u79CD\u6A21\u5757\u5BFC\u51FA\uFF0C\u6709\u591A\u79CD\u65B9\u5F0F\u53EF\u4EE5\u5BFC\u5165\uFF0C\u7B2C\u4E00\u79CD\u65B9\u5F0F\u662F const ... = require\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u6574\u4F53\u5BFC\u5165</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u5355\u4E2A\u5BFC\u5165</span>
<span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>bar<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B2C\u4E8C\u79CD\u65B9\u5F0F\u662F import ... from\uFF0C\u6CE8\u610F\u9488\u5BF9\u6574\u4F53\u5BFC\u51FA\uFF0C\u9700\u8981\u4F7F\u7528 import * as \u6765\u5BFC\u5165\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u6574\u4F53\u5BFC\u5165</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> foo <span class="token keyword">from</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// \u5355\u4E2A\u5BFC\u5165</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> bar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B2C\u4E09\u79CD\u65B9\u5F0F\u662F import ... require\uFF0C\u8FD9\u4E5F\u662F ts \u5B98\u65B9\u63A8\u8350\u7684\u65B9\u5F0F\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u6574\u4F53\u5BFC\u5165</span>
<span class="token keyword">import</span> foo <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u5355\u4E2A\u5BFC\u5165</span>
<span class="token keyword">import</span> bar <span class="token operator">=</span> foo<span class="token punctuation">.</span>bar<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u4E8E\u8FD9\u79CD\u4F7F\u7528 commonjs \u89C4\u8303\u7684\u5E93\uFF0C\u5047\u5982\u8981\u4E3A\u5B83\u5199\u7C7B\u578B\u58F0\u660E\u6587\u4EF6\u7684\u8BDD\uFF0C\u5C31\u9700\u8981\u4F7F\u7528\u5230 export = \u8FD9\u79CD\u8BED\u6CD5\u4E8621\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// types/foo/index.d.ts</span>

<span class="token keyword">export</span> <span class="token operator">=</span> foo<span class="token punctuation">;</span>

<span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token keyword">declare</span> <span class="token keyword">namespace</span> foo <span class="token punctuation">{</span>
    <span class="token keyword">const</span> bar<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="umd\u5E93" tabindex="-1"><a class="header-anchor" href="#umd\u5E93" aria-hidden="true">#</a> umd\u5E93</h3><p>\u65E2\u53EF\u4EE5\u901A\u8FC7 script \u6807\u7B7E\u5F15\u5165\uFF0C\u53C8\u53EF\u4EE5\u901A\u8FC7 import \u5BFC\u5165\u7684\u5E93\uFF0C\u79F0\u4E3A UMD \u5E93\u3002\u76F8\u6BD4\u4E8E npm \u5305\u7684\u7C7B\u578B\u58F0\u660E\u6587\u4EF6\uFF0C \u6211\u4EEC\u9700\u8981\u989D\u5916\u58F0\u660E\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF\uFF0C\u4E3A\u4E86\u5B9E\u73B0\u8FD9\u79CD\u65B9\u5F0F\uFF0Cts \u63D0\u4F9B\u4E86\u4E00\u4E2A\u65B0\u8BED\u6CD5 export as namespace\u3002</p><blockquote><p>\u76F4\u63A5\u6269\u5C55\u5168\u5C40\u53D8\u91CF</p></blockquote><p>\u6709\u7684\u7B2C\u4E09\u65B9\u5E93\u6269\u5C55\u4E86\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF\uFF0C\u53EF\u662F\u6B64\u5168\u5C40\u53D8\u91CF\u7684\u7C7B\u578B\u5374\u6CA1\u6709\u76F8\u5E94\u7684\u66F4\u65B0\u8FC7\u6765\uFF0C\u5C31\u4F1A\u5BFC\u81F4 ts \u7F16\u8BD1\u9519\u8BEF\uFF0C\u6B64\u65F6\u5C31\u9700\u8981\u6269\u5C55\u5168\u5C40\u53D8\u91CF\u7684\u7C7B\u578B\u3002\u6BD4\u5982\u6269\u5C55 String \u7C7B\u578B23\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
    <span class="token function">prependHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token string">&#39;foo&#39;</span><span class="token punctuation">.</span><span class="token function">prependHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E5F\u53EF\u4EE5\u4F7F\u7528 declare namespace \u7ED9\u5DF2\u6709\u7684\u547D\u540D\u7A7A\u95F4\u6DFB\u52A0\u7C7B\u578B\u58F0\u660E24\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// types/jquery-plugin/index.d.ts</span>

<span class="token keyword">declare</span> <span class="token keyword">namespace</span> JQuery <span class="token punctuation">{</span>
    <span class="token keyword">interface</span> <span class="token class-name">CustomOptions</span> <span class="token punctuation">{</span>
        bar<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">JQueryStatic</span> <span class="token punctuation">{</span>
    <span class="token function">foo</span><span class="token punctuation">(</span>options<span class="token operator">:</span> JQuery<span class="token punctuation">.</span>CustomOptions<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// src/index.ts</span>

jQuery<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    bar<span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5728 npm \u5305\u6216 UMD \u5E93\u4E2D\u6269\u5C55\u5168\u5C40\u53D8\u91CF</p></blockquote><p>\u5982\u4E4B\u524D\u6240\u8BF4\uFF0C\u5BF9\u4E8E\u4E00\u4E2A npm \u5305\u6216\u8005 UMD \u5E93\u7684\u58F0\u660E\u6587\u4EF6\uFF0C\u53EA\u6709 export \u5BFC\u51FA\u7684\u7C7B\u578B\u58F0\u660E\u624D\u80FD\u88AB\u5BFC\u5165\u3002\u6240\u4EE5\u5BF9\u4E8E npm \u5305\u6216 UMD \u5E93\uFF0C \u5982\u679C\u5BFC\u5165\u6B64\u5E93\u4E4B\u540E\u4F1A\u6269\u5C55\u5168\u5C40\u53D8\u91CF\uFF0C\u5219\u9700\u8981\u4F7F\u7528\u53E6\u4E00\u79CD\u8BED\u6CD5\u5728\u58F0\u660E\u6587\u4EF6\u4E2D\u6269\u5C55\u5168\u5C40\u53D8\u91CF\u7684\u7C7B\u578B\uFF0C\u90A3\u5C31\u662F declare global\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// types/foo/index.d.ts</span>

<span class="token keyword">declare</span> global <span class="token punctuation">{</span>
    <span class="token keyword">interface</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
        <span class="token function">prependHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>



<span class="token comment">// src/index.ts</span>

<span class="token string">&#39;bar&#39;</span><span class="token punctuation">.</span><span class="token function">prependHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\u5373\u4F7F\u6B64\u58F0\u660E\u6587\u4EF6\u4E0D\u9700\u8981\u5BFC\u51FA\u4EFB\u4F55\u4E1C\u897F\uFF0C\u4ECD\u7136\u9700\u8981\u5BFC\u51FA\u4E00\u4E2A\u7A7A\u5BF9\u8C61\uFF0C\u7528\u6765\u544A\u8BC9\u7F16\u8BD1\u5668\u8FD9\u662F\u4E00\u4E2A\u6A21\u5757\u7684\u58F0\u660E\u6587\u4EF6\uFF0C\u800C\u4E0D\u662F\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF\u7684\u58F0\u660E\u6587\u4EF6\u3002</p><h3 id="\u6A21\u5757\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757\u63D2\u4EF6" aria-hidden="true">#</a> \u6A21\u5757\u63D2\u4EF6</h3><p>\u6709\u65F6\u901A\u8FC7 import \u5BFC\u5165\u4E00\u4E2A\u6A21\u5757\u63D2\u4EF6\uFF0C\u53EF\u4EE5\u6539\u53D8\u53E6\u4E00\u4E2A\u539F\u6709\u6A21\u5757\u7684\u7ED3\u6784\u3002\u6B64\u65F6\u5982\u679C\u539F\u6709\u6A21\u5757\u5DF2\u7ECF\u6709\u4E86\u7C7B\u578B\u58F0\u660E\u6587\u4EF6\uFF0C\u800C\u63D2\u4EF6\u6A21\u5757\u6CA1\u6709\u7C7B\u578B\u58F0\u660E\u6587\u4EF6\uFF0C\u5C31\u4F1A\u5BFC\u81F4\u7C7B\u578B\u4E0D\u5B8C\u6574\uFF0C\u7F3A\u5C11\u63D2\u4EF6\u90E8\u5206\u7684\u7C7B\u578B\u3002</p><p>ts \u63D0\u4F9B\u4E86\u4E00\u4E2A\u8BED\u6CD5 declare module\uFF0C\u5B83\u53EF\u4EE5\u7528\u6765\u6269\u5C55\u539F\u6709\u6A21\u5757\u7684\u7C7B\u578B\u3002</p><blockquote><p>declare module</p></blockquote><p>\u5982\u679C\u662F\u9700\u8981\u6269\u5C55\u539F\u6709\u6A21\u5757\u7684\u8BDD\uFF0C\u9700\u8981\u5728\u7C7B\u578B\u58F0\u660E\u6587\u4EF6\u4E2D\u5148\u5F15\u7528\u539F\u6709\u6A21\u5757\uFF0C\u518D\u4F7F\u7528 declare module \u6269\u5C55\u539F\u6709\u6A21\u575726\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// types/moment-plugin/index.d.ts</span>

<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> moment <span class="token keyword">from</span> <span class="token string">&#39;moment&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;moment&#39;</span> <span class="token punctuation">{</span>
    <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> moment<span class="token punctuation">.</span>CalendarKey<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// src/index.ts</span>

<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> moment <span class="token keyword">from</span> <span class="token string">&#39;moment&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;moment-plugin&#39;</span><span class="token punctuation">;</span>

moment<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>declare module \u4E5F\u53EF\u7528\u4E8E\u5728\u4E00\u4E2A\u6587\u4EF6\u4E2D\u4E00\u6B21\u6027\u58F0\u660E\u591A\u4E2A\u6A21\u5757\u7684\u7C7B\u578B</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// types/foo-bar.d.ts</span>

<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;foo&#39;</span> <span class="token punctuation">{</span>
    <span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
        foo<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;bar&#39;</span> <span class="token punctuation">{</span>
    <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// src/index.ts</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Foo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> bar <span class="token keyword">from</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> f<span class="token operator">:</span> Foo<span class="token punctuation">;</span>
bar<span class="token punctuation">.</span><span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u58F0\u660E\u6587\u4EF6\u4E2D\u7684\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u58F0\u660E\u6587\u4EF6\u4E2D\u7684\u4F9D\u8D56" aria-hidden="true">#</a> \u58F0\u660E\u6587\u4EF6\u4E2D\u7684\u4F9D\u8D56</h3><p>\u58F0\u660E\u6587\u4EF6\u6709\u65F6\u4F1A\u4F9D\u8D56\u53E6\u4E00\u4E2A\u58F0\u660E\u6587\u4EF6\u4E2D\u7684\u7C7B\u578B\uFF0C\u6BD4\u5982\u5728\u524D\u9762\u7684 declare module \u7684\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u5C31\u5728\u58F0\u660E\u6587\u4EF6\u4E2D\u5BFC\u5165\u4E86 moment\uFF0C\u5E76\u4E14\u4F7F\u7528\u4E86 moment.CalendarKey \u8FD9\u4E2A\u7C7B\u578B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// types/moment-plugin/index.d.ts</span>

<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> moment <span class="token keyword">from</span> <span class="token string">&#39;moment&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;moment&#39;</span> <span class="token punctuation">{</span>
    <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> moment<span class="token punctuation">.</span>CalendarKey<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u4E09\u659C\u7EBF\u6307\u4EE4</p></blockquote><p>\u7C7B\u4F3C\u4E8E\u58F0\u660E\u6587\u4EF6\u4E2D\u7684 import\uFF0C\u5B83\u53EF\u4EE5\u7528\u6765\u5BFC\u5165\u53E6\u4E00\u4E2A\u58F0\u660E\u6587\u4EF6\u3002\u4E0E import \u7684\u533A\u522B\u662F\uFF0C\u5F53\u4E14\u4EC5\u5F53\u5728\u4EE5\u4E0B\u51E0\u4E2A\u573A\u666F\u4E0B\uFF0C\u6211\u4EEC\u624D\u9700\u8981\u4F7F\u7528\u4E09\u659C\u7EBF\u6307\u4EE4\u66FF\u4EE3 import\uFF1A</p><ul><li>\u5F53\u6211\u4EEC\u5728\u4E66\u5199\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF\u7684\u58F0\u660E\u6587\u4EF6\u65F6</li><li>\u5F53\u6211\u4EEC\u9700\u8981\u4F9D\u8D56\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF\u7684\u58F0\u660E\u6587\u4EF6\u65F6</li></ul><blockquote><p>\u4E66\u5199\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF\u7684\u58F0\u660E\u6587\u4EF6</p></blockquote><p>\u8FD9\u4E9B\u573A\u666F\u542C\u4E0A\u53BB\u5F88\u62D7\u53E3\uFF0C\u4F46\u5B9E\u9645\u4E0A\u5F88\u597D\u7406\u89E3\u2014\u2014\u5728\u5168\u5C40\u53D8\u91CF\u7684\u58F0\u660E\u6587\u4EF6\u4E2D\uFF0C\u662F\u4E0D\u5141\u8BB8\u51FA\u73B0 import, export \u5173\u952E\u5B57\u7684\u3002\u4E00\u65E6\u51FA\u73B0\u4E86\uFF0C\u90A3\u4E48\u4ED6\u5C31\u4F1A\u88AB\u89C6\u4E3A\u4E00\u4E2A npm \u5305\u6216 UMD \u5E93\uFF0C</p><p>\u5C31\u4E0D\u518D\u662F\u5168\u5C40\u53D8\u91CF\u7684\u58F0\u660E\u6587\u4EF6\u4E86\u3002\u6545\u5F53\u6211\u4EEC\u5728\u4E66\u5199\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF\u7684\u58F0\u660E\u6587\u4EF6\u65F6\uFF0C\u5982\u679C\u9700\u8981\u5F15\u7528\u53E6\u4E00\u4E2A\u5E93\u7684\u7C7B\u578B\uFF0C\u90A3\u4E48\u5C31\u5FC5\u987B\u7528\u4E09\u659C\u7EBF\u6307\u4EE4\u4E8628\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// types/jquery-plugin/index.d.ts</span>

<span class="token comment">/// &lt;reference types=&quot;jquery&quot; /&gt;</span>

<span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span>options<span class="token operator">:</span> JQuery<span class="token punctuation">.</span>AjaxSettings<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token comment">// src/index.ts</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E09\u659C\u7EBF\u6307\u4EE4\u7684\u8BED\u6CD5\u5982\u4E0A\uFF0C/// \u540E\u9762\u4F7F\u7528 xml \u7684\u683C\u5F0F\u6DFB\u52A0\u4E86\u5BF9 jquery \u7C7B\u578B\u7684\u4F9D\u8D56\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u5728\u58F0\u660E\u6587\u4EF6\u4E2D\u4F7F\u7528 JQuery.AjaxSettings \u7C7B\u578B\u4E86\u3002</p><p>\u6CE8\u610F\uFF0C\u4E09\u659C\u7EBF\u6307\u4EE4\u5FC5\u987B\u653E\u5728\u6587\u4EF6\u7684\u6700\u9876\u7AEF\uFF0C\u4E09\u659C\u7EBF\u6307\u4EE4\u7684\u524D\u9762\u53EA\u5141\u8BB8\u51FA\u73B0\u5355\u884C\u6216\u591A\u884C\u6CE8\u91CA\u3002</p><blockquote><p>\u4F9D\u8D56\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF\u7684\u58F0\u660E\u6587\u4EF6</p></blockquote><p>\u5728\u53E6\u4E00\u4E2A\u573A\u666F\u4E0B\uFF0C\u5F53\u6211\u4EEC\u9700\u8981\u4F9D\u8D56\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF\u7684\u58F0\u660E\u6587\u4EF6\u65F6\uFF0C\u7531\u4E8E\u5168\u5C40\u53D8\u91CF\u4E0D\u652F\u6301\u901A\u8FC7 import \u5BFC\u5165\uFF0C\u5F53\u7136\u4E5F\u5C31\u5FC5\u987B\u4F7F\u7528\u4E09\u659C\u7EBF\u6307\u4EE4\u6765\u5F15\u5165\u4E8629\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// types/node-plugin/index.d.ts

/// &lt;reference types=&quot;node&quot; /&gt;

export function foo(p: NodeJS.Process): string;
// src/index.ts

import { foo } from &#39;node-plugin&#39;;

foo(global.process);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u81EA\u52A8\u751F\u6210\u58F0\u660E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u751F\u6210\u58F0\u660E\u6587\u4EF6" aria-hidden="true">#</a> \u81EA\u52A8\u751F\u6210\u58F0\u660E\u6587\u4EF6</h3><p>\u5982\u679C\u5E93\u7684\u6E90\u7801\u672C\u8EAB\u5C31\u662F\u7531 ts \u5199\u7684\uFF0C\u90A3\u4E48\u5728\u4F7F\u7528 tsc \u811A\u672C\u5C06 ts \u7F16\u8BD1\u4E3A js \u7684\u65F6\u5019\uFF0C\u6DFB\u52A0 declaration \u9009\u9879\uFF0C\u5C31\u53EF\u4EE5\u540C\u65F6\u4E5F\u751F\u6210 .d.ts \u58F0\u660E\u6587\u4EF6\u4E86\u3002</p><p>\u6211\u4EEC\u53EF\u4EE5\u5728\u547D\u4EE4\u884C\u4E2D\u6DFB\u52A0 --declaration\uFF08\u7B80\u5199 -d\uFF09\uFF0C\u6216\u8005\u5728 tsconfig.json \u4E2D\u6DFB\u52A0 declaration \u9009\u9879\u3002\u8FD9\u91CC\u4EE5 tsconfig.json \u4E3A\u4F8B\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;commonjs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lib&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;declaration&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u4F8B\u4E2D\u6211\u4EEC\u6DFB\u52A0\u4E86 outDir \u9009\u9879\uFF0C\u5C06 ts \u6587\u4EF6\u7684\u7F16\u8BD1\u7ED3\u679C\u8F93\u51FA\u5230 lib \u76EE\u5F55\u4E0B\uFF0C\u7136\u540E\u6DFB\u52A0\u4E86 declaration \u9009\u9879\uFF0C\u8BBE\u7F6E\u4E3A true\uFF0C\u8868\u793A\u5C06\u4F1A\u7531 ts \u6587\u4EF6\u81EA\u52A8\u751F\u6210 .d.ts \u58F0\u660E\u6587\u4EF6\uFF0C\u4E5F\u4F1A\u8F93\u51FA\u5230 lib \u76EE\u5F55\u4E0B\u3002</p>`,118),o=[t];function i(c,l){return s(),a("div",null,o)}const d=n(p,[["render",i],["__file","typescript.html.vue"]]);export{d as default};
