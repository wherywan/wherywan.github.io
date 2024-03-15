import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as p,c as o,a as s,b as n,d as t,f as i}from"./app-f83986bb.js";const r={},c=s("h1",{id:"maven库搭建",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#maven库搭建","aria-hidden":"true"},"#"),n(" maven库搭建")],-1),d={href:"https://blog.csdn.net/liuerpeng1904/article/details/128499275",target:"_blank",rel:"noopener noreferrer"},y=i(`<h2 id="docker搭建" tabindex="-1"><a class="header-anchor" href="#docker搭建" aria-hidden="true">#</a> docker搭建</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#795E26;">docker</span><span style="color:#000000;"> </span><span style="color:#A31515;">pull</span><span style="color:#000000;"> </span><span style="color:#A31515;">sonatype/nexus3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#795E26;">mkdir</span><span style="color:#000000;"> </span><span style="color:#A31515;">/home/data/nexus</span></span>
<span class="line"></span>
<span class="line"><span style="color:#795E26;">chown</span><span style="color:#000000;"> </span><span style="color:#0000FF;">-R</span><span style="color:#000000;"> </span><span style="color:#098658;">777</span><span style="color:#000000;"> </span><span style="color:#A31515;">/home/data/nexus</span></span>
<span class="line"></span>
<span class="line"><span style="color:#795E26;">docker</span><span style="color:#000000;"> </span><span style="color:#A31515;">run</span><span style="color:#000000;"> </span><span style="color:#0000FF;">-itd</span><span style="color:#000000;"> </span><span style="color:#EE0000;">\\ </span></span>
<span class="line"><span style="color:#795E26;">-p</span><span style="color:#000000;"> </span><span style="color:#098658;">8081</span><span style="color:#A31515;">:8081</span><span style="color:#000000;"> </span><span style="color:#EE0000;">\\</span></span>
<span class="line"><span style="color:#000000;">--name </span><span style="color:#A31515;">nexus</span><span style="color:#000000;"> </span><span style="color:#EE0000;">\\</span></span>
<span class="line"><span style="color:#000000;">-e </span><span style="color:#A31515;">NEXUS_CONTEXT=nexus</span><span style="color:#000000;"> </span><span style="color:#EE0000;">\\</span></span>
<span class="line"><span style="color:#000000;">-v </span><span style="color:#A31515;">/home/data/nexus:/nexus-data</span><span style="color:#000000;"> </span><span style="color:#EE0000;">\\</span></span>
<span class="line"><span style="color:#000000;">镜像ID</span></span>
<span class="line"></span>
<span class="line"><span style="color:#008000;"># 命令讲解 : </span></span>
<span class="line"><span style="color:#008000;"># 8081:8081表示宿主机端口和容器端口映射</span></span>
<span class="line"><span style="color:#008000;"># NEXUS_CONTEXT=nexus表示在访问Nexus后台web时，需要带上nexus进行访问，如http://ip:8081/nexus</span></span>
<span class="line"><span style="color:#008000;"># 本地若不存在sonatype/nexus3镜像，则会去下载，下载完毕后直接启动</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="仓库说明" tabindex="-1"><a class="header-anchor" href="#仓库说明" aria-hidden="true">#</a> 仓库说明</h2><ul><li>maven-central : maven 中央库，默认从 https://repo1.maven.org/maven2/ 拉取 jar</li><li>maven-releases : 私库发行版 jar，初次安装请将 Deployment policy 设置为 Allow redeploy</li><li>maven-snapshots : 私库快照（调试版本）jar</li><li>maven-public : 仓库分组，把上面三个仓库组合在一起对外提供服务，在本地 maven 基础配置 settings.xml 或项目 pom.xml 中使用</li></ul><h2 id="xml" tabindex="-1"><a class="header-anchor" href="#xml" aria-hidden="true">#</a> xml</h2><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#008000;">&lt;!-- 1 : 配置远程仓库的Nexus的登录面,第一个是用户 , 第二个是仓库--&gt;</span></span>
<span class="line"><span style="color:#800000;">&lt;servers&gt;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#800000;">&lt;server&gt;</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#008000;">&lt;!--        记住这个ID , 一会要用到--&gt;</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#800000;">&lt;id&gt;</span><span style="color:#000000;">releases</span><span style="color:#800000;">&lt;/id&gt;</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#800000;">&lt;username&gt;</span><span style="color:#000000;">admin</span><span style="color:#800000;">&lt;/username&gt;</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#800000;">&lt;password&gt;</span><span style="color:#000000;">czgj-88888888</span><span style="color:#800000;">&lt;/password&gt;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#800000;">&lt;/server&gt;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#800000;">&lt;server&gt;</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#008000;">&lt;!--        记住这个ID , 一会要用到--&gt;</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#800000;">&lt;id&gt;</span><span style="color:#000000;">snapshots</span><span style="color:#800000;">&lt;/id&gt;</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#800000;">&lt;username&gt;</span><span style="color:#000000;">admin</span><span style="color:#800000;">&lt;/username&gt;</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#800000;">&lt;password&gt;</span><span style="color:#000000;">czgj-88888888</span><span style="color:#800000;">&lt;/password&gt;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#800000;">&lt;/server&gt;</span></span>
<span class="line"><span style="color:#800000;">&lt;/servers&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#008000;">&lt;!-- 2. 配置仓库地址 : 远程仓库的地址 --&gt;</span></span>
<span class="line"><span style="color:#800000;">&lt;mirrors&gt;</span></span>
<span class="line"><span style="color:#800000;">&lt;mirror&gt;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#800000;">&lt;id&gt;</span><span style="color:#000000;">releases</span><span style="color:#800000;">&lt;/id&gt;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#800000;">&lt;mirrorOf&gt;</span><span style="color:#000000;">*</span><span style="color:#800000;">&lt;/mirrorOf&gt;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#800000;">&lt;name&gt;</span><span style="color:#000000;">成长轨迹仓库</span><span style="color:#800000;">&lt;/name&gt;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#800000;">&lt;url&gt;</span><span style="color:#000000;">http://#{ip}:8081/nexus/repository/maven-public/</span><span style="color:#800000;">&lt;/url&gt;</span></span>
<span class="line"><span style="color:#800000;">&lt;/mirror&gt;</span></span>
<span class="line"><span style="color:#800000;">&lt;/mirrors&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#800000;">&lt;profiles&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#008000;">&lt;!-- 3 : 配置JDK--&gt;</span></span>
<span class="line"><span style="color:#800000;">&lt;profile&gt;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#800000;">&lt;id&gt;</span><span style="color:#000000;">jdk-1.8</span><span style="color:#800000;">&lt;/id&gt;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#800000;">&lt;activation&gt;</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#800000;">&lt;activeByDefault&gt;</span><span style="color:#000000;">true</span><span style="color:#800000;">&lt;/activeByDefault&gt;</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#800000;">&lt;jdk&gt;</span><span style="color:#000000;">1.8</span><span style="color:#800000;">&lt;/jdk&gt;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#800000;">&lt;/activation&gt;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#800000;">&lt;properties&gt;</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#800000;">&lt;maven.compiler.source&gt;</span><span style="color:#000000;">1.8</span><span style="color:#800000;">&lt;/maven.compiler.source&gt;</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#800000;">&lt;maven.compiler.target&gt;</span><span style="color:#000000;">1.8</span><span style="color:#800000;">&lt;/maven.compiler.target&gt;</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#800000;">&lt;maven.compiler.compilerVersion&gt;</span><span style="color:#000000;">1.8</span><span style="color:#800000;">&lt;/maven.compiler.compilerVersion&gt;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#800000;">&lt;/properties&gt;</span></span>
<span class="line"><span style="color:#800000;">&lt;/profile&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#008000;">&lt;!-- 4 : 配置默认从远程仓库下载依赖--&gt;</span></span>
<span class="line"><span style="color:#800000;">&lt;profile&gt;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#800000;">&lt;id&gt;</span><span style="color:#000000;">nexus-pr</span><span style="color:#800000;">&lt;/id&gt;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#008000;">&lt;!-- 远程仓库列表 --&gt;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#800000;">&lt;repositories&gt;</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#800000;">&lt;repository&gt;</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#800000;">&lt;id&gt;</span><span style="color:#000000;">nexus</span><span style="color:#800000;">&lt;/id&gt;</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#800000;">&lt;name&gt;</span><span style="color:#000000;">Nexus Central</span><span style="color:#800000;">&lt;/name&gt;</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#008000;">&lt;!-- 虚拟的URL形式,指向镜像的URL--&gt;</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#800000;">&lt;url&gt;</span><span style="color:#000000;">http://#{ip}:8081/nexus/repository/maven-public/</span><span style="color:#800000;">&lt;/url&gt;</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#800000;">&lt;layout&gt;</span><span style="color:#000000;">default</span><span style="color:#800000;">&lt;/layout&gt;</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#008000;">&lt;!-- 表示可以从这个仓库下载releases版本的构件--&gt;</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#800000;">&lt;releases&gt;</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#800000;">&lt;enabled&gt;</span><span style="color:#000000;">true</span><span style="color:#800000;">&lt;/enabled&gt;</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#800000;">&lt;/releases&gt;</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#008000;">&lt;!-- 表示可以从这个仓库下载snapshot版本的构件 --&gt;</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#800000;">&lt;snapshots&gt;</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#800000;">&lt;enabled&gt;</span><span style="color:#000000;">true</span><span style="color:#800000;">&lt;/enabled&gt;</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#800000;">&lt;/snapshots&gt;</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#800000;">&lt;/repository&gt;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#800000;">&lt;/repositories&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#008000;">&lt;!-- 插件仓库列表 --&gt;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#800000;">&lt;pluginRepositories&gt;</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#800000;">&lt;pluginRepository&gt;</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#800000;">&lt;id&gt;</span><span style="color:#000000;">nexus</span><span style="color:#800000;">&lt;/id&gt;</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#800000;">&lt;name&gt;</span><span style="color:#000000;">Nexus Central</span><span style="color:#800000;">&lt;/name&gt;</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#800000;">&lt;url&gt;</span><span style="color:#000000;">http://#{ip}:8081/nexus/repository/maven-public/</span><span style="color:#800000;">&lt;/url&gt;</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#800000;">&lt;layout&gt;</span><span style="color:#000000;">default</span><span style="color:#800000;">&lt;/layout&gt;</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#800000;">&lt;snapshots&gt;</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#800000;">&lt;enabled&gt;</span><span style="color:#000000;">true</span><span style="color:#800000;">&lt;/enabled&gt;</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#800000;">&lt;/snapshots&gt;</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#800000;">&lt;releases&gt;</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#800000;">&lt;enabled&gt;</span><span style="color:#000000;">true</span><span style="color:#800000;">&lt;/enabled&gt;</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#800000;">&lt;/releases&gt;</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#800000;">&lt;/pluginRepository&gt;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#800000;">&lt;/pluginRepositories&gt;</span></span>
<span class="line"><span style="color:#800000;">&lt;/profile&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#800000;">&lt;/profiles&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#008000;">&lt;!-- 5 : 激活相应的配置--&gt;</span></span>
<span class="line"><span style="color:#800000;">&lt;activeProfiles&gt;</span></span>
<span class="line"><span style="color:#800000;">&lt;activeProfile&gt;</span><span style="color:#000000;">nexus-pr</span><span style="color:#800000;">&lt;/activeProfile&gt;</span></span>
<span class="line"><span style="color:#800000;">&lt;activeProfile&gt;</span><span style="color:#000000;">jdk-1.8</span><span style="color:#800000;">&lt;/activeProfile&gt;</span></span>
<span class="line"><span style="color:#800000;">&lt;/activeProfiles&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="发布" tabindex="-1"><a class="header-anchor" href="#发布" aria-hidden="true">#</a> 发布</h2><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">    </span><span style="color:#008000;">&lt;!--    使用成长轨迹的maven库--&gt;</span></span>
<span class="line"><span style="color:#800000;">&lt;distributionManagement&gt;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#800000;">&lt;repository&gt;</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#008000;">&lt;!--            这个ID就是刚才setting.xml文件中的id --&gt;</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#800000;">&lt;id&gt;</span><span style="color:#000000;">releases</span><span style="color:#800000;">&lt;/id&gt;</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#800000;">&lt;url&gt;</span><span style="color:#000000;">http://#{ip}:8081/nexus/repository/maven-releases/</span><span style="color:#800000;">&lt;/url&gt;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#800000;">&lt;/repository&gt;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#008000;">&lt;!--        仓库的路径--&gt;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#800000;">&lt;snapshotRepository&gt;</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#008000;">&lt;!--            这个ID就是刚才setting.xml文件中的id --&gt;</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#800000;">&lt;id&gt;</span><span style="color:#000000;">snapshots</span><span style="color:#800000;">&lt;/id&gt;</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#800000;">&lt;url&gt;</span><span style="color:#000000;">http://#{ip}:8081/nexus/repository/maven-snapshots/</span><span style="color:#800000;">&lt;/url&gt;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#800000;">&lt;/snapshotRepository&gt;</span></span>
<span class="line"><span style="color:#800000;">&lt;/distributionManagement&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function v(u,m){const l=e("ExternalLinkIcon");return p(),o("div",null,[c,s("p",null,[s("a",d,[n("参考"),t(l)])]),y])}const h=a(r,[["render",v],["__file","maven仓库.html.vue"]]);export{h as default};
