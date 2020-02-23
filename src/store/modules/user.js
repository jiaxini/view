export const USERINFO = 'user_info'

const state = {
    user_info: {}
}

const getters = {
    [USERINFO](){
        return state.user_info
    }
}

const actions = {

}

const mutations = {
    [USERINFO](state, user ){
        state.user_info = user
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}