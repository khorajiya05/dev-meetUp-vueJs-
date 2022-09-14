<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container>
    <v-layout row wrap class="mt-2">
      <v-flex xs12>
        <v-carousel
          class="pt-10 px-14"
          style="cursor:pointer;"
          cycle
          show-arrows-on-hover
          hide-delimiter-background
          height="450px"
        >
          <v-carousel-item
            v-for="item in meetups"
            :src="item.imageUrl"
            :key="item.id"
            max-height
            @click="onLoadMeetup(item?.id)"
          >
            <div class="title">{{item.title}}</div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-3">
      <v-flex xs12 class="text-center">
        <p>Join our awesome meetups!</p>
      </v-flex>
    </v-layout>
    <v-layout row wrap my-5>
      <v-flex xs12 sm6 pr-16 class="text-xs-center text-sm-right">
        <v-btn large router to="/meetups" class="deep-purple lighten-1" dark>Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large router to="/meetup/new" class="deep-purple lighten-1" dark>Organize Meetup</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  methods: {
    onLoadMeetup(id) {
      this.$router.push("/meetup/" + id);
    },
  },
  computed: {
    meetups() {
      return this.$store.getters.featuredMeetups;
    },
  },
};
</script>

<style scoped>
.title {
  position: absolute;
  bottom: 60px;
  margin: 0 auto;
  display: flex;
  right: 45%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
}
</style>


