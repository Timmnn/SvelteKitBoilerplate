<script lang="ts">
	import SignIn from 'clerk-sveltekit/client/SignIn.svelte'
</script>

<div class="flex flex-col gap-3 items-center justify-center h-full">
	<h1 class="text-3xl font-bold text-center">
		Sign in to continue
	</h1>
	<SignIn redirectUrl="/admin" />
</div>