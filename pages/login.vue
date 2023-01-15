<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center" dense>
      <v-col cols="12" sm="8" md="4" lg="4">
        <v-card flat outlined>
          <v-card-title>Login</v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="uname"
                prepend-inner-icon="mdi:mdi-account"
                label="Enter your username"
                outlined
              />
              <v-text-field
                v-model="pass"
                type="password"
                prepend-inner-icon="mdi:mdi-lock"
                label="Enter your password"
                outlined
              />
              <v-card-actions class="px-0">
                <v-btn
                  class="tile"
                  elevation="0"
                  color="primary"
                  block
                  x-large
                  :disabled="!valid"
                  @click="handleLogin"
                >
                  Login
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
const uname = ref('')
const pass = ref('')
const valid = ref(true)
const { signIn } = useSession()

definePageMeta({ auth: false })

async function handleLogin () {
  console.log(uname.value, pass.value)
  await signIn('credentials', { username: uname.value, password: pass.value, callbackUrl: '/' })
}
</script>
