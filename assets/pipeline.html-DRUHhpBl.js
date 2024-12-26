import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o,c as i,a as s,b as a,d as l,e as c}from"./app-hoN0JGLf.js";const r={},t=s("h1",{id:"pipeline",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#pipeline"},[s("span",null,"pipeline")])],-1),d={href:"https://www.jenkins.io/zh/doc/book/pipeline/syntax/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://blog.51cto.com/vccloud/5212968",target:"_blank",rel:"noopener noreferrer"},y=c(`<h2 id="jenkins" tabindex="-1"><a class="header-anchor" href="#jenkins"><span>jenkins</span></a></h2><ul><li>agent 指示 Jenkins 为整个流水线分配一个执行器（在 Jenkins 环境中的任何可用代理/节点上）和工作区</li><li>node 与上面的 agent 做了同样的事情。</li></ul><h3 id="声明式" tabindex="-1"><a class="header-anchor" href="#声明式"><span>声明式</span></a></h3><p>在声明式流水线语法中, pipeline 块定义了整个流水线中完成的所有的工作。</p><blockquote><p>agent</p></blockquote><blockquote><p>tools</p></blockquote><p>The tool name must be pre-configured in Jenkins under Manage Jenkins → Global Tool Configuration</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>pipeline {</span></span>
<span class="line"><span>    agent any</span></span>
<span class="line"><span>    tools {</span></span>
<span class="line"><span>        maven &#39;apache-maven-3.0.1&#39; </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    stages {</span></span>
<span class="line"><span>        stage(&#39;Example&#39;) {</span></span>
<span class="line"><span>            steps {</span></span>
<span class="line"><span>                sh &#39;mvn --version&#39;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>environment</p></blockquote><blockquote><p>parameters</p></blockquote><blockquote><p>options</p></blockquote><blockquote><p>triggers</p></blockquote><blockquote><p>dir</p></blockquote><p>切换工作目录</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span style="color:#795E26;">pipeline</span><span style="color:#A31515;"> {</span></span>
<span class="line"><span style="color:#795E26;">    agent</span><span style="color:#A31515;"> any</span><span style="color:#000000;"> </span></span>
<span class="line"><span style="color:#795E26;">    stages</span><span style="color:#A31515;"> {</span></span>
<span class="line"><span style="color:#795E26;">        stage(</span><span style="color:#795E26;">&#39;Build&#39;</span><span style="color:#000000;">) { </span></span>
<span class="line"><span style="color:#795E26;">            steps</span><span style="color:#A31515;"> {</span></span>
<span class="line"><span style="color:#795E26;">                //</span><span style="color:#000000;"> </span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#795E26;">        stage(</span><span style="color:#795E26;">&#39;Test&#39;</span><span style="color:#000000;">) { </span></span>
<span class="line"><span style="color:#795E26;">            steps</span><span style="color:#A31515;"> {</span></span>
<span class="line"><span style="color:#795E26;">                //</span><span style="color:#000000;"> </span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#795E26;">        stage(</span><span style="color:#795E26;">&#39;Deploy&#39;</span><span style="color:#000000;">) { </span></span>
<span class="line"><span style="color:#795E26;">            steps</span><span style="color:#A31515;"> {</span></span>
<span class="line"><span style="color:#795E26;">                //</span><span style="color:#000000;"> </span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>pipeline样例</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span style="color:#008000;"># linux docker hub</span></span>
<span class="line"><span style="color:#795E26;">pipeline</span><span style="color:#A31515;"> {</span></span>
<span class="line"><span style="color:#795E26;">    agent</span><span style="color:#A31515;"> any</span></span>
<span class="line"><span style="color:#795E26;">    environment</span><span style="color:#A31515;"> {</span></span>
<span class="line"><span style="color:#001080;">        DOCKER_HUB</span><span style="color:#000000;">=</span><span style="color:#A31515;">credentials</span><span style="color:#000000;">(</span><span style="color:#795E26;">&quot;dockerhub&quot;</span><span style="color:#000000;">)</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#795E26;">    tools</span><span style="color:#A31515;"> {</span></span>
<span class="line"><span style="color:#795E26;">        maven</span><span style="color:#A31515;"> &#39;maven-3.6.3&#39;</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#795E26;">    stages</span><span style="color:#A31515;"> {</span></span>
<span class="line"><span style="color:#795E26;">        stage(</span><span style="color:#795E26;">&#39;拉取代码&#39;</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#795E26;">            steps</span><span style="color:#A31515;"> {</span></span>
<span class="line"><span style="color:#795E26;">                echo</span><span style="color:#A31515;"> &#39;Hello World&#39;</span></span>
<span class="line"><span style="color:#795E26;">                //</span><span style="color:#A31515;"> 删除文件夹文件夹文件夹文内容</span></span>
<span class="line"><span style="color:#795E26;">                sh</span><span style="color:#A31515;"> &#39;rm  -rf *&#39;</span></span>
<span class="line"><span style="color:#795E26;">                dir(</span><span style="color:#795E26;">&quot;jimureport&quot;</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#795E26;">                     git</span><span style="color:#A31515;"> credentialsId:</span><span style="color:#A31515;"> &#39;ewrwt345433535&#39;,</span><span style="color:#A31515;"> url:</span><span style="color:#A31515;"> &#39;https://gitee.com/wanhongji/JimuReport.git&#39;</span></span>
<span class="line"><span style="color:#000000;">                }</span></span>
<span class="line"><span style="color:#795E26;">                sh</span><span style="color:#A31515;"> &#39;pwd&#39;</span></span>
<span class="line"><span style="color:#795E26;">                echo</span><span style="color:#A31515;"> &quot;\${</span><span style="color:#001080;">workspace</span><span style="color:#A31515;">}&quot;</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#795E26;">        stage(</span><span style="color:#795E26;">&#39;打包&#39;</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#795E26;">            steps</span><span style="color:#A31515;"> {</span></span>
<span class="line"><span style="color:#795E26;">                sh</span><span style="color:#A31515;"> &#39;mvn --version&#39;</span></span>
<span class="line"><span style="color:#795E26;">                sh</span><span style="color:#A31515;"> &#39;docker -v&#39;</span></span>
<span class="line"><span style="color:#795E26;">                dir(</span><span style="color:#795E26;">&quot;jimureport/jimureport-example&quot;</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#795E26;">                    sh</span><span style="color:#A31515;"> &#39;mvn clean package&#39;</span></span>
<span class="line"><span style="color:#795E26;">                    sh</span><span style="color:#A31515;"> &quot;docker build -t wanhongji/mysql:report.2.0 ./db&quot;</span></span>
<span class="line"><span style="color:#795E26;">                    sh</span><span style="color:#A31515;"> &quot;docker build -t wanhongji/report:2.0 .&quot;</span></span>
<span class="line"><span style="color:#795E26;">                    sh</span><span style="color:#A31515;"> &quot;docker login -u \${</span><span style="color:#001080;">DOCKER_HUB_USR</span><span style="color:#A31515;">} -p \${</span><span style="color:#001080;">DOCKER_HUB_PSW</span><span style="color:#A31515;">}&quot;</span></span>
<span class="line"><span style="color:#795E26;">                    sh</span><span style="color:#A31515;"> &quot;docker push wanhongji/report:2.0&quot;</span></span>
<span class="line"><span style="color:#795E26;">                    sh</span><span style="color:#A31515;"> &quot;docker push wanhongji/mysql:report.2.0&quot;</span></span>
<span class="line"><span style="color:#000000;">                }</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#008000;"># mac harbor</span></span>
<span class="line"></span>
<span class="line"><span style="color:#795E26;">pipeline</span><span style="color:#A31515;"> {</span></span>
<span class="line"><span style="color:#795E26;">    agent</span><span style="color:#A31515;"> any</span></span>
<span class="line"><span style="color:#795E26;">    environment</span><span style="color:#A31515;"> {</span></span>
<span class="line"><span style="color:#001080;">        HARBOR</span><span style="color:#000000;">=</span><span style="color:#A31515;">credentials</span><span style="color:#000000;">(</span><span style="color:#795E26;">&quot;harbor&quot;</span><span style="color:#000000;">)</span></span>
<span class="line"><span style="color:#001080;">        HARBOR_HOST</span><span style="color:#000000;">=</span><span style="color:#A31515;">&#39;192.168.3.88:8089&#39;</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#795E26;">    tools</span><span style="color:#A31515;"> {</span></span>
<span class="line"><span style="color:#795E26;">        maven</span><span style="color:#A31515;"> &#39;maven3.6.3&#39;</span><span style="color:#000000;"> </span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#795E26;">    stages</span><span style="color:#A31515;"> {</span></span>
<span class="line"><span style="color:#795E26;">        stage(</span><span style="color:#795E26;">&#39;拉取代码&#39;</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#795E26;">            steps</span><span style="color:#A31515;"> {</span></span>
<span class="line"><span style="color:#795E26;">                echo</span><span style="color:#A31515;"> &#39;Hello World&#39;</span></span>
<span class="line"><span style="color:#795E26;">                //</span><span style="color:#A31515;"> 删除文件夹文件夹文件夹文内容</span></span>
<span class="line"><span style="color:#795E26;">                sh</span><span style="color:#A31515;"> &#39;rm  -rf *&#39;</span><span style="color:#000000;"> </span></span>
<span class="line"><span style="color:#795E26;">                dir(</span><span style="color:#795E26;">&quot;jimureport&quot;</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#795E26;">                     git</span><span style="color:#A31515;"> credentialsId:</span><span style="color:#A31515;"> &#39;5436576587&#39;,</span><span style="color:#A31515;"> url:</span><span style="color:#A31515;"> &#39;https://gitee.com/wanhongji/JimuReport.git&#39;</span></span>
<span class="line"><span style="color:#795E26;">                     sh</span><span style="color:#A31515;"> &#39;pwd&#39;</span></span>
<span class="line"><span style="color:#795E26;">                     sh</span><span style="color:#A31515;"> &#39;ls -a&#39;</span></span>
<span class="line"><span style="color:#000000;">                }</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#795E26;">        stage(</span><span style="color:#795E26;">&quot;打包&quot;</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#795E26;">            steps</span><span style="color:#A31515;"> {</span></span>
<span class="line"><span style="color:#795E26;">                dir(</span><span style="color:#795E26;">&quot;jimureport/jimureport-example&quot;</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#795E26;">                    sh</span><span style="color:#A31515;"> &quot;sed -i &#39;s/8.0.19/latest/g&#39; ./db/Dockerfile&quot;</span></span>
<span class="line"><span style="color:#795E26;">                    sh</span><span style="color:#A31515;"> &#39;mvn clean package&#39;</span></span>
<span class="line"><span style="color:#795E26;">                    sh</span><span style="color:#A31515;"> &quot;docker build -t \${</span><span style="color:#001080;">HARBOR_HOST</span><span style="color:#A31515;">}/report/mysql:report.2.0 ./db&quot;</span></span>
<span class="line"><span style="color:#795E26;">                    sh</span><span style="color:#A31515;"> &quot;docker build -t \${</span><span style="color:#001080;">HARBOR_HOST</span><span style="color:#A31515;">}/report/report:2.0 .&quot;</span></span>
<span class="line"><span style="color:#795E26;">                    sh</span><span style="color:#A31515;"> &quot;docker login -u \${</span><span style="color:#001080;">HARBOR_USR</span><span style="color:#A31515;">} -p \${</span><span style="color:#001080;">HARBOR_PSW</span><span style="color:#A31515;">} \${</span><span style="color:#001080;">HARBOR_HOST</span><span style="color:#A31515;">}&quot;</span></span>
<span class="line"><span style="color:#795E26;">                    sh</span><span style="color:#A31515;"> &quot;docker push \${</span><span style="color:#001080;">HARBOR_HOST</span><span style="color:#A31515;">}/report/report:2.0&quot;</span></span>
<span class="line"><span style="color:#795E26;">                    sh</span><span style="color:#A31515;"> &quot;docker push \${</span><span style="color:#001080;">HARBOR_HOST</span><span style="color:#A31515;">}/report/mysql:report.2.0&quot;</span></span>
<span class="line"><span style="color:#000000;">                }</span></span>
<span class="line"><span style="color:#000000;">                </span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="脚本化流水线" tabindex="-1"><a class="header-anchor" href="#脚本化流水线"><span>脚本化流水线</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span style="color:#795E26;">node</span><span style="color:#A31515;"> {</span><span style="color:#000000;">  </span></span>
<span class="line"><span style="color:#795E26;">    stage(</span><span style="color:#795E26;">&#39;Build&#39;</span><span style="color:#000000;">) { </span></span>
<span class="line"><span style="color:#795E26;">        //</span><span style="color:#000000;"> </span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#795E26;">    stage(</span><span style="color:#795E26;">&#39;Test&#39;</span><span style="color:#000000;">) { </span></span>
<span class="line"><span style="color:#795E26;">        //</span><span style="color:#000000;"> </span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#795E26;">    stage(</span><span style="color:#795E26;">&#39;Deploy&#39;</span><span style="color:#000000;">) { </span></span>
<span class="line"><span style="color:#795E26;">        //</span><span style="color:#000000;"> </span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function u(m,b){const n=p("ExternalLinkIcon");return o(),i("div",null,[t,s("p",null,[s("a",d,[a("参考"),l(n)])]),s("p",null,[s("a",v,[a("详解"),l(n)])]),y])}const g=e(r,[["render",u],["__file","pipeline.html.vue"]]),A=JSON.parse('{"path":"/note/%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%8E%AF%E5%A2%83/pipeline.html","title":"pipeline","lang":"zh-CN","frontmatter":{"description":"pipeline 参考 详解 jenkins agent 指示 Jenkins 为整个流水线分配一个执行器（在 Jenkins 环境中的任何可用代理/节点上）和工作区 node 与上面的 agent 做了同样的事情。 声明式 在声明式流水线语法中, pipeline 块定义了整个流水线中完成的所有的工作。 agent tools The tool na...","head":[["meta",{"property":"og:url","content":"https://wherywan.github.io/note/%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%8E%AF%E5%A2%83/pipeline.html"}],["meta",{"property":"og:site_name","content":"HONG_JI"}],["meta",{"property":"og:title","content":"pipeline"}],["meta",{"property":"og:description","content":"pipeline 参考 详解 jenkins agent 指示 Jenkins 为整个流水线分配一个执行器（在 Jenkins 环境中的任何可用代理/节点上）和工作区 node 与上面的 agent 做了同样的事情。 声明式 在声明式流水线语法中, pipeline 块定义了整个流水线中完成的所有的工作。 agent tools The tool na..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-04T18:01:29.000Z"}],["meta",{"property":"article:author","content":"wanhongji"}],["meta",{"property":"article:modified_time","content":"2023-04-04T18:01:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"pipeline\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-04T18:01:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"wanhongji\\"}]}"]]},"headers":[{"level":2,"title":"jenkins","slug":"jenkins","link":"#jenkins","children":[{"level":3,"title":"声明式","slug":"声明式","link":"#声明式","children":[]},{"level":3,"title":"脚本化流水线","slug":"脚本化流水线","link":"#脚本化流水线","children":[]}]}],"git":{"createdTime":1663607975000,"updatedTime":1680631289000,"contributors":[{"name":"wanhongji","email":"wherywan@163.com","commits":5},{"name":"wanhongji","email":"wan_hongji@163.com","commits":2}]},"readingTime":{"minutes":1.28,"words":384},"filePathRelative":"note/服务器环境/pipeline.md","localizedDate":"2022年9月19日","excerpt":"\\n<p><a href=\\"https://www.jenkins.io/zh/doc/book/pipeline/syntax/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">参考</a></p>\\n<p><a href=\\"https://blog.51cto.com/vccloud/5212968\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">详解</a></p>\\n<h2>jenkins</h2>\\n<ul>\\n<li>agent 指示 Jenkins 为整个流水线分配一个执行器（在 Jenkins 环境中的任何可用代理/节点上）和工作区</li>\\n<li>node 与上面的 agent 做了同样的事情。</li>\\n</ul>","autoDesc":true}');export{g as comp,A as data};
