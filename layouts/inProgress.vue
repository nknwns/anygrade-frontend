<template>
	<div>
		<TheHeader />
		<main class="in-progress">
			<img src="@/assets/images/in-progress.png" alt="">
			<nuxt-link to="/" class="in-progress__button button">На главную</nuxt-link>
			<Nuxt />
		</main>
		<TheFooter />
	</div>
</template>

<script>
export default {
	name: "DefaultLayout"
}
</script>
