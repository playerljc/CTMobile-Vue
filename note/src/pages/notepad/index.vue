<template>
  <AppLayout class="notepad">
    <div class="TextBack" slot="header-left">
      <AppBack/>
      <span class="text">便签夹</span>
    </div>
    <ul slot="content">
      <li @click="$parent.over();">
        <span>...&nbsp;随手记</span>
        <span>{{count}}</span>
      </li>
    </ul>
  </AppLayout>
</template>
<script src="./index.js"></script>
<style src="./index.less"></style>