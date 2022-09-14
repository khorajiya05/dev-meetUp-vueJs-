<template>
  <v-container mt-5>
    <v-layout row style="padding: 15px 0px">
      <v-flex xs12 sm6 offset-sm-3>
        <h2 class="secondary--text">Create a New Meetup</h2>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <v-form @submit.prevent="onCreateMeetup">
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                color="deep-purple darken-2"
                label="Title"
                name="title"
                id="title"
                v-model="title"
                :rules="titleRules"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                color="deep-purple darken-2"
                label="Location"
                name="location"
                id="location"
                v-model="location"
                required
                :rules="locationRules"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                color="deep-purple darken-2"
                label="Image URL"
                name="imageUrl"
                id="imageUrl"
                v-model="imageUrl"
                :rules="imageUrlRules"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <img :src="imageUrl" height="150" />
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                color="deep-purple darken-2"
                label="Description"
                name="description"
                id="description"
                v-model="description"
                required
                multi-line
                :rules="descriptionRules"
              ></v-text-field>
            </v-flex>
          </v-layout>

          <!---------------------- Time picker ---------------------------------->

          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-menu
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    color="deep-purple darken-2"
                    v-model="date"
                    label="Choose a Date"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" @input="menu2 = false" color="deep-purple darken-2"></v-date-picker>
              </v-menu>
            </v-flex>
          </v-layout>

          <!---------------------- Time picker ---------------------------------->
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-menu
                ref="menu"
                v-model="menu3"
                :close-on-content-click="false"
                :nudge-right="40"
                :return-value.sync="time"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    color="deep-purple darken-2"
                    v-model="time"
                    label="Picker in menu"
                    prepend-icon="mdi-clock-time-four-outline"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-time-picker
                  ampm-in-title
                  color="deep-purple darken-2"
                  v-if="menu3"
                  v-model="time"
                  full-width
                  @click:minute="$refs.menu.save(time)"
                  scrollable
                ></v-time-picker>
              </v-menu>
            </v-flex>
          </v-layout>
          <v-layout style="margin: 30px 0px">
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-btn
                  color="deep-purple"
                  :disabled="!formIsValid"
                  :dark="formIsValid"
                  type="submit"
                >Create Meetup</v-btn>
              </v-flex>
            </v-layout>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "CreateMeetup",
  data() {
    return {
      valid: true,
      title: "",
      titleRules: [(t) => !!t || "Title is required"],
      location: "",
      locationRules: [(t) => !!t || "Location is required"],
      imageUrl: "",
      imageUrlRules: [(t) => !!t || "Image URL is required"],
      description: "",
      descriptionRules: [(t) => !!t || "Description is required"],
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
      time: new Date().toLocaleTimeString(),

      
      menu: false,
      modal: false,
      menu2: false,
      modal2: false,
      menu3: false,
    };
  },
  computed: {
    formIsValid() {
      return (
        this.title !== "" &&
        this.location !== "" &&
        this.imageUrl !== "" &&
        this.description !== "" &&
        this.date !== "" &&
        this.time !== ""
      );
    },
    submittableDate() {
     const date = new Date(this.date)
        if (typeof this.time === 'string') {
          let hours = this.time.match(/^(\d+)/)[1]
          const minutes = this.time.match(/:(\d+)/)[1]
          date.setHours(hours)
          date.setMinutes(minutes)
        } else {
          date.setHours(this.time.getHours())
          date.setMinutes(this.time.getMinutes())
        }
        return date
    }
  },
  methods: {
    onCreateMeetup() {
      if (!this.formIsValid) {
        return;
      }
      const meetupData = {
        title: this.title,
        location: this.location,
        imageUrl: this.imageUrl,
        description: this.description,
        date: this.submittableDate,
      };
      this.$store.dispatch("createMeetup", meetupData);
      this.$router.push("/meetups");
    },
  },
};
</script>
