<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container mt-6>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card max-width="650px" class="mx-auto">
          <v-row dense>
            <v-col v-for="(item, i) in meetups" :key="i" cols="12">
              <v-card dark class="deep-purple lighten-2">
                <div class="d-flex flex-no-wrap justify-content-start">
                  <v-avatar class="ma-3" size="125" tile>
                    <v-img :src="item.imageUrl"></v-img>
                  </v-avatar>
                  <div>
                    <v-card-title class="text-h5" v-text="item.title"></v-card-title>
                    <v-card-subtitle>{{item?.date | date}}</v-card-subtitle>
                    <v-card-actions>
                      <v-btn outlined rounded small @click="onLoadMeetup(item?.id)">
                        <v-icon left>arrow_forward</v-icon>View Meetup
                      </v-btn>
                    </v-card-actions>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  methods: {
    onLoadMeetup(id) {
      this.$router.push("/meetup/" + id);
    },
  },
  computed: {
    meetups() {
      return this.$store.getters.loadedMeetups;
    },
  },
};
</script>


