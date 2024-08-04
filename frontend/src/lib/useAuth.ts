import { Clerk } from "@clerk/clerk-js";

export default async function useClerk(publicKey: string) {
   const clerk = new Clerk(publicKey);
   await clerk.load({});

   function mountSignInOrUserButton(mountNode: HTMLDivElement) {
      if (clerk.user) {
         clerk.mountUserButton(mountNode);
      } else {
         clerk.mountSignIn(mountNode);
      }
   }

   return { clerk, mountSignInOrUserButton };
}
