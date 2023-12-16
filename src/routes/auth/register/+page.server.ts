import { z } from 'zod';
import type { Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { auth } from '$lib/server/lucia';
import { v4 as UUID } from 'uuid';

const registerSchema = z.object({
	username: z.string(),
	password: z.string()
});

export const actions = {
	default: async ({ locals, request }) => {
		const raw = await request.formData();
		const parsed = registerSchema.safeParse(Object.fromEntries(raw.entries()));
		if (!parsed.success) {
			console.error(JSON.stringify(parsed.error, null, 2));
			return fail(422, { message: 'Invalid body for registering user ' });
		}

		try {
			const { username, password } = parsed.data;

			const userId = UUID();
			const user = await auth.createUser({
				userId,
				key: {
					providerId: 'username',
					providerUserId: username,
					password
				},
				attributes: { username }
			});

			const session = await auth.createSession({
				userId: userId,
				attributes: {}
			});

			locals.auth.setSession(session);
		} catch (err) {
			console.error(err);
			return fail(500, { message: 'Could not create user' });
		}

		throw redirect(302, '/');
	}
} satisfies Actions;
