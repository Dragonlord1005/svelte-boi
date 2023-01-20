<script lang="ts">
	import { currentUser, pb } from './pocketbase';

	let username: string;
	let password: string;

	async function login() {
		try { await pb.collection('users').authWithPassword(username, password).then((result) =>
			console.log('Yay it works', result)
		);
		} catch (err) {

		}
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

<div>
	{#if $currentUser}
		<p>Signed in as {$currentUser.username}</p>
		<button on:click={signOut} class="btn">Signout</button>
	{:else}
		<form on:submit|preventDefault>
			<input placeholder="Username" type="text" bind:value={username} />

			<input placeholder="Password" type="password" bind:value={password} />

			<button on:click={signUp} class="btn">Sign Up</button>
			<button on:click={login}>Login</button>
		</form>
	{/if}
</div>
