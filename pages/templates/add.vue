<template>
	<section class="template section">
		<h1 hidden>Сервис оценки сотрудников - новый шаблон</h1>
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="section__header">
						<h2 class="section__title">Создание шаблона</h2>
					</div>
				</div>
				<TemplatesCreateForm
					:questionsList="questions"
					:categoriesList="categories"
					@send="createTemplate"
				/>
			</div>
		</div>
	</section>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
	name: "AddTemplatePage",
	data() {
		return {
			questions: [],
			categories: []
		}
	},
	methods: {
		createTemplate(data) {
			console.table(data)
		},
		...mapActions({
			loadQuestions: 'questions/loadQuestions',
			loadCategories: 'categories/loadCategories'
		})
	},
	async asyncData({store}) {
		await store.dispatch('questions/loadQuestions');
		await store.dispatch('categories/loadCategories');

		const questions = store.state.questions.questions;
		const categories = store.state.categories.categories;

		return {questions, categories};
	},
	head() {
		return {
			title: 'Новый шаблон - Anygrade'
		}
	}
}
</script>
