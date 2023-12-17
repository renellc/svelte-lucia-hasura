import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ locals }) => {
	try {
		const session = await locals.auth.validate();
		if (!session) {
			return new Response('Not authenticated', { status: 401 });
		}

		console.log(session.user.userId);

		const hasuraSession = {
			'X-Hasura-Role': 'user',
			'X-Hasura-User-Id': session.user.userId
		};

		return json(hasuraSession, { status: 200 });
	} catch (err) {
		return new Response('Not authenticated', { status: 401 });
	}
};
