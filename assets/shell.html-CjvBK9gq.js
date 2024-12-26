import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as e,e as a}from"./app-hoN0JGLf.js";const n={},i=a(`<h1 id="shell脚本" tabindex="-1"><a class="header-anchor" href="#shell脚本"><span>shell脚本</span></a></h1><p>#！/bin/bash 定义执行脚本的shell解释器</p><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释"><span>注释</span></a></h2><p>使用 #</p><h2 id="变量操作" tabindex="-1"><a class="header-anchor" href="#变量操作"><span>变量操作</span></a></h2><ul><li>创建普通变量： name=“test” （=两边不可有空格）</li><li>创建只可函数体中使用的局部变量： local name=“test” （使用local修饰的变量在函数体外无法访问，并且local只能在函数体内使用）</li><li>使用变量： echo $name 或者 echo \${name} （推荐使用大括号版）</li><li>变量重新赋值： name=“new_test” （将原值覆盖）</li><li>只读变量： name=“only_read” -&gt; readonly name （使用readonly标识后的变量，不可被修改）</li><li>删除变量： unset name; （删除之后不可访问，删除不掉只读变量）</li></ul><h2 id="参数传递" tabindex="-1"><a class="header-anchor" href="#参数传递"><span>参数传递</span></a></h2><ul><li>获取变量</li><li>\${变量名}</li><li>获取参数值：</li><li>$0 ： 固定，代表执行的文件名</li><li>$1 ： 代表传入的第1个参数</li><li>$n ： 代表传入的第n个参数</li><li>$#：参数个数</li><li>$<em>： 以一个单字符串显示所有向脚本传递的参数。如&quot;$</em>“用「”」括起来的情况、以&quot;$1 $2 … $n&quot;的形式输出所有参数</li><li>$@：与$*相同，但是使用时加引号，并在引号中返回每个参数。</li><li>$$：脚本运行的当前进程号</li><li>$！：后台运行的最后一个进程的ID</li><li>$?： 显示最后命令的退出状态。0表示没有错误，其他任何值表明有错误。</li><li>$* 与 $@ 区别</li><li>相同点：都是引用所有参数。</li><li>不同点：只有在双引号中体现出来。假设在脚本运行时写了三个参数 1、2、3，，则 &quot; * &quot; 等价于 “1 2 3”（传递了一个参数），而 “@” 等价于 “1” “2” “3”（传递了三个参数）。</li></ul><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数"><span>函数</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span style="color:#795E26;">funWithParam</span><span style="color:#000000;">(){</span></span>
<span class="line"><span style="color:#795E26;">    echo</span><span style="color:#A31515;"> &quot;第一个参数为 </span><span style="color:#001080;">$1</span><span style="color:#A31515;"> !&quot;</span></span>
<span class="line"><span style="color:#795E26;">    echo</span><span style="color:#A31515;"> &quot;第二个参数为 </span><span style="color:#001080;">$2</span><span style="color:#A31515;"> !&quot;</span></span>
<span class="line"><span style="color:#795E26;">    echo</span><span style="color:#A31515;"> &quot;第十个参数为 </span><span style="color:#001080;">$10</span><span style="color:#A31515;"> !&quot;</span></span>
<span class="line"><span style="color:#795E26;">    echo</span><span style="color:#A31515;"> &quot;第十个参数为 </span><span style="color:#001080;">\${10}</span><span style="color:#A31515;"> !&quot;</span></span>
<span class="line"><span style="color:#795E26;">    echo</span><span style="color:#A31515;"> &quot;第十一个参数为 </span><span style="color:#001080;">\${11}</span><span style="color:#A31515;"> !&quot;</span></span>
<span class="line"><span style="color:#795E26;">    echo</span><span style="color:#A31515;"> &quot;参数总数有 </span><span style="color:#0000FF;">$#</span><span style="color:#A31515;"> 个!&quot;</span></span>
<span class="line"><span style="color:#795E26;">    echo</span><span style="color:#A31515;"> &quot;作为一个字符串输出所有参数 </span><span style="color:#0000FF;">$*</span><span style="color:#A31515;"> !&quot;</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#795E26;">funWithParam</span><span style="color:#098658;"> 1</span><span style="color:#098658;"> 2</span><span style="color:#098658;"> 3</span><span style="color:#098658;"> 4</span><span style="color:#098658;"> 5</span><span style="color:#098658;"> 6</span><span style="color:#098658;"> 7</span><span style="color:#098658;"> 8</span><span style="color:#098658;"> 9</span><span style="color:#098658;"> 34</span><span style="color:#098658;"> 73</span></span>
<span class="line"><span style="color:#795E26;">echo</span><span style="color:#0000FF;"> $?</span><span style="color:#EE0000;">  \\#</span><span style="color:#A31515;"> 判断执行是否成功</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="比较" tabindex="-1"><a class="header-anchor" href="#比较"><span>比较</span></a></h2><ol class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> ： 中括号旁边和运算符两边必须添加空格 （可以使用，不推荐）</label></li><li>[[ ]]：中括号旁边和运算符两边必须添加空格 （字符串验证时，推荐使用）</li><li>(()) ： 中括号旁边和运算符两边必须添加空格 （数字验证时，推荐使用）</li><li>[[]] 和 (()) 分别是[ ]的针对数学比较表达式和字符串表达式的加强版。</li><li>使用[[ … ]]条件判断结构，而不是[ … ]，能够防止脚本中的许多逻辑错误。 比如，&amp;&amp;、||、&lt;和&gt; 操作符能够正常存在于[[ ]]条件判断结构中，但是如果出现在[ ]结构中的话，会报错。 比如可以直接使用if [[ $a != 1 &amp;&amp; $a != 2 ]], 如果不适用双括号, 则为if [ $a -ne 1] &amp;&amp; [ $a != 2 ]或者if [ $a -ne 1 -a $a != 2 ]。</li></ol><blockquote><p>数字比较</p></blockquote><ol><li>-eq ：检测两个数是否相等，相等返回 true。 [ $a -eq $b ] 返回 false。</li><li>-ne： 检测两个数是否不相等，不相等返回 true。 [ $a -ne $b ] 返回 true。</li><li>-gt： 检测左边的数是否大于右边的，如果是，则返回 true。 [ $a -gt $b ] 返回 false。</li><li>-lt ： 检测左边的数是否小于右边的，如果是，则返回 true。 [ $a -lt $b ] 返回 true。</li><li>-ge： 检测左边的数是否大于等于右边的，如果是，则返回 true。 [ $a -ge $b ] 返回 false。</li><li>-le ： 检测左边的数是否小于等于右边的，如果是，则返回 true。 [ $a -le $b ] 返回 true。</li></ol><blockquote><p>字符串比较</p></blockquote><ol><li>= ：检测两个字符串是否相等，相等返回 true。 [ $a = $b ] 返回 false。</li><li>!= ：检测两个字符串是否相等，不相等返回 true。 [ $a != $b ] 返回 true。</li><li>-z ：检测字符串长度是否为0，为0返回 true。 [ -z $a ] 返回 false。</li><li>-n ：检测字符串长度是否为0，不为0返回 true。 [ -n “$a” ] 返回 true。</li><li>$ ：检测字符串是否为空，不为空返回 true。 [ $a ] 返回 true。</li></ol><h2 id="布尔运算符" tabindex="-1"><a class="header-anchor" href="#布尔运算符"><span>布尔运算符</span></a></h2><p>! ：非运算，表达式为 true 则返回 false，否则返回 true。 [ ! false ] 返回 true。 -o ：或运算，有一个表达式为 true 则返回 true。 [ $a -lt 20 -o $b -gt 100 ] 返回 true。 -a ：与运算，两个表达式都为 true 才返回 true。 [ $a -lt 20 -a $b -gt 100 ] 返回 false。</p><h2 id="逻辑运算符" tabindex="-1"><a class="header-anchor" href="#逻辑运算符"><span>逻辑运算符</span></a></h2><p>&amp;&amp;、||</p><h2 id="算数运算" tabindex="-1"><a class="header-anchor" href="#算数运算"><span>算数运算</span></a></h2><p>$[ ] : 加减乘除,不必添加空格 $(( )) ：加减乘除等,不必添加空格</p><h2 id="条件循环" tabindex="-1"><a class="header-anchor" href="#条件循环"><span>条件循环</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000;" tabindex="0"><code><span class="line"><span>if condition1</span></span>
<span class="line"><span>then</span></span>
<span class="line"><span>    command1</span></span>
<span class="line"><span>elif condition2 </span></span>
<span class="line"><span>then </span></span>
<span class="line"><span>    command2</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    commandN</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for var in item1 item2 ... itemN</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>    command1</span></span>
<span class="line"><span>    command2</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>    commandN</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>while condition</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>    command</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件运算符" tabindex="-1"><a class="header-anchor" href="#文件运算符"><span>文件运算符</span></a></h2><ul><li>-b file ：检测文件是否是块设备文件，如果是，则返回 true。 [ -b $file ] 返回 false。</li><li>-c file ：检测文件是否是字符设备文件，如果是，则返回 true。 [ -c $file ] 返回 false。</li><li>-d file ：检测文件是否是目录，如果是，则返回 true。 [ -d $file ] 返回 false。</li><li>-f file ：检测文件是否是普通文件（既不是目录，也不是设备文件），如果是，则返回 true。 [ -f $file ] 返回 true。</li><li>-g file ：检测文件是否设置了 SGID 位，如果是，则返回 true。 [ -g $file ] 返回 false。</li><li>-k file ：检测文件是否设置了粘着位(Sticky Bit)，如果是，则返回 true。 [ -k $file ] 返回 false。</li><li>-p file ：检测文件是否是有名管道，如果是，则返回 true。 [ -p $file ] 返回 false。</li><li>-u file ：检测文件是否设置了 SUID 位，如果是，则返回 true。 [ -u $file ] 返回 false。</li><li>-r file ：检测文件是否可读，如果是，则返回 true。 [ -r $file ] 返回 true。</li><li>-w file ：检测文件是否可写，如果是，则返回 true。 [ -w $file ] 返回 true。</li><li>-x file ：检测文件是否可执行，如果是，则返回 true。 [ -x $file ] 返回 true。</li><li>-s file ：检测文件是否为空（文件大小是否大于0），不为空返回 true。 [ -s $file ] 返回 true。</li><li>-e file ：检测文件（包括目录）是否存在，如果是，则返回 true。 [ -e $file ] 返回 true。</li></ul>`,26),t=[i];function p(o,c){return s(),e("div",null,t)}const u=l(n,[["render",p],["__file","shell.html.vue"]]),h=JSON.parse('{"path":"/note/%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%8E%AF%E5%A2%83/shell.html","title":"shell脚本","lang":"zh-CN","frontmatter":{"description":"shell脚本 #！/bin/bash 定义执行脚本的shell解释器 注释 使用 # 变量操作 创建普通变量： name=“test” （=两边不可有空格） 创建只可函数体中使用的局部变量： local name=“test” （使用local修饰的变量在函数体外无法访问，并且local只能在函数体内使用） 使用变量： echo $name 或者 e...","head":[["meta",{"property":"og:url","content":"https://wherywan.github.io/note/%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%8E%AF%E5%A2%83/shell.html"}],["meta",{"property":"og:site_name","content":"HONG_JI"}],["meta",{"property":"og:title","content":"shell脚本"}],["meta",{"property":"og:description","content":"shell脚本 #！/bin/bash 定义执行脚本的shell解释器 注释 使用 # 变量操作 创建普通变量： name=“test” （=两边不可有空格） 创建只可函数体中使用的局部变量： local name=“test” （使用local修饰的变量在函数体外无法访问，并且local只能在函数体内使用） 使用变量： echo $name 或者 e..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-09-01T15:50:14.000Z"}],["meta",{"property":"article:author","content":"wanhongji"}],["meta",{"property":"article:modified_time","content":"2022-09-01T15:50:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"shell脚本\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-09-01T15:50:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"wanhongji\\"}]}"]]},"headers":[{"level":2,"title":"注释","slug":"注释","link":"#注释","children":[]},{"level":2,"title":"变量操作","slug":"变量操作","link":"#变量操作","children":[]},{"level":2,"title":"参数传递","slug":"参数传递","link":"#参数传递","children":[]},{"level":2,"title":"函数","slug":"函数","link":"#函数","children":[]},{"level":2,"title":"比较","slug":"比较","link":"#比较","children":[]},{"level":2,"title":"布尔运算符","slug":"布尔运算符","link":"#布尔运算符","children":[]},{"level":2,"title":"逻辑运算符","slug":"逻辑运算符","link":"#逻辑运算符","children":[]},{"level":2,"title":"算数运算","slug":"算数运算","link":"#算数运算","children":[]},{"level":2,"title":"条件循环","slug":"条件循环","link":"#条件循环","children":[]},{"level":2,"title":"文件运算符","slug":"文件运算符","link":"#文件运算符","children":[]}],"git":{"createdTime":1660212550000,"updatedTime":1662047414000,"contributors":[{"name":"wanhongji","email":"wan_hongji@163.com","commits":1}]},"readingTime":{"minutes":4.88,"words":1464},"filePathRelative":"note/服务器环境/shell.md","localizedDate":"2022年8月11日","excerpt":"\\n<p>#！/bin/bash 定义执行脚本的shell解释器</p>\\n<h2>注释</h2>\\n<p>使用 #</p>\\n<h2>变量操作</h2>\\n<ul>\\n<li>创建普通变量： name=“test” （=两边不可有空格）</li>\\n<li>创建只可函数体中使用的局部变量： local name=“test” （使用local修饰的变量在函数体外无法访问，并且local只能在函数体内使用）</li>\\n<li>使用变量： echo $name 或者 echo ${name} （推荐使用大括号版）</li>\\n<li>变量重新赋值： name=“new_test” （将原值覆盖）</li>\\n<li>只读变量： name=“only_read” -&gt; readonly name （使用readonly标识后的变量，不可被修改）</li>\\n<li>删除变量： unset name; （删除之后不可访问，删除不掉只读变量）</li>\\n</ul>","autoDesc":true}');export{u as comp,h as data};
