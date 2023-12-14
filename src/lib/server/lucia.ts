import { dev } from '$app/environment';
import { lucia } from 'lucia';
import { sveltekit } from 'lucia/middleware';
import { postgres as postgresAdapter } from '@lucia-auth/adapter-postgresql';
import postgres from 'postgres';
import { PG_DATABASE_URL } from '$env/static/private';

const conn = postgres(PG_DATABASE_URL);

export const auth = lucia({
	env: dev ? 'DEV' : 'PROD',
	middleware: sveltekit(),
	adapter: postgresAdapter(conn, {
		user: 'users',
		key: 'user_keys',
		session: 'user_sessions'
	}),
	getUserAttributes: (data) => ({
		username: data.username
	})
});

export type Auth = typeof auth;
