<template>
  <div>
    <header>
      <ctmobile-back class="ct-back-icon"/>
      <p class="ct-header-title">transition</p>
    </header>
    <div class="ct-content" style="top: 3rem;bottom: 0">
      <ul>
        <li>
          <ctmobile-link class="link" pageId="transition_noreload">增加历史</ctmobile-link>
        </li>
        <li>
          <ctmobile-link class="link" pageId="transition_reload">不增加历史</ctmobile-link>
        </li>
        <li>
          <ctmobile-link class="link" pageId="transition_mode">转场效果</ctmobile-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script src="./index.js"></script>