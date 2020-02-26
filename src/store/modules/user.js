import { login } from '../../common/Api';
export const USERINFO = 'user_info';

const state = {
    user: sessionStorage.getItem(USERINFO) || {}
}

const getters = {
    [USERINFO](){
        return state.user || sessionStorage.getItem(USERINFO)
    }
}

const actions = {
    async [USERINFO]({commit}, params){
        login(params).then(d => {
            commit(USERINFO, d.data)
        })
    }
}

const mutations = {
    [USERINFO](state, user){
        state.user = user
        sessionStorage.setItem(USERINFO, user)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}