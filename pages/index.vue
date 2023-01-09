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
									<input :value="templateSearchQuery"
										   @input="updateTemplateSearchQuery"
										   type="text"
										   class="form__input"
										   id="templatename"
										   name="templatename"
										   placeholder="Поиск шаблона.."
									>
								</div>
							</form>
							<nuxt-link to="/templates/add" class="button button--success">+ Создать шаблон</nuxt-link>
						</div>
					</div>
				</div>
			</div>
			<div class="row" v-if="isLoading">
				<p>Загрузка шаблонов..</p>
			</div>
			<transition-group name="list" tag="div" class="row list-animation" v-else>
				<TemplatesItem
					v-for="(template, i) in templates"
					:key="i"
					:template="template"
				/>
				<div class="col-12">Список шаблонов пуст..</div>
			</transition-group>
		</div>
	</section>
</template>

<script>

import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

export default {
	name: 'TemplatePage',
	computed: {
		...mapState({
			isLoading: state => state.templates.isLoading,
			templateSearchQuery: state => state.templates.searchQuery
		}),
		...mapGetters({
			templates: 'templates/filteredTemplates'
		})
	},
	methods: {
		...mapMutations({
			setTemplateSearchQuery: 'templates/setSearchQuery'
		}),
		...mapActions({
			loadTemplates: 'templates/loadTemplates'
		}),
		updateTemplateSearchQuery(event) {
			this.$store.commit('templates/setSearchQuery', event.target.value);
		}
	},
	mounted() {
		this.loadTemplates();
	}
}
</script>
