import { redirect } from "@sveltejs/kit";
import type { PageServerLoadEvent } from "../$types";
import useStripe from "$lib/server/useStripe";

/** @type {import('./$types').PageLoad} */
export async function load(e: PageServerLoadEvent) {}

export const actions = {
   async createCheckoutSession() {
      const { stripe } = await useStripe();
      const paymentIntent = await stripe.paymentIntents.create({
         amount: 1099,
         currency: "usd",
         metadata: { integration_check: "accept_a_payment" },
      });

      return paymentIntent.client_secret;
   },
};
