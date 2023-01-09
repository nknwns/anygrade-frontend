export const state = () => ({
	templates: [],
	isLoading: true,
	searchQuery: ''
})

export const getters = {
	filteredTemplates(state) {
		return state.templates.filter(element =>
			element.title?.toLowerCase().includes(state.searchQuery.toLowerCase())
			|| element.description?.toLowerCase().includes(state.searchQuery.toLowerCase()));
	}
}

export const mutations = {
	setTemplates(state, templates) {
		state.templates = templates;
	},
	setLoading(state, loading) {
		state.isLoading = loading;
	},
	setSearchQuery(state, query) {
		state.searchQuery = query;
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
