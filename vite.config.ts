import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Mantenha a base para garantir que o CSS seja buscado na pasta correta no GitHub
  base: '/gabrielzanon.dev', 
  plugins: [
     tailwindcss() /* outros plugins */
    // Se o seu ambiente Lovable já injeta os plugins, remova-os daqui.
    // Se você mudou para um projeto Vite puro, mantenha apenas o necessário.
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})