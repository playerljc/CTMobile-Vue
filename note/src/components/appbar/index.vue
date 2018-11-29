<template>
  <div class="AppBar">
    <div class="fa fa-folder-o AppBar-pad" @click="onNotePad"/>
      <div class="AppBar-title">便签</div>
      <div :class="classObject" @click="onViewType" />
    </div>
</template>
<script src="./index.js"></script>
<style src="./index.less"></style>