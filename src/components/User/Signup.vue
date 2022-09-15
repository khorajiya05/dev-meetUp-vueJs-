<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container class="mt-15">
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <form @submit.prevent="onSignup">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      color="deep-purple lighten-1"
                      name="email"
                      label="mail"
                      id="email"
                      v-model="email"
                      type="email"
                      :rules="[emailRool]"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex>
                    <v-text-field
                      name="password"
                      label="Password"
                      id="password"
                      v-model="password"
                      type="password"
                      color="deep-purple lighten-1"
                      :rules=[passwordRule]
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex>
                    <v-text-field
                      name="confirmPassword"
                      label="Confirm Password"
                      id="confirmPassword"
                      v-model="confirmPassword"
                      type="password"
                      color="deep-purple lighten-1"
                      :rules="[comparePasswordRule]"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex>
                    <v-btn color="deep-purple lighten-1" type="submit" :disabled="!formIsValid">Sign Up</v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
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
      return this.email === "" ? "Email is required" : null;
    },
    passwordRule() {
      return this.password === ""
        ? "Password is required"
        : this.password.length < 8
        ? "Atleast 8 digit of password is required"
        : null;
    },
    comparePasswordRule() {
      return this.password !== this.confirmPassword
        ? "Passwords do not match"
        : null;
    },
  },
  methods: {
    onSignup() {
      console.log(this.email, this.password, this.confirmPassword);
    },
    formIsValid(){
      return this.email !== "" && this.password !== "" && this.confirmPassword !=="" && !this.comparePasswordRule() && !this.passwordRule()
    }
  },
};
</script>