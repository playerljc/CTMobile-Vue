<template>
  <div class="AppListView">
    <ul>
      <li v-for="item in data" :key="item.id" @click="
        page.$parent.setRequest('update', item);
        page.$parent.ctmobile.startPage(`#saveorupdate?pageId=saveorupdate&id=${item.id}`);
      ">
        <div class="title">{{item.title}}</div>
        <div class="info">{{item.info}}</div>
        <div class="time">{{item.createTime}}</div>
      </li>
    </ul>
  </div>
</template>
<script src="./list.js"></script>
<style src="./list.less"></style>