<script lang="ts">
	import Login from '$lib/Login.svelte';
	import 'virtual:windi.css';
</script>

<header>
	<nav class="bg-blue-400 flex justify-between p-3">
		<p class="font-bold text-left text-lg self-center">Svelte-boi</p>
		<div class="text-center self-center">
			<a href="/about" class="navLink">About</a>
			<a href="/signup" class="navLink">Signup</a>
		</div>
		<!-- Disable for now -->
		<!-- <div class="text-right self-center">
			<Login />
		</div> -->
	</nav>
</header>

<slot />