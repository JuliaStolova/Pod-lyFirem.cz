<script lang="ts">
    import FirmCard from "$lib/components/FirmCard.svelte";
    let count = 0;
    let dropdownOpen = false;

    const firm = {
        name: "Firma ABC",
        ownership: "100%",
        economicRating: "A+",
        specialization: "IT",
        type: "S.R.O.",
        year: "2020",
        debt: "0 Kč",
        price: "1 000 000 Kč",
        taxes: "Plátce DPH",
        ebtida: "200 000 Kč",
        sales: "1 000 000 Kč",
        revenue: "800 000 Kč",
        lost: "0 Kč",
        description: "Popis firmy ABC.",
        location: "Praha, ČR"
    };
</script>


<div class="flex flex-col items-center justify-center">
	<div
		class="flex h-fit w-full flex-col items-center justify-between md:gap-20 bg-primary pt-14 pb-14 text-white gap-10"
	>
		<div class="flex w-full md:max-w-2xl sm:max-w-xl max-w-80 flex-col items-center justify-center text-center">
			<h1 class="md:text-5xl text-4xl font-bold">Najděte ideální příležitost</h1>
			<p class="mt-4 md:text-xl md:leading-10 leading-8">
				Hledáte podíl ve firmě, který odpovídá vaším investičním cílům? Podívejte se na aktuální
				nabídky společností na prodej a objevte nové možnosti pro vaše podnikání.
			</p>
		</div>
		<div class="flex h-fit w-full lg:max-w-3xl sm:max-w-120 max-w-80 px-4 mx-auto items-center justify-between gap-4 bg-white lg:p-4 p-2">
			<input
				type="text"
				class="h-10 w-full rounded border border-none px-4 text-black focus:ring-2 focus:ring-primary focus:outline-none"
				placeholder="Vyhledat..."
			/>
			<button class="cursor-pointer rounded bg-primary px-4 py-2 text-white"> Vyhledat </button>
		</div>
	</div>

	<div class="flex flex-col sm:flex-row justify-between bg-gray-100 w-full h-fit p-6 lg:p-16">
		<div class="flex flex-col gap-5 p-5 w-full">
            <h1 class="text-primary uppercase font-bold">Filtrovat nabídky</h1>
            <div>
                <div class="flex justify-between items-center font-semibold cursor-pointer">
                    <h2>Typ podílu</h2>
                    <svg class="ml-2 w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M5.516 7.548a.75.75 0 0 1 1.06 0L10 10.97l3.424-3.422a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06z"/>
                        </svg>
                </div>
                <hr class="border-t border-gray-400 my-4" />
            </div>
            <div>
                <div class="flex justify-between items-center font-semibold cursor-pointer">
                    <h2>Typ firmy</h2>
                    <svg class="ml-2 w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M5.516 7.548a.75.75 0 0 1 1.06 0L10 10.97l3.424-3.422a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06z"/>
                        </svg>
                </div>
                <hr class="border-t border-gray-400 my-4" />
            </div>
            <div>
                <div class="flex justify-between items-center font-semibold cursor-pointer">
                    <h2>Specializace</h2>
                    <svg class="ml-2 w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M5.516 7.548a.75.75 0 0 1 1.06 0L10 10.97l3.424-3.422a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06z"/>
                        </svg>
                </div>
            </div>
        </div>

        <div class="flex flex-col items-center w-full h-fit p-5">

            <div class="flex justify-between gap-10 w-full items-center">
                <p class="text-gray-500">Zobrazeno: {count} firem</p>
                <div class="relative">
                    <button class="bg-white text-primary font-semibold py-2 px-4 border border-primary rounded inline-flex items-center" onclick={() => dropdownOpen = !dropdownOpen}>
                        <span>Seřadit podle</span>
                        <svg class="ml-2 w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M5.516 7.548a.75.75 0 0 1 1.06 0L10 10.97l3.424-3.422a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06z"/>
                        </svg>
                    </button>
                    {#if dropdownOpen}
                        <div class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg z-10">
                            <ul>
                                <li class="dropdown-option">Relevance</li>
                                <li class="dropdown-option">Nejlevnější</li>
                                <li class="dropdown-option">Nejdražší</li>
                            </ul>
                        </div>
                    {/if}
                </div>
            </div>

            <div>
                <FirmCard firm={firm} />
            </div>
        </div>

	</div>
</div>
