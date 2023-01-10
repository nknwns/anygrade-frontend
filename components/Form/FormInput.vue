<template>
	<input
		:required="required"
		inputmode="text"
		:type="type"
		:id="id"
		:name="name"
		:list="list ? 'datalist-' + name : null"
		:value="value"
		@input="$emit('update', $event.target.value)"
		class="form__input"
	>
</template>
<script>
export default {
	name: "FormInput",
	props: {
		required: {
			type: Boolean,
			default: false
		},
		type: {
			type: String,
			default: 'text'
		},
		list: {
			type: Boolean,
			default: false
		},
		id: String,
		name: String,
		value: [String, Number]
	}
}
</script>
