<template>
  <div>
    <header>
      <ctmobile-back class="ct-back-icon"/>
      <p class="ct-header-title">startmode_result_opendialog</p>
    </header>
    <div class="ct-content" style="top: 3rem;bottom: 0">
      <ul>
        <li><a class="link" @click="
          const request = $parent.getRequest();
          $parent.setResult(request.requestCode, {a: 1, b: 2});
          $parent.over();">关闭窗体并返回数据</a></li>
      </ul>
    </div>
  </div>
</template>
<script src="./startmode_result_opendialog.js"></script>