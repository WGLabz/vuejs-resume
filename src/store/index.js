import Vue from "vue";
import Vuex from "vuex";
import firebase from "../firebase/index";
import { collection, getDocs } from "firebase/firestore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { userMetaData: {}, skills: {}, techStacks: [] },
  mutations: {
    setUserMetaData(state, meta) {
      state.userMetaData = meta;
    },
    setSkills(state, skills) {
      state.skills = skills;
    },
    setTechStacks(state, tech) {
      state.techStacks = tech;
    }
  },
  actions: {
    async setUserMetaData(state) {
      const data = [];
      const querySnapshot = await getDocs(collection(firebase.db, "meta"));
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      if (data.length === 0)
        throw new Error("Please setup firebase meta collection.");
      state.commit("setUserMetaData", data[0]);
    },
    async setSkills(state) {
      const data = [];
      const querySnapshot = await getDocs(collection(firebase.db, "skills"));
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      if (data.length === 0)
        throw new Error("Please setup firebase skills collection.");

      state.commit("setSkills", data[0]);
    },
    async setTechStacks(state) {
      console.info('Fetching tech stacks data.')
      const data = [];
      const querySnapshot = await getDocs(collection(firebase.db, "tech"));
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      if (data.length === 0)
        throw new Error("Please setup firebase tech collection.");
      state.commit("setTechStacks", data);
    },
  },
  modules: {},
  getters: {
    getUserMetaData(state) {
      return state.userMetaData;
    },
    getSkills(state) {
      return state.skills;
    },
    getTechStacks(state) {
      console.log('Hello')
      return state.techStacks;
    }
  },
});
