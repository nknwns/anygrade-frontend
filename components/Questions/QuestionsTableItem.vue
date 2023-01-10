<template>
	<tr>
		<td>
			<a :href="'/questions/' + question.id" target="_blank">{{ question.id }}</a>
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
			id: String,
			title: String,
			category: String
		}
	}
}

</script>
