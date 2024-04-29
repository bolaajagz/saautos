<template>
  <div class="container mx-auto py-4 text-2xl">
    <p>Auction For Today</p>
  </div>

  <Modal v-show="isModalVisible" @close="closeModal">
    <template v-slot:header> Place Bid </template>

    <template v-slot:body>
      <input
        type="number"
        name="Current Price"
        class=""
        :placeholder="currentInfo"
        v-model="auctionDetails.currentPrice"
      />
      <div v-if="bidStatus">
        <p class="text-red-400 p-2">
          Bid rejected: The new price must be higher than the current price.
        </p>
      </div>
    </template>

    <template v-slot:footer>
      <div v-if="!isLoading">
        <button
          @click="submitBid"
          type="submit"
          class="text-white bg-platinum-80 hover:bg-platinum-20 focus:ring-4 focus:outline-none focus:ring-platinum-30 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Submit Bid
        </button>
      </div>
      <div v-else class="bg-inherit">
        <div role="status">
          <button type="submit">
            <svg
              aria-hidden="true"
              class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </button>
        </div>
      </div>
    </template>
  </Modal>

  <div
    class="relative overflow-x-auto shadow-md sm:rounded-lg container mx-auto py-10"
    :class="[this.isModalVisible && 'blur']"
  >
    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
      <thead class="text-xs text-white uppercase bg-[#3f403f]">
        <tr>
          <th scope="col" class="px-6 py-3">Car Make</th>
          <th scope="col" class="px-6 py-3">Time</th>
          <th scope="col" class="px-6 py-3">Location</th>
          <th scope="col" class="px-6 py-3">Initial Price</th>
          <th scope="col" class="px-6 py-3">Current Price</th>
          <th scope="col" class="px-6 py-3">
            <span class="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody v-for="(info, index) in getInfo" :key="info.id">
        <tr
          class="border-b hover:bg-gray-50 [&>*:nth-child(odd)]:bg-[#e6e8e6] [&>*:nth-child(even)]:bg-[#3f403f33]"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-black whitespace-nowrap"
          >
            {{ info.data.carMake }}
          </th>
          <td class="px-6 py-4 text-black">{{ info.data.date }}</td>
          <td class="px-6 py-4 text-black">{{ info.data.carLocation }}</td>
          <td class="px-6 py-4 text-black">{{ info.data.initialPrice }}</td>
          <td class="px-6 py-4 text-black">{{ info.data.currentPrice }}</td>
          <td class="px-6 py-4 text-right">
            <button
              href="#"
              class="font-medium text-white bg-platinum-80 focus:ring-4 focus:outline-none focus:ring-platinum-30 rounded-lg text-sm px-5 py-2.5 hover:underline"
              @click="showModal(info.id)"
            >
              Place Bid
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <form class="container mx-auto py-10" @submit.prevent="submitAuction">
    <h1 class="text-3xl py-8">Auction Info</h1>
    <div class="grid md:grid-cols-2 md:gap-6">
      <div class="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="Car Make"
          id="Car Make"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-onyx peer"
          placeholder=""
          required
          v-model="auctionDetails.carMake"
        />
        <label
          for="Car Make"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-onyx peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Car Make</label
        >
      </div>
      <div class="relative z-0 w-full mb-5 group">
        <select
          v-model="auctionDetails.carLocation"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-onyx peer"
        >
          <option disabled>Select Your Location</option>
          <option
            :value="state.name"
            v-for="state in nigeriaStates"
            :key="state.id"
          >
            {{ state.name }}
          </option>
        </select>
        <label
          for="year"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-onyx peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Vehicle Location</label
        >
      </div>
    </div>

    <div class="grid md:grid-cols-2 md:gap-6">
      <div class="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="Initial Price"
          id="Initial Price"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-onyx peer"
          placeholder=" "
          required
          v-model="auctionDetails.initialPrice"
          @input="format()"
        />
        <label
          for="Initial Price"
          class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-onyx peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Initial Price</label
        >
      </div>

      <div class="relative z-0 w-full mb-5 group">
        <input
          type="datetime-local"
          name="time"
          id="time"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-onyx peer"
          placeholder=" "
          required
          v-model="auctionDetails.date"
        />
        <label
          for="Time"
          class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-onyx peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Auction Time</label
        >
      </div>
    </div>

    <div v-if="isLoading" class="bg-inherit">
      <div role="status">
        <button type="submit">
          <svg
            aria-hidden="true"
            class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span class="sr-only">Loading...</span>
        </button>
      </div>
    </div>

    <div v-else>
      <button
        type="submit"
        class="text-white bg-platinum-80 hover:bg-platinum-20 focus:ring-4 focus:outline-none focus:ring-platinum-30 font-medium rounded-lg text-sm px-5 py-2.5"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
