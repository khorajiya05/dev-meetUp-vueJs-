<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-flex class="mb-4">
              <v-avatar size="96" class="mr-4">
                <img src="https://faces-img.xcdn.link/image-lorem-face-5759.jpg" />
              </v-avatar>
            </v-flex>
            <v-text-field v-model="form.firstName" label="FirstName" color="deep-purple lighten-1"></v-text-field>
            <v-text-field v-model="form.lastName" label="Last Name" color="deep-purple lighten-1"></v-text-field>
            <v-text-field
              v-model="form.contactEmail"
              label="Email Address"
              color="deep-purple lighten-1"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn color="deep-purple lighten-1" dark>Save Changes</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  pageTitle: "My Profile",
  data() {
    return {
      form: {
        firstName: "John",
        lastName: "Doe",
        contactEmail: "john@doe.com",
        avatar: "MALE_CAUCASIAN_BLOND_BEARD",
      },
    };
  },
};
</script>