<template>
  <div class="random-verse">
    <button @click="fetchRandomVerse">Get Random Verse</button>
    <p v-if="verse">{{ verse }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RandomVerse",
  data() {
    return {
      verse: "",
    };
  },
  methods: {
    async fetchRandomVerse() {
      try {
        const response = await axios.get(
          "https://labs.bible.org/api/?passage=random&type=json"
        );
        if (response.data && response.data.length > 0) {
          const data = response.data[0];
          this.verse = `${data.bookname} ${data.chapter}:${data.verse} - ${data.text}`;
        }
      } catch (error) {
        console.error("Error fetching random verse:", error);
        this.verse = "Error fetching random verse. Please try again later.";
      }
    },
  },
};
</script>

<style scoped>
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
