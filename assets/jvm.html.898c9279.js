import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as n,f as l}from"./app.6f24b29a.js";const d={},s=l(`<h1 id="jvm" tabindex="-1"><a class="header-anchor" href="#jvm" aria-hidden="true">#</a> jvm</h1><h2 id="gc" tabindex="-1"><a class="header-anchor" href="#gc" aria-hidden="true">#</a> GC</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  gc\u5373\u5783\u573E\u56DE\u6536
  gc\u53EF\u4EE5\u5E2E\u52A9\u7A0B\u5E8F\u5458\u5B9E\u73B0\u81EA\u52A8\u5185\u5B58\u7BA1\u7406\uFF0C\u800C\u4E0D\u7528\u7A0B\u5E8F\u5458\u624B\u52A8\u91CA\u653E\u5185\u5B58\uFF0C\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\u3002
  \u5224\u65AD\u5BF9\u8C61\u662F\u5426\u5B58\u6D3B\u7684\u7B97\u6CD5\uFF1A
  1\u3001\u53EF\u8FBE\u6027\u5206\u6790\u7B97\u6CD5
  2\u3001\u5F15\u7528\u8BA1\u6570\u6CD5 python\u7B49\u8BED\u8A00\u4F7F\u7528\u8FDB\u884C\u5185\u5B58\u7BA1\u7406
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>\u5F15\u7528\u8BA1\u6570\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5F15\u7528\u8BA1\u6570\u6CD5\uFF0C\u5BF9\u8C61\u4E2D\u7EF4\u62A4\u4E00\u4E2A\u5F15\u7528\u8BA1\u6570\u5668\uFF0C\u5982\u679C\u5BF9\u8C61\u88AB\u5F15\u7528\u5219\u6570\u91CF\u52A01\uFF0C
\u5BF9\u8C61\u7684\u76F8\u4E92\u5F15\u7528\u5BFC\u81F4\u5185\u5B58\u65E0\u6CD5\u56DE\u6536\u6CC4\u9732\uFF0C\u5982:
ObjectA a = new ObjectA();
ObjectB b = new ObjectB();
a.instance = b;
b.instance = a;
a = null;
b = null;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u53EF\u8FBE\u6027\u5206\u6790\u7B97\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1\u3001\u901A\u8FC7\u4E00\u7CFB\u5217\u88AB\u79F0\u4E3AGCRoot\u7684\u6839\u5BF9\u8C61\u4F5C\u4E3A\u8D77\u59CB\u7ED3\u70B9\u96C6\u6765\u5224\u6BB5\u5BF9\u8C61\u662F\u5426\u5B58\u6D3B\u3002
2\u3001\u6839\u636E\u5F15\u7528\u5173\u7CFB\u4ECE\u6839\u8282\u70B9\u5411\u4E0B\u641C\u7D22\uFF0C\u82E5\u67D0\u4E2A\u5BF9\u8C61\u4E0D\u53EF\u8FBE\uFF0C\u5219\u5BF9\u8C61\u4E0D\u518D\u88AB\u4F7F\u7528
3\u3001\u53EF\u4F5C\u4E3AGC root\u7684\u6709\uFF1A
	- \u865A\u62DF\u673A\u6808\u5E27\u7684\u5C40\u90E8\u53D8\u91CF\u8868\u5F15\u7528\u7684\u5BF9\u8C61
	- \u65B9\u6CD5\u533A\u7684\u7C7B\u53D8\u91CF\uFF0C\u5373\u9759\u6001\u53D8\u91CF
	- \u65B9\u6CD5\u533A\u7684\u5E38\u91CF
	- synchronized\u6301\u6709\u7684\u76D1\u89C6\u5668\u5BF9\u8C61
4\u3001\u5F15\u7528\u53EF\u5206\u4E3A\u5F3A\u5F15\u7528(\u4E0D\u4F1A\u56DE\u6536)\u3001\u8F6F\u5F15\u7528(\u5BF9\u8F6F\u5F15\u7528\u56DE\u6536\u3001\u82E5\u5185\u5B58\u8FD8\u662F\u4E0D\u8DB3\uFF0C\u62A5\u5185\u5B58\u6EA2\u51FA\u5F02\u5E38)\u3001\u5F31\u5F15\u7528(\u5728\u7B2C\u4E00\u6B21\u5783\u573E\u56DE\u6536\u65F6\uFF0C\u5168\u90E8\u56DE\u6536)\u3001\u865A\u5F15\u7528
5\u3001\u4E0D\u53EF\u8FBE\u5E76\u4E0D\u662F\u771F\u6B63\u6B7B\u4EA1\uFF0C\u5B83\u4F1A\u88AB\u6807\u8BB0\uFF0C\u968F\u540E\u8FDB\u884C\u7B5B\u9009\uFF0C\u5224\u65AD\u662F\u5426\u6709\u5FC5\u8981\u6267\u884Cfinalize\u65B9\u6CD5\uFF0C\u82E5\u5DF2\u6267\u884C\u6216\u672A\u8986\u76D6\u4E0A\u8FF0\u65B9\u6CD5\uFF0C\u5219\u6CA1\u6709\u5FC5\u8981\u6267\u884C\u3002\u82E5\u6709\u5FC5\u8981\u6267\u884C\u5219\u4F1A\u52A0\u5165\u5230F-Queue\u961F\u5217,\u7531\u4F4E\u4F18\u5148\u7EA7\u7684Finalizer\u7EBF\u7A0B\u6267\u884Cfinalize()\u65B9\u6CD5\uFF0Cfinalize()\u662F\u5BF9\u8C61\u907F\u514D\u6B7B\u4EA1\u7684\u6700\u540E\u673A\u4F1A\uFF0C\u91CD\u65B0\u4E0E\u5F15\u7528\u94FE\u6216\u8DEF\u5F84\u8FDE\u63A5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5806\u7684\u5206\u4EE3\u5212\u5206\uFF1A\u65B0\u751F\u4EE3\uFF08eden\u533A\u3001\u4E24\u4E2Asurvive\u533A\uFF09\u8001\u5E74\u4EE3
\u5783\u573E\u6536\u96C6\u7684\u533A\u57DF\u5212\u5206\uFF1AminorGc,majorGc,fullGc
\u5783\u573E\u6536\u96C6\u7B97\u6CD5\u5982\u4E0B\uFF1A
1\u3001\u6807\u8BB0-\u590D\u5236 \u7528\u4E8E\u65B0\u751F\u4EE3
	- \u901A\u8FC7\u5BF9\u65B0\u751F\u4EE3\u5185\u5B58\u5212\u5206\u4E3Aeden\u533A\u3001\u4E24\u4E2Asurvive\u533A\uFF0C\u4F18\u5148\u5206\u914Deden\u548C\u4E00\u4E2Asurvive\u533A
2\u3001\u6807\u8BB0-\u6E05\u9664 
	-\u4F1A\u4EA7\u751F\u5927\u91CF\u5185\u5B58\u788E\u7247\uFF0C\u5BFC\u81F4\u65E0\u6CD5\u5206\u914D\u5185\u5B58\uFF0C\u63D0\u524D\u89E6\u53D1Gc
3\u3001\u6807\u8BB0\u6574\u7406 \u7528\u4E8E\u8001\u5E74\u4EE3
	-\u5C06\u5B58\u6D3B\u7684\u5BF9\u8C61\u79FB\u5230\u5185\u5B58\u7684\u4E00\u7AEF\uFF0C\u6E05\u9664\u8FB9\u754C\u4EE5\u5916\u7684\u5185\u5B58
\u6839\u8282\u70B9\u679A\u4E3E\uFF0C\u65E0\u6CD5\u907F\u514Dstop the world \u6682\u505C\u6240\u6709\u7528\u6237\u7EBF\u7A0B
\u4F7F\u7528oopMap\u6570\u636E\u7ED3\u6784\u5B58\u653E\u5BF9\u8C61\u7684\u4F4D\u7F6E\u4FE1\u606F\uFF0C\u4FDD\u5B58\u5728\u5B89\u5168\u70B9\uFF0C\u5373\u65B9\u6CD5\u8C03\u7528\uFF0C\u5FAA\u73AF\u8DF3\u8F6C\u3001\u5F02\u5E38\u8DF3\u8F6C
\u5B89\u5168\u533A\u57DF\uFF0C\u5373sleep\u7684\u7EBF\u7A0B\u5982\u4F55\u5230\u5B89\u5168\u70B9\uFF0C\u5B89\u5168\u70B9\u7684\u5EF6\u7533
\u5982\u4F55\u8BA9\u6240\u6709\u7EBF\u7A0B\u90FD\u8DD1\u5230\u5B89\u5168\u70B9\u7684\u65B9\u6848\uFF1A
1\u3001\u62A2\u5148\u5F0F\u4E2D\u65AD
2\u3001\u4E3B\u52A8\u5F0F\u4E2D\u65AD \u5E38\u7528\u7684\u65B9\u6848
	- \u7EBF\u7A0B\u5728\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u6267\u884C\u5230\u5B89\u5168\u70B9\u65F6\uFF0C\u82E5\u53D1\u73B0\u5783\u573E\u56DE\u6536\u6807\u5FD7\u4E3A\u771F\uFF0C\u5219\u4E3B\u52A8\u8DD1\u5230\u5B89\u5168\u70B9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5783\u573E\u6536\u96C6\u5668\uFF1A
1\u3001\u65B0\u751F\u4EE3
	serial \u5355\u7EBF\u7A0B 
	parnew \u591A\u7EBF\u7A0B
	parallel scavenge \u591A\u7EBF\u7A0B
2\u3001\u8001\u5E74\u4EE3
	serial old
	parallel old
cms \u5E76\u53D1\u505C\u987F\u6536\u96C6\u5668
G1 \u5168\u529F\u80FD\u5783\u573E\u6536\u96C6\u5668
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7C7B\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u52A0\u8F7D" aria-hidden="true">#</a> \u7C7B\u52A0\u8F7D</h2><ul><li><p>\u7C7B\u52A0\u8F7D\u8FC7\u7A0B</p><ul><li>\u52A0\u8F7D</li><li>\u8FDE\u63A5-\u9A8C\u8BC1</li><li>\u8FDE\u63A5-\u51C6\u5907</li><li>\u8FDE\u63A5-\u89E3\u6790</li><li>\u521D\u59CB\u5316</li></ul></li><li><p>\u53CC\u4EB2\u59D4\u6D3E\u673A\u5236</p><ul><li><p>\u542F\u52A8\u7C7B\u52A0\u8F7D\u5668</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>lang\u5305\u4E0B\u7684class\u5BF9\u8C61
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u6269\u5C55\u7C7B\u52A0\u8F7D\u5668</p></li><li><p>\u5E94\u7528\u7C7B\u52A0\u8F7D\u5668</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u81EA\u5B9A\u4E49\u7C7B\u7684\u52A0\u8F7D\u5668
\u52A0\u8F7D\u81EA\u5B9A\u4E49\u7C7B\u7684\u76F8\u5173\u7C7B\u5BF9\u8C61\uFF0C\u5C40\u90E8\u6027\u548C\u7A7A\u95F4\u6027
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B</p></li></ul></li></ul>`,8),a=[s];function v(r,c){return i(),n("div",null,a)}const m=e(d,[["render",v],["__file","jvm.html.vue"]]);export{m as default};
