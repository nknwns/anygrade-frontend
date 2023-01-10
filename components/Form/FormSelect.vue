<template>
	<select
		class="form__input form__input--select"
		name="question-category"
		id="question-category"
		:value="value"
		@input="$emit('update', $event.target.value)"
	>
		<option disabled selected value="">Выберите вариант из списка</option>
		<option
			v-for="option in options"
			:key="option.id"
			:value="option.id"
		>
			{{ option.title }}
		</option>
	</select>
</template>
<script>
export default {
	name: "FormTextarea",
	props: {
		options: {
			type: Array,
			required: true
		},
		id: String,
		name: String,
		value: [String, Number]
	}
}
</script>
