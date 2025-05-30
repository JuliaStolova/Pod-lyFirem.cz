<!-- src/routes/protected-route/+page.svelte -->
<script>
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
</script>

{#if $page.data.session}
	<h1>Welcome {$page.data.session.user?.name}!</h1>
	<button on:click={() => signOut()}>Logout</button>
{:else}
	<button on:click={() => signIn('google')}>Login with Google</button>
{/if}
