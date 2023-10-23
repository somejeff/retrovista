import { defineStore } from "pinia";
import fb from "/src/firebaseConfig";
import { onAuthStateChanged, signOut } from "@firebase/auth";
export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),

  getters: {},

  actions: {
    initUser() {
      onAuthStateChanged(fb.auth, async (newuser) => {
        if (newuser) {
          console.log("User", newuser.uid);
          this.user = newuser;
        }
      });
    },
    isLoggedIn() {
      console.log("logged in? ", this.user);
      return this.user != null;
    },
    async signOut() {
      console.log("Signing out");
      await signOut(fb.auth);
    },
  },
});
