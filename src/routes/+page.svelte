<script lang="ts">
	import { queryStore, getContextClient } from '@urql/svelte';
	import { TEST_QUERY } from './page.gql';

	import type { PageData } from './$types';

	export let data: PageData;

	const users = queryStore({
		client: getContextClient(),
		query: TEST_QUERY
	});
</script>

<div class="flex h-full flex-col items-center justify-center">
	<h1 class="h1 mb-4">Welcome to SvelteKit</h1>
	<p>
		Visit <a class="anchor" href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
	</p>

	{#if $users.fetching}
		<p>Loading...</p>
	{:else if $users.error}
		<p>Error!</p>
	{/if}

	<form class="mt-4" method="POST" action="?/logout">
		<button type="submit" class="variant-filled btn">Logout</button>
	</form>
</div>
