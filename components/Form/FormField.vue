<template>
	<div class="form__field">
		<label
			:for="id"
			class="form__label"
			:hidden="hidden"
		>
			{{ label }}
		</label>
		<slot></slot>
	</div>
</template>
<script>
export default {
	name: "FormField",
	props: {
		id: String,
		label: String,
		hidden: {
			type: Boolean,
			default: false
		}
	}
}
</script>
