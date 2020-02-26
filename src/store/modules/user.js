import { P } from '../../common/Http';
import Vue from 'vue';
export const USERINFO = 'user_info';

const state = {
    user: {}
}

const getters = {
    [USERINFO](){
        return state.user
    }
}

const actions = {
    async [USERINFO]({commit}, params){
        P(params.url, params.user).then(d => {
            commit(USERINFO, d.data)
        })
    }
}

const mutations = {
    [USERINFO](state, user){
        state.user = user
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}