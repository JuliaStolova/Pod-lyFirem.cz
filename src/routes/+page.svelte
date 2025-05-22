<script lang="ts">
	import FirmCard from '$lib/components/FirmCard.svelte';
	let count = 0;
	let dropdownOpen = false;

	const firm = {
		name: 'Firma ABC',
		ownership: 'Výhradní vlastnictví',
		economicRating: 'A',
		specialization: 'IT',
		type: 's.r.o.',
		year: '2020',
		debt: 'Nemá žádné dluhy',
		activity: 'ukončila činnost',
		price: '1 000 000 Kč',
		taxes: 'Plátce DPH',
		ebtida: '200 000 Kč',
		sales: '1 000 000 Kč',
		revenue: '800 000 Kč',
		lost: '0 Kč',
		description: 'Popis firmy ABC.',
		location: 'Praha, ČR'
	};

	const firm1 = {
		name: 'Firma XYZ',
		ownership: 'Částečné vlastnictví',
		economicRating: 'B',
		specialization: 'Finance',
		type: 'a.s.',
		year: '2018',
		debt: 'Má dluhy',
		activity: 'aktivní',
		price: '2 000 000 Kč',
		taxes: 'Neplátce DPH',
		ebtida: ' ',
		sales: '2 500 000 Kč',
		revenue: ' ',
		lost: ' ',
		description: 'Popis firmy XYZ.',
		location: 'Brno, ČR'
	};
	const firm2 = {
		name: 'Firma DEF',
		ownership: 'Společné vlastnictví',
		economicRating: 'C',
		specialization: 'Stavebnictví',
		type: 's.r.o.',
		year: '2015',
		debt: 'Malé dluhy',
		activity: 'aktivní',
		price: '1 500 000 Kč',
		taxes: 'Plátce DPH',
		ebtida: '150 000 Kč',
		sales: '1 800 000 Kč',
		revenue: '',
		lost: '',
		description: 'Popis firmy DEF.',
		location: 'Ostrava, ČR'
	};

	const firm3 = {
		name: 'Firma GHI',
		ownership: 'Výhradní vlastnictví',
		economicRating: '?',
		specialization: 'Zdravotnictví',
		type: 'a.s.',
		year: '2012',
		debt: 'Nemá žádné dluhy',
		activity: 'aktivní',
		price: '3 000 000 Kč',
		taxes: 'Plátce DPH',
		ebtida: '400 000 Kč',
		sales: '3 500 000 Kč',
		revenue: '2 900 000 Kč',
		lost: '0 Kč',
		description: 'Popis firmy GHI.',
		location: 'Plzeň, ČR'
	};
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

	<div class="flex h-fit w-full flex-col justify-between bg-gray-100 p-6 sm:flex-row lg:p-10 gap-10 md:gap-0">
		<div class="flex w-full md:w-[40%] flex-col gap-5 p-5">
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

		<div class="flex h-fit w-full max-w-4xl flex-col items-center p-5 gap-5">
			<div class="flex w-full items-center justify-between gap-5">
				<p class="text-gray-500">Zobrazeno: {count} firem</p>
				<div class="relative">
					<button
						class="text-primary border-primary inline-flex items-center rounded border bg-white px-2 py-2 font-semibold"
						onclick={() => (dropdownOpen = !dropdownOpen)}
					>
						<span>Seřadit podle</span>
						<svg class="ml-2 h-4 w-4 fill-current" viewBox="0 0 20 20">
							<path
								d="M5.516 7.548a.75.75 0 0 1 1.06 0L10 10.97l3.424-3.422a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06z"
							/>
						</svg>
					</button>
					{#if dropdownOpen}
						<div class="absolute right-0 z-10 mt-2 w-48 rounded-lg border border-gray-200 bg-white">
							<ul>
								<li class="dropdown-option">Relevance</li>
								<li class="dropdown-option">Nejlevnější</li>
								<li class="dropdown-option">Nejdražší</li>
							</ul>
						</div>
					{/if}
				</div>
			</div>

			<div class="flex w-full flex-col md:grid md:grid-cols-2 items-center md:items-start justify-center gap-6">
				<FirmCard {firm} />
				<FirmCard firm={firm1} />
				<FirmCard firm={firm2} />
				<FirmCard firm={firm3} />
			</div>

            <div class="flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-primary bg-white p-4 text-primary font-bold">
                <p class="text-md">Zobrazit více nabídek</p>

            </div>
		</div>
	</div>
</div>
