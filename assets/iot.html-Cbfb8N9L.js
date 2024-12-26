import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as l,c as r,a as t,b as e,d as a,e as p}from"./app-hoN0JGLf.js";const s={},c=p('<h1 id="物联网-iot" tabindex="-1"><a class="header-anchor" href="#物联网-iot"><span>物联网(iot)</span></a></h1><h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念"><span>概念</span></a></h2><blockquote><p>产品</p></blockquote><p>一组具有相同功能的设备集合，可配置设备接入网关</p><blockquote><p>设备</p></blockquote><p>1、网关设备</p><p>可以绑定网关子设备，代替子设备接入物联网平台</p><p>2、网关子设备</p><p>不能直接接入物联网平台的设备</p><p>3、直连设备</p><p>可直接接入物联网平台的设备</p><blockquote><p>设备接入网关</p></blockquote><p>聚合了设备接入物联网平台所需的网络组件和协议等相关配置信息，由网络组件和协议组成了传输特定格式数据的网络通道，以便设备接入物联网平台</p><blockquote><p>网络组件</p></blockquote><p>管理设备与平台通信的网络组件，构建设备和平台的传输通道</p><blockquote><p>协议</p></blockquote><p>设备和平台约定的在网络通道中传输数据的格式</p><h2 id="协议" tabindex="-1"><a class="header-anchor" href="#协议"><span>协议</span></a></h2><h3 id="mqtt" tabindex="-1"><a class="header-anchor" href="#mqtt"><span>MQTT</span></a></h3>',19),h={href:"https://blog.csdn.net/JACK_SUJAVA/article/details/124558524",target:"_blank",rel:"noopener noreferrer"},d={href:"https://baike.baidu.com/item/TCP%2FIP/214077?fromModule=lemma_inlink",target:"_blank",rel:"noopener noreferrer"},m=p('<p>基于发布/订阅，包含发布者、订阅者、broker等身份。其中，消息的发布者和订阅者都是客户端，消息代理是服务器，消息发布者可以同时是订阅者。</p><p>MQTT传输的消息分为：主题（Topic）和负载（payload）两部分：</p><ul><li>（1）Topic，可以理解为消息的类型，订阅者订阅（Subscribe）后，就会收到该主题的消息内容（payload）；</li><li>（2）payload，可以理解为消息的内容，是指订阅者具体要使用的内容。</li></ul><h4 id="订阅、主题、会话" tabindex="-1"><a class="header-anchor" href="#订阅、主题、会话"><span>订阅、主题、会话</span></a></h4><p>一、订阅（Subscription）</p><p>订阅包含主题筛选器（Topic Filter）和最大服务质量（QoS）。订阅会与一个会话（Session）关联。一个会话可以包含多个订阅。每一个会话中的每个订阅都有一个不同的主题筛选器。</p><p>二、会话（Session）</p><p>每个客户端与服务器建立连接后就是一个会话，客户端和服务器之间有状态交互。会话存在于一个网络之间，也可能在客户端和服务器之间跨越多个连续的网络连接。</p><p>三、主题名（Topic Name）</p><p>连接到一个应用程序消息的标签，该标签与服务器的订阅相匹配。服务器会将消息发送给订阅所匹配标签的每个客户端。</p><p>四、主题筛选器（Topic Filter）</p><p>一个对主题名通配符筛选器，在订阅表达式中使用，表示订阅所匹配到的多个主题。</p><p>五、负载（Payload）</p><p>消息订阅者所具体接收的内容。</p><h4 id="服务质量qos" tabindex="-1"><a class="header-anchor" href="#服务质量qos"><span>服务质量Qos</span></a></h4><ul><li>0 至多一次</li><li>1 至少一次</li><li>2 只有一次</li></ul><h4 id="通信过程" tabindex="-1"><a class="header-anchor" href="#通信过程"><span>通信过程</span></a></h4><h5 id="qos2" tabindex="-1"><a class="header-anchor" href="#qos2"><span>qos2</span></a></h5><ol><li>发送方 发送一个带有 QoS 2 标记的 PUBLISH 消息给 代理服务器。</li><li>代理服务器 收到消息后，向 发送方 发送 PUBREC 消息作为初步确认。</li><li>发送方 收到 PUBREC 后，向 代理服务器 发送 PUBREL 消息请求释放消息。</li><li>代理服务器 收到 PUBREL 后，将消息发布给所有订阅了该主题的客户端，并向 发送方 发送 PUBCOMP 消息确认消息已经成功处理。</li><li>订阅客户端 收到消息后，向 代理服务器 发送 PUBCOMP 消息确认接收到消息。</li><li>代理服务器 收到所有订阅客户端的 PUBCOMP 消息后，整个 QoS 2 通信过程完成。</li></ol><blockquote><p>注意点</p></blockquote><p>代理服务器 并不需要等待所有订阅客户端发送 PUBCOMP 消息后才向发送方发送 PUBCOMP 消息。 代理服务器发送 PUBCOMP 给发送方是为了确认消息已经被代理服务器成功处理并发送给了订阅客户端。而订阅客户端发送 PUBCOMP 到代理服务器则是为了确认他们已经成功收到了消息</p><h3 id="modbus" tabindex="-1"><a class="header-anchor" href="#modbus"><span>MODBUS</span></a></h3><p>MODBUS可以在基于串行链路和以太 TCP/IP 网络的 MODBUS 上可以进行通信。也就是说，可以使用串口线或者网线链接两端设备，双方约定使用modbus协议去通信。</p><p>它在连接至不同类型总线或网络的设备之间提供客户机/服务器通信，主要用于工业自动化设备通信。</p><p><img src="https://blog.csdn.net/zhouhangzooo/article/details/124966221" alt="参考"></p><h4 id="寄存器" tabindex="-1"><a class="header-anchor" href="#寄存器"><span>寄存器</span></a></h4><h4 id="功能码" tabindex="-1"><a class="header-anchor" href="#功能码"><span>功能码</span></a></h4><p>占一个字节</p><ul><li>1 读线圈寄存器</li><li>2 读离散输入寄存器</li><li>3 读保持寄存器</li><li>4 读输入寄存器</li><li>5 写单个线圈寄存器</li><li>6 写单个保持寄存器</li><li>15 写入多个线圈寄存器</li><li>16 写入多个保持寄存器</li></ul><h4 id="串口" tabindex="-1"><a class="header-anchor" href="#串口"><span>串口</span></a></h4><p>串口协议报文格式如下：（PDU包括功能码和数据）</p><p>地址域\\功能码\\数据\\CRC校验</p><p>其中这个CRC校验为2个字节，还有这个数据长度是不固定的，根据不同的功能码有不同的数据长度。</p><h4 id="网口" tabindex="-1"><a class="header-anchor" href="#网口"><span>网口</span></a></h4><p>TCP报文</p><p>TCP协议和串口协议类似，只是多了一个MBAP报文头和少了CRC校验，MBAP报文头包括有事务处理标识符、协议标识符、长度、单元标识符，一共为7个字节长度，</p>',36);function u(b,g){const o=i("ExternalLinkIcon");return l(),r("div",null,[c,t("p",null,[t("a",h,[e("参考链接"),a(o)]),e(" 它是一种基于"),t("a",d,[e("TCP/IP"),a(o)]),e("协议上传输的轻量级通信协议。")]),m])}const _=n(s,[["render",u],["__file","iot.html.vue"]]),f=JSON.parse('{"path":"/note/%E7%89%A9%E8%81%94%E7%BD%91/iot.html","title":"物联网(iot)","lang":"zh-CN","frontmatter":{"description":"物联网(iot) 概念 产品 一组具有相同功能的设备集合，可配置设备接入网关 设备 1、网关设备 可以绑定网关子设备，代替子设备接入物联网平台 2、网关子设备 不能直接接入物联网平台的设备 3、直连设备 可直接接入物联网平台的设备 设备接入网关 聚合了设备接入物联网平台所需的网络组件和协议等相关配置信息，由网络组件和协议组成了传输特定格式数据的网络通道...","head":[["meta",{"property":"og:url","content":"https://wherywan.github.io/note/%E7%89%A9%E8%81%94%E7%BD%91/iot.html"}],["meta",{"property":"og:site_name","content":"HONG_JI"}],["meta",{"property":"og:title","content":"物联网(iot)"}],["meta",{"property":"og:description","content":"物联网(iot) 概念 产品 一组具有相同功能的设备集合，可配置设备接入网关 设备 1、网关设备 可以绑定网关子设备，代替子设备接入物联网平台 2、网关子设备 不能直接接入物联网平台的设备 3、直连设备 可直接接入物联网平台的设备 设备接入网关 聚合了设备接入物联网平台所需的网络组件和协议等相关配置信息，由网络组件和协议组成了传输特定格式数据的网络通道..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://blog.csdn.net/zhouhangzooo/article/details/124966221"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-07T11:28:40.000Z"}],["meta",{"property":"article:author","content":"wanhongji"}],["meta",{"property":"article:modified_time","content":"2024-08-07T11:28:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"物联网(iot)\\",\\"image\\":[\\"https://blog.csdn.net/zhouhangzooo/article/details/124966221\\"],\\"dateModified\\":\\"2024-08-07T11:28:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"wanhongji\\"}]}"]]},"headers":[{"level":2,"title":"概念","slug":"概念","link":"#概念","children":[]},{"level":2,"title":"协议","slug":"协议","link":"#协议","children":[{"level":3,"title":"MQTT","slug":"mqtt","link":"#mqtt","children":[]},{"level":3,"title":"MODBUS","slug":"modbus","link":"#modbus","children":[]}]}],"git":{"createdTime":1672118521000,"updatedTime":1723030120000,"contributors":[{"name":"wanhongji","email":"wherywan@163.com","commits":3},{"name":"wanhongji","email":"wheywan@163.com","commits":1}]},"readingTime":{"minutes":4.3,"words":1289},"filePathRelative":"note/物联网/iot.md","localizedDate":"2022年12月27日","excerpt":"\\n<h2>概念</h2>\\n<blockquote>\\n<p>产品</p>\\n</blockquote>\\n<p>一组具有相同功能的设备集合，可配置设备接入网关</p>\\n<blockquote>\\n<p>设备</p>\\n</blockquote>\\n<p>1、网关设备</p>\\n<p>可以绑定网关子设备，代替子设备接入物联网平台</p>\\n<p>2、网关子设备</p>\\n<p>不能直接接入物联网平台的设备</p>\\n<p>3、直连设备</p>\\n<p>可直接接入物联网平台的设备</p>\\n<blockquote>\\n<p>设备接入网关</p>\\n</blockquote>\\n<p>聚合了设备接入物联网平台所需的网络组件和协议等相关配置信息，由网络组件和协议组成了传输特定格式数据的网络通道，以便设备接入物联网平台</p>","autoDesc":true}');export{_ as comp,f as data};
