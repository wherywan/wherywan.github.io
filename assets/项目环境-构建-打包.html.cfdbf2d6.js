import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as s,f as i}from"./app.6f24b29a.js";const l="/assets/20200925225755328.f1be199c.png",n={},r=i(`<h1 id="\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE" aria-hidden="true">#</a> \u9879\u76EE</h1><h2 id="classpath" tabindex="-1"><a class="header-anchor" href="#classpath" aria-hidden="true">#</a> classpath</h2><blockquote><p>maven</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5982\u679C\u8D44\u6E90\u6587\u4EF6\u653E\u5728 maven \u5DE5\u7A0B\u7684 src/main/resources \u8D44\u6E90\u6587\u4EF6\u5939\u4E0B\uFF0C\u6E90\u7801\u6587\u4EF6\u653E\u5728 src/main/java/ \u4E0B\uFF0C\u4E24\u8005\u7F16\u8BD1\u540E\u90FD\u4F1A\u653E\u5230 target/classes \u4E2D\uFF0C
\u56E0\u6B64 Maven \u9879\u76EE\u7684 classpath \u8DEF\u5F84\u662F\uFF1Ajava \u6587\u4EF6\u5939\u548C resources \u6587\u4EF6\u5939\u4E0B\u7684\u6839\u4F4D\u7F6E\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+l+`" alt="20200925225755328"></p><blockquote><p>gradle</p></blockquote><p><strong>build\u76EE\u5F55</strong> \u9879\u76EE\u8F93\u51FA\u8DEF\u5F84\uFF0C\u5305\u62EC\u7F16\u8BD1\u540E\u7684.class\u6587\u4EF6\uFF08classes\u6587\u4EF6\u5939\u4E0B\uFF09\uFF0C\u8D44\u6E90\u6587\u4EF6\uFF08resourcer\u6587\u4EF6\u5939\u4E0B\uFF09</p><blockquote><p>\u666E\u901Ajava\u9879\u76EE</p></blockquote><p>\u7C7B\u8DEF\u5F84\u662Fmodule\u5B9A\u4E49\u7684\u76EE\u5F55\u6216\u9879\u76EE\u8F93\u51FA\u76EE\u5F55</p><h2 id="jar\u5305" tabindex="-1"><a class="header-anchor" href="#jar\u5305" aria-hidden="true">#</a> jar\u5305</h2><blockquote><p>\u53EF\u6267\u884Cjar\u5305</p></blockquote><ul><li><p>META-INF</p><ul><li><p>MANIFEST.MF\u6587\u4EF6\uFF0C\u5B9A\u4E49\u4E86\u7C7B\u8DEF\u5F84\uFF0C\u4F9D\u8D56jar\u5305\u8DEF\u5F84\uFF0C\u542F\u52A8\u7C7B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Manifest-Version: 1.0

Spring-Boot-Classpath-Index: BOOT-INF/classpath.idx

Start-Class: com.example.learning_research.LearningResearchApplication

Spring-Boot-Classes: BOOT-INF/classes/

Spring-Boot-Lib: BOOT-INF/lib/

Spring-Boot-Version: 2.3.2.RELEASE

Main-Class: org.springframework.boot.loader.JarLauncher
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>BOOT-INF</p></li><li><p>org</p></li></ul><blockquote><p>\u666E\u901Ajar</p></blockquote><ul><li>\u7C7B\u6587\u4EF6\uFF0C com.xxx.xxx</li><li>META-INF</li></ul>`,14),c=[r];function d(t,o){return a(),s("div",null,c)}const v=e(n,[["render",d],["__file","\u9879\u76EE\u73AF\u5883-\u6784\u5EFA-\u6253\u5305.html.vue"]]);export{v as default};
