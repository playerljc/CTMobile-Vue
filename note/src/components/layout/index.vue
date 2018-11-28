<template>
  <Layout>
    <Header>
      <slot name="header-left"></slot>
      <slot name="header-center"></slot>
      <slot name="header-right"></slot>
    </Header>
    <Content>
      <slot name="content"></slot>
    </Content>
    <Footer>
      <slot name="footer-left"></slot>
      <slot name="footer-center"></slot>
      <slot name="footer-right"></slot>
    </Footer>
  </Layout>
</template>
<script src="./index.js"></script>
<style src="./index.less"></style>