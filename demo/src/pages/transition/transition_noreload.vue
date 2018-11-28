<template>
  <div>
    <header>
      <ctmobile-back class="ct-back-icon"/>
      <p class="ct-header-title">transition_noreload</p>
    </header>
    <div class="ct-content" style="top: 3rem;bottom: 0">
      <ul>
        <li>
          <ctmobile-link class="link" pageId="common" :reload="false">配置方式</ctmobile-link>
        </li>
        <li><a class="link" @click="
          $parent.ctmobile.startPage('#common?pageId=common', {
            reload: false,
          });">api方式</a></li>
      </ul>
    </div>
  </div>
</template>
<script src="./transition_noreload.js"></script>