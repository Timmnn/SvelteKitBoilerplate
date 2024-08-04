import { loadStripe } from "@stripe/stripe-js";
import { PUBLIC_STRIPE_PUBLISHABLE_KEY } from "$env/static/public";

export default function useStripe() {
   const stripe = loadStripe(PUBLIC_STRIPE_PUBLISHABLE_KEY);

   return { stripe };
}
