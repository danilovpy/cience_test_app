<template>
  <v-container
    >Home, token: {{ token }}<br />
    User: {{ user.username }}
  </v-container>
</template>

<script>
import auth from "../api/auth.js"
export default {
  name: "HomeComponent",

  data: () => ({ user: "", token: "" }),
  methods: {},

  async created() {
    await auth.getUserData()
    this.token = JSON.parse(localStorage.getItem("token"));
    this.user = JSON.parse(localStorage.getItem("user"));
    if (this.token == null || this.user == null) {
      this.token = "";
      this.user = {};
    }
  },
  computed: {},
};
</script>
