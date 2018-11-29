<template>
  <div>
    <header>
      <ctmobile-back class="ct-back-icon"/>
      <p class="ct-header-title">borasdcast_order_config_page3</p>
    </header>
    <div class="ct-content" style="top: 3rem;bottom: 0">
      <ul>
        <li><a class="link" @click="$parent.ctmobile.sendOrderedBroadcast({
            action: 'borasdcast_order_config',
            categorys: [],
            bundle: {
              a: 5,
              b: 6
            }
          });">通知</a></li>
      </ul>
    </div>
  </div>
</template>
<script src="./borasdcast_order_config_page3.js"></script>