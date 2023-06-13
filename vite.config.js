// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Add the "react-router-dom" module as an external dependency
      // to prevent it from being bundled with your application
      // and to resolve the import issue.
      esbuild: {
        external: ['react-router-dom'],
      },
    }),
  ],
});
