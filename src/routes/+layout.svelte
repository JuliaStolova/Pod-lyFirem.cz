<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import { onMount } from 'svelte';
	import { supabase } from '$lib/supabase';
	import { invalidateAll } from '$app/navigation';

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange(() => {
			invalidateAll();
		});
		return () => {
			subscription?.unsubscribe();
		};
	});
</script>

<Header />

<slot />
