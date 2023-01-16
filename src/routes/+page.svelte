<script lang="ts">
	import Login from '../lib/Login.svelte';
</script>

<div>
	<h1>Welcome to SvelteKit</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

	<Login />

	<a href="/about">about</a>
</div>

<style lang="scss">
	h1 {
		font-weight: bold;
		text-align: center;
	}
	a {
		color: #075985;
	}
</style>
