import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,f as e}from"./app-f83986bb.js";const l={},i=e(`<h1 id="pkg" tabindex="-1"><a class="header-anchor" href="#pkg" aria-hidden="true">#</a> pkg</h1><h2 id="os包" tabindex="-1"><a class="header-anchor" href="#os包" aria-hidden="true">#</a> os包</h2><blockquote><p>获取命令参数</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">args = os.Args[1:]</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="cobra" tabindex="-1"><a class="header-anchor" href="#cobra" aria-hidden="true">#</a> cobra</h2><h3 id="command-go" tabindex="-1"><a class="header-anchor" href="#command-go" aria-hidden="true">#</a> command.go</h3><p>用于自定义一些命令，去初始化或配置数据或启动项目 例如：go-admin server -c 参数 去启动项目</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">var (</span></span>
<span class="line"><span style="color:#000000;">	configYml string</span></span>
<span class="line"><span style="color:#000000;">	apiCheck  bool</span></span>
<span class="line"><span style="color:#000000;">	StartCmd  = &amp;cobra.Command{</span></span>
<span class="line"><span style="color:#000000;">		Use:          &quot;server&quot;,</span></span>
<span class="line"><span style="color:#000000;">		Short:        &quot;Start API server&quot;,</span></span>
<span class="line"><span style="color:#000000;">		Example:      &quot;go-admin server -c config/settings.yml&quot;,</span></span>
<span class="line"><span style="color:#000000;">		SilenceUsage: true,</span></span>
<span class="line"><span style="color:#000000;">		PreRun: func(cmd *cobra.Command, args []string) {</span></span>
<span class="line"><span style="color:#000000;">			setup()</span></span>
<span class="line"><span style="color:#000000;">		},</span></span>
<span class="line"><span style="color:#000000;">		RunE: func(cmd *cobra.Command, args []string) error {</span></span>
<span class="line"><span style="color:#000000;">			return run()</span></span>
<span class="line"><span style="color:#000000;">		},</span></span>
<span class="line"><span style="color:#000000;">	}</span></span>
<span class="line"><span style="color:#000000;">)</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),r=[i];function c(t,o){return n(),a("div",null,r)}const u=s(l,[["render",c],["__file","pkg.html.vue"]]);export{u as default};
