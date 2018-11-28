<template>
  <div>
    <header>
      <ctmobile-back class="ct-back-icon"/>
      <p class="ct-header-title">启动模式</p>
    </header>
    <div class="ct-content" style="top: 3rem;bottom: 0">
      <ul>
        <li>
          <ctmobile-link class="link" pageId="startmode_standard">standard(多例)</ctmobile-link>
        </li>
        <li>
          <ctmobile-link class="link" pageId="startmode_single">single(单例)</ctmobile-link>
        </li>
        <li>
          <ctmobile-link class="link" pageId="startmode_singleInstance">singleInstance(完全单例)</ctmobile-link>
        </li>
        <li>
          <ctmobile-link class="link" pageId="startmode_result">result(带有返回值的，可以向父页面带回返回值)</ctmobile-link>
        </li>
        <li>
          <ctmobile-link class="link" pageId="startmode_singleInstanceResult">
            singleInstanceResult(带有返回值的完全单例(不会被销毁，可以向父页面带回返回值))
          </ctmobile-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script src="./index.js"></script>