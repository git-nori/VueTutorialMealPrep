import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        recipes: [],
        apiUrl: 'https://api.edamam.com/search'
    },
    mutations: {
        setRecipes (state, payload) {
            state.recipes = payload
        }
    },
    actions: {
        async getRecipes ({ state, commit }, plan) {
            const API_ID = 'cd304163';
            const API_KEY = '88f7f5c4da5528dc3326914301c6030b';
            try {
                let response = await axios.get(`${state.apiUrl}`, {
                    params: {
                        q: plan,
                        app_id: API_ID,
                        app_key: API_KEY,
                        from: 0,
                        to: 9
                    }
                });
                commit('setRecipes', response.data.hits);
            } catch (error) {
                commit('setRecipes', []);
            }
        }
    },
    getters: {
        recipes: state => state.recipes
    }
});
