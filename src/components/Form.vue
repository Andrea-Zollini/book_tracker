<script setup>
import { ref } from "vue";
const title = ref("");

const submit = () => {
  //   console.log(title.value);
  handleRequest();
};

const buildQueryParam = (s) => {
  return s.split(" ").join("+");
};

const handleRequest = () => {
  const url = "https://openlibrary.org/search.json?lang=it";
  const query = buildQueryParam(title.value);
  console.log(query);
};
</script>

<template>
  <form @submit.prevent="submit" class="text-center mt-6">
    <input
      type="text"
      v-model="title"
      placeholder="Titolo"
      class="text-black p-2"
    />
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ms-3"
      type="submit"
    >
      Cerca
    </button>
  </form>
</template>
