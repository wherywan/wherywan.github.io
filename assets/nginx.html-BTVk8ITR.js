import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as c,c as r,a as s,b as a,d as e,e as l}from"./app-hoN0JGLf.js";const d={},o=l(`<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx"><span>nginx</span></a></h1><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令"><span>常用命令</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span style="color:#008000;"># 重新加载配置</span></span>
<span class="line"><span style="color:#795E26;">nginx</span><span style="color:#0000FF;"> -s</span><span style="color:#A31515;"> reload</span></span>
<span class="line"><span style="color:#795E26;">nginx</span><span style="color:#0000FF;"> -s</span><span style="color:#A31515;"> quit</span></span>
<span class="line"><span style="color:#795E26;">nginx</span><span style="color:#0000FF;"> -s</span><span style="color:#A31515;"> stop</span></span>
<span class="line"><span style="color:#008000;"># 使用systemctl去启停service</span></span>
<span class="line"><span style="color:#795E26;">systemctl</span><span style="color:#A31515;"> status</span><span style="color:#A31515;"> nginx</span></span>
<span class="line"><span style="color:#795E26;">systemctl</span><span style="color:#A31515;"> stop</span><span style="color:#A31515;"> nginx</span></span>
<span class="line"><span style="color:#795E26;">systemctl</span><span style="color:#A31515;"> start</span><span style="color:#A31515;"> nginx</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数调优" tabindex="-1"><a class="header-anchor" href="#参数调优"><span>参数调优</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span style="color:#008000;"># 设置进程句柄数 shell会话期间生效</span></span>
<span class="line"><span style="color:#795E26;">ulimit</span><span style="color:#0000FF;"> -n</span><span style="color:#098658;"> 10000</span></span>
<span class="line"><span style="color:#008000;"># 查看系统最大句柄</span></span>
<span class="line"><span style="color:#795E26;">sysctl</span><span style="color:#0000FF;"> -n</span><span style="color:#0000FF;"> -e</span><span style="color:#A31515;"> fs.file-max</span></span>
<span class="line"><span style="color:#008000;"># 查看单进程最大句柄上限</span></span>
<span class="line"><span style="color:#795E26;">sysctl</span><span style="color:#0000FF;"> -n</span><span style="color:#0000FF;"> -e</span><span style="color:#A31515;"> fs.nr_open</span></span>
<span class="line"><span style="color:#008000;"># 编辑用户资源配置 永久性</span></span>
<span class="line"><span style="color:#795E26;">vi</span><span style="color:#A31515;"> /etc/security/limits.conf</span></span>
<span class="line"><span style="color:#008000;"># 编辑系统配置</span></span>
<span class="line"><span style="color:#795E26;">vi</span><span style="color:#A31515;"> /etc/sysctl.conf</span></span>
<span class="line"><span style="color:#008000;"># 查看 pid</span></span>
<span class="line"><span style="color:#795E26;">ps</span><span style="color:#0000FF;"> -ef</span></span>
<span class="line"><span style="color:#008000;">#查看进程参数，最大文件描述符</span></span>
<span class="line"><span style="color:#795E26;">cat</span><span style="color:#A31515;"> /proc/28952/limits</span><span style="color:#000000;"> </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基于nginx的waf实现" tabindex="-1"><a class="header-anchor" href="#基于nginx的waf实现"><span>基于nginx的waf实现</span></a></h2><ol><li>第一层 Nginx：作为入口点，处理 SSL 终止、DDoS 防护、基本的访问控制等。</li><li>第二层 Nginx：实现更细粒度的安全策略，如 SQL 注入防护、XSS 防护等。</li><li>第三层 Nginx：负责负载均衡和路由到后端应用服务器</li></ol><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><h3 id="location路径配置" tabindex="-1"><a class="header-anchor" href="#location路径配置"><span>location路径配置</span></a></h3>`,9),t={href:"https://huaweicloud.csdn.net/63561b93d3efff3090b5a85d.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://blog.csdn.net/luoyang_java/article/details/83507193",target:"_blank",rel:"noopener noreferrer"},m=l(`<h3 id="nginx-conf" tabindex="-1"><a class="header-anchor" href="#nginx-conf"><span>nginx.conf</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>user  root;</span></span>
<span class="line"><span># worker进程数</span></span>
<span class="line"><span>worker_processes  auto;</span></span>
<span class="line"><span>#worker进程能打开的文件描述符</span></span>
<span class="line"><span>#worker_rlimit_nofile 500000;</span></span>
<span class="line"><span>error_log  logs/error.log;</span></span>
<span class="line"><span>#error_log  logs/error.log  notice;</span></span>
<span class="line"><span>#error_log  logs/error.log  info;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#pid        logs/nginx.pid;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>events {</span></span>
<span class="line"><span>    # worker 进程能处理的最大连接</span></span>
<span class="line"><span>    worker_connections  4096;</span></span>
<span class="line"><span>    use epoll;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>http {</span></span>
<span class="line"><span>    include       mime.types;</span></span>
<span class="line"><span>    default_type  application/octet-stream;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span>    #                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span>    #                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #access_log  logs/access.log  main;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    sendfile        on;</span></span>
<span class="line"><span>    #tcp_nopush     on;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #keepalive_timeout  0;</span></span>
<span class="line"><span>    keepalive_timeout  65;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #gzip  on;</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>    # another virtual host using mix of IP-, name-, and port-based configuration</span></span>
<span class="line"><span>    #</span></span>
<span class="line"><span>    #server {</span></span>
<span class="line"><span>    #    listen       8000;</span></span>
<span class="line"><span>    #    listen       somename:8080;</span></span>
<span class="line"><span>    #    server_name  somename  alias  another.alias;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #    location / {</span></span>
<span class="line"><span>    #        root   html;</span></span>
<span class="line"><span>    #        index  index.html index.htm;</span></span>
<span class="line"><span>    #    }</span></span>
<span class="line"><span>    #}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # HTTPS server</span></span>
<span class="line"><span>    #</span></span>
<span class="line"><span>    #server {</span></span>
<span class="line"><span>    #    listen       443 ssl;</span></span>
<span class="line"><span>    #    server_name  localhost;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #    ssl_certificate      cert.pem;</span></span>
<span class="line"><span>    #    ssl_certificate_key  cert.key;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #    ssl_session_cache    shared:SSL:1m;</span></span>
<span class="line"><span>    #    ssl_session_timeout  5m;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #    ssl_ciphers  HIGH:!aNULL:!MD5;</span></span>
<span class="line"><span>    #    ssl_prefer_server_ciphers  on;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #    location / {</span></span>
<span class="line"><span>    #        root   html;</span></span>
<span class="line"><span>    #        index  index.html index.htm;</span></span>
<span class="line"><span>    #    }</span></span>
<span class="line"><span>    #}</span></span>
<span class="line"><span>    # 加载文件夹中代理服务器配置</span></span>
<span class="line"><span>    include /etc/nginx/conf.d/*.conf;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    map $http_upgrade $connection_upgrade {</span></span>
<span class="line"><span>        default upgrade;</span></span>
<span class="line"><span>        &#39;&#39; close;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    upstream gateway{</span></span>
<span class="line"><span>        server 10.142.51.101:1000;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    upstream emqserver{</span></span>
<span class="line"><span>        server 10.142.62.50:8083;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    server {</span></span>
<span class="line"><span>        listen       8002;</span></span>
<span class="line"><span>        server_name  localhost;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        #charset koi8-r;</span></span>
<span class="line"><span>        # access_log  /var/log/nginx/host.access.log  main;</span></span>
<span class="line"><span>        # underscores_in_headers on;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        location ^~ /api/ {</span></span>
<span class="line"><span>            proxy_redirect off;</span></span>
<span class="line"><span>            proxy_set_header Host $host;</span></span>
<span class="line"><span>            proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>            proxy_pass  http://127.0.0.1:1000/;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>		location ^~ /rule/ {</span></span>
<span class="line"><span>			proxy_http_version 1.1;</span></span>
<span class="line"><span>            proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span>            proxy_set_header Connection &quot;upgrade&quot;;</span></span>
<span class="line"><span>			</span></span>
<span class="line"><span>            proxy_redirect off;</span></span>
<span class="line"><span>            proxy_set_header Host $host;</span></span>
<span class="line"><span>            proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>            proxy_pass  http://localhost:8001/;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>		</span></span>
<span class="line"><span>		</span></span>
<span class="line"><span>        location ^~ /oss/ {</span></span>
<span class="line"><span>            proxy_redirect off;</span></span>
<span class="line"><span>            proxy_set_header Host $host;</span></span>
<span class="line"><span>            proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>            proxy_pass  http://10.142.51.141:9000/;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        location ^~ /ws/ {</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>            proxy_http_version 1.1;</span></span>
<span class="line"><span>            proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span>            proxy_set_header Connection &quot;upgrade&quot;;</span></span>
<span class="line"><span>            </span></span>
<span class="line"><span>			proxy_pass http://gateway/;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            proxy_connect_timeout 60s;</span></span>
<span class="line"><span>            proxy_read_timeout 7200s;</span></span>
<span class="line"><span>            proxy_send_timeout 60s;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>           </span></span>
<span class="line"><span></span></span>
<span class="line"><span>          location ^~ /mqttws/ {</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>            proxy_http_version 1.1;</span></span>
<span class="line"><span>            proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span>            proxy_set_header Connection &quot;upgrade&quot;;</span></span>
<span class="line"><span>			</span></span>
<span class="line"><span>			proxy_pass http://emqserver/;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            proxy_connect_timeout 60s;</span></span>
<span class="line"><span>            proxy_read_timeout 7200s;</span></span>
<span class="line"><span>            proxy_send_timeout 60s;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>	 </span></span>
<span class="line"><span>        location ^~ /openapi/ {</span></span>
<span class="line"><span>            proxy_redirect off;</span></span>
<span class="line"><span>            proxy_set_header Host $host;</span></span>
<span class="line"><span>            proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>            proxy_pass  http://10.142.51.107:8007/;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        location / {</span></span>
<span class="line"><span>            proxy_redirect off;</span></span>
<span class="line"><span>            proxy_set_header Host $host;</span></span>
<span class="line"><span>            proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>            proxy_pass  http://localhost:18002/;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span>        location = /50x.html {</span></span>
<span class="line"><span>            root   /usr/share/nginx/html;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="conf-d-hunter-conf" tabindex="-1"><a class="header-anchor" href="#conf-d-hunter-conf"><span>conf.d/hunter.conf</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span># ssl加密通信,监听子域名，证书配置</span></span>
<span class="line"><span> server {</span></span>
<span class="line"><span>    listen       443 ssl http2;</span></span>
<span class="line"><span>    listen       [::]:443 ssl http2;</span></span>
<span class="line"><span>    server_name  hunter.lzyue.shop;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ssl_certificate /etc/nginx/cert/lzyue.shop.crt;</span></span>
<span class="line"><span>    ssl_certificate_key /etc/nginx/cert/lzyue.shop.pem;</span></span>
<span class="line"><span>    ssl_session_cache shared:SSL:1m;</span></span>
<span class="line"><span>    ssl_session_timeout  10m;</span></span>
<span class="line"><span>    ssl_ciphers PROFILE=SYSTEM;</span></span>
<span class="line"><span>    ssl_prefer_server_ciphers on;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location ^~ /ws/ {</span></span>
<span class="line"><span>        proxy_pass http://localhost:3000;</span></span>
<span class="line"><span>        proxy_http_version 1.1;</span></span>
<span class="line"><span>        proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span>        proxy_set_header Connection &quot;upgrade&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        proxy_connect_timeout 60s;</span></span>
<span class="line"><span>        proxy_read_timeout 7200s;</span></span>
<span class="line"><span>        proxy_send_timeout 60s;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        proxy_pass http://localhost:3000/;</span></span>
<span class="line"><span>        proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    error_page 404 /404.html;</span></span>
<span class="line"><span>        location = /40x.html {</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    error_page 500 502 503 504 /50x.html;</span></span>
<span class="line"><span>        location = /50x.html {</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function u(b,_){const n=p("ExternalLinkIcon");return c(),r("div",null,[o,s("ul",null,[s("li",null,[s("a",t,[a("参考1"),e(n)])]),s("li",null,[s("a",v,[a("参考2"),e(n)])])]),m])}const x=i(d,[["render",u],["__file","nginx.html.vue"]]),g=JSON.parse('{"path":"/note/%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%8E%AF%E5%A2%83/nginx.html","title":"nginx","lang":"zh-CN","frontmatter":{"description":"nginx 常用命令 参数调优 基于nginx的waf实现 第一层 Nginx：作为入口点，处理 SSL 终止、DDoS 防护、基本的访问控制等。 第二层 Nginx：实现更细粒度的安全策略，如 SQL 注入防护、XSS 防护等。 第三层 Nginx：负责负载均衡和路由到后端应用服务器 配置 location路径配置 参考1 参考2 nginx.con...","head":[["meta",{"property":"og:url","content":"https://wherywan.github.io/note/%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%8E%AF%E5%A2%83/nginx.html"}],["meta",{"property":"og:site_name","content":"HONG_JI"}],["meta",{"property":"og:title","content":"nginx"}],["meta",{"property":"og:description","content":"nginx 常用命令 参数调优 基于nginx的waf实现 第一层 Nginx：作为入口点，处理 SSL 终止、DDoS 防护、基本的访问控制等。 第二层 Nginx：实现更细粒度的安全策略，如 SQL 注入防护、XSS 防护等。 第三层 Nginx：负责负载均衡和路由到后端应用服务器 配置 location路径配置 参考1 参考2 nginx.con..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-18T08:25:04.000Z"}],["meta",{"property":"article:author","content":"wanhongji"}],["meta",{"property":"article:modified_time","content":"2024-10-18T08:25:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"nginx\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-18T08:25:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"wanhongji\\"}]}"]]},"headers":[{"level":2,"title":"常用命令","slug":"常用命令","link":"#常用命令","children":[]},{"level":2,"title":"参数调优","slug":"参数调优","link":"#参数调优","children":[]},{"level":2,"title":"基于nginx的waf实现","slug":"基于nginx的waf实现","link":"#基于nginx的waf实现","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[{"level":3,"title":"location路径配置","slug":"location路径配置","link":"#location路径配置","children":[]},{"level":3,"title":"nginx.conf","slug":"nginx-conf","link":"#nginx-conf","children":[]},{"level":3,"title":"conf.d/hunter.conf","slug":"conf-d-hunter-conf","link":"#conf-d-hunter-conf","children":[]}]}],"git":{"createdTime":1693452152000,"updatedTime":1729239904000,"contributors":[{"name":"wanhongji","email":"wheywan@163.com","commits":2},{"name":"wanhongji","email":"wherywan@163.com","commits":1}]},"readingTime":{"minutes":2.21,"words":663},"filePathRelative":"note/服务器环境/nginx.md","localizedDate":"2023年8月31日","excerpt":"\\n<h2>常用命令</h2>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"shiki light-plus\\" style=\\"background-color:#FFFFFF;color:#000000\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#008000\\"># 重新加载配置</span></span>\\n<span class=\\"line\\"><span style=\\"color:#795E26\\">nginx</span><span style=\\"color:#0000FF\\"> -s</span><span style=\\"color:#A31515\\"> reload</span></span>\\n<span class=\\"line\\"><span style=\\"color:#795E26\\">nginx</span><span style=\\"color:#0000FF\\"> -s</span><span style=\\"color:#A31515\\"> quit</span></span>\\n<span class=\\"line\\"><span style=\\"color:#795E26\\">nginx</span><span style=\\"color:#0000FF\\"> -s</span><span style=\\"color:#A31515\\"> stop</span></span>\\n<span class=\\"line\\"><span style=\\"color:#008000\\"># 使用systemctl去启停service</span></span>\\n<span class=\\"line\\"><span style=\\"color:#795E26\\">systemctl</span><span style=\\"color:#A31515\\"> status</span><span style=\\"color:#A31515\\"> nginx</span></span>\\n<span class=\\"line\\"><span style=\\"color:#795E26\\">systemctl</span><span style=\\"color:#A31515\\"> stop</span><span style=\\"color:#A31515\\"> nginx</span></span>\\n<span class=\\"line\\"><span style=\\"color:#795E26\\">systemctl</span><span style=\\"color:#A31515\\"> start</span><span style=\\"color:#A31515\\"> nginx</span></span>\\n<span class=\\"line\\"></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{x as comp,g as data};