import {
  addDoc,
  collection,
  getFirestore,
  getDocs,
  getDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import nigeriaStates from "../helpers/nigeriaStates";
import Modal from "../components/Modal.vue";
import { formatCurrency } from "../helpers/currencyFormatter";

export default {
  data() {
    return {
      nigeriaStates,
      selected: "Select Your Location",
      auctionDetails: {
        carMake: "",
        carLocation: "Select Your Location",
        initialPrice: "",
        date: "",
        currentPrice: "",
      },
      isLoading: false,
      getInfo: [],
      isModalVisible: false,
      currentInfo: {},
      selectedId: null,
      bidStatus: false,
    };
  },

  components: {
    Modal,
  },

  methods: {
    format() {
      let bidWithoutCommas = this.auctionDetails.initialPrice.replace(/,/g, "");
      if (bidWithoutCommas && /^\d+$/.test(bidWithoutCommas)) {
        let reversedBid = bidWithoutCommas.split("").reverse().join("");
        const pattern = /(\d{3})(?=\d)/g;
        let formattedBid = reversedBid.replace(pattern, "$1,");
        formattedBid = formattedBid.split("").reverse().join("");
        this.auctionDetails.initialPrice = formattedBid;
      }
    },

    async submitAuction() {
      const db = getFirestore();
      this.isLoading = true;
      try {
        const doc = await addDoc(
          collection(db, "vehicleAuction"),
          this.auctionDetails
        );
        // console.log("auction information saved to db: " + doc);
        this.auctionDetails = {
          carMake: "",
          carLocation: "Select Your Location",
          initialPrice: "",
          date: "",
        };
        this.isLoading = false;
      } catch (error) {
        console.error(error.message);
      }
    },

    async getAuctionInfo() {
      const db = getFirestore();
      const querySnapshot = await getDocs(collection(db, "vehicleAuction"));
      querySnapshot.forEach((doc) => {
        this.getInfo.push({
          id: doc.id,
          data: doc.data(),
        });
      });
    },

    showModal(id) {
      this.selectedId = id;
      this.isModalVisible = true;
      const clickedId = id;
      console.log(id);
      this.getInfo.forEach((info) => {
        if (info.id === clickedId) {
          this.currentInfo = info.data.currentPrice;
        }
      });
    },

    closeModal() {
      this.isModalVisible = false;
    },

    async submitBid() {
      const db = getFirestore();
      try {
        const auctionRef = doc(db, "vehicleAuction", this.selectedId);
        const auctionSnapshot = await getDoc(auctionRef);
        const currentPrice = auctionSnapshot.data().currentPrice;

        if (this.auctionDetails.currentPrice <= currentPrice) {
          this.bidStatus = true;
          console.log(
            "Bid rejected: The new price must be higher than the current price."
          );
          return;
        }
        this.isLoading = true;

        await updateDoc(auctionRef, {
          currentPrice: Number(this.auctionDetails.currentPrice),
        });
        this.isLoading = false;
        this.bidStatus = false;
        console.log("price updated successfully");
        setTimeout(() => {
          window.location.reload();
          // window.location.href = "/auction";
        }, 1000);
      } catch (error) {
        console.log(error.message, "currentPrice");
      }
    },
  },

  async created() {
    await this.getAuctionInfo();
    this.getInfo;
  },
};
</script>
