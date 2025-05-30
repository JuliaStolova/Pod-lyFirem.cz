<script lang="ts">
	import { signIn } from '@auth/sveltekit/client';
</script>

<div class="flex min-h-screen items-center justify-center bg-gray-50">
	<div class="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-md">
		<div class="text-center">
			<h1 class="text-3xl font-bold text-gray-900">Přihlášení</h1>
			<p class="mt-2 text-gray-600">Pro pokračování se přihlaste pomocí Google</p>
		</div>

		<button
			on:click={() => signIn('google')}
			class="flex w-full items-center justify-center gap-3 rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
		>
			<svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
				<path
					d="M12.545 10.239v3.821h5.445c-0.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866 0.549 3.921 1.453l2.814-2.814c-1.784-1.664-4.158-2.685-6.735-2.685-5.522 0-10 4.477-10 10s4.478 10 10 10c8.396 0 10-7.496 10-10 0-0.671-0.069-1.325-0.189-1.955h-9.811z"
				/>
			</svg>
			Přihlásit se přes Google
		</button>

		<div class="text-center text-sm text-gray-500">
			<p>Pokračováním souhlasíte s našimi</p>
			<a href="#" class="font-medium text-blue-600 hover:text-blue-500"> Podmínkami použití </a>
		</div>
	</div>
</div>
