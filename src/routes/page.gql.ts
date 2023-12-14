import { gql } from '$lib/generated/gql';

export const TEST_QUERY = gql(/* GraphQL */ `
	query UsersQuery {
		users {
			username
		}
	}
`);
