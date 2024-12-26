import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e}from"./app-hoN0JGLf.js";const i={},l=e(`<h1 id="jvm" tabindex="-1"><a class="header-anchor" href="#jvm"><span>jvm</span></a></h1><h2 id="gc" tabindex="-1"><a class="header-anchor" href="#gc"><span>GC</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>  gc即垃圾回收</span></span>
<span class="line"><span>  gc可以帮助程序员实现自动内存管理，而不用程序员手动释放内存，提高开发效率。</span></span>
<span class="line"><span>  判断对象是否存活的算法：</span></span>
<span class="line"><span>  1、可达性分析算法</span></span>
<span class="line"><span>  2、引用计数法 python等语言使用进行内存管理</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>引用计数法</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>引用计数法，对象中维护一个引用计数器，如果对象被引用则数量加1，</span></span>
<span class="line"><span>对象的相互引用导致内存无法回收泄露，如:</span></span>
<span class="line"><span>ObjectA a = new ObjectA();</span></span>
<span class="line"><span>ObjectB b = new ObjectB();</span></span>
<span class="line"><span>a.instance = b;</span></span>
<span class="line"><span>b.instance = a;</span></span>
<span class="line"><span>a = null;</span></span>
<span class="line"><span>b = null;</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>可达性分析算法</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>1、通过一系列被称为GCRoot的根对象作为起始结点集来判段对象是否存活。</span></span>
<span class="line"><span>2、根据引用关系从根节点向下搜索，若某个对象不可达，则对象不再被使用</span></span>
<span class="line"><span>3、可作为GC root的有：</span></span>
<span class="line"><span>	- 虚拟机栈帧的局部变量表引用的对象</span></span>
<span class="line"><span>	- 方法区的类变量，即静态变量</span></span>
<span class="line"><span>	- 方法区的常量</span></span>
<span class="line"><span>	- synchronized持有的监视器对象</span></span>
<span class="line"><span>4、引用可分为强引用(不会回收)、软引用(对软引用回收、若内存还是不足，报内存溢出异常)、弱引用(在第一次垃圾回收时，全部回收)、虚引用</span></span>
<span class="line"><span>5、不可达并不是真正死亡，它会被标记，随后进行筛选，判断是否有必要执行finalize方法，若已执行或未覆盖上述方法，则没有必要执行。若有必要执行则会加入到F-Queue队列,由低优先级的Finalizer线程执行finalize()方法，finalize()是对象避免死亡的最后机会，重新与引用链或路径连接</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>堆的分代划分：新生代（eden区、两个survive区）老年代</span></span>
<span class="line"><span>垃圾收集的区域划分：minorGc,majorGc,fullGc</span></span>
<span class="line"><span>垃圾收集算法如下：</span></span>
<span class="line"><span>1、标记-复制 用于新生代</span></span>
<span class="line"><span>	- 通过对新生代内存划分为eden区、两个survive区，优先分配eden和一个survive区</span></span>
<span class="line"><span>2、标记-清除 </span></span>
<span class="line"><span>	-会产生大量内存碎片，导致无法分配内存，提前触发Gc</span></span>
<span class="line"><span>3、标记整理 用于老年代</span></span>
<span class="line"><span>	-将存活的对象移到内存的一端，清除边界以外的内存</span></span>
<span class="line"><span>根节点枚举，无法避免stop the world 暂停所有用户线程</span></span>
<span class="line"><span>使用oopMap数据结构存放对象的位置信息，保存在安全点，即方法调用，循环跳转、异常跳转</span></span>
<span class="line"><span>安全区域，即sleep的线程如何到安全点，安全点的延申</span></span>
<span class="line"><span>如何让所有线程都跑到安全点的方案：</span></span>
<span class="line"><span>1、抢先式中断</span></span>
<span class="line"><span>2、主动式中断 常用的方案</span></span>
<span class="line"><span>	- 线程在执行过程中，执行到安全点时，若发现垃圾回收标志为真，则主动跑到安全点</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>垃圾收集器：</span></span>
<span class="line"><span>1、新生代</span></span>
<span class="line"><span>	serial 单线程 </span></span>
<span class="line"><span>	parnew 多线程</span></span>
<span class="line"><span>	parallel scavenge 多线程</span></span>
<span class="line"><span>2、老年代</span></span>
<span class="line"><span>	serial old</span></span>
<span class="line"><span>	parallel old</span></span>
<span class="line"><span>cms 并发停顿收集器</span></span>
<span class="line"><span>G1 全功能垃圾收集器</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类加载" tabindex="-1"><a class="header-anchor" href="#类加载"><span>类加载</span></a></h2><ul><li><p>类加载过程</p><ul><li>加载</li><li>连接-验证</li><li>连接-准备</li><li>连接-解析</li><li>初始化</li></ul></li><li><p>双亲委派机制</p><ul><li><p>启动类加载器</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>lang包下的class对象</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>扩展类加载器</p></li><li><p>应用类加载器</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>自定义类的加载器</span></span>
<span class="line"><span>加载自定义类的相关类对象，局部性和空间性</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul>`,8),p=[l];function t(c,d){return s(),a("div",null,p)}const o=n(i,[["render",t],["__file","jvm.html.vue"]]),m=JSON.parse('{"path":"/note/java/jvm.html","title":"jvm","lang":"zh-CN","frontmatter":{"description":"jvm GC 引用计数法 可达性分析算法 类加载 类加载过程 加载 连接-验证 连接-准备 连接-解析 初始化 双亲委派机制 启动类加载器 扩展类加载器 应用类加载器","head":[["meta",{"property":"og:url","content":"https://wherywan.github.io/note/java/jvm.html"}],["meta",{"property":"og:site_name","content":"HONG_JI"}],["meta",{"property":"og:title","content":"jvm"}],["meta",{"property":"og:description","content":"jvm GC 引用计数法 可达性分析算法 类加载 类加载过程 加载 连接-验证 连接-准备 连接-解析 初始化 双亲委派机制 启动类加载器 扩展类加载器 应用类加载器"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-03T16:27:07.000Z"}],["meta",{"property":"article:author","content":"wanhongji"}],["meta",{"property":"article:modified_time","content":"2023-08-03T16:27:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"jvm\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-03T16:27:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"wanhongji\\"}]}"]]},"headers":[{"level":2,"title":"GC","slug":"gc","link":"#gc","children":[]},{"level":2,"title":"类加载","slug":"类加载","link":"#类加载","children":[]}],"git":{"createdTime":1657433155000,"updatedTime":1691080027000,"contributors":[{"name":"wanhongji","email":"wherywan@163.com","commits":2},{"name":"wanhongji","email":"wan_hongji@163.com","commits":1}]},"readingTime":{"minutes":2.78,"words":834},"filePathRelative":"note/java/jvm.md","localizedDate":"2022年7月10日","excerpt":"\\n<h2>GC</h2>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"shiki light-plus\\" style=\\"background-color:#FFFFFF;color:#000000\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span>  gc即垃圾回收</span></span>\\n<span class=\\"line\\"><span>  gc可以帮助程序员实现自动内存管理，而不用程序员手动释放内存，提高开发效率。</span></span>\\n<span class=\\"line\\"><span>  判断对象是否存活的算法：</span></span>\\n<span class=\\"line\\"><span>  1、可达性分析算法</span></span>\\n<span class=\\"line\\"><span>  2、引用计数法 python等语言使用进行内存管理</span></span>\\n<span class=\\"line\\"><span></span></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{o as comp,m as data};
