<template>
  <div class="welcome">
    <div class="welcome-wrap">
      <input class="phone" placeholder="Phone number">
      <input class="pwd" placeholder="Password">
      <div class="login">登入</div>
      <div class="forget-pwd">忘記密碼</div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  name: 'HelloWorld',
  apollo: {
    test: {
      query: gql`query hello($phone:String!) {
        customer(phone: $phone) {
          _id
          address
          birthday
          email
          firstname
          gender
          lastname
          phone
        }
      }`,
      variables: {
        phone: '0919699051',
      },
      result({ data, loader, networkStatus }) {
        console.log(data, loader, networkStatus);
        console.log(networkStatus);
      },
    },
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      test: '',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.welcome {
  width: 500px;
  min-height: 300px;
  margin: 0 auto;
  background-color: #133308;
  padding-top: 100px;
}
.welcome-wrap {
  background-color: #FFF;
  min-height: 300px;
  width: 400px;
  margin: 0 auto;
  padding: 50px;
  box-sizing: border-box;
  border-radius: 3px;
}
input {
  background-color: #CDE3C8;
  width: 100%;
  line-height: 40px;
  border: 0;
  border-radius: 5px;
  padding-left: 20px;
  box-sizing: border-box;
}
.pwd {
  margin-top: 10px;
}
.login, 
.forget-pwd {
  width: 100%;
  height: 40px;
  margin-top: 10px;
  color: #FFF;
  font-size: 18px;
  text-align: center;
  line-height: 40px;

}
.login {
  background-color: #2E660B;
}
.forget-pwd {
  background-color: #0D7AC0;
}
.login:hover {
  background-color: #54A323;
} 
.forget-pwd:hover {
  background-color: #388EC5;
}

</style>
