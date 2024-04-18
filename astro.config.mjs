import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";

import tailwind from "@astrojs/tailwind";
import { defineModel } from 'vue';

// https://astro.build/config
export default defineConfig({
  integrations: [vue({
    script: defineModel
  }), tailwind()]
});