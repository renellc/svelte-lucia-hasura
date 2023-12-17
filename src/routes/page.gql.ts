import { gql } from '$lib/generated/gql';

export const TEST_QUERY = gql(/* GraphQL */ `
	query MyQuery {
		users {
			id
			username
		}
	}
`);
