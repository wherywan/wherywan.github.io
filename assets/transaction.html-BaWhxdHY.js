import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as n,o as r,c as i,a as e,b as l,d as s,e as c}from"./app-hoN0JGLf.js";const o={},h=e("h1",{id:"transaction",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#transaction"},[e("span",null,"transaction")])],-1),p={href:"https://seata.apache.org/zh-cn/docs/user/mode/tcc",target:"_blank",rel:"noopener noreferrer"},d=c('<h2 id="分布式事务" tabindex="-1"><a class="header-anchor" href="#分布式事务"><span>分布式事务</span></a></h2><h3 id="二阶段提交" tabindex="-1"><a class="header-anchor" href="#二阶段提交"><span>二阶段提交</span></a></h3><h3 id="三阶段提交" tabindex="-1"><a class="header-anchor" href="#三阶段提交"><span>三阶段提交</span></a></h3><h3 id="tcc" tabindex="-1"><a class="header-anchor" href="#tcc"><span>TCC</span></a></h3><ul><li>try</li><li>confirm</li><li>cancel</li></ul><h3 id="本地消息表" tabindex="-1"><a class="header-anchor" href="#本地消息表"><span>本地消息表</span></a></h3><h3 id="mq消息事务" tabindex="-1"><a class="header-anchor" href="#mq消息事务"><span>MQ消息事务</span></a></h3><p>使用消息队列，最终一致性</p><h3 id="最大努力通知" tabindex="-1"><a class="header-anchor" href="#最大努力通知"><span>最大努力通知</span></a></h3><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h3><p>可以看出 2PC 和 3PC 是一种强一致性事务，不过还是有数据不一致，阻塞等风险，而且只能用在数据库层面。</p><p>而 TCC 是一种补偿性事务思想，适用的范围更广，在业务层面实现，因此对业务的侵入性较大，每一个操作都需要实现对应的三个方法。</p><p>本地消息、事务消息和最大努力通知其实都是最终一致性事务，因此适用于一些对时间不敏感的业务</p><h3 id="saga" tabindex="-1"><a class="header-anchor" href="#saga"><span>saga</span></a></h3><h3 id="seata" tabindex="-1"><a class="header-anchor" href="#seata"><span>seata</span></a></h3>',15);function m(g,u){const a=n("ExternalLinkIcon");return r(),i("div",null,[h,e("p",null,[e("a",p,[l("seata官网"),s(a)])]),d])}const C=t(o,[["render",m],["__file","transaction.html.vue"]]),b=JSON.parse('{"path":"/note/web/transaction.html","title":"transaction","lang":"zh-CN","frontmatter":{"description":"transaction seata官网 分布式事务 二阶段提交 三阶段提交 TCC try confirm cancel 本地消息表 MQ消息事务 使用消息队列，最终一致性 最大努力通知 总结 可以看出 2PC 和 3PC 是一种强一致性事务，不过还是有数据不一致，阻塞等风险，而且只能用在数据库层面。 而 TCC 是一种补偿性事务思想，适用的范围更广，...","head":[["meta",{"property":"og:url","content":"https://wherywan.github.io/note/web/transaction.html"}],["meta",{"property":"og:site_name","content":"HONG_JI"}],["meta",{"property":"og:title","content":"transaction"}],["meta",{"property":"og:description","content":"transaction seata官网 分布式事务 二阶段提交 三阶段提交 TCC try confirm cancel 本地消息表 MQ消息事务 使用消息队列，最终一致性 最大努力通知 总结 可以看出 2PC 和 3PC 是一种强一致性事务，不过还是有数据不一致，阻塞等风险，而且只能用在数据库层面。 而 TCC 是一种补偿性事务思想，适用的范围更广，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-29T12:42:19.000Z"}],["meta",{"property":"article:author","content":"wanhongji"}],["meta",{"property":"article:modified_time","content":"2024-04-29T12:42:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"transaction\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-29T12:42:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"wanhongji\\"}]}"]]},"headers":[{"level":2,"title":"分布式事务","slug":"分布式事务","link":"#分布式事务","children":[{"level":3,"title":"二阶段提交","slug":"二阶段提交","link":"#二阶段提交","children":[]},{"level":3,"title":"三阶段提交","slug":"三阶段提交","link":"#三阶段提交","children":[]},{"level":3,"title":"TCC","slug":"tcc","link":"#tcc","children":[]},{"level":3,"title":"本地消息表","slug":"本地消息表","link":"#本地消息表","children":[]},{"level":3,"title":"MQ消息事务","slug":"mq消息事务","link":"#mq消息事务","children":[]},{"level":3,"title":"最大努力通知","slug":"最大努力通知","link":"#最大努力通知","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":3,"title":"saga","slug":"saga","link":"#saga","children":[]},{"level":3,"title":"seata","slug":"seata","link":"#seata","children":[]}]}],"git":{"createdTime":1714394539000,"updatedTime":1714394539000,"contributors":[{"name":"wanhongji","email":"wherywan@163.com","commits":1}]},"readingTime":{"minutes":0.65,"words":195},"filePathRelative":"note/web/transaction.md","localizedDate":"2024年4月29日","excerpt":"\\n<p><a href=\\"https://seata.apache.org/zh-cn/docs/user/mode/tcc\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">seata官网</a></p>\\n<h2>分布式事务</h2>\\n<h3>二阶段提交</h3>\\n<h3>三阶段提交</h3>\\n<h3>TCC</h3>\\n<ul>\\n<li>try</li>\\n<li>confirm</li>\\n<li>cancel</li>\\n</ul>\\n<h3>本地消息表</h3>\\n<h3>MQ消息事务</h3>\\n<p>使用消息队列，最终一致性</p>\\n<h3>最大努力通知</h3>","autoDesc":true}');export{C as comp,b as data};