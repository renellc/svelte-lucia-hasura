<script lang="ts">
	import '../app.css';
	import { Client, setContextClient, cacheExchange, fetchExchange } from '@urql/svelte';
	import { PUBLIC_HASURA_GRAPHQL_ENDPOINT } from '$env/static/public';

	const client = new Client({
		url: PUBLIC_HASURA_GRAPHQL_ENDPOINT,
		exchanges: [cacheExchange, fetchExchange]
	});

	setContextClient(client);
</script>

<slot />
