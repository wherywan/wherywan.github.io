import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as p,a as s,t as a,b as e,e as l}from"./app-hoN0JGLf.js";const d="/assets/%E7%99%BB%E5%BD%95%E6%B5%81%E7%A8%8B-CwfosAyN.png",o="/assets/%E7%94%A8%E6%88%B7%E9%9D%A2%E6%9D%BF-BUCbSH90.png",c="/assets/%E5%89%8D%E7%AB%AF%E5%A4%84%E7%90%86-DPLGj0eJ.png",u="/assets/%E6%8E%88%E6%9D%83%E7%A0%81%E6%B5%81%E7%A8%8B-sktZ_2ZD.png",r="/assets/%E5%8D%95%E7%82%B9%E7%99%BB%E5%BD%95-B_9wS-nP.png",v={},q=l('<h1 id="用户中心技术文档" tabindex="-1"><a class="header-anchor" href="#用户中心技术文档"><span>用户中心技术文档</span></a></h1><h2 id="项目负责人" tabindex="-1"><a class="header-anchor" href="#项目负责人"><span>项目负责人</span></a></h2><ul><li>前端：陈晰、李婷妍</li><li>后端：胡丽芳、万洪吉</li><li>业务： 王玉廷</li><li>需求 ：王玉廷</li></ul><h2 id="项目介绍" tabindex="-1"><a class="header-anchor" href="#项目介绍"><span>项目介绍</span></a></h2><h3 id="项目背景" tabindex="-1"><a class="header-anchor" href="#项目背景"><span>项目背景</span></a></h3><p>在分布式系统中每一个服务都有一套账号，不通用，容易引起混乱和管理不便。基于该问题，需要独立的认证授权系统。支持多租户管理、多组织管理的多领域集成应用，为业务系统提供统一的用户资源和权限资源进行集中的管理</p><h3 id="项目技术" tabindex="-1"><a class="header-anchor" href="#项目技术"><span>项目技术</span></a></h3><ul><li>持久层框架： Apache Mybatis &amp; Mybatis Plus</li><li>API 网关：Spring Cloud Gateway</li><li>服务注册&amp;发现和配置中心: Alibaba Nacos</li><li>服务消费：Spring Cloud OpenFeign &amp; RestTemplate</li><li>负载均衡：Spring Cloud Loadbalancer</li><li>服务熔断&amp;降级&amp;限流：Alibaba Sentinel（暂时未用）</li><li>服务监控：Spring Boot Admin</li><li>数据缓存： Redis ，Redission</li><li>数据库： MySQL</li><li>JSON 序列化：Jackson &amp; FastJson</li><li>文件服务： Minio</li></ul><h3 id="功能概述" tabindex="-1"><a class="header-anchor" href="#功能概述"><span>功能概述</span></a></h3><p>提供统一用户认证，租户管理、平台管理、菜单管理、API管理、用户管理、角色权限管理、日志管理等功能。支持应用自定义权限管理。</p><p>租户之间数据相互隔离，对不同租户来说，只能操作属于自身的数据，而不能越界操作其他租户的数据，对不同租户的数据存储进行隔离，来保证不同租户的数据安全性。</p><h4 id="内置功能" tabindex="-1"><a class="header-anchor" href="#内置功能"><span>内置功能</span></a></h4><ul><li>**租户管理：**被赋予服务使用权的企业租户（客户）。租户信息的创建、状态、有效时间等的维护</li><li>**用户管理：**用户是系统操作者，该功能主要完成系统用户配置。包含第三方登录用户信息的管理，租户间的数据是完全隔离的。</li><li>**租户角色管理：**平台角色的组合，为用户分配角色来授权用户可访问的平台</li><li>**平台管理：**结合 OAuth2 机制，创建应用信息，申请 APP_KEY，Token 有效时间，权限范围等信息。</li><li>**菜单管理：**可为每个平台创建平台所需的菜单（页面、功能、数据等）,绑定API接口</li><li>**平台角色管理：**创建用户角色，为角色权限分配，设置角色菜单权限划分。</li><li>**权限管理：**支持RBAC、ABAC的权限管理，可通过用户访问的路径进行鉴权。</li><li>**API管理：**集成swagger，自动将服务接口持久化。同时支持手动添加API接口。</li></ul><h2 id="技术实现方式" tabindex="-1"><a class="header-anchor" href="#技术实现方式"><span>技术实现方式</span></a></h2><h3 id="登录流程" tabindex="-1"><a class="header-anchor" href="#登录流程"><span>登录流程</span></a></h3><h4 id="用户面板" tabindex="-1"><a class="header-anchor" href="#用户面板"><span>用户面板</span></a></h4>',16),b=s("p",null,[s("img",{src:d,alt:""})],-1),m=s("p",null,"用户面板的入口地址需要配在用户中心管理平台的redirect_uri中，如http://10.142.51.100:9200/panel/index",-1),h=s("p",null,[s("img",{src:o,alt:""})],-1),y=s("p",null,"用户点击具体的应用，则跳转到三方应用（为用户设置的重定向地址第一个），第三方应用需",-1),F=s("a",{href:"#%E5%8D%95%E7%82%B9%E7%99%BB%E5%BD%95%E8%AF%B4%E6%98%8E"},"2.3.1.3",-1),g=l('<h4 id="前端处理" tabindex="-1"><a class="header-anchor" href="#前端处理"><span>前端处理</span></a></h4><p><img src="'+c+'" alt=""></p><h4 id="授权码模式" tabindex="-1"><a class="header-anchor" href="#授权码模式"><span>授权码模式</span></a></h4><p>当前前端登录采用授权码模式，流程如下：</p><p><img src="'+u+'" alt=""></p><h4 id="单点登录说明" tabindex="-1"><a class="header-anchor" href="#单点登录说明"><span>单点登录说明</span></a></h4><p><img src="'+r+`" alt=""></p><h3 id="前端" tabindex="-1"><a class="header-anchor" href="#前端"><span>前端</span></a></h3><h3 id="后端" tabindex="-1"><a class="header-anchor" href="#后端"><span>后端</span></a></h3><p>采用微服务架构，分为auth认证服务、gateway网关服务、system用户系统服务。</p><h4 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h4><h5 id="网关服务" tabindex="-1"><a class="header-anchor" href="#网关服务"><span>网关服务</span></a></h5><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span style="color:#800000;">spring</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#800000;">  main</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#800000;">    allow-bean-definition-overriding</span><span style="color:#000000;">: </span><span style="color:#0000FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#800000;">  jackson</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#800000;">    date-fromat</span><span style="color:#000000;">: </span><span style="color:#0000FF;">yyyy-MM-dd HH:mm:ss</span></span>
<span class="line"><span style="color:#800000;">    time-zone</span><span style="color:#000000;">: </span><span style="color:#0000FF;">GMT+8</span></span>
<span class="line"><span style="color:#800000;">  cloud</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#800000;">    gateway</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#800000;">      enabled</span><span style="color:#000000;">: </span><span style="color:#0000FF;">true</span></span>
<span class="line"><span style="color:#800000;">      routes</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#008000;">        # 认证中心</span></span>
<span class="line"><span style="color:#000000;">        - </span><span style="color:#800000;">id</span><span style="color:#000000;">: </span><span style="color:#0000FF;">center-auth</span></span>
<span class="line"><span style="color:#800000;">          uri</span><span style="color:#000000;">: </span><span style="color:#0000FF;">lb://center-auth</span></span>
<span class="line"><span style="color:#800000;">          predicates</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#000000;">            - </span><span style="color:#0000FF;">Path=/auth/**</span></span>
<span class="line"><span style="color:#800000;">          filters</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#000000;">            - </span><span style="color:#0000FF;">StripPrefix=1</span></span>
<span class="line"><span style="color:#008000;">            # 验证码处理</span></span>
<span class="line"><span style="color:#008000;">           # - ValidateCodeGatewayFilter</span></span>
<span class="line"><span style="color:#008000;">            # 前端密码解密</span></span>
<span class="line"><span style="color:#008000;">            #- PasswordDecoderFilter</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">        - </span><span style="color:#800000;">id</span><span style="color:#000000;">: </span><span style="color:#0000FF;">center-system</span></span>
<span class="line"><span style="color:#800000;">          uri</span><span style="color:#000000;">: </span><span style="color:#0000FF;">lb://center-system</span></span>
<span class="line"><span style="color:#800000;">          predicates</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#000000;">            - </span><span style="color:#0000FF;">Path=/admin/**</span></span>
<span class="line"><span style="color:#800000;">          filters</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#000000;">            - </span><span style="color:#0000FF;">StripPrefix=1</span></span>
<span class="line"><span style="color:#800000;">security</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#800000;">  default</span><span style="color:#000000;">: </span></span>
<span class="line"><span style="color:#800000;">    domain</span><span style="color:#000000;">: </span><span style="color:#0000FF;">user.techease.com</span></span>
<span class="line"><span style="color:#800000;">  ignore</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#008000;">    # 白名单</span></span>
<span class="line"><span style="color:#800000;">    whites</span><span style="color:#000000;">: </span></span>
<span class="line"><span style="color:#000000;">      - </span><span style="color:#0000FF;">/auth/**</span></span>
<span class="line"><span style="color:#000000;">      - </span><span style="color:#0000FF;">/</span></span>
<span class="line"><span style="color:#008000;">     # 忽略鉴权路径</span></span>
<span class="line"><span style="color:#800000;">    auth</span><span style="color:#000000;">: </span></span>
<span class="line"><span style="color:#000000;">      - </span><span style="color:#800000;">serviceName</span><span style="color:#000000;">: </span><span style="color:#0000FF;">center-system</span></span>
<span class="line"><span style="color:#800000;">        method</span><span style="color:#000000;">: </span><span style="color:#0000FF;">GET</span></span>
<span class="line"><span style="color:#800000;">        uri</span><span style="color:#000000;">: </span><span style="color:#0000FF;">/user/v1/info</span><span style="color:#000000;"> </span></span>
<span class="line"><span style="color:#000000;">      - </span><span style="color:#800000;">serviceName</span><span style="color:#000000;">: </span><span style="color:#0000FF;">center-system</span></span>
<span class="line"><span style="color:#800000;">        method</span><span style="color:#000000;">: </span><span style="color:#0000FF;">PUT</span></span>
<span class="line"><span style="color:#800000;">        uri</span><span style="color:#000000;">: </span><span style="color:#0000FF;">/user/v1/currentUserInfo</span></span>
<span class="line"><span style="color:#000000;">      - </span><span style="color:#800000;">serviceName</span><span style="color:#000000;">: </span><span style="color:#0000FF;">center-system</span></span>
<span class="line"><span style="color:#800000;">        method</span><span style="color:#000000;">: </span><span style="color:#0000FF;">PUT</span></span>
<span class="line"><span style="color:#800000;">        uri</span><span style="color:#000000;">: </span><span style="color:#0000FF;">/user/v1/updateMail</span></span>
<span class="line"><span style="color:#000000;">      - </span><span style="color:#800000;">serviceName</span><span style="color:#000000;">: </span><span style="color:#0000FF;">center-system</span></span>
<span class="line"><span style="color:#800000;">        method</span><span style="color:#000000;">: </span><span style="color:#0000FF;">PUT</span></span>
<span class="line"><span style="color:#800000;">        uri</span><span style="color:#000000;">: </span><span style="color:#0000FF;">/user/v1/updatePhone</span><span style="color:#000000;"> </span></span>
<span class="line"><span style="color:#000000;">      - </span><span style="color:#800000;">serviceName</span><span style="color:#000000;">: </span><span style="color:#0000FF;">center-system</span></span>
<span class="line"><span style="color:#800000;">        method</span><span style="color:#000000;">: </span><span style="color:#0000FF;">GET</span></span>
<span class="line"><span style="color:#800000;">        uri</span><span style="color:#000000;">: </span><span style="color:#0000FF;">/notify/v1/send_code</span><span style="color:#000000;"> </span></span>
<span class="line"><span style="color:#000000;">      - </span><span style="color:#800000;">serviceName</span><span style="color:#000000;">: </span><span style="color:#0000FF;">center-system</span></span>
<span class="line"><span style="color:#800000;">        method</span><span style="color:#000000;">: </span><span style="color:#0000FF;">GET</span></span>
<span class="line"><span style="color:#800000;">        uri</span><span style="color:#000000;">: </span><span style="color:#0000FF;">/loginLog/v1/page/current</span></span>
<span class="line"><span style="color:#000000;">      - </span><span style="color:#800000;">serviceName</span><span style="color:#000000;">: </span><span style="color:#0000FF;">center-system</span></span>
<span class="line"><span style="color:#800000;">        method</span><span style="color:#000000;">: </span><span style="color:#0000FF;">GET</span></span>
<span class="line"><span style="color:#800000;">        uri</span><span style="color:#000000;">: </span><span style="color:#0000FF;">/client/v1/list</span><span style="color:#000000;"> </span></span>
<span class="line"><span style="color:#000000;">      - </span><span style="color:#800000;">serviceName</span><span style="color:#000000;">: </span><span style="color:#0000FF;">center-system</span></span>
<span class="line"><span style="color:#800000;">        method</span><span style="color:#000000;">: </span><span style="color:#0000FF;">GET</span></span>
<span class="line"><span style="color:#800000;">        uri</span><span style="color:#000000;">: </span><span style="color:#0000FF;">/menu/v1/router</span></span>
<span class="line"><span style="color:#000000;">      - </span><span style="color:#800000;">serviceName</span><span style="color:#000000;">: </span><span style="color:#0000FF;">center-system</span></span>
<span class="line"><span style="color:#800000;">        method</span><span style="color:#000000;">: </span><span style="color:#0000FF;">GET</span></span>
<span class="line"><span style="color:#800000;">        uri</span><span style="color:#000000;">: </span><span style="color:#0000FF;">/anyone/v1/userApis</span></span>
<span class="line"><span style="color:#000000;">      - </span><span style="color:#800000;">serviceName</span><span style="color:#000000;">: </span><span style="color:#0000FF;">center-system</span></span>
<span class="line"><span style="color:#800000;">        method</span><span style="color:#000000;">: </span><span style="color:#0000FF;">GET</span></span>
<span class="line"><span style="color:#800000;">        uri</span><span style="color:#000000;">: </span><span style="color:#0000FF;">/anyone/v1/client/roles</span></span>
<span class="line"><span style="color:#000000;">      - </span><span style="color:#800000;">serviceName</span><span style="color:#000000;">: </span><span style="color:#0000FF;">center-system</span></span>
<span class="line"><span style="color:#800000;">        method</span><span style="color:#000000;">: </span><span style="color:#0000FF;">GET</span></span>
<span class="line"><span style="color:#800000;">        uri</span><span style="color:#000000;">: </span><span style="color:#0000FF;">/menu/v1/menu/{clientId}</span></span>
<span class="line"><span style="color:#000000;">      - </span><span style="color:#800000;">serviceName</span><span style="color:#000000;">: </span><span style="color:#0000FF;">center-system</span></span>
<span class="line"><span style="color:#800000;">        method</span><span style="color:#000000;">: </span><span style="color:#0000FF;">POST</span></span>
<span class="line"><span style="color:#800000;">        uri</span><span style="color:#000000;">: </span><span style="color:#0000FF;">/sysApi/v1/batch</span></span>
<span class="line"><span style="color:#008000;"># 网关作为资源服务器的相关配置  </span></span>
<span class="line"><span style="color:#800000;">techease</span><span style="color:#000000;">: </span></span>
<span class="line"><span style="color:#800000;">  endpoint</span><span style="color:#000000;">: </span></span>
<span class="line"><span style="color:#800000;">    gatewayUri</span><span style="color:#000000;">: </span><span style="color:#0000FF;">http://10.142.51.100:9100</span></span>
<span class="line"><span style="color:#800000;">    jwkSetUri</span><span style="color:#000000;">: </span><span style="color:#0000FF;">http://10.142.51.100:9209/oauth2/jwks</span><span style="color:#000000;"> </span></span>
<span class="line"><span style="color:#800000;">    loginUri</span><span style="color:#000000;">: </span><span style="color:#0000FF;">http://10.142.51.100:9100/auth/login</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="认证服务" tabindex="-1"><a class="header-anchor" href="#认证服务"><span>认证服务</span></a></h5><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span style="color:#800000;">server</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#800000;">  servlet</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#800000;">    session</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#800000;">      timeout</span><span style="color:#000000;">: </span><span style="color:#0000FF;">2h</span></span>
<span class="line"><span style="color:#800000;">      cookie</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#800000;">        name</span><span style="color:#000000;">: </span><span style="color:#0000FF;">CENTER-TICKET</span></span>
<span class="line"><span style="color:#008000;"># Spring</span></span>
<span class="line"><span style="color:#800000;">spring</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#008000;">  # session:</span></span>
<span class="line"><span style="color:#008000;">  #   store-type: redis</span></span>
<span class="line"><span style="color:#800000;">  thymeleaf</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#800000;">    prefix</span><span style="color:#000000;">: </span><span style="color:#0000FF;">classpath:templates/</span></span>
<span class="line"><span style="color:#800000;">    suffix</span><span style="color:#000000;">: </span><span style="color:#0000FF;">.html</span></span>
<span class="line"><span style="color:#800000;">    enabled</span><span style="color:#000000;">: </span><span style="color:#0000FF;">true</span></span>
<span class="line"><span style="color:#800000;">    mode</span><span style="color:#000000;">: </span><span style="color:#0000FF;">HTML</span></span>
<span class="line"><span style="color:#008000;">#redis配置</span></span>
<span class="line"><span style="color:#800000;">  redis</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#800000;">    host</span><span style="color:#000000;">: </span><span style="color:#098658;">10.142.51.100</span></span>
<span class="line"><span style="color:#800000;">    password</span><span style="color:#000000;">: </span><span style="color:#0000FF;">redis_Techsel2o19</span></span>
<span class="line"><span style="color:#800000;">    port</span><span style="color:#000000;">: </span><span style="color:#098658;">1090</span></span>
<span class="line"><span style="color:#000000;">    </span></span>
<span class="line"><span style="color:#800000;">  jackson</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#800000;">    date-fromat</span><span style="color:#000000;">: </span><span style="color:#0000FF;">yyyy-MM-dd HH:mm:ss</span></span>
<span class="line"><span style="color:#800000;">    time-zone</span><span style="color:#000000;">: </span><span style="color:#0000FF;">GMT+8</span></span>
<span class="line"><span style="color:#000000;">  </span></span>
<span class="line"><span style="color:#800000;">management</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#800000;">  endpoints</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#800000;">    web</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#800000;">      exposure</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#800000;">        include</span><span style="color:#000000;">: </span><span style="color:#0000FF;">&#39;*&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#008000;"># jwk配置</span></span>
<span class="line"><span style="color:#800000;">techease</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#800000;">  oauth2</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#800000;">    jwk</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#008000;">      # STANDARD CUSTOM</span></span>
<span class="line"><span style="color:#800000;">      certificate</span><span style="color:#000000;">: </span><span style="color:#0000FF;">CUSTOM</span></span>
<span class="line"><span style="color:#800000;">      jksKeyStore</span><span style="color:#000000;">: </span><span style="color:#0000FF;">cert/techease.pfx</span></span>
<span class="line"><span style="color:#800000;">      jksKeyPassword</span><span style="color:#000000;">: </span><span style="color:#098658;">123456</span></span>
<span class="line"><span style="color:#800000;">      jksStorePassword</span><span style="color:#000000;">: </span><span style="color:#098658;">123456</span></span>
<span class="line"><span style="color:#800000;">      jksKeyAlias</span><span style="color:#000000;">: </span><span style="color:#0000FF;">techease</span></span>
<span class="line"><span style="color:#008000;">	# 端点配置</span></span>
<span class="line"><span style="color:#800000;">  endpoint</span><span style="color:#000000;">: </span></span>
<span class="line"><span style="color:#800000;">    gatewayServiceUri</span><span style="color:#000000;">: </span><span style="color:#0000FF;">http://10.142.51.100:9100</span></span>
<span class="line"><span style="color:#800000;">    issuerUri</span><span style="color:#000000;">: </span><span style="color:#0000FF;">http://10.142.51.100:9100/auth</span></span>
<span class="line"><span style="color:#800000;">    tokenIntrospectionEndpoint</span><span style="color:#000000;">: </span><span style="color:#0000FF;">/token/check</span></span>
<span class="line"><span style="color:#800000;">    defaultClientId</span><span style="color:#000000;">: </span><span style="color:#0000FF;">a54efaae-56f3-441d-998e-542f9f57db9d</span></span>
<span class="line"><span style="color:#008000;">    # defaultRedirectUri: http://10.142.52.25:3100/%23/panel/index</span></span>
<span class="line"><span style="color:#800000;">    defaultRedirectUri</span><span style="color:#000000;">: </span><span style="color:#0000FF;">http://10.142.51.100:9200/%23/panel/index</span></span>
<span class="line"></span>
<span class="line"><span style="color:#008000;"># 用户密码解密密钥</span></span>
<span class="line"><span style="color:#800000;">rsa</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#800000;">  privateKey</span><span style="color:#000000;">: </span><span style="color:#AF00DB;">|</span></span>
<span class="line"><span style="color:#0000FF;">    MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAMb7baWJFLLZUVNc</span></span>
<span class="line"><span style="color:#0000FF;">    wF0SewQZWgbhMQnWIrBDkVPLKUt5TMEqD2b7jSoNACr0oupwMhK0DKWYebptdYzv</span></span>
<span class="line"><span style="color:#0000FF;">    +Z9faljuaNeJkSN5TKaHT8Oflc2Hi04Ix7uqW5HHyObNVfW8aRxAWd51t3NSqDV5</span></span>
<span class="line"><span style="color:#0000FF;">    DJw9S/nZCx7r4Odi3MAWkfkv56QhAgMBAAECgYBzRxau4EvtkZlcAlAvm5VJOqa9</span></span>
<span class="line"><span style="color:#0000FF;">    dZlDaZuPIpX/RaQW5Z9iCUwDDZkq031VZYU87OMVktoA1eUv7Fo93Ilxm4WwGXL7</span></span>
<span class="line"><span style="color:#0000FF;">    ZxWkAma7ES+mVfutRtPxPxAIlqfwNK0qCNNqpJZWTkFEmA7Z0NsE6IGfc5seAN4z</span></span>
<span class="line"><span style="color:#0000FF;">    7C0jQ6tzDqH0+i28AQJBAPX/mY7v+pk0/NvoHadkb4W+kokWBxtlBcX5/0iUJP7c</span></span>
<span class="line"><span style="color:#0000FF;">    acjSV5Pg9hTmDoZ9PqU5IQmNzI0xj80/LywS+Abc+akCQQDPEnk+zYgUV4uEfuZW</span></span>
<span class="line"><span style="color:#0000FF;">    CP98qs2112ltu313TsBRULvB91E8XCPJAIzHKlNe0+yADYzILeO4+T5xYFpCtVoU</span></span>
<span class="line"><span style="color:#0000FF;">    axG5AkAXHklBHJ5xbYBh7kNzKsYsTIea6H4Mfgb33xG1sW50oSQz4kimthqKRkCR</span></span>
<span class="line"><span style="color:#0000FF;">    NQ4BGwhWzIOvtTutb0Wwn6u9gWDZAkA5EbBUvLR6Vr5e39J/d69iHnjfWuT1lyy3</span></span>
<span class="line"><span style="color:#0000FF;">    Cv856fQ1OwIqjoJWTU5/PY0In4OYryNTsEIIoriw6os1w2F2KyQRAkEAst903EQx</span></span>
<span class="line"><span style="color:#0000FF;">    Z9iMM4X3D5c9QjhBdcflObA3cDoQ8j7F/G42RT/O+bZSCPMVfeUEs/1J9GruNRXJ</span></span>
<span class="line"><span style="color:#0000FF;">    KaTXlVoLzNhrMQ==</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="用户系统服务" tabindex="-1"><a class="header-anchor" href="#用户系统服务"><span>用户系统服务</span></a></h5><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span style="color:#800000;">spring</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#800000;">  redis</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#800000;">    host</span><span style="color:#000000;">: </span><span style="color:#098658;">10.142.51.100</span></span>
<span class="line"><span style="color:#800000;">    password</span><span style="color:#000000;">: </span><span style="color:#0000FF;">redis_Techsel2o19</span></span>
<span class="line"><span style="color:#800000;">    port</span><span style="color:#000000;">: </span><span style="color:#098658;">1090</span></span>
<span class="line"><span style="color:#008000;">  #数据库配置</span></span>
<span class="line"><span style="color:#800000;">  datasource</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#800000;">    driver-class-name</span><span style="color:#000000;">: </span><span style="color:#0000FF;">com.mysql.cj.jdbc.Driver</span></span>
<span class="line"><span style="color:#800000;">    url</span><span style="color:#000000;">: </span><span style="color:#0000FF;">jdbc:mysql://10.142.51.100:1170/usercenter?useUnicode=true&amp;characterEncoding=utf-8&amp;useSSL=false&amp;serverTimezone=Asia/Shanghai</span></span>
<span class="line"><span style="color:#800000;">    username</span><span style="color:#000000;">: </span><span style="color:#0000FF;">root</span></span>
<span class="line"><span style="color:#800000;">    password</span><span style="color:#000000;">: </span><span style="color:#0000FF;">mysql_Techsel2o19</span></span>
<span class="line"><span style="color:#800000;">    druid</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#800000;">      initial-size</span><span style="color:#000000;">:  </span><span style="color:#098658;">2</span></span>
<span class="line"><span style="color:#800000;">      max-active</span><span style="color:#000000;">:  </span><span style="color:#098658;">10</span></span>
<span class="line"><span style="color:#800000;">      min-idle</span><span style="color:#000000;">:  </span><span style="color:#098658;">1</span></span>
<span class="line"><span style="color:#800000;">      max-wait</span><span style="color:#000000;">:  </span><span style="color:#098658;">60000</span></span>
<span class="line"><span style="color:#800000;">      time-between-log-stats-millis</span><span style="color:#000000;">: </span><span style="color:#098658;">60000</span></span>
<span class="line"><span style="color:#800000;">      min-evictable-idle-time-millis</span><span style="color:#000000;">: </span><span style="color:#098658;">300000</span></span>
<span class="line"><span style="color:#800000;">      pool-prepared-statements</span><span style="color:#000000;">:  </span><span style="color:#0000FF;">true</span></span>
<span class="line"><span style="color:#800000;">      max-pool-prepared-statement-per-connection-size</span><span style="color:#000000;">:  </span><span style="color:#098658;">20</span></span>
<span class="line"><span style="color:#800000;">      validation-query</span><span style="color:#000000;">:  </span><span style="color:#0000FF;">SELECT 1 FROM DUAL</span></span>
<span class="line"><span style="color:#800000;">      test-on-borrow</span><span style="color:#000000;">:  </span><span style="color:#0000FF;">false</span></span>
<span class="line"><span style="color:#800000;">      test-on-return</span><span style="color:#000000;">:  </span><span style="color:#0000FF;">false</span></span>
<span class="line"><span style="color:#800000;">      test-while-idle</span><span style="color:#000000;">:  </span><span style="color:#0000FF;">true</span></span>
<span class="line"><span style="color:#800000;">      time-between-eviction-runs-millis</span><span style="color:#000000;">:  </span><span style="color:#098658;">60000</span></span>
<span class="line"><span style="color:#800000;">      max-open-prepared-statements</span><span style="color:#000000;">: </span><span style="color:#098658;">20</span></span>
<span class="line"><span style="color:#800000;">      filters</span><span style="color:#000000;">: </span><span style="color:#0000FF;">stat,wall</span></span>
<span class="line"><span style="color:#800000;">      stat-view-servlet</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#800000;">        url-pattern</span><span style="color:#000000;">: </span><span style="color:#A31515;">&quot;/druid/*&quot;</span></span>
<span class="line"><span style="color:#008000;">        #allow: 127.0.0.1,192.168.163.1</span></span>
<span class="line"><span style="color:#008000;">        #deny: 192.168.1.73</span></span>
<span class="line"><span style="color:#800000;">        reset-enable</span><span style="color:#000000;">: </span><span style="color:#0000FF;">false</span></span>
<span class="line"><span style="color:#800000;">        login-username</span><span style="color:#000000;">: </span><span style="color:#0000FF;">admin</span></span>
<span class="line"><span style="color:#800000;">        login-password</span><span style="color:#000000;">: </span><span style="color:#098658;">123456</span></span>
<span class="line"></span>
<span class="line"><span style="color:#800000;">mybatis-plus</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#800000;">  type-aliases-package</span><span style="color:#000000;">: </span><span style="color:#0000FF;">com.techease.authcenter.system.pojo.model,com.techease.authcenter.system.pojo.vo</span></span>
<span class="line"><span style="color:#800000;">  mapper-locations</span><span style="color:#000000;">: </span><span style="color:#0000FF;">classpath*:/mapper/*.xml</span></span>
<span class="line"><span style="color:#800000;">  configuration</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#800000;">    jdbc-type-for-null</span><span style="color:#000000;">: </span><span style="color:#0000FF;">null</span></span>
<span class="line"><span style="color:#800000;">    map-underscore-to-camel-case</span><span style="color:#000000;">: </span><span style="color:#0000FF;">true</span></span>
<span class="line"><span style="color:#800000;">    log-impl</span><span style="color:#000000;">: </span><span style="color:#0000FF;">org.apache.ibatis.logging.stdout.StdOutImpl</span></span>
<span class="line"><span style="color:#800000;">  global-config</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#800000;">    banner</span><span style="color:#000000;">: </span><span style="color:#0000FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#800000;">management</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#800000;">  endpoints</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#800000;">    web</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#800000;">      exposure</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#800000;">        include</span><span style="color:#000000;">: </span><span style="color:#0000FF;">&#39;*&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#800000;">oss</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#800000;">  type</span><span style="color:#000000;">: </span><span style="color:#098658;">1</span></span>
<span class="line"><span style="color:#800000;">  minioEndpoint</span><span style="color:#000000;">: </span><span style="color:#0000FF;">http://10.142.51.100:9000</span></span>
<span class="line"><span style="color:#800000;">  minioAccessKey</span><span style="color:#000000;">: </span><span style="color:#0000FF;">minio</span></span>
<span class="line"><span style="color:#800000;">  minioSecretKey</span><span style="color:#000000;">: </span><span style="color:#0000FF;">minio123456</span></span>
<span class="line"><span style="color:#800000;">  minioBucketName</span><span style="color:#000000;">: </span><span style="color:#0000FF;">usercenter</span></span>
<span class="line"></span>
<span class="line"><span style="color:#008000;"># 身份证加解密密钥，密钥只能是16/24/32个字符</span></span>
<span class="line"><span style="color:#800000;">aes</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#800000;">  secret</span><span style="color:#000000;">: </span><span style="color:#0000FF;">keys_techsel123$</span></span>
<span class="line"><span style="color:#008000;"># 用户密码解密密钥</span></span>
<span class="line"><span style="color:#800000;">rsa</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#800000;">  privateKey</span><span style="color:#000000;">: </span><span style="color:#AF00DB;">|</span></span>
<span class="line"><span style="color:#0000FF;">    MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAMb7baWJFLLZUVNc</span></span>
<span class="line"><span style="color:#0000FF;">    wF0SewQZWgbhMQnWIrBDkVPLKUt5TMEqD2b7jSoNACr0oupwMhK0DKWYebptdYzv</span></span>
<span class="line"><span style="color:#0000FF;">    +Z9faljuaNeJkSN5TKaHT8Oflc2Hi04Ix7uqW5HHyObNVfW8aRxAWd51t3NSqDV5</span></span>
<span class="line"><span style="color:#0000FF;">    DJw9S/nZCx7r4Odi3MAWkfkv56QhAgMBAAECgYBzRxau4EvtkZlcAlAvm5VJOqa9</span></span>
<span class="line"><span style="color:#0000FF;">    dZlDaZuPIpX/RaQW5Z9iCUwDDZkq031VZYU87OMVktoA1eUv7Fo93Ilxm4WwGXL7</span></span>
<span class="line"><span style="color:#0000FF;">    ZxWkAma7ES+mVfutRtPxPxAIlqfwNK0qCNNqpJZWTkFEmA7Z0NsE6IGfc5seAN4z</span></span>
<span class="line"><span style="color:#0000FF;">    7C0jQ6tzDqH0+i28AQJBAPX/mY7v+pk0/NvoHadkb4W+kokWBxtlBcX5/0iUJP7c</span></span>
<span class="line"><span style="color:#0000FF;">    acjSV5Pg9hTmDoZ9PqU5IQmNzI0xj80/LywS+Abc+akCQQDPEnk+zYgUV4uEfuZW</span></span>
<span class="line"><span style="color:#0000FF;">    CP98qs2112ltu313TsBRULvB91E8XCPJAIzHKlNe0+yADYzILeO4+T5xYFpCtVoU</span></span>
<span class="line"><span style="color:#0000FF;">    axG5AkAXHklBHJ5xbYBh7kNzKsYsTIea6H4Mfgb33xG1sW50oSQz4kimthqKRkCR</span></span>
<span class="line"><span style="color:#0000FF;">    NQ4BGwhWzIOvtTutb0Wwn6u9gWDZAkA5EbBUvLR6Vr5e39J/d69iHnjfWuT1lyy3</span></span>
<span class="line"><span style="color:#0000FF;">    Cv856fQ1OwIqjoJWTU5/PY0In4OYryNTsEIIoriw6os1w2F2KyQRAkEAst903EQx</span></span>
<span class="line"><span style="color:#0000FF;">    Z9iMM4X3D5c9QjhBdcflObA3cDoQ8j7F/G42RT/O+bZSCPMVfeUEs/1J9GruNRXJ</span></span>
<span class="line"><span style="color:#0000FF;">    KaTXlVoLzNhrMQ==</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="认证服务-1" tabindex="-1"><a class="header-anchor" href="#认证服务-1"><span>认证服务</span></a></h4><p>基于Spring Authorization Server组件，对客户端验证授权，用户认证后，签发token。</p><h5 id="客户端认证" tabindex="-1"><a class="header-anchor" href="#客户端认证"><span>客户端认证</span></a></h5><p>调用spring组件中ClientSecretAuthenticationProvider的authenticate方法，对客户端进行认证。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span style="color:#0000FF;">public</span><span style="color:#0000FF;"> final</span><span style="color:#0000FF;"> class</span><span style="color:#267F99;"> ClientSecretAuthenticationProvider</span><span style="color:#0000FF;"> implements</span><span style="color:#267F99;"> AuthenticationProvider</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#0000FF;">public</span><span style="color:#267F99;"> Authentication</span><span style="color:#795E26;"> authenticate</span><span style="color:#000000;">(</span><span style="color:#267F99;">Authentication</span><span style="color:#001080;"> authentication</span><span style="color:#000000;">) </span><span style="color:#0000FF;">throws</span><span style="color:#267F99;"> AuthenticationException</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#267F99;">		OAuth2ClientAuthenticationToken</span><span style="color:#001080;"> clientAuthentication</span><span style="color:#000000;"> =</span></span>
<span class="line"><span style="color:#000000;">				(OAuth2ClientAuthenticationToken) authentication;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AF00DB;">		return</span><span style="color:#AF00DB;"> new</span><span style="color:#795E26;"> OAuth2ClientAuthenticationToken</span><span style="color:#000000;">(registeredClient,</span></span>
<span class="line"><span style="color:#001080;">				clientAuthentication</span><span style="color:#000000;">.</span><span style="color:#795E26;">getClientAuthenticationMethod</span><span style="color:#000000;">(), </span><span style="color:#001080;">clientAuthentication</span><span style="color:#000000;">.</span><span style="color:#795E26;">getCredentials</span><span style="color:#000000;">());</span></span>
<span class="line"><span style="color:#000000;">	}</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="用户认证" tabindex="-1"><a class="header-anchor" href="#用户认证"><span>用户认证</span></a></h5><p>调用CenterUserDetailsAuthenticationProvider中的authenticate、additionalAuthenticationChecks方法，查询用户信息，校验用户密码</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span style="color:#0000FF;">public</span><span style="color:#0000FF;"> class</span><span style="color:#267F99;"> CenterUserDetailsAuthenticationProvider</span><span style="color:#0000FF;"> extends</span><span style="color:#267F99;"> AbstractUserDetailsAuthenticationProvider</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#0000FF;">     protected</span><span style="color:#267F99;"> void</span><span style="color:#795E26;"> additionalAuthenticationChecks</span><span style="color:#000000;">(</span><span style="color:#267F99;">UserDetails</span><span style="color:#001080;"> userDetails</span><span style="color:#000000;">, </span><span style="color:#267F99;">UsernamePasswordAuthenticationToken</span><span style="color:#001080;"> authentication</span><span style="color:#000000;">) </span><span style="color:#0000FF;">throws</span><span style="color:#267F99;"> AuthenticationException</span><span style="color:#000000;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AF00DB;">        if</span><span style="color:#000000;"> (</span><span style="color:#001080;">authentication</span><span style="color:#000000;">.</span><span style="color:#795E26;">getCredentials</span><span style="color:#000000;">() == </span><span style="color:#0000FF;">null</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#0000FF;">            this</span><span style="color:#000000;">.</span><span style="color:#001080;">logger</span><span style="color:#000000;">.</span><span style="color:#795E26;">debug</span><span style="color:#000000;">(</span><span style="color:#A31515;">&quot;Failed to authenticate since no credentials provided&quot;</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#AF00DB;">            throw</span><span style="color:#AF00DB;"> new</span><span style="color:#795E26;"> BadCredentialsException</span><span style="color:#000000;">(</span><span style="color:#0000FF;">this</span><span style="color:#000000;">.</span><span style="color:#001080;">messages</span><span style="color:#000000;">.</span><span style="color:#795E26;">getMessage</span><span style="color:#000000;">(</span><span style="color:#A31515;">&quot;AbstractUserDetailsAuthenticationProvider.badCredentials&quot;</span><span style="color:#000000;">, </span><span style="color:#A31515;">&quot;Bad credentials&quot;</span><span style="color:#000000;">));</span></span>
<span class="line"><span style="color:#000000;">        } </span><span style="color:#AF00DB;">else</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#267F99;">            String</span><span style="color:#001080;"> presentedPassword</span><span style="color:#000000;"> = </span><span style="color:#001080;">authentication</span><span style="color:#000000;">.</span><span style="color:#795E26;">getCredentials</span><span style="color:#000000;">().</span><span style="color:#795E26;">toString</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#008000;">            //使用私钥对密码进行解密</span></span>
<span class="line"><span style="color:#AF00DB;">            try</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">                presentedPassword = </span><span style="color:#001080;">RSAUtil</span><span style="color:#000000;">.</span><span style="color:#795E26;">decryptByPrivate</span><span style="color:#000000;">(presentedPassword, </span><span style="color:#001080;">userDetailsService</span><span style="color:#000000;">.</span><span style="color:#795E26;">getPrivateKey</span><span style="color:#000000;">());</span></span>
<span class="line"><span style="color:#000000;">            } </span><span style="color:#AF00DB;">catch</span><span style="color:#000000;"> (</span><span style="color:#267F99;">Exception</span><span style="color:#001080;"> e</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#AF00DB;">                throw</span><span style="color:#AF00DB;"> new</span><span style="color:#795E26;"> BadCredentialsException</span><span style="color:#000000;">(</span><span style="color:#0000FF;">this</span><span style="color:#000000;">.</span><span style="color:#001080;">messages</span><span style="color:#000000;">.</span><span style="color:#795E26;">getMessage</span><span style="color:#000000;">(</span><span style="color:#A31515;">&quot;AbstractUserDetailsAuthenticationProvider.badCredentials&quot;</span><span style="color:#000000;">, </span><span style="color:#A31515;">&quot;Bad credentials&quot;</span><span style="color:#000000;">));</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#AF00DB;">            if</span><span style="color:#000000;">(userDetails </span><span style="color:#0000FF;">instanceof</span><span style="color:#000000;"> CenterUser){</span></span>
<span class="line"><span style="color:#267F99;">                String</span><span style="color:#001080;"> salt</span><span style="color:#000000;"> = ((CenterUser) userDetails).</span><span style="color:#795E26;">getSalt</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#000000;">                presentedPassword = presentedPassword+salt;</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#AF00DB;">            if</span><span style="color:#000000;"> (!</span><span style="color:#0000FF;">this</span><span style="color:#000000;">.</span><span style="color:#001080;">passwordEncoder</span><span style="color:#000000;">.</span><span style="color:#795E26;">matches</span><span style="color:#000000;">(presentedPassword, </span><span style="color:#001080;">userDetails</span><span style="color:#000000;">.</span><span style="color:#795E26;">getPassword</span><span style="color:#000000;">())) {</span></span>
<span class="line"><span style="color:#0000FF;">                this</span><span style="color:#000000;">.</span><span style="color:#001080;">logger</span><span style="color:#000000;">.</span><span style="color:#795E26;">debug</span><span style="color:#000000;">(</span><span style="color:#A31515;">&quot;Failed to authenticate since password does not match stored value&quot;</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#AF00DB;">                throw</span><span style="color:#AF00DB;"> new</span><span style="color:#795E26;"> BadCredentialsException</span><span style="color:#000000;">(</span><span style="color:#0000FF;">this</span><span style="color:#000000;">.</span><span style="color:#001080;">messages</span><span style="color:#000000;">.</span><span style="color:#795E26;">getMessage</span><span style="color:#000000;">(</span><span style="color:#A31515;">&quot;AbstractUserDetailsAuthenticationProvider.badCredentials&quot;</span><span style="color:#000000;">, </span><span style="color:#A31515;">&quot;Bad credentials&quot;</span><span style="color:#000000;">));</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="token签发" tabindex="-1"><a class="header-anchor" href="#token签发"><span>Token签发</span></a></h5><p>调用spring组件中OAuth2AuthorizationCodeAuthenticationProvider方法对授权码code，重定向uri校验后，使用自定义token构造器构造token</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span style="color:#0000FF;">public</span><span style="color:#0000FF;"> final</span><span style="color:#0000FF;"> class</span><span style="color:#267F99;"> OAuth2AuthorizationCodeAuthenticationProvider</span><span style="color:#0000FF;"> implements</span><span style="color:#267F99;"> AuthenticationProvider</span><span style="color:#000000;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0000FF;">    public</span><span style="color:#267F99;"> Authentication</span><span style="color:#795E26;"> authenticate</span><span style="color:#000000;">(</span><span style="color:#267F99;">Authentication</span><span style="color:#001080;"> authentication</span><span style="color:#000000;">) </span><span style="color:#0000FF;">throws</span><span style="color:#267F99;"> AuthenticationException</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#008000;">        //....</span></span>
<span class="line"><span style="color:#267F99;">    OAuth2TokenContext</span><span style="color:#001080;"> tokenContext</span><span style="color:#000000;"> = </span><span style="color:#001080;">tokenContextBuilder</span><span style="color:#000000;">.</span><span style="color:#795E26;">tokenType</span><span style="color:#000000;">(</span><span style="color:#001080;">OAuth2TokenType</span><span style="color:#000000;">.</span><span style="color:#001080;">ACCESS_TOKEN</span><span style="color:#000000;">).</span><span style="color:#795E26;">build</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#267F99;">		OAuth2Token</span><span style="color:#001080;"> generatedAccessToken</span><span style="color:#000000;"> = </span><span style="color:#0000FF;">this</span><span style="color:#000000;">.</span><span style="color:#001080;">tokenGenerator</span><span style="color:#000000;">.</span><span style="color:#795E26;">generate</span><span style="color:#000000;">(tokenContext);</span></span>
<span class="line"><span style="color:#008000;">       //....</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span style="color:#0000FF;">public</span><span style="color:#0000FF;"> class</span><span style="color:#267F99;"> CenterJwtGenerator</span><span style="color:#0000FF;"> implements</span><span style="color:#267F99;"> OAuth2TokenGenerator</span><span style="color:#000000;">&lt;</span><span style="color:#267F99;">Jwt</span><span style="color:#000000;">&gt; {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0000FF;">     public</span><span style="color:#267F99;"> Jwt</span><span style="color:#795E26;"> generate</span><span style="color:#000000;">(</span><span style="color:#267F99;">OAuth2TokenContext</span><span style="color:#001080;"> context</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#000000;">         </span></span>
<span class="line"><span style="color:#000000;">         </span></span>
<span class="line"><span style="color:#000000;">         </span></span>
<span class="line"><span style="color:#000000;">     }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="网关服务-1" tabindex="-1"><a class="header-anchor" href="#网关服务-1"><span>网关服务</span></a></h4><p>基于Spring Cloud Gateway、spring security、Spring Cloud Loadbalancer组件，拦截用户请求。对用户访问的路径鉴权，校验token后，将请求转发到对应的服务。</p><h5 id="token校验" tabindex="-1"><a class="header-anchor" href="#token校验"><span>Token校验</span></a></h5><p>调用CenterOpaqueTokenIntrospector的introspect方法，对请求头中的token解析校验。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span style="color:#0000FF;">public</span><span style="color:#0000FF;"> class</span><span style="color:#267F99;"> CenterOpaqueTokenIntrospector</span><span style="color:#0000FF;"> implements</span><span style="color:#267F99;"> ReactiveOpaqueTokenIntrospector</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">    </span></span>
<span class="line"><span style="color:#0000FF;">    public</span><span style="color:#267F99;"> Mono</span><span style="color:#000000;">&lt;</span><span style="color:#267F99;">OAuth2AuthenticatedPrincipal</span><span style="color:#000000;">&gt; </span><span style="color:#795E26;">introspect</span><span style="color:#000000;">(</span><span style="color:#267F99;">String</span><span style="color:#001080;"> token</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#AF00DB;">        if</span><span style="color:#000000;">(</span><span style="color:#001080;">StringUtils</span><span style="color:#000000;">.</span><span style="color:#795E26;">isBlank</span><span style="color:#000000;">(token)){</span></span>
<span class="line"><span style="color:#AF00DB;">            return</span><span style="color:#001080;"> Mono</span><span style="color:#000000;">.</span><span style="color:#795E26;">error</span><span style="color:#000000;">(</span><span style="color:#AF00DB;">new</span><span style="color:#795E26;"> InvalidBearerTokenException</span><span style="color:#000000;">(</span><span style="color:#A31515;">&quot;token为空&quot;</span><span style="color:#000000;">));</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#267F99;">        String</span><span style="color:#001080;"> tokenType</span><span style="color:#000000;"> = </span><span style="color:#0000FF;">this</span><span style="color:#000000;">.</span><span style="color:#795E26;">judgeTokenType</span><span style="color:#000000;">(token);</span></span>
<span class="line"><span style="color:#AF00DB;">        if</span><span style="color:#000000;">(</span><span style="color:#001080;">StringUtils</span><span style="color:#000000;">.</span><span style="color:#795E26;">isBlank</span><span style="color:#000000;">(tokenType)){</span></span>
<span class="line"><span style="color:#AF00DB;">            return</span><span style="color:#001080;"> Mono</span><span style="color:#000000;">.</span><span style="color:#795E26;">error</span><span style="color:#000000;">(</span><span style="color:#AF00DB;">new</span><span style="color:#795E26;"> InvalidBearerTokenException</span><span style="color:#000000;">(</span><span style="color:#A31515;">&quot;token格式有误&quot;</span><span style="color:#000000;">));</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#008000;">        //TODO 若是jwt在这做解析，无法做登出，当前统一从数据库获取</span></span>
<span class="line"><span style="color:#267F99;">        CenterUser</span><span style="color:#001080;"> user</span><span style="color:#000000;"> = </span><span style="color:#0000FF;">null</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#AF00DB;">        switch</span><span style="color:#000000;">(tokenType){</span></span>
<span class="line"><span style="color:#AF00DB;">            case</span><span style="color:#000000;"> TOKEN_TYPE_SELF</span><span style="color:#AF00DB;">:</span></span>
<span class="line"><span style="color:#000000;">                user = </span><span style="color:#0000FF;">this</span><span style="color:#000000;">.</span><span style="color:#795E26;">dealJwt</span><span style="color:#000000;">(token);</span></span>
<span class="line"><span style="color:#AF00DB;">                break</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#AF00DB;">            case</span><span style="color:#000000;"> TOKEN_TYPE_REF</span><span style="color:#AF00DB;">:</span></span>
<span class="line"><span style="color:#000000;">                user = </span><span style="color:#0000FF;">this</span><span style="color:#000000;">.</span><span style="color:#795E26;">dealRef</span><span style="color:#000000;">(token);</span></span>
<span class="line"><span style="color:#AF00DB;">                break</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#AF00DB;">            default:</span></span>
<span class="line"><span style="color:#AF00DB;">                break</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AF00DB;">        if</span><span style="color:#000000;">(user == </span><span style="color:#0000FF;">null</span><span style="color:#000000;">){</span></span>
<span class="line"><span style="color:#AF00DB;">            throw</span><span style="color:#AF00DB;"> new</span><span style="color:#795E26;"> InvalidBearerTokenException</span><span style="color:#000000;">(</span><span style="color:#A31515;">&quot;token 无效&quot;</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AF00DB;">        return</span><span style="color:#001080;"> Mono</span><span style="color:#000000;">.</span><span style="color:#795E26;">just</span><span style="color:#000000;">(user);</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="鉴权管理器" tabindex="-1"><a class="header-anchor" href="#鉴权管理器"><span>鉴权管理器</span></a></h5><p>调用AuthorizationManager的checkUri方法对用户路径鉴权，根据白名单忽略鉴权。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span style="color:#0000FF;">public</span><span style="color:#0000FF;"> class</span><span style="color:#267F99;"> AuthorizationManager</span><span style="color:#0000FF;"> implements</span><span style="color:#267F99;"> ReactiveAuthorizationManager</span><span style="color:#000000;">&lt;</span><span style="color:#267F99;">AuthorizationContext</span><span style="color:#000000;">&gt; {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0000FF;">    private</span><span style="color:#267F99;"> boolean</span><span style="color:#795E26;"> checkUri</span><span style="color:#000000;">(</span><span style="color:#267F99;">ServerWebExchange</span><span style="color:#001080;"> exchange</span><span style="color:#000000;">,</span><span style="color:#267F99;">Authentication</span><span style="color:#001080;"> auth</span><span style="color:#000000;">){</span></span>
<span class="line"><span style="color:#267F99;">            ServerHttpRequest</span><span style="color:#001080;"> request</span><span style="color:#000000;"> = </span><span style="color:#001080;">exchange</span><span style="color:#000000;">.</span><span style="color:#795E26;">getRequest</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#267F99;">            String</span><span style="color:#001080;"> method</span><span style="color:#000000;">= </span><span style="color:#001080;">request</span><span style="color:#000000;">.</span><span style="color:#795E26;">getMethodValue</span><span style="color:#000000;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#001080;">            ServerWebExchangeUtils</span><span style="color:#000000;">.</span><span style="color:#795E26;">addOriginalRequestUrl</span><span style="color:#000000;">(exchange, </span><span style="color:#001080;">request</span><span style="color:#000000;">.</span><span style="color:#795E26;">getURI</span><span style="color:#000000;">());</span></span>
<span class="line"><span style="color:#267F99;">            String</span><span style="color:#001080;"> rawPath</span><span style="color:#000000;"> = </span><span style="color:#001080;">request</span><span style="color:#000000;">.</span><span style="color:#795E26;">getURI</span><span style="color:#000000;">().</span><span style="color:#795E26;">getRawPath</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#267F99;">            String</span><span style="color:#001080;"> newPath</span><span style="color:#000000;"> = </span><span style="color:#A31515;">&quot;/&quot;</span><span style="color:#000000;"> + </span><span style="color:#001080;">Arrays</span><span style="color:#000000;">.</span><span style="color:#795E26;">stream</span><span style="color:#000000;">(</span><span style="color:#001080;">StringUtils</span><span style="color:#000000;">.</span><span style="color:#795E26;">tokenizeToStringArray</span><span style="color:#000000;">(rawPath, </span><span style="color:#A31515;">&quot;/&quot;</span><span style="color:#000000;">)).</span><span style="color:#795E26;">skip</span><span style="color:#000000;">(</span><span style="color:#098658;">1L</span><span style="color:#000000;">)</span></span>
<span class="line"><span style="color:#000000;">                    .</span><span style="color:#795E26;">collect</span><span style="color:#000000;">(</span><span style="color:#001080;">Collectors</span><span style="color:#000000;">.</span><span style="color:#795E26;">joining</span><span style="color:#000000;">(</span><span style="color:#A31515;">&quot;/&quot;</span><span style="color:#000000;">));</span></span>
<span class="line"><span style="color:#267F99;">            CenterUser</span><span style="color:#001080;"> centerUser</span><span style="color:#000000;"> = (CenterUser)</span><span style="color:#001080;">auth</span><span style="color:#000000;">.</span><span style="color:#795E26;">getPrincipal</span><span style="color:#000000;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#001080;">            SecurityContextHolder</span><span style="color:#000000;">.</span><span style="color:#795E26;">setUserId</span><span style="color:#000000;">(</span><span style="color:#001080;">centerUser</span><span style="color:#000000;">.</span><span style="color:#795E26;">getUserId</span><span style="color:#000000;">());</span></span>
<span class="line"><span style="color:#001080;">            SecurityContextHolder</span><span style="color:#000000;">.</span><span style="color:#795E26;">setTenantId</span><span style="color:#000000;">(</span><span style="color:#001080;">centerUser</span><span style="color:#000000;">.</span><span style="color:#795E26;">getTenantId</span><span style="color:#000000;">());</span></span>
<span class="line"><span style="color:#001080;">            SecurityContextHolder</span><span style="color:#000000;">.</span><span style="color:#795E26;">setUsername</span><span style="color:#000000;">(</span><span style="color:#001080;">centerUser</span><span style="color:#000000;">.</span><span style="color:#795E26;">getUsername</span><span style="color:#000000;">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#267F99;">            String</span><span style="color:#000000;">[] </span><span style="color:#001080;">urlArray</span><span style="color:#000000;"> = </span><span style="color:#001080;">rawPath</span><span style="color:#000000;">.</span><span style="color:#795E26;">split</span><span style="color:#000000;">(</span><span style="color:#A31515;">&quot;/&quot;</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#267F99;">            String</span><span style="color:#001080;"> path</span><span style="color:#000000;"> = urlArray[</span><span style="color:#098658;">1</span><span style="color:#000000;">];</span></span>
<span class="line"><span style="color:#267F99;">            String</span><span style="color:#001080;"> serviceName</span><span style="color:#000000;"> = </span><span style="color:#001080;">initService</span><span style="color:#000000;">.</span><span style="color:#795E26;">getServiceByPath</span><span style="color:#000000;">(path);</span></span>
<span class="line"><span style="color:#AF00DB;">            if</span><span style="color:#000000;">(</span><span style="color:#001080;">urlProperties</span><span style="color:#000000;">.</span><span style="color:#795E26;">isIgnoreAuth</span><span style="color:#000000;">(serviceName,method,newPath)){</span></span>
<span class="line"><span style="color:#AF00DB;">                if</span><span style="color:#000000;">(</span><span style="color:#001080;">log</span><span style="color:#000000;">.</span><span style="color:#795E26;">isInfoEnabled</span><span style="color:#000000;">()){</span></span>
<span class="line"><span style="color:#001080;">                    log</span><span style="color:#000000;">.</span><span style="color:#795E26;">info</span><span style="color:#000000;">(</span><span style="color:#A31515;">&quot;白名单地址：service:{},path:{},method:{}&quot;</span><span style="color:#000000;">,serviceName,newPath,method);</span></span>
<span class="line"><span style="color:#000000;">                }</span></span>
<span class="line"><span style="color:#AF00DB;">                return</span><span style="color:#0000FF;"> true</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#267F99;">            Future</span><span style="color:#000000;">&lt;</span><span style="color:#267F99;">Result</span><span style="color:#000000;">&lt;</span><span style="color:#267F99;">Boolean</span><span style="color:#000000;">&gt;&gt; </span><span style="color:#001080;">resultFuture</span><span style="color:#000000;"> = </span><span style="color:#001080;">anyoneApi</span><span style="color:#000000;">.</span><span style="color:#795E26;">checkUri</span><span style="color:#000000;">(</span><span style="color:#001080;">centerUser</span><span style="color:#000000;">.</span><span style="color:#795E26;">getUserId</span><span style="color:#000000;">(),method,newPath,serviceName);</span></span>
<span class="line"><span style="color:#267F99;">            Result</span><span style="color:#000000;">&lt;</span><span style="color:#267F99;">Boolean</span><span style="color:#000000;">&gt; </span><span style="color:#001080;">result</span><span style="color:#000000;"> = </span><span style="color:#0000FF;">null</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#AF00DB;">            try</span><span style="color:#000000;">{</span></span>
<span class="line"><span style="color:#000000;">                result = </span><span style="color:#001080;">resultFuture</span><span style="color:#000000;">.</span><span style="color:#795E26;">get</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#000000;">            }</span><span style="color:#AF00DB;">catch</span><span style="color:#000000;">(</span><span style="color:#267F99;">Exception</span><span style="color:#001080;"> e</span><span style="color:#000000;">){</span></span>
<span class="line"><span style="color:#001080;">                log</span><span style="color:#000000;">.</span><span style="color:#795E26;">error</span><span style="color:#000000;">(</span><span style="color:#A31515;">&quot;Exception:&quot;</span><span style="color:#000000;">,e);</span></span>
<span class="line"><span style="color:#AF00DB;">                throw</span><span style="color:#AF00DB;"> new</span><span style="color:#795E26;"> InvalidBearerTokenException</span><span style="color:#000000;">(</span><span style="color:#A31515;">&quot;鉴权失败&quot;</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#AF00DB;">            if</span><span style="color:#000000;">(</span><span style="color:#001080;">result</span><span style="color:#000000;">.</span><span style="color:#795E26;">getCode</span><span style="color:#000000;">()!= </span><span style="color:#001080;">BizCodeEnum</span><span style="color:#000000;">.</span><span style="color:#001080;">SUCCESS</span><span style="color:#000000;">.</span><span style="color:#795E26;">getCode</span><span style="color:#000000;">()){</span></span>
<span class="line"><span style="color:#001080;">                log</span><span style="color:#000000;">.</span><span style="color:#795E26;">error</span><span style="color:#000000;">(</span><span style="color:#A31515;">&quot;鉴权失败：service:{},path:{},method:{},userId:{}&quot;</span><span style="color:#000000;">,serviceName,newPath,method,</span><span style="color:#001080;">centerUser</span><span style="color:#000000;">.</span><span style="color:#795E26;">getUserId</span><span style="color:#000000;">());</span></span>
<span class="line"><span style="color:#AF00DB;">                return</span><span style="color:#0000FF;"> false</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#AF00DB;">            return</span><span style="color:#001080;"> result</span><span style="color:#000000;">.</span><span style="color:#795E26;">getData</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="用户信息写入请求头" tabindex="-1"><a class="header-anchor" href="#用户信息写入请求头"><span>用户信息写入请求头</span></a></h5><p>使用全局过滤器将token解析得到的用户信息写入到要转发的请求头中</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span style="color:#0000FF;">public</span><span style="color:#0000FF;"> class</span><span style="color:#267F99;"> AuthGlobalFilter</span><span style="color:#0000FF;"> implements</span><span style="color:#267F99;"> GlobalFilter</span><span style="color:#000000;">, </span><span style="color:#267F99;">Ordered</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">    @</span><span style="color:#267F99;">Override</span></span>
<span class="line"><span style="color:#0000FF;">    public</span><span style="color:#267F99;"> Mono</span><span style="color:#000000;">&lt;</span><span style="color:#267F99;">Void</span><span style="color:#000000;">&gt; </span><span style="color:#795E26;">filter</span><span style="color:#000000;">(</span><span style="color:#267F99;">ServerWebExchange</span><span style="color:#001080;"> exchange</span><span style="color:#000000;">, </span><span style="color:#267F99;">GatewayFilterChain</span><span style="color:#001080;"> chain</span><span style="color:#000000;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#267F99;">        ServerHttpRequest</span><span style="color:#001080;"> request</span><span style="color:#000000;"> = </span><span style="color:#001080;">exchange</span><span style="color:#000000;">.</span><span style="color:#795E26;">getRequest</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#267F99;">        ServerHttpRequest</span><span style="color:#000000;">.</span><span style="color:#267F99;">Builder</span><span style="color:#001080;"> mutate</span><span style="color:#000000;"> = </span><span style="color:#001080;">request</span><span style="color:#000000;">.</span><span style="color:#795E26;">mutate</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#267F99;">        String</span><span style="color:#001080;"> username</span><span style="color:#000000;"> = </span><span style="color:#001080;">SecurityContextHolder</span><span style="color:#000000;">.</span><span style="color:#795E26;">getUsername</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#267F99;">        String</span><span style="color:#001080;"> userId</span><span style="color:#000000;"> = </span><span style="color:#001080;">SecurityContextHolder</span><span style="color:#000000;">.</span><span style="color:#795E26;">getUserId</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#267F99;">        String</span><span style="color:#001080;"> tenantId</span><span style="color:#000000;"> = </span><span style="color:#001080;">SecurityContextHolder</span><span style="color:#000000;">.</span><span style="color:#795E26;">getTenantId</span><span style="color:#000000;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#008000;">        //把信息写到头部</span></span>
<span class="line"><span style="color:#795E26;">        addHeader</span><span style="color:#000000;">(mutate, </span><span style="color:#001080;">SecurityConstants</span><span style="color:#000000;">.</span><span style="color:#001080;">DETAILS_USER_ID</span><span style="color:#000000;">,userId);</span></span>
<span class="line"><span style="color:#795E26;">        addHeader</span><span style="color:#000000;">(mutate, </span><span style="color:#001080;">SecurityConstants</span><span style="color:#000000;">.</span><span style="color:#001080;">DETAILS_TENANT_ID</span><span style="color:#000000;">,tenantId);</span></span>
<span class="line"><span style="color:#795E26;">        addHeader</span><span style="color:#000000;">(mutate, </span><span style="color:#001080;">SecurityConstants</span><span style="color:#000000;">.</span><span style="color:#001080;">DETAILS_USERNAME</span><span style="color:#000000;">,username);</span></span>
<span class="line"><span style="color:#001080;">        SecurityContextHolder</span><span style="color:#000000;">.</span><span style="color:#795E26;">remove</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#AF00DB;">        return</span><span style="color:#001080;"> chain</span><span style="color:#000000;">.</span><span style="color:#795E26;">filter</span><span style="color:#000000;">(</span><span style="color:#001080;">exchange</span><span style="color:#000000;">.</span><span style="color:#795E26;">mutate</span><span style="color:#000000;">().</span><span style="color:#795E26;">request</span><span style="color:#000000;">(</span><span style="color:#001080;">mutate</span><span style="color:#000000;">.</span><span style="color:#795E26;">build</span><span style="color:#000000;">()).</span><span style="color:#795E26;">build</span><span style="color:#000000;">());</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0000FF;">    private</span><span style="color:#267F99;"> void</span><span style="color:#795E26;"> addHeader</span><span style="color:#000000;">(</span><span style="color:#267F99;">ServerHttpRequest</span><span style="color:#000000;">.</span><span style="color:#267F99;">Builder</span><span style="color:#001080;"> mutate</span><span style="color:#000000;">, </span><span style="color:#267F99;">String</span><span style="color:#001080;"> name</span><span style="color:#000000;">, </span><span style="color:#267F99;">Object</span><span style="color:#001080;"> value</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#AF00DB;">        if</span><span style="color:#000000;"> (value == </span><span style="color:#0000FF;">null</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#AF00DB;">            return</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#267F99;">        String</span><span style="color:#001080;"> valueStr</span><span style="color:#000000;"> = </span><span style="color:#001080;">value</span><span style="color:#000000;">.</span><span style="color:#795E26;">toString</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#001080;">        mutate</span><span style="color:#000000;">.</span><span style="color:#795E26;">header</span><span style="color:#000000;">(name, valueStr);</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">    @</span><span style="color:#267F99;">Override</span></span>
<span class="line"><span style="color:#0000FF;">    public</span><span style="color:#267F99;"> int</span><span style="color:#795E26;"> getOrder</span><span style="color:#000000;">() {</span></span>
<span class="line"><span style="color:#AF00DB;">        return</span><span style="color:#098658;"> 0</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="用户系统服务-1" tabindex="-1"><a class="header-anchor" href="#用户系统服务-1"><span>用户系统服务</span></a></h4><p>基于springboot、 Apache Mybatis 、Mybatis Plus、mysql等技术，提供租户管理、平台管理、菜单管理、API管理、用户管理、角色权限管理、日志管理等功能</p><h5 id="请求头拦截器" tabindex="-1"><a class="header-anchor" href="#请求头拦截器"><span>请求头拦截器</span></a></h5><p>通过拦截器HeaderInterceptor，获取用户信息存放到上下文中</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>public class HeaderInterceptor implements AsyncHandlerInterceptor {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {</span></span>
<span class="line"><span>        if (!(handler instanceof HandlerMethod)) {</span></span>
<span class="line"><span>            return true;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        SecurityContextHolder.setUserId(WebUtils.getHeader(request, SecurityConstants.DETAILS_USER_ID));</span></span>
<span class="line"><span>        SecurityContextHolder.setUsername(WebUtils.getHeader(request,SecurityConstants.DETAILS_USERNAME));</span></span>
<span class="line"><span>        SecurityContextHolder.setTenantId(WebUtils.getHeader(request,SecurityConstants.DETAILS_TENANT_ID));</span></span>
<span class="line"><span>        //SecurityContextHolder.setTenantId(&quot;19264ac3de444b30bab436397daf900a&quot;);</span></span>
<span class="line"><span>        //SecurityContextHolder.setUserId(&quot;43b59399d55346dca94a80e9e77838f6&quot;);</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="全局异常处理器" tabindex="-1"><a class="header-anchor" href="#全局异常处理器"><span>全局异常处理器</span></a></h5><p>自定义全局异常处理器CustomExceptionHandler对参数异常、业务异常、系统异常统一处理</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span style="color:#000000;">@</span><span style="color:#267F99;">ControllerAdvice</span></span>
<span class="line"><span style="color:#0000FF;">public</span><span style="color:#0000FF;"> class</span><span style="color:#267F99;"> CustomExceptionHandler</span><span style="color:#000000;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">    @</span><span style="color:#267F99;">ExceptionHandler</span><span style="color:#000000;">(value= </span><span style="color:#001080;">BindException</span><span style="color:#000000;">.</span><span style="color:#001080;">class</span><span style="color:#000000;">)</span></span>
<span class="line"><span style="color:#000000;">    @</span><span style="color:#267F99;">ResponseBody</span></span>
<span class="line"><span style="color:#0000FF;">    public</span><span style="color:#267F99;"> Result</span><span style="color:#795E26;"> bindExceptionHandler</span><span style="color:#000000;">(</span><span style="color:#267F99;">HttpServletRequest</span><span style="color:#001080;"> request</span><span style="color:#000000;">, </span><span style="color:#267F99;">Exception</span><span style="color:#001080;"> e</span><span style="color:#000000;">){</span></span>
<span class="line"><span style="color:#001080;">        log</span><span style="color:#000000;">.</span><span style="color:#795E26;">error</span><span style="color:#000000;">(</span><span style="color:#A31515;">&quot;[参数校验异常] &quot;</span><span style="color:#000000;">,e);</span></span>
<span class="line"><span style="color:#267F99;">        BindException</span><span style="color:#001080;"> ex</span><span style="color:#000000;"> = (BindException)e;</span></span>
<span class="line"><span style="color:#267F99;">        List</span><span style="color:#000000;">&lt;</span><span style="color:#267F99;">ObjectError</span><span style="color:#000000;">&gt; </span><span style="color:#001080;">errors</span><span style="color:#000000;"> = </span><span style="color:#001080;">ex</span><span style="color:#000000;">.</span><span style="color:#795E26;">getAllErrors</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#267F99;">        ObjectError</span><span style="color:#001080;"> error</span><span style="color:#000000;">= </span><span style="color:#001080;">errors</span><span style="color:#000000;">.</span><span style="color:#795E26;">get</span><span style="color:#000000;">(</span><span style="color:#098658;">0</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#267F99;">        String</span><span style="color:#001080;"> msg</span><span style="color:#000000;"> = </span><span style="color:#001080;">error</span><span style="color:#000000;">.</span><span style="color:#795E26;">getDefaultMessage</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#AF00DB;">        return</span><span style="color:#001080;"> Result</span><span style="color:#000000;">.</span><span style="color:#795E26;">buildCodeAndMsg</span><span style="color:#000000;">(</span><span style="color:#001080;">BizCodeEnum</span><span style="color:#000000;">.</span><span style="color:#001080;">PARAM_ERROR</span><span style="color:#000000;">.</span><span style="color:#795E26;">getCode</span><span style="color:#000000;">(),msg);</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">    @</span><span style="color:#267F99;">ExceptionHandler</span><span style="color:#000000;">(value= </span><span style="color:#001080;">BizException</span><span style="color:#000000;">.</span><span style="color:#001080;">class</span><span style="color:#000000;">)</span></span>
<span class="line"><span style="color:#000000;">    @</span><span style="color:#267F99;">ResponseBody</span></span>
<span class="line"><span style="color:#0000FF;">    public</span><span style="color:#267F99;"> Result</span><span style="color:#795E26;"> bizExceptionHandle</span><span style="color:#000000;">(</span><span style="color:#267F99;">BizException</span><span style="color:#001080;"> e</span><span style="color:#000000;">){</span></span>
<span class="line"><span style="color:#001080;">        log</span><span style="color:#000000;">.</span><span style="color:#795E26;">error</span><span style="color:#000000;">(</span><span style="color:#A31515;">&quot;[业务异常] &quot;</span><span style="color:#000000;">,e);</span></span>
<span class="line"><span style="color:#AF00DB;">        return</span><span style="color:#001080;"> Result</span><span style="color:#000000;">.</span><span style="color:#795E26;">buildCodeAndMsg</span><span style="color:#000000;">(</span><span style="color:#001080;">e</span><span style="color:#000000;">.</span><span style="color:#795E26;">getCode</span><span style="color:#000000;">(),</span><span style="color:#001080;">e</span><span style="color:#000000;">.</span><span style="color:#795E26;">getMsg</span><span style="color:#000000;">());</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">    @</span><span style="color:#267F99;">ExceptionHandler</span><span style="color:#000000;">(value= </span><span style="color:#001080;">Exception</span><span style="color:#000000;">.</span><span style="color:#001080;">class</span><span style="color:#000000;">)</span></span>
<span class="line"><span style="color:#000000;">    @</span><span style="color:#267F99;">ResponseBody</span></span>
<span class="line"><span style="color:#0000FF;">    public</span><span style="color:#267F99;"> Result</span><span style="color:#795E26;"> exceptionHandle</span><span style="color:#000000;">(</span><span style="color:#267F99;">Exception</span><span style="color:#001080;"> e</span><span style="color:#000000;">){</span></span>
<span class="line"><span style="color:#001080;">        log</span><span style="color:#000000;">.</span><span style="color:#795E26;">error</span><span style="color:#000000;">(</span><span style="color:#A31515;">&quot;[系统异常] &quot;</span><span style="color:#000000;">,e);</span></span>
<span class="line"><span style="color:#AF00DB;">        return</span><span style="color:#001080;"> Result</span><span style="color:#000000;">.</span><span style="color:#795E26;">buildResult</span><span style="color:#000000;">(</span><span style="color:#001080;">BizCodeEnum</span><span style="color:#000000;">.</span><span style="color:#001080;">INNER_ERROR</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="后端接口" tabindex="-1"><a class="header-anchor" href="#后端接口"><span>后端接口</span></a></h3><h4 id="auth管理" tabindex="-1"><a class="header-anchor" href="#auth管理"><span>Auth管理</span></a></h4><h5 id="接口功能" tabindex="-1"><a class="header-anchor" href="#接口功能"><span>接口功能</span></a></h5><ol><li>token获取</li><li>token校验</li><li>用户登出</li><li>获取用户指定平台角色信息</li><li>获取用户可以访问地址</li></ol><h5 id="接口信息" tabindex="-1"><a class="header-anchor" href="#接口信息"><span>接口信息</span></a></h5><h6 id="_1、token获取" tabindex="-1"><a class="header-anchor" href="#_1、token获取"><span>1、token获取</span></a></h6><p><strong>注</strong>：刷新令牌也是该接口，将grant_type改为refresh_token 客户端模式，将grant_type改为client_credentials</p><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/auth/oauth2/token   POST</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>ContentType：\`application/x-www-form-urlencoded\`</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th><strong>名称</strong></th><th><strong>必填</strong></th><th><strong>描述</strong></th><th><strong>示例值</strong></th></tr></thead><tbody><tr><td>Authorization</td><td>是</td><td>base64(clientId:clientSecret)</td><td>Basic Y2xpZW50SWQ6MTIzNDU2</td></tr></tbody></table><blockquote><p>请求参数：Body Parameter</p></blockquote><table><thead><tr><th><strong>名称</strong></th><th><strong>必填</strong></th><th><strong>类型</strong></th><th><strong>描述</strong></th><th><strong>示例值</strong></th></tr></thead><tbody><tr><td>grant_type</td><td>是</td><td>string</td><td>认证方式：authorization_code，refresh_token，client_credentials</td><td>authorization_code/refresh_token</td></tr><tr><td>code</td><td>否</td><td>string</td><td>授权码模式必须，登陆成功后回调地址上携带的code，5分钟有效</td><td>TyT5ED77aD8DLh4oqd27bXTg1KJ-yWU_ V3VuvsxpL2I4O-AqklVMkjxnmWWy69o NvkKXP4QMszCfQeDxQUpbSRNRHYys- G8r1nz670DASwqdL89AljK_EKMZDtgCQbxZ</td></tr><tr><td>redirect_uri</td><td>否</td><td>string</td><td>授权码模式必须，回调地址</td><td></td></tr><tr><td>refresh_token</td><td>否</td><td>string</td><td>grant_type为refresh_token时必须</td><td></td></tr></tbody></table><blockquote><p>响应参数</p></blockquote><table><thead><tr><th><strong>名称</strong></th><th><strong>类型</strong></th><th><strong>必填</strong></th><th><strong>描述</strong></th><th><strong>示例值</strong></th></tr></thead><tbody><tr><td>code</td><td>Integer</td><td>是</td><td></td><td>0</td></tr><tr><td>msg</td><td>string</td><td>是</td><td></td><td>SUCCESS</td></tr><tr><td>data</td><td>string</td><td>是</td><td></td><td></td></tr><tr><td>access_token</td><td>string</td><td>是</td><td>token,后续请求都需要携带的值</td><td></td></tr><tr><td>expire_in</td><td>string</td><td>是</td><td>token时效，单位S</td><td>36000</td></tr><tr><td>refresh_token</td><td>string</td><td>否</td><td>刷新令牌，若支持，在token过期用其获取新的token</td><td></td></tr><tr><td>scope</td><td>string</td><td>否</td><td>授权范围</td><td>read write</td></tr><tr><td>token_type</td><td>string</td><td>是</td><td>令牌类型</td><td>Bearer</td></tr></tbody></table><blockquote><p>响应示例</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;code&quot;: &quot;0&quot;,</span></span>
<span class="line"><span>    &quot;msg&quot;: &quot;SUCCESS&quot;,</span></span>
<span class="line"><span>    &quot;data&quot;: {</span></span>
<span class="line"><span>        &quot;access_token&quot;: &quot;&quot;,</span></span>
<span class="line"><span>        &quot;expire_in&quot;: &quot;36000&quot;,</span></span>
<span class="line"><span>        &quot;refresh_token&quot;: &quot;atmTBbVonrhL5efPJyzO8Lh_06tbdBuwKNiCAFO1uVMdVS3uvuwTRr3h6mrvQMxY21omigDLuef81QwckA0jQKat5iLJE-BqmbrTK_Je7XmpkzA2wJazChr57UFJ8jUV&quot;,</span></span>
<span class="line"><span>        &quot;scope&quot;: &quot;read write&quot;,</span></span>
<span class="line"><span>        &quot;token_type&quot;: &quot;Bearer&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_2、token校验" tabindex="-1"><a class="header-anchor" href="#_2、token校验"><span>2、token校验</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/auth/token/check   GET</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>ContentType：application/x-www-form-urlencoded</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求参数: Query Parameter</p></blockquote><table><thead><tr><th><strong>名称</strong></th><th><strong>类型</strong></th><th><strong>必填</strong></th><th><strong>描述</strong></th><th><strong>示例值</strong></th></tr></thead><tbody><tr><td>token</td><td>string</td><td>是</td><td>令牌</td><td></td></tr></tbody></table><blockquote><p>响应参数</p></blockquote><table><thead><tr><th><strong>名称</strong></th><th><strong>类型</strong></th><th><strong>必填</strong></th><th><strong>描述</strong></th><th><strong>示例值</strong></th></tr></thead><tbody><tr><td>code</td><td>number</td><td>是</td><td>有效，返回0;其他返回401</td><td>0</td></tr><tr><td>data</td><td>object</td><td>是</td><td></td><td></td></tr><tr><td>accessToken</td><td>object</td><td>是</td><td>令牌相关信息</td><td></td></tr><tr><td>tokenValue</td><td>string</td><td>是</td><td>令牌值</td><td></td></tr><tr><td>tokenType</td><td>string</td><td>是</td><td>令牌类型</td><td>Bearer</td></tr><tr><td>issuedAt</td><td>string</td><td>是</td><td>生成时间</td><td>2022-08-26 14:30:27</td></tr><tr><td>expiresAt</td><td>string</td><td>是</td><td>过期时间</td><td>2022-08-27 00:30:27</td></tr><tr><td>scopes</td><td>array</td><td>是</td><td></td><td>[“read”,“write”]</td></tr><tr><td>refreshToken</td><td>object</td><td>是</td><td>刷新令牌</td><td></td></tr><tr><td>tokenValue</td><td>string</td><td>是</td><td></td><td></td></tr><tr><td>issuedAt</td><td>string</td><td>是</td><td></td><td>2022-08-26 14:30:27</td></tr><tr><td>expiresAt</td><td>string</td><td>是</td><td></td><td>2022-08-30 18:30:27</td></tr><tr><td>claims</td><td>object</td><td>是</td><td></td><td></td></tr><tr><td>sub</td><td>string</td><td>是</td><td></td><td>admin</td></tr><tr><td>aud</td><td>array</td><td>是</td><td></td><td>[“clientId”]</td></tr><tr><td>nbf</td><td>string</td><td>是</td><td></td><td>2022-08-26T06:30:27.060Z</td></tr><tr><td>scope</td><td>array</td><td>是</td><td></td><td>[“read”,“write”]</td></tr><tr><td>iss</td><td>string</td><td>是</td><td></td><td>http://127.0.0.1:9000/auth</td></tr><tr><td>exp</td><td>string</td><td>是</td><td></td><td>2022-08-26T16:30:27.060Z</td></tr><tr><td>iat</td><td>string</td><td>是</td><td></td><td>2022-08-26T06:30:27.060Z</td></tr><tr><td>user</td><td>object</td><td>是</td><td></td><td></td></tr><tr><td>username</td><td>string</td><td>是</td><td></td><td>admin</td></tr><tr><td>accountNonExpired</td><td>boolean</td><td>是</td><td></td><td>true</td></tr><tr><td>accountNonLocked</td><td>boolean</td><td>是</td><td></td><td>false</td></tr><tr><td>credentialsNonExpired</td><td>boolean</td><td>是</td><td></td><td>true</td></tr><tr><td>enabled</td><td>boolean</td><td>是</td><td></td><td>true</td></tr><tr><td>userId</td><td>string</td><td>是</td><td>用户ID</td><td></td></tr><tr><td>tenantId</td><td>string</td><td>是</td><td>租户ID</td><td></td></tr><tr><td>phone</td><td>object</td><td>是</td><td>手机号</td><td>null</td></tr><tr><td>email</td><td>object</td><td>是</td><td>邮箱</td><td>null</td></tr><tr><td>name</td><td>string</td><td>是</td><td>姓名</td><td>admin</td></tr><tr><td>attributes</td><td>object</td><td>是</td><td></td><td></td></tr><tr><td>msg</td><td>string</td><td>是</td><td></td><td>SUCCESS</td></tr></tbody></table><blockquote><p>响应示例</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;code&quot;: 0,</span></span>
<span class="line"><span>    &quot;data&quot;: {</span></span>
<span class="line"><span>        &quot;accessToken&quot;: {</span></span>
<span class="line"><span>            &quot;tokenValue&quot;: &quot;&quot;,</span></span>
<span class="line"><span>            &quot;tokenType&quot;: &quot;Bearer&quot;,</span></span>
<span class="line"><span>            &quot;issuedAt&quot;: &quot;2022-08-26 14:30:27&quot;,</span></span>
<span class="line"><span>            &quot;expiresAt&quot;: &quot;2022-08-27 00:30:27&quot;,</span></span>
<span class="line"><span>            &quot;scopes&quot;: [</span></span>
<span class="line"><span>                &quot;read&quot;,</span></span>
<span class="line"><span>                &quot;write&quot;</span></span>
<span class="line"><span>            ]</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        &quot;refreshToken&quot;: {</span></span>
<span class="line"><span>            &quot;tokenValue&quot;: &quot;atmTBbVonrhL5efPJyzO8Lh_06tbdBuwKNiCAFO1uVMdVS3uvuwTRr3h6mrvQMxY21omigDLuef81QwckA0jQKat5iLJE-BqmbrTK_Je7XmpkzA2wJazChr57UFJ8jUV&quot;,</span></span>
<span class="line"><span>            &quot;issuedAt&quot;: &quot;2022-08-26 14:30:27&quot;,</span></span>
<span class="line"><span>            &quot;expiresAt&quot;: &quot;2022-08-30 18:30:27&quot;</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        &quot;claims&quot;: {</span></span>
<span class="line"><span>            &quot;sub&quot;: &quot;admin&quot;,</span></span>
<span class="line"><span>            &quot;aud&quot;: [</span></span>
<span class="line"><span>                &quot;clientId&quot;</span></span>
<span class="line"><span>            ],</span></span>
<span class="line"><span>            &quot;nbf&quot;: &quot;2022-08-26T06:30:27.060Z&quot;,</span></span>
<span class="line"><span>            &quot;scope&quot;: [</span></span>
<span class="line"><span>                &quot;read&quot;,</span></span>
<span class="line"><span>                &quot;write&quot;</span></span>
<span class="line"><span>            ],</span></span>
<span class="line"><span>            &quot;iss&quot;: &quot;http://127.0.0.1:9000/auth&quot;,</span></span>
<span class="line"><span>            &quot;exp&quot;: &quot;2022-08-26T16:30:27.060Z&quot;,</span></span>
<span class="line"><span>            &quot;iat&quot;: &quot;2022-08-26T06:30:27.060Z&quot;,</span></span>
<span class="line"><span>            &quot;user&quot;: {</span></span>
<span class="line"><span>                &quot;username&quot;: &quot;admin&quot;,</span></span>
<span class="line"><span>                &quot;accountNonExpired&quot;: true,</span></span>
<span class="line"><span>                &quot;accountNonLocked&quot;: false,</span></span>
<span class="line"><span>                &quot;credentialsNonExpired&quot;: true,</span></span>
<span class="line"><span>                &quot;enabled&quot;: true,</span></span>
<span class="line"><span>                &quot;userId&quot;: &quot;&quot;,</span></span>
<span class="line"><span>                &quot;tenantId&quot;: &quot;&quot;,</span></span>
<span class="line"><span>                &quot;phone&quot;: &quot;null&quot;,</span></span>
<span class="line"><span>                &quot;email&quot;: &quot;null&quot;,</span></span>
<span class="line"><span>                &quot;name&quot;: &quot;admin&quot;,</span></span>
<span class="line"><span>                &quot;attributes&quot;: {}</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    &quot;msg&quot;: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_3、用户退出" tabindex="-1"><a class="header-anchor" href="#_3、用户退出"><span>3、用户退出</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/auth/token/logout  DELETE</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>ContentType：application/x-www-form-urlencoded</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th><strong>名称</strong></th><th><strong>必填</strong></th><th><strong>描述</strong></th><th><strong>示例值</strong></th></tr></thead><tbody><tr><td>Authorization</td><td>是</td><td>token令牌</td><td>Bearer eyJraWQiOiI5NmIxZWIyZi0xMzci9.eyJzd</td></tr></tbody></table><blockquote><p>请求参数</p></blockquote><blockquote><p>响应参数</p></blockquote><table><thead><tr><th><strong>名称</strong></th><th><strong>类型</strong></th><th><strong>必填</strong></th><th><strong>描述</strong></th><th><strong>示例值</strong></th></tr></thead><tbody><tr><td>code</td><td>number</td><td>是</td><td></td><td>0</td></tr><tr><td>data</td><td>boolean</td><td>是</td><td></td><td>true</td></tr><tr><td>msg</td><td>string</td><td>是</td><td></td><td>SUCCESS</td></tr></tbody></table><blockquote><p>响应示例</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;code&quot;: 0,</span></span>
<span class="line"><span>    &quot;data&quot;: true,</span></span>
<span class="line"><span>    &quot;msg&quot;: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_4、获取用户指定平台角色信息" tabindex="-1"><a class="header-anchor" href="#_4、获取用户指定平台角色信息"><span>4、获取用户指定平台角色信息</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span> /admin/anyone/v1/client/roles GET</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>ContentType：application/x-www-form-urlencoded</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th><strong>名称</strong></th><th><strong>必填</strong></th><th><strong>描述</strong></th><th><strong>示例值</strong></th></tr></thead><tbody><tr><td>Authorization</td><td>是</td><td>Access_Token</td><td>Bearer Y2xpZW50SWQ6MTIzNDU2</td></tr></tbody></table><blockquote><p>请求参数：Query</p></blockquote><table><thead><tr><th><strong>名称</strong></th><th><strong>必填</strong></th><th><strong>类型</strong></th><th><strong>描述</strong></th><th><strong>示例值</strong></th></tr></thead><tbody><tr><td>clientId</td><td>是</td><td>string</td><td>客户端ID</td><td></td></tr></tbody></table><blockquote><p>响应参数</p></blockquote><table><thead><tr><th><strong>名称</strong></th><th><strong>类型</strong></th><th><strong>必填</strong></th><th><strong>描述</strong></th><th><strong>示例值</strong></th></tr></thead><tbody><tr><td>code</td><td>string</td><td>是</td><td></td><td>0</td></tr><tr><td>msg</td><td>string</td><td>是</td><td></td><td>SUCCESS</td></tr><tr><td>data</td><td>string</td><td>是</td><td></td><td></td></tr></tbody></table><blockquote><p>响应示例</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;code&quot;: &quot;0&quot;,</span></span>
<span class="line"><span>    &quot;msg&quot;: &quot;SUCCESS&quot;,</span></span>
<span class="line"><span>    &quot;data&quot;: [</span></span>
<span class="line"><span>		&quot;USERCORE_SUPER_ADMIN&quot;</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_5、获取用户可以访问的地址" tabindex="-1"><a class="header-anchor" href="#_5、获取用户可以访问的地址"><span>5、获取用户可以访问的地址</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/anyone/v1/userApis  GET</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>ContentType：application/x-www-form-urlencoded</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th><strong>名称</strong></th><th><strong>必填</strong></th><th><strong>描述</strong></th><th><strong>示例值</strong></th></tr></thead><tbody><tr><td>Authorization</td><td>是</td><td>Access_Token</td><td>Bearer Y2xpZW50SWQ6MTIzNDU2</td></tr></tbody></table><blockquote><p>请求参数</p></blockquote><blockquote><p>响应参数</p></blockquote><table><thead><tr><th><strong>名称</strong></th><th><strong>类型</strong></th><th><strong>必填</strong></th><th><strong>描述</strong></th><th><strong>示例值</strong></th></tr></thead><tbody><tr><td>code</td><td>Number</td><td>是</td><td></td><td>0</td></tr><tr><td>msg</td><td>string</td><td>是</td><td></td><td>SUCCESS</td></tr><tr><td>data</td><td>Array</td><td>是</td><td></td><td></td></tr><tr><td>uri</td><td>string</td><td></td><td>地址</td><td>/menu/v1/menu/{id}</td></tr><tr><td>serviceName</td><td>string</td><td></td><td>服务名称</td><td>center-system</td></tr><tr><td>method</td><td>string</td><td></td><td>请求方式</td><td>GET</td></tr></tbody></table><blockquote><p>响应示例</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;code&quot;: 0,</span></span>
<span class="line"><span>  &quot;data&quot;: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>          &quot;uri&quot;: &quot;/menu/v1/menu/{id}&quot;,</span></span>
<span class="line"><span>          &quot;serviceName&quot;: &quot;center-system&quot;,</span></span>
<span class="line"><span>          &quot;method&quot;: &quot;GET&quot;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;msg&quot;: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="租户管理" tabindex="-1"><a class="header-anchor" href="#租户管理"><span>租户管理</span></a></h4><h5 id="接口功能-1" tabindex="-1"><a class="header-anchor" href="#接口功能-1"><span>接口功能</span></a></h5><ol><li>新增租户时创建默认用户，绑定默认租户角色</li><li>租户信息增删改查</li><li>重置租户默认用户密码</li></ol><h5 id="接口信息-1" tabindex="-1"><a class="header-anchor" href="#接口信息-1"><span>接口信息</span></a></h5><h6 id="_1、新增" tabindex="-1"><a class="header-anchor" href="#_1、新增"><span>1、新增</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/tenant/v1    POST   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>name</td><td>string</td><td>是</td><td>租户名称</td></tr><tr><td>code</td><td>string</td><td>是</td><td>租户编码</td></tr><tr><td>status</td><td>string</td><td>是</td><td>租户状态，启用1 禁用0</td></tr><tr><td>tenantDomain</td><td>string</td><td>是</td><td>租户域名</td></tr><tr><td>startTime</td><td>string</td><td>是</td><td>租户开始时间（yyyy-MM-dd HH:mm:ss）</td></tr><tr><td>endTime</td><td>string</td><td>是</td><td>租户结束时间（yyyy-MM-dd HH:mm:ss）</td></tr><tr><td>username</td><td>string</td><td>是</td><td>租户默认用户名</td></tr><tr><td>password</td><td>string</td><td>是</td><td>租户密码</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_2、修改" tabindex="-1"><a class="header-anchor" href="#_2、修改"><span>2、修改</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/tenant/v1    PUT   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>id</td><td>string</td><td>是</td><td>唯一id</td></tr><tr><td>name</td><td>string</td><td>否</td><td>租户名称</td></tr><tr><td>code</td><td>string</td><td>否</td><td>租户编码</td></tr><tr><td>status</td><td>string</td><td>否</td><td>租户状态，启用1 禁用0</td></tr><tr><td>tenantDomain</td><td>string</td><td>否</td><td>租户域名</td></tr><tr><td>startTime</td><td>string</td><td>否</td><td>租户开始时间（yyyy-MM-dd HH:mm:ss）</td></tr><tr><td>endTime</td><td>string</td><td>否</td><td>租户结束时间（yyyy-MM-dd HH:mm:ss）</td></tr><tr><td>username</td><td>string</td><td>否</td><td>租户默认用户名</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_3、分页查询" tabindex="-1"><a class="header-anchor" href="#_3、分页查询"><span>3、分页查询</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/tenant/v1    GET   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>pageNum</td><td>number</td><td>是</td><td>当前页</td></tr><tr><td>pageSize</td><td>number</td><td>是</td><td>每页大小</td></tr><tr><td>name</td><td>string</td><td>否</td><td>租户名称</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;code&quot;: 0, </span></span>
<span class="line"><span>    &quot;data&quot;: {</span></span>
<span class="line"><span>        &quot;totalSize&quot;: 2, </span></span>
<span class="line"><span>        &quot;list&quot;: [</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1587041627729911810&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;whtest&quot;, </span></span>
<span class="line"><span>                &quot;code&quot;: &quot;whtest&quot;, </span></span>
<span class="line"><span>                &quot;tenantDomain&quot;: &quot;www.baidu.com&quot;, </span></span>
<span class="line"><span>                &quot;startTime&quot;: &quot;2022-10-01 00:00:00&quot;, </span></span>
<span class="line"><span>                &quot;endTime&quot;: &quot;2023-10-07 23:59:59&quot;, </span></span>
<span class="line"><span>                &quot;status&quot;: &quot;1&quot;, </span></span>
<span class="line"><span>                &quot;username&quot;: &quot;whtest&quot;, </span></span>
<span class="line"><span>                &quot;logoUri&quot;: null</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;19264ac3de444b30bab436397daf900a&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;泰易云&quot;, </span></span>
<span class="line"><span>                &quot;code&quot;: &quot;default_tenant&quot;, </span></span>
<span class="line"><span>                &quot;tenantDomain&quot;: &quot;user.techease.com&quot;, </span></span>
<span class="line"><span>                &quot;startTime&quot;: &quot;2022-07-20 16:57:26&quot;, </span></span>
<span class="line"><span>                &quot;endTime&quot;: &quot;2030-12-31 23:59:59&quot;, </span></span>
<span class="line"><span>                &quot;status&quot;: &quot;1&quot;, </span></span>
<span class="line"><span>                &quot;username&quot;: &quot;admin&quot;, </span></span>
<span class="line"><span>                &quot;logoUri&quot;: null</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>    }, </span></span>
<span class="line"><span>    &quot;msg&quot;: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_4、删除" tabindex="-1"><a class="header-anchor" href="#_4、删除"><span>4、删除</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/tenant/v1/{id}    DELETE   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>id</td><td>string</td><td>是</td><td>唯一id</td></tr></tbody></table><blockquote><p>响应参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>code</td><td>number</td><td>响应编码 0 或其他编码</td></tr><tr><td>data</td><td>number</td><td>响应数据</td></tr><tr><td>msg</td><td>string</td><td>响应描述</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_5、批量删除" tabindex="-1"><a class="header-anchor" href="#_5、批量删除"><span>5、批量删除</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/tenant/v1    DELETE   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>ids</td><td>string</td><td>是</td><td>id列表</td></tr></tbody></table><blockquote><p>响应参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>code</td><td>number</td><td>响应编码 0 或其他编码</td></tr><tr><td>data</td><td>number</td><td>响应数据</td></tr><tr><td>msg</td><td>string</td><td>响应描述</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_6、修改租户默认密码" tabindex="-1"><a class="header-anchor" href="#_6、修改租户默认密码"><span>6、修改租户默认密码</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/tenant/v1/updateDefaultPwd    PUT   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>id</td><td>string</td><td>是</td><td>租户id</td></tr><tr><td>currentPassword</td><td>string</td><td>是</td><td>当前用户密码</td></tr><tr><td>password</td><td>string</td><td>是</td><td>用户密码</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="用户管理" tabindex="-1"><a class="header-anchor" href="#用户管理"><span>用户管理</span></a></h4><h5 id="接口功能-2" tabindex="-1"><a class="header-anchor" href="#接口功能-2"><span>接口功能</span></a></h5><ol><li>用户信息增删改查</li><li>用户绑定角色，角色绑定用户</li><li>修改密码，个人基本信息</li></ol><h5 id="接口信息-2" tabindex="-1"><a class="header-anchor" href="#接口信息-2"><span>接口信息</span></a></h5><h6 id="_1、新增-1" tabindex="-1"><a class="header-anchor" href="#_1、新增-1"><span>1、新增</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/user/v1    POST   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>username</td><td>string</td><td>是</td><td>账号名</td></tr><tr><td>password</td><td>string</td><td>是</td><td>账号密码</td></tr><tr><td>nickName</td><td>string</td><td>否</td><td>昵称</td></tr><tr><td>realName</td><td>string</td><td>否</td><td>用户姓名</td></tr><tr><td>phone</td><td>string</td><td>否</td><td>手机号</td></tr><tr><td>email</td><td>string</td><td>否</td><td>邮箱</td></tr><tr><td>idCard</td><td>string</td><td>否</td><td>身份证号</td></tr><tr><td>gender</td><td>string</td><td>否</td><td>性别</td></tr><tr><td>lockFlag</td><td>string</td><td>否</td><td>用户是否锁定</td></tr><tr><td>avatarUrl</td><td>string</td><td>否</td><td>用户头像uri</td></tr><tr><td>idExtra</td><td>string</td><td>否</td><td>身份附加信息</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_2、修改用户基本信息" tabindex="-1"><a class="header-anchor" href="#_2、修改用户基本信息"><span>2、修改用户基本信息</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/user/v1    PUT   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>userId</td><td>string</td><td>是</td><td>唯一id</td></tr><tr><td>username</td><td>string</td><td>否</td><td>账号名</td></tr><tr><td>nickName</td><td>string</td><td>否</td><td>昵称</td></tr><tr><td>realName</td><td>string</td><td>否</td><td>用户姓名</td></tr><tr><td>phone</td><td>string</td><td>否</td><td>手机号</td></tr><tr><td>email</td><td>string</td><td>否</td><td>邮箱</td></tr><tr><td>idCard</td><td>string</td><td>否</td><td>身份证号</td></tr><tr><td>gender</td><td>string</td><td>否</td><td>性别</td></tr><tr><td>lockFlag</td><td>string</td><td>否</td><td>用户是否锁定</td></tr><tr><td>avatarUrl</td><td>string</td><td>否</td><td>用户头像uri</td></tr><tr><td>idExtra</td><td>string</td><td>否</td><td>身份附加信息</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_3、分页获取用户数据" tabindex="-1"><a class="header-anchor" href="#_3、分页获取用户数据"><span>3、分页获取用户数据</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/user/v1    GET   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>pageNum</td><td>number</td><td>是</td><td>当前页</td></tr><tr><td>pageSize</td><td>number</td><td>是</td><td>每页大小</td></tr><tr><td>username</td><td>string</td><td>否</td><td>账号名</td></tr><tr><td>phone</td><td>string</td><td>否</td><td>手机号</td></tr><tr><td>email</td><td>string</td><td>否</td><td>邮箱</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;code&quot;: 0, </span></span>
<span class="line"><span>    &quot;data&quot;: {</span></span>
<span class="line"><span>        &quot;totalSize&quot;: 1, </span></span>
<span class="line"><span>        &quot;list&quot;: [</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;userId&quot;: &quot;43b59399d55346dca94a80e9e77838f6&quot;, </span></span>
<span class="line"><span>                &quot;username&quot;: &quot;admin&quot;, </span></span>
<span class="line"><span>                &quot;phone&quot;: &quot;17356475181&quot;, </span></span>
<span class="line"><span>                &quot;email&quot;: &quot;3204835798@qq.com&quot;, </span></span>
<span class="line"><span>                &quot;idCard&quot;: &quot;7dbc56c6fad129761a06b84b7f5e811076b0da9d99cf7cffe832fdee7a7c2b46&quot;, </span></span>
<span class="line"><span>                &quot;idExtra&quot;: &quot;江苏省南京市&quot;, </span></span>
<span class="line"><span>                &quot;nickName&quot;: &quot;橘子皮&quot;, </span></span>
<span class="line"><span>                &quot;realName&quot;: &quot;王五&quot;, </span></span>
<span class="line"><span>                &quot;avatarUrl&quot;: &quot;http://10.142.51.100:9000/usercenter/user/2022/09/27/510af772b398499d84e910b82ef000dc.jpg&quot;, </span></span>
<span class="line"><span>                &quot;gender&quot;: 1, </span></span>
<span class="line"><span>                &quot;tenantId&quot;: &quot;19264ac3de444b30bab436397daf900a&quot;, </span></span>
<span class="line"><span>                &quot;lockFlag&quot;: &quot;0&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: &quot;2022-07-28 15:50:45&quot;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>    }, </span></span>
<span class="line"><span>    &quot;msg&quot;: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_4、删除用户" tabindex="-1"><a class="header-anchor" href="#_4、删除用户"><span>4、删除用户</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/user/v1/{id}    DELETE   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>id</td><td>string</td><td>是</td><td>唯一id(拼在路径中)</td></tr></tbody></table><blockquote><p>响应参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>code</td><td>number</td><td>响应编码 0 或其他编码</td></tr><tr><td>data</td><td>number</td><td>响应数据</td></tr><tr><td>msg</td><td>string</td><td>响应描述</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_5、修改用户状态" tabindex="-1"><a class="header-anchor" href="#_5、修改用户状态"><span>5、修改用户状态</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/user/v1/changeStatus   PUT</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>userId</td><td>string</td><td>是</td><td>用户id</td></tr><tr><td>status</td><td>string</td><td>是</td><td>锁定状态</td></tr></tbody></table><blockquote><p>响应参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>code</td><td>number</td><td>响应编码 0 或其他编码</td></tr><tr><td>data</td><td>number</td><td>响应数据</td></tr><tr><td>msg</td><td>string</td><td>响应描述</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_6、修改密码" tabindex="-1"><a class="header-anchor" href="#_6、修改密码"><span>6、修改密码</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/user/v1/changePwd    PUT   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>oldPwd</td><td>string</td><td>是</td><td>原密码</td></tr><tr><td>newPwd</td><td>string</td><td>是</td><td>新密码</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_7、修改个人基本信息" tabindex="-1"><a class="header-anchor" href="#_7、修改个人基本信息"><span>7、修改个人基本信息</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/user/v1    PUT   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>nickName</td><td>string</td><td>否</td><td>昵称</td></tr><tr><td>realName</td><td>string</td><td>否</td><td>用户姓名</td></tr><tr><td>idCard</td><td>string</td><td>否</td><td>身份证号</td></tr><tr><td>gender</td><td>string</td><td>否</td><td>性别</td></tr><tr><td>avatarUrl</td><td>string</td><td>否</td><td>用户头像uri</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_8、用户角色绑定" tabindex="-1"><a class="header-anchor" href="#_8、用户角色绑定"><span>8、用户角色绑定</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/user/v1/roleBind    PUT   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>userId</td><td>string</td><td>是</td><td>用户id</td></tr><tr><td>roleIdList</td><td>list</td><td>是</td><td>角色id列表</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="租户角色管理" tabindex="-1"><a class="header-anchor" href="#租户角色管理"><span>租户角色管理</span></a></h4><h5 id="接口功能-3" tabindex="-1"><a class="header-anchor" href="#接口功能-3"><span>接口功能</span></a></h5><ol><li>租户角色增删改查</li><li>获取所属租户所有客户端角色数据</li><li>获取指定组合角色已绑定的客户端角色</li><li>租户角色绑定客户端角色</li></ol><h5 id="接口信息-3" tabindex="-1"><a class="header-anchor" href="#接口信息-3"><span>接口信息</span></a></h5><h6 id="_1、新增-2" tabindex="-1"><a class="header-anchor" href="#_1、新增-2"><span>1、新增</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/tenant/role/v1    POST   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>roleName</td><td>string</td><td>是</td><td>角色名称</td></tr><tr><td>roleCode</td><td>string</td><td>是</td><td>角色编码</td></tr><tr><td>roleDesc</td><td>string</td><td>否</td><td>角色描述</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_2、修改-1" tabindex="-1"><a class="header-anchor" href="#_2、修改-1"><span>2、修改</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/tenant/role/v1    PUT   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>roleId</td><td>string</td><td>是</td><td>角色id</td></tr><tr><td>roleName</td><td>string</td><td>否</td><td>角色名称</td></tr><tr><td>roleCode</td><td>string</td><td>否</td><td>角色编码</td></tr><tr><td>roleDesc</td><td>string</td><td>否</td><td>角色描述</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_3、分页查询租户角色" tabindex="-1"><a class="header-anchor" href="#_3、分页查询租户角色"><span>3、分页查询租户角色</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/tenant/role/v1    GET   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>pageNum</td><td>number</td><td>是</td><td>当前页</td></tr><tr><td>pageSize</td><td>number</td><td>是</td><td>每页大小</td></tr><tr><td>roleName</td><td>string</td><td>否</td><td>角色名称</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;code&quot;: 0, </span></span>
<span class="line"><span>    &quot;data&quot;: {</span></span>
<span class="line"><span>        &quot;totalSize&quot;: 3, </span></span>
<span class="line"><span>        &quot;list&quot;: [</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;roleId&quot;: &quot;1554767453009256449&quot;, </span></span>
<span class="line"><span>                &quot;roleName&quot;: &quot;管理员&quot;, </span></span>
<span class="line"><span>                &quot;roleCode&quot;: &quot;DEAULT_ADMIN&quot;, </span></span>
<span class="line"><span>                &quot;roleDesc&quot;: &quot;角色描述：admin用户管理员&quot;, </span></span>
<span class="line"><span>                &quot;tenantId&quot;: &quot;19264ac3de444b30bab436397daf900a&quot;, </span></span>
<span class="line"><span>                &quot;defaultFlag&quot;: &quot;1&quot;</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;roleId&quot;: &quot;1572030862742589442&quot;, </span></span>
<span class="line"><span>                &quot;roleName&quot;: &quot;默认租户管理员&quot;, </span></span>
<span class="line"><span>                &quot;roleCode&quot;: &quot;TENANT_DEFAULT_ADMIN&quot;, </span></span>
<span class="line"><span>                &quot;roleDesc&quot;: &quot;租户默认用户中心平台管理员&quot;, </span></span>
<span class="line"><span>                &quot;tenantId&quot;: &quot;19264ac3de444b30bab436397daf900a&quot;, </span></span>
<span class="line"><span>                &quot;defaultFlag&quot;: &quot;1&quot;</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;roleId&quot;: &quot;1585533634798510081&quot;, </span></span>
<span class="line"><span>                &quot;roleName&quot;: &quot;陈晰测试啊&quot;, </span></span>
<span class="line"><span>                &quot;roleCode&quot;: &quot;陈晰测试啊&quot;, </span></span>
<span class="line"><span>                &quot;roleDesc&quot;: &quot;陈晰测试啊&quot;, </span></span>
<span class="line"><span>                &quot;tenantId&quot;: &quot;19264ac3de444b30bab436397daf900a&quot;, </span></span>
<span class="line"><span>                &quot;defaultFlag&quot;: &quot;0&quot;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>    }, </span></span>
<span class="line"><span>    &quot;msg&quot;: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_4、删除-1" tabindex="-1"><a class="header-anchor" href="#_4、删除-1"><span>4、删除</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/tenant/role/v1/{id}    DELETE   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>id</td><td>string</td><td>是</td><td>唯一id</td></tr></tbody></table><blockquote><p>响应参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>code</td><td>number</td><td>响应编码 0 或其他编码</td></tr><tr><td>data</td><td>number</td><td>响应数据</td></tr><tr><td>msg</td><td>string</td><td>响应描述</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_5、批量删除-1" tabindex="-1"><a class="header-anchor" href="#_5、批量删除-1"><span>5、批量删除</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/tenant/role/v1    DELETE   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>ids</td><td>list</td><td>是</td><td>id列表</td></tr></tbody></table><blockquote><p>响应参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>code</td><td>number</td><td>响应编码 0 或其他编码</td></tr><tr><td>data</td><td>number</td><td>响应数据</td></tr><tr><td>msg</td><td>string</td><td>响应描述</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_6、获取所属租户所有客户端角色数据" tabindex="-1"><a class="header-anchor" href="#_6、获取所属租户所有客户端角色数据"><span>6、获取所属租户所有客户端角色数据</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/tenant/role/v1/clientRole/list    GET   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;code&quot;: 0, </span></span>
<span class="line"><span>    &quot;data&quot;: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;clientId&quot;: &quot;a54efaae-56f3-441d-998e-542f9f57db9d&quot;, </span></span>
<span class="line"><span>            &quot;clientName&quot;: &quot;用户中心&quot;, </span></span>
<span class="line"><span>            &quot;roleList&quot;: [</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    &quot;id&quot;: &quot;1572039569111060481&quot;, </span></span>
<span class="line"><span>                    &quot;name&quot;: &quot;超级管理员&quot;, </span></span>
<span class="line"><span>                    &quot;code&quot;: &quot;USERCORE_SUPER_ADMIN&quot;, </span></span>
<span class="line"><span>                    &quot;desc&quot;: &quot;用户中心管理员&quot;, </span></span>
<span class="line"><span>                    &quot;createBy&quot;: &quot;&quot;, </span></span>
<span class="line"><span>                    &quot;updateBy&quot;: &quot;&quot;, </span></span>
<span class="line"><span>                    &quot;createTime&quot;: &quot;2022-09-20 09:46:55&quot;, </span></span>
<span class="line"><span>                    &quot;updateTime&quot;: &quot;2022-10-11 16:15:04&quot;, </span></span>
<span class="line"><span>                    &quot;delFlag&quot;: &quot;0&quot;, </span></span>
<span class="line"><span>                    &quot;registeredClientId&quot;: &quot;1fbba06130d44dc98584f83bd224aced&quot;, </span></span>
<span class="line"><span>                    &quot;clientId&quot;: null, </span></span>
<span class="line"><span>                    &quot;clientName&quot;: null, </span></span>
<span class="line"><span>                    &quot;defaultFlag&quot;: &quot;1&quot;</span></span>
<span class="line"><span>                }, </span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    &quot;id&quot;: &quot;1572045774676103169&quot;, </span></span>
<span class="line"><span>                    &quot;name&quot;: &quot;默认租户管理员&quot;, </span></span>
<span class="line"><span>                    &quot;code&quot;: &quot;DEFAULT_TENANT_ADMIN&quot;, </span></span>
<span class="line"><span>                    &quot;desc&quot;: &quot;默认租户用户拥有的用户中心权限&quot;, </span></span>
<span class="line"><span>                    &quot;createBy&quot;: &quot;&quot;, </span></span>
<span class="line"><span>                    &quot;updateBy&quot;: &quot;&quot;, </span></span>
<span class="line"><span>                    &quot;createTime&quot;: &quot;2022-09-20 10:11:35&quot;, </span></span>
<span class="line"><span>                    &quot;updateTime&quot;: &quot;2022-10-11 16:15:10&quot;, </span></span>
<span class="line"><span>                    &quot;delFlag&quot;: &quot;0&quot;, </span></span>
<span class="line"><span>                    &quot;registeredClientId&quot;: &quot;1fbba06130d44dc98584f83bd224aced&quot;, </span></span>
<span class="line"><span>                    &quot;clientId&quot;: null, </span></span>
<span class="line"><span>                    &quot;clientName&quot;: null, </span></span>
<span class="line"><span>                    &quot;defaultFlag&quot;: &quot;1&quot;</span></span>
<span class="line"><span>                }, </span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    &quot;id&quot;: &quot;1585534221669720065&quot;, </span></span>
<span class="line"><span>                    &quot;name&quot;: &quot;陈晰测试&quot;, </span></span>
<span class="line"><span>                    &quot;code&quot;: &quot;陈晰测试&quot;, </span></span>
<span class="line"><span>                    &quot;desc&quot;: &quot;陈晰测试&quot;, </span></span>
<span class="line"><span>                    &quot;createBy&quot;: &quot;43b59399d55346dca94a80e9e77838f6&quot;, </span></span>
<span class="line"><span>                    &quot;updateBy&quot;: &quot;&quot;, </span></span>
<span class="line"><span>                    &quot;createTime&quot;: &quot;2022-10-27 15:29:51&quot;, </span></span>
<span class="line"><span>                    &quot;updateTime&quot;: &quot;2022-10-28 10:00:58&quot;, </span></span>
<span class="line"><span>                    &quot;delFlag&quot;: &quot;0&quot;, </span></span>
<span class="line"><span>                    &quot;registeredClientId&quot;: &quot;1fbba06130d44dc98584f83bd224aced&quot;, </span></span>
<span class="line"><span>                    &quot;clientId&quot;: null, </span></span>
<span class="line"><span>                    &quot;clientName&quot;: null, </span></span>
<span class="line"><span>                    &quot;defaultFlag&quot;: &quot;0&quot;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            ]</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ], </span></span>
<span class="line"><span>    &quot;msg&quot;: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_7、获取指定组合角色已绑定的客户端角色" tabindex="-1"><a class="header-anchor" href="#_7、获取指定组合角色已绑定的客户端角色"><span>7、获取指定组合角色已绑定的客户端角色</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/tenant/role/v1/bound/list/{id}    GET   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;code&quot;: 0, </span></span>
<span class="line"><span>    &quot;data&quot;: {</span></span>
<span class="line"><span>        &quot;a54efaae-56f3-441d-998e-542f9f57db9d&quot;: [</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572039569111060481&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;超级管理员&quot;, </span></span>
<span class="line"><span>                &quot;code&quot;: &quot;USERCORE_SUPER_ADMIN&quot;, </span></span>
<span class="line"><span>                &quot;desc&quot;: &quot;用户中心管理员&quot;, </span></span>
<span class="line"><span>                &quot;createBy&quot;: &quot;&quot;, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: &quot;&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: &quot;2022-09-20 09:46:55&quot;, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: &quot;2022-10-11 16:15:04&quot;, </span></span>
<span class="line"><span>                &quot;delFlag&quot;: &quot;0&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: &quot;1fbba06130d44dc98584f83bd224aced&quot;, </span></span>
<span class="line"><span>                &quot;clientId&quot;: &quot;a54efaae-56f3-441d-998e-542f9f57db9d&quot;, </span></span>
<span class="line"><span>                &quot;clientName&quot;: &quot;用户中心&quot;, </span></span>
<span class="line"><span>                &quot;defaultFlag&quot;: &quot;1&quot;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>    }, </span></span>
<span class="line"><span>    &quot;msg&quot;: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_8、租户端角色绑定客户端角色" tabindex="-1"><a class="header-anchor" href="#_8、租户端角色绑定客户端角色"><span>8、租户端角色绑定客户端角色</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/tenant/role/v1/binding    POST   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>roleId</td><td>string</td><td>是</td><td>租户角色id</td></tr><tr><td>clientRoleIdList</td><td>list</td><td>是</td><td>平台角色id列表</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="平台管理" tabindex="-1"><a class="header-anchor" href="#平台管理"><span>平台管理</span></a></h4><h5 id="接口功能-4" tabindex="-1"><a class="header-anchor" href="#接口功能-4"><span>接口功能</span></a></h5><ol><li>平台信息增删改查</li><li>用户id获取关联平台</li><li>修改平台密码</li></ol><h5 id="接口信息-4" tabindex="-1"><a class="header-anchor" href="#接口信息-4"><span>接口信息</span></a></h5><h6 id="_1、新增-3" tabindex="-1"><a class="header-anchor" href="#_1、新增-3"><span>1、新增</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/client/v1    POST   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th><th>示例值</th></tr></thead><tbody><tr><td>clientId</td><td>string</td><td>是</td><td>平台id</td><td></td></tr><tr><td>clientSecret</td><td>string</td><td>是</td><td>平台密钥</td><td></td></tr><tr><td>clientSecretExpiresAt</td><td>string</td><td>是</td><td>密钥过期时间（yyyy-MM-dd HH:mm:ss）</td><td></td></tr><tr><td>clientName</td><td>string</td><td>是</td><td>平台名称</td><td></td></tr><tr><td>clientAuthenticationMethods</td><td>string</td><td>是</td><td>认证方式(多个以英文，分隔)</td><td>basic,client_secret_basic</td></tr><tr><td>authorizationGrantTypes</td><td>string</td><td>是</td><td>授权方式(多个以英文，分隔)</td><td>authorization_code,client_credentials</td></tr><tr><td>redirectUris</td><td>string</td><td>是</td><td>重定向地址(多个以英文，分隔)</td><td></td></tr><tr><td>accessTokenTimeToLive</td><td>number</td><td>是</td><td>访问令牌时间（单位s）</td><td>36000</td></tr><tr><td>refreshTokenTimeToLive</td><td>number</td><td>是</td><td>刷新令牌时间(单位s)</td><td>72000</td></tr><tr><td>metaJson</td><td>string</td><td>否</td><td>meta信息</td><td></td></tr><tr><td>scopes</td><td>string</td><td>否</td><td>访问范围</td><td>info,write,read</td></tr><tr><td>jwkSetUrl</td><td>string</td><td>否</td><td>jwkSetUrl</td><td></td></tr><tr><td>tokenEndpointAuthenticationSigningAlgorithm</td><td>string</td><td>否</td><td>签名算法</td><td>RS256</td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_2、修改-2" tabindex="-1"><a class="header-anchor" href="#_2、修改-2"><span>2、修改</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/client/v1    PUT   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th><th>示例值</th></tr></thead><tbody><tr><td>id</td><td>string</td><td>是</td><td>唯一id</td><td></td></tr><tr><td>clientId</td><td>string</td><td>是</td><td>平台标识</td><td></td></tr><tr><td>clientSecret</td><td>string</td><td>是</td><td>平台密钥</td><td></td></tr><tr><td>clientSecretExpiresAt</td><td>string</td><td>是</td><td>密钥过期时间（yyyy-MM-dd HH:mm:ss）</td><td></td></tr><tr><td>clientName</td><td>string</td><td>是</td><td>平台名称</td><td></td></tr><tr><td>clientAuthenticationMethods</td><td>string</td><td>是</td><td>认证方式(多个以英文，分隔)</td><td>basic,client_secret_basic</td></tr><tr><td>authorizationGrantTypes</td><td>string</td><td>是</td><td>授权方式(多个以英文，分隔)</td><td>authorization_code,client_credentials</td></tr><tr><td>redirectUris</td><td>string</td><td>是</td><td>重定向地址(多个以英文，分隔)</td><td></td></tr><tr><td>accessTokenTimeToLive</td><td>number</td><td>是</td><td>访问令牌时间（单位s）</td><td>36000</td></tr><tr><td>refreshTokenTimeToLive</td><td>number</td><td>是</td><td>刷新令牌时间(单位s)</td><td>72000</td></tr><tr><td>metaJson</td><td>string</td><td>否</td><td>meta信息</td><td></td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_3、分页查询-1" tabindex="-1"><a class="header-anchor" href="#_3、分页查询-1"><span>3、分页查询</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/tenant/v1    GET   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>pageNum</td><td>number</td><td>是</td><td>当前页</td></tr><tr><td>pageSize</td><td>number</td><td>是</td><td>每页大小</td></tr><tr><td>clientName</td><td>string</td><td>否</td><td>平台名称</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;code&quot;: 0, </span></span>
<span class="line"><span>    &quot;data&quot;: {</span></span>
<span class="line"><span>        &quot;totalSize&quot;: 1, </span></span>
<span class="line"><span>        &quot;list&quot;: [</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1fbba06130d44dc98584f83bd224aced&quot;, </span></span>
<span class="line"><span>                &quot;clientId&quot;: &quot;a54efaae-56f3-441d-998e-542f9f57db9d&quot;, </span></span>
<span class="line"><span>                &quot;clientName&quot;: &quot;用户中心&quot;, </span></span>
<span class="line"><span>                &quot;tenantId&quot;: &quot;19264ac3de444b30bab436397daf900a&quot;, </span></span>
<span class="line"><span>                &quot;imageUri&quot;: &quot;http://10.142.51.100:9000/usercenter/client/2022/09/30/8198c1fd3f6e4a4e9683d6aa24e1496e.png&quot;, </span></span>
<span class="line"><span>                &quot;redirectUris&quot;: null</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>    }, </span></span>
<span class="line"><span>    &quot;msg&quot;: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_4、删除-2" tabindex="-1"><a class="header-anchor" href="#_4、删除-2"><span>4、删除</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/tenant/v1/{id}    DELETE   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>id</td><td>string</td><td>是</td><td>唯一id</td></tr></tbody></table><blockquote><p>响应参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>code</td><td>number</td><td>响应编码 0 或其他编码</td></tr><tr><td>data</td><td>number</td><td>响应数据</td></tr><tr><td>msg</td><td>string</td><td>响应描述</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_5、获取指定用户关联平台" tabindex="-1"><a class="header-anchor" href="#_5、获取指定用户关联平台"><span>5、获取指定用户关联平台</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/client/v1/list/{id}    GET   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>id</td><td>string</td><td>是</td><td>id(拼在路径中)</td></tr></tbody></table><blockquote><p>响应参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>code</td><td>number</td><td>响应编码 0 或其他编码</td></tr><tr><td>data</td><td>number</td><td>响应数据</td></tr><tr><td>msg</td><td>string</td><td>响应描述</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;code&quot;: 0, </span></span>
<span class="line"><span>    &quot;data&quot;: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;id&quot;: &quot;1fbba06130d44dc98584f83bd224aced&quot;, </span></span>
<span class="line"><span>            &quot;clientId&quot;: &quot;a54efaae-56f3-441d-998e-542f9f57db9d&quot;, </span></span>
<span class="line"><span>            &quot;clientName&quot;: &quot;用户中心&quot;, </span></span>
<span class="line"><span>            &quot;tenantId&quot;: &quot;19264ac3de444b30bab436397daf900a&quot;, </span></span>
<span class="line"><span>            &quot;imageUri&quot;: &quot;http://10.142.51.100:9000/usercenter/client/2022/09/30/8198c1fd3f6e4a4e9683d6aa24e1496e.png&quot;, </span></span>
<span class="line"><span>            &quot;redirectUris&quot;: &quot;http://10.142.51.100:9200/#/app/index&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ], </span></span>
<span class="line"><span>    &quot;msg&quot;: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_6、修改平台密码" tabindex="-1"><a class="header-anchor" href="#_6、修改平台密码"><span>6、修改平台密码</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/tenant/v1/updateDefaultPwd    PUT   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>id</td><td>string</td><td>是</td><td>唯一id</td></tr><tr><td>password</td><td>string</td><td>是</td><td>当前用户密码</td></tr><tr><td>clientSecret</td><td>string</td><td>是</td><td>平台密钥</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="平台菜单管理" tabindex="-1"><a class="header-anchor" href="#平台菜单管理"><span>平台菜单管理</span></a></h4><h5 id="接口功能-5" tabindex="-1"><a class="header-anchor" href="#接口功能-5"><span>接口功能</span></a></h5><ol><li>平台菜单增删改查</li><li>平台标识clientId查询菜单树</li><li>平台标识clientId查询前端路由信息</li><li>获取当前用户下指定平台菜单权限编码</li><li>获取指定平台服务列表</li><li>获取接口列表</li></ol><h5 id="接口信息-5" tabindex="-1"><a class="header-anchor" href="#接口信息-5"><span>接口信息</span></a></h5><h6 id="_1、新增-4" tabindex="-1"><a class="header-anchor" href="#_1、新增-4"><span>1、新增</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/menu/v1    POST   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th><th>示例值</th></tr></thead><tbody><tr><td>clientId</td><td>string</td><td>是</td><td>平台标识</td><td></td></tr><tr><td>code</td><td>string</td><td>是</td><td>平台菜单编码</td><td></td></tr><tr><td>name</td><td>string</td><td>否</td><td>路由标识</td><td></td></tr><tr><td>clientName</td><td>string</td><td>是</td><td>平台名称</td><td></td></tr><tr><td>title</td><td>string</td><td>是</td><td>菜单名称</td><td></td></tr><tr><td>menuType</td><td>string</td><td>是</td><td>菜单类型</td><td></td></tr><tr><td>stateFlag</td><td>string</td><td>是</td><td>状态 0或1</td><td></td></tr><tr><td>parentId</td><td>string</td><td>是</td><td>父菜单ID</td><td></td></tr><tr><td>path</td><td>string</td><td>是</td><td>路径</td><td>/user</td></tr><tr><td>component</td><td>string</td><td>是</td><td>组件</td><td>/user/index</td></tr><tr><td>permission</td><td>string</td><td>否</td><td>权限编码</td><td></td></tr><tr><td>openType</td><td>string</td><td>否</td><td>打开方式</td><td></td></tr><tr><td>redirect</td><td>string</td><td>否</td><td>重定向地址</td><td></td></tr><tr><td>metaJson</td><td>string</td><td>否</td><td>meta信息</td><td></td></tr><tr><td>sortOrder</td><td>string</td><td>否</td><td>排序值</td><td></td></tr><tr><td>apiList</td><td>lisy</td><td>否</td><td>菜单列表</td><td></td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_2、修改-3" tabindex="-1"><a class="header-anchor" href="#_2、修改-3"><span>2、修改</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/menu/v1    PUT   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th><th>示例值</th></tr></thead><tbody><tr><td>id</td><td>string</td><td>是</td><td>唯一id</td><td></td></tr><tr><td>clientId</td><td>string</td><td>否</td><td>平台标识</td><td></td></tr><tr><td>code</td><td>string</td><td>否</td><td>平台菜单编码</td><td></td></tr><tr><td>name</td><td>string</td><td>否</td><td>路由标识</td><td></td></tr><tr><td>clientName</td><td>string</td><td>否</td><td>平台名称</td><td></td></tr><tr><td>title</td><td>string</td><td>否</td><td>菜单名称</td><td></td></tr><tr><td>menuType</td><td>string</td><td>否</td><td>菜单类型</td><td></td></tr><tr><td>stateFlag</td><td>string</td><td>否</td><td>状态 0或1</td><td></td></tr><tr><td>parentId</td><td>string</td><td>否</td><td>父菜单ID</td><td></td></tr><tr><td>path</td><td>string</td><td>否</td><td>路径</td><td>/user</td></tr><tr><td>component</td><td>string</td><td>否</td><td>组件</td><td>/user/index</td></tr><tr><td>permission</td><td>string</td><td>否</td><td>权限编码</td><td></td></tr><tr><td>openType</td><td>string</td><td>否</td><td>打开方式</td><td></td></tr><tr><td>redirect</td><td>string</td><td>否</td><td>重定向地址</td><td></td></tr><tr><td>metaJson</td><td>string</td><td>否</td><td>meta信息</td><td></td></tr><tr><td>sortOrder</td><td>string</td><td>否</td><td>排序值</td><td></td></tr><tr><td>apiList</td><td>lisy</td><td>否</td><td>菜单列表</td><td></td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_3、删除" tabindex="-1"><a class="header-anchor" href="#_3、删除"><span>3、删除</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/menu/v1/{id}    DELETE   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>id</td><td>string</td><td>是</td><td>菜单唯一id（拼在路径中）</td></tr></tbody></table><blockquote><p>响应参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>code</td><td>number</td><td>响应编码 0 或其他编码</td></tr><tr><td>data</td><td>number</td><td>响应数据</td></tr><tr><td>msg</td><td>string</td><td>响应描述</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_4、通过平台标识查询菜单树" tabindex="-1"><a class="header-anchor" href="#_4、通过平台标识查询菜单树"><span>4、通过平台标识查询菜单树</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/menu/v1/tree    GET   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>clientId</td><td>string</td><td>否</td><td>平台标识</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;code&quot;: 0, </span></span>
<span class="line"><span>    &quot;data&quot;: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;id&quot;: &quot;ef5ff8974c5d4282aed566ad83d25dfc&quot;, </span></span>
<span class="line"><span>            &quot;parentId&quot;: &quot;&quot;, </span></span>
<span class="line"><span>            &quot;weight&quot;: 1, </span></span>
<span class="line"><span>            &quot;name&quot;: &quot;plateformManager&quot;, </span></span>
<span class="line"><span>            &quot;sortOrder&quot;: 1, </span></span>
<span class="line"><span>            &quot;createBy&quot;: &quot;43b59399d55346dca94a80e9e77838f6&quot;, </span></span>
<span class="line"><span>            &quot;createTime&quot;: &quot;2022-08-02 16:39:27&quot;, </span></span>
<span class="line"><span>            &quot;updateBy&quot;: &quot;43b59399d55346dca94a80e9e77838f6&quot;, </span></span>
<span class="line"><span>            &quot;updateTime&quot;: &quot;2022-08-03 09:49:03&quot;, </span></span>
<span class="line"><span>            &quot;delFlag&quot;: &quot;0&quot;, </span></span>
<span class="line"><span>            &quot;registeredClientId&quot;: &quot;1fbba06130d44dc98584f83bd224aced&quot;, </span></span>
<span class="line"><span>            &quot;code&quot;: &quot;plateformManager&quot;, </span></span>
<span class="line"><span>            &quot;permission&quot;: &quot;&quot;, </span></span>
<span class="line"><span>            &quot;path&quot;: &quot;/plateformManager&quot;, </span></span>
<span class="line"><span>            &quot;icon&quot;: &quot;&quot;, </span></span>
<span class="line"><span>            &quot;keepAlive&quot;: &quot;1&quot;, </span></span>
<span class="line"><span>            &quot;menuType&quot;: &quot;01&quot;, </span></span>
<span class="line"><span>            &quot;component&quot;: &quot;&quot;, </span></span>
<span class="line"><span>            &quot;title&quot;: &quot;平台管理&quot;, </span></span>
<span class="line"><span>            &quot;openType&quot;: &quot;01&quot;, </span></span>
<span class="line"><span>            &quot;redirect&quot;: &quot;&quot;, </span></span>
<span class="line"><span>            &quot;generalFlag&quot;: &quot;0&quot;, </span></span>
<span class="line"><span>            &quot;stateFlag&quot;: &quot;1&quot;, </span></span>
<span class="line"><span>            &quot;metaJson&quot;: null, </span></span>
<span class="line"><span>            &quot;description&quot;: null, </span></span>
<span class="line"><span>            &quot;apiList&quot;: [ ], </span></span>
<span class="line"><span>            &quot;parentName&quot;: null, </span></span>
<span class="line"><span>            &quot;children&quot;: []</span></span>
<span class="line"><span>        }, </span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;id&quot;: &quot;61cbc5c662dd4d6cbbd2eec8de49376a&quot;, </span></span>
<span class="line"><span>            &quot;parentId&quot;: &quot;&quot;, </span></span>
<span class="line"><span>            &quot;weight&quot;: 2, </span></span>
<span class="line"><span>            &quot;name&quot;: &quot;userManager&quot;, </span></span>
<span class="line"><span>            &quot;sortOrder&quot;: 2, </span></span>
<span class="line"><span>            &quot;createBy&quot;: &quot;43b59399d55346dca94a80e9e77838f6&quot;, </span></span>
<span class="line"><span>            &quot;createTime&quot;: &quot;2022-08-02 16:54:50&quot;, </span></span>
<span class="line"><span>            &quot;updateBy&quot;: &quot;43b59399d55346dca94a80e9e77838f6&quot;, </span></span>
<span class="line"><span>            &quot;updateTime&quot;: &quot;2022-11-01 14:03:07&quot;, </span></span>
<span class="line"><span>            &quot;delFlag&quot;: &quot;0&quot;, </span></span>
<span class="line"><span>            &quot;registeredClientId&quot;: &quot;1fbba06130d44dc98584f83bd224aced&quot;, </span></span>
<span class="line"><span>            &quot;code&quot;: &quot;userManager&quot;, </span></span>
<span class="line"><span>            &quot;permission&quot;: &quot;userManager&quot;, </span></span>
<span class="line"><span>            &quot;path&quot;: &quot;/userManager&quot;, </span></span>
<span class="line"><span>            &quot;icon&quot;: &quot;&quot;, </span></span>
<span class="line"><span>            &quot;keepAlive&quot;: &quot;1&quot;, </span></span>
<span class="line"><span>            &quot;menuType&quot;: &quot;01&quot;, </span></span>
<span class="line"><span>            &quot;component&quot;: &quot;&quot;, </span></span>
<span class="line"><span>            &quot;title&quot;: &quot;用户管理&quot;, </span></span>
<span class="line"><span>            &quot;openType&quot;: &quot;01&quot;, </span></span>
<span class="line"><span>            &quot;redirect&quot;: &quot;&quot;, </span></span>
<span class="line"><span>            &quot;generalFlag&quot;: &quot;0&quot;, </span></span>
<span class="line"><span>            &quot;stateFlag&quot;: &quot;1&quot;, </span></span>
<span class="line"><span>            &quot;metaJson&quot;: &quot;{}&quot;, </span></span>
<span class="line"><span>            &quot;description&quot;: null, </span></span>
<span class="line"><span>            &quot;apiList&quot;: [ ], </span></span>
<span class="line"><span>            &quot;parentName&quot;: null, </span></span>
<span class="line"><span>            &quot;children&quot;: []</span></span>
<span class="line"><span>        }, </span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;id&quot;: &quot;76cb66dcb3614a9995ec3d0a5aaa2916&quot;, </span></span>
<span class="line"><span>            &quot;parentId&quot;: &quot;&quot;, </span></span>
<span class="line"><span>            &quot;weight&quot;: 3, </span></span>
<span class="line"><span>            &quot;name&quot;: &quot;systemManager&quot;, </span></span>
<span class="line"><span>            &quot;sortOrder&quot;: 3, </span></span>
<span class="line"><span>            &quot;createBy&quot;: &quot;43b59399d55346dca94a80e9e77838f6&quot;, </span></span>
<span class="line"><span>            &quot;createTime&quot;: &quot;2022-08-02 16:54:50&quot;, </span></span>
<span class="line"><span>            &quot;updateBy&quot;: &quot;43b59399d55346dca94a80e9e77838f6&quot;, </span></span>
<span class="line"><span>            &quot;updateTime&quot;: &quot;2022-08-03 09:48:58&quot;, </span></span>
<span class="line"><span>            &quot;delFlag&quot;: &quot;0&quot;, </span></span>
<span class="line"><span>            &quot;registeredClientId&quot;: &quot;1fbba06130d44dc98584f83bd224aced&quot;, </span></span>
<span class="line"><span>            &quot;code&quot;: &quot;systemManager&quot;, </span></span>
<span class="line"><span>            &quot;permission&quot;: &quot;&quot;, </span></span>
<span class="line"><span>            &quot;path&quot;: &quot;/systemManager&quot;, </span></span>
<span class="line"><span>            &quot;icon&quot;: &quot;&quot;, </span></span>
<span class="line"><span>            &quot;keepAlive&quot;: &quot;1&quot;, </span></span>
<span class="line"><span>            &quot;menuType&quot;: &quot;01&quot;, </span></span>
<span class="line"><span>            &quot;component&quot;: &quot;&quot;, </span></span>
<span class="line"><span>            &quot;title&quot;: &quot;系统监控&quot;, </span></span>
<span class="line"><span>            &quot;openType&quot;: &quot;01&quot;, </span></span>
<span class="line"><span>            &quot;redirect&quot;: &quot;&quot;, </span></span>
<span class="line"><span>            &quot;generalFlag&quot;: &quot;0&quot;, </span></span>
<span class="line"><span>            &quot;stateFlag&quot;: &quot;1&quot;, </span></span>
<span class="line"><span>            &quot;metaJson&quot;: null, </span></span>
<span class="line"><span>            &quot;description&quot;: null, </span></span>
<span class="line"><span>            &quot;apiList&quot;: [ ], </span></span>
<span class="line"><span>            &quot;parentName&quot;: null, </span></span>
<span class="line"><span>            &quot;children&quot;: []</span></span>
<span class="line"><span>        }, </span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;id&quot;: &quot;6ddf18b38a46401bb304fbaae1549c66&quot;, </span></span>
<span class="line"><span>            &quot;parentId&quot;: &quot;&quot;, </span></span>
<span class="line"><span>            &quot;weight&quot;: 4, </span></span>
<span class="line"><span>            &quot;name&quot;: &quot;backManager&quot;, </span></span>
<span class="line"><span>            &quot;sortOrder&quot;: 4, </span></span>
<span class="line"><span>            &quot;createBy&quot;: &quot;43b59399d55346dca94a80e9e77838f6&quot;, </span></span>
<span class="line"><span>            &quot;createTime&quot;: &quot;2022-08-02 16:54:50&quot;, </span></span>
<span class="line"><span>            &quot;updateBy&quot;: &quot;43b59399d55346dca94a80e9e77838f6&quot;, </span></span>
<span class="line"><span>            &quot;updateTime&quot;: &quot;2022-08-03 09:48:57&quot;, </span></span>
<span class="line"><span>            &quot;delFlag&quot;: &quot;0&quot;, </span></span>
<span class="line"><span>            &quot;registeredClientId&quot;: &quot;1fbba06130d44dc98584f83bd224aced&quot;, </span></span>
<span class="line"><span>            &quot;code&quot;: &quot;backManager&quot;, </span></span>
<span class="line"><span>            &quot;permission&quot;: &quot;&quot;, </span></span>
<span class="line"><span>            &quot;path&quot;: &quot;/backManager&quot;, </span></span>
<span class="line"><span>            &quot;icon&quot;: &quot;&quot;, </span></span>
<span class="line"><span>            &quot;keepAlive&quot;: &quot;1&quot;, </span></span>
<span class="line"><span>            &quot;menuType&quot;: &quot;01&quot;, </span></span>
<span class="line"><span>            &quot;component&quot;: &quot;&quot;, </span></span>
<span class="line"><span>            &quot;title&quot;: &quot;后台管理&quot;, </span></span>
<span class="line"><span>            &quot;openType&quot;: &quot;01&quot;, </span></span>
<span class="line"><span>            &quot;redirect&quot;: &quot;&quot;, </span></span>
<span class="line"><span>            &quot;generalFlag&quot;: &quot;0&quot;, </span></span>
<span class="line"><span>            &quot;stateFlag&quot;: &quot;1&quot;, </span></span>
<span class="line"><span>            &quot;metaJson&quot;: null, </span></span>
<span class="line"><span>            &quot;description&quot;: null, </span></span>
<span class="line"><span>            &quot;apiList&quot;: [ ], </span></span>
<span class="line"><span>            &quot;parentName&quot;: null, </span></span>
<span class="line"><span>            &quot;children&quot;: []</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ], </span></span>
<span class="line"><span>    &quot;msg&quot;: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_5、通过平台标识查询前端路由信息" tabindex="-1"><a class="header-anchor" href="#_5、通过平台标识查询前端路由信息"><span>5、通过平台标识查询前端路由信息</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/menu/v1/router    GET   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>clientId</td><td>string</td><td>是</td><td>平台标识</td></tr></tbody></table><blockquote><p>响应参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>描述</th></tr></thead></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;code&quot;: 0, </span></span>
<span class="line"><span>    &quot;data&quot;: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;path&quot;: &quot;/plateformManager&quot;, </span></span>
<span class="line"><span>            &quot;component&quot;: &quot;&quot;, </span></span>
<span class="line"><span>            &quot;children&quot;: [</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    &quot;path&quot;: &quot;/app&quot;, </span></span>
<span class="line"><span>                    &quot;component&quot;: &quot;/app/index&quot;, </span></span>
<span class="line"><span>                    &quot;children&quot;: [], </span></span>
<span class="line"><span>                    &quot;meta&quot;: {</span></span>
<span class="line"><span>                        &quot;hideMenu&quot;: true, </span></span>
<span class="line"><span>                        &quot;orderNo&quot;: 11, </span></span>
<span class="line"><span>                        &quot;icon&quot;: &quot;ion:documents-outline&quot;, </span></span>
<span class="line"><span>                        &quot;hideChildrenInMenu&quot;: false, </span></span>
<span class="line"><span>                        &quot;title&quot;: &quot;平台列表&quot;</span></span>
<span class="line"><span>                    }, </span></span>
<span class="line"><span>                    &quot;name&quot;: &quot;App&quot;</span></span>
<span class="line"><span>                }, </span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    &quot;path&quot;: &quot;/information&quot;, </span></span>
<span class="line"><span>                    &quot;component&quot;: &quot;/information/index&quot;, </span></span>
<span class="line"><span>                    &quot;children&quot;: [], </span></span>
<span class="line"><span>                    &quot;meta&quot;: {</span></span>
<span class="line"><span>                        &quot;hideMenu&quot;: &quot;false&quot;, </span></span>
<span class="line"><span>                        &quot;orderNo&quot;: 12, </span></span>
<span class="line"><span>                        &quot;icon&quot;: &quot;ion:documents-outline&quot;, </span></span>
<span class="line"><span>                        &quot;hideChildrenInMenu&quot;: false, </span></span>
<span class="line"><span>                        &quot;title&quot;: &quot;平台信息&quot;</span></span>
<span class="line"><span>                    }, </span></span>
<span class="line"><span>                    &quot;name&quot;: &quot;Information&quot;</span></span>
<span class="line"><span>                }, </span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    &quot;path&quot;: &quot;/menu&quot;, </span></span>
<span class="line"><span>                    &quot;component&quot;: &quot;/menu/index&quot;, </span></span>
<span class="line"><span>                    &quot;children&quot;: [], </span></span>
<span class="line"><span>                    &quot;meta&quot;: {</span></span>
<span class="line"><span>                        &quot;hideMenu&quot;: &quot;false&quot;, </span></span>
<span class="line"><span>                        &quot;orderNo&quot;: 13, </span></span>
<span class="line"><span>                        &quot;icon&quot;: &quot;ion:menu&quot;, </span></span>
<span class="line"><span>                        &quot;hideChildrenInMenu&quot;: false, </span></span>
<span class="line"><span>                        &quot;title&quot;: &quot;菜单管理&quot;</span></span>
<span class="line"><span>                    }, </span></span>
<span class="line"><span>                    &quot;name&quot;: &quot;Menu&quot;</span></span>
<span class="line"><span>                }, </span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    &quot;path&quot;: &quot;/interface&quot;, </span></span>
<span class="line"><span>                    &quot;component&quot;: &quot;/interface/index&quot;, </span></span>
<span class="line"><span>                    &quot;children&quot;: [], </span></span>
<span class="line"><span>                    &quot;meta&quot;: {</span></span>
<span class="line"><span>                        &quot;hideMenu&quot;: &quot;false&quot;, </span></span>
<span class="line"><span>                        &quot;orderNo&quot;: 14, </span></span>
<span class="line"><span>                        &quot;icon&quot;: &quot;ion:layers-outline&quot;, </span></span>
<span class="line"><span>                        &quot;hideChildrenInMenu&quot;: false, </span></span>
<span class="line"><span>                        &quot;title&quot;: &quot;接口管理&quot;</span></span>
<span class="line"><span>                    }, </span></span>
<span class="line"><span>                    &quot;name&quot;: &quot;Interface&quot;</span></span>
<span class="line"><span>                }, </span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    &quot;path&quot;: &quot;/PlatformRole&quot;, </span></span>
<span class="line"><span>                    &quot;component&quot;: &quot;/PlatformRole/index&quot;, </span></span>
<span class="line"><span>                    &quot;children&quot;: [], </span></span>
<span class="line"><span>                    &quot;meta&quot;: {</span></span>
<span class="line"><span>                        &quot;hideMenu&quot;: &quot;false&quot;, </span></span>
<span class="line"><span>                        &quot;orderNo&quot;: 15, </span></span>
<span class="line"><span>                        &quot;icon&quot;: &quot;ion:person-outline&quot;, </span></span>
<span class="line"><span>                        &quot;hideChildrenInMenu&quot;: false, </span></span>
<span class="line"><span>                        &quot;title&quot;: &quot;角色管理&quot;</span></span>
<span class="line"><span>                    }, </span></span>
<span class="line"><span>                    &quot;name&quot;: &quot;PlatformRole&quot;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            ], </span></span>
<span class="line"><span>            &quot;meta&quot;: { }, </span></span>
<span class="line"><span>            &quot;name&quot;: &quot;plateformManager&quot;</span></span>
<span class="line"><span>        }, </span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;path&quot;: &quot;/userManager&quot;, </span></span>
<span class="line"><span>            &quot;component&quot;: &quot;&quot;, </span></span>
<span class="line"><span>            &quot;children&quot;: [], </span></span>
<span class="line"><span>            &quot;meta&quot;: { }, </span></span>
<span class="line"><span>            &quot;name&quot;: &quot;userManager&quot;</span></span>
<span class="line"><span>        }, </span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;path&quot;: &quot;/systemManager&quot;, </span></span>
<span class="line"><span>            &quot;component&quot;: &quot;&quot;, </span></span>
<span class="line"><span>            &quot;children&quot;: [], </span></span>
<span class="line"><span>            &quot;meta&quot;: { }, </span></span>
<span class="line"><span>            &quot;name&quot;: &quot;systemManager&quot;</span></span>
<span class="line"><span>        }, </span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;path&quot;: &quot;/backManager&quot;, </span></span>
<span class="line"><span>            &quot;component&quot;: &quot;&quot;, </span></span>
<span class="line"><span>            &quot;children&quot;: [], </span></span>
<span class="line"><span>            &quot;meta&quot;: { }, </span></span>
<span class="line"><span>            &quot;name&quot;: &quot;backManager&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ], </span></span>
<span class="line"><span>    &quot;msg&quot;: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_6、获取当前用户下指定平台菜单权限编码" tabindex="-1"><a class="header-anchor" href="#_6、获取当前用户下指定平台菜单权限编码"><span>6、获取当前用户下指定平台菜单权限编码</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/menu/v1/{id}    GET   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>id</td><td>string</td><td>是</td><td>平台标识(拼在路径中)</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{&quot;code&quot;:0,&quot;data&quot;:[&quot;Information&quot;,&quot;tenant:add&quot;,&quot;tenant:update&quot;,&quot;tenant:list&quot;,&quot;tenant:delete&quot;,&quot;client:add&quot;,&quot;client:delete&quot;,&quot;menu:add&quot;,&quot;menu:delete&quot;,&quot;menu:update&quot;,&quot;api:import&quot;,&quot;api:delete&quot;,&quot;api:update&quot;,&quot;clientRole:add&quot;,&quot;clientRole:delete&quot;,&quot;clientRole:update&quot;,&quot;clientRole:bindMenu&quot;,&quot;api:add&quot;,&quot;user:add&quot;,&quot;user:update&quot;,&quot;user:delete&quot;,&quot;user:roleBind&quot;,&quot;role:add&quot;,&quot;role:update&quot;,&quot;role:delete&quot;,&quot;client:modifySecret&quot;,&quot;client:update&quot;,&quot;Dic&quot;,&quot;role:auth&quot;,&quot;role:bind&quot;,&quot;loginLog:delete&quot;,&quot;operationLog:delete&quot;,&quot;currentTenant:update&quot;,&quot;dict:add&quot;,&quot;dict:update&quot;,&quot;dict:delete&quot;,&quot;Menu&quot;,&quot;Role&quot;,&quot;Rolebind&quot;,&quot;userManager&quot;,&quot;backManager&quot;,&quot;SignIn&quot;,&quot;systemManager&quot;,&quot;PlatformRole&quot;,&quot;User&quot;,&quot;Tenant&quot;,&quot;Currency&quot;,&quot;App&quot;,&quot;LoginConfiguration&quot;,&quot;Interface&quot;,&quot;Operation&quot;,&quot;plateformManager&quot;],</span></span>
<span class="line"><span>&quot;msg&quot;:&quot;SUCCESS&quot;}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_7、获取指定平台服务列表" tabindex="-1"><a class="header-anchor" href="#_7、获取指定平台服务列表"><span>7、获取指定平台服务列表</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/menu/v1//serviceList/{id}    GET   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>id</td><td>string</td><td>是</td><td>平台标识(拼在路径中)</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>	&quot;code&quot;:0,</span></span>
<span class="line"><span>	&quot;data&quot;:[&quot;center-system&quot;],</span></span>
<span class="line"><span>	&quot;msg&quot;:&quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_8、获取接口列表" tabindex="-1"><a class="header-anchor" href="#_8、获取接口列表"><span>8、获取接口列表</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/menu/v1/api/list    GET   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>springApplicationName</td><td>string</td><td>是</td><td>服务名称</td></tr><tr><td>clientId</td><td>string</td><td>是</td><td>平台标识</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;code&quot;: 0, </span></span>
<span class="line"><span>    &quot;data&quot;: {</span></span>
<span class="line"><span>        &quot;AuthClientMenuController&quot;: [</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147032805387&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: null, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;AuthClientMenuController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;修改菜单&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;PUT&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/menu/v1&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: null, </span></span>
<span class="line"><span>                &quot;createBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>                &quot;type&quot;: null</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147032805391&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: null, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;AuthClientMenuController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;获取当前用户下指定平台菜单&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;GET&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/menu/v1/menu/{id}&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: null, </span></span>
<span class="line"><span>                &quot;createBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>                &quot;type&quot;: null</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147099914250&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: null, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;AuthClientMenuController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;获取接口列表&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;GET&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/menu/v1/api/list&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: null, </span></span>
<span class="line"><span>                &quot;createBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>                &quot;type&quot;: null</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147099914256&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: null, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;AuthClientMenuController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;通过id删除菜单&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;DELETE&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/menu/v1/{id}&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: null, </span></span>
<span class="line"><span>                &quot;createBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>                &quot;type&quot;: null</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147099914261&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: null, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;AuthClientMenuController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;通过用户角色id查询菜单Api信息&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;GET&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/menu/v1/menuApi/{roleId}&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: null, </span></span>
<span class="line"><span>                &quot;createBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>                &quot;type&quot;: null</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147099914268&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: null, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;AuthClientMenuController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;通过平台标识查询前端路由信息&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;GET&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/menu/v1/router&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: null, </span></span>
<span class="line"><span>                &quot;createBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>                &quot;type&quot;: null</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147167023119&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: null, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;AuthClientMenuController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;通过平台标识查询菜单树&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;GET&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/menu/v1/tree&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: null, </span></span>
<span class="line"><span>                &quot;createBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>                &quot;type&quot;: null</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147167023122&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: null, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;AuthClientMenuController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;获取指定平台服务列表&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;GET&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/menu/v1/serviceList/{id}&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: null, </span></span>
<span class="line"><span>                &quot;createBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>                &quot;type&quot;: null</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147167023123&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: null, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;AuthClientMenuController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;新增菜单&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;POST&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/menu/v1&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: null, </span></span>
<span class="line"><span>                &quot;createBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>                &quot;type&quot;: null</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        ], </span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        &quot;SysTenantController&quot;: [</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147032805388&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: null, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;SysTenantController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;修改租户信息&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;PUT&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/tenant/v1&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: null, </span></span>
<span class="line"><span>                &quot;createBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>                &quot;type&quot;: null</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147167023118&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: null, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;SysTenantController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;新增租户&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;POST&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/tenant/v1&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: null, </span></span>
<span class="line"><span>                &quot;createBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>                &quot;type&quot;: null</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147167023121&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: null, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;SysTenantController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;删除单个租户&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;DELETE&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/tenant/v1/{id}&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: null, </span></span>
<span class="line"><span>                &quot;createBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>                &quot;type&quot;: null</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1575729752687902727&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: null, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;SysTenantController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;修改租户默认用户密码&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;PUT&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/tenant/v1/updateDefaultPwd&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: null, </span></span>
<span class="line"><span>                &quot;createBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>                &quot;type&quot;: null</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1578938556401487888&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: null, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;SysTenantController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;修改当前租户&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;PUT&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/tenant/v1/currentTenant&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: null, </span></span>
<span class="line"><span>                &quot;createBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>                &quot;type&quot;: null</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1578983949508558855&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: null, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;SysTenantController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;获取当前租户&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;GET&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/tenant/v1/currentTenant&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: null, </span></span>
<span class="line"><span>                &quot;createBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>                &quot;type&quot;: null</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        ], </span></span>
<span class="line"><span>        &quot;SysLoginLogController&quot;: [</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147099914254&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: null, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;SysLoginLogController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;删除登录日志&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;DELETE&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/loginLog/v1/{id}&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: null, </span></span>
<span class="line"><span>                &quot;createBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>                &quot;type&quot;: null</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147099914283&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: null, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;SysLoginLogController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;分页获取登录日志&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;GET&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/loginLog/v1/page&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: null, </span></span>
<span class="line"><span>                &quot;createBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>                &quot;type&quot;: null</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1578938556464402456&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: null, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;SysLoginLogController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;批量删除登录日志&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;DELETE&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/loginLog/v1&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: null, </span></span>
<span class="line"><span>                &quot;createBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>                &quot;type&quot;: null</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        ], </span></span>
<span class="line"><span>        &quot;AuthClientRoleController&quot;: [</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147099914241&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: null, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;AuthClientRoleController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;角色绑定菜单&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;POST&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/role/v1/bindingMenu&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: null, </span></span>
<span class="line"><span>                &quot;createBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>                &quot;type&quot;: null</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147099914245&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: null, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;AuthClientRoleController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;删除平台角色&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;DELETE&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/role/v1/{id}&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: null, </span></span>
<span class="line"><span>                &quot;createBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>                &quot;type&quot;: null</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147099914251&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: null, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;AuthClientRoleController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;获取用户指定平台的角色列表&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;GET&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/role/v1/byClientId&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: null, </span></span>
<span class="line"><span>                &quot;createBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>                &quot;type&quot;: null</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147099914252&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: null, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;AuthClientRoleController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;增加平台角色&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;POST&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/role/v1&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: null, </span></span>
<span class="line"><span>                &quot;createBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>                &quot;type&quot;: null</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147099914267&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: null, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;AuthClientRoleController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;分页获取角色数据&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;GET&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/role/v1/page&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: null, </span></span>
<span class="line"><span>                &quot;createBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>                &quot;type&quot;: null</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147099914271&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: null, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;AuthClientRoleController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;批量删除平台角色&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;DELETE&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/role/v1&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: null, </span></span>
<span class="line"><span>                &quot;createBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>                &quot;type&quot;: null</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147167023111&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: null, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;AuthClientRoleController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;修改平台角色信息&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;PUT&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/role/v1&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: null, </span></span>
<span class="line"><span>                &quot;createBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>                &quot;type&quot;: null</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147167023115&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: null, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;AuthClientRoleController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;获取指定角色绑定的菜单&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;GET&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/role/v1/{id}&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: null, </span></span>
<span class="line"><span>                &quot;createBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>                &quot;type&quot;: null</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        ], </span></span>
<span class="line"><span>        &quot;SysDictItemController&quot;: [</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147032805389&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: null, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;SysDictItemController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;新增或修改字典条目&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;POST&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/itemDict/v1&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: null, </span></span>
<span class="line"><span>                &quot;createBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>                &quot;type&quot;: null</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147099914257&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: null, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;SysDictItemController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;批量删除字典条目&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;DELETE&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/itemDict/v1&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: null, </span></span>
<span class="line"><span>                &quot;createBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>                &quot;type&quot;: null</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147099914274&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: null, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;SysDictItemController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;分页获取字条目&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;GET&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/itemDict/v1/page&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: null, </span></span>
<span class="line"><span>                &quot;createBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>                &quot;type&quot;: null</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147099914279&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: null, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;SysDictItemController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;获取字典条目&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;GET&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/itemDict/v1/{id}&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: null, </span></span>
<span class="line"><span>                &quot;createBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>                &quot;type&quot;: null</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        ], </span></span>
<span class="line"><span>        &quot;AuthUserController&quot;: [</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147099914253&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: null, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;AuthUserController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;用户角色绑定&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;PUT&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/user/v1/roleBind&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: null, </span></span>
<span class="line"><span>                &quot;createBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>                &quot;type&quot;: null</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147099914259&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: null, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;AuthUserController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;获取当前用户信息&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;GET&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/user/v1/info&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: null, </span></span>
<span class="line"><span>                &quot;createBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>                &quot;type&quot;: null</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147099914260&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: null, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;AuthUserController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;删除用户&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;DELETE&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/user/v1/{id}&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: null, </span></span>
<span class="line"><span>                &quot;createBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>                &quot;type&quot;: null</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147099914266&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: null, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;AuthUserController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;修改用户基本信息&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;PUT&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/user/v1&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: null, </span></span>
<span class="line"><span>                &quot;createBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>                &quot;type&quot;: null</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147099914281&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: null, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;AuthUserController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;分页获取用户数据&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;GET&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/user/v1/page&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: null, </span></span>
<span class="line"><span>                &quot;createBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>                &quot;type&quot;: null</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147167023107&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: null, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;AuthUserController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;修改用户状态&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;PUT&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/user/v1/changeStatus&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: null, </span></span>
<span class="line"><span>                &quot;createBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>                &quot;type&quot;: null</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147167023114&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: null, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;AuthUserController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;角色绑定用户&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;POST&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/user/v1/bindingUser&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: null, </span></span>
<span class="line"><span>                &quot;createBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>                &quot;type&quot;: null</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147167023120&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: null, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;AuthUserController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;修改密码&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;PUT&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/user/v1/changePwd&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: null, </span></span>
<span class="line"><span>                &quot;createBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>                &quot;type&quot;: null</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1575672738339278852&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: null, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;AuthUserController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;用户增加&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;POST&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/user/v1&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: null, </span></span>
<span class="line"><span>                &quot;createBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>                &quot;type&quot;: null</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1583352964332478468&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: null, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;AuthUserController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;通过用户ID获取用户基础信息&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;GET&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/user/v1/info/{userId}&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: null, </span></span>
<span class="line"><span>                &quot;createBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>                &quot;type&quot;: null</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        ], </span></span>
<span class="line"><span>        &quot;SysOperationLogController&quot;: [</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147099914244&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: null, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;SysOperationLogController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;删除单个操作日志&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;DELETE&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/operationLog/v1/{id}&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: null, </span></span>
<span class="line"><span>                &quot;createBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>                &quot;type&quot;: null</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147167023112&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: null, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;SysOperationLogController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;分页获取操作日志&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;GET&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/operationLog/v1/page&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: null, </span></span>
<span class="line"><span>                &quot;createBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>                &quot;type&quot;: null</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1578938556401487877&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: null, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;SysOperationLogController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;批量删除操作日志&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;DELETE&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/operationLog/v1&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: null, </span></span>
<span class="line"><span>                &quot;createBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>                &quot;type&quot;: null</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        ], </span></span>
<span class="line"><span>        &quot;UploadController&quot;: [</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1578667242197569556&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: null, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;UploadController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;上传文件&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;POST&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/oss/v1/uploadFile&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: null, </span></span>
<span class="line"><span>                &quot;createBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>                &quot;type&quot;: null</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>    }, </span></span>
<span class="line"><span>    &quot;msg&quot;: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="平台接口管理" tabindex="-1"><a class="header-anchor" href="#平台接口管理"><span>平台接口管理</span></a></h4><h5 id="接口功能-6" tabindex="-1"><a class="header-anchor" href="#接口功能-6"><span>接口功能</span></a></h5><ol><li>平台接口的增删改查</li><li>获取系统服务列表</li><li>服务名称获取系统接口列表</li><li>批量导入系统接口</li></ol><h5 id="接口信息-6" tabindex="-1"><a class="header-anchor" href="#接口信息-6"><span>接口信息</span></a></h5><h6 id="_1、新增-5" tabindex="-1"><a class="header-anchor" href="#_1、新增-5"><span>1、新增</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/api/v1    POST   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>springApplicationName</td><td>string</td><td>是</td><td>服务名称</td></tr><tr><td>clientId</td><td>string</td><td>是</td><td>平台标识</td></tr><tr><td>controllerName</td><td>string</td><td>是</td><td>控制器名称</td></tr><tr><td>name</td><td>string</td><td>是</td><td>接口名称</td></tr><tr><td>requestMethod</td><td>string</td><td>是</td><td>请求方法</td></tr><tr><td>uri</td><td>string</td><td>是</td><td>接口地址</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_2、修改-4" tabindex="-1"><a class="header-anchor" href="#_2、修改-4"><span>2、修改</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/api/v1    PUT   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>id</td><td>string</td><td>是</td><td>唯一id</td></tr><tr><td>springApplicationName</td><td>string</td><td>否</td><td>服务名称</td></tr><tr><td>clientId</td><td>string</td><td>否</td><td>平台标识</td></tr><tr><td>controllerName</td><td>string</td><td>否</td><td>控制器名称</td></tr><tr><td>name</td><td>string</td><td>否</td><td>接口名称</td></tr><tr><td>requestMethod</td><td>string</td><td>否</td><td>请求方法</td></tr><tr><td>uri</td><td>string</td><td>否</td><td>接口地址</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_3、分页查询-2" tabindex="-1"><a class="header-anchor" href="#_3、分页查询-2"><span>3、分页查询</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/api/v1    GET   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>pageNum</td><td>number</td><td>是</td><td>当前页</td></tr><tr><td>pageSize</td><td>number</td><td>是</td><td>每页大小</td></tr><tr><td>name</td><td>string</td><td>否</td><td>接口名称</td></tr><tr><td>springApplicationName</td><td>string</td><td>否</td><td>服务名称</td></tr><tr><td>requestMethod</td><td>string</td><td>否</td><td>请求方式</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;code&quot;: 0, </span></span>
<span class="line"><span>    &quot;data&quot;: {</span></span>
<span class="line"><span>        &quot;totalSize&quot;: 80, </span></span>
<span class="line"><span>        &quot;list&quot;: [</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147032805387&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: &quot;1fbba06130d44dc98584f83bd224aced&quot;, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;AuthClientMenuController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;修改菜单&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;PUT&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/menu/v1&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: &quot;2022-09-22 13:56:28&quot;, </span></span>
<span class="line"><span>                &quot;createBy&quot;: &quot;43b59399d55346dca94a80e9e77838f6&quot;, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: &quot;2022-09-22 14:11:58&quot;, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: &quot;&quot;, </span></span>
<span class="line"><span>                &quot;type&quot;: &quot;0&quot;</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147032805388&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: &quot;1fbba06130d44dc98584f83bd224aced&quot;, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;SysTenantController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;修改租户信息&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;PUT&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/tenant/v1&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: &quot;2022-09-22 13:56:28&quot;, </span></span>
<span class="line"><span>                &quot;createBy&quot;: &quot;43b59399d55346dca94a80e9e77838f6&quot;, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: &quot;2022-09-22 14:19:28&quot;, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: &quot;&quot;, </span></span>
<span class="line"><span>                &quot;type&quot;: &quot;0&quot;</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147032805389&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: &quot;1fbba06130d44dc98584f83bd224aced&quot;, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;SysDictItemController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;新增或修改字典条目&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;POST&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/itemDict/v1&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: &quot;2022-09-22 13:56:28&quot;, </span></span>
<span class="line"><span>                &quot;createBy&quot;: &quot;43b59399d55346dca94a80e9e77838f6&quot;, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: &quot;2022-09-22 14:20:28&quot;, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: &quot;&quot;, </span></span>
<span class="line"><span>                &quot;type&quot;: &quot;0&quot;</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147032805390&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: &quot;1fbba06130d44dc98584f83bd224aced&quot;, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;Oauth2RegisteredClientController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;删除平台&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;DELETE&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/client/v1/{id}&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: &quot;2022-09-22 13:56:28&quot;, </span></span>
<span class="line"><span>                &quot;createBy&quot;: &quot;43b59399d55346dca94a80e9e77838f6&quot;, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: &quot;2022-09-22 14:52:21&quot;, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: &quot;&quot;, </span></span>
<span class="line"><span>                &quot;type&quot;: &quot;0&quot;</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147032805391&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: &quot;1fbba06130d44dc98584f83bd224aced&quot;, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;AuthClientMenuController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;获取当前用户下指定平台菜单&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;GET&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/menu/v1/menu/{id}&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: &quot;2022-09-22 13:56:28&quot;, </span></span>
<span class="line"><span>                &quot;createBy&quot;: &quot;43b59399d55346dca94a80e9e77838f6&quot;, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: &quot;2022-09-22 14:11:58&quot;, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: &quot;&quot;, </span></span>
<span class="line"><span>                &quot;type&quot;: &quot;0&quot;</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147032805393&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: &quot;1fbba06130d44dc98584f83bd224aced&quot;, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;AuthRoleController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;获取指定组合角色已绑定的客户端角色&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;GET&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/tenant/role/v1/bound/list/{id}&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: &quot;2022-09-22 13:56:28&quot;, </span></span>
<span class="line"><span>                &quot;createBy&quot;: &quot;43b59399d55346dca94a80e9e77838f6&quot;, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: &quot;2022-09-22 14:13:00&quot;, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: &quot;&quot;, </span></span>
<span class="line"><span>                &quot;type&quot;: &quot;0&quot;</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147099914241&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: &quot;1fbba06130d44dc98584f83bd224aced&quot;, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;AuthClientRoleController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;角色绑定菜单&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;POST&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/role/v1/bindingMenu&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: &quot;2022-09-22 13:56:28&quot;, </span></span>
<span class="line"><span>                &quot;createBy&quot;: &quot;43b59399d55346dca94a80e9e77838f6&quot;, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: &quot;2022-09-22 14:20:00&quot;, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: &quot;&quot;, </span></span>
<span class="line"><span>                &quot;type&quot;: &quot;0&quot;</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147099914242&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: &quot;1fbba06130d44dc98584f83bd224aced&quot;, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;AuthClientApiController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;批量导入系统接口&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;POST&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/api/v1/importApi&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: &quot;2022-09-22 13:56:28&quot;, </span></span>
<span class="line"><span>                &quot;createBy&quot;: &quot;43b59399d55346dca94a80e9e77838f6&quot;, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: &quot;2022-09-22 14:12:31&quot;, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: &quot;&quot;, </span></span>
<span class="line"><span>                &quot;type&quot;: &quot;0&quot;</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147099914244&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: &quot;1fbba06130d44dc98584f83bd224aced&quot;, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;SysOperationLogController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;删除单个操作日志&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;DELETE&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/operationLog/v1/{id}&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: &quot;2022-09-22 13:56:28&quot;, </span></span>
<span class="line"><span>                &quot;createBy&quot;: &quot;43b59399d55346dca94a80e9e77838f6&quot;, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: &quot;2022-09-22 14:20:57&quot;, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: &quot;&quot;, </span></span>
<span class="line"><span>                &quot;type&quot;: &quot;0&quot;</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572827147099914245&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-system&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: &quot;1fbba06130d44dc98584f83bd224aced&quot;, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;AuthClientRoleController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;删除平台角色&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;DELETE&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/role/v1/{id}&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: &quot;2022-09-22 13:56:28&quot;, </span></span>
<span class="line"><span>                &quot;createBy&quot;: &quot;43b59399d55346dca94a80e9e77838f6&quot;, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: &quot;2022-09-22 14:20:00&quot;, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: &quot;&quot;, </span></span>
<span class="line"><span>                &quot;type&quot;: &quot;0&quot;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>    }, </span></span>
<span class="line"><span>    &quot;msg&quot;: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_4、删除-3" tabindex="-1"><a class="header-anchor" href="#_4、删除-3"><span>4、删除</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/api/v1/{id}    DELETE   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>id</td><td>string</td><td>是</td><td>唯一id</td></tr></tbody></table><blockquote><p>响应参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>code</td><td>number</td><td>响应编码 0 或其他编码</td></tr><tr><td>data</td><td>number</td><td>响应数据</td></tr><tr><td>msg</td><td>string</td><td>响应描述</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_5、批量删除-2" tabindex="-1"><a class="header-anchor" href="#_5、批量删除-2"><span>5、批量删除</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/api/v1    DELETE   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>ids</td><td>string</td><td>是</td><td>id列表</td></tr></tbody></table><blockquote><p>响应参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>code</td><td>number</td><td>响应编码 0 或其他编码</td></tr><tr><td>data</td><td>number</td><td>响应数据</td></tr><tr><td>msg</td><td>string</td><td>响应描述</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_6、获取系统服务列表" tabindex="-1"><a class="header-anchor" href="#_6、获取系统服务列表"><span>6、获取系统服务列表</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/api/v1/sysApi/serviceList    GET   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{&quot;code&quot;:0,&quot;data&quot;:[&quot;center-auth&quot;,&quot;center-system&quot;],&quot;msg&quot;:&quot;SUCCESS&quot;}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="_7、批量导入系统接口" tabindex="-1"><a class="header-anchor" href="#_7、批量导入系统接口"><span>7、批量导入系统接口</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/api/v1/importApi    GET   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>clientId</td><td>string</td><td>是</td><td>平台标识</td></tr><tr><td>idList</td><td>array</td><td>是</td><td>系统接口id列表</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{&quot;code&quot;:0,&quot;data&quot;:null,&quot;msg&quot;:&quot;SUCCESS&quot;}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="_8、服务名称获取系统接口列表" tabindex="-1"><a class="header-anchor" href="#_8、服务名称获取系统接口列表"><span>8、服务名称获取系统接口列表</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/api/v1/sysApi/list/{name}    GET   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;code&quot;: 0, </span></span>
<span class="line"><span>    &quot;data&quot;: {</span></span>
<span class="line"><span>        &quot;NotifyController&quot;: [</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1574584764235517956&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-auth&quot;, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;NotifyController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;发送验证码&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;GET&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/notify/v1/send_code&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: &quot;2022-09-27 10:20:36&quot;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        ], </span></span>
<span class="line"><span>        &quot;TokenController&quot;: [</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1574584764189380609&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-auth&quot;, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;TokenController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;获取在线用户&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;GET&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/token/page&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: &quot;2022-09-27 10:20:36&quot;</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1574584764235517953&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-auth&quot;, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;TokenController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;删除指定token&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;DELETE&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/token/{token}&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: &quot;2022-09-27 10:20:36&quot;</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1574584764235517954&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-auth&quot;, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;TokenController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;退出&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;DELETE&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/token/logout&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: &quot;2022-09-27 10:20:36&quot;</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1574584764235517955&quot;, </span></span>
<span class="line"><span>                &quot;springApplicationName&quot;: &quot;center-auth&quot;, </span></span>
<span class="line"><span>                &quot;controllerName&quot;: &quot;TokenController&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;token校验&quot;, </span></span>
<span class="line"><span>                &quot;requestMethod&quot;: &quot;GET&quot;, </span></span>
<span class="line"><span>                &quot;uri&quot;: &quot;/token/check&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: &quot;2022-09-27 10:20:36&quot;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>    }, </span></span>
<span class="line"><span>    &quot;msg&quot;: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="平台角色管理" tabindex="-1"><a class="header-anchor" href="#平台角色管理"><span>平台角色管理</span></a></h4><h5 id="接口功能-7" tabindex="-1"><a class="header-anchor" href="#接口功能-7"><span>接口功能</span></a></h5><ol><li>平台角色增删改查</li><li>平台角色绑定菜单</li><li>获取指定角色绑定的菜单</li></ol><h5 id="接口信息-7" tabindex="-1"><a class="header-anchor" href="#接口信息-7"><span>接口信息</span></a></h5><h6 id="_1、新增-6" tabindex="-1"><a class="header-anchor" href="#_1、新增-6"><span>1、新增</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/role/v1    POST   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>name</td><td>string</td><td>是</td><td>角色名称</td></tr><tr><td>code</td><td>string</td><td>是</td><td>角色编码</td></tr><tr><td>desc</td><td>string</td><td>否</td><td>角色描述</td></tr><tr><td>clientId</td><td>string</td><td>是</td><td>客户端标识</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_2、修改-5" tabindex="-1"><a class="header-anchor" href="#_2、修改-5"><span>2、修改</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/role/v1    PUT   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>id</td><td>string</td><td>是</td><td>角色id</td></tr><tr><td>name</td><td>string</td><td>否</td><td>角色名称</td></tr><tr><td>code</td><td>string</td><td>否</td><td>角色编码</td></tr><tr><td>desc</td><td>string</td><td>否</td><td>角色描述</td></tr><tr><td>clientId</td><td>string</td><td>是</td><td>客户端标识</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_3、分页查询-3" tabindex="-1"><a class="header-anchor" href="#_3、分页查询-3"><span>3、分页查询</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/role/v1    GET   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>pageNum</td><td>number</td><td>是</td><td>当前页</td></tr><tr><td>pageSize</td><td>number</td><td>是</td><td>每页大小</td></tr><tr><td>name</td><td>string</td><td>否</td><td>角色名称</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;code&quot;: 0, </span></span>
<span class="line"><span>    &quot;data&quot;: {</span></span>
<span class="line"><span>        &quot;totalSize&quot;: 3, </span></span>
<span class="line"><span>        &quot;list&quot;: [</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572039569111060481&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;超级管理员&quot;, </span></span>
<span class="line"><span>                &quot;code&quot;: &quot;USERCORE_SUPER_ADMIN&quot;, </span></span>
<span class="line"><span>                &quot;desc&quot;: &quot;用户中心管理员&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: &quot;1fbba06130d44dc98584f83bd224aced&quot;, </span></span>
<span class="line"><span>                &quot;defaultFlag&quot;: &quot;1&quot;</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1572045774676103169&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;默认租户管理员&quot;, </span></span>
<span class="line"><span>                &quot;code&quot;: &quot;DEFAULT_TENANT_ADMIN&quot;, </span></span>
<span class="line"><span>                &quot;desc&quot;: &quot;默认租户用户拥有的用户中心权限&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: &quot;1fbba06130d44dc98584f83bd224aced&quot;, </span></span>
<span class="line"><span>                &quot;defaultFlag&quot;: &quot;1&quot;</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;1585534221669720065&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;陈晰测试&quot;, </span></span>
<span class="line"><span>                &quot;code&quot;: &quot;陈晰测试&quot;, </span></span>
<span class="line"><span>                &quot;desc&quot;: &quot;陈晰测试&quot;, </span></span>
<span class="line"><span>                &quot;registeredClientId&quot;: &quot;1fbba06130d44dc98584f83bd224aced&quot;, </span></span>
<span class="line"><span>                &quot;defaultFlag&quot;: &quot;0&quot;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>    }, </span></span>
<span class="line"><span>    &quot;msg&quot;: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_4、删除-4" tabindex="-1"><a class="header-anchor" href="#_4、删除-4"><span>4、删除</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/role/v1/{id}    DELETE   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead></table><blockquote><p>响应参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>code</td><td>number</td><td>响应编码 0 或其他编码</td></tr><tr><td>data</td><td>number</td><td>响应数据</td></tr><tr><td>msg</td><td>string</td><td>响应描述</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_5、批量删除-3" tabindex="-1"><a class="header-anchor" href="#_5、批量删除-3"><span>5、批量删除</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/role/v1    DELETE   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>ids</td><td>array</td><td>是</td><td>id列表</td></tr></tbody></table><blockquote><p>响应参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>code</td><td>number</td><td>响应编码 0 或其他编码</td></tr><tr><td>data</td><td>number</td><td>响应数据</td></tr><tr><td>msg</td><td>string</td><td>响应描述</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_6、角色绑定菜单" tabindex="-1"><a class="header-anchor" href="#_6、角色绑定菜单"><span>6、角色绑定菜单</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/role/v1/bindingMenu    POST   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>roleId</td><td>string</td><td>是</td><td>角色id</td></tr><tr><td>menuIdList</td><td>string</td><td>是</td><td>菜单id列表</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_7、获取指定角色绑定的菜单" tabindex="-1"><a class="header-anchor" href="#_7、获取指定角色绑定的菜单"><span>7、获取指定角色绑定的菜单</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/role/v1/{id}    GET   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;code&quot;: 0, </span></span>
<span class="line"><span>    &quot;data&quot;: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;id&quot;: &quot;1574296975522275330&quot;, </span></span>
<span class="line"><span>            &quot;code&quot;: &quot;client:add&quot;, </span></span>
<span class="line"><span>            &quot;name&quot;: &quot;&quot;, </span></span>
<span class="line"><span>            &quot;permission&quot;: &quot;client:add&quot;, </span></span>
<span class="line"><span>            &quot;path&quot;: &quot;&quot;, </span></span>
<span class="line"><span>            &quot;parentId&quot;: &quot;d4cf75467d78407992c66ef72731b0bd&quot;, </span></span>
<span class="line"><span>            &quot;icon&quot;: null, </span></span>
<span class="line"><span>            &quot;keepAlive&quot;: &quot;1&quot;, </span></span>
<span class="line"><span>            &quot;menuType&quot;: &quot;0&quot;, </span></span>
<span class="line"><span>            &quot;registeredClientId&quot;: &quot;1fbba06130d44dc98584f83bd224aced&quot;, </span></span>
<span class="line"><span>            &quot;sortOrder&quot;: 1000, </span></span>
<span class="line"><span>            &quot;createBy&quot;: null, </span></span>
<span class="line"><span>            &quot;createTime&quot;: null, </span></span>
<span class="line"><span>            &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>            &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>            &quot;delFlag&quot;: null, </span></span>
<span class="line"><span>            &quot;title&quot;: &quot;新增平台&quot;, </span></span>
<span class="line"><span>            &quot;description&quot;: null</span></span>
<span class="line"><span>        }, </span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;id&quot;: &quot;1578949678068305921&quot;, </span></span>
<span class="line"><span>            &quot;code&quot;: &quot;role:bind&quot;, </span></span>
<span class="line"><span>            &quot;name&quot;: &quot;&quot;, </span></span>
<span class="line"><span>            &quot;permission&quot;: &quot;role_bind&quot;, </span></span>
<span class="line"><span>            &quot;path&quot;: &quot;&quot;, </span></span>
<span class="line"><span>            &quot;parentId&quot;: &quot;45c8d78ce9854edc93c9ccba15a3d097&quot;, </span></span>
<span class="line"><span>            &quot;icon&quot;: null, </span></span>
<span class="line"><span>            &quot;keepAlive&quot;: &quot;1&quot;, </span></span>
<span class="line"><span>            &quot;menuType&quot;: &quot;0&quot;, </span></span>
<span class="line"><span>            &quot;registeredClientId&quot;: &quot;1fbba06130d44dc98584f83bd224aced&quot;, </span></span>
<span class="line"><span>            &quot;sortOrder&quot;: 1000, </span></span>
<span class="line"><span>            &quot;createBy&quot;: null, </span></span>
<span class="line"><span>            &quot;createTime&quot;: null, </span></span>
<span class="line"><span>            &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>            &quot;updateTime&quot;: null, </span></span>
<span class="line"><span>            &quot;delFlag&quot;: null, </span></span>
<span class="line"><span>            &quot;title&quot;: &quot;角色绑定&quot;, </span></span>
<span class="line"><span>            &quot;description&quot;: null</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ], </span></span>
<span class="line"><span>    &quot;msg&quot;: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="字典管理" tabindex="-1"><a class="header-anchor" href="#字典管理"><span>字典管理</span></a></h4><h5 id="接口功能-8" tabindex="-1"><a class="header-anchor" href="#接口功能-8"><span>接口功能</span></a></h5><ol><li>字典项增删改查</li><li>通过字典编码获取字典子项</li><li>复制字典</li></ol><h5 id="接口信息-8" tabindex="-1"><a class="header-anchor" href="#接口信息-8"><span>接口信息</span></a></h5><h6 id="_1、新增-7" tabindex="-1"><a class="header-anchor" href="#_1、新增-7"><span>1、新增</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/dict/v1    POST   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>name</td><td>string</td><td>是</td><td>名称</td></tr><tr><td>code</td><td>string</td><td>是</td><td>标识</td></tr><tr><td>remark</td><td>string</td><td>是</td><td>备注</td></tr><tr><td>stateFlag</td><td>string</td><td>是</td><td>状态</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_2、修改-6" tabindex="-1"><a class="header-anchor" href="#_2、修改-6"><span>2、修改</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/dict/v1    PUT   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>id</td><td>string</td><td>是</td><td>唯一id</td></tr><tr><td>name</td><td>string</td><td>否</td><td>名称</td></tr><tr><td>code</td><td>string</td><td>否</td><td>标识</td></tr><tr><td>remark</td><td>string</td><td>否</td><td>备注</td></tr><tr><td>stateFlag</td><td>string</td><td>否</td><td>状态</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_3、分页查询-4" tabindex="-1"><a class="header-anchor" href="#_3、分页查询-4"><span>3、分页查询</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/dict/v1/page    GET   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>pageNum</td><td>number</td><td>是</td><td>当前页</td></tr><tr><td>pageSize</td><td>number</td><td>是</td><td>每页大小</td></tr><tr><td>name</td><td>string</td><td>否</td><td>字典名称</td></tr><tr><td>code</td><td>string</td><td>否</td><td>字典标识</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;code&quot;:0,</span></span>
<span class="line"><span>    &quot;data&quot;:{</span></span>
<span class="line"><span>        &quot;records&quot;:[</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;:&quot;1562612461360189442&quot;,</span></span>
<span class="line"><span>                &quot;sortOrder&quot;:1,</span></span>
<span class="line"><span>                &quot;createBy&quot;:&quot;&quot;,</span></span>
<span class="line"><span>                &quot;createTime&quot;:&quot;2022-08-25 09:26:57&quot;,</span></span>
<span class="line"><span>                &quot;updateBy&quot;:&quot;&quot;,</span></span>
<span class="line"><span>                &quot;updateTime&quot;:&quot;2022-08-25 09:33:07&quot;,</span></span>
<span class="line"><span>                &quot;delFlag&quot;:&quot;0&quot;,</span></span>
<span class="line"><span>                &quot;code&quot;:&quot;TEST&quot;,</span></span>
<span class="line"><span>                &quot;name&quot;:&quot;测试&quot;,</span></span>
<span class="line"><span>                &quot;remark&quot;:&quot;【0：白盒 1：黑盒】&quot;,</span></span>
<span class="line"><span>                &quot;stateFlag&quot;:&quot;1&quot;</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;:&quot;0bb8b9a955324dcca1dcba7d1d5238d0&quot;,</span></span>
<span class="line"><span>                &quot;sortOrder&quot;:1,</span></span>
<span class="line"><span>                &quot;createBy&quot;:&quot;&quot;,</span></span>
<span class="line"><span>                &quot;createTime&quot;:&quot;2022-08-03 16:50:20&quot;,</span></span>
<span class="line"><span>                &quot;updateBy&quot;:&quot;&quot;,</span></span>
<span class="line"><span>                &quot;updateTime&quot;:&quot;2022-08-24 11:07:39&quot;,</span></span>
<span class="line"><span>                &quot;delFlag&quot;:&quot;0&quot;,</span></span>
<span class="line"><span>                &quot;code&quot;:&quot;GLOBAL_OPEN_TYPE&quot;,</span></span>
<span class="line"><span>                &quot;name&quot;:&quot;打开方式&quot;,</span></span>
<span class="line"><span>                &quot;remark&quot;:&quot;[01-组件 02-内链 03-外链]&quot;,</span></span>
<span class="line"><span>                &quot;stateFlag&quot;:&quot;1&quot;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>        &quot;total&quot;:9,</span></span>
<span class="line"><span>        &quot;size&quot;:10,</span></span>
<span class="line"><span>        &quot;current&quot;:1,</span></span>
<span class="line"><span>        &quot;orders&quot;:[</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>        &quot;optimizeCountSql&quot;:true,</span></span>
<span class="line"><span>        &quot;hitCount&quot;:false,</span></span>
<span class="line"><span>        &quot;countId&quot;:null,</span></span>
<span class="line"><span>        &quot;maxLimit&quot;:null,</span></span>
<span class="line"><span>        &quot;searchCount&quot;:true,</span></span>
<span class="line"><span>        &quot;pages&quot;:1</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    &quot;msg&quot;:&quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_4、删除-5" tabindex="-1"><a class="header-anchor" href="#_4、删除-5"><span>4、删除</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/dict/v1/{id}    DELETE   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead></table><blockquote><p>响应参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>code</td><td>number</td><td>响应编码 0 或其他编码</td></tr><tr><td>data</td><td>number</td><td>响应数据</td></tr><tr><td>msg</td><td>string</td><td>响应描述</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_5、批量删除-4" tabindex="-1"><a class="header-anchor" href="#_5、批量删除-4"><span>5、批量删除</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/dict/v1    DELETE   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>ids</td><td>array</td><td>是</td><td>id列表</td></tr></tbody></table><blockquote><p>响应参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>code</td><td>number</td><td>响应编码 0 或其他编码</td></tr><tr><td>data</td><td>number</td><td>响应数据</td></tr><tr><td>msg</td><td>string</td><td>响应描述</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_6、通过分类获取页面label绑定信息" tabindex="-1"><a class="header-anchor" href="#_6、通过分类获取页面label绑定信息"><span>6、通过分类获取页面Label绑定信息</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/dict/v1/label/{code}    GET   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;code&quot;: 0, </span></span>
<span class="line"><span>    &quot;data&quot;: {</span></span>
<span class="line"><span>        &quot;AUTHENTICATION_METHOD&quot;: [</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;label&quot;: &quot;关键字JWT认证&quot;, </span></span>
<span class="line"><span>                &quot;text&quot;: &quot;关键字JWT认证&quot;, </span></span>
<span class="line"><span>                &quot;value&quot;: &quot;private_key_jwt&quot;</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;label&quot;: &quot;无&quot;, </span></span>
<span class="line"><span>                &quot;text&quot;: &quot;无&quot;, </span></span>
<span class="line"><span>                &quot;value&quot;: &quot;none&quot;</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;label&quot;: &quot;POST认证&quot;, </span></span>
<span class="line"><span>                &quot;text&quot;: &quot;POST认证&quot;, </span></span>
<span class="line"><span>                &quot;value&quot;: &quot;post&quot;</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;label&quot;: &quot;客户端密码BASIC认证&quot;, </span></span>
<span class="line"><span>                &quot;text&quot;: &quot;客户端密码BASIC认证&quot;, </span></span>
<span class="line"><span>                &quot;value&quot;: &quot;client_secret_basic&quot;</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;label&quot;: &quot;BASIC认证&quot;, </span></span>
<span class="line"><span>                &quot;text&quot;: &quot;BASIC认证&quot;, </span></span>
<span class="line"><span>                &quot;value&quot;: &quot;basic&quot;</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;label&quot;: &quot;客户端密码POST认证&quot;, </span></span>
<span class="line"><span>                &quot;text&quot;: &quot;客户端密码POST认证&quot;, </span></span>
<span class="line"><span>                &quot;value&quot;: &quot;client_secret_post&quot;</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;label&quot;: &quot;客户端密码JWT认证&quot;, </span></span>
<span class="line"><span>                &quot;text&quot;: &quot;客户端密码JWT认证&quot;, </span></span>
<span class="line"><span>                &quot;value&quot;: &quot;client_secret_jwt&quot;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>    }, </span></span>
<span class="line"><span>    &quot;msg&quot;: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_7、复制字典" tabindex="-1"><a class="header-anchor" href="#_7、复制字典"><span>7、复制字典</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/dict/v1/copy/{id}   GET   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="字典子项管理" tabindex="-1"><a class="header-anchor" href="#字典子项管理"><span>字典子项管理</span></a></h4><h5 id="接口功能-9" tabindex="-1"><a class="header-anchor" href="#接口功能-9"><span>接口功能</span></a></h5><ol><li>字典子项增删改查</li></ol><h5 id="接口信息-9" tabindex="-1"><a class="header-anchor" href="#接口信息-9"><span>接口信息</span></a></h5><h6 id="_1、新增或修改字典子项" tabindex="-1"><a class="header-anchor" href="#_1、新增或修改字典子项"><span>1、新增或修改字典子项</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/itemDict/v1    POST   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>insertList</td><td>array</td><td>否</td><td>新增子典子项列表</td></tr><tr><td>updateList</td><td>array</td><td>否</td><td>修改字典子项列表</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_2、分页查询字典子项" tabindex="-1"><a class="header-anchor" href="#_2、分页查询字典子项"><span>2、分页查询字典子项</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/itemDict/v1    GET   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>pageNum</td><td>number</td><td>是</td><td>当前页</td></tr><tr><td>pageSize</td><td>number</td><td>是</td><td>每页大小</td></tr><tr><td>name</td><td>string</td><td>否</td><td>字典子项名称</td></tr><tr><td>code</td><td>string</td><td>否</td><td>字典子项标识</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;code&quot;: 0, </span></span>
<span class="line"><span>    &quot;data&quot;: {</span></span>
<span class="line"><span>        &quot;records&quot;: [</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;995ac19a1d234748bda597f99117794e&quot;, </span></span>
<span class="line"><span>                &quot;sortOrder&quot;: 3, </span></span>
<span class="line"><span>                &quot;createBy&quot;: &quot;&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: &quot;2022-08-03 17:21:22&quot;, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: &quot;&quot;, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: &quot;2022-08-03 17:21:22&quot;, </span></span>
<span class="line"><span>                &quot;delFlag&quot;: &quot;0&quot;, </span></span>
<span class="line"><span>                &quot;code&quot;: &quot;03&quot;, </span></span>
<span class="line"><span>                &quot;name&quot;: &quot;外链&quot;, </span></span>
<span class="line"><span>                &quot;remark&quot;: &quot;&quot;, </span></span>
<span class="line"><span>                &quot;stateFlag&quot;: &quot;1&quot;, </span></span>
<span class="line"><span>                &quot;dictId&quot;: &quot;0bb8b9a955324dcca1dcba7d1d5238d0&quot;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        ], </span></span>
<span class="line"><span>        &quot;total&quot;: 1, </span></span>
<span class="line"><span>        &quot;size&quot;: 10, </span></span>
<span class="line"><span>        &quot;current&quot;: 1, </span></span>
<span class="line"><span>        &quot;orders&quot;: [ ], </span></span>
<span class="line"><span>        &quot;optimizeCountSql&quot;: true, </span></span>
<span class="line"><span>        &quot;hitCount&quot;: false, </span></span>
<span class="line"><span>        &quot;countId&quot;: null, </span></span>
<span class="line"><span>        &quot;maxLimit&quot;: null, </span></span>
<span class="line"><span>        &quot;searchCount&quot;: true, </span></span>
<span class="line"><span>        &quot;pages&quot;: 1</span></span>
<span class="line"><span>    }, </span></span>
<span class="line"><span>    &quot;msg&quot;: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_4、删除-6" tabindex="-1"><a class="header-anchor" href="#_4、删除-6"><span>4、删除</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/itemDict/v1/{id}    DELETE   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead></table><blockquote><p>响应参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>code</td><td>number</td><td>响应编码 0 或其他编码</td></tr><tr><td>data</td><td>object</td><td>响应数据</td></tr><tr><td>msg</td><td>string</td><td>响应描述</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_5、批量删除-5" tabindex="-1"><a class="header-anchor" href="#_5、批量删除-5"><span>5、批量删除</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/itemDict/v1    DELETE   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>ids</td><td>array</td><td>是</td><td>id列表</td></tr></tbody></table><blockquote><p>响应参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>code</td><td>number</td><td>响应编码 0 或其他编码</td></tr><tr><td>data</td><td>object</td><td>响应数据</td></tr><tr><td>msg</td><td>string</td><td>响应描述</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="登录日志管理" tabindex="-1"><a class="header-anchor" href="#登录日志管理"><span>登录日志管理</span></a></h4><h5 id="接口功能-10" tabindex="-1"><a class="header-anchor" href="#接口功能-10"><span>接口功能</span></a></h5><ol><li>登录日志删改查</li></ol><h5 id="接口信息-10" tabindex="-1"><a class="header-anchor" href="#接口信息-10"><span>接口信息</span></a></h5><h6 id="_1、分页查询" tabindex="-1"><a class="header-anchor" href="#_1、分页查询"><span>1、分页查询</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/loginLog/v1    GET   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>pageNum</td><td>number</td><td>是</td><td>当前页</td></tr><tr><td>pageSize</td><td>number</td><td>是</td><td>每页大小</td></tr><tr><td>userName</td><td>string</td><td>否</td><td>登录账号</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;code&quot;: 0, </span></span>
<span class="line"><span>    &quot;data&quot;: {</span></span>
<span class="line"><span>        &quot;totalSize&quot;: 671, </span></span>
<span class="line"><span>        &quot;list&quot;: [</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;7b05f1694587866e2fe6cb76690bbb18&quot;, </span></span>
<span class="line"><span>                &quot;userName&quot;: &quot;admin&quot;, </span></span>
<span class="line"><span>                &quot;userId&quot;: &quot;43b59399d55346dca94a80e9e77838f6&quot;, </span></span>
<span class="line"><span>                &quot;tenantId&quot;: &quot;19264ac3de444b30bab436397daf900a&quot;, </span></span>
<span class="line"><span>                &quot;action&quot;: &quot;登录&quot;, </span></span>
<span class="line"><span>                &quot;nickName&quot;: null, </span></span>
<span class="line"><span>                &quot;realName&quot;: null, </span></span>
<span class="line"><span>                &quot;requestIp&quot;: &quot;10.142.52.25&quot;, </span></span>
<span class="line"><span>                &quot;browser&quot;: &quot;Chrome107.0.0.0&quot;, </span></span>
<span class="line"><span>                &quot;stateFlag&quot;: &quot;1&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: &quot;2022-11-02 14:02:35&quot;, </span></span>
<span class="line"><span>                &quot;createBy&quot;: &quot;admin&quot;, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: &quot;admin&quot;, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: &quot;2022-11-02 14:02:34&quot;, </span></span>
<span class="line"><span>                &quot;delFlag&quot;: &quot;0&quot;, </span></span>
<span class="line"><span>                &quot;exception&quot;: null</span></span>
<span class="line"><span>            }, </span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;cfe22bdf9e3446fb8c0ddd080903f23e&quot;, </span></span>
<span class="line"><span>                &quot;userName&quot;: &quot;admin&quot;, </span></span>
<span class="line"><span>                &quot;userId&quot;: &quot;43b59399d55346dca94a80e9e77838f6&quot;, </span></span>
<span class="line"><span>                &quot;tenantId&quot;: &quot;19264ac3de444b30bab436397daf900a&quot;, </span></span>
<span class="line"><span>                &quot;action&quot;: &quot;登录&quot;, </span></span>
<span class="line"><span>                &quot;nickName&quot;: null, </span></span>
<span class="line"><span>                &quot;realName&quot;: null, </span></span>
<span class="line"><span>                &quot;requestIp&quot;: &quot;10.142.52.13&quot;, </span></span>
<span class="line"><span>                &quot;browser&quot;: &quot;MSEdge103.0.1264.71&quot;, </span></span>
<span class="line"><span>                &quot;stateFlag&quot;: &quot;1&quot;, </span></span>
<span class="line"><span>                &quot;createTime&quot;: &quot;2022-11-01 14:33:59&quot;, </span></span>
<span class="line"><span>                &quot;createBy&quot;: &quot;admin&quot;, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: &quot;admin&quot;, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: &quot;2022-11-01 14:33:58&quot;, </span></span>
<span class="line"><span>                &quot;delFlag&quot;: &quot;0&quot;, </span></span>
<span class="line"><span>                &quot;exception&quot;: null</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>    }, </span></span>
<span class="line"><span>    &quot;msg&quot;: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_4、删除-7" tabindex="-1"><a class="header-anchor" href="#_4、删除-7"><span>4、删除</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/loginLog/v1/{id}    DELETE   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead></table><blockquote><p>响应参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>code</td><td>number</td><td>响应编码 0 或其他编码</td></tr><tr><td>data</td><td>object</td><td>响应数据</td></tr><tr><td>msg</td><td>string</td><td>响应描述</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_5、批量删除-6" tabindex="-1"><a class="header-anchor" href="#_5、批量删除-6"><span>5、批量删除</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/loginLog/v1    DELETE   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>ids</td><td>array</td><td>是</td><td>id列表</td></tr></tbody></table><blockquote><p>响应参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>code</td><td>number</td><td>响应编码 0 或其他编码</td></tr><tr><td>data</td><td>object</td><td>响应数据</td></tr><tr><td>msg</td><td>string</td><td>响应描述</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_5、批量删除-7" tabindex="-1"><a class="header-anchor" href="#_5、批量删除-7"><span>5、批量删除</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/itemDict/v1    DELETE   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>ids</td><td>array</td><td>是</td><td>id列表</td></tr></tbody></table><blockquote><p>响应参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>code</td><td>number</td><td>响应编码 0 或其他编码</td></tr><tr><td>data</td><td>object</td><td>响应数据</td></tr><tr><td>msg</td><td>string</td><td>响应描述</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="操作日志管理" tabindex="-1"><a class="header-anchor" href="#操作日志管理"><span>操作日志管理</span></a></h4><h5 id="接口功能-11" tabindex="-1"><a class="header-anchor" href="#接口功能-11"><span>接口功能</span></a></h5><ol><li>操作日志删改查</li></ol><h5 id="接口信息-11" tabindex="-1"><a class="header-anchor" href="#接口信息-11"><span>接口信息</span></a></h5><h6 id="_1、分页查询-1" tabindex="-1"><a class="header-anchor" href="#_1、分页查询-1"><span>1、分页查询</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/operationLog/v1    GET   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>pageNum</td><td>number</td><td>是</td><td>当前页</td></tr><tr><td>pageSize</td><td>number</td><td>是</td><td>每页大小</td></tr><tr><td>userName</td><td>string</td><td>否</td><td>登录账号</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;code&quot;: 0, </span></span>
<span class="line"><span>    &quot;data&quot;: {</span></span>
<span class="line"><span>        &quot;totalSize&quot;: 184, </span></span>
<span class="line"><span>        &quot;list&quot;: [</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;2fa8840945b56abc8ba90054788f5ea0&quot;, </span></span>
<span class="line"><span>                &quot;action&quot;: &quot;INSERT&quot;, </span></span>
<span class="line"><span>                &quot;title&quot;: &quot;用户角色绑定&quot;, </span></span>
<span class="line"><span>                &quot;userId&quot;: &quot;43b59399d55346dca94a80e9e77838f6&quot;, </span></span>
<span class="line"><span>                &quot;username&quot;: &quot;admin&quot;, </span></span>
<span class="line"><span>                &quot;requestIp&quot;: &quot;251.201.0.5&quot;, </span></span>
<span class="line"><span>                &quot;tenantId&quot;: &quot;19264ac3de444b30bab436397daf900a&quot;, </span></span>
<span class="line"><span>                &quot;browser&quot;: &quot;MSEdge103.0.1264.71&quot;, </span></span>
<span class="line"><span>                &quot;logType&quot;: &quot;INFO&quot;, </span></span>
<span class="line"><span>                &quot;params&quot;: &quot; request: UserBindingRoleRequest(userId=43b59399d55346dca94a80e9e77838f6, roleIdList=[1554767453009256449])&quot;, </span></span>
<span class="line"><span>                &quot;time&quot;: 13294, </span></span>
<span class="line"><span>                &quot;method&quot;: &quot;com.techease.authcenter.system.controller.AuthUserController.UserRoleBind()&quot;, </span></span>
<span class="line"><span>                &quot;exceptionDetail&quot;: null, </span></span>
<span class="line"><span>                &quot;createTime&quot;: &quot;2022-11-01 10:56:11&quot;, </span></span>
<span class="line"><span>                &quot;createBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateBy&quot;: null, </span></span>
<span class="line"><span>                &quot;updateTime&quot;: &quot;2022-11-01 10:56:11&quot;, </span></span>
<span class="line"><span>                &quot;delFlag&quot;: &quot;0&quot;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>    }, </span></span>
<span class="line"><span>    &quot;msg&quot;: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_4、删除-8" tabindex="-1"><a class="header-anchor" href="#_4、删除-8"><span>4、删除</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/operationLog/v1/{id}    DELETE   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead></table><blockquote><p>响应参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>code</td><td>number</td><td>响应编码 0 或其他编码</td></tr><tr><td>data</td><td>object</td><td>响应数据</td></tr><tr><td>msg</td><td>string</td><td>响应描述</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_5、批量删除-8" tabindex="-1"><a class="header-anchor" href="#_5、批量删除-8"><span>5、批量删除</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/operationLog/v1    DELETE   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>ids</td><td>array</td><td>是</td><td>id列表</td></tr></tbody></table><blockquote><p>响应参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>code</td><td>number</td><td>响应编码 0 或其他编码</td></tr><tr><td>data</td><td>object</td><td>响应数据</td></tr><tr><td>msg</td><td>string</td><td>响应描述</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    code: 0,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>    msg: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="oss管理" tabindex="-1"><a class="header-anchor" href="#oss管理"><span>OSS管理</span></a></h4><h5 id="接口功能-12" tabindex="-1"><a class="header-anchor" href="#接口功能-12"><span>接口功能</span></a></h5><ol><li>文件上传</li></ol><h5 id="接口信息-12" tabindex="-1"><a class="header-anchor" href="#接口信息-12"><span>接口信息</span></a></h5><h6 id="_1、分页查询-2" tabindex="-1"><a class="header-anchor" href="#_1、分页查询-2"><span>1、分页查询</span></a></h6><blockquote><p>请求路径</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>/admin/oss/v1/uploadFile    POST   </span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请求头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span>Authorization: token值</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请求参数</p></blockquote><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>描述</th><th>示例值</th></tr></thead><tbody><tr><td>file</td><td>file</td><td>是</td><td>文件</td><td></td></tr><tr><td>type</td><td>string</td><td>是</td><td>文件类型</td><td>client或tenant或user</td></tr></tbody></table><blockquote><p>响应</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;code&quot;: 0, </span></span>
<span class="line"><span>    &quot;data&quot;: {</span></span>
<span class="line"><span>        &quot;url&quot;: &quot;http://10.142.51.100:9000/usercenter/client/2022/11/02/4a46bd5905f24e94b4426802a15a4021.png&quot;</span></span>
<span class="line"><span>    }, </span></span>
<span class="line"><span>    &quot;msg&quot;: &quot;SUCCESS&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,839);function x(n,k){return i(),p("div",null,[q,s("p",null,"用户在浏览器打开的后台登录地址"+a(n.gateway-n.host)+"/auth/login,在登陆成功之后默认跳转到用户面板",1),b,m,h,y,s("p",null,[e("发起"+a(n.gateway-n.host)+"/auth/oauth2/authorize?response_type=code&client_id=客户端ID&redirect_uri=重定向地址，如何跳转，详见",1),F,e("单点登录时序图")]),g])}const C=t(v,[["render",x],["__file","用户中心技术文档.html.vue"]]),A=JSON.parse('{"path":"/note/business/techsel/%E7%94%A8%E6%88%B7%E4%B8%AD%E5%BF%83/%E7%94%A8%E6%88%B7%E4%B8%AD%E5%BF%83%E6%8A%80%E6%9C%AF%E6%96%87%E6%A1%A3.html","title":"用户中心技术文档","lang":"zh-CN","frontmatter":{"description":"用户中心技术文档 项目负责人 前端：陈晰、李婷妍 后端：胡丽芳、万洪吉 业务： 王玉廷 需求 ：王玉廷 项目介绍 项目背景 在分布式系统中每一个服务都有一套账号，不通用，容易引起混乱和管理不便。基于该问题，需要独立的认证授权系统。支持多租户管理、多组织管理的多领域集成应用，为业务系统提供统一的用户资源和权限资源进行集中的管理 项目技术 持久层框架： A...","head":[["meta",{"property":"og:url","content":"https://wherywan.github.io/note/business/techsel/%E7%94%A8%E6%88%B7%E4%B8%AD%E5%BF%83/%E7%94%A8%E6%88%B7%E4%B8%AD%E5%BF%83%E6%8A%80%E6%9C%AF%E6%96%87%E6%A1%A3.html"}],["meta",{"property":"og:site_name","content":"HONG_JI"}],["meta",{"property":"og:title","content":"用户中心技术文档"}],["meta",{"property":"og:description","content":"用户中心技术文档 项目负责人 前端：陈晰、李婷妍 后端：胡丽芳、万洪吉 业务： 王玉廷 需求 ：王玉廷 项目介绍 项目背景 在分布式系统中每一个服务都有一套账号，不通用，容易引起混乱和管理不便。基于该问题，需要独立的认证授权系统。支持多租户管理、多组织管理的多领域集成应用，为业务系统提供统一的用户资源和权限资源进行集中的管理 项目技术 持久层框架： A..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-08T14:10:39.000Z"}],["meta",{"property":"article:author","content":"wanhongji"}],["meta",{"property":"article:modified_time","content":"2023-03-08T14:10:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"用户中心技术文档\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-08T14:10:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"wanhongji\\"}]}"]]},"headers":[{"level":2,"title":"项目负责人","slug":"项目负责人","link":"#项目负责人","children":[]},{"level":2,"title":"项目介绍","slug":"项目介绍","link":"#项目介绍","children":[{"level":3,"title":"项目背景","slug":"项目背景","link":"#项目背景","children":[]},{"level":3,"title":"项目技术","slug":"项目技术","link":"#项目技术","children":[]},{"level":3,"title":"功能概述","slug":"功能概述","link":"#功能概述","children":[]}]},{"level":2,"title":"技术实现方式","slug":"技术实现方式","link":"#技术实现方式","children":[{"level":3,"title":"登录流程","slug":"登录流程","link":"#登录流程","children":[]},{"level":3,"title":"前端","slug":"前端","link":"#前端","children":[]},{"level":3,"title":"后端","slug":"后端","link":"#后端","children":[]},{"level":3,"title":"后端接口","slug":"后端接口","link":"#后端接口","children":[]}]}],"git":{"createdTime":1670205349000,"updatedTime":1678284639000,"contributors":[{"name":"wanhongji","email":"wherywan@163.com","commits":2}]},"readingTime":{"minutes":42.35,"words":12705},"filePathRelative":"note/business/techsel/用户中心/用户中心技术文档.md","localizedDate":"2022年12月5日","excerpt":"\\n<h2>项目负责人</h2>\\n<ul>\\n<li>前端：陈晰、李婷妍</li>\\n<li>后端：胡丽芳、万洪吉</li>\\n<li>业务： 王玉廷</li>\\n<li>需求 ：王玉廷</li>\\n</ul>\\n<h2>项目介绍</h2>\\n<h3>项目背景</h3>\\n<p>在分布式系统中每一个服务都有一套账号，不通用，容易引起混乱和管理不便。基于该问题，需要独立的认证授权系统。支持多租户管理、多组织管理的多领域集成应用，为业务系统提供统一的用户资源和权限资源进行集中的管理</p>\\n<h3>项目技术</h3>\\n<ul>\\n<li>持久层框架： Apache Mybatis &amp; Mybatis Plus</li>\\n<li>API 网关：Spring Cloud Gateway</li>\\n<li>服务注册&amp;发现和配置中心: Alibaba Nacos</li>\\n<li>服务消费：Spring Cloud OpenFeign &amp; RestTemplate</li>\\n<li>负载均衡：Spring Cloud Loadbalancer</li>\\n<li>服务熔断&amp;降级&amp;限流：Alibaba Sentinel（暂时未用）</li>\\n<li>服务监控：Spring Boot Admin</li>\\n<li>数据缓存： Redis ，Redission</li>\\n<li>数据库： MySQL</li>\\n<li>JSON 序列化：Jackson &amp; FastJson</li>\\n<li>文件服务： Minio</li>\\n</ul>","autoDesc":true}');export{C as comp,A as data};
