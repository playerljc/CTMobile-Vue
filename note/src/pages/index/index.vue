<template>
  <div class="App">
    <AppBar :type="type" :onNotePad="onNotePad" :onViewType="onViewType"/>
    <SearchBar/>
    <div class="AppView" ref="appViewEl">
      <AppView :type="type" :data="data"/>
    </div>
    <FloatingButton :onClick="onFloatingClick"/>
  </div>
</template>
<script src="./index.js"></script>
<style src="./index.less"></style>