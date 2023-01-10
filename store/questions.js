export const state = () => ({
	questions: [],
	isLoading: true
})

export const getters = {

}

export const mutations = {
	setQuestions(state, questions) {
		state.questions = questions;
	},
	setLoading(state, loading) {
		state.isLoading = loading;
	}
}

export const actions = {
	async loadQuestions({commit}) {
		try {
			commit('setQuestions', []);
			commit('setLoading', true);

			let questions = await this.$axios.$get('questions.json');

			commit('setQuestions', questions);
			commit('setLoading', false);
		} catch (e) {
			console.log(e);
		}
	}
}
