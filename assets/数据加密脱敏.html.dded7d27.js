import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as t}from"./app.6f24b29a.js";const e={},p=t(`<h1 id="\u6570\u636E\u52A0\u5BC6\u8131\u654F" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u52A0\u5BC6\u8131\u654F" aria-hidden="true">#</a> \u6570\u636E\u52A0\u5BC6\u8131\u654F</h1><h2 id="aes\u52A0\u5BC6" tabindex="-1"><a class="header-anchor" href="#aes\u52A0\u5BC6" aria-hidden="true">#</a> aes\u52A0\u5BC6</h2><ul><li>\u5BF9\u79F0\u52A0\u5BC6\u7B97\u6CD5\uFF0C\u9700\u63D0\u4F9B\u53CC\u65B9\u7EA6\u5B9A\u7684\u552F\u4E00\u5BC6\u94A5</li><li>\u5BC6\u94A5\u957F\u5EA6\u53EA\u80FD\u4E3A16/24/32\u4E2A\u5B57\u7B26</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AESUtil</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">SymmetricCrypto</span> aes<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> secret<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${aes.secret}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setSecret</span><span class="token punctuation">(</span><span class="token class-name">String</span> secret<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">AESUtil</span><span class="token punctuation">.</span>secret <span class="token operator">=</span> secret<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@PostConstruct</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> key <span class="token operator">=</span> secret<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token class-name">StandardCharsets</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        aes <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SymmetricCrypto</span><span class="token punctuation">(</span><span class="token class-name">SymmetricAlgorithm</span><span class="token punctuation">.</span><span class="token constant">AES</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;++++++++++&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>aes<span class="token punctuation">.</span><span class="token function">getSecretKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getEncoded</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;++++++++++&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u52A0\u5BC6
     * <span class="token keyword">@param</span> <span class="token parameter">content</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">encrypt</span><span class="token punctuation">(</span><span class="token class-name">String</span> content<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> aes<span class="token punctuation">.</span><span class="token function">encryptHex</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u89E3\u5BC6
     * <span class="token keyword">@param</span> <span class="token parameter">encryptStr</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">decrypt</span><span class="token punctuation">(</span><span class="token class-name">String</span> encryptStr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> aes<span class="token punctuation">.</span><span class="token function">decryptStr</span><span class="token punctuation">(</span>encryptStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rsa\u52A0\u5BC6" tabindex="-1"><a class="header-anchor" href="#rsa\u52A0\u5BC6" aria-hidden="true">#</a> rsa\u52A0\u5BC6</h2><blockquote><p>\u5F15\u5165\u5305</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u4F20\u7EDFjs
# \u4E0B\u8F7Djsencrypt.min.js

# \u524D\u540E\u7AEF\u5206\u79BB\u7AEF
yarn add jsencrypt@3.2.0
npm install jsencrypt@3.2.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),c=[p];function o(i,l){return s(),a("div",null,c)}const d=n(e,[["render",o],["__file","\u6570\u636E\u52A0\u5BC6\u8131\u654F.html.vue"]]);export{d as default};
