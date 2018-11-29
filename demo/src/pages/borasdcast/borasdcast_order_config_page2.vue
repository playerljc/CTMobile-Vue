<template>
  <div>
    <header>
      <ctmobile-back class="ct-back-icon"/>
      <p class="ct-header-title">borasdcast_order_config_page2</p>
    </header>
    <div class="ct-content" style="top: 3rem;bottom: 0">
      <ul>
        <li>
          <ctmobile-link class="link" pageId="borasdcast_order_config_page3">borasdcast_order_config_page3
          </ctmobile-link>
        </li>
        <li><a class="link" @click="$parent.ctmobile.sendOrderedBroadcast({
            action: 'borasdcast_order_config',
            categorys: [],
            bundle: {
              a: 3,
              b: 4
            }
          });">通知</a></li>
      </ul>
    </div>
  </div>
</template>
<script src="./borasdcast_order_config_page2.js"></script>