export const state = () => ({
	user: {
		isAuthenticated: true,
		token: 'sddsfdsfdsgdgdfdsf545esdf5sdgf',
		name: 'andrejshaev'
	}
})

export const getters = {

}

export const mutations = {
	setToken(state, token) {
		state.user.token = token;
	},
	setUsername(state, name) {
		state.user.name = name;
	},
	setAuthenticated(state, flag) {
		state.user.isAuthenticated = flag;
	}
}

export const actions = {
	async login({commit}, data) {
		commit('setToken', 'dsfgdgfsazdfdjkflsdk532323');
		commit('setUsername', data.login);
		commit('setAuthenticated', true);
	},
	async logout({commit}) {
		commit('setToken', null);
		commit('setUsername', null);
		commit('setAuthenticated', false);
	}
}
