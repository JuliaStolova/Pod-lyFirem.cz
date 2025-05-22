<script lang="ts">
	import { goto } from '$app/navigation';
	import FirmCard from '$lib/components/FirmCard.svelte';
	import SortControls from '$lib/components/SortControls.svelte';
	import { firms } from '$lib/data/firms';

	let sortedFirms = [...firms];
	let currentSort = 'relevance';
	let count = firms.length;
</script>

<div class="flex flex-col items-center justify-center">
	<div
		class="bg-primary flex h-fit w-full flex-col items-center justify-between gap-10 pt-14 pb-14 text-white md:gap-20"
	>
		<div
			class="flex w-full max-w-80 flex-col items-center justify-center text-center sm:max-w-xl md:max-w-2xl"
		>
			<h1 class="text-4xl font-bold md:text-5xl">Najděte ideální příležitost</h1>
			<p class="mt-4 leading-8 md:text-xl md:leading-10">
				Hledáte podíl ve firmě, který odpovídá vaším investičním cílům? Podívejte se na aktuální
				nabídky společností na prodej a objevte nové možnosti pro vaše podnikání.
			</p>
		</div>
		<div
			class="mx-auto flex h-fit w-full max-w-80 items-center justify-between gap-4 bg-white p-2 px-4 sm:max-w-120 lg:max-w-3xl lg:p-4"
		>
			<input
				type="text"
				class="focus:ring-primary h-10 w-full rounded border border-none px-4 text-black focus:ring-2 focus:outline-none"
				placeholder="Vyhledat..."
			/>
			<button class="bg-primary cursor-pointer rounded px-4 py-2 text-white"> Vyhledat </button>
		</div>
	</div>

	<div
		class="flex h-fit w-full flex-col justify-between gap-10 bg-gray-100 p-6 sm:flex-row md:gap-0 lg:p-10"
	>
		<div class="flex w-full flex-col gap-5 p-5 md:w-[40%]">
			<h1 class="text-primary font-bold uppercase">Filtrovat nabídky</h1>
			<div>
				<div class="flex cursor-pointer items-center justify-between font-semibold">
					<h2>Typ podílu</h2>
					<svg class="ml-2 h-4 w-4 fill-current" viewBox="0 0 20 20">
						<path
							d="M5.516 7.548a.75.75 0 0 1 1.06 0L10 10.97l3.424-3.422a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06z"
						/>
					</svg>
				</div>
				<hr class="my-4 border-t border-gray-400" />
			</div>
			<div>
				<div class="flex cursor-pointer items-center justify-between font-semibold">
					<h2>Typ firmy</h2>
					<svg class="ml-2 h-4 w-4 fill-current" viewBox="0 0 20 20">
						<path
							d="M5.516 7.548a.75.75 0 0 1 1.06 0L10 10.97l3.424-3.422a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06z"
						/>
					</svg>
				</div>
				<hr class="my-4 border-t border-gray-400" />
			</div>
			<div>
				<div class="flex cursor-pointer items-center justify-between font-semibold">
					<h2>Specializace</h2>
					<svg class="ml-2 h-4 w-4 fill-current" viewBox="0 0 20 20">
						<path
							d="M5.516 7.548a.75.75 0 0 1 1.06 0L10 10.97l3.424-3.422a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06z"
						/>
					</svg>
				</div>
			</div>
		</div>

		<div class="flex h-fit w-full max-w-4xl flex-col items-center gap-5 p-5">
			<div class="flex w-full items-center justify-between gap-5">
				{#if count === 1}
					<p class="text-gray-500">Zobrazeno: {count} firma</p>
				{:else if count <= 4}
					<p class="text-gray-500">Zobrazeno: {count} firmy</p>
				{:else if count > 4}
					<p class="text-gray-500">Zobrazeno: {count} firem</p>
				{:else}
					<p class="text-gray-500">Nebyly nalezeny žádné firmy</p>
				{/if}

				<SortControls {firms} bind:sortedFirms />
			</div>

			<div
				class="flex w-full flex-col items-center justify-center gap-6 md:grid md:grid-cols-2 md:items-start"
			>
				{#each sortedFirms as firm}
					<FirmCard {firm} />
				{/each}
			</div>

			<div
				class="border-primary text-primary flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-dashed bg-white p-4 font-bold"
			>
				<a class="text-md" href="/Developing">Zobrazit více nabídek</a>
			</div>
		</div>
	</div>
</div>
