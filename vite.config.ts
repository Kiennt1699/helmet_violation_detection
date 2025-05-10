// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   ssr: {
//     noExternal: ["react-leaflet", "leaflet"],
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  ssr: {
    noExternal: ["react-leaflet", "leaflet"],
  },
  server: {
    port: 7068, // 👈 Thay đổi số này thành port bạn muốn
    host: "0.0.0.0", // (Tùy chọn) Cho phép truy cập từ IP ngoài localhost
  },
});
