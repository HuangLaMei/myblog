import{_ as a,o as e,c as n,d as s}from"./app-1e1d3ba4.js";const i="/myblog/assets/image-20231214212405720-8cef7787.png",l={},t=s(`<h2 id="一、一些常用的markdown格式" tabindex="-1"><a class="header-anchor" href="#一、一些常用的markdown格式" aria-hidden="true">#</a> 一、一些常用的Markdown格式</h2><h3 id="_1-1-标题编写" tabindex="-1"><a class="header-anchor" href="#_1-1-标题编写" aria-hidden="true">#</a> 1.1 标题编写</h3><ul><li>#内容，一级标题</li><li>##内容，二级标题</li><li>###内容，三级标题</li><li>...</li></ul><p>注意：#符号和文本中间必须有空格。</p><h3 id="_1-2-引用" tabindex="-1"><a class="header-anchor" href="#_1-2-引用" aria-hidden="true">#</a> 1.2 引用</h3><p>在文档中想要让文本内容以 引用 方式展示，可通过 <code>&gt; 内容</code> 格式实现</p><blockquote><p>这是一个引用</p></blockquote><h3 id="_1-3-列表" tabindex="-1"><a class="header-anchor" href="#_1-3-列表" aria-hidden="true">#</a> 1.3 列表</h3><p>想要以列表的形式展示数据，可以通过 <code>- 内容</code> 格式实现无序列表</p><ul><li>无序列表1</li><li>无序列表2</li><li>无序列表3 <ul><li>二级无序列表</li><li>二级无序列表</li></ul></li></ul><p>有序列表通过 <code>1. 内容</code>格式实现</p><ol><li>有序列表1</li><li>有序列表2</li><li>有序列表3</li></ol><h3 id="_1-4-实现代码" tabindex="-1"><a class="header-anchor" href="#_1-4-实现代码" aria-hidden="true">#</a> 1.4 实现代码</h3><p>想要在文档中集成代码时，可以通过 \`\`\` 符号实现</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>
    hello world
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-5-图片" tabindex="-1"><a class="header-anchor" href="#_1-5-图片" aria-hidden="true">#</a> 1.5 图片</h3><p>复制粘贴即可，注意：图片路径一定要使用相对路径。</p><p><img src="`+i+'" alt="image-20231214212405720"></p>',19),c=[t];function d(o,r){return e(),n("div",null,c)}const h=a(l,[["render",d],["__file","01.html.vue"]]);export{h as default};
