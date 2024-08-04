import Stripe from "stripe";
import { STRIPE_SECRET_KEY } from "$env/static/private";

export default function useStripe() {
   const stripe = new Stripe(STRIPE_SECRET_KEY, {
      apiVersion: "2024-06-20",
      appInfo: {
         name: "stripe-samples/accept-a-payment",
         url: "https://github.com/stripe-samples",
         version: "0.0.2",
      },
      typescript: true,
   });

   return { stripe };
}
