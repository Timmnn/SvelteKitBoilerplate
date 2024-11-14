<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  import { Button } from "$components/ui/button";
  import SignedIn from "clerk-sveltekit/client/SignedIn.svelte";
  import UserButton from "clerk-sveltekit/client/UserButton.svelte";
  import SignedOut from "clerk-sveltekit/client/SignedOut.svelte";
</script>

<main class="p-4">
  <h1 class="text-4xl font-bold text-center">Svelte-Kit Boilerplate1</h1>
  <ul>
    {#each data.users as item}
      <li>{item}</li>
    {/each}
  </ul>
  <div id="login-form"></div>

  <div class="outline p-3 rounded">
    <h2 class="text-2xl font-bold">Auth</h2>
    <div class="flex gap-3">
      <Button>
        <a href="/admin"> Go to protected route </a>
      </Button>
      <Button>
        <a href="/sign-in"> Sign in </a>
      </Button>
      <SignedIn>
        <UserButton />
      </SignedIn>

      <SignedOut>Not signed in</SignedOut>
    </div>
  </div>
  <div class="outline p-3 rounded">
    <h2 class="text-2xl font-bold">Payments</h2>
    <Button>
      <a href="/checkout"> Checkout </a>
    </Button>
  </div>
</main>

