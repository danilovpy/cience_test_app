<template>    <v-btn
      :loading="loading3"
      :disabled="loading3"
      color="blue-grey"
      class="ma-2 white--text"
      @click="loader = 'loading3'"
    >
     Download Template 
      <v-icon
        right
        dark
      >
        mdi-cloud-download
      </v-icon>
    </v-btn></template>

<script>
export default {
  name:"GetTemplate"
};
</script>
