import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { initializeApp } from "firebase/app";
// import { getStorage } from 'firebase/storage';

import { getAuth } from "firebase/auth";
import { createMemoryHistory, createRouter } from "vue-router";
import Home from "../src/components/views/Home.vue";
import GetStarted from "./components/views/GetStarted.vue";
import productForm from "./components/views/productForm.vue";
import login from "./components/views/login.vue";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
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
  { path: "/login", component: login}
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});


// nav guard
router.beforeEach((to, from, next) => {
  const accessToken = localStorage.getItem("access_token");
  if (!accessToken) {
    if (to.path !== '/getstarted' && to.path !== '/login') {
      next('/getstarted');
    } else {
      next(); 
    }
  } else {
    next();
  }
});


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const storage = getStorage(app)

createApp(App)
    .use(router)
    .mount("#app");

// export { storage }