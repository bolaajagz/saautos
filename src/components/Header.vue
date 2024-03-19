<template class="">
  <!-- SearchBar -->
  <!-- <div class="max-w-md mx-auto p-6 rounded-md bg-onyx">
        <div class="flex items-center">
          <input
            type="text"
            placeholder="Search by Make,Model,Name,VIN"
            class="w-full px-4 py-2 border border-felidgrau rounded-l-md focus:outline-none focus:border-felidgrau "
          />
          <button
            type="button"
            class="px-4 py-2 bg-platinum  rounded-r-md hover:bg-ashgray focus:outline-none"
          >
            Search
          </button>
        </div>
      </div>

      <div class="flex">
        <button class="btn bg-platinum hover:bg-ashgray">
          Register
        </button>
        <button class="btn bg-ashgray  hover:bg-platinum">
          Sign In
        </button>
      </div>
    </div>
  </nav> -->

  <nav class="bg-platinum-20 border-gray-200">
    <div class="flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img
          src="../assets/Screenshot 2024-03-08 132622.png"
          class="h-8"
          alt="Company Logo"
        />
        <!-- <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> -->
      </a>

      <!-- Hamburger -->
      <button
        data-collapse-toggle="navbar-dropdown"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="navbar-dropdown"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
        <ul
          class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-platinum-80 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"
        >
          <li>
            <router-link
              to="/"
              class="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 hover:bg-platinum-30"
              aria-current="page"
              >How It Works {{ displayName }}</router-link
            >
          </li>

          <li>
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              class="flex items-center justify-between w-full py-2 px-3 text-white rounded hover:bg-platinum-30 md:p-0 md:w-auto"
            >
              Inventory
              <svg
                class="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <!-- Dropdown menu -->
            <div
              id="dropdownNavbar"
              class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
            >
              <ul
                class="py-2 text-sm text-platinum-80"
                aria-labelledby="dropdownLargeButton"
              >
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-platinum-30"
                    >Dashboard</a
                  >
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-platinum-30"
                    >Settings</a
                  >
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-platinum-30"
                    >Earnings</a
                  >
                </li>
              </ul>
              <div class="py-1">
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >Sign out</a
                >
              </div>
            </div>
          </li>

          <li>
            <a
              href="#"
              class="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 hover:bg-platinum-30"
              >Auctions</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 hover:bg-platinum-30"
              >Locations</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 hover:bg-platinum-30"
              >Services & Support</a
            >
          </li>

          <li>
            <router-link
              to="/productForm"
              class="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 hover:bg-platinum-30"
              >Product Form</router-link>
          </li>

          <li>
            <button
              id="dropdownNavbarLink2"
              data-dropdown-toggle="dropdownNavbar2"
              class="flex items-center justify-between w-full py-2 px-3 text-white rounded hover:bg-platinum-30 md:p-0 md:w-auto"
            >
              Sell Your Car
              <svg
                class="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <!-- Dropdown menu -->
            <div
              id="dropdownNavbar2"
              class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
            >
              <ul
                class="py-2 text-sm text-platinum-80"
                aria-labelledby="dropdownLargeButton"
              >
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-platinum-30"
                    >For Individuals</a
                  >
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-platinum-30"
                    >For Business</a
                  >
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-platinum-30"
                    >For Dealers</a
                  >
                </li>
              </ul>
            </div>
          </li>

          <li>
            <button
              id="dropdownNavbarLink3"
              data-dropdown-toggle="dropdownNavbar3"
              class="flex items-center justify-between w-full py-2 px-3 text-white rounded hover:bg-platinum-30 md:p-0 md:w-auto"
            >
              Create Account
              <svg
                class="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <!-- Dropdown menu -->
            <div
              id="dropdownNavbar3"
              class="z-20 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
            >
              <ul
                class="py-2 text-sm text-platinum-80"
                aria-labelledby="dropdownLargeButton"
              >
                <li>
                  <router-link
                    to="../getstarted"
                    class="block px-4 py-2 hover:bg-platinum-30"
                    >Register</router-link
                  >
                </li>
                <li @click="logout()">
                  <a href="#" class="block px-4 py-2 hover:bg-platinum-30"
                    >Sign Out</a
                  >
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <!-- SearchBar -->
      <div class="flex md:order-2">
        <!-- <button
          type="button"
          data-collapse-toggle="navbar-search"
          aria-controls="navbar-search"
          aria-expanded="false"
          class="md:hidden text-gray-500  hover:bg-gray-100  focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 me-1"
        >
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span class="sr-only">Search</span>
        </button> -->

        <div class="relative my-2 md:0">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span class="sr-only">Search icon</span>
          </div>
          <input
            type="text"
            id="search-navbar"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-platinum-80 focus:border-platinum-80"
            placeholder="Search..."
          />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
export default {
  data() {
      return{
        displayName: ""
      }
  },
  methods: {
    logout() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          localStorage.clear()
          console.log("Sign-out successful")
        })
        .catch((error) => {
          console.error("An error happened", error.message);
        });
        window.location.reload();
    },
  },

  mounted() {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {

      this.displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;

      const uid = user.uid;
    }
  }
};
</script>
