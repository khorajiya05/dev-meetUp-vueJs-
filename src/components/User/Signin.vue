<template>

 
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="deep-purple lighten-1">
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    color="deep-purple lighten-1"
                    prepend-icon="person"
                    name="login"
                    label="Login"
                    type="text"
                    required
                  ></v-text-field>
                  <v-text-field
                    color="deep-purple lighten-1"
                    id="password"
                    prepend-icon="lock"
                    name="password"
                    label="Password"
                    type="password"
                    required
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="deep-purple lighten-1" to="/">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>


</template>

<script>
export default {
  name: "SignIn",
  props: {
    source: String,
  },
};
</script>

<style></style>
