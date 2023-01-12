import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as a,b as e,d as i,e as d,f as n,r as c}from"./app.6f24b29a.js";const r={},o=n(`<h1 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> java</h1><h2 id="\u77E5\u8BC6\u70B9" tabindex="-1"><a class="header-anchor" href="#\u77E5\u8BC6\u70B9" aria-hidden="true">#</a> \u77E5\u8BC6\u70B9</h2><p>\u6587\u4EF6\u5199\u5165\u4E0D\u5230build\u7684resource\u76EE\u5F55\u4E0B</p><h2 id="\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#\u96C6\u5408" aria-hidden="true">#</a> \u96C6\u5408</h2><p>\u6700\u4E0A\u5C42\u7684Collections\u548CMap\u63A5\u53E3</p><p>\u5176\u4E2DList\u548CSet\u63A5\u53E3\u7EE7\u627FCollections</p><p>\u5E38\u7528\u7684\u662FArrayList\u548CHashMap\u548CHashSet</p><ul><li><p>List</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ArrayList\u548CLinkedList\u662F\u5176\u5B9E\u73B0\u7C7B\uFF0C\u5143\u7D20\u987A\u5E8F\u662F\u6709\u5E8F\u7684\uFF0C\u5BB9\u91CF10
ArrayList\u5E95\u5C42\u5B9E\u73B0\u662FObject[]\u6570\u7EC4\uFF0CLinkedList\u662F\u53CC\u5411\u94FE\u8868\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Set</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>HashSet\u662F\u5176\u5B9E\u73B0\u7C7B\uFF0C\u5143\u7D20\u662F\u65E0\u5E8F\u7684
HashSet\u5E95\u5C42\u662F\u57FA\u4E8EhashMap\u7ED3\u6784
TreeSet\u662F\u5176\u5B9E\u73B0\u7C7B\uFF0C\u5143\u7D20\u662F\u6709\u5E8F\u7684
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Map</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>HashMap\u662F\u5176\u5B9E\u73B0\u7C7B\uFF0C\u5B58\u653E\u952E\u503C\u5BF9\u5143\u7D20\uFF0C\u5BB9\u91CF\u662F16
\u5E95\u5C42\u662F\u57FA\u4E8E\u6570\u7EC4\u52A0\u94FE\u8868\u548C\u7EA2\u9ED1\u6811\uFF0C\u94FE\u8868\u957F\u5EA6\u5927\u4E8E8\u4F1A\u8F6C\u5316\u4E3A\u7EA2\u9ED1\u6811\uFF0C\u5982\u679C\u6570\u7EC4\u5143\u7D20\u5C0F\u4E8E64\uFF0C\u4F1A\u5148\u8FDB\u884C\u6269\u5BB9
TreeMap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="\u96C6\u5408\u904D\u5386\u5220\u9664\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u96C6\u5408\u904D\u5386\u5220\u9664\u5143\u7D20" aria-hidden="true">#</a> \u96C6\u5408\u904D\u5386\u5220\u9664\u5143\u7D20</h3><ul><li>for:\u904D\u5386 \u672C\u8D28\u4E0A\u662F\u8F6C\u6362\u4E3A\u8FED\u4EE3\u5668\u64CD\u4F5C</li><li>\u53EA\u80FD\u5728\u8FED\u4EE3\u5668\u4E2D\u904D\u5386\u505A\u5220\u9664\u64CD\u4F5C\uFF0C\u4E14\u53EA\u80FD\u7528\u8FED\u4EE3\u5668\u7684remove\u65B9\u6CD5</li></ul><h2 id="exception" tabindex="-1"><a class="header-anchor" href="#exception" aria-hidden="true">#</a> Exception</h2><p>\u81EA\u4E0A\u800C\u4E0B\u7684\u7C7B\u7ED3\u6784</p><ul><li><p>Throwable</p><ul><li><p>Error</p></li><li><p>Exception</p><ul><li><p>\u68C0\u67E5\u65F6\u5F02\u5E38\uFF0C\u5FC5\u987B\u8FDB\u884C\u5904\u7406,\u76F4\u63A5\u7EE7\u627FException,\u9700\u663E\u5F0F\u5904\u7406,\u5728\u65B9\u6CD5\u4E0A\u58F0\u660Ethrows</p></li><li><p>\u975E\u53D7\u68C0\u5F02\u5E38\uFF0C\u5373RunException</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6570\u7EC4\u8D8A\u754C\uFF0C\u7A7A\u6307\u9488\uFF0C\u7C7B\u578B\u8F6C\u6362\u7B49\u5F02\u5E38
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li></ul></li></ul><h2 id="thread" tabindex="-1"><a class="header-anchor" href="#thread" aria-hidden="true">#</a> Thread</h2><h3 id="\u5B88\u62A4\u7EBF\u7A0B\u548C\u7528\u6237\u7EBF\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u5B88\u62A4\u7EBF\u7A0B\u548C\u7528\u6237\u7EBF\u7A0B" aria-hidden="true">#</a> \u5B88\u62A4\u7EBF\u7A0B\u548C\u7528\u6237\u7EBF\u7A0B</h3>`,15),u={href:"https://www.cnblogs.com/pengai/articles/15827826.html",target:"_blank",rel:"noopener noreferrer"},v=n(`<p>\u4F46\u662F\u6709\u4E00\u4E2A\u4F8B\u5916\u60C5\u51B5\uFF0C\u5982\u679C\u8FD9\u4E9B\u5B50\u7EBF\u7A0B\u90FD\u662F\u5B88\u62A4\u7EBF\u7A0B\uFF0C\u90A3\u4E48\u5B50\u7EBF\u7A0B\u4F1A\u968F\u7740\u4E3B\u7EBF\u7A0B\u7ED3\u675F\u800C\u7ED3\u675F\u3002</p><h3 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h3><ul><li><p>Runable\u63A5\u53E3\uFF0C\u7EE7\u627FThread</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u91CD\u5199run\u65B9\u6CD5\uFF0C\u6784\u5EFA\u7EBF\u7A0B\u4EFB\u52A1
start\u65B9\u6CD5\u542F\u7528\u7EBF\u7A0B
jion\u65B9\u6CD5\u5C06\u5B50\u7EBF\u7A0B\u52A0\u5165\u5F53\u524D\u4E3B\u7EBF\u7A0B\uFF0C\u63A7\u5236\u7EBF\u7A0B\u6267\u884C\u987A\u5E8F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u7EBF\u7A0B\u6C60\u7684\u65B9\u5F0F\uFF0CThreadPoolExecutor</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6838\u5FC3\u7EBF\u7A0B\u6570\uFF0C\u6700\u5927\u7EBF\u7A0B\u6570\uFF0C\u963B\u585E\u961F\u5217\uFF0C\u7EBF\u7A0B\u5DE5\u5382\uFF0C\u8D85\u65F6\u65F6\u95F4\uFF08\u5373\u7EBF\u7A0B\u6700\u5927\u7684\u7A7A\u95F2\u65F6\u95F4\uFF0C\u82E5\u8D85\u51FA\u65F6\u95F4\uFF0C\u5219\u9500\u6BC1\u7EBF\u7A0B\uFF09\uFF0C\u62D2\u7EDD\u7B56\u7565
\u6838\u5FC3\u65F6getTask\uFF0C\u7EBF\u7A0B\u83B7\u53D6\u7B49\u5F85\u961F\u5217\u4E2D\u7684\u4EFB\u52A1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ExecutorService executorService = new ThreadPoolExecutor(10,15,60, TimeUnit.SECONDS,new LinkedBlockingDeque&lt;&gt;(20),
            Executors.defaultThreadFactory(),new ThreadPoolExecutor.CallerRunsPolicy());

        List&lt;List&lt;Inventory&gt;&gt; splitStocks = CollectionUtil.split(list.getData().getRows(),25);

        CountDownLatch count = new CountDownLatch(splitStocks.size());
        Long startTime = new Date().getTime();
        for(List list1: splitStocks)
        {
            executorService.execute(new ThreadTask(count,customerItemStockVOS,list1,itemStockBiz,receiptRecordBiz,receiptBiz));
        }
        try
        {
            count.await(120,TimeUnit.SECONDS);
        }
        catch (InterruptedException e)
        {
            e.printStackTrace();
        }
        Long endTime = new Date().getTime();
        log.info(&quot;\u8017\u65F6&quot;+(endTime-startTime));
	static class ThreadTask implements Runnable
    {
        private CountDownLatch c;
        private List&lt;CustomerItemStockVO&gt; customerItemStockVOS;
        private List&lt;Inventory&gt; list;
        private ItemStockBiz itemStockBiz;
        private ReceiptRecordBiz receiptRecordBiz;
        private ReceiptBiz receiptBiz;

        public ThreadTask(CountDownLatch c,List&lt;CustomerItemStockVO&gt; customerItemStockVOS,List&lt;Inventory&gt; list,ItemStockBiz itemStockBiz,
            ReceiptRecordBiz receiptRecordBiz, ReceiptBiz receiptBiz)
        {
            this.customerItemStockVOS = customerItemStockVOS;
            this.c = c;
            this.list = list;
            this.receiptBiz = receiptBiz;
            this.receiptRecordBiz = receiptRecordBiz;
            this.itemStockBiz = itemStockBiz;
        }

        @Override
        public void run(){

            try
            {
                list.forEach(item -&gt; {
                    CustomerItemStockVO customerItemStockVO = new CustomerItemStockVO();

                    Map&lt;String,Object&gt; requestParams = new HashMap&lt;&gt;();
                    requestParams.put(&quot;tenantId&quot;,item.getTenantId());
                    requestParams.put(&quot;warehouseId&quot;,item.getWarehouseId());
                    requestParams.put(&quot;customerId&quot;,item.getCustomerId());
                    requestParams.put(&quot;itemId&quot;,item.getItemId());
                    requestParams.put(&quot;normalFlag&quot;,item.getNormalFlag());

                    List&lt;ItemStock&gt; itemStockList = itemStockBiz.selectForItemCache(requestParams);
                    List&lt;ItemStockVo&gt; itemStockVoList = itemStockBiz.assembleDate1(itemStockList);
                    BigDecimal quantity = BigDecimal.ZERO;
                    BigDecimal usableQty = BigDecimal.ZERO;
                    BigDecimal lockQty = BigDecimal.ZERO;
                    BigDecimal frozenQuantity = BigDecimal.ZERO;
                    BigDecimal diffQty = BigDecimal.ZERO;
                    BigDecimal outGoingCache = BigDecimal.ZERO;
                    BigDecimal storageCache = BigDecimal.ZERO;
                    BigDecimal returnQty = BigDecimal.ZERO;
                    BigDecimal replLockQty = BigDecimal.ZERO;
                    BigDecimal pieceNum = BigDecimal.ZERO;
                    BigDecimal oddQuantity = BigDecimal.ZERO;

                    for (ItemStockVo itemStockVo : itemStockVoList)
                    {
                        BeanUtil.copyProperties(itemStockVo, customerItemStockVO);
                        // \u53EF\u7528\u5E93\u5B58\u3001\u9501\u5B9A\u5E93\u5B58\uFF08\u8D8A\u5E93\u7F13\u5B58+\u8865\u8D27\u7F13\u5B58+\u62E3\u8D27\u5E93\u4F4D+\u5B58\u50A8\u5E93\u4F4D\uFF09
                        if (itemStockVo.getLocationType()
                            .equals(WmsConstant.Location.LocationType.REPOSITORY_LOCATION.getCode())
                            ||
                            itemStockVo.getLocationType().equals(WmsConstant.Location.LocationType.PICKING_LOCATION.getCode())
                            || itemStockVo.getLocationType()
                            .equals(WmsConstant.Location.LocationType.REPLENISHMENT_CACHE.getCode())
                            || itemStockVo.getLocationType()
                            .equals(WmsConstant.Location.LocationType.CROSS_DATABASE_CACHE.getCode()))
                        {
                            usableQty = itemStockVo.getUsableQuantity().add(usableQty);
                            lockQty = itemStockVo.getLockQuantity().add(lockQty);
                        }
                        // \u51BB\u7ED3\u6570\u91CF\uFF08\u62E3\u8D27\u5E93\u4F4D+\u5B58\u50A8\u5E93\u4F4D\uFF09
                        if (itemStockVo.getLocationType().equals(WmsConstant.Location.LocationType.PICKING_LOCATION.getCode())
                            || itemStockVo.getLocationType()
                            .equals(WmsConstant.Location.LocationType.REPOSITORY_LOCATION.getCode()))
                        {
                            frozenQuantity = itemStockVo.getFrozenQuantity().add(frozenQuantity);
                        }
                        // \u5DEE\u5F02\u6570\u91CF\uFF08\u5DEE\u5F02\u5E93\u4F4D\uFF09
                        if (itemStockVo.getLocationType().equals(WmsConstant.Location.LocationType.ABNORMAL_LOCATION.getCode()))
                        {
                            diffQty = itemStockVo.getUsableQuantity().add(diffQty);
                        }
                        // \u51FA\u5E93\u7F13\u5B58\uFF08\u51FA\u5E93\u7F13\u5B58\u7684\u53EF\u7528\u5E93\u5B58\u603B\u91CF\uFF09
                        if (itemStockVo.getLocationType().equals(WmsConstant.Location.LocationType.OUTGOING_CACHE.getCode()))
                        {
                            outGoingCache = itemStockVo.getUsableQuantity().add(outGoingCache);
                        }
                        //  \u5165\u5E93\u7F13\u5B58\uFF08\u5165\u5E93\u7F13\u5B58\u7684\u53EF\u7528\u5E93\u5B58\u603B\u91CF\uFF09
                        if (itemStockVo.getLocationType().equals(WmsConstant.Location.LocationType.STORAGE_CACHE.getCode()))
                        {
                            storageCache = itemStockVo.getUsableQuantity().add(storageCache);
                        }
                        //  \u8FD4\u5E93\u6570\u91CF\uFF08\u53D1\u8D27\u5F02\u5E38\u7684\u5E93\u5B58\u603B\u91CF\uFF09
                        if (itemStockVo.getLocationType().equals(WmsConstant.Location.LocationType.DELIVERY_ABNORMAL.getCode()))
                        {
                            returnQty = itemStockVo.getQuantity().add(returnQty);
                        }
                        //  \u8865\u8D27\u9501\u5B9A\u5E93\u5B58\u3001\u6574\u4EF6\u6570\u91CF\u3001 \u6563\u4EF6\u6570\u91CF \uFF08\u76F4\u63A5\u7D2F\u52A0\uFF09
                        replLockQty = itemStockVo.getReplLockQuantity().add(replLockQty);
                        pieceNum = itemStockVo.getPieceNum().add(pieceNum);
                        oddQuantity = itemStockVo.getOddQuantity().add(oddQuantity);
                    }
                    // \u603B\u5E93\u5B58\u6570 = \u53EF\u7528\u5E93\u5B58+\u9501\u5B9A\u5E93\u5B58+\u5DEE\u5F02\u6570\u91CF+\u51BB\u7ED3\u6570\u91CF+\u5165\u5E93\u7F13\u5B58+\u51FA\u5E93\u7F13\u5B58+\u8FD4\u5E93\u6570\u91CF+\u8865\u8D27\u9501\u5B9A\u6570\u91CF
                    quantity = usableQty.add(lockQty).add(diffQty) .add(frozenQuantity) .add(storageCache).add(outGoingCache).add(returnQty).add(replLockQty);

                    if (itemStockVoList.isEmpty())
                    {
                        BeanUtil.copyProperties(item, customerItemStockVO);
                    }
                    customerItemStockVO.setGoodsCode(item.getGoodsCode());
                    customerItemStockVO.setQuantity(quantity);
                    customerItemStockVO.setUsableQty(usableQty);
                    customerItemStockVO.setLockQty(lockQty);
                    customerItemStockVO.setFrozenQuantity(frozenQuantity);
                    customerItemStockVO.setDiffQty(diffQty);
                    customerItemStockVO.setOutGoingCache(outGoingCache);
                    customerItemStockVO.setStorageCache(storageCache);
                    customerItemStockVO.setReturnQty(returnQty);
                    customerItemStockVO.setReplLockQty(replLockQty);
                    customerItemStockVO.setPieceNum(pieceNum);
                    customerItemStockVO.setOddQuantity(oddQuantity);
                    // \u4E0B\u5355\u9501\u5B9A\uFF08\u5DF2\u4E0B\u5355\u672A\u53D1\u8FD0\u6570\u91CF\uFF09orderQty;
                    customerItemStockVO.setOrderQty(item.getOrderQty());

                    ReceiptRecord receiptRecord = new ReceiptRecord();
                    receiptRecord.setTenantId(item.getTenantId());
                    receiptRecord.setWarehouseId(item.getWarehouseId());
                    receiptRecord.setCustomerId(item.getCustomerId());
                    receiptRecord.setItemId(item.getItemId());
                    receiptRecord.setNormalFlag(item.getNormalFlag());
                    receiptRecord.setQcStatus(WmsConstant.Receipt.QcStatus.WAIT_QC.getCode());
                    // \u6536\u8D27\u5728\u9014\uFF08\u65B0\u7EAA\u5F55+\u6536\u8D27\u4E2D\u7684\u5F85\u6536\u8D27\u6570\uFF09
                    Receipt receipt =new Receipt();
                    receipt.setTenantId(item.getTenantId());
                    receipt.setWarehouseId(item.getWarehouseId());
                    receipt.setCustomerId(item.getCustomerId());
                    receipt.setReceiptStatus(WmsConstant.Receipt.ReceiptStatus.NEW.getCode());
                    List&lt;Receipt&gt; receipts=receiptBiz.selectList(receipt);
                    receipt.setReceiptStatus(WmsConstant.Receipt.ReceiptStatus.RECEIVING.getCode());
                    receipts.addAll(receiptBiz.selectList(receipt));
                    if(receipts.size()&gt;0){
                        BigDecimal expectQty = BigDecimal.valueOf(receipts.stream().mapToDouble(i -&gt; i.getExpectedQuantity().doubleValue()).sum());
                        BigDecimal receivedQty = BigDecimal.valueOf(receipts.stream().mapToDouble(i -&gt; i.getReceivedQuantity().doubleValue()).sum());
                        customerItemStockVO.setIntransitQuantity(expectQty.subtract(receivedQty));
                    }else{
                        customerItemStockVO.setIntransitQuantity(BigDecimal.ZERO);
                    }

                    List&lt;ReceiptRecord&gt; receiptRecords = receiptRecordBiz.selectList(receiptRecord);
                    // \u5F85\u8D28\u68C0\u91CF\uFF08\u5F85\u8D28\u68C0\u7684\u6536\u8D27\u8BB0\u5F55\u7684\u5B9E\u9645\u6536\u8D27\u6570\u91CF\uFF09
                    if (receiptRecords.size() &gt; 0)
                    {
                        customerItemStockVO.setQrQty(BigDecimal.valueOf(receiptRecords.stream().mapToInt(record -&gt; record.getReceivedQuantity().intValue()).sum()));
                    }
                    else
                    {
                        customerItemStockVO.setQrQty(BigDecimal.ZERO);
                    }
                    // \u6C47\u603B\u7684\u6570\u636E\u585E\u503C
                    customerItemStockVOS.add(customerItemStockVO);
                });
                c.countDown();
//                System.out.println(Thread.currentThread().getName()+&quot;  task&quot; + i);
            }
            catch (Exception e)
            {
                e.printStackTrace();
            }
        }
    }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="\u7EBF\u7A0B\u95F4\u7684\u901A\u4FE1" tabindex="-1"><a class="header-anchor" href="#\u7EBF\u7A0B\u95F4\u7684\u901A\u4FE1" aria-hidden="true">#</a> \u7EBF\u7A0B\u95F4\u7684\u901A\u4FE1</h3><ul><li>wait\u3001notify\u3001notifyAll</li><li>aWait\u3001signal\u3001signalAll</li></ul><h3 id="\u7EBF\u7A0B\u6267\u884C\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u7EBF\u7A0B\u6267\u884C\u987A\u5E8F" aria-hidden="true">#</a> \u7EBF\u7A0B\u6267\u884C\u987A\u5E8F</h3><ul><li>countDownLatch</li><li>join</li><li>Future\u7C7B\u83B7\u53D6\u5F02\u6B65\u7EBF\u7A0B\u7ED3\u679C</li></ul><h2 id="queue" tabindex="-1"><a class="header-anchor" href="#queue" aria-hidden="true">#</a> Queue</h2><blockquote><p>offer\u548Cadd\u533A\u522B</p></blockquote><p>\u90FD\u662F\u5411\u961F\u5217\u6DFB\u52A0\u5143\u7D20\uFF0Coffer\u65B9\u6CD5\u82E5\u961F\u5217\u5DF2\u6EE1\uFF0C\u5219\u8FD4\u56DEfalse\uFF0C\u4E0D\u4F1A\u62A5\u9519</p><blockquote><p>remove\u548Cpoll\u533A\u522B</p></blockquote><p>\u5411\u961F\u5217\u79FB\u9664\u5143\u7D20\uFF0Cpoll\u65B9\u6CD5\u82E5\u961F\u5217\u5DF2\u7A7A\uFF0C\u5219\u8FD4\u56DEfalse\uFF0C\u4E0D\u4F1A\u62A5\u9519</p>`,12);function m(b,p){const t=c("ExternalLinkIcon");return l(),a("div",null,[o,e("p",null,[e("a",u,[i("\u53C2\u8003"),d(t)]),i(" \u7EBF\u7A0B\u4E0D\u50CF\u8FDB\u7A0B\uFF0C\u4E00\u4E2A\u8FDB\u7A0B\u4E2D\u7684\u7EBF\u7A0B\u4E4B\u95F4\u662F\u6CA1\u6709\u7236\u5B50\u4E4B\u5206\u7684\uFF0C\u90FD\u662F\u5E73\u7EA7\u5173\u7CFB\u3002\u5373\u7EBF\u7A0B\u90FD\u662F\u4E00\u6837\u7684, \u9000\u51FA\u4E86\u4E00\u4E2A\u4E0D\u4F1A\u5F71\u54CD\u53E6\u5916\u4E00\u4E2A\u3002")]),v])}const S=s(r,[["render",m],["__file","java.html.vue"]]);export{S as default};
