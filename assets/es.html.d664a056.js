import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as n,f as d}from"./app.6f24b29a.js";const t={},a=d(`<h1 id="es" tabindex="-1"><a class="header-anchor" href="#es" aria-hidden="true">#</a> es</h1><h2 id="\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u6982\u5FF5" aria-hidden="true">#</a> \u6982\u5FF5</h2><p>es\u662F\u4E00\u4E2A\u53EF\u6269\u5C55\u7684\u9AD8\u6027\u80FD\u7684\u7528\u4E8E\u6570\u636E\u5206\u6790\u7684\u5168\u6587\u641C\u7D22\u5F15\u64CE\u3002\u63D0\u4F9B\u4E86\u6536\u96C6\u3001\u5206\u6790\u3001\u5B58\u50A8\u6570\u636E\u7684\u529F\u80FD\u3002</p><ul><li>\u5206\u7247\u662F\u5E95\u5C42\u7684\u5DE5\u4F5C\u5355\u5143\uFF0C\u6587\u6863\u4FDD\u5B58\u5728\u5206\u7247\u5185\uFF0C\u5206\u7247\u4FDD\u5B58\u5728\u96C6\u7FA4\u8282\u70B9</li><li>\u7D22\u5F15\u81EA\u52A8\u5206\u7247</li><li>\u5185\u90E8\u4F7F\u7528lucene\u505A\u7D22\u5F15\u53CA\u641C\u7D22</li><li>\u8FDB\u4E00\u90E8\u5C01\u88C5lucene\u7684\u5185\u90E8\u590D\u6742\u6027</li><li>\u63D0\u4F9Brestful\u63A5\u53E3Api</li></ul><table><thead><tr><th style="text-align:left;">es</th><th>mysql</th><th>es</th><th>mysql</th></tr></thead><tbody><tr><td style="text-align:left;">index</td><td>database</td><td>everything is indexed \u5012\u6392\u7D22\u5F15</td><td>index</td></tr><tr><td style="text-align:left;">type</td><td>table</td><td>query dsl</td><td>dsl</td></tr><tr><td style="text-align:left;">document</td><td>row</td><td>get url</td><td>select</td></tr><tr><td style="text-align:left;">field</td><td>column</td><td>put url</td><td>update</td></tr><tr><td style="text-align:left;">mapping</td><td>scheme</td><td></td><td></td></tr></tbody></table><p>mapping \u5B9A\u4E49\u4E86\u7D22\u5F15\u4E0B\u5B57\u6BB5\u5904\u7406\u89C4\u5219\uFF0C\u7D22\u5F15\u5982\u4F55\u5EFA\u7ACB\uFF0C\u7D22\u5F15\u7C7B\u578B\uFF0C\u662F\u5426\u5206\u8BCD\u5904\u7406\uFF0C\u5982\u4F55\u5206\u8BCD\u5904\u7406</p><p>scheme\u5B9A\u4E49\u4E86\u8868\u53CA\u8868\u5B57\u6BB5\uFF0C\u8868\u548C\u5B57\u6BB5\u7684\u5173\u7CFB</p><p>@Document\u4F5C\u7528\u4E8E\u7C7B\uFF0C\u7528\u4E8E\u6807\u8BB0\u5B9E\u4F53\u7C7B\u4E3A\u6587\u6863\u5BF9\u8C61\uFF0C\u4F7F\u7528json\u683C\u5F0F\u5C06\u6570\u636E\u5B58\u50A8\uFF0C\u5B9E\u9645\u53D1\u9001json\u683C\u5F0F\u7684\u5B57\u7B26\u4E32\u7ED9es\u3002</p><p>\u5B58\u50A8\u5728es\u7684\u4E00\u6761\u6570\u636E\u5373\u662F\u4E00\u4E2A\u6587\u6863\uFF0Ces\u4F1A\u7D22\u5F15\u6BCF\u4E2A \u6587\u6863\u7684\u5185\u5BB9\uFF0C\u7D22\u5F15\u662Fdocument\u96C6\uFF0C\u53EF\u8FDB\u884C\u5206\u7247\u5B58\u50A8\u6570\u636E\uFF0C\u5206\u7247\u53EF\u8FDB\u884C\u5907\u4EFD</p><h2 id="\u5B57\u6BB5\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u5B57\u6BB5\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> \u5B57\u6BB5\u6570\u636E\u7C7B\u578B</h2><ul><li>keyword \u7C7B\u578B</li></ul><p>keyword \u7C7B\u578B\uFF1A\u5B58\u50A8\u6570\u636E\u65F6\u5019\uFF0C\u4E0D\u4F1A\u5206\u8BCD\u5EFA\u7ACB\u7D22\u5F15\uFF0C\u652F\u6301\u6A21\u7CCA\u3001\u652F\u6301\u7CBE\u786E\u5339\u914D\uFF1B\u652F\u6301\u805A\u5408\u3001\u6392\u5E8F\u64CD\u4F5C\u3002</p><p>keyword \u7C7B\u578B\u7684\u6700\u5927\u652F\u6301\u7684\u957F\u5EA6\u4E3A\u2014\u201432766\u4E2AUTF-8\u7C7B\u578B\u7684\u5B57\u7B26\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E ignore_above \u6307\u5B9A\u81EA\u6301\u5B57\u7B26\u957F\u5EA6\uFF0C\u8D85\u8FC7\u7ED9\u5B9A\u957F\u5EA6\u540E\u7684\u6570\u636E\u5C06\u4E0D\u88AB\u7D22\u5F15\uFF0C\u65E0\u6CD5\u901A\u8FC7 term \u7CBE\u786E\u5339\u914D\u68C0\u7D22\u8FD4\u56DE\u7ED3\u679C\u3002</p><p>\u4F7F\u7528\u573A\u666F\uFF1A \u5B58\u50A8\u90AE\u7BB1\u53F7\u7801\u3001url\u3001name\u3001title\uFF0C\u624B\u673A\u53F7\u7801\u3001\u4E3B\u673A\u540D\u3001\u72B6\u6001\u7801\u3001\u90AE\u653F\u7F16\u7801\u3001\u6807\u7B7E\u3001\u5E74\u9F84\u3001\u6027\u522B\u7B49\u6570\u636E\u3002 \u7528\u4E8E\u7B5B\u9009\u6570\u636E\uFF08\u4F8B\u5982: select * from x where status=&#39;open&#39;)\u3001\u6392\u5E8F\u3001\u805A\u5408(\u7EDF\u8BA1)\uFF09\u3002 \u76F4\u63A5\u5C06\u5B8C\u6574\u7684\u6587\u672C\u4FDD\u5B58\u5230\u5012\u6392\u7D22\u5F15\u4E2D\u3002</p><ul><li>text \u7C7B\u578B</li></ul><p>text \u7C7B\u578B\uFF1A\u5B58\u50A8\u6570\u636E\u65F6\u5019\uFF0C\u4F1A\u81EA\u52A8\u5206\u8BCD\uFF0C\u5E76\u751F\u6210\u7D22\u5F15\uFF0C\u652F\u6301\u5168\u6587\u68C0\u7D22\u3001\u652F\u6301\u6A21\u7CCA\u3001\u7CBE\u786E\u67E5\u8BE2\uFF1B\u4E0D\u652F\u6301\u805A\u5408\u548C\u6392\u5E8F\u64CD\u4F5C\u3002</p><p>text \u7C7B\u578B\u7684\u6700\u5927\u652F\u6301\u7684\u5B57\u7B26\u957F\u5EA6\u65E0\u9650\u5236\uFF0C\u9002\u5408\u5927\u5B57\u6BB5\u5B58\u50A8\u3002</p><p>\u4F7F\u7528\u573A\u666F\uFF1A \u5B58\u50A8\u5168\u6587\u641C\u7D22\u6570\u636E\uFF0C\u4F8B\u5982\uFF1A\u90AE\u7BB1\u5185\u5BB9\u3001\u5730\u5740\u3001\u4EE3\u7801\u5757\u3001\u535A\u5BA2\u6587\u7AE0\u5185\u5BB9\u7B49\u3002</p><p>\u9ED8\u8BA4\u7ED3\u5408 standard analyzer\uFF08\u6807\u51C6\u89E3\u6790\u5668\uFF09\u5BF9\u6587\u672C\u8FDB\u884C\u5206\u8BCD\u3001\u5012\u6392\u7D22\u5F15\u3002 \u9ED8\u8BA4\u7ED3\u5408\u6807\u51C6\u5206\u6790\u5668\u8FDB\u884C\u8BCD\u547D\u4E2D\u3001\u8BCD\u9891\u76F8\u5173\u5EA6\u6253\u5206\u3002</p><blockquote><p>\u6240\u4EE5\u521B\u5EFA\u7D22\u5F15\u65F6\uFF0C\u5F53\u5B57\u6BB5\u9700\u8981\u8FDB\u884C\u6392\u5E8F\u3001\u5206\u7EC4\u3001\u805A\u5408\u7B49\u64CD\u4F5C\u65F6\uFF0C\u9700\u8981\u4F7F\u7528 keyword \u7C7B\u578B\u3002</p></blockquote><h2 id="\u5012\u6392\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#\u5012\u6392\u7D22\u5F15" aria-hidden="true">#</a> \u5012\u6392\u7D22\u5F15</h2><p>\u4EE5\u5206\u8BCD\u540E\u7684\u5355\u8BCD\u6216\u8BCD\u7EC4\u4F5C\u4E3A\u952E\uFF0Cdocument\u6216\u8BB0\u5F55\u5730\u5740\u4F5C\u4E3A\u503C</p><h2 id="\u6B63\u6392\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#\u6B63\u6392\u7D22\u5F15" aria-hidden="true">#</a> \u6B63\u6392\u7D22\u5F15</h2><p>\u4E0E\u5012\u6392\u7D22\u5F15\u76F8\u53CD</p><h2 id="\u641C\u7D22" tabindex="-1"><a class="header-anchor" href="#\u641C\u7D22" aria-hidden="true">#</a> \u641C\u7D22</h2><p>\u67E5\u8BE2\u5206\u4E3A\u57FA\u4E8E\u6587\u672C\u548C\u57FA\u4E8E\u8BCD\u9879\u7684\u67E5\u8BE2\u3002</p><h3 id="\u6307\u5B9A\u5B57\u6BB5\u67E5\u8BE2-match" tabindex="-1"><a class="header-anchor" href="#\u6307\u5B9A\u5B57\u6BB5\u67E5\u8BE2-match" aria-hidden="true">#</a> \u6307\u5B9A\u5B57\u6BB5\u67E5\u8BE2\uFF1Amatch</h3><p>es\u4F7F\u7528match,\u4F1A\u5BF9\u67E5\u8BE2\u6761\u4EF6\u5206\u8BCD\u540E\u8FDB\u884C\u5339\u914D\u67E5\u8BE2\uFF0Cmatch\u672C\u8D28\u662F\u5BF9term\u7684\u7ED3\u679C\u7EC4\u5408</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5982\u679C\u8981\u5728\u5B57\u6BB5\u4E2D\u641C\u7D22\u7279\u5B9A\u5B57\u8BCD\uFF0C\u53EF\u4EE5\u4F7F\u7528match; \u5982\u4E0B\u8BED\u53E5\u5C06\u67E5\u8BE2address \u5B57\u6BB5\u4E2D\u5305\u542B mill \u6216\u8005 lane\u7684\u6570\u636E

GET /bank/_search
{
  &quot;query&quot;: { &quot;match&quot;: { &quot;address&quot;: &quot;mill lane&quot; } }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u641C\u7D22\u6240\u6709macth-all" tabindex="-1"><a class="header-anchor" href="#\u641C\u7D22\u6240\u6709macth-all" aria-hidden="true">#</a> \u641C\u7D22\u6240\u6709macth_all</h3><p>es\u67E5\u8BE2\u6240\u6709matchall ,sort\u6392\u5E8F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /bank/_search
{
  &quot;query&quot;: { &quot;match_all&quot;: {} },
  &quot;sort&quot;: [
    { &quot;account_number&quot;: &quot;asc&quot; }
  ]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5206\u9875\u67E5\u8BE2-from-size" tabindex="-1"><a class="header-anchor" href="#\u5206\u9875\u67E5\u8BE2-from-size" aria-hidden="true">#</a> \u5206\u9875\u67E5\u8BE2(from+size)</h3><p>es\u5206\u9875\u67E5\u8BE2from,size</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /bank/_search
{
  &quot;query&quot;: { &quot;match_all&quot;: {} },
  &quot;sort&quot;: [
    { &quot;account_number&quot;: &quot;asc&quot; }
  ],
  &quot;from&quot;: 10,
  &quot;size&quot;: 10
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u67E5\u8BE2\u6BB5\u843D\u5339\u914D-match-phrase" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u6BB5\u843D\u5339\u914D-match-phrase" aria-hidden="true">#</a> \u67E5\u8BE2\u6BB5\u843D\u5339\u914D\uFF1Amatch_phrase</h3><p>es\u7684match_phrase</p><p>\u5982\u679C\u6211\u4EEC\u5E0C\u671B\u67E5\u8BE2\u7684\u6761\u4EF6\u662F address\u5B57\u6BB5\u4E2D\u5305\u542B &quot;mill lane&quot;\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528<code>match_phrase</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /bank/_search
{
  &quot;query&quot;: { &quot;match_phrase&quot;: { &quot;address&quot;: &quot;mill lane&quot; } }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u591A\u6761\u4EF6\u67E5\u8BE2-bool" tabindex="-1"><a class="header-anchor" href="#\u591A\u6761\u4EF6\u67E5\u8BE2-bool" aria-hidden="true">#</a> \u591A\u6761\u4EF6\u67E5\u8BE2: bool</h3><p>\u5982\u679C\u8981\u6784\u9020\u66F4\u590D\u6742\u7684\u67E5\u8BE2\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>bool</code>\u67E5\u8BE2\u6765\u7EC4\u5408\u591A\u4E2A\u67E5\u8BE2\u6761\u4EF6\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /bank/_search
{
  &quot;query&quot;: {
    &quot;bool&quot;: {
      &quot;must&quot;: [
        { &quot;match&quot;: { &quot;age&quot;: &quot;40&quot; } }
      ],
      &quot;must_not&quot;: [
        { &quot;match&quot;: { &quot;state&quot;: &quot;ID&quot; } }
      ]
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>must</code>, <code>should</code>, <code>must_not</code> \u548C <code>filter</code> \u90FD\u662F<code>bool</code>\u67E5\u8BE2\u7684\u5B50\u53E5\u3002\u90A3\u4E48<code>filter</code>\u548C\u4E0A\u8FF0<code>query</code>\u5B50\u53E5\u6709\u5565\u533A\u522B\u5462\uFF1F</p><p>\u4E24\u8005\u90FD\u53EF\u4EE5\u5199\u67E5\u8BE2\u6761\u4EF6\uFF0C\u800C\u4E14\u8BED\u6CD5\u4E5F\u7C7B\u4F3C\u3002\u533A\u522B\u5728\u4E8E\uFF0C<strong>query \u4E0A\u4E0B\u6587\u7684\u6761\u4EF6\u662F\u7528\u6765\u7ED9\u6587\u6863\u6253\u5206\u7684\uFF0C\u5339\u914D\u8D8A\u597D _score \u8D8A\u9AD8\uFF1Bfilter \u7684\u6761\u4EF6\u53EA\u4EA7\u751F\u4E24\u79CD\u7ED3\u679C\uFF1A\u7B26\u5408\u4E0E\u4E0D\u7B26\u5408\uFF0C\u540E\u8005\u88AB\u8FC7\u6EE4\u6389</strong>\u3002</p><h3 id="\u805A\u5408\u67E5\u8BE2-aggregation" tabindex="-1"><a class="header-anchor" href="#\u805A\u5408\u67E5\u8BE2-aggregation" aria-hidden="true">#</a> \u805A\u5408\u67E5\u8BE2\uFF1AAggregation</h3><p><strong>\u6211\u4EEC\u77E5\u9053SQL\u4E2D\u6709group by\uFF0C\u5728ES\u4E2D\u5B83\u53EBAggregation\uFF0C\u5373\u805A\u5408\u8FD0\u7B97\u3002</strong></p><h4 id="\u7B80\u5355\u805A\u5408" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u805A\u5408" aria-hidden="true">#</a> \u7B80\u5355\u805A\u5408</h4><p>\u6BD4\u5982\u6211\u4EEC\u5E0C\u671B\u8BA1\u7B97\u51FAaccount\u6BCF\u4E2A\u5DDE\u7684\u7EDF\u8BA1\u6570\u91CF\uFF0C \u4F7F\u7528<code>aggs</code>\u5173\u952E\u5B57\u5BF9<code>state</code>\u5B57\u6BB5\u805A\u5408\uFF0C\u88AB\u805A\u5408\u7684\u5B57\u6BB5\u65E0\u9700\u5BF9\u5206\u8BCD\u7EDF\u8BA1\uFF0C\u6240\u4EE5\u4F7F\u7528<code>state.keyword</code>\u5BF9\u6574\u4E2A\u5B57\u6BB5\u7EDF\u8BA1</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /bank/_search
{
  &quot;size&quot;: 0,
  &quot;aggs&quot;: {
    &quot;group_by_state&quot;: {
      &quot;terms&quot;: {
        &quot;field&quot;: &quot;state.keyword&quot;
      }
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5D4C\u5957\u805A\u5408" tabindex="-1"><a class="header-anchor" href="#\u5D4C\u5957\u805A\u5408" aria-hidden="true">#</a> \u5D4C\u5957\u805A\u5408</h4><p>ES\u8FD8\u53EF\u4EE5\u5904\u7406\u4E2A\u805A\u5408\u6761\u4EF6\u7684\u5D4C\u5957\u3002</p><p>\u6BD4\u5982\u627F\u63A5\u4E0A\u4E2A\u4F8B\u5B50\uFF0C \u8BA1\u7B97\u6BCF\u4E2A\u5DDE\u7684\u5E73\u5747\u7ED3\u4F59\u3002\u6D89\u53CA\u5230\u7684\u5C31\u662F\u5728\u5BF9state\u5206\u7EC4\u7684\u57FA\u7840\u4E0A\uFF0C\u5D4C\u5957\u8BA1\u7B97avg(balance):</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /bank/_search
{
  &quot;size&quot;: 0,
  &quot;aggs&quot;: {
    &quot;group_by_state&quot;: {
      &quot;terms&quot;: {
        &quot;field&quot;: &quot;state.keyword&quot;
      },
      &quot;aggs&quot;: {
        &quot;average_balance&quot;: {
          &quot;avg&quot;: {
            &quot;field&quot;: &quot;balance&quot;
          }
        }
      }
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5BF9\u805A\u5408\u7ED3\u679C\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u805A\u5408\u7ED3\u679C\u6392\u5E8F" aria-hidden="true">#</a> \u5BF9\u805A\u5408\u7ED3\u679C\u6392\u5E8F</h4><p>\u53EF\u4EE5\u901A\u8FC7\u5728aggs\u4E2D\u5BF9\u5D4C\u5957\u805A\u5408\u7684\u7ED3\u679C\u8FDB\u884C\u6392\u5E8F</p><p>\u6BD4\u5982\u627F\u63A5\u4E0A\u4E2A\u4F8B\u5B50\uFF0C \u5BF9\u5D4C\u5957\u8BA1\u7B97\u51FA\u7684avg(balance)\uFF0C\u8FD9\u91CC\u662Faverage_balance\uFF0C\u8FDB\u884C\u6392\u5E8F</p><h2 id="\u7D22\u5F15\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u7D22\u5F15\u7BA1\u7406" aria-hidden="true">#</a> \u7D22\u5F15\u7BA1\u7406</h2><h3 id="\u521B\u5EFA\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u7D22\u5F15" aria-hidden="true">#</a> \u521B\u5EFA\u7D22\u5F15</h3><p>\u6211\u4EEC\u521B\u5EFA\u4E00\u4E2Auser \u7D22\u5F15<code>test-index-users</code>\uFF0C\u5176\u4E2D\u5305\u542B\u4E09\u4E2A\u5C5E\u6027\uFF1Aname\uFF0Cage, remarks; \u5B58\u50A8\u5728\u4E00\u4E2A\u5206\u7247\u4E00\u4E2A\u526F\u672C\u4E0A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PUT /test-index-users
{
  &quot;settings&quot;: {
		&quot;number_of_shards&quot;: 1,
		&quot;number_of_replicas&quot;: 1
	},
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;name&quot;: {
        &quot;type&quot;: &quot;text&quot;,
        &quot;fields&quot;: {
          &quot;keyword&quot;: { //\u4E0D\u8FDB\u884C\u5206\u8BCD\u7D22\u5F15
            &quot;type&quot;: &quot;keyword&quot;,
            &quot;ignore_above&quot;: 256
          }
        }
      },
      &quot;age&quot;: {
        &quot;type&quot;: &quot;long&quot;
      },
      &quot;remarks&quot;: {
        &quot;type&quot;: &quot;text&quot; // \u6570\u636E\u7C7B\u578B
      }
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,60),s=[a];function l(r,u){return i(),n("div",null,s)}const v=e(t,[["render",l],["__file","es.html.vue"]]);export{v as default};
