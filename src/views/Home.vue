<template>
  <div id="default-carousel" class="relative w-full" data-carousel="slide">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96 z-0">
      <!-- Item 1 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          src="https://plus.unsplash.com/premium_photo-1686730540270-93f2c33351b6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
      <!-- Item 2 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          src="https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNhciUyMGJhY2tncm91bmRzfGVufDB8fDB8fHww"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
      <!-- Item 3 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          src="https://images.unsplash.com/photo-1613835842551-894cdd236160?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNhciUyMGJhY2tncm91bmRzfGVufDB8fDB8fHww"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
      <!-- Item 4 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          src="https://images.unsplash.com/photo-1616789682173-1f1700675453?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhciUyMGJhY2tncm91bmRzfGVufDB8fDB8fHww"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
      <!-- Item 5 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          src="https://images.unsplash.com/photo-1682686580391-615b1f28e5ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
    </div>
    <!-- Slider indicators -->
    <div
      class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse"
    >
      <button
        type="button"
        class="w-3 h-3 rounded-full"
        aria-current="true"
        aria-label="Slide 1"
        data-carousel-slide-to="0"
      ></button>
      <button
        type="button"
        class="w-3 h-3 rounded-full"
        aria-current="false"
        aria-label="Slide 2"
        data-carousel-slide-to="1"
      ></button>
      <button
        type="button"
        class="w-3 h-3 rounded-full"
        aria-current="false"
        aria-label="Slide 3"
        data-carousel-slide-to="2"
      ></button>
      <button
        type="button"
        class="w-3 h-3 rounded-full"
        aria-current="false"
        aria-label="Slide 4"
        data-carousel-slide-to="3"
      ></button>
      <button
        type="button"
        class="w-3 h-3 rounded-full"
        aria-current="false"
        aria-label="Slide 5"
        data-carousel-slide-to="4"
      ></button>
    </div>
    <!-- Slider controls -->
    <button
      type="button"
      class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-prev
    >
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none"
      >
        <svg
          class="w-4 h-4 text-white rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
        <span class="sr-only">Previous</span>
      </span>
    </button>
    <button
      type="button"
      class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-next
    >
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          class="w-4 h-4 text-white rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
        <span class="sr-only">Next</span>
      </span>
    </button>
    <!-- </div> -->
  </div>

  <main>
    <h2 class="text-3xl p-4 font-bold">Popular Vehicles</h2>
    <div class="grid grid-cols-1 md:grid-cols-4 container mx-auto gap-10 py-4">
      <div
        class="max-w-sm bg-platinum border border-gray-200 rounded-lg shadow"
        v-for="info in getVehicleInfo"
        :key="info.id"
      >
        <div class="relative">
          <div class=".carousel">
            <div
              class=".carousel-slide"
              v-for="(image, index) in info.data.images"
              :key="index"
              :class="{
                block: index === currentIndex,
                hidden: index !== currentIndex,
              }"
            >
              <img :src="image" class="w-full h-auto" />
              <button
                @click="prevSlide"
                class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-l-md"
              >
                &#10094;
              </button>
              <button
                @click="nextSlide"
                class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-r-md"
              >
                &#10095;
              </button>
            </div>
          </div>
        </div>

        <div class="p-5">
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {{ info.data.year }} - {{ info.data.carMake }} -
            {{ info.data.carModel }}
          </p>

          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              CurrentBid ₦{{ info.data.currentBid }}
            </h5>
          </a>

          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {{ info.data.location }}
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            VIN - {{ info.data.vin }}
          </p>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white focus:ring-4 focus:outline-none focus:ring-blue-300 bg-platinum-80 rounded-lg hover:bg-platinum-20"
          >
            Read more
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
export default {
  name: "Home",
  data() {
    return {
      getVehicleInfo: [],
      imageUrls: [],
      currentIndex: 1,
      autoplayInterval: null,
    };
  },

  methods: {
    async getVehicleDetails() {
      const db = getFirestore();
      const querySnapshot = await getDocs(collection(db, "vehicleDetails"));
      querySnapshot.forEach((doc) => {
        this.getVehicleInfo.push({
          id: doc.id,
          data: doc.data(),
        });
      });
    },
    async startAutoPlay() {
      await this.stopAutoplay();
      this.autoplayInterval = setInterval(() => {
        this.nextSlide();
      }, 3000);
    },
    async stopAutoplay() {
      if (this.autoplayInterval) {
        clearInterval(this.autoplayInterval);
        this.autoplayInterval = null;
      }
    },
    pauseAutoplay() {
      this.stopAutoplay();
    },

    resumeAutoplay() {
      this.startAutoplay();
    },
    async nextSlide() {
      this.currentIndex = (this.currentIndex % this.getVehicleInfo.length) + 1;
    },
  },

  async created() {
    await this.getVehicleDetails();
    this.getVehicleInfo;
  },
  mounted() {
    this.startAutoPlay();
  },
  beforeUnmount() {
    this.stopAutoplay();
  },
};
</script>

<style>
.carousel {
  overflow: hidden;
}
.carousel-slide {
  display: none;
}
</style>
