<script lang="ts">
   import { onMount } from "svelte";
   import useStripe from "$lib/useStripe";

   onMount(async () => {
      const { stripe } = useStripe();
      stripe.then(stripe => {
         if (!stripe) {
            return;
         }
         const appearance = {
            theme: "flat",
            variables: { colorPrimaryText: "#262626" },
         };
         const options = {
            /* options */
         };
         const elements = stripe.elements({ clientSecret, appearance });
         const paymentElement = elements.create("payment", options);
         paymentElement.mount("#payment-element");
      });
   });
</script>
