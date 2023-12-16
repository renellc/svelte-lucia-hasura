<script lang="ts">
	import type { ActionData } from './$types';
	export let form: ActionData;
</script>

<div class="flex h-full flex-col items-center justify-center">
	<form method="POST" class="flex flex-col gap-4">
		<label class="label">
			<span>Username</span>
			<input name="username" class="input" type="text" placeholder="Enter username..." required />
		</label>

		<label class="label">
			<span>Password</span>
			<input
				name="password"
				class="input"
				type="password"
				placeholder="Enter password..."
				required
			/>
		</label>

		<button type="submit" class="variant-filled btn">Login</button>
		{#if form?.message && form.message !== ''}
			<span class="text-primary-500">{form.message}</span>
		{/if}
	</form>
</div>
