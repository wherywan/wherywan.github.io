import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,f as l}from"./app-f83986bb.js";const e={},i=l(`<h1 id="jvm" tabindex="-1"><a class="header-anchor" href="#jvm" aria-hidden="true">#</a> jvm</h1><h2 id="gc" tabindex="-1"><a class="header-anchor" href="#gc" aria-hidden="true">#</a> GC</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">  gc即垃圾回收</span></span>
<span class="line"><span style="color:#000000;">  gc可以帮助程序员实现自动内存管理，而不用程序员手动释放内存，提高开发效率。</span></span>
<span class="line"><span style="color:#000000;">  判断对象是否存活的算法：</span></span>
<span class="line"><span style="color:#000000;">  1、可达性分析算法</span></span>
<span class="line"><span style="color:#000000;">  2、引用计数法 python等语言使用进行内存管理</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>引用计数法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">引用计数法，对象中维护一个引用计数器，如果对象被引用则数量加1，</span></span>
<span class="line"><span style="color:#000000;">对象的相互引用导致内存无法回收泄露，如:</span></span>
<span class="line"><span style="color:#000000;">ObjectA a = new ObjectA();</span></span>
<span class="line"><span style="color:#000000;">ObjectB b = new ObjectB();</span></span>
<span class="line"><span style="color:#000000;">a.instance = b;</span></span>
<span class="line"><span style="color:#000000;">b.instance = a;</span></span>
<span class="line"><span style="color:#000000;">a = null;</span></span>
<span class="line"><span style="color:#000000;">b = null;</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>可达性分析算法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">1、通过一系列被称为GCRoot的根对象作为起始结点集来判段对象是否存活。</span></span>
<span class="line"><span style="color:#000000;">2、根据引用关系从根节点向下搜索，若某个对象不可达，则对象不再被使用</span></span>
<span class="line"><span style="color:#000000;">3、可作为GC root的有：</span></span>
<span class="line"><span style="color:#000000;">	- 虚拟机栈帧的局部变量表引用的对象</span></span>
<span class="line"><span style="color:#000000;">	- 方法区的类变量，即静态变量</span></span>
<span class="line"><span style="color:#000000;">	- 方法区的常量</span></span>
<span class="line"><span style="color:#000000;">	- synchronized持有的监视器对象</span></span>
<span class="line"><span style="color:#000000;">4、引用可分为强引用(不会回收)、软引用(对软引用回收、若内存还是不足，报内存溢出异常)、弱引用(在第一次垃圾回收时，全部回收)、虚引用</span></span>
<span class="line"><span style="color:#000000;">5、不可达并不是真正死亡，它会被标记，随后进行筛选，判断是否有必要执行finalize方法，若已执行或未覆盖上述方法，则没有必要执行。若有必要执行则会加入到F-Queue队列,由低优先级的Finalizer线程执行finalize()方法，finalize()是对象避免死亡的最后机会，重新与引用链或路径连接</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">堆的分代划分：新生代（eden区、两个survive区）老年代</span></span>
<span class="line"><span style="color:#000000;">垃圾收集的区域划分：minorGc,majorGc,fullGc</span></span>
<span class="line"><span style="color:#000000;">垃圾收集算法如下：</span></span>
<span class="line"><span style="color:#000000;">1、标记-复制 用于新生代</span></span>
<span class="line"><span style="color:#000000;">	- 通过对新生代内存划分为eden区、两个survive区，优先分配eden和一个survive区</span></span>
<span class="line"><span style="color:#000000;">2、标记-清除 </span></span>
<span class="line"><span style="color:#000000;">	-会产生大量内存碎片，导致无法分配内存，提前触发Gc</span></span>
<span class="line"><span style="color:#000000;">3、标记整理 用于老年代</span></span>
<span class="line"><span style="color:#000000;">	-将存活的对象移到内存的一端，清除边界以外的内存</span></span>
<span class="line"><span style="color:#000000;">根节点枚举，无法避免stop the world 暂停所有用户线程</span></span>
<span class="line"><span style="color:#000000;">使用oopMap数据结构存放对象的位置信息，保存在安全点，即方法调用，循环跳转、异常跳转</span></span>
<span class="line"><span style="color:#000000;">安全区域，即sleep的线程如何到安全点，安全点的延申</span></span>
<span class="line"><span style="color:#000000;">如何让所有线程都跑到安全点的方案：</span></span>
<span class="line"><span style="color:#000000;">1、抢先式中断</span></span>
<span class="line"><span style="color:#000000;">2、主动式中断 常用的方案</span></span>
<span class="line"><span style="color:#000000;">	- 线程在执行过程中，执行到安全点时，若发现垃圾回收标志为真，则主动跑到安全点</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">垃圾收集器：</span></span>
<span class="line"><span style="color:#000000;">1、新生代</span></span>
<span class="line"><span style="color:#000000;">	serial 单线程 </span></span>
<span class="line"><span style="color:#000000;">	parnew 多线程</span></span>
<span class="line"><span style="color:#000000;">	parallel scavenge 多线程</span></span>
<span class="line"><span style="color:#000000;">2、老年代</span></span>
<span class="line"><span style="color:#000000;">	serial old</span></span>
<span class="line"><span style="color:#000000;">	parallel old</span></span>
<span class="line"><span style="color:#000000;">cms 并发停顿收集器</span></span>
<span class="line"><span style="color:#000000;">G1 全功能垃圾收集器</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类加载" tabindex="-1"><a class="header-anchor" href="#类加载" aria-hidden="true">#</a> 类加载</h2><ul><li><p>类加载过程</p><ul><li>加载</li><li>连接-验证</li><li>连接-准备</li><li>连接-解析</li><li>初始化</li></ul></li><li><p>双亲委派机制</p><ul><li><p>启动类加载器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">lang包下的class对象</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>扩展类加载器</p></li><li><p>应用类加载器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">自定义类的加载器</span></span>
<span class="line"><span style="color:#000000;">加载自定义类的相关类对象，局部性和空间性</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul>`,8),p=[i];function c(d,r){return n(),a("div",null,p)}const v=s(e,[["render",c],["__file","jvm.html.vue"]]);export{v as default};
