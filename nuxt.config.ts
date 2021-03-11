import { NuxtConfig } from "@nuxt/types";

console.info(`NODE_ENV:`, process.env.NODE_ENV);
console.info(`cwd:`, process.cwd());

const config = <NuxtConfig>{
  ssr: false,
  buildModules: ["@nuxt/typescript-build", "@nuxtjs/composition-api"],
  router: {
    mode: "hash",
  },
  build: {
    publicPath: "./_nuxt/",
  },
  generate: { dir: "dist" },
};

export default config;
