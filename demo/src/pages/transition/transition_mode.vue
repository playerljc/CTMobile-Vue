<template>
  <div>
    <header>
      <ctmobile-back class="ct-back-icon"/>
      <p class="ct-header-title">transition_mode</p>
    </header>
    <div class="ct-content" style="top: 3rem;bottom: 0">
      <ul>
        <li>
          <ctmobile-link class="link" pageId="transition_mode_slideleft">slideleft从右到左(overlay)</ctmobile-link>
        </li>
        <li>
          <ctmobile-link class="link" pageId="transition_mode_slideright">slideright从左到右(overlay)</ctmobile-link>
        </li>
        <li>
          <ctmobile-link class="link" pageId="transition_mode_slideup">slideup从下到上(overlay)</ctmobile-link>
        </li>
        <li>
          <ctmobile-link class="link" pageId="transition_mode_slidedown">slidedown从上到下(overlay)</ctmobile-link>
        </li>
        <li>
          <ctmobile-link class="link" pageId="transition_mode_wxslideleft">wxslideleft类似于微信的从右到左</ctmobile-link>
        </li>
        <li>
          <ctmobile-link class="link" pageId="transition_mode_wxslideright">wxslideright类似于微信的从左到右</ctmobile-link>
        </li>
        <li>
          <ctmobile-link class="link" pageId="transition_mode_wxslideup">wxslideup类似于微信的从下到上</ctmobile-link>
        </li>
        <li>
          <ctmobile-link class="link" pageId="transition_mode_wxslidedown">wxslidedown类似于微信的从上到下</ctmobile-link>
        </li>
        <li>
          <ctmobile-link class="link" pageId="transition_mode_pushslideleft">pushslideleft从右到左(push)</ctmobile-link>
        </li>
        <li>
          <ctmobile-link class="link" pageId="transition_mode_pushslideright">pushslideright从左到右(push)</ctmobile-link>
        </li>
        <li>
          <ctmobile-link class="link" pageId="transition_mode_pushslideup">pushslideup从下到上(push)</ctmobile-link>
        </li>
        <li>
          <ctmobile-link class="link" pageId="transition_mode_pushslidedown">pushslidedown从上到下(push)</ctmobile-link>
        </li>
        <li>
          <ctmobile-link class="link" pageId="transition_mode_material">material(缺省)AndroidMaterial的风格</ctmobile-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script src="./transition_mode.js"></script>