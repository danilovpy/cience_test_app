<template>
  <v-container>
    <v-row>
      <v-col
        >Add a message:
        <v-form @submit.prevent="submit">
          <v-text-field
            v-model="text"
            label="Message"
            required
          ></v-text-field>

          <v-btn class="mr-4" type="submit"> submit </v-btn>
        </v-form>
      </v-col>
  <v-col>All messages:
<ul >
  <li v-for="message in messages" :key="message.id">
    {{ message.text }}
  </li>
</ul>
  </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import messages from "../api/messages.js"
export default {
  name: "HomeComponent",

  data: () => ({ text:"",
  messages:[]}),
  async mounted() {
    await this.getMessages()
    this.messages = this.allMessages
  },

  methods: {
    ...mapActions(['getMessages']),
    async submit(){
      await messages.sendMessage(this.text)
      await this.getMessages()
      this.messages = this.allMessages

    }
  },
  computed: {
    ...mapGetters(['allMessages']),

  }
}; </script>
