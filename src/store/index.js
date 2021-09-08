import Vue from "vue";
import Vuex from "vuex";

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
Vue.use(Vuex);

export default new Vuex.Store({
  state: { userMetaData: {}, skills: {}, techStacks: [], projectsData: [], certificationsData: [], educationData: [], experienceData: [], publicationsData: [], contactDetails: {} },
  mutations: mutations,
  actions: actions,
  modules: {},
  getters: getters,
});
