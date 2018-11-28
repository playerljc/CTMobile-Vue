<template>
  <AppLayout>
    <div class="TimeBack" slot="header-left">
      <AppBack/>
      <span class="time">{{createTime}}</span>
    </div>
    <textarea v-if="isload" autoFocus v-model="value" class="AppTextArea" slot="content"/>
    <div class="button" @click="onSave" slot="footer-left">保存</div>
  </AppLayout>
</template>
<script src="./index.js"></script>