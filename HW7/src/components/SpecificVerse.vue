<template>
  <div class="specific-verse">
    <input v-model="inputVerse" placeholder="Enter verse (e.g., John 3:16)" />
    <button @click="fetchSpecificVerse">Get Specific Verse</button>
    <p v-if="verse">{{ verse }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SpecificVerse",
  data() {
    return {
      inputVerse: "",
      verse: "",
    };
  },
  methods: {
    async fetchSpecificVerse() {
      if (!this.inputVerse) {
        this.verse = "Please enter a valid verse (e.g., John 3:16)";
        return;
      }
      try {
        const response = await axios.get(
          `https://labs.bible.org/api/?passage=${this.inputVerse}&type=json`
        );
        if (response.data && response.data.length > 0) {
          const data = response.data[0];
          this.verse = `${data.bookname} ${data.chapter}:${data.verse} - ${data.text}`;
        }
      } catch (error) {
        console.error("Error fetching specific verse:", error);
        this.verse = "Error fetching specific verse. Please try again later.";
      }
    },
  },
};
</script>

<style scoped>
input {
  padding: 10px;
  margin-right: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

p {
  margin-top: 10px;
  font-size: 1.2em;
}
</style>
