<template>
		<button
			@click.prevent="changeSortingDirection"
			class="button button--icon"
			:class="{'button--success': !isActive, 'button--danger': isActive}"
		>
			<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M6.293 4.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L8 7.414V19a1 1 0 1 1-2 0V7.414L3.707 9.707a1 1 0 0 1-1.414-1.414l4-4zM16 16.586V5a1 1 0 1 1 2 0v11.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L16 16.586z"
					  fill="currentColor"/>
			</svg>
		</button>
</template>
<script>
export default {
	name: "ButtonSorting",
	data() {
		return {
			isActive: false
		}
	},
	methods: {
		changeSortingDirection() {
			const searchValue = /([\?\&])(sort=)(\-?)/;
			const replaceValue = 'sort=' + (this.isActive ? '' : '-');

			let newRoute = null;

			if (this.$route.query.sort) {
				newRoute = this.$route.fullPath.replace(searchValue, '$1' + replaceValue + '');
			} else {
				newRoute = this.$route.fullPath + ['?', '&'][Object.keys(this.$route.query).length] + replaceValue + 'byID';
			}

			this.$router.push(newRoute);

			this.isActive = !this.isActive;
			this.$emit('change');
		}
	},
	mounted() {
		if (this.$route.query.sort?.includes('-')) this.isActive = true;
	}
}
</script>
