import Vue from "vue";
import Vuex from "vuex";
import rooms from './rooms';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    rooms
  }
});

export default store;
