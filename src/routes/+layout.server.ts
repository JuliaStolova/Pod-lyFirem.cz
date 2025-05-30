import { createServerClient } from '@supabase/ssr';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	const supabase = createServerClient(
		import.meta.env.VITE_PUBLIC_SUPABASE_URL,
		import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY,
		{ cookies: event.cookies }
	);

	const {
		data: { session }
	} = await supabase.auth.getSession();

	return { session };
};
