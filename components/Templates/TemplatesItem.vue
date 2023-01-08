<template>
	<div class="col-sm-6 col-xxl-3">
		<div class="card template-item">
			<nuxt-link :to="'/templates/' + template.id">
				<div class="card__body">
					<div class="template-item__header">
						<span class="template-item__date">{{ created_at }}</span>
					</div>
					<div class="template-item__content">
						<h5 class="template-item__title">{{ template.title }}</h5>
						<p class="template-item__description">{{ template.description }}</p>
						<div class="template-item__counters">
							<span>Вопросы</span>
							<span>{{ template.questions.length }}/{{ questionsLimit }}</span>
						</div>
						<div class="template-item__progress progress">
							<div
								class="progress__body progress__body--success"
								:style="'width: ' + template.progress + '%'"
							></div>
						</div>
					</div>
				</div>
			</nuxt-link>
		</div>
	</div>
</template>
<script>

export default {
	name: "TemplatesItem",
	props: {
		template: {
			title: String,
			description: String,
			author: String,
			created_at: Date,
			questions: Array,
			progress: Number
		}
	},
	computed: {
		created_at() {
			return this.template.created_at.toLocaleDateString('ru');
		}
	},
	data() {
		return {
			questionsLimit: 50
		}
	}
}

</script>
