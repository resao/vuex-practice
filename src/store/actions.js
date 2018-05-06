export default {
    register({ commit }, userId) {
        //Simulate an asynchronous call
        setTimeout(() => {
            commit('register', userId);
        }, 1000);            
    }
}