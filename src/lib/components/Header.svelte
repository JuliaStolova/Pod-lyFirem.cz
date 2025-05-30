<script lang="ts">
	let isMobileMenuOpen = false;
	import Icon from '@iconify/svelte';
</script>

<nav class="sticky top-0 z-50 flex items-center justify-between bg-white p-4">
	<div class="flex max-w-56">
		<img src="/logo.png" alt="PodílyFirem.cz" />
	</div>
	<div class="display hidden items-center gap-8 text-gray-500 lg:flex">
		<a href="#">Nabídky firem</a>
		<a href="#">Jak to funguje</a>
		<a href="#">Blog</a>
	</div>
	<div class="display hidden items-center gap-4 text-gray-500 lg:flex">
		<a href="#">Přidat inzerát</a>
		<button class="bg-primary cursor-pointer rounded px-4 py-2 text-white"> Přihlásit se </button>
	</div>
	<div class="relative lg:hidden">
		<button class="pr-2.5 pl-2.5" on:click={() => (isMobileMenuOpen = !isMobileMenuOpen)}>
			<Icon icon="ic:round-menu" class="h-6 w-6 text-gray-500" />
		</button>
		{#if isMobileMenuOpen}
			<div class="absolute top-16 right-0 rounded-lg bg-white p-4 shadow-lg">
				<div class="flex w-40 flex-col gap-4">
					<a href="#" class="text-gray-500">Nabídky firem</a>
					<a href="#" class="text-gray-500">Jak to funguje</a>
					<a href="#" class="text-gray-500">Blog</a>
					<a href="#" class="text-gray-500">Přidat inzerát</a>
					<button class="bg-primary cursor-pointer rounded px-4 py-2 text-white">
						<a href="auth/login">Přihlásit se</a>
					</button>
				</div>
			</div>
		{/if}
	</div>
</nav>
