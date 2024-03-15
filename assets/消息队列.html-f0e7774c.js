import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as n,f as l}from"./app-f83986bb.js";const e={},p=l(`<h1 id="消息队列" tabindex="-1"><a class="header-anchor" href="#消息队列" aria-hidden="true">#</a> 消息队列</h1><h2 id="需求" tabindex="-1"><a class="header-anchor" href="#需求" aria-hidden="true">#</a> 需求</h2><ol><li>实现一个可供客户端订阅消息的消息队列服务器broker</li><li>协议选择： amqp或mqtt</li><li>是否落盘，提供持久化能力</li><li>是否提供消息最大保存时间设置</li><li>认证模块的实现</li><li>用户及队列信息的维护</li><li>如何处理客户端的连接、订阅、消息分配</li><li>消息消费位点如何处理</li></ol><h2 id="方案" tabindex="-1"><a class="header-anchor" href="#方案" aria-hidden="true">#</a> 方案</h2><h3 id="基于rabbitmq进行改造" tabindex="-1"><a class="header-anchor" href="#基于rabbitmq进行改造" aria-hidden="true">#</a> 基于rabbitmq进行改造</h3><ul><li>使用rabbitmq-auth-backend-http插件</li><li>rabbit-mqtt插件</li><li>rabbitmq_amqp1_0插件</li></ul><h4 id="rabbitmq配置步骤" tabindex="-1"><a class="header-anchor" href="#rabbitmq配置步骤" aria-hidden="true">#</a> rabbitmq配置步骤</h4><blockquote><p>常用命令</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#008000;"># 列出插件列表</span></span>
<span class="line"><span style="color:#795E26;">rabbitmq-pluins</span><span style="color:#000000;"> </span><span style="color:#A31515;">list</span></span>
<span class="line"><span style="color:#008000;"># 启用插件</span></span>
<span class="line"><span style="color:#795E26;">rabbitmq-plugins</span><span style="color:#000000;"> </span><span style="color:#A31515;">enable</span><span style="color:#000000;"> </span><span style="color:#A31515;">rabbitmq_auth_backend_http</span></span>
<span class="line"><span style="color:#795E26;">rabbitmq-plugins</span><span style="color:#000000;"> </span><span style="color:#A31515;">enable</span><span style="color:#000000;"> </span><span style="color:#A31515;">rabbitmq_auth_backend_cache</span></span>
<span class="line"><span style="color:#008000;"># 查看环境参数</span></span>
<span class="line"><span style="color:#795E26;">rabbitmqctl</span><span style="color:#000000;"> </span><span style="color:#A31515;">environment</span></span>
<span class="line"><span style="color:#008000;"># 配置参数</span></span>
<span class="line"><span style="color:#795E26;">vi</span><span style="color:#000000;"> </span><span style="color:#A31515;">/etc/rabbitmq/rabbitmq.conf</span></span>
<span class="line"><span style="color:#008000;"># 重启</span></span>
<span class="line"><span style="color:#795E26;">service</span><span style="color:#000000;"> </span><span style="color:#A31515;">rabbitmq-server</span><span style="color:#000000;"> </span><span style="color:#A31515;">restart</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>配置http插件</p></blockquote><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#008000;"># 1、2表示认证顺序</span></span>
<span class="line"><span style="color:#0000FF;">auth_backends.1</span><span style="color:#000000;"> = cache</span></span>
<span class="line"><span style="color:#0000FF;">auth_cache.cached_backend</span><span style="color:#000000;"> = http</span></span>
<span class="line"><span style="color:#0000FF;">auth_backends.2</span><span style="color:#000000;"> = internal</span></span>
<span class="line"><span style="color:#008000;"># auth_backends.2 = http</span></span>
<span class="line"><span style="color:#0000FF;">auth_http.http_method</span><span style="color:#000000;">   = post</span></span>
<span class="line"><span style="color:#0000FF;">auth_http.user_path</span><span style="color:#000000;">     = http://some-server/auth/user</span></span>
<span class="line"><span style="color:#0000FF;">auth_http.vhost_path</span><span style="color:#000000;">    = http://some-server/auth/vhost</span></span>
<span class="line"><span style="color:#0000FF;">auth_http.resource_path</span><span style="color:#000000;"> = http://some-server/auth/resource</span></span>
<span class="line"><span style="color:#0000FF;">auth_http.topic_path</span><span style="color:#000000;">    = http://some-server/auth/topic</span></span>
<span class="line"><span style="color:#0000FF;">auth_cache.cache_ttl</span><span style="color:#000000;"> = 5000</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="rabbitmq-conf" tabindex="-1"><a class="header-anchor" href="#rabbitmq-conf" aria-hidden="true">#</a> rabbitmq.conf</h4><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#008000;">#loopback_users.guest = false</span></span>
<span class="line"><span style="color:#008000;">#listeners.tcp.default = 5672</span></span>
<span class="line"><span style="color:#008000;">#default_pass = 123456</span></span>
<span class="line"><span style="color:#008000;">#default_user = admin</span></span>
<span class="line"><span style="color:#008000;">#management.listener.port = 15672</span></span>
<span class="line"><span style="color:#008000;">#management.listener.ssl = false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#008000;">#auth_backends.1 = cache</span></span>
<span class="line"><span style="color:#008000;"># 启用 cache 后，不需要直接指定 http 方式</span></span>
<span class="line"><span style="color:#0000FF;">auth_backends.1</span><span style="color:#000000;"> = http</span></span>
<span class="line"><span style="color:#0000FF;">auth_backends.2</span><span style="color:#000000;"> = internal</span></span>
<span class="line"><span style="color:#008000;"># 缓存后端指定为 http</span></span>
<span class="line"><span style="color:#008000;"># auth_cache.cached_backend = http</span></span>
<span class="line"><span style="color:#008000;"># 认证请求类型</span></span>
<span class="line"><span style="color:#0000FF;">auth_http.http_method</span><span style="color:#000000;">   = post</span></span>
<span class="line"><span style="color:#008000;"># 认证和授权地址，官方提供了 Spring Boot 示例</span></span>
<span class="line"><span style="color:#008000;"># 根据需要配置下面地址</span></span>
<span class="line"><span style="color:#0000FF;">auth_http.request_timeout</span><span style="color:#000000;"> = 60000</span></span>
<span class="line"><span style="color:#0000FF;">auth_http.connection_timeout</span><span style="color:#000000;"> = 60000</span></span>
<span class="line"><span style="color:#0000FF;">auth_http.user_path</span><span style="color:#000000;"> = http://10.142.52.12:3000/auth/user</span></span>
<span class="line"><span style="color:#0000FF;">auth_http.vhost_path</span><span style="color:#000000;"> = http://10.142.52.12:3000/auth/vhost</span></span>
<span class="line"><span style="color:#0000FF;">auth_http.resource_path</span><span style="color:#000000;"> = http://10.142.52.12:3000/auth/resource</span></span>
<span class="line"><span style="color:#0000FF;">auth_http.topic_path</span><span style="color:#000000;"> = http://10.142.52.12:3000/auth/topic</span></span>
<span class="line"><span style="color:#008000;"># 缓存时间，单位毫秒</span></span>
<span class="line"><span style="color:#0000FF;">auth_cache.cache_ttl</span><span style="color:#000000;"> = 1000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0000FF;">mqtt.default_user</span><span style="color:#000000;"> = test</span></span>
<span class="line"><span style="color:#0000FF;">mqtt.default_pass</span><span style="color:#000000;"> = 123456</span></span>
<span class="line"><span style="color:#0000FF;">mqtt.allow_anonymous</span><span style="color:#000000;"> = true</span></span>
<span class="line"><span style="color:#0000FF;">mqtt.listeners.tcp.default</span><span style="color:#000000;"> = 1883</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),i=[p];function t(c,r){return a(),n("div",null,i)}const u=s(e,[["render",t],["__file","消息队列.html.vue"]]);export{u as default};
