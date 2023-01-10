<template>
	<textarea
		:required="required"
		inputmode="text"
		:id="id"
		:name="name"
		class="form__input form__input--textarea"
		:value="value"
		@input="$emit('update', $event.target.value)"
	></textarea>
</template>
<script>
export default {
	name: "FormTextarea",
	props: {
		required: {
			type: Boolean,
			default: false
		},
		type: {
			type: String,
			default: 'text'
		},
		id: String,
		name: String,
		value: [String, Number]
	}
}
</script>
