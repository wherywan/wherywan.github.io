import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,f as l}from"./app-f83986bb.js";const e={},p=l(`<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> nginx</h1><h1 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#008000;"># 重新加载配置</span></span>
<span class="line"><span style="color:#795E26;">nginx</span><span style="color:#000000;"> </span><span style="color:#0000FF;">-s</span><span style="color:#000000;"> </span><span style="color:#A31515;">reload</span></span>
<span class="line"><span style="color:#795E26;">nginx</span><span style="color:#000000;"> </span><span style="color:#0000FF;">-s</span><span style="color:#000000;"> </span><span style="color:#A31515;">quit</span></span>
<span class="line"><span style="color:#795E26;">nginx</span><span style="color:#000000;"> </span><span style="color:#0000FF;">-s</span><span style="color:#000000;"> </span><span style="color:#A31515;">stop</span></span>
<span class="line"><span style="color:#008000;"># 使用systemctl去启停service</span></span>
<span class="line"><span style="color:#795E26;">systemctl</span><span style="color:#000000;"> </span><span style="color:#A31515;">status</span><span style="color:#000000;"> </span><span style="color:#A31515;">nginx</span></span>
<span class="line"><span style="color:#795E26;">systemctl</span><span style="color:#000000;"> </span><span style="color:#A31515;">stop</span><span style="color:#000000;"> </span><span style="color:#A31515;">nginx</span></span>
<span class="line"><span style="color:#795E26;">systemctl</span><span style="color:#000000;"> </span><span style="color:#A31515;">start</span><span style="color:#000000;"> </span><span style="color:#A31515;">nginx</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数调优" tabindex="-1"><a class="header-anchor" href="#参数调优" aria-hidden="true">#</a> 参数调优</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#008000;"># 设置进程句柄数 shell会话期间生效</span></span>
<span class="line"><span style="color:#795E26;">ulimit</span><span style="color:#000000;"> </span><span style="color:#0000FF;">-n</span><span style="color:#000000;"> </span><span style="color:#098658;">10000</span></span>
<span class="line"><span style="color:#008000;"># 查看系统最大句柄</span></span>
<span class="line"><span style="color:#795E26;">sysctl</span><span style="color:#000000;"> </span><span style="color:#0000FF;">-n</span><span style="color:#000000;"> </span><span style="color:#0000FF;">-e</span><span style="color:#000000;"> </span><span style="color:#A31515;">fs.file-max</span></span>
<span class="line"><span style="color:#008000;"># 查看单进程最大句柄上限</span></span>
<span class="line"><span style="color:#795E26;">sysctl</span><span style="color:#000000;"> </span><span style="color:#0000FF;">-n</span><span style="color:#000000;"> </span><span style="color:#0000FF;">-e</span><span style="color:#000000;"> </span><span style="color:#A31515;">fs.nr_open</span></span>
<span class="line"><span style="color:#008000;"># 编辑用户资源配置 永久性</span></span>
<span class="line"><span style="color:#795E26;">vi</span><span style="color:#000000;"> </span><span style="color:#A31515;">/etc/security/limits.conf</span></span>
<span class="line"><span style="color:#008000;"># 编辑系统配置</span></span>
<span class="line"><span style="color:#795E26;">vi</span><span style="color:#000000;"> </span><span style="color:#A31515;">/etc/sysctl.conf</span></span>
<span class="line"><span style="color:#008000;"># 查看 pid</span></span>
<span class="line"><span style="color:#795E26;">ps</span><span style="color:#000000;"> </span><span style="color:#0000FF;">-ef</span></span>
<span class="line"><span style="color:#008000;">#查看进程参数，最大文件描述符</span></span>
<span class="line"><span style="color:#795E26;">cat</span><span style="color:#000000;"> </span><span style="color:#A31515;">/proc/28952/limits</span><span style="color:#000000;"> </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx-conf" tabindex="-1"><a class="header-anchor" href="#nginx-conf" aria-hidden="true">#</a> nginx.conf</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">user  root;</span></span>
<span class="line"><span style="color:#000000;"># worker进程数</span></span>
<span class="line"><span style="color:#000000;">worker_processes  auto;</span></span>
<span class="line"><span style="color:#000000;">#worker进程能打开的文件描述符</span></span>
<span class="line"><span style="color:#000000;">#worker_rlimit_nofile 500000;</span></span>
<span class="line"><span style="color:#000000;">error_log  logs/error.log;</span></span>
<span class="line"><span style="color:#000000;">#error_log  logs/error.log  notice;</span></span>
<span class="line"><span style="color:#000000;">#error_log  logs/error.log  info;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">#pid        logs/nginx.pid;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">events {</span></span>
<span class="line"><span style="color:#000000;">    # worker 进程能处理的最大连接</span></span>
<span class="line"><span style="color:#000000;">    worker_connections  4096;</span></span>
<span class="line"><span style="color:#000000;">    use epoll;</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">http {</span></span>
<span class="line"><span style="color:#000000;">    include       mime.types;</span></span>
<span class="line"><span style="color:#000000;">    default_type  application/octet-stream;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    #log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span style="color:#000000;">    #                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="color:#000000;">    #                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    #access_log  logs/access.log  main;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    sendfile        on;</span></span>
<span class="line"><span style="color:#000000;">    #tcp_nopush     on;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    #keepalive_timeout  0;</span></span>
<span class="line"><span style="color:#000000;">    keepalive_timeout  65;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    #gzip  on;</span></span>
<span class="line"><span style="color:#000000;">	</span></span>
<span class="line"><span style="color:#000000;">	</span></span>
<span class="line"><span style="color:#000000;">    # another virtual host using mix of IP-, name-, and port-based configuration</span></span>
<span class="line"><span style="color:#000000;">    #</span></span>
<span class="line"><span style="color:#000000;">    #server {</span></span>
<span class="line"><span style="color:#000000;">    #    listen       8000;</span></span>
<span class="line"><span style="color:#000000;">    #    listen       somename:8080;</span></span>
<span class="line"><span style="color:#000000;">    #    server_name  somename  alias  another.alias;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    #    location / {</span></span>
<span class="line"><span style="color:#000000;">    #        root   html;</span></span>
<span class="line"><span style="color:#000000;">    #        index  index.html index.htm;</span></span>
<span class="line"><span style="color:#000000;">    #    }</span></span>
<span class="line"><span style="color:#000000;">    #}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    # HTTPS server</span></span>
<span class="line"><span style="color:#000000;">    #</span></span>
<span class="line"><span style="color:#000000;">    #server {</span></span>
<span class="line"><span style="color:#000000;">    #    listen       443 ssl;</span></span>
<span class="line"><span style="color:#000000;">    #    server_name  localhost;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    #    ssl_certificate      cert.pem;</span></span>
<span class="line"><span style="color:#000000;">    #    ssl_certificate_key  cert.key;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    #    ssl_session_cache    shared:SSL:1m;</span></span>
<span class="line"><span style="color:#000000;">    #    ssl_session_timeout  5m;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    #    ssl_ciphers  HIGH:!aNULL:!MD5;</span></span>
<span class="line"><span style="color:#000000;">    #    ssl_prefer_server_ciphers  on;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    #    location / {</span></span>
<span class="line"><span style="color:#000000;">    #        root   html;</span></span>
<span class="line"><span style="color:#000000;">    #        index  index.html index.htm;</span></span>
<span class="line"><span style="color:#000000;">    #    }</span></span>
<span class="line"><span style="color:#000000;">    #}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    map $http_upgrade $connection_upgrade {</span></span>
<span class="line"><span style="color:#000000;">    銆€銆€default upgrade;</span></span>
<span class="line"><span style="color:#000000;">    銆€銆€&#39;&#39; close;</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    upstream gateway{</span></span>
<span class="line"><span style="color:#000000;">        server 10.142.51.101:1000;</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    upstream emqserver{</span></span>
<span class="line"><span style="color:#000000;">        server 10.142.62.50:8083;</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    server {</span></span>
<span class="line"><span style="color:#000000;">        listen       8002;</span></span>
<span class="line"><span style="color:#000000;">        server_name  localhost;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">        #charset koi8-r;</span></span>
<span class="line"><span style="color:#000000;">        # access_log  /var/log/nginx/host.access.log  main;</span></span>
<span class="line"><span style="color:#000000;">        # underscores_in_headers on;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">        location ^~ /api/ {</span></span>
<span class="line"><span style="color:#000000;">            proxy_redirect off;</span></span>
<span class="line"><span style="color:#000000;">            proxy_set_header Host $host;</span></span>
<span class="line"><span style="color:#000000;">            proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#000000;">            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#000000;">            proxy_pass  http://127.0.0.1:1000/;</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">		location ^~ /rule/ {</span></span>
<span class="line"><span style="color:#000000;">			proxy_http_version 1.1;</span></span>
<span class="line"><span style="color:#000000;">            proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span style="color:#000000;">            proxy_set_header Connection &quot;upgrade&quot;;</span></span>
<span class="line"><span style="color:#000000;">			</span></span>
<span class="line"><span style="color:#000000;">            proxy_redirect off;</span></span>
<span class="line"><span style="color:#000000;">            proxy_set_header Host $host;</span></span>
<span class="line"><span style="color:#000000;">            proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#000000;">            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#000000;">            proxy_pass  http://localhost:8001/;</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">		</span></span>
<span class="line"><span style="color:#000000;">		</span></span>
<span class="line"><span style="color:#000000;">        location ^~ /oss/ {</span></span>
<span class="line"><span style="color:#000000;">            proxy_redirect off;</span></span>
<span class="line"><span style="color:#000000;">            proxy_set_header Host $host;</span></span>
<span class="line"><span style="color:#000000;">            proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#000000;">            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#000000;">            proxy_pass  http://10.142.51.141:9000/;</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">        location ^~ /ws/ {</span></span>
<span class="line"><span style="color:#000000;">       </span></span>
<span class="line"><span style="color:#000000;">            proxy_http_version 1.1;</span></span>
<span class="line"><span style="color:#000000;">            proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span style="color:#000000;">            proxy_set_header Connection &quot;upgrade&quot;;</span></span>
<span class="line"><span style="color:#000000;">            </span></span>
<span class="line"><span style="color:#000000;">			proxy_pass http://gateway/;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">            proxy_connect_timeout 60s;</span></span>
<span class="line"><span style="color:#000000;">            proxy_read_timeout 7200s;</span></span>
<span class="line"><span style="color:#000000;">            proxy_send_timeout 60s;</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">           </span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">          location ^~ /mqttws/ {</span></span>
<span class="line"><span style="color:#000000;">       </span></span>
<span class="line"><span style="color:#000000;">            proxy_http_version 1.1;</span></span>
<span class="line"><span style="color:#000000;">            proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span style="color:#000000;">            proxy_set_header Connection &quot;upgrade&quot;;</span></span>
<span class="line"><span style="color:#000000;">			</span></span>
<span class="line"><span style="color:#000000;">			proxy_pass http://emqserver/;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">            proxy_connect_timeout 60s;</span></span>
<span class="line"><span style="color:#000000;">            proxy_read_timeout 7200s;</span></span>
<span class="line"><span style="color:#000000;">            proxy_send_timeout 60s;</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">	 </span></span>
<span class="line"><span style="color:#000000;">        location ^~ /openapi/ {</span></span>
<span class="line"><span style="color:#000000;">            proxy_redirect off;</span></span>
<span class="line"><span style="color:#000000;">            proxy_set_header Host $host;</span></span>
<span class="line"><span style="color:#000000;">            proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#000000;">            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#000000;">            proxy_pass  http://10.142.51.107:8007/;</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">        location / {</span></span>
<span class="line"><span style="color:#000000;">            proxy_redirect off;</span></span>
<span class="line"><span style="color:#000000;">            proxy_set_header Host $host;</span></span>
<span class="line"><span style="color:#000000;">            proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#000000;">            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#000000;">            proxy_pass  http://localhost:18002/;</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">        error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span style="color:#000000;">        location = /50x.html {</span></span>
<span class="line"><span style="color:#000000;">            root   /usr/share/nginx/html;</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),i=[p];function o(c,r){return n(),a("div",null,i)}const v=s(e,[["render",o],["__file","nginx.html.vue"]]);export{v as default};
