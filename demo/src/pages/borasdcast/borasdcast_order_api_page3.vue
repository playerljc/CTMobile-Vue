<template>
  <div>
    <header>
      <ctmobile-back class="ct-back-icon"/>
      <p class="ct-header-title">borasdcast_order_api_page3</p>
    </header>
    <div class="ct-content" style="top: 3rem;bottom: 0">
      <ul>
        <li><a class="link" @click="$parent.ctmobile.sendOrderedBroadcast({
            action: 'borasdcast_order_api',
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
<script src="./borasdcast_order_api_page3.js"></script>