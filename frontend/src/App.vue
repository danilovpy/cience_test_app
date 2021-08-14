<template>
  <v-app>
    <NavBar />

    <v-main>
      <router-view :key="$route.path"></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  components: { NavBar },

  data: () => ({
    //
  }),
};
</script>
