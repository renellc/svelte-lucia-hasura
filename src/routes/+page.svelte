<script lang="ts">
	import { queryStore, getContextClient } from '@urql/svelte';
	import { TEST_QUERY } from './page.gql';

	const users = queryStore({
		client: getContextClient(),
		query: TEST_QUERY
	});

	$: console.log($users.data);
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
</div>
