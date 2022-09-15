<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <form @submit.prevent="onSignup">
          <v-card class="elevation-12">
            <app-alert @dismissed="onDismissed" :text="error" v-if="error" />
            <v-toolbar dark color="deep-purple lighten-1" v-else>
              <v-toolbar-title>MeetUp</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-text-field
                prepend-icon="email"
                color="deep-purple lighten-1"
                name="email"
                label="mail"
                id="email"
                v-model="email"
                type="email"
                :rules="[emailRool]"
                required
              ></v-text-field>

              <v-text-field
                prepend-icon="lock"
                name="password"
                label="Password"
                id="password"
                v-model="password"
                type="password"
                color="deep-purple lighten-1"
                :rules="[passwordRule]"
                required
                autocomplete
              ></v-text-field>

              <v-text-field
                prepend-icon="lock"
                name="confirmPassword"
                label="Confirm Password"
                id="confirmPassword"
                v-model="confirmPassword"
                type="password"
                color="deep-purple lighten-1"
                :rules="[comparePasswordRule]"
                required
                autocomplete
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="deep-purple lighten-1"
                type="submit"
                :disabled="loading"
                :loading="loading"
              >
                Signup
                <template v-slot:loading>
                  <span class="custom-loader">
                    <v-icon light>mdi-cached</v-icon>
                  </span>
                </template>
              </v-btn>
            </v-card-actions>
          </v-card>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Signup",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  computed: {
    emailRool() {
      return this.email === "" ? "Email is required" : "";
    },
    passwordRule() {
      return this.password === ""
        ? "Password is required"
        : this.password.length < 8
        ? "Atleast 8 digit of password is required"
        : "";
    },
    comparePasswordRule() {
      return this.password !== this.confirmPassword
        ? "Passwords do not match"
        : "";
    },
    formIsValid() {
      return (
        this.email !== "" && this.password !== "" && this.confirmPassword !== ""
      );
    },
    user() {
      return this.$store.getters.user;
    },
    error() {
      return this.$store.getters.error;
    },
    loading() {
      return this.$store.getters.loading;
    },
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/");
      }
    },
  },
  methods: {
    onSignup() {
      this.$store.dispatch("signUserUp", {
        email: this.email,
        password: this.password,
      });
    },
    onDismissed() {
      this.$store.dispatch("clearError");
    },
  },
};
</script>