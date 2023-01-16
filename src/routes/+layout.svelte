<script lang="ts">
	import Login from '../lib/Login.svelte';
</script>

<header>
	<nav>
		<p id="brand-name">Svelte-boi</p>
		<div id="nav-right">
			<Login />
		</div>
	</nav>
</header>

<slot />

<style lang="scss">
	header {
		height: 100%;
	}
	nav {
		background-color: aqua;
		height: 100%;
		margin-top: 0px;
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
	}
	#brand-name {
		font-weight: bold;
		text-align: left;
		font-size: 1.125rem; /* 18px */
		line-height: 1.75rem; /* 28px */
	}
	#nav-right {
		text-align: right;
	}
</style>
