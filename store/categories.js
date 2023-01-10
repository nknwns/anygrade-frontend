export const state = () => ({
	categories: [],
	isLoading: true
})

export const getters = {

}

export const mutations = {
	setCategories(state, categories) {
		state.categories = categories;
	},
	setLoading(state, loading) {
		state.isLoading = loading;
	}
}

export const actions = {
	async loadCategories({commit}) {
		try {
			commit('setCategories', []);
			commit('setLoading', true);

			let categories = await this.$axios.$get('categories.json');

			commit('setCategories', categories);
			commit('setLoading', false);
		} catch (e) {
			console.log(e);
		}
	}
}
