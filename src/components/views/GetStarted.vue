<template>
  <main class="gradient h-screen flex justify-center items-center">
    <div>
      <div
        class="w-full max-w-sm md:p-16 border border-gray-200 rounded-lg shadow-lg sm:p-6 p-8 bg-platinum-20"
      >
        <form class="space-y-6" @submit.prevent="signUp()">
          <h5 class="text-xl font-medium text-white">
            Sign in to our platform
          </h5>
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-white"
              >Your email</label
            >
            <input
              type="email"
              name="email"
              id="email"
              v-model="email"
              class="bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-ashgray focus:border-ashgray block w-full p-2.5"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-white"
              >Username</label
            >
            <input
              type="text"
              name="username"
              id="username"
              v-model="username"
              class="bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-ashgray focus:border-ashgray block w-full p-2.5"
              placeholder="username"
              required
            />
          </div>
          <div>
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-white"
              >Your password</label
            >
            <input
              :type="inputType"
              name="password"
              id="password"
              placeholder="••••••••"
              v-model="password"
              class="bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-ashgray focus:border-ashgray block w-full p-2.5"
              required
            />
            <span
              v-if="inputType === 'password'"
              @click="toggleShowandHidePassword()"
            >
              <i class="zmdi zmdi-eye text-white relative left-52 bottom-8"></i>
            </span>
            <span
              v-if="inputType === 'text'"
              @click="toggleShowandHidePassword()"
            >
              <i
                class="zmdi zmdi-eye-off text-white relative left-52 bottom-8"
              ></i>
            </span>
          </div>

          <div class="flex items-start">
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                  required
                />
              </div>
              <label
                for="remember"
                class="ms-2 text-sm font-medium text-gray-500"
                >Remember me
              </label>
            </div>
            <a href="#" class="ms-auto text-sm text-white hover:underline">
              Lost Password?</a
            >
          </div>
          <button
            type="submit"
            class="w-full text-white bg-platinum-80 hover:bg-platinum-20 focus:ring-4 focus:outline-none focus:ring-platinum-30 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Login to your account
          </button>
          <div class="text-sm font-medium text-gray-500">
            Not registered?
            <a href="#" class="text-white hover:underline">Create account</a>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

export default {
  name: "GetStarted",
  data() {
    return {
      inputType: "password",
      email: "",
      password: "",
      username: "",
    };
  },
  methods: {
    toggleShowandHidePassword() {
      this.inputType = this.inputType === "password" ? "text" : "password";
    },

    signUp() {
      const auth = getAuth();
      const db = getFirestore();

      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);

          // save data to database
          const userData = {
            username: this.username,
            email: this.email,
            authProvider: "local",
          };

          addDoc(collection(db, "users"), userData)
            .then(() => {
              console.log("User added to database successfully");
            })
            .catch((error) => {
              console.error("Error adding user to database: ", error.message);
            });
            
          localStorage.setItem("access_token", userCredential.user.accessToken);
          alert("hello " + this.username);
          this.$router.push("/");
        })

        .catch((error) => {
          console.error("Error adding user to database: ", error.message);
        });
    },
  },
};
</script>

<style>
.gradient {
  background: rgb(230, 232, 230);
  background: linear-gradient(
    90deg,
    rgba(230, 232, 230, 1) 0%,
    rgba(159, 184, 173, 1) 50%,
    rgba(63, 64, 63, 1) 100%
  );
}
</style>
