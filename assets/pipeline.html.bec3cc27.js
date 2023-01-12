import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as t,b as n,d as s,e as p,f as l,r as c}from"./app.6f24b29a.js";const o={},u=n("h1",{id:"pipeline",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#pipeline","aria-hidden":"true"},"#"),s(" pipeline")],-1),d={href:"https://www.jenkins.io/zh/doc/book/pipeline/syntax/",target:"_blank",rel:"noopener noreferrer"},r=l(`<h2 id="jenkins" tabindex="-1"><a class="header-anchor" href="#jenkins" aria-hidden="true">#</a> jenkins</h2><ul><li>agent \u6307\u793A Jenkins \u4E3A\u6574\u4E2A\u6D41\u6C34\u7EBF\u5206\u914D\u4E00\u4E2A\u6267\u884C\u5668\uFF08\u5728 Jenkins \u73AF\u5883\u4E2D\u7684\u4EFB\u4F55\u53EF\u7528\u4EE3\u7406/\u8282\u70B9\u4E0A\uFF09\u548C\u5DE5\u4F5C\u533A</li><li>node \u4E0E\u4E0A\u9762\u7684 agent \u505A\u4E86\u540C\u6837\u7684\u4E8B\u60C5\u3002</li></ul><h3 id="\u58F0\u660E\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u58F0\u660E\u5F0F" aria-hidden="true">#</a> \u58F0\u660E\u5F0F</h3><p>\u5728\u58F0\u660E\u5F0F\u6D41\u6C34\u7EBF\u8BED\u6CD5\u4E2D, pipeline \u5757\u5B9A\u4E49\u4E86\u6574\u4E2A\u6D41\u6C34\u7EBF\u4E2D\u5B8C\u6210\u7684\u6240\u6709\u7684\u5DE5\u4F5C\u3002</p><blockquote><p>agent</p></blockquote><blockquote><p>tools</p></blockquote><p>The tool name must be pre-configured in Jenkins under Manage Jenkins \u2192 Global Tool Configuration</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>pipeline {
    agent any
    tools {
        maven &#39;apache-maven-3.0.1&#39; 
    }
    stages {
        stage(&#39;Example&#39;) {
            steps {
                sh &#39;mvn --version&#39;
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>environment</p></blockquote><blockquote><p>parameters</p></blockquote><blockquote><p>options</p></blockquote><blockquote><p>triggers</p></blockquote><blockquote><p>dir</p></blockquote><p>\u5207\u6362\u5DE5\u4F5C\u76EE\u5F55</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pipeline <span class="token punctuation">{</span>
    agent any 
    stages <span class="token punctuation">{</span>
        stage<span class="token punctuation">(</span><span class="token string">&#39;Build&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
            steps <span class="token punctuation">{</span>
                // 
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        stage<span class="token punctuation">(</span><span class="token string">&#39;Test&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
            steps <span class="token punctuation">{</span>
                // 
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        stage<span class="token punctuation">(</span><span class="token string">&#39;Deploy&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
            steps <span class="token punctuation">{</span>
                // 
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>pipeline\u6837\u4F8B</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># linux docker hub</span>
pipeline <span class="token punctuation">{</span>
    agent any
    environment <span class="token punctuation">{</span>
        <span class="token assign-left variable">DOCKER_HUB</span><span class="token operator">=</span>credentials<span class="token punctuation">(</span><span class="token string">&quot;dockerhub&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    tools <span class="token punctuation">{</span>
        maven <span class="token string">&#39;maven-3.6.3&#39;</span>
    <span class="token punctuation">}</span>
    stages <span class="token punctuation">{</span>
        stage<span class="token punctuation">(</span><span class="token string">&#39;\u62C9\u53D6\u4EE3\u7801&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                <span class="token builtin class-name">echo</span> <span class="token string">&#39;Hello World&#39;</span>
                // \u5220\u9664\u6587\u4EF6\u5939\u6587\u4EF6\u5939\u6587\u4EF6\u5939\u6587\u5185\u5BB9
                <span class="token function">sh</span> <span class="token string">&#39;rm  -rf *&#39;</span>
                dir<span class="token punctuation">(</span><span class="token string">&quot;jimureport&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                     <span class="token function">git</span> credentialsId: <span class="token string">&#39;ewrwt345433535&#39;</span>, url: <span class="token string">&#39;https://gitee.com/wanhongji/JimuReport.git&#39;</span>
                <span class="token punctuation">}</span>
                <span class="token function">sh</span> <span class="token string">&#39;pwd&#39;</span>
                <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${workspace}</span>&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        stage<span class="token punctuation">(</span><span class="token string">&#39;\u6253\u5305&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                <span class="token function">sh</span> <span class="token string">&#39;mvn --version&#39;</span>
                <span class="token function">sh</span> <span class="token string">&#39;docker -v&#39;</span>
                dir<span class="token punctuation">(</span><span class="token string">&quot;jimureport/jimureport-example&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token function">sh</span> <span class="token string">&#39;mvn clean package&#39;</span>
                    <span class="token function">sh</span> <span class="token string">&quot;docker build -t wanhongji/mysql:report.2.0 ./db&quot;</span>
                    <span class="token function">sh</span> <span class="token string">&quot;docker build -t wanhongji/report:2.0 .&quot;</span>
                    <span class="token function">sh</span> <span class="token string">&quot;docker login -u <span class="token variable">\${DOCKER_HUB_USR}</span> -p <span class="token variable">\${DOCKER_HUB_PSW}</span>&quot;</span>
                    <span class="token function">sh</span> <span class="token string">&quot;docker push wanhongji/report:2.0&quot;</span>
                    <span class="token function">sh</span> <span class="token string">&quot;docker push wanhongji/mysql:report.2.0&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment"># mac harbor</span>

pipeline <span class="token punctuation">{</span>
    agent any
    environment <span class="token punctuation">{</span>
        <span class="token assign-left variable">HARBOR</span><span class="token operator">=</span>credentials<span class="token punctuation">(</span><span class="token string">&quot;harbor&quot;</span><span class="token punctuation">)</span>
        <span class="token assign-left variable">HARBOR_HOST</span><span class="token operator">=</span><span class="token string">&#39;192.168.3.88:8089&#39;</span>
    <span class="token punctuation">}</span>
    tools <span class="token punctuation">{</span>
        maven <span class="token string">&#39;maven3.6.3&#39;</span> 
    <span class="token punctuation">}</span>
    stages <span class="token punctuation">{</span>
        stage<span class="token punctuation">(</span><span class="token string">&#39;\u62C9\u53D6\u4EE3\u7801&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                <span class="token builtin class-name">echo</span> <span class="token string">&#39;Hello World&#39;</span>
                // \u5220\u9664\u6587\u4EF6\u5939\u6587\u4EF6\u5939\u6587\u4EF6\u5939\u6587\u5185\u5BB9
                <span class="token function">sh</span> <span class="token string">&#39;rm  -rf *&#39;</span> 
                dir<span class="token punctuation">(</span><span class="token string">&quot;jimureport&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                     <span class="token function">git</span> credentialsId: <span class="token string">&#39;5436576587&#39;</span>, url: <span class="token string">&#39;https://gitee.com/wanhongji/JimuReport.git&#39;</span>
                     <span class="token function">sh</span> <span class="token string">&#39;pwd&#39;</span>
                     <span class="token function">sh</span> <span class="token string">&#39;ls -a&#39;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        stage<span class="token punctuation">(</span><span class="token string">&quot;\u6253\u5305&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                dir<span class="token punctuation">(</span><span class="token string">&quot;jimureport/jimureport-example&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token function">sh</span> <span class="token string">&quot;sed -i &#39;s/8.0.19/latest/g&#39; ./db/Dockerfile&quot;</span>
                    <span class="token function">sh</span> <span class="token string">&#39;mvn clean package&#39;</span>
                    <span class="token function">sh</span> <span class="token string">&quot;docker build -t <span class="token variable">\${HARBOR_HOST}</span>/report/mysql:report.2.0 ./db&quot;</span>
                    <span class="token function">sh</span> <span class="token string">&quot;docker build -t <span class="token variable">\${HARBOR_HOST}</span>/report/report:2.0 .&quot;</span>
                    <span class="token function">sh</span> <span class="token string">&quot;docker login -u <span class="token variable">\${HARBOR_USR}</span> -p <span class="token variable">\${HARBOR_PSW}</span> <span class="token variable">\${HARBOR_HOST}</span>&quot;</span>
                    <span class="token function">sh</span> <span class="token string">&quot;docker push <span class="token variable">\${HARBOR_HOST}</span>/report/report:2.0&quot;</span>
                    <span class="token function">sh</span> <span class="token string">&quot;docker push <span class="token variable">\${HARBOR_HOST}</span>/report/mysql:report.2.0&quot;</span>
                <span class="token punctuation">}</span>
                
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u811A\u672C\u5316\u6D41\u6C34\u7EBF" tabindex="-1"><a class="header-anchor" href="#\u811A\u672C\u5316\u6D41\u6C34\u7EBF" aria-hidden="true">#</a> \u811A\u672C\u5316\u6D41\u6C34\u7EBF</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">node</span> <span class="token punctuation">{</span>  
    stage<span class="token punctuation">(</span><span class="token string">&#39;Build&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        // 
    <span class="token punctuation">}</span>
    stage<span class="token punctuation">(</span><span class="token string">&#39;Test&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        // 
    <span class="token punctuation">}</span>
    stage<span class="token punctuation">(</span><span class="token string">&#39;Deploy&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        // 
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function v(k,b){const a=c("ExternalLinkIcon");return i(),t("div",null,[u,n("p",null,[n("a",d,[s("\u53C2\u8003"),p(a)])]),r])}const h=e(o,[["render",v],["__file","pipeline.html.vue"]]);export{h as default};
