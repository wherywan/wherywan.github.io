import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as t,b as n,d as s,e,f as i,r as c}from"./app.6f24b29a.js";const o={},p=n("h1",{id:"docker\u5BB9\u5668\u542F\u52A8\u547D\u4EE4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker\u5BB9\u5668\u542F\u52A8\u547D\u4EE4","aria-hidden":"true"},"#"),s(" docker\u5BB9\u5668\u542F\u52A8\u547D\u4EE4")],-1),d=n("h2",{id:"gitlab",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#gitlab","aria-hidden":"true"},"#"),s(" gitlab")],-1),u={href:"https://docs.gitlab.cn/jh/install/docker.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://blog.csdn.net/qq_36719391/article/details/123816629",target:"_blank",rel:"noopener noreferrer"},m={href:"https://blog.csdn.net/Choerodon/article/details/97751754",target:"_blank",rel:"noopener noreferrer"},k=i(`<blockquote><p>\u5BC6\u7801 wanhongji/whj123456</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770Broot\u521D\u59CB\u5BC6\u7801</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> \u5BB9\u5668\u540D\u5B57\u6216\u5BB9\u5668ID <span class="token function">grep</span> <span class="token string">&#39;Password:&#39;</span> /etc/gitlab/initial_root_password
<span class="token comment"># linux</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">GITLAB_HOME</span><span class="token operator">=</span>/srv/gitlab 
<span class="token comment"># mac </span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">GITLAB_HOME</span><span class="token operator">=</span><span class="token environment constant">$HOME</span>/gitlab

<span class="token comment"># \u793E\u533A</span>
<span class="token function">docker</span> run <span class="token parameter variable">--detach</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--publish</span> <span class="token number">443</span>:443 <span class="token parameter variable">--publish</span> <span class="token number">8087</span>:80 <span class="token parameter variable">--publish</span> <span class="token number">22</span>:22 <span class="token punctuation">\\</span>
  <span class="token parameter variable">--name</span> gitlab <span class="token punctuation">\\</span>
  <span class="token parameter variable">--restart</span> always <span class="token punctuation">\\</span>
  <span class="token parameter variable">--volume</span> <span class="token variable">$GITLAB_HOME</span>/config:/etc/gitlab <span class="token punctuation">\\</span>
  <span class="token parameter variable">--volume</span> <span class="token variable">$GITLAB_HOME</span>/logs:/var/log/gitlab <span class="token punctuation">\\</span>
  <span class="token parameter variable">--volume</span> <span class="token variable">$GITLAB_HOME</span>/data:/var/opt/gitlab <span class="token punctuation">\\</span>
  --shm-size 256m <span class="token punctuation">\\</span>
  gitlab/gitlab-ce:latest
<span class="token comment"># \u5B98\u65B9</span>
<span class="token function">docker</span> run <span class="token parameter variable">--detach</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--publish</span> <span class="token number">443</span>:443 <span class="token parameter variable">--publish</span> <span class="token number">80</span>:80 <span class="token parameter variable">--publish</span> <span class="token number">22</span>:22 <span class="token punctuation">\\</span>
  <span class="token parameter variable">--name</span> gitlab <span class="token punctuation">\\</span>
  <span class="token parameter variable">--restart</span> always <span class="token punctuation">\\</span>
  <span class="token parameter variable">--volume</span> <span class="token variable">$GITLAB_HOME</span>/config:/etc/gitlab <span class="token punctuation">\\</span>
  <span class="token parameter variable">--volume</span> <span class="token variable">$GITLAB_HOME</span>/logs:/var/log/gitlab <span class="token punctuation">\\</span>
  <span class="token parameter variable">--volume</span> <span class="token variable">$GITLAB_HOME</span>/data:/var/opt/gitlab <span class="token punctuation">\\</span>
  --shm-size 256m <span class="token punctuation">\\</span>
  registry.gitlab.cn/omnibus/gitlab-jh:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="gitlab-runner" tabindex="-1"><a class="header-anchor" href="#gitlab-runner" aria-hidden="true">#</a> gitlab runner</h3><blockquote><p>\u5D4C\u5957\u903B\u8F91</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u975E\u5BB9\u5668\u5B89\u88C5runner\uFF0C\u53EF\u76F4\u63A5\u4F7F\u7528docker.sock,\u5B89\u88C5\u5BB9\u5668

\u5BB9\u5668\u5B89\u88C5\u9700\u6302\u8F7D\u8FDB\u6765docker.sock\uFF0C\u5B89\u88C5\u542F\u7528\u5BB9\u5668\uFF08\u5BB9\u5668\u5185\u90E8\u53C8\u8981\u4F7F\u7528docker.sock,\u6302\u8F7D\u8FDB\uFF0C\u4E0D\u6302\u8F7D\u5C31\u9700\u5B89\u88C5docker in docker\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),b={href:"https://blog.csdn.net/u011933777/article/details/107561090",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.cnblogs.com/xxred/p/11548254.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://docs.gitlab.com/ee/ci/docker/using_docker_build.html",target:"_blank",rel:"noopener noreferrer"},_={href:"https://blog.csdn.net/windy135/article/details/103885052",target:"_blank",rel:"noopener noreferrer"},y={href:"https://blog.csdn.net/clover661/article/details/123330947",target:"_blank",rel:"noopener noreferrer"},q=i(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> gitlab-runner <span class="token parameter variable">--restart</span> always <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /var/run/docker.sock:/var/run/docker.sock <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> <span class="token variable">$GITLAB_HOME</span>/gitlab-runner/config:/etc/gitlab-runner <span class="token punctuation">\\</span>
  gitlab/gitlab-runner:latest
  
<span class="token comment"># \u6CE8\u518C </span>
<span class="token comment"># \u6CE8\u518C\u65F6\u914D\u7F6E\u9ED8\u8BA4\u955C\u50CF\uFF0C\u53EF\u5728yml\u6587\u4EF6\u914D\u7F6E\u65B0\u7684\u955C\u50CF</span>
<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> gitlab-runner gitlab-ci-multi-runner register
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="harbor" tabindex="-1"><a class="header-anchor" href="#harbor" aria-hidden="true">#</a> harbor</h2>`,2),f={href:"https://www.cnblogs.com/andyxie/p/16531567.html",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/goharbor/harbor/releases",target:"_blank",rel:"noopener noreferrer"},j=i(`<blockquote><p>\u5BC6\u7801 Harbor12345</p></blockquote><p>\u4F7F\u7528\u8D85\u7EA7\u7BA1\u7406\u5458\u6267\u884Csudo</p><p>\u63A8\u9001\u65F6\u9700\u767B\u5F55 docker login -u root -p passwd \u5730\u5740</p><blockquote><p>\u6B65\u9AA4</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-zxvf</span>  harbor-offline-installer-v2.5.1.tgz

<span class="token function">cp</span> harbor.yml.tmpl harbor.yml

<span class="token comment"># \u66F4\u6539hostname \u6CE8\u91CA\u6389https \u8981\u4E0D\u7136\u5B89\u88C5\u62A5\u9519 \u4FEE\u6539\u6587\u4EF6\u4F4D\u7F6E</span>

<span class="token function">sudo</span> ./install.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>docker \u914D\u7F6E</p></blockquote><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;insecure-registries&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;192.168.3.88:8089&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jenkins" tabindex="-1"><a class="header-anchor" href="#jenkins" aria-hidden="true">#</a> jenkins</h2>`,8),S={href:"https://www.reinforce.cn/t/658.html",target:"_blank",rel:"noopener noreferrer"},E=i(`<blockquote><p>\u914D\u7F6Egit</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8FDB\u5165\u5BB9\u5668\u6267\u884C</span>
ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;git\u90AE\u7BB1&quot;</span>
<span class="token comment"># -t \u4F7F\u7528\u7684\u7B97\u6CD5</span>
<span class="token comment"># -C commit\u8BB0\u5F55\uFF0C\u6807\u8BC6</span>
<span class="token comment"># \u914D\u7F6EGitHub\u516C\u94A5</span>
<span class="token comment"># \u914D\u7F6Ejenkins\u51ED\u636E\uFF0C\u8BBE\u7F6E\u7528\u6237\u540D\uFF08\u8BBE\u7F6E\u90AE\u7BB1\u540D\uFF09\u548C\u79C1\u94A5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>maven\u3001gradle\u914D\u7F6E</p></blockquote><ul><li>\u53EF\u901A\u8FC7\u6302\u8F7D\u5BBF\u4E3B\u673Amaven\u6216gradle\u7684\u76EE\u5F55\u5230jenkins,\u5728jenkins\u914D\u7F6Emaven\u3001gradle</li><li>\u53EF\u4F7F\u7528 .gradlew clean bootJar \u6765\u6784\u5EFA\uFF0C\u5373gradle\u7684\u5305\u88C5\uFF0C\u53EF\u81EA\u52A8\u4E0B\u8F7Dgradle,jenkins\u4E2D\u6709\u6743\u9650\u95EE\u9898\uFF0C\u6682\u672A\u89E3\u51B3</li><li>\u4E5F\u53EF\u76F4\u63A5\u914D\u7F6E\u81EA\u52A8\u5B89\u88C5,\u5728\u4F7F\u7528\u65F6\u624B\u52A8\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\uFF0C\u800C\u4E0D\u662F\u4F7F\u7528tools\u5904\u7406</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/var/jenkins_home/tools/hudson.model.JDK/jdk8
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/bin:<span class="token environment constant">$PATH</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">MAVEN_HOME</span><span class="token operator">=</span>/var/jenkins_home/tools/hudson.tasks.Maven_MavenInstallation/maven
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$MAVEN_HOME</span>/bin:<span class="token environment constant">$PATH</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u65F6\u533A\u95EE\u9898</p></blockquote><p>scriptConsole\u52A0\u4EE5\u4E0B\u811A\u672C System.setProperty(&#39;org.apache.commons.jelly.tags.fmt.timeZone&#39;, &#39;Asia/Shanghai&#39;)</p><blockquote><p>docker in docker\u95EE\u9898</p></blockquote><ul><li>\u548C\u5BBF\u4E3B\u673A\u5171\u7528docker</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-v /var/run/docker.sock:/var/run/docker.sock \u548C\u5BBF\u4E3B\u516C\u7528\u4E00\u4E2Adocker\u7684\u65B9\u5F0F\u542F\u52A8

chmod 777 /var/run/docker.sock \u5C06\u6743\u9650\u8D4B\u7ED9\u6240\u6709\u7528\u6237

\u5728jenkins\u5355\u8282\u70B9\u4E0A\u6620\u5C04\u5BBF\u4E3B\u673A\u7684docker.sock\u548C\u5BA2\u6237\u7AEF\u547D\u4EE4  
-v /var/run/docker.sock:/var/run/docker.sock \\
-v /usr/local/bin/docker:/usr/bin/docker \\


docker run -d \\
-u root \\
--name jenkins \\
--privileged=true \\
--restart=always \\
-p 8080:8080 \\
-p 50000:50000 \\
-v jenkins-data:/var/jenkins_home \\
-v /var/run/docker.sock:/var/run/docker.sock \\
-v /usr/local/bin/docker:/usr/bin/docker \\
jenkins/jenkins:lts-jdk11

  
docker run \\
  -u root \\
  --rm \\
  -d \\
  -p 8080:8080 \\
  -p 50000:50000 \\
  --name jenkins \\
  -v jenkins-data:/var/jenkins_home:rw \\
  -v /var/run/docker.sock:/var/run/docker.sock:rw \\
  -v /usr/local/bin/docker:/usr/bin/docker:rw \\
  jenkins/jenkins:lts-jdk11



/usr/local/bin/docker

-v /var/run/docker.sock:/var/run/docker.sock \\
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4F7F\u7528docker dind</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker run --name jenkins-docker --rm --detach \\
  --privileged --network jenkins --network-alias docker \\
  --env DOCKER_TLS_CERTDIR=/certs \\
  --volume jenkins-docker-certs:/certs/client \\
  --volume jenkins-data:/var/jenkins_home \\
  --publish 3000:3000 --publish 2376:2376 \\
  docker:dind --storage-driver overlay2
  
    //Dockerfile
    FROM jenkins/jenkins:lts-jdk11
    USER root
    RUN apt-get update &amp;&amp; apt-get install -y lsb-release
    RUN curl -fsSLo /usr/share/keyrings/docker-archive-keyring.asc \\
      https://download.docker.com/linux/debian/gpg
    RUN echo &quot;deb [arch=$(dpkg --print-architecture) \\
      signed-by=/usr/share/keyrings/docker-archive-keyring.asc] \\
      https://download.docker.com/linux/debian \\
      $(lsb_release -cs) stable&quot; &gt; /etc/apt/sources.list.d/docker.list
    RUN apt-get update &amp;&amp; apt-get install -y docker-ce-cli
    USER jenkins
    RUN jenkins-plugin-cli --plugins &quot;blueocean:1.25.6 docker-workflow:1.29&quot;
    
    //\u6784\u5EFA\u81EA\u5B9A\u4E49\u955C\u50CF
    docker build -t myjenkins-blueocean:lts .
  
    --volume &quot;$HOME&quot;:/home \\
    --env JAVA_OPTS=&quot;-Dhudson.plugins.git.GitSCM.ALLOW_LOCAL_CHECKOUT=true&quot; \\
    --restart=on-failure \\
    
  docker run --name jenkins --detach \\
  --network jenkins --env DOCKER_HOST=tcp://docker:2376 \\
  --env DOCKER_CERT_PATH=/certs/client --env DOCKER_TLS_VERIFY=1 \\
  --publish 8080:8080 --publish 50000:50000 \\
  --volume jenkins-data:/var/jenkins_home \\
  --volume jenkins-docker-certs:/certs/client:ro \\
  --volume &quot;$HOME&quot;:/home \\
  --env JAVA_OPTS=&quot;-Dhudson.plugins.git.GitSCM.ALLOW_LOCAL_CHECKOUT=true&quot; \\
  --restart=on-failure \\
  jenkins/jenkins:lts-jdk11
  
  // mac
  docker run --name jenkins-docker --rm -d --privileged --network jenkins --network-alias docker -e DOCKER_TLS_CERTDIR=/certs -v /Users/wanhongji/data/jenkins-docker-certs:/certs/client -v /Users/wanhongji/data/jenkins_home:/var/jenkins_home  -p 2376:2376 docker:dind --storage-driver overlay2
  docker run --name jenkins -d --network jenkins -e DOCKER_HOST=tcp://docker:2376  -e DOCKER_CERT_PATH=/certs/client -e DOCKER_TLS_VERIFY=1 -v /Users/wanhongji/data/jenkins_home:/var/jenkins_home -v /Users/wanhongji/data/jenkins-docker-certs:/certs/client:ro -p 8080:8080 -p 50000:50000 jenkins/jenkins:lts-jdk11
  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span> <span class="token number">8080</span>:8080 <span class="token parameter variable">--name</span> jenkins <span class="token parameter variable">-v</span> /mydata/jenkins-data:/var/jenkins_home <span class="token parameter variable">-v</span> /var/run/docker.sock:/var/run/docker.sock  jenkinsci/blueocean

<span class="token comment">## mac</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> jenkins <span class="token parameter variable">-v</span> /Users/wanhongji/data/jenkins_home:/var/jenkins_home <span class="token parameter variable">-p</span> <span class="token number">8080</span>:8080 <span class="token parameter variable">-p</span> <span class="token number">50000</span>:50000  jenkins/jenkins

<span class="token parameter variable">-v</span> /etc/localtime:/etc/localtime   \u8BA9\u5BB9\u5668\u4F7F\u7528\u548C\u670D\u52A1\u5668\u540C\u6837\u7684\u65F6\u95F4\u8BBE\u7F6E

<span class="token parameter variable">-v</span> /var/run/docker.sock:/var/run/docker.sock \u548C\u5BBF\u4E3B\u516C\u7528\u4E00\u4E2Adocker\u7684\u65B9\u5F0F\u542F\u52A8

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="minio" tabindex="-1"><a class="header-anchor" href="#minio" aria-hidden="true">#</a> minio</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">9000</span>:9000 <span class="token parameter variable">-p</span> <span class="token number">9001</span>:9001 <span class="token parameter variable">--name</span> minio1 <span class="token parameter variable">-v</span> D:<span class="token punctuation">\\</span>volume<span class="token punctuation">\\</span>minio<span class="token punctuation">\\</span>data:/data <span class="token parameter variable">-e</span> <span class="token string">&quot;MINIO_ROOT_USER=minio-admin&quot;</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;MINIO_ROOT_PASSWORD=minio-admin&quot;</span> quay.io/minio/minio server /data --console-address <span class="token string">&quot;:9001&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nacos" tabindex="-1"><a class="header-anchor" href="#nacos" aria-hidden="true">#</a> nacos</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">--name</span> nacos-quick <span class="token parameter variable">-e</span> <span class="token assign-left variable">MODE</span><span class="token operator">=</span>standalone <span class="token parameter variable">-p</span> <span class="token number">8848</span>:8848 <span class="token parameter variable">-p</span> <span class="token number">9848</span>:9848 <span class="token parameter variable">-d</span> nacos/nacos-server:latest
<span class="token function">docker</span> run <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">--name</span> nacos-quick <span class="token parameter variable">-e</span> <span class="token assign-left variable">MODE</span><span class="token operator">=</span>standalone <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_SERVICE_HOST</span><span class="token operator">=</span><span class="token number">192.168</span>.3.90 <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_SERVICE_DB_NAME</span><span class="token operator">=</span>nacos <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_SERVICE_USER</span><span class="token operator">=</span>root <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_SERVICE_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> <span class="token parameter variable">-e</span> <span class="token assign-left variable">SPRING_DATASOURCE_PLATFORM</span><span class="token operator">=</span>mysql  <span class="token parameter variable">-p</span> <span class="token number">8848</span>:8848 <span class="token parameter variable">-p</span> <span class="token number">9848</span>:9848 <span class="token parameter variable">-d</span> wanhongji/nacos:v2.1.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="seata" tabindex="-1"><a class="header-anchor" href="#seata" aria-hidden="true">#</a> seata</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> seata <span class="token parameter variable">-p</span> <span class="token number">8091</span>:8091 <span class="token parameter variable">-e</span> <span class="token assign-left variable">SEATA_IP</span><span class="token operator">=</span><span class="token number">172.172</span>.172.21 <span class="token parameter variable">-e</span> <span class="token assign-left variable">SEATA_CONFIG_NAME</span><span class="token operator">=</span>file:/seata-server/resources/registry  <span class="token parameter variable">-v</span> /Users/dzl/opt/seata-config/resources:/seata-server/resources seataio/seata-server:1.4.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> redis</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">--name</span> redis <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">6379</span>:6379 redis <span class="token parameter variable">--requirepass</span> <span class="token number">123456</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="rocketmq\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#rocketmq\u914D\u7F6E" aria-hidden="true">#</a> rocketMq\u914D\u7F6E</h2><ul><li>\u670D\u52A1</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> rocketmq <span class="token parameter variable">-p</span> <span class="token number">9876</span>:9876  foxiswho/rocketmq:server

<span class="token function">docker</span> run <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">10911</span>:10911 <span class="token parameter variable">-p</span> <span class="token number">10909</span>:10909 <span class="token parameter variable">-v</span>  /Users/dzl/opt/broker.conf:/etc/rocketmq/broker.conf <span class="token parameter variable">--name</span> rmqbroker <span class="token parameter variable">--link</span> rocketmq:namesrv <span class="token parameter variable">-e</span> <span class="token string">&quot;NAMESRV_ADDR=namesrv:9876&quot;</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;JAVA_OPTS=-Duser.home=/opt&quot;</span>  <span class="token parameter variable">-e</span> <span class="token string">&quot;JAVA_OPT_EXT=-server -Xms512m -Xmx512m -Xmn256m&quot;</span>  foxiswho/rocketmq:broker

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>broker.conf</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>brokerClusterName = DefaultCluster
brokerName = broker-a
brokerId = 0
deleteWhen = 04
fileReservedTime = 48
brokerRole = ASYNC_MASTER
flushDiskType = ASYNC_FLUSH
sendMessageThreadPoolNums=64
useReentrantLockWhenPutMessage=true
waitTimeMillsInSendQueue=30000
osPageCacheBusyTimeOutMills=5000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u56FE\u5F62\u754C\u9762</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> rcng <span class="token parameter variable">--link</span> rocketmq:namesrv <span class="token parameter variable">-e</span> <span class="token string">&quot;JAVA_OPTS=-Drocketmq.namesrv.addr=namesrv:9876 -Dcom.rocketmq.sendMessageWithVIPChannel=false&quot;</span> <span class="token parameter variable">-p</span> <span class="token number">8099</span>:8080 <span class="token parameter variable">-t</span> styletang/rocketmq-console-ng
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u914D\u7F6Eidea jvm\u53C2\u6570 -Dcom.rocketmq.sendMessageWithVIPChannel=false

\u672C\u5730\u5F00\u53D1\u82E5\u51FA\u73B0 172.17.0.xxx:10911\u53D1\u9001\u6D88\u606F\u5931\u8D25 \u5219\u4FEE\u6539brokerIP1
\u672C\u5730\u5F00\u53D1\u82E5\u51FA\u73B0 no route xxx \u5219\u4FEE\u6539autoCreateTopicEnable=true
docker exec -it xxx(\u5BB9\u5668id) bash
cd /etc/rocketmq/
echo &#39;autoCreateTopicEnable=true&#39; &gt;&gt; broker.conf
echo &#39;brokerIP1 = 172.172.172.98&#39; &gt;&gt; broker.conf
exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="elasticsearch\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#elasticsearch\u914D\u7F6E" aria-hidden="true">#</a> elasticsearch\u914D\u7F6E</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u542F\u52A8\u547D\u4EE4\u4E2D\u6709\u5185\u7F51IP\u81EA\u884C\u4FEE\u6539
docker run -d --restart=always --name es -p 9200:9200 -e http.port=9200 -e http.cors.enabled=true -e http.cors.allow-origin=http://localhost:1358,http://127.0.0.1:1358,http://172.172.172.212:1358 -e http.cors.allow-headers=X-Requested-With,X-Auth-Token,Content-Type,Content-Length,Authorization -e http.cors.allow-credentials=true -e TZ=&quot;Asia/Shanghai&quot; -e &quot;discovery.type=single-node&quot; registry.cn-hangzhou.aliyuncs.com/hrsoft/elasticsearch:6.7.2

-- \u641C\u7D22\u5F15\u64CE\u6570\u636E\u67E5\u8BE2\u5DE5\u5177 dejavu
docker run --restart=always -p 1358:1358 -d appbaseio/dejavu

-- \u641C\u7D22\u5F15\u64CE\u7BA1\u7406\u5DE5\u5177 cerebro
docker run -d -p 9000:9000 --restart=unless-stopped --name cerebro lmenezes/cerebro

-Djava.security.egd=file:/dev/./urandom
-Xmx1G -Xms1G -XX:+PrintGCDetails
-XX:+PrintGCTimeStamps -XX:+PrintGCDateStamps
-XX:+PrintTenuringDistribution
-DNACOS_HOST=127.0.0.1
-DMYSQL_HOST=172.172.172.xxx
-DMYSQL_PORT=3306
-DMYSQL_PASSWORD=123456
-DMONITOR_HOST=127.0.0.1
-Dspring.cloud.nacos.discovery.metadata.region=dzl
\u672C\u5730\u5F00\u53D1\uFF0C\u82E5\u51FA\u73B0connect time out xx.xx.xx.xx(docker \u865A\u62DF\u673AIP)\uFF1A8511 \u5373\u6CE8\u518C\u670D\u52A1\u7684\u65F6\u5019IP\u9519\u4F4D\uFF0C\u9700\u8981\u6CE8\u518C\u81EA\u5DF1\u672C\u5730\u4F7F\u7528\u7684\u7F51\u7EDCIP
-Dspring.cloud.inetutils.preferredNetworks=172.172
Operating Platform Managent System
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cerebro" tabindex="-1"><a class="header-anchor" href="#cerebro" aria-hidden="true">#</a> cerebro</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> cerebro <span class="token parameter variable">--restart</span> always <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">9001</span>:9000 lmenezes/cerebro:0.9.4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="es\u548Ckibana" tabindex="-1"><a class="header-anchor" href="#es\u548Ckibana" aria-hidden="true">#</a> es\u548Ckibana</h2><p>8.0\u7248\u672C\u9ED8\u8BA4\u5F00\u542Fsecurity\uFF0C\u914D\u7F6E\u7E41\u7410</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># \u4EE5\u4E0B\u955C\u50CF\u652F\u6301arm64\u7248\u672C</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;2&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> redis<span class="token punctuation">:</span>alpine
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> jetlinks<span class="token punctuation">-</span>ce<span class="token punctuation">-</span>redis
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;6379:6379&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;redis-volume:/data&quot;</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> redis<span class="token punctuation">-</span>server <span class="token punctuation">-</span><span class="token punctuation">-</span>appendonly yes
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> TZ=Asia/Shanghai
  <span class="token key atrule">elasticsearch</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> elasticsearch<span class="token punctuation">:</span>7.17.7
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> jetlinks<span class="token punctuation">-</span>ce<span class="token punctuation">-</span>elasticsearch
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">ES_JAVA_OPTS</span><span class="token punctuation">:</span> <span class="token punctuation">-</span>Djava.net.preferIPv4Stack=true <span class="token punctuation">-</span>Xms512m <span class="token punctuation">-</span>Xmx512m
      <span class="token key atrule">transport.host</span><span class="token punctuation">:</span> 0.0.0.0
      <span class="token key atrule">discovery.type</span><span class="token punctuation">:</span> single<span class="token punctuation">-</span>node
      <span class="token key atrule">bootstrap.memory_lock</span><span class="token punctuation">:</span> <span class="token string">&quot;true&quot;</span>
      <span class="token key atrule">discovery.seed_hosts</span><span class="token punctuation">:</span> elasticsearch
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;9200:9200&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;9300:9300&quot;</span>
  <span class="token key atrule">kibana</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> kibana<span class="token punctuation">:</span>7.17.7
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> jetlinks<span class="token punctuation">-</span>ce<span class="token punctuation">-</span>kibana
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">ELASTICSEARCH_URL</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//elasticsearch<span class="token punctuation">:</span><span class="token number">9200</span>
    <span class="token key atrule">links</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> elasticsearch<span class="token punctuation">:</span>elasticsearch
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;5601:5601&quot;</span>
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> elasticsearch
  <span class="token key atrule">postgres</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> postgres<span class="token punctuation">:</span>alpine
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> jetlinks<span class="token punctuation">-</span>ce<span class="token punctuation">-</span>postgres
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;5432:5432&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;postgres-volume:/var/lib/postgresql/data&quot;</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">POSTGRES_PASSWORD</span><span class="token punctuation">:</span> jetlinks
      <span class="token key atrule">POSTGRES_DB</span><span class="token punctuation">:</span> jetlinks
      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> Asia/Shanghai
<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">postgres-volume</span><span class="token punctuation">:</span>
  <span class="token key atrule">redis-volume</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> mysql</h2><ul><li>5.7\u52A0\u5BC6\u65B9\u5F0Fmysql_native_password \u52A0\u5BC6\u63D2\u4EF6</li><li>8.0\u4EE5\u4E0A\u7248\u672C\u4F7F\u7528\u53E6\u4E00\u79CD\u52A0\u5BC6\u65B9\u5F0Fcaching_sha2_password</li><li>8\u4EE5\u540E\u4F7F\u7528\u5916\u90E8\u6302\u8F7D\u5FC5\u987B\u914D\u7F6Emysql-files\u6302\u8F7D -v /mydata/mysql/mysql-files:/var/lib/mysql-files/</li></ul><div class="language-console ext-console line-numbers-mode"><pre class="language-console"><code>docker run -p 3306:3306 --name mysql-8.0.20 -v /mydata/mysql/mysql-files:/var/lib/mysql-files/ -v /mydata/mysql/data:/var/lib/mysql -v /mydata/mysql/conf:/etc/mysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql:8.0.20

docker run -p 3306:3306 --name mysql-5.7  -v /mydata/mysql/data:/var/lib/mysql -v /mydata/mysql/conf:/etc/mysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7

docker run --restart=always -v /data/mysql/conf:/etc/mysql/conf.d -v /data/mysql/data:/var/lib/mysql --name mysql -e MYSQL_ROOT_PASSWORD=123456 -p 3306:3306 -d mysql:latest
select host,user,plugin from user;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="access-denied" tabindex="-1"><a class="header-anchor" href="#access-denied" aria-hidden="true">#</a> access denied</h3><blockquote><p>\u65B9\u68481</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5BB9\u5668\u542F\u52A8\u6DFB\u52A0\u914D\u7F6E</span>
<span class="token comment"># --default-authentication-plugin=mysql_native_password</span>
<span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token parameter variable">--name</span> mysql-8.0.20 <span class="token parameter variable">-v</span> /mydata/mysql/mysql-files:/var/lib/mysql-files/ <span class="token parameter variable">-v</span> /mydata/mysql/data:/var/lib/mysql <span class="token parameter variable">-v</span> /mydata/mysql/conf:/etc/mysql <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> <span class="token parameter variable">-d</span> mysql:8.0.20

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u65B9\u68482</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u4E0D\u8BBE\u5BC6\u7801\u767B\u5F55</span>
<span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token parameter variable">--name</span> mysql-8.0.20 <span class="token parameter variable">-v</span> /mydata/mysql/mysql-files:/var/lib/mysql-files/ <span class="token parameter variable">-v</span> /mydata/mysql/data:/var/lib/mysql <span class="token parameter variable">-v</span> /mydata/mysql/conf:/etc/mysql <span class="token parameter variable">-d</span> mysql:8.0.20 --default-authentication-plugin<span class="token operator">=</span>mysql_native_password
 
<span class="token comment">#\u5207\u6362\u6570\u636E\u5E93</span>
use mysql<span class="token punctuation">;</span>

<span class="token comment">#\u8BBE\u7F6E\u5BC6\u7801</span>
<span class="token comment">#PASSWORD EXPIRE NEVER \u5BC6\u7801\u6C38\u4E0D\u8FC7\u671F</span>
<span class="token comment">#mysql_native_password \u52A0\u5BC6\u63D2\u4EF6</span>
ALTER <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> IDENTIFIED WITH mysql_native_password BY <span class="token string">&#39;123456&#39;</span> PASSWORD EXPIRE NEVER<span class="token punctuation">;</span>

ALTER <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> IDENTIFIED WITH mysql_native_password BY <span class="token string">&#39;123456&#39;</span><span class="token punctuation">;</span>
ALTER <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;%&#39;</span> IDENTIFIED WITH mysql_native_password BY <span class="token string">&#39;123456&#39;</span><span class="token punctuation">;</span>

\u5237\u65B0\u6743\u9650
flush privileges
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u65B9\u68483</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4F7F\u7528\u914D\u7F6E\u6587\u4EF6\u8DF3\u8FC7\u68C0\u67E5
mysql8\u4E4B\u524D\u7684\u662F\u5728my.ini\u6587\u4EF6\u4E2D\u3010mysqld\u3011\u4E2D\u52A0\u4E00\u53E5\u7684 mysql8\u7684\u8BDD\u662F\uFF1A\u5728\u7BA1\u7406\u5458\u6253\u5F00\u7684cmd
\u8FDB\u5165\u5230mysql\u7684bin\u76EE\u5F55\u4E0B\u8F93\u5165
mysqld --console --skip-grant-tables --shared-memory


\u518D\u8BBE\u7F6E\u52A0\u5BC6\u65B9\u5F0F\u548C\u5BC6\u7801
#my.cnf\u6587\u4EF6\u7684\u5B58\u653E\u8DEF\u5F84\u6839\u636E\u81EA\u5DF1\u9700\u6C42\u81EA\u5B9A\u4E49\u5373\u53EF
vim /root/data/mysql/my.cnf

#\u7F16\u8F91\u5185\u5BB9 \u5728vi\u7F16\u8F91\u5668\u4E2D\u8F93\u5165\u4EE5\u4E0B\u5185\u5BB9
[mysqld]
default_authentication_plugin=mysql_native_password

#\u4FDD\u5B58\u5E76\u9000\u51FAvi\u7F16\u8F91\u5668 \u5982\u4F55\u4F7F\u7528vi\u7F16\u8F91\u5668\u8BF7\u81EA\u884C\u767E\u5EA6 \u8FD9\u91CC\u4E0D\u518D\u8D58\u8FF0



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,46);function O(T,A){const a=c("ExternalLinkIcon");return r(),t("div",null,[p,d,n("p",null,[n("a",u,[s("\u5B89\u88C5\u914D\u7F6E"),e(a)])]),n("p",null,[n("a",v,[s("\u5B89\u88C5\u53C2\u8003"),e(a)])]),n("p",null,[n("a",m,[s("\u914D\u7F6E\u6587\u4EF6\u53C2\u8003"),e(a)])]),k,n("p",null,[n("a",b,[s("\u5171\u4EABrunner\u914D\u7F6E"),e(a)])]),n("p",null,[n("a",h,[s("runner"),e(a)])]),n("p",null,[n("a",g,[s("\u53C2\u8003"),e(a)])]),n("p",null,[n("a",_,[s("\u53C2\u8003"),e(a)])]),n("p",null,[n("a",y,[s("\u53C2\u8003"),e(a)])]),q,n("p",null,[n("a",f,[s("\u5B89\u88C5"),e(a)])]),n("p",null,[n("a",x,[s("\u4E0B\u8F7D"),e(a)])]),j,n("p",null,[n("a",S,[s("\u5B89\u88C5\u914D\u7F6E"),e(a)])]),E])}const D=l(o,[["render",O],["__file","docker\u5BB9\u5668\u542F\u52A8\u547D\u4EE4.html.vue"]]);export{D as default};
