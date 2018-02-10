<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'app',
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
html,body,#app{
  width: 100%;
  height: 100%;
  margin: 0;
}
#app {
  background-color: #FFF;
}

</style>
