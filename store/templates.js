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
			console.log(templates)

			commit('setTemplates', templates);
			commit('setLoading', false);
		} catch (e) {
			console.log(e);
		}
	}
}
