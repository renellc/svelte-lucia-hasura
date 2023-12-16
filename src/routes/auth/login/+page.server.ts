import type { Actions } from './$types';
import { z } from 'zod';
import { auth } from '$lib/server/lucia';
import { LuciaError } from 'lucia';
import { fail, redirect } from '@sveltejs/kit';

const loginSchema = z.object({
	username: z.string(),
	password: z.string()
});

export const actions = {
	default: async ({ locals, request }) => {
		const formDataRaw = await request.formData();
		const formDataParseRes = loginSchema.safeParse(Object.fromEntries(formDataRaw.entries()));
		if (!formDataParseRes.success) {
			return fail(422, { message: 'Invalid login request ' });
		}

		const form = formDataParseRes.data;

		try {
			const key = await auth.useKey('username', form.username, form.password);

			const session = await auth.createSession({
				userId: key.userId,
				attributes: {}
			});

			locals.auth.setSession(session);
		} catch (err) {
			if (
				err instanceof LuciaError &&
				(err.message === 'AUTH_INVALID_KEY_ID' || err.message === 'AUTH_INVALID_PASSWORD')
			) {
				return fail(422, { message: 'Incorrect email or password ' });
			}

			return fail(500, { message: 'Unknown error occured ' });
		}

		throw redirect(302, '/');
	}
} satisfies Actions;
