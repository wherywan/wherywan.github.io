import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as a,f as i}from"./app.6f24b29a.js";const r={},s=i(`<h1 id="pkg" tabindex="-1"><a class="header-anchor" href="#pkg" aria-hidden="true">#</a> pkg</h1><h2 id="os\u5305" tabindex="-1"><a class="header-anchor" href="#os\u5305" aria-hidden="true">#</a> os\u5305</h2><blockquote><p>\u83B7\u53D6\u547D\u4EE4\u53C2\u6570</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>args = os.Args[1:]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="cobra" tabindex="-1"><a class="header-anchor" href="#cobra" aria-hidden="true">#</a> cobra</h2><h3 id="command-go" tabindex="-1"><a class="header-anchor" href="#command-go" aria-hidden="true">#</a> command.go</h3><p>\u7528\u4E8E\u81EA\u5B9A\u4E49\u4E00\u4E9B\u547D\u4EE4\uFF0C\u53BB\u521D\u59CB\u5316\u6216\u914D\u7F6E\u6570\u636E\u6216\u542F\u52A8\u9879\u76EE \u4F8B\u5982\uFF1Ago-admin server -c \u53C2\u6570 \u53BB\u542F\u52A8\u9879\u76EE</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var (
	configYml string
	apiCheck  bool
	StartCmd  = &amp;cobra.Command{
		Use:          &quot;server&quot;,
		Short:        &quot;Start API server&quot;,
		Example:      &quot;go-admin server -c config/settings.yml&quot;,
		SilenceUsage: true,
		PreRun: func(cmd *cobra.Command, args []string) {
			setup()
		},
		RunE: func(cmd *cobra.Command, args []string) error {
			return run()
		},
	}
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),t=[s];function d(c,l){return n(),a("div",null,t)}const u=e(r,[["render",d],["__file","pkg.html.vue"]]);export{u as default};
