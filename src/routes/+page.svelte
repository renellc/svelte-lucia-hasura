<script lang="ts">
	import { queryStore, getContextClient } from '@urql/svelte';
	import { TEST_QUERY } from './page.gql';

	const users = queryStore({
		client: getContextClient(),
		query: TEST_QUERY
	});

	$: console.log($users.data);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#if $users.fetching}
	<p>Loading...</p>
{:else if $users.error}
	<p>Error!</p>
{/if}
