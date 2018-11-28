<template>
  <div class="AppLayout">
    <AppHeader>
      <slot name="header-left"></slot>
      <slot name="header-center"></slot>
      <slot name="header-right"></slot>
    </AppHeader>
    <AppContent class="notepadContent">
      <slot name="content"></slot>
    </AppContent>
    <AppFooter>
      <slot name="footer-left"></slot>
      <slot name="footer-center"></slot>
      <slot name="footer-right"></slot>
    </AppFooter>
  </div>
</template>
<script src="./layout.js"></script>
<style src="./index.less"></style>