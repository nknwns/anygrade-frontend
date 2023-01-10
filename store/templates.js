export const state = () => ({
	templates: [],
	isLoading: true,
	searchQuery: '',
	filters: [
		{ text: 'По умолчанию', value: 'byID' },
		{ text: 'По заголовку', value: 'byName' },
		{ text: 'По дате создания', value: 'byDate' },
		{ text: 'По количеству вопросов', value: 'byQuestionsCount' }
	],
	currentFilter: 'byID',
	reverseDirection: false
})

export const getters = {
	filteredTemplates(state) {
		const filteredArray = state.templates.filter(element =>
			element.title?.toLowerCase().includes(state.searchQuery.toLowerCase())
			|| element.description?.toLowerCase().includes(state.searchQuery.toLowerCase()));

		let compare = (a, b) => a.id - b.id;

		switch (state.currentFilter) {
			case 'byQuestionsCount': {
				compare = (a, b) => a.questions.length - b.questions.length;
				break;
			}
			case 'byName': {
				compare = (a, b) => a.title.localeCompare(b.title);
				break;
			}
			case 'byDate': {
				compare = (a, b) => a.created_at - b.created_at;
				break;
			}
		}

		const resultArray = filteredArray.sort(compare);
		if (state.reverseDirection) resultArray.reverse();

		return resultArray;
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
	},
	setCurrentFilter(state, filter) {
		state.currentFilter = filter;
	},
	toggleCurrentDirection(state) {
		state.reverseDirection = !state.reverseDirection;
	}
}

export const actions = {
	async loadTemplates({commit}) {
		try {
			commit('setTemplates', []);
			commit('setLoading', true);

			let templates = await this.$axios.$get('templates.json');
			templates.forEach(element => element.created_at = new Date(element.created_at));

			commit('setTemplates', templates);
			commit('setLoading', false);
		} catch (e) {
			console.log(e);
		}
	},
	async loadTemplate({commit}, id) {
		try {
			const templates = await this.$axios.$get('templates.json');
			const template = templates.find(el => el.id === Number(id));

			template.created_at = new Date(template.created_at);

			return template;

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
