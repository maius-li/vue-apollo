<template>
  <div class="welcome">
    <div class="welcome-wrap">
     
     homePage
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
    userName: {
      query: gql`query{
        viewer {
          _id
          hint
          path
          phone
          username
        }
      }`,
      result({ data, loader, networkStatus }) {
        console.log(4456, data, loader, networkStatus);
        console.log(77, networkStatus);
      },
    },
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      test: '',
      userName: '',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.welcome {
  width: 500px;
  min-height: 300px;
  margin: 0 auto;
  background-color: #FFF;
  padding-top: 100px;
  .welcome-wrap {
    background-color: #FFF;
    min-height: 300px;
    width: 400px;
    margin: 0 auto;
    padding: 50px;
    box-sizing: border-box;
    border-radius: 3px;
    border: 1px solid #D8DEE2;
  }
}

input {
  background-color: #D4F8CC;;
  width: 100%;
  line-height: 40px;
  border: 0;
  border-radius: 5px;
  padding: 0 20px;
  box-sizing: border-box;
  color: #8A9086;
}
input::placeholder {
  color: #070807;
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
  display: block;
  text-decoration: none;

}
.login {
  background-color: #489B14;
}
.forget-pwd {
  color: #8A9086;
  float: right;
  text-align: right;
}
.login:hover {
  background-color: #54A323;
} 
.forget-pwd:hover {
  color: #ED3516;
}

</style>
