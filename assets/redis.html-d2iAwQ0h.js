import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,e as l}from"./app-hoN0JGLf.js";const e={},p=l(`<h1 id="redis" tabindex="-1"><a class="header-anchor" href="#redis"><span>redis</span></a></h1><h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用"><span>基本使用</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span style="color:#008000;"># 删除所有key </span></span>
<span class="line"><span style="color:#795E26;">FLUSHALL</span><span style="color:#000000;"> </span></span>
<span class="line"><span style="color:#008000;"># 选择数据库</span></span>
<span class="line"><span style="color:#AF00DB;">select</span><span style="color:#001080;"> 0</span></span>
<span class="line"><span style="color:#008000;">#当前数据库所有key数量</span></span>
<span class="line"><span style="color:#795E26;">DBsize</span></span>
<span class="line"><span style="color:#008000;"># 开启redis客户端</span></span>
<span class="line"><span style="color:#795E26;">redis-cli</span></span>
<span class="line"></span>
<span class="line"><span style="color:#008000;"># --列出当前库的所有key</span></span>
<span class="line"><span style="color:#795E26;">keys</span><span style="color:#0000FF;"> *</span><span style="color:#000000;"> </span></span>
<span class="line"><span style="color:#008000;"># --判断某个key是否存在</span></span>
<span class="line"><span style="color:#795E26;">exists</span><span style="color:#A31515;"> key</span><span style="color:#000000;"> </span></span>
<span class="line"><span style="color:#008000;"># --移除当前库并复制到指定库</span></span>
<span class="line"><span style="color:#795E26;">move</span><span style="color:#A31515;"> key</span><span style="color:#A31515;"> db</span><span style="color:#000000;"> </span></span>
<span class="line"><span style="color:#008000;"># -- 给指定的key设置过期时间(秒钟)</span></span>
<span class="line"><span style="color:#795E26;">expire</span><span style="color:#A31515;"> key</span><span style="color:#000000;"> </span></span>
<span class="line"><span style="color:#008000;"># --查看还有多少秒过期(-1表示永不过期-2表示已过期)</span></span>
<span class="line"><span style="color:#795E26;">ttl</span><span style="color:#A31515;"> key</span><span style="color:#000000;"> </span></span>
<span class="line"><span style="color:#008000;"># --查看key是什么数据类型</span></span>
<span class="line"><span style="color:#795E26;">type</span><span style="color:#A31515;"> key</span><span style="color:#000000;"> </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hash" tabindex="-1"><a class="header-anchor" href="#hash"><span>hash</span></a></h3><p>Hash(哈希) key-value模式不变，但value是一个键值对</p><ul><li>hset/hget/hmset/hmget/hgetall/hdel --一个或多个设置/获取/删除值</li><li>hlen --返回hash的field数量</li><li>hexists myhash field --验证field是否存在</li><li>hkeys/hvals -- 返回hash所有的field/value</li><li>hincrby/hincrbyfloat --给hash中的filed加上指定的值/指定的浮点数</li><li>hsetnx hash field value --不存在的情况下设置hash的field为value,存在不做任何操作</li></ul><h3 id="string" tabindex="-1"><a class="header-anchor" href="#string"><span>string</span></a></h3><p>String(字符串)：</p><ul><li>set/get/del/append/strlen --添加/查询/删除/拼接/长度</li><li>incr/decr/incrby/decrby --自增/自减/按指定值增加/按指定值减少,一定要是数字才能加减</li><li>getrange/setrange --获取指定区间范围内的值/设置指定区间范围内的值，超过字符串长度的自动用x00补齐</li><li>setex(set key expire value)/setnx(set if not exist) --设置key对应的值value,并设置有效期(秒)/如果不存在，则set,存在则不做任何动作</li><li>mset/mget/msetnx --同时设置/获取一个或多个值，msetnx 设置的key都不存在时才成功，反之则失败。</li><li>getset key value --将给定 key 的值设为 value ，并返回 key 的旧值(old value)</li></ul><h2 id="待整理" tabindex="-1"><a class="header-anchor" href="#待整理"><span>待整理</span></a></h2><p>Redis的使用</p><p>在订单导入时，涉及服务间的数据传输，将导入的文件输入流放在redis缓存中，同时发送服务调用请求到数据交换服务从缓存中取字节数组，在通过oss的sdk工具将数据上传到阿里云的oss中</p><p>订单导入时，商品信息是变动量较小的信息，会根据导入的商品code查询商品信息给对应的订单实体类赋值，放在redis缓存中，这样就避免了多次查询数据库的耗时操作，</p><p>如何保证数据一致性？</p><p>我使用的做法是先清空对应商品的缓存，同时更新对应的商品信息</p><p>redis的持久化方式?</p><p>RDF和aof文件</p><p>rdf是默认的持久化方式，aof是需要配置文件开启</p><p>一般采用aof的方式进行持久化，它会记录所有写操作命令，并且它是实时持久化的，数据恢复也比较快</p><p>rdf一般在主从复制的时候，使用bgsave命令进行某一时刻的数据进行存盘。</p><p>数据结构</p><p>hash string list set zset</p><p>zset是基于跳表，它是对链表的再次抽象，再抽出一层子链表，即每个链表中维护了下一节点的数组，索引为0的最上面一层链表</p><p>setNx setex hset给hash设值</p><p>getset方法 若不存在返回nil 存在返回旧值</p><p>为什么使用redis,而不用mongdb?</p><ul><li>redis是一个单线程处理请求，避免了多线程处理的上下文切换</li><li>redis有较丰富的数据结构</li><li>redis对请求的处理使用了基于epoll的非阻塞IO模型，它能够处理大量的请求，以及redis自身的较好事件处理模型</li><li>redis支持数据的持久化</li></ul><p>Redis分布式锁的使用</p><p>无单发货，当在发货单页面时，无单发货单点击一键发货时，如果误操作点了两次，可能生成多张拣货单，扣减库存</p><p>这时就需要使用redis分布式锁进行处理，使用对订单id创建锁实例，trylock尝试竞争锁的方式获取锁</p><p>为什么不用sychronized,原理是是什么？</p><ul><li>服务集群有多个节点，sychronized只适用于单体应用</li><li>锁升级，00乐观锁 01 10重量级锁</li><li>sychronized是重量级锁，如果获取锁失败，线程就会挂起，涉及操作系统用户态切换内核态，线程上下文切换</li><li>cas是乐观锁的实现方式，即比较和交换，在操作共享变量时，写入操作时，是否是原值，若不是自旋获取新值变更数据</li></ul><p>查询当前仓库下的所有发货单时，如果未传具体的货主，那么就要根据租户id查询当前仓库下有权限的货主，查询租户下所有货主的发货单</p><p>货主的查询功能</p><blockquote><p>结合aop使用</p></blockquote><p>缓存的使用，使用aop，切点为被@Cache和@CacheClear修饰的方法</p><p>也可用在Mapper方法上，统计sql的耗时时间</p><p>@Pointcut(&quot;execution(* com.saascloud.scms.wms.mapper.Mapper.(..))&quot;)</p><p>@pointCut(@annotation)</p><p>@Around</p><p>@Aspect</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>@Pointcut(&quot;@annotation(com.saascloud.common.cache.annotation.Cache)&quot;)</span></span>
<span class="line"><span>    public void aspect() {</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    @Around(&quot;aspect()&amp;&amp;@annotation(anno)&quot;)</span></span>
<span class="line"><span>    public Object interceptor(ProceedingJoinPoint invocation, Cache anno)</span></span>
<span class="line"><span>            throws Throwable {</span></span>
<span class="line"><span>        MethodSignature signature = (MethodSignature) invocation.getSignature();</span></span>
<span class="line"><span>        Method method = signature.getMethod();</span></span>
<span class="line"><span>        Object result = null;</span></span>
<span class="line"><span>        Class&lt;?&gt;[] parameterTypes = method.getParameterTypes();</span></span>
<span class="line"><span>        Object[] arguments = invocation.getArgs();</span></span>
<span class="line"><span>        String key = &quot;&quot;;</span></span>
<span class="line"><span>        String value = &quot;&quot;;</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            key = getKey(anno, parameterTypes, arguments);</span></span>
<span class="line"><span>            value = cacheAPI.get(key);</span></span>
<span class="line"><span>            Type returnType = method.getGenericReturnType();</span></span>
<span class="line"><span>            result = getResult(anno, result, value, returnType);</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>            log.error(&quot;获取缓存失败：&quot; + key, e);</span></span>
<span class="line"><span>        } finally {</span></span>
<span class="line"><span>            if (result == null) {</span></span>
<span class="line"><span>                result = invocation.proceed();</span></span>
<span class="line"><span>                if (StringUtils.isNotBlank(key) &amp;&amp; anno.store()) {</span></span>
<span class="line"><span>                    cacheAPI.set(key, result, anno.expire());</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return result;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>手写分布式锁</p></blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span style="color:#0000FF;">public</span><span style="color:#0000FF;"> class</span><span style="color:#267F99;"> RedisDistributedLock</span></span>
<span class="line"><span style="color:#000000;">    {</span></span>
<span class="line"><span style="color:#000000;">        </span></span>
<span class="line"><span style="color:#0000FF;">        public</span><span style="color:#0000FF;"> static</span><span style="color:#0000FF;"> final</span><span style="color:#267F99;"> String</span><span style="color:#001080;"> LOCK_PREFIX</span><span style="color:#000000;"> = </span><span style="color:#A31515;">&quot;redis_lock&quot;</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">        </span></span>
<span class="line"><span style="color:#000000;">        @</span><span style="color:#267F99;">Autowired</span></span>
<span class="line"><span style="color:#0000FF;">        private</span><span style="color:#267F99;"> RedisTemplate</span><span style="color:#001080;"> redisTemplate</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">        </span></span>
<span class="line"><span style="color:#008000;">        /**</span></span>
<span class="line"><span style="color:#008000;">         * 最终加强分布式锁</span></span>
<span class="line"><span style="color:#008000;">         *</span></span>
<span class="line"><span style="color:#008000;">         * </span><span style="color:#0000FF;">@param</span><span style="color:#001080;"> key</span><span style="color:#008000;"> key值</span></span>
<span class="line"><span style="color:#008000;">         * </span><span style="color:#0000FF;">@return</span><span style="color:#008000;"> 是否获取到</span></span>
<span class="line"><span style="color:#008000;">         */</span></span>
<span class="line"><span style="color:#0000FF;">        public</span><span style="color:#267F99;"> boolean</span><span style="color:#795E26;"> lock</span><span style="color:#000000;">(</span><span style="color:#267F99;">String</span><span style="color:#001080;"> key</span><span style="color:#000000;">, </span><span style="color:#267F99;">int</span><span style="color:#001080;"> LOCK_EXPIRE</span><span style="color:#000000;">)</span></span>
<span class="line"><span style="color:#000000;">        {</span></span>
<span class="line"><span style="color:#267F99;">            String</span><span style="color:#001080;"> lock</span><span style="color:#000000;"> = LOCK_PREFIX + key;</span></span>
<span class="line"><span style="color:#008000;">            // 利用lambda表达式</span></span>
<span class="line"><span style="color:#AF00DB;">            return</span><span style="color:#000000;"> (Boolean)</span><span style="color:#001080;">redisTemplate</span><span style="color:#000000;">.</span><span style="color:#795E26;">execute</span><span style="color:#000000;">((RedisCallback)connection </span><span style="color:#0000FF;">-&gt;</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">                </span></span>
<span class="line"><span style="color:#267F99;">                long</span><span style="color:#001080;"> expireAt</span><span style="color:#000000;"> = </span><span style="color:#001080;">System</span><span style="color:#000000;">.</span><span style="color:#795E26;">currentTimeMillis</span><span style="color:#000000;">() + LOCK_EXPIRE + </span><span style="color:#098658;">1</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#267F99;">                Boolean</span><span style="color:#001080;"> acquire</span><span style="color:#000000;"> = </span><span style="color:#001080;">connection</span><span style="color:#000000;">.</span><span style="color:#795E26;">setNX</span><span style="color:#000000;">(</span><span style="color:#001080;">lock</span><span style="color:#000000;">.</span><span style="color:#795E26;">getBytes</span><span style="color:#000000;">(), </span><span style="color:#001080;">String</span><span style="color:#000000;">.</span><span style="color:#795E26;">valueOf</span><span style="color:#000000;">(expireAt).</span><span style="color:#795E26;">getBytes</span><span style="color:#000000;">());</span></span>
<span class="line"><span style="color:#000000;">                </span></span>
<span class="line"><span style="color:#AF00DB;">                if</span><span style="color:#000000;"> (acquire)</span></span>
<span class="line"><span style="color:#000000;">                {</span></span>
<span class="line"><span style="color:#AF00DB;">                    return</span><span style="color:#0000FF;"> true</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">                }</span></span>
<span class="line"><span style="color:#AF00DB;">                else</span></span>
<span class="line"><span style="color:#000000;">                {</span></span>
<span class="line"><span style="color:#000000;">                    </span></span>
<span class="line"><span style="color:#267F99;">                    byte</span><span style="color:#000000;">[] </span><span style="color:#001080;">value</span><span style="color:#000000;"> = </span><span style="color:#001080;">connection</span><span style="color:#000000;">.</span><span style="color:#795E26;">get</span><span style="color:#000000;">(</span><span style="color:#001080;">lock</span><span style="color:#000000;">.</span><span style="color:#795E26;">getBytes</span><span style="color:#000000;">());</span></span>
<span class="line"><span style="color:#000000;">                    </span></span>
<span class="line"><span style="color:#AF00DB;">                    if</span><span style="color:#000000;"> (</span><span style="color:#001080;">Objects</span><span style="color:#000000;">.</span><span style="color:#795E26;">nonNull</span><span style="color:#000000;">(value) &amp;&amp; </span><span style="color:#001080;">value</span><span style="color:#000000;">.</span><span style="color:#001080;">length</span><span style="color:#000000;"> &gt; </span><span style="color:#098658;">0</span><span style="color:#000000;">)</span></span>
<span class="line"><span style="color:#000000;">                    {</span></span>
<span class="line"><span style="color:#000000;">                        </span></span>
<span class="line"><span style="color:#267F99;">                        long</span><span style="color:#001080;"> expireTime</span><span style="color:#000000;"> = </span><span style="color:#001080;">Long</span><span style="color:#000000;">.</span><span style="color:#795E26;">parseLong</span><span style="color:#000000;">(</span><span style="color:#AF00DB;">new</span><span style="color:#795E26;"> String</span><span style="color:#000000;">(value));</span></span>
<span class="line"><span style="color:#000000;">                        </span></span>
<span class="line"><span style="color:#AF00DB;">                        if</span><span style="color:#000000;"> (expireTime &lt; </span><span style="color:#001080;">System</span><span style="color:#000000;">.</span><span style="color:#795E26;">currentTimeMillis</span><span style="color:#000000;">())</span></span>
<span class="line"><span style="color:#000000;">                        {</span></span>
<span class="line"><span style="color:#008000;">                            // 如果锁已经过期</span></span>
<span class="line"><span style="color:#267F99;">                            byte</span><span style="color:#000000;">[] </span><span style="color:#001080;">oldValue</span><span style="color:#000000;"> = </span><span style="color:#001080;">connection</span><span style="color:#000000;">.</span><span style="color:#795E26;">getSet</span><span style="color:#000000;">(</span><span style="color:#001080;">lock</span><span style="color:#000000;">.</span><span style="color:#795E26;">getBytes</span><span style="color:#000000;">(),</span></span>
<span class="line"><span style="color:#001080;">                                String</span><span style="color:#000000;">.</span><span style="color:#795E26;">valueOf</span><span style="color:#000000;">(</span><span style="color:#001080;">System</span><span style="color:#000000;">.</span><span style="color:#795E26;">currentTimeMillis</span><span style="color:#000000;">() + LOCK_EXPIRE + </span><span style="color:#098658;">1</span><span style="color:#000000;">).</span><span style="color:#795E26;">getBytes</span><span style="color:#000000;">());</span></span>
<span class="line"><span style="color:#008000;">                            // 防止死锁</span></span>
<span class="line"><span style="color:#AF00DB;">                            return</span><span style="color:#001080;"> Long</span><span style="color:#000000;">.</span><span style="color:#795E26;">parseLong</span><span style="color:#000000;">(</span><span style="color:#AF00DB;">new</span><span style="color:#795E26;"> String</span><span style="color:#000000;">(oldValue)) &lt; </span><span style="color:#001080;">System</span><span style="color:#000000;">.</span><span style="color:#795E26;">currentTimeMillis</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#000000;">                        }</span></span>
<span class="line"><span style="color:#000000;">                    }</span></span>
<span class="line"><span style="color:#000000;">                }</span></span>
<span class="line"><span style="color:#AF00DB;">                return</span><span style="color:#0000FF;"> false</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">            });</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">        </span></span>
<span class="line"><span style="color:#008000;">        /**</span></span>
<span class="line"><span style="color:#008000;">         * 删除锁</span></span>
<span class="line"><span style="color:#008000;">         *</span></span>
<span class="line"><span style="color:#008000;">         * </span><span style="color:#0000FF;">@param</span><span style="color:#001080;"> key</span></span>
<span class="line"><span style="color:#008000;">         */</span></span>
<span class="line"><span style="color:#0000FF;">        public</span><span style="color:#267F99;"> void</span><span style="color:#795E26;"> delete</span><span style="color:#000000;">(</span><span style="color:#267F99;">String</span><span style="color:#001080;"> key</span><span style="color:#000000;">)</span></span>
<span class="line"><span style="color:#000000;">        {</span></span>
<span class="line"><span style="color:#000000;">            key = LOCK_PREFIX + key;</span></span>
<span class="line"><span style="color:#001080;">            redisTemplate</span><span style="color:#000000;">.</span><span style="color:#795E26;">delete</span><span style="color:#000000;">(key);</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">        </span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,44),i=[p];function o(c,r){return n(),a("div",null,i)}const y=s(e,[["render",o],["__file","redis.html.vue"]]),v=JSON.parse('{"path":"/note/%E4%B8%AD%E9%97%B4%E4%BB%B6/redis.html","title":"redis","lang":"zh-CN","frontmatter":{"description":"redis 基本使用 hash Hash(哈希) key-value模式不变，但value是一个键值对 hset/hget/hmset/hmget/hgetall/hdel --一个或多个设置/获取/删除值 hlen --返回hash的field数量 hexists myhash field --验证field是否存在 hkeys/hvals -- 返...","head":[["meta",{"property":"og:url","content":"https://wherywan.github.io/note/%E4%B8%AD%E9%97%B4%E4%BB%B6/redis.html"}],["meta",{"property":"og:site_name","content":"HONG_JI"}],["meta",{"property":"og:title","content":"redis"}],["meta",{"property":"og:description","content":"redis 基本使用 hash Hash(哈希) key-value模式不变，但value是一个键值对 hset/hget/hmset/hmget/hgetall/hdel --一个或多个设置/获取/删除值 hlen --返回hash的field数量 hexists myhash field --验证field是否存在 hkeys/hvals -- 返..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-03T10:07:29.000Z"}],["meta",{"property":"article:author","content":"wanhongji"}],["meta",{"property":"article:modified_time","content":"2023-01-03T10:07:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"redis\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-01-03T10:07:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"wanhongji\\"}]}"]]},"headers":[{"level":2,"title":"基本使用","slug":"基本使用","link":"#基本使用","children":[{"level":3,"title":"hash","slug":"hash","link":"#hash","children":[]},{"level":3,"title":"string","slug":"string","link":"#string","children":[]}]},{"level":2,"title":"待整理","slug":"待整理","link":"#待整理","children":[]}],"git":{"createdTime":1652023460000,"updatedTime":1672740449000,"contributors":[{"name":"wanhongji","email":"wan_hongji@163.com","commits":1},{"name":"wanhongji","email":"wherywan@163.com","commits":1}]},"readingTime":{"minutes":4.85,"words":1454},"filePathRelative":"note/中间件/redis.md","localizedDate":"2022年5月8日","excerpt":"\\n<h2>基本使用</h2>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"shiki light-plus\\" style=\\"background-color:#FFFFFF;color:#000000\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#008000\\"># 删除所有key </span></span>\\n<span class=\\"line\\"><span style=\\"color:#795E26\\">FLUSHALL</span><span style=\\"color:#000000\\"> </span></span>\\n<span class=\\"line\\"><span style=\\"color:#008000\\"># 选择数据库</span></span>\\n<span class=\\"line\\"><span style=\\"color:#AF00DB\\">select</span><span style=\\"color:#001080\\"> 0</span></span>\\n<span class=\\"line\\"><span style=\\"color:#008000\\">#当前数据库所有key数量</span></span>\\n<span class=\\"line\\"><span style=\\"color:#795E26\\">DBsize</span></span>\\n<span class=\\"line\\"><span style=\\"color:#008000\\"># 开启redis客户端</span></span>\\n<span class=\\"line\\"><span style=\\"color:#795E26\\">redis-cli</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#008000\\"># --列出当前库的所有key</span></span>\\n<span class=\\"line\\"><span style=\\"color:#795E26\\">keys</span><span style=\\"color:#0000FF\\"> *</span><span style=\\"color:#000000\\"> </span></span>\\n<span class=\\"line\\"><span style=\\"color:#008000\\"># --判断某个key是否存在</span></span>\\n<span class=\\"line\\"><span style=\\"color:#795E26\\">exists</span><span style=\\"color:#A31515\\"> key</span><span style=\\"color:#000000\\"> </span></span>\\n<span class=\\"line\\"><span style=\\"color:#008000\\"># --移除当前库并复制到指定库</span></span>\\n<span class=\\"line\\"><span style=\\"color:#795E26\\">move</span><span style=\\"color:#A31515\\"> key</span><span style=\\"color:#A31515\\"> db</span><span style=\\"color:#000000\\"> </span></span>\\n<span class=\\"line\\"><span style=\\"color:#008000\\"># -- 给指定的key设置过期时间(秒钟)</span></span>\\n<span class=\\"line\\"><span style=\\"color:#795E26\\">expire</span><span style=\\"color:#A31515\\"> key</span><span style=\\"color:#000000\\"> </span></span>\\n<span class=\\"line\\"><span style=\\"color:#008000\\"># --查看还有多少秒过期(-1表示永不过期-2表示已过期)</span></span>\\n<span class=\\"line\\"><span style=\\"color:#795E26\\">ttl</span><span style=\\"color:#A31515\\"> key</span><span style=\\"color:#000000\\"> </span></span>\\n<span class=\\"line\\"><span style=\\"color:#008000\\"># --查看key是什么数据类型</span></span>\\n<span class=\\"line\\"><span style=\\"color:#795E26\\">type</span><span style=\\"color:#A31515\\"> key</span><span style=\\"color:#000000\\"> </span></span>\\n<span class=\\"line\\"></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{y as comp,v as data};