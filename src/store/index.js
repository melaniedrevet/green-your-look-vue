import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import auth from "./modules/auth";
import categories from "./modules/categories"

Vue.use(Vuex);


export default new Vuex.Store({
	modules: {
		auth,
		categories
	},
	plugins: [createPersistedState()],
});
