<template>
  <q-layout>
    <q-page-container>
      <div id="firebaseui-auth-container"></div>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import fb from "/src/firebaseConfig";
import { EmailAuthProvider, GoogleAuthProvider } from "firebase/auth";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import { onMounted } from "vue";

onMounted(async function () {
  let ui;
  if (!ui) {
    ui = new firebaseui.auth.AuthUI(fb.auth);
  }
  ui.start("#firebaseui-auth-container", {
    signInFlow: 'popup',
    signInSuccessUrl: "/",
    signInOptions: [
      EmailAuthProvider.PROVIDER_ID,
      GoogleAuthProvider.PROVIDER_ID,
    ],
  })
});
</script>