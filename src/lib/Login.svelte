<script lang="ts">
	import { currentUser, pb } from './pocketbase';

	let username: string;
	let password: string;

	async function login() {
		await pb.collection('users').authWithPassword(username, password);
	}

	async function signUp() {
		try {
			const data = {
				username,
				password,
				passwordConfirm: password,
				name: 'hi mom!'
			};
			const createdUser = await pb.collection('users').create(data);
			await login();
		} catch (err) {
			// handle error
		}
	}

	function signOut() {
		pb.authStore.clear();
	}
</script>

<div class="login">
	{#if $currentUser}
		<p>Signed in as {$currentUser.username}</p>
		<button on:click={signOut}>Signout</button>
	{:else}
		<form on:submit|preventDefault>
			<input placeholder="Username" type="text" bind:value={username} />

			<input placeholder="Password" type="password" bind:value={password} />

			<button on:click={signUp}>Sign Up</button>
			<button on:click={login}>Login</button>
		</form>
	{/if}
</div>

<style lang="scss">
	.login {
		display: flex;
		margin-top: 0px;
	}
</style>
