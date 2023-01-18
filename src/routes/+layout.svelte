<script lang="ts">
	import Login from '../lib/Login.svelte';
	import 'virtual:windi.css'
</script>

<header>
	<nav class="bg-blue-300 flex justify-between">
		<p class="font-bold text-left text-lg">Svelte-boi</p>
		<div class="text-right">
			<Login />
		</div>
	</nav>
</header>

<slot />
