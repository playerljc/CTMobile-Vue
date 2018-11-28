<template>
  <ListView v-if="type === 'list'" :data="data"/>
  <WaterfallView v-else :data="data"/>
</template>
<script src="./index.js"></script>
