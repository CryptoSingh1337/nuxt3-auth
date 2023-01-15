<template>
  <div>
    <div>Authentication status: {{ status }}</div>
    <div>Local Route</div>
    <div>Protected Route</div>
    <v-btn class="tile" color="primary" elevation="0" @click="handleClick">
      {{ status === 'authenticated' ? 'Sign Out' : 'Sign In' }}
    </v-btn>
  </div>
</template>
<script setup>
const { status, signOut } = useSession()
definePageMeta({ auth: false })

function handleClick () {
  if (status === 'authenticated') {
    signOut()
  } else {
    navigateTo('/login')
  }
}
</script>
