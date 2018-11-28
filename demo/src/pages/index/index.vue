<template>
  <div>
    <header>
      <p class="ct-header-title">CtMobile-Vue Demo</p>
    </header>
    <div class="ct-content" style="top:3rem;bottom:0;">
      <ul>
        <li>
          <ctmobile-link class="link" pageId="beginnewpage">开始一个新的页面</ctmobile-link>
        </li>
        <li>
          <ctmobile-link class="link" pageId="return">返回</ctmobile-link>
        </li>
        <li>
          <ctmobile-link class="link" pageId="startmode">启动模式</ctmobile-link>
        </li>
        <li>
          <ctmobile-link class="link" pageId="parameter">界面传递参数</ctmobile-link>
        </li>
        <li>
          <ctmobile-link class="link" pageId="transition">页面转场</ctmobile-link>
        </li>
        <li>
          <ctmobile-link class="link" pageId="borasdcast">广播</ctmobile-link>
        </li>
        <!--<li>-->
        <!--<ctmobile-link class="link" pageId="info">info</ctmobile-link>-->
        <!--</li>-->
      </ul>
    </div>
  </div>
</template>
<script src="./index.js"></script>