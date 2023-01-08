<template>
	<tr>
		<td>
			<a :href="question.url" target="_blank">#{{ question.id }}</a>
		</td>
		<td>
			{{ question.title }}
		</td>
		<td>
			<span class="badge badge--secondary">{{ question.category }}</span>
		</td>
	</tr>
</template>
<script>

export default {
	name: "QuestionsTableItem",
	props: {
		question: {
			id: Number,
			url: String,
			title: String,
			category: String
		}
	}
}

</script>
