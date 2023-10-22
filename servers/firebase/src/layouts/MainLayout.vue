<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated>
            <q-toolbar>
                <q-toolbar-title>
                    Retro Vista
                </q-toolbar-title>
                <template v-if="user">
                    <div class="q-px-lg">Welcome, {{ user.displayName }}</div>
                    <q-btn color="white" text-color="black" @click="signOutUser">Sign Out</q-btn>
                </template>
            </q-toolbar>
        </q-header>
        <q-page-container>
            <router-view></router-view>
        </q-page-container>
    </q-layout>
</template>
<script setup>
import fb from "/src/firebaseConfig"
import { onAuthStateChanged, signOut } from "@firebase/auth"
import { ref } from 'vue'
import { useRouter } from "vue-router"
const router = useRouter()
const user = ref()


onAuthStateChanged(fb.auth, async (newuser) => {
    if (newuser) {
        console.log("User", newuser.uid)
        user.value = newuser
    } else {
        router.push("/login")
    }
})

async function signOutUser() {
    await signOut(fb.auth);
    router.go("/login")
}

</script>