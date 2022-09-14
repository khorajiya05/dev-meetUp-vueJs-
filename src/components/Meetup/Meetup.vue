<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 mt-10>
          <v-card class="mx-auto" max-width="800">
            <v-card-title primary-title>{{meetup?.title}}</v-card-title>
            <v-img
              class="white--text align-end"
              height="350px"
              :src="meetup?.imageUrl"
              style="cursor:pointer"
            ></v-img>
            <v-card-subtitle class="pb-0">{{meetup?.date | date}} - {{meetup?.location}}</v-card-subtitle>
            <v-card-text class="text--primary">
              <div>{{meetup?.description}}</div>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="success">Register</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Meetups",
  props: ["id"],
  computed: {
    meetup() {
      return this.$store.getters.loadedMeetup(this.id);
    },
  },
};
</script>