<template>
	<section class="template section">
		<h1 hidden>Система оценки сотрудников - шаблоны</h1>
		<div class="container">
			<div class="section__header row">
				<div class="col-12 col-md-2">
					<h2 class="section__title">Список шаблонов</h2>
				</div>
				<div class="col-12 col-md-10">
					<div class="section__line">
						<form action="#" class="form section__filters">
							<label for="templatename" class="form__label" hidden>Search</label>
							<input :value="templateSearchQuery"
									@input="updateTemplateSearchQuery"
									type="text"
									class="form__input"
									id="templatename"
									name="templatename"
									placeholder="Поиск шаблона.."
							>
							<label for="templatefilter" class="form__label" hidden>Filter</label>
							<select v-model="currentFilter" id="templatefilter" name="templatefilter" class="form__input">
								<option
									v-for="(filter, i) in filters"
									:key="'filter-' + i"
									:value="filter.value"
								>
									{{ filter.text }}
								</option>
							</select>
							<ButtonSorting
								@change="toggleCurrentDirection"
							/>
							<button @click.prevent="clearOptions" class="button button--danger">Очистить</button>
						</form>
						<nuxt-link to="/templates/add" class="button button--success">+ Создать шаблон</nuxt-link>
					</div>
				</div>
			</div>
			<div class="row" v-if="isLoading">
				<p>Загрузка шаблонов..</p>
			</div>
			<transition-group name="list" tag="div" class="row list-animation" v-else>
				<div class="col-12 list-animation__message" :key="'empty-' + templates.length" v-if="!templates.length">
					<p>Список шаблонов пуст..</p>
				</div>
				<TemplatesItem
					v-for="template in templates"
					:key="template.id"
					:template="template"
				/>
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
			templateSearchQuery: state => state.templates.searchQuery,
			filters: state => state.templates.filters
		}),
		...mapGetters({
			templates: 'templates/filteredTemplates'
		}),
		currentFilter: {
			get() {
				return this.$store.state.templates.currentFilter;
			},
			set(value) {
				let newRoute = null;

				if (this.$route.query.sort) {
					newRoute = this.$route.fullPath.replace(/([\?\&]sort=(-)?)[^\&]*/, '$1' + value);
				} else {
					newRoute = this.$route.fullPath + ['?', '&'][Object.keys(this.$route.query).length] + 'sort=' + value;
				}

				this.$router.push(newRoute);

				this.$store.commit('templates/setCurrentFilter', value);
			}
		}
	},
	methods: {
		...mapMutations({
			setTemplateSearchQuery: 'templates/setSearchQuery',
			toggleCurrentDirection: 'templates/toggleCurrentDirection',
			setCurrentDirection: 'templates/setCurrentDirection'
		}),
		...mapActions({
			loadTemplates: 'templates/loadTemplates'
		}),
		updateTemplateSearchQuery(event) {
			const value = event.target.value;
			let newRoute = null;

			if (this.$route.query.search) {
				newRoute = this.$route.fullPath.replace(/([\?\&]search=)[^\&]*/, '$1' + value);
			} else {
				newRoute = this.$route.fullPath + ['?', '&'][Object.keys(this.$route.query).length] + 'search=' + value;
			}

			this.$router.push(newRoute);

			this.setTemplateSearchQuery(value);
		},
		clearOptions() {
			this.setCurrentDirection(false);
			this.setTemplateSearchQuery('');
			this.currentFilter = 'byID';
			this.$router.push(this.$route.path);
		}
	},
	mounted() {
		this.loadTemplates();

		if (this.$route.query.sort) this.currentFilter = this.$route.query.sort.replace('-', '');
		if (this.$route.query.search) this.setTemplateSearchQuery(this.$route.query.search);
	}
}
</script>
