<template>
  <div>
    <header>
      <ctmobile-back class="ct-back-icon"/>
      <p class="ct-header-title">开发模式</p>
    </header>
    <div class="ct-content" style="top:3rem;bottom: 0">

      <ul>
        <li>
          <ctmobile-link class="link" pageId="beginnewpage_newpage">使用ctmobile-link组件</ctmobile-link>
        </li>
        <li>
          <a class="link" @click="$parent.ctmobile.startPage('#beginnewpage_newpage?pageId=beginnewpage_newpage');">使用api</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script src="./index.js"></script>