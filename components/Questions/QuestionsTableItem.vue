<template>
	<tr>
		<td>
			<a :href="'/questions/' + question.id" target="_blank">{{ question.id }}</a>
		</td>
		<td>
			{{ question.title }}
		</td>
		<td>
			<v-chip>{{ question.category }}</v-chip>
		</td>
	</tr>
</template>
<script>

export default {
	name: "QuestionsTableItem",
	props: {
		question: {
			id: String,
			title: String,
			category: String
		}
	}
}

</script>
