import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import vue from "@astrojs/vue";


import solidJs from "@astrojs/solid-js";

export default defineConfig({
  integrations: [tailwind(), vue(), solidJs()]
});