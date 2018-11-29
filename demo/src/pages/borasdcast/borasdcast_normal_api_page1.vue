<template>
  <div>
    <header>
      <ctmobile-back class="ct-back-icon"/>
      <p class="ct-header-title">borasdcast_normal_api_page1</p>
    </header>
    <div class="ct-content" style="top: 3rem;bottom: 0">
      <ul>
        <li>
          <ctmobile-link class="link" pageId="borasdcast_normal_api_page2">borasdcast_normal_api_page2</ctmobile-link>
        </li>
        <li><a class="link" @click="$parent.ctmobile.sendBroadcast({
            action: 'borasdcast_normal_api',
            categorys: [],
            bundle: {
              a: 1,
              b: 2
            }
          });">通知</a></li>
      </ul>
    </div>
  </div>
</template>
<script src="./borasdcast_normal_api_page1.js"></script>