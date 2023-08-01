export default {
    saveAuth(state,userAuth) {
        state.userRouters = userAuth
    },
    changePermission(state,hasAuth){
        state.hasAuth=hasAuth
    }
}