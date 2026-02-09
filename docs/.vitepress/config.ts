import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  base: '/',
  title: 'Pythagoras',
  description: 'First Person Puzzle game about triangles in space',
  themeConfig : {
    logo: 'logo.png',
    siteTitle: false
  }
})
