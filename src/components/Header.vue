<template>
  <div class="header-wrap">
    <div class="logo"></div>
    <div class="header-link-wrap">
      <a class="header-link">首頁</a><span>|</span>
      <a class="header-link">好評推薦</a>
      <a class="header-link">產品介紹</a>
      <a class="header-link">線上購物</a>
      <a class="header-link">聯絡我們</a>
    </div>
    <div class="member-info">
      <a>會員登入</a>
      <a>購物車</a>
    </div>
  </div>
</template>

<script>
// import gql from 'graphql-tag';

export default {
  name: 'Header',
  data() {
    return {
    };
  },
};
</script>

<style lang="scss">

.header-wrap {
  color:#C2C2C2;
  height: 72px;
  background-color: #FFF;
}

</style>
