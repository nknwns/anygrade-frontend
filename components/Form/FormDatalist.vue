<template>
	<datalist :id="'datalist-' + name">
		<option
			v-for="option in options"
			:key="option.id"
			:value="option.id"
		>
			{{ option.title }}
		</option>
	</datalist>
</template>
<script>
export default {
	name: "FormDatalist",
	props: {
		options: {
			type: Array,
			default: []
		},
		id: String,
		name: String
	}
}
</script>
