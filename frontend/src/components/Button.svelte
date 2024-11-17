<script lang="ts">
  import { Button as ButtonPrimitive } from "bits-ui";
</script>

<ButtonPrimitive.Root
  class="bg-primary text-primary-foreground hover:bg-primary/90 shadow p-2 rounded-md focus:outline-none focus:ring-2 disabled:pointer-events-none disabled:opacity-50"
  type="button"
  {...$$restProps}
  on:click
  on:keydown
>
  <slot />
</ButtonPrimitive.Root>
