<script lang="ts">
    export let firm: {
        name: string;
        ownership: string;
        economicRating: string;
        specialization: string;
        type: string;
        year: string;
        debt: string;
        activity: string;
        price: string;
        taxes: string;
        ebtida: string;
        sales: string;
        revenue: string;
        lost: string;
        description: string;
        location: string;
    };

    import Icon from '@iconify/svelte';

    // Define type for rating styles
    type RatingStyle = {
        bg: string;
        text: string;
    };

    // Lookup object for economicRating styles
    const ratingStyles: Record<string, RatingStyle> = {
        'A+': { bg: 'bg-green-400', text: 'text-green-700' },
        'A': { bg: 'bg-green-300', text: 'text-green-600' },
        'B': { bg: 'bg-blue-300', text: 'text-blue-500' },
        'C': { bg: 'bg-yellow-200', text: 'text-yellow-500' },
        'D': { bg: 'bg-orange-300', text: 'text-orange-500' },
        'E': { bg: 'bg-red-400', text: 'text-red-600' },
        'F': { bg: 'bg-red-500', text: 'text-red-700' },
    };

    // Get the current style based on economicRating
    $: ratingClass = ratingStyles[firm.economicRating] || { bg: 'bg-gray-300', text: 'text-gray-500' };
</script>

<div class="flex h-fit w-xs sm:w-full md:w-sm lg:w-full  min-w-xs cursor-pointer flex-col gap-5 bg-white p-7">
    <div class="flex items-center justify-start gap-7">
        <!-- Rating circle with dynamic classes -->
        <div class="flex h-12 w-12 items-center justify-center rounded-full text-center text-xl font-bold {ratingClass.bg} {ratingClass.text}">
            {firm.economicRating}
        </div>

        <div class="text-md flex h-fit flex-col items-start justify-center gap-1">
            <h1 class="font-semibold">{firm.ownership}</h1>
            <p>Ekonomický rating: {firm.economicRating}</p>
            <div class="flex justify-start gap-1.5">
                <span class="tag-small border-blue-300 bg-blue-200 text-blue-950">{firm.type}</span>
                <span class="tag-small border-amber-300 bg-amber-200 text-amber-950">{firm.year}</span>
            </div>
        </div>
    </div>

    <div class="flex flex-col items-start justify-center gap-1">
        <h1 class="text-lg font-semibold">{firm.name}</h1>
        <p class="text-primary text-sm">{firm.specialization}</p>
        <p class="text-sm">{firm.description}</p>
        <p class="text-primary text-sm">Tržby: {firm.sales}</p>
        {#if firm.ebtida?.trim()}
            <p class="text-primary text-sm">EBTIDA: {firm.ebtida}</p>
        {/if}
        {#if firm.revenue?.trim()}
            <p class="text-primary text-sm">Zisk: {firm.revenue}</p>
        {/if}
        {#if firm.lost?.trim()}
            <p class="text-primary text-sm">Ztráta: {firm.lost}</p>
        {/if}
    </div>

    <div class="flex items-center justify-between gap-2.5 text-sm font-semibold text-amber-900">
        <span class="w-full tag border-amber-300 bg-amber-100">{firm.taxes}</span>
        <span class="w-full tag border-amber-300 bg-amber-100">{firm.debt}</span>
        <span class="w-full tag border-amber-300 bg-amber-100">{firm.activity}</span>
    </div>

    <div class="flex items-center justify-start gap-2.5">
        <div class="flex items-center gap-1">
            <Icon icon="ic:baseline-location-on" class="h-4 w-4 text-gray-500" />
            <p class="text-sm text-gray-500">{firm.location}</p>
        </div>
        <div class="flex items-center gap-1">
            <Icon icon="mdi:coin-outline" class="h-4 w-4 text-gray-500" />
            <p class="text-sm text-gray-500">{firm.price}</p>
        </div>
    </div>
</div>