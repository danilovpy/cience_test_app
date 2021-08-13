<template>
  <v-form @submit.prevent="submit">
    <v-file-input
      outlined
      :rules="[rules]"
      show-size
      counter
      label="File input"
      accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
    ></v-file-input>
    <v-btn class="mr-4" type="submit"> submit </v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({validation:false,}),
  methods: {
    async submit() {
      if (this.validation== true) {
        console.log("here");
      }
    },
    rules(value) {
      if (value.size < 25000000) {
        this.validation = true
        return true;
      }
      this.validation =false
      return "File size must be less than 25MB!";
    },
  },
};
</script>
