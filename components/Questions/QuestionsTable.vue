<template>
	<table class="table">
		<thead class="table__head">
		<tr>
			<th>ID</th>
			<th>Вопрос</th>
			<th>Категория</th>
		</tr>
		</thead>
		<tbody>
		<QuestionsTableItem
			v-for="question in questions"
			:key="question.id"
			:question="question"
		/>
		</tbody>
	</table>
</template>
<script>

export default {
	name: "QuestionsTable",
	props: {
		questions: Array
	}
}

</script>
