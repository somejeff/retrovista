<template>
    <q-page class="q-pa-md">
        <p v-if="user">Hello {{ user.displayName }}</p>
    </q-page>
</template>

<script setup>
import { useUserStore } from "src/stores/user";
import { storeToRefs } from "pinia";
const $userStore = useUserStore();
const { user } = storeToRefs($userStore);
</script>
