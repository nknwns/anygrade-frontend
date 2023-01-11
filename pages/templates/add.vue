<template>
	<section class="template section">
		<h1 hidden>Сервис оценки сотрудников - новый шаблон</h1>
		<v-container>
			<v-row>
				<v-col
					cols="12"
				>
					<div class="section__header">
						<h2 class="section__title">Создайте шаблон</h2>
					</div>
				</v-col>
				<v-col cols="12">
					<v-alert type="info">
						<p>Заполните форму, чтобы создать новый шаблон опроса. Введите заголовок, описание и выберите необходимые вопросы. В случае отсутствия вопроса, создайте новый.</p>
					</v-alert>
				</v-col>
				<TemplatesCreateForm
					:questionsList="questions"
					:categoriesList="categories"
					@send="createTemplate"
				/>
			</v-row>
		</v-container>
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
