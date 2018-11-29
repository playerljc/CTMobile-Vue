<template>
  <div>
    <header>
      <ctmobile-back class="ct-back-icon"/>
      <p class="ct-header-title">startmode_result_onetomore</p>
    </header>
    <div class="ct-content" style="top: 3rem;bottom: 0">
      <ul>
        <li>
          <a class="link" @click="
            $parent.setRequest('startmode_result_opendialog');
            $parent.getCtMobile().startPage('#startmode_result_opendialog?pageId=startmode_result_opendialog');">打开startmode_result_opendialog
          </a>
        </li>
        <li>
          <a class="link" @click="
            $parent.setRequest('startmode_result_opendialog2');
            $parent.getCtMobile().startPage('#startmode_result_opendialog?pageId=startmode_result_opendialog2');">打开startmode_result_opendialog2
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script src="./startmode_result_onetomore.js"></script>