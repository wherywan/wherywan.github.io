import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as r,c as p,a as e,b as l,d as n,e as t}from"./app-hoN0JGLf.js";const i={},c=t(`<h1 id="key和证书" tabindex="-1"><a class="header-anchor" href="#key和证书"><span>key和证书</span></a></h1><h2 id="keytool" tabindex="-1"><a class="header-anchor" href="#keytool"><span>keytool</span></a></h2><p>java自带工具用于生成密钥库keystore文件</p><ol><li>-certreq 生成证书请求</li><li>-changealias 更改条目的别名</li><li>-delete 删除条目</li><li>-exportcert 导出证书</li><li>-genkeypair 生成密钥对</li><li>-genseckey 生成密钥</li><li>-gencert 根据证书请求生成证书</li><li>-importcert 导入证书或证书链</li><li>-importpass 导入口令</li><li>-importkeystore 从其他密钥库导入一个或所有条目</li><li>-keypasswd 更改条目的密钥口令</li><li>-list 列出密钥库中的条目</li><li>-printcert 打印证书内容</li><li>-printcertreq 打印证书请求的内容</li><li>-printcrl 打印 CRL 文件的内容</li><li>-storepasswd 更改密钥库的存储口令</li></ol><blockquote><p>生成包含密钥对的密钥库文件</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span style="color:#008000;"># 交互式</span></span>
<span class="line"><span style="color:#008000;"># -keystore 密钥库文件名路径 默认在user.name目录下</span></span>
<span class="line"><span style="color:#008000;"># -storetype 密钥库类型 默认jks pkcs12(行业标准格式)</span></span>
<span class="line"><span style="color:#795E26;">keytool</span><span style="color:#0000FF;"> -genkeypair</span><span style="color:#0000FF;"> -keystore</span><span style="color:#A31515;"> &quot;test.jks&quot;</span><span style="color:#0000FF;"> -alias</span><span style="color:#A31515;"> techease</span><span style="color:#0000FF;"> -keyalg</span><span style="color:#A31515;"> RSA</span><span style="color:#0000FF;"> -validity</span><span style="color:#098658;"> 365</span><span style="color:#0000FF;"> -keysize</span><span style="color:#098658;"> 2048</span><span style="color:#0000FF;"> -storetype</span><span style="color:#A31515;"> pkcs12</span></span>
<span class="line"></span>
<span class="line"><span style="color:#008000;"># 命令</span></span>
<span class="line"><span style="color:#795E26;">keytool</span><span style="color:#0000FF;"> -genkeypair</span><span style="color:#0000FF;"> -dname</span><span style="color:#A31515;"> &quot;CN=HOSTNAME.MYAZURE.BIZ,OU=SD DC,O=OP Compliance,L=LO,S=TO,C=VO,EMAILADDRESS=Myemail@163.com&quot;</span><span style="color:#0000FF;"> -keystore</span><span style="color:#A31515;"> &quot;test.jks&quot;</span><span style="color:#0000FF;"> -alias</span><span style="color:#A31515;"> techease</span><span style="color:#0000FF;"> -keyalg</span><span style="color:#A31515;"> RSA</span><span style="color:#0000FF;"> -validity</span><span style="color:#098658;"> 365</span><span style="color:#0000FF;"> -keysize</span><span style="color:#098658;"> 2048</span><span style="color:#0000FF;"> -storetype</span><span style="color:#A31515;"> pkcs12</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>密钥库格式转换</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span style="color:#008000;">#参考</span></span>
<span class="line"><span style="color:#795E26;">keytool</span><span style="color:#0000FF;"> -v</span><span style="color:#0000FF;"> -importkeystore</span><span style="color:#0000FF;"> -srckeystore</span><span style="color:#A31515;"> keystore.jks</span><span style="color:#0000FF;"> -srcstoretype</span><span style="color:#A31515;"> jks</span><span style="color:#0000FF;"> -srcstorepass</span><span style="color:#098658;"> 123</span><span style="color:#0000FF;"> -destkeystore</span><span style="color:#A31515;"> keystore.pfx</span><span style="color:#0000FF;"> -deststoretype</span><span style="color:#A31515;"> pkcs12</span><span style="color:#0000FF;"> -deststorepass</span><span style="color:#098658;"> 1234</span><span style="color:#000000;">            </span></span>
<span class="line"></span>
<span class="line"><span style="color:#795E26;">keytool</span><span style="color:#0000FF;"> -importkeystore</span><span style="color:#0000FF;"> -srckeystore</span><span style="color:#A31515;"> test.jks</span><span style="color:#0000FF;"> -destkeystore</span><span style="color:#A31515;"> test.jks</span><span style="color:#0000FF;"> -deststoretype</span><span style="color:#A31515;"> pkcs12</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jks" tabindex="-1"><a class="header-anchor" href="#jks"><span>jks</span></a></h2>`,9),y={href:"https://www.jianshu.com/p/8b55bce19273",target:"_blank",rel:"noopener noreferrer"},d=e("h2",{id:"ssl-tsl",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ssl-tsl"},[e("span",null,"ssl /tsl")])],-1),k={href:"https://tool.4xseo.com/a/25339.html",target:"_blank",rel:"noopener noreferrer"},h={href:"http://www.liziyu.com/archives/376/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.cnblogs.com/HKnight/p/16851786.html",target:"_blank",rel:"noopener noreferrer"},u={href:"https://blog.csdn.net/emqx_broker/article/details/107316212",target:"_blank",rel:"noopener noreferrer"},F={href:"https://www.cnblogs.com/JeffreySun/archive/2010/06/24/1627247.html",target:"_blank",rel:"noopener noreferrer"},g=t('<p>传输层安全协议</p><p>x.509 规定了证书要包含的信息 签名等</p><p>SSL证书格式主要有公钥证书格式标准X.509中定义的PEM和DER、公钥加密标准PKCS中定义的PKCS#7和PKCS#12、Java环境专用的JKS。</p><p>PEM是基于Base64编码的证书格式，扩展名包括PEM、CRT和CER。Linux系统使用CRT，Windows系统使用CER。</p><p>PEM证书通常将根证书、中间证书和用户证书分开存放，主要用于Apache和Nginx。</p><p>crt、cer是标准证书格式，一般采用der(二进制) pem(base64)格式编码，扩展名可为pem、der、crt、cer</p><p>key 证书私钥格式，一般采用pem格式加密，扩展名可为key、pem</p><h2 id="certificate" tabindex="-1"><a class="header-anchor" href="#certificate"><span>certificate</span></a></h2><p>证书可分为根证书、中间证书、用户证书</p><p>如何对获取的证书校验，通过预装在计算机中的权威机构根证书对证书的身份进行校验。</p><p>非对称加密只是用于商定采用哪种对称加密方式来加密传输内容</p><h3 id="格式" tabindex="-1"><a class="header-anchor" href="#格式"><span>格式</span></a></h3><ul><li>cer windows下pem或der存储格式的证书格式</li><li>crt linux下pem或der存储格式的证书格式</li><li>pem 可包含pem格式的证书或私钥或完整信息</li><li>der der格式的公钥</li><li>csr 证书请求格式</li><li>x.509 证书标准包含哪些信息</li><li>pks 包含公钥和私钥</li><li>jks 包含公钥和私钥 keytool</li><li>key 私钥格式，一般采用pem格式加密</li></ul>',13);function b(v,_){const s=o("ExternalLinkIcon");return r(),p("div",null,[c,e("p",null,[e("a",y,[l("参考"),n(s)])]),d,e("p",null,[e("a",k,[l("参考1"),n(s)])]),e("p",null,[e("a",h,[l("参考2"),n(s)])]),e("p",null,[e("a",m,[l("参考3"),n(s)])]),e("p",null,[e("a",u,[l("参考4"),n(s)])]),e("p",null,[e("a",F,[l("参考5"),n(s)])]),g])}const x=a(i,[["render",b],["__file","key.html.vue"]]),A=JSON.parse('{"path":"/note/web/key.html","title":"key和证书","lang":"zh-CN","frontmatter":{"category":["web"],"description":"key和证书 keytool java自带工具用于生成密钥库keystore文件 -certreq 生成证书请求 -changealias 更改条目的别名 -delete 删除条目 -exportcert 导出证书 -genkeypair 生成密钥对 -genseckey 生成密钥 -gencert 根据证书请求生成证书 -importcert 导入证...","head":[["meta",{"property":"og:url","content":"https://wherywan.github.io/note/web/key.html"}],["meta",{"property":"og:site_name","content":"HONG_JI"}],["meta",{"property":"og:title","content":"key和证书"}],["meta",{"property":"og:description","content":"key和证书 keytool java自带工具用于生成密钥库keystore文件 -certreq 生成证书请求 -changealias 更改条目的别名 -delete 删除条目 -exportcert 导出证书 -genkeypair 生成密钥对 -genseckey 生成密钥 -gencert 根据证书请求生成证书 -importcert 导入证..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-08T03:26:07.000Z"}],["meta",{"property":"article:author","content":"wanhongji"}],["meta",{"property":"article:modified_time","content":"2023-09-08T03:26:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"key和证书\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-08T03:26:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"wanhongji\\"}]}"]]},"headers":[{"level":2,"title":"keytool","slug":"keytool","link":"#keytool","children":[]},{"level":2,"title":"jks","slug":"jks","link":"#jks","children":[]},{"level":2,"title":"ssl /tsl","slug":"ssl-tsl","link":"#ssl-tsl","children":[]},{"level":2,"title":"certificate","slug":"certificate","link":"#certificate","children":[{"level":3,"title":"格式","slug":"格式","link":"#格式","children":[]}]}],"git":{"createdTime":1666156424000,"updatedTime":1694143567000,"contributors":[{"name":"wanhongji","email":"wherywan@163.com","commits":1}]},"readingTime":{"minutes":2.36,"words":707},"filePathRelative":"note/web/key.md","localizedDate":"2022年10月19日","excerpt":"\\n<h2>keytool</h2>\\n<p>java自带工具用于生成密钥库keystore文件</p>\\n<ol>\\n<li>-certreq            生成证书请求</li>\\n<li>-changealias        更改条目的别名</li>\\n<li>-delete             删除条目</li>\\n<li>-exportcert         导出证书</li>\\n<li>-genkeypair         生成密钥对</li>\\n<li>-genseckey          生成密钥</li>\\n<li>-gencert            根据证书请求生成证书</li>\\n<li>-importcert         导入证书或证书链</li>\\n<li>-importpass         导入口令</li>\\n<li>-importkeystore     从其他密钥库导入一个或所有条目</li>\\n<li>-keypasswd          更改条目的密钥口令</li>\\n<li>-list               列出密钥库中的条目</li>\\n<li>-printcert          打印证书内容</li>\\n<li>-printcertreq       打印证书请求的内容</li>\\n<li>-printcrl           打印 CRL 文件的内容</li>\\n<li>-storepasswd        更改密钥库的存储口令</li>\\n</ol>","autoDesc":true}');export{x as comp,A as data};