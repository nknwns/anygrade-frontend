<template>
	<section class="template section">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="section__header">
						<h4 class="section__title">Список шаблонов</h4>
						<div class="section__line">
							<form action="#" class="form">
								<div class="form__field">
									<label for="templatename" class="form__label" hidden>Search</label>
									<input type="text" class="form__input" id="templatename" name="templatename" placeholder="Поиск шаблона..">
								</div>
							</form>
							<nuxt-link to="/templates/add" class="button button--success">+ Создать шаблон</nuxt-link>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<template v-if="isLoading">
					<p>Загрузка данных..</p>
				</template>
				<template v-else>
					<TemplatesItem
						v-for="(template, i) in templates"
						:key="i"
						:template="template"
					/>
				</template>
			</div>
		</div>
	</section>
</template>

<script>

import {mapActions, mapState} from "vuex";

export default {
	name: 'TemplatePage',
	computed: {
		...mapState({
			templates: state => state.templates.templates,
			isLoading: state => state.templates.isLoading
		})
	},
	methods: {
		...mapActions({
			loadTemplates: 'templates/loadTemplates'
		})
	},
	mounted() {
		this.loadTemplates();
	}
}
</script>
