<template>
  <div>
    <header>
      <ctmobile-back class="ct-back-icon"/>
      <p class="ct-header-title">parameter</p>
    </header>
    <div class="ct-content" style="top: 3rem;bottom: 0">
      <ul>
        <li>
          <ctmobile-link class="link" pageId="parameter_get" parameter="&a=1&b=2">parameter_get</ctmobile-link>
        </li>
        <li>
          <a class="link" @click="
                   $parent.setRequest($parent.getPageId(),{a:1,b:2});
                   $parent.ctmobile.startPage('#parameter_arm?pageId=parameter_arm');"
          >parameter_arm</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script src="./index.js"></script>