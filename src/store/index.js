import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 123,
    },
    mutations: {
        add(state) {
            console.log(1);
            state.count += 1;
        }, 
        reduce(state){
            state.count -= 1;
        },
        zero(state) {
            state.count = 0;
        },
        setNum(state,num) {
            console.log(state);
            console.log(num);
            state.count = num;
        }
    },
    actions: {
        add({commit}) {
            console.log('2');
            commit('add')
        }
    },
    getters: {
        count(state){
            return state.count += 5;
        }
    }
})

export default store