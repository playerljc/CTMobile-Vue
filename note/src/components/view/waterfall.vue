<template>
  <div class="AppWaterfallView">
    <ul class="AppWaterfallViewColumn">
      <li v-for="item in computeData(0)" :key="item.id" @click="onItemClick(item)">
        <a>
          <div class="title">{{item.title}}</div>
          <div class="info">{{item.info}}</div>
          <div class="createTime">{{item.createTime}}</div>
        </a>
      </li>
    </ul>
    <ul class="AppWaterfallViewColumn">
      <li v-for="item in computeData(1)" :key="item.id" @click="onItemClick(item)">
        <a>
          <div class="title">{{item.title}}</div>
          <div class="info">{{item.info}}</div>
          <div class="createTime">{{item.createTime}}</div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script src="./waterfall.js"></script>
<style src="./waterfall.less"></style>