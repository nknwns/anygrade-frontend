<template>
	<section class="template section">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="section__header">
						<h4 class="section__title">Список шаблонов</h4>
						<router-link to="/templates/add" class="button button--success">+ Создать шаблон</router-link>
					</div>
				</div>
			</div>
			<div class="row">
				<TemplatesItem
					v-for="(template, i) in templates"
					:key="i"
					:template="template"
				/>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'TemplatePage',
	data() {
		return {
			templates: [
				{
					id: 0,
					title: 'Заголовок',
					description: 'Описание',
					questions: [],
					progress: 40,
					created_at: new Date()
				}
			]
		}
	}
}
</script>
