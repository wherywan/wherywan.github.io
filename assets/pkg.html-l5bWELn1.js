import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,e}from"./app-hoN0JGLf.js";const t={},i=e(`<h1 id="pkg" tabindex="-1"><a class="header-anchor" href="#pkg"><span>pkg</span></a></h1><h2 id="os包" tabindex="-1"><a class="header-anchor" href="#os包"><span>os包</span></a></h2><blockquote><p>获取命令参数</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>args = os.Args[1:]</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="cobra" tabindex="-1"><a class="header-anchor" href="#cobra"><span>cobra</span></a></h2><h3 id="command-go" tabindex="-1"><a class="header-anchor" href="#command-go"><span>command.go</span></a></h3><p>用于自定义一些命令，去初始化或配置数据或启动项目 例如：go-admin server -c 参数 去启动项目</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>var (</span></span>
<span class="line"><span>	configYml string</span></span>
<span class="line"><span>	apiCheck  bool</span></span>
<span class="line"><span>	StartCmd  = &amp;cobra.Command{</span></span>
<span class="line"><span>		Use:          &quot;server&quot;,</span></span>
<span class="line"><span>		Short:        &quot;Start API server&quot;,</span></span>
<span class="line"><span>		Example:      &quot;go-admin server -c config/settings.yml&quot;,</span></span>
<span class="line"><span>		SilenceUsage: true,</span></span>
<span class="line"><span>		PreRun: func(cmd *cobra.Command, args []string) {</span></span>
<span class="line"><span>			setup()</span></span>
<span class="line"><span>		},</span></span>
<span class="line"><span>		RunE: func(cmd *cobra.Command, args []string) error {</span></span>
<span class="line"><span>			return run()</span></span>
<span class="line"><span>		},</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),l=[i];function o(p,r){return a(),s("div",null,l)}const m=n(t,[["render",o],["__file","pkg.html.vue"]]),g=JSON.parse('{"path":"/note/go/pkg.html","title":"pkg","lang":"zh-CN","frontmatter":{"description":"pkg os包 获取命令参数 cobra command.go 用于自定义一些命令，去初始化或配置数据或启动项目 例如：go-admin server -c 参数 去启动项目","head":[["meta",{"property":"og:url","content":"https://wherywan.github.io/note/go/pkg.html"}],["meta",{"property":"og:site_name","content":"HONG_JI"}],["meta",{"property":"og:title","content":"pkg"}],["meta",{"property":"og:description","content":"pkg os包 获取命令参数 cobra command.go 用于自定义一些命令，去初始化或配置数据或启动项目 例如：go-admin server -c 参数 去启动项目"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-10-30T05:44:08.000Z"}],["meta",{"property":"article:author","content":"wanhongji"}],["meta",{"property":"article:modified_time","content":"2022-10-30T05:44:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"pkg\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-10-30T05:44:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"wanhongji\\"}]}"]]},"headers":[{"level":2,"title":"os包","slug":"os包","link":"#os包","children":[]},{"level":2,"title":"cobra","slug":"cobra","link":"#cobra","children":[{"level":3,"title":"command.go","slug":"command-go","link":"#command-go","children":[]}]}],"git":{"createdTime":1667108648000,"updatedTime":1667108648000,"contributors":[{"name":"wanhongji","email":"wherywan@163.com","commits":1}]},"readingTime":{"minutes":0.3,"words":89},"filePathRelative":"note/go/pkg.md","localizedDate":"2022年10月30日","excerpt":"\\n<h2>os包</h2>\\n<blockquote>\\n<p>获取命令参数</p>\\n</blockquote>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"shiki light-plus\\" style=\\"background-color:#FFFFFF;color:#000000\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span>args = os.Args[1:]</span></span>\\n<span class=\\"line\\"><span></span></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{m as comp,g as data};