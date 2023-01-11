<template>
	<section class="template section">
		<div class="container">
			<div class="section__header row">
				<div class="col-12 col-md-2">
					<h4 class="section__title">Просмотр шаблона</h4>
				</div>
				<div class="section__line col-12 col-md-10">
					<nuxt-link to="/reviews/copy" class="card__button button button--success">Использовать шаблон</nuxt-link>
				</div>
			</div>
			<div class="row">
				<div class="col-md-3">
					<div class="card">
						<div class="card__body">
							<div class="template__header">
								<h5 class="template__title">{{ template.title }}</h5>
								<p class="template__id">ID: #{{ template.id }}</p>
							</div>
							<div class="template__description">
								<table class="template__table table table--clear">
									<tbody>
									<tr>
										<th>Автор</th>
										<td>
											<a target="_blank" :href="template.author.url">{{ template.author.name }}</a>
										</td>
									</tr>
									<tr>
										<th>Количество вопросов</th>
										<td>{{ template.questions.length }}</td>
									</tr>
									<tr>
										<th>Дата создания</th>
										<td>{{ created_at }}</td>
									</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div class="card__body card__body--border-top">
							<h6 class="card__subtitle">Описание</h6>
							<p class="card__text">{{ template.description }}</p>
						</div>
					</div>
				</div>
				<div class="col-md-9">
					<div class="line form">
						<div class="form__group">
							<button @click="removeTemplate(template.id)" class="button button--danger">Удалить шаблон</button>
							<nuxt-link :to="template.id +'/edit'" class="button">Редактировать шаблон</nuxt-link>
						</div>
					</div>
					<div class="card">
						<div class="card__header">
							<h5 class="card__title">Список вопросов</h5>
						</div>
						<div class="card__body">
							<QuestionsTable
								v-if="template.questions.length"
								:questions="template.questions"
							/>
							<p v-else>Список вопросов пуст..</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import {mapActions} from "vuex";

export default {
	name: "TemplatePage",
	data() {
		return {
			template: null
		}
	},
	computed: {
		created_at() {
			return this.template.created_at.toLocaleString('ru');
		}
	},
	methods: {
		...mapActions({
			_removeTemplate: 'templates/removeTemplate'
		}),
		removeTemplate(id) {
			this._removeTemplate(id);
			this.$router.push('/');
		}
	},
	async asyncData({params, redirect, store}) {
		const template = await store.dispatch('templates/loadTemplate', params.id);
		if (!template) redirect('/');
		return {template};
	},
	head() {
		return {
			title: this.template.title + ' | Шаблон для опроса - Anygrade'
		}
	}
}
</script>
