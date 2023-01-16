<template>
  <v-app>
    <v-app-bar elevation="0" border>
      <v-img
        src="/images/logo.svg"
        max-width="100"
        max-height="50"
      />
      <v-app-bar-title>Authentication example</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>
