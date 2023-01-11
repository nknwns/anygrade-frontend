<template>
	<div>
		<div class="filters">
			<button
				v-for="category in categories"
				:key="category.id"
				@click.prevent="currentCategory = category.title"
				class="button button--soft"
				:class="{'button--danger': (category.title == currentCategory)}"
			>
				{{ category.title }}
			</button>
			<button
				@click.prevent="currentCategory = ''"
				class="button"
			>
				Очистить
			</button>
		</div>
		<table class="table">
			<thead class="table__head">
			<tr>
				<th>ID</th>
				<th>Вопрос</th>
				<th>Категория</th>
			</tr>
			</thead>
			<tbody>
			<QuestionsTableItem
				v-for="question in filteredQuestions"
				:key="question.id"
				:question="question"
			/>
			</tbody>
		</table>
	</div>
</template>
<script>

export default {
	name: "QuestionsTable",
	props: {
		questions: Array
	},
	data() {
		return {
			currentCategory: '',
			categories: []
		}
	},
	computed: {
		filteredQuestions() {
			if (this.currentCategory.length) {
				return this.questions.filter(question => question.category == this.currentCategory);
			} else {
				return this.questions;
			}
		}
	},
	mounted() {
		this.categories = this.questions.map(question => ({
			id: this.categories.length,
			title: question.category
		}))
	}
}

</script>
