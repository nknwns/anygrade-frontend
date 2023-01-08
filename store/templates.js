export const state = () => ({
	templates: [],
	isLoading: true
})

export const getters = {

}

export const mutations = {
	setTemplates(state, templates) {
		state.templates = templates;
	},
	setLoading(state, loading) {
		state.isLoading = loading;
	}
}

export const actions = {
	async loadTemplates({commit}) {
		try {
			commit('setTemplates', []);
			commit('setLoading', true);

			const templates = await this.$axios.$get('templates.json');

			commit('setTemplates', templates);
			commit('setLoading', false);
		} catch (e) {
			console.log(e);
		}
	},
	async loadTemplate({commit}, id) {
		try {
			const templates = await this.$axios.$get('templates.json');
			return templates.find(el => el.id == id);
		} catch (e) {
			console.log(e);
		}
	},
	async removeTemplate({commit, state}, id) {
		try {
			// Fetch to remove template
		} catch (e) {
			console.log(e);
		}
	}
}
