<template>
  <v-app>
    <div class="main-header">
      <v-toolbar color="accent-4 " dense>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-flex d-sm-none" temporary></v-app-bar-nav-icon>
        <v-toolbar-title>
          <router-link
            to="/"
            tag="span"
            style="cursor:pointer"
            class="deep-purple--text lighten-3"
          >Meet Up</router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
          <v-btn
            active-class="deep-purple--text text--accent-4"
            text
            v-for="item in menuItems"
            :key="item.title"
            :to="item.link"
          >
            <v-icon left>{{item.icon}}</v-icon>
            {{item.title}}
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-navigation-drawer v-model="drawer" absolute leftx temporary>
        <v-list nav dense>
          <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
            <v-list-item v-for="item in menuItems" :key="item.title" :to="item.link">
              <v-list-item-title>
                <v-icon left>{{item.icon}}</v-icon>
                {{item.title}}
              </v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </div>

    <router-view></router-view>
  </v-app>
</template>
 


 
<script>
export default {
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
  computed:{
    menuItems(){
      let  menuItems = [
        { icon: "face", title: "Sign up", link: "/signup" },
        { icon: "lock_open", title: "Sign in", link: "/signin" },
      ];
      if(this.userIsAuthenticated){
        menuItems = [
        { icon: "supervisor_account", title: "View Meetups", link: "/meetups" },
        { icon: "room", title: "Organize Meetup", link: "/meetup/new" },
        { icon: "person", title: "Profile", link: "/profile" },
        ]
      }   
      return menuItems
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  }
};
</script>

<style scoped>
.v-toolbar--dense {
  position: sticky;
  top: 0;
}
</style>

