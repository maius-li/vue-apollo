// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { ApolloClient, createBatchingNetworkInterface } from 'apollo-client';
import VueApollo from 'vue-apollo';
import App from './App';
import router from './router';


// Create the apollo client
const apolloClient = new ApolloClient({
  networkInterface: createBatchingNetworkInterface({
    uri: 'http://rosa-app.herokuapp.com/apollo-graphql',
  }),
  connectToDevTools: true,
});

// Install the vue plugin
Vue.use(VueApollo);

Vue.config.productionTip = false;
// apolloProvider
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  apolloProvider,
});
