<template>
	<form action="#" @submit.prevent="sendData" class="template__form form">
		<div class="row">
			<div class="col-lg-8">
				<div class="card">
					<div class="card__body">
						<FormField id="title" label="Название шаблона">
							<FormInput
								name="title"
								id="title"
								required
								:value="template.title"
								@update="value => template.title = value"
							/>
						</FormField>
						<FormField id="description" label="Описание шаблона">
							<FormTextarea
								name="description"
								id="description"
								required
								:value="template.description"
								@update="value => template.description = value"
							/>
						</FormField>
					</div>
				</div>
				<div class="card">
					<div class="card__header">
						<h5 class="card__title">Список вопросов</h5>
					</div>
					<div class="card__body">
						<QuestionsTable v-if="questions.length" :questions="questions" />
						<p v-else>Список вопросов пуст</p>
					</div>
				</div>
				<div class="buttons">
					<a href="#" class="button">Отменить</a>
					<button class="button button--success">Сохранить</button>
				</div>
			</div>
			<div class="col-lg-4">
				<div class="card">
					<div class="card__header">
						<h5 class="card__title">Создать вопрос</h5>
					</div>
					<div class="card__body">
						<FormField id="questions-title" label="Содержание">
							<FormInput
								name="questions-title"
								id="question-title"
								:value="question.title"
								@update="value => question.title = value"
							/>
						</FormField>
						<FormField id="question-category" label="Категория">
							<FormSelect
								:options="categoriesList"
								:value="question.category"
								@update="value => question.category = value"
							/>
						</FormField>
						<div class="form__field">
							<button
								@click.prevent="createQuestion"
								class="button button--success"
							>
								Добавить
							</button>
						</div>
					</div>
				</div>
				<div class="card">
					<div class="card__header">
						<h5 class="card__title">Добавить вопрос</h5>
					</div>
					<div class="card__body">
						<FormField id="question-name" label="Выберите существующий вопрос">
							<FormInput
								id="question-name"
								name="question-name"
								list
								:value="question.current"
								@update="value => question.current = value"
							/>
							<FormDatalist id="question-name" name="question-name" :options="questionsList" />
						</FormField>
						<div class="form__field">
							<button
								@click.prevent="addQuestion"
								class="button button--success"
							>
								Добавить
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</form>
</template>
<script>
export default {
	name: "TemplatesCreateForm",
	props: {
		categoriesList: Array,
		questionsList: Array
	},
	data() {
		return {
			template: {
				title: '',
				description: ''
			},
			question: {
				title: '',
				category: '',
				current: null
			},
			questions: []
		}
	},
	methods: {
		sendData() {
			this.$emit('send', {
				title: this.template.title,
				description: this.template.description,
				questions: this.questions.map(question => question.id)
			});
		},
		createQuestion() {
			// Fetch request to API
		},
		addQuestion() {
			if (!this.question.current) return;

			const questionInArray = this.questions.filter(element => element.id == this.question.current).length;

			if (!questionInArray) {
				this.questions.push(this.questionsList.find(element => element.id == this.question.current));
			}
		}
	}
}
</script>
