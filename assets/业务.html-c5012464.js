import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,f as e}from"./app-f83986bb.js";const l={},p=e(`<h1 id="c-wms" tabindex="-1"><a class="header-anchor" href="#c-wms" aria-hidden="true">#</a> C-WMS</h1><p>租户、仓库、货主、权限表的设计</p><p>租户、仓库、货主、权限表的设计，菜单表，按钮元素表</p><p>1、用户表、租户表的关系</p><p>​ 创建租户后，再创建对应用户，并更新租户表中的owner字段表示用户是租户管理员，</p><p>​ 同时创建租户所属的角色或组</p><p>2、仓库和货主，使用关系表维护仓库货主间的多对多关系</p><p>​ 租户账号登录企业中台创建仓库和货主，货主绑定仓库</p><p>3、菜单表和权限表，通过authority_id区分权限是可下发的还是租户所属角色权限还是租户模板权限</p><p>​ base_app_authority存放应用下发权限、base_resource_authority存放用户或租户权限，以group_id标识</p><p>4、租户模板修改的仍然是租户初始的角色权限，即租户所属的组权限</p><p>5、租户所属组以租户维护的编码和税号唯一标识,以角色或组id标识用户拥有的权限</p><p><strong>6、登录时，判断是超级租户或租户管理员或用户，从base_resource_authority获取权限</strong></p><p>递归获取子元素id或父元素id</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki light-plus" style="background-color:#FFFFFF;" tabindex="0"><code><span class="line"><span style="color:#000000;">getParentId()</span></span>
<span class="line"><span style="color:#000000;">{</span></span>
<span class="line"><span style="color:#000000;">    查询父元素</span></span>
<span class="line"><span style="color:#000000;">    不为null</span></span>
<span class="line"><span style="color:#000000;">    	添加</span></span>
<span class="line"><span style="color:#000000;">    	getParentid()</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">getAllNode()</span></span>
<span class="line"><span style="color:#000000;">{</span></span>
<span class="line"><span style="color:#000000;">    不为null</span></span>
<span class="line"><span style="color:#000000;">    return</span></span>
<span class="line"><span style="color:#000000;">    添加元素</span></span>
<span class="line"><span style="color:#000000;">    getALLNOde（左）</span></span>
<span class="line"><span style="color:#000000;">    getALLNOde（右）</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),i=[p];function c(r,o){return n(),a("div",null,i)}const u=s(l,[["render",c],["__file","业务.html.vue"]]);export{u as default};
