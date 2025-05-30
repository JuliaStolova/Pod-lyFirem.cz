<!-- src/lib/components/SortComponent.svelte -->
<script lang="ts">
	import type { Firm } from '$lib/data/firms';

	export let firms: Firm[];
	export let sortedFirms: Firm[];

	type SortMethod = 'relevance' | 'price-asc' | 'price-desc' | 'year-asc' | 'year-desc';
	let currentSort: SortMethod = 'relevance';
	let isOpen = false;

	const sortOptions = [
		{ id: 'relevance', label: 'Relevance' },
		{ id: 'price-asc', label: 'Nejlevnější' },
		{ id: 'price-desc', label: 'Nejdražší' },
		{ id: 'year-asc', label: 'Nejstarší' },
		{ id: 'year-desc', label: 'Nejnovější' }
	];

	$: {
		let sorted = [...firms];
		switch (currentSort) {
			case 'price-asc':
				sorted.sort((a, b) => a.price - b.price);
				break;
			case 'price-desc':
				sorted.sort((a, b) => b.price - a.price);
				break;
			case 'year-asc':
				sorted.sort((a, b) => parseInt(a.year) - parseInt(b.year));
				break;
			case 'year-desc':
				sorted.sort((a, b) => parseInt(b.year) - parseInt(a.year));
				break;
			default:
				// relevance - keep original order
				break;
		}
		sortedFirms = sorted;
	}
</script>

<div class="relative">
	<button
		class="text-primary border-primary inline-flex items-center rounded border bg-white px-3 py-2 font-semibold"
		on:click={() => (isOpen = !isOpen)}
	>
		<span>
			{sortOptions.find((opt) => opt.id === currentSort)?.label}
		</span>
		<svg
			class={`ml-2 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
			fill="currentColor"
			viewBox="0 0 20 20"
		>
			<path
				d="M5.516 7.548a.75.75 0 0 1 1.06 0L10 10.97l3.424-3.422a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06z"
			/>
		</svg>
	</button>

	{#if isOpen}
		<div
			class="absolute right-0 z-10 mt-2 w-48 rounded-lg border border-gray-200 bg-white shadow-lg"
		>
			<ul>
				{#each sortOptions as option}
					<li>
						<button
							type="button"
							class="w-full cursor-pointer px-4 py-2 text-left hover:bg-gray-100 focus:outline-none"
							class:font-bold={option.id === currentSort}
							on:click={() => {
								currentSort = option.id as SortMethod;
								isOpen = false;
							}}
						>
							{option.label}
						</button>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>
