import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { createMemoryHistory, createRouter } from "vue-router";
import Home from "../src/components/views/Home.vue";
import GetStarted from "./components/views/GetStarted.vue";
import productForm from "./components/views/productForm.vue";

const firebaseConfig = {
  apiKey: "AIzaSyB9QG281c8ge7ZXFdugbVZDivFffaUMm6E",
  authDomain: "saautos-f99ca.firebaseapp.com",
  projectId: "saautos-f99ca",
  storageBucket: "saautos-f99ca.appspot.com",
  messagingSenderId: "685535159748",
  appId: "1:685535159748:web:94bf5886409a2c019cf091",
  measurementId: "G-809H2XYGMN",
};

const routes = [
  { path: "/", component: Home },
  { path: "/getstarted", component: GetStarted },
  { path: "/productForm", component: productForm },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

createApp(App)
    .use(router)
    .mount("#app");
// const Vapp = createApp(App);
// Vapp.mount('#app')
