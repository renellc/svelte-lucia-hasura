# SvelteKit + Lucia Auth + Hasura GraphQL

A demo [SvelteKit](https://kit.svelte.dev/) application backed by [Hasura](https://hasura.io/) that uses [Lucia](https://lucia-auth.com/) for authentication.

## Preface

The implementation done here is not ready for production. It's simply demonstrating how one can get Lucia and Hasura to play
well together, but there may be (and probably is) some security concerns that should be addressed when applying this method
to your own project.

## The Problem

More often than not, a user would need to be authenticated within your platform to make any requests to your
backend and Hasura. Hasura's most popular method of authenticating requests is done via JWT, whereas
Lucia Auth uses sessions and cookies, and this is the problem.

## The Solution

As documented on their site, you can either authenticate requests via [JWT](https://hasura.io/docs/latest/auth/authentication/jwt/)
or via an [authentication webhook](https://hasura.io/docs/latest/auth/authentication/webhook/). In order to
authenticate Hasura with Lucia's method of authentication, we will be taking advantage of webhook
authentication.

From a high level overview, this is the solution:

1. Create a server route in our SvelteKit app that simply validates a user's session and returns either a
   200 if the authentication was successful, and a 401 if not (this is implemented in `src/routes/api/auth/graphql-webhook/+server.ts`).

- It is required you return the required Hasura session variables after you successfully authenticate the request. It is required
  to have `X-Hasura-Role` which can be set to any role you want. This role is used for permissions within Hasura's console.

2. Add a proxy between Hasura and our application so that Hasura can receive any required headers or cookies to pass to the
   server route we created in the previous step.

- On the front end, we are using [urql](https://formidable.com/open-source/urql/docs/) as our GraphQL client. We set the GraphQL
  endpoint to `http://localhost:5173/v1/graphql`, which will then forward the request to Hasura's GraphQL
  endpoint, which by default is at `http://localhost:8080/v1/graphql`.
- The proxy is added in `vite.config.ts`

3. Within the Hasura console, add the proper permissions to your table so that users may only retrieve things that fall under the
   role they are assigned (follow [this](https://hasura.io/docs/latest/auth/authorization/quickstart/) guide for more details).
4. Login to your application as some user and make a request to your Hasura endpoint using your front end GraphQL client of choice (
   again, I'm using urql in this project
   ). Observe that requests are returning the data you expect.
5. Logout of your application and make a request. Observe that you'll get an error saying that the current user is not authenticated.
