<template>
	<header class="header">
		<div class="container">
			<div class="header__wrapper">
				<div class="header__left">
					<nuxt-link to="/" class="header__logo">Anygrade</nuxt-link>
				</div>
				<div class="header__right">
					<template v-if="user.isAuthenticated">
						<nuxt-link to="/account" class="header__button button button--success">{{ user.name }}</nuxt-link>
						<button @click.prevent="logoutUser" class="header__button button button--danger">Выйти</button>
					</template>
					<template v-else>
						<button @click.prevent="loginUser" class="header__button button">Войти</button>
						<nuxt-link to="/registration" class="header__button button button--danger">Регистрация</nuxt-link>
					</template>
				</div>
			</div>
		</div>
		<div class="app-menu">
			<div class="container">
				<div class="app-menu__wrapper">
					<nav class="app-menu__nav">
						<ul class="app-menu__menu">
							<li
								v-for="(item, i) in menu"
								:key="i"
								class="app-menu__item"
							>
								<nuxt-link :to="item.url" class="app-menu__link">{{ item.title }}</nuxt-link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</header>
</template>

<script>

import {mapActions, mapState} from "vuex";

export default {
	name: "TheHeader",
	data() {
		return {
			menu: [
				{
					title: 'Вопросы',
					url: '/questions'
				},
				{
					title: 'Шаблоны',
					url: '/templates'
				},
				{
					title: 'Опросы',
					url: '/reviews'
				},
				{
					title: 'Категории',
					url: '/categories'
				}
			]
		}
	},
	computed: {
		...mapState({
			user: state => state.auth.user
		})
	},
	methods: {
		...mapActions({
			logout: 'auth/logout',
			login: 'auth/login'
		}),
		loginUser() {
			this.login({
				login: 'andrejshaev',
				password: 'andrejshaev'
			});
		},
		logoutUser() {
			this.logout();
			this.$router.push('/')
		}
	}
}
</script>
