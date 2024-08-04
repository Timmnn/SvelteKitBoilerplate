<script lang="ts">
   import useClerk from '$lib/useAuth';
   import { onMount } from 'svelte';
  import type { PageData } from './$types';
  import {PUBLIC_CLERK_PUBLIC_KEY} from "$env/static/public";

  export let data: PageData;

  console.log(PUBLIC_CLERK_PUBLIC_KEY);

  onMount(async () => {
    const {clerk, mountSignInOrUserButton} = await useClerk(PUBLIC_CLERK_PUBLIC_KEY);

    mountSignInOrUserButton(document.getElementById('login-form') as HTMLDivElement);
    
  });
</script>

<main class="p-4">
  <h1 class="text-4xl font-bold text-center">
    Svelte-Kit Boilerplate
  </h1>
  <ul>
    {#each data.users as item}
      <li>{item}</li>
    {/each}
  </ul>

  <div id="login-form"></div>
</main>