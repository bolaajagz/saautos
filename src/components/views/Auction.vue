<template>
  <div>
    <p>Auction For Today</p>
  </div>

  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
      <thead class="text-xs text-white uppercase bg-[#3f403f]">
        <tr>
          <th scope="col" class="px-6 py-3">Car Make</th>
          <th scope="col" class="px-6 py-3">Time</th>
          <th scope="col" class="px-6 py-3">Location</th>
          <th scope="col" class="px-6 py-3">Initial Price</th>
          <th scope="col" class="px-6 py-3">
            <span class="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-[#e6e8e6] border-b hover:bg-gray-50">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-black whitespace-nowrap"
          >
            Apple MacBook Pro 17"
          </th>
          <td class="px-6 py-4 text-black">Silver</td>
          <td class="px-6 py-4 text-black">Laptop</td>
          <td class="px-6 py-4 text-black">₦2999</td>
          <td class="px-6 py-4 text-right">
            <button
              href="#"
              class="font-medium text-white bg-platinum-80 focus:ring-4 focus:outline-none focus:ring-platinum-30 rounded-lg text-sm px-5 py-2.5 hover:underline"
            >
              Place Bid
            </button>
          </td>
        </tr>
        <tr class="bg-[#fff] border-b hover:bg-gray-50">
          <th
            scope="row"
            class="px-6 py-4 font-medium whitespace-nowrap text-black"
          >
            Microsoft Surface Pro
          </th>
          <td class="px-6 py-4 text-black">White</td>
          <td class="px-6 py-4 text-black">Laptop</td>
          <td class="px-6 py-4 text-black">₦1999</td>
          <td class="px-6 py-4 text-right">
            <button
              href="#"
              class="font-medium text-white bg-platinum-80 focus:ring-4 focus:outline-none focus:ring-platinum-30 rounded-lg text-sm px-5 py-2.5 hover:underline"
            >
              Place Bid
            </button>
          </td>
        </tr>
        <tr class="bg-[#e6e8e6] hover:bg-gray-50">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-black whitespace-nowrap"
          >
            Magic Mouse 2
          </th>
          <td class="px-6 py-4 text-black">Black</td>
          <td class="px-6 py-4 text-black">Accessories</td>
          <td class="px-6 py-4 text-black">₦199</td>
          <td class="px-6 py-4 text-right">
            <button
              href="#"
              class="font-medium text-white bg-platinum-80 focus:ring-4 focus:outline-none focus:ring-platinum-30 rounded-lg text-sm px-5 py-2.5 hover:underline"
            >
              Place Bid
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <form class="container mx-auto py-10">
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
        <select v-model="auctionDetails.carLocation"   class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-onyx peer">
          <option disabled>Select Your Location</option>
          <option :value="state.name" v-for="state in nigeriaStates">
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
          type="number"
          name="Initial Price"
          id="Initial Price"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-onyx peer"
          placeholder=" "
          required
          v-model="auctionDetails.initialPrice"
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

    <!-- <div class="grid md:grid-cols-2 md:gap-6">
      <div class="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="Current Bid"
          id="Current Bid"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-onyx peer"
          placeholder=""
          required
          v-model="vehicleDetails.currentBid"
          @input="splitCurrentBid()"
        />
        <label
          for="Current Bid"
          class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-onyx peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Current Bid(₦)</label
        >
      </div>

      <div class="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="Car Model"
          id="Car Model"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-onyx peer"
          placeholder=" "
          required
          v-model="vehicleDetails.carModel"
        />
        <label
          for="Car Model"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-onyx peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Car Model</label
        >
      </div>
    </div>

    <div class="grid md:grid-cols-2 md:gap-6">
      <div class="relative z-0 w-full mb-5 group">
        <input
          type="tel"
          pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}"
          name="phoneNumber"
          id="phoneNumber"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-oynx peer"
          placeholder=" "
          required
          v-model="vehicleDetails.phoneNumber"
        />
        <label
          for="floating_phone"
          class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-onyx peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Phone number (0803-000-0000)</label
        >
      </div>

      <div class="relative z-0 w-full mb-5 group">
        <label
          class="block mb-2 text-sm font-medium text-gray-900"
          for="Car Image"
          >Upload file</label
        >
        <input
          class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-platinum focus:outline-none"
          aria-describedby="Car Image"
          id="Car Image"
          type="file"
          ref="file"
          multiple
          @change="uploadFile"
        />
        <div class="mt-1 text-sm text-gray-500" id="Car Image">
          Upload Front, Left, Right & Back of your car
        </div>
      </div>

    </div> -->
    <button
      type="submit"
      class="text-white bg-platinum-80 hover:bg-platinum-20 focus:ring-4 focus:outline-none focus:ring-platinum-30 font-medium rounded-lg text-sm px-5 py-2.5"
    >
      <marquee v-if="isLoading" class="cursor-progress">Loading......</marquee> 
      <span v-else class="cursor-pointer">Submit</span> 
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      nigeriaStates: [
        { id: 1, name: "Abia" },
        { id: 2, name: "Adamawa" },
        { id: 3, name: "Akwa Ibom" },
        { id: 4, name: "Anambra" },
        { id: 5, name: "Bauchi" },
        { id: 6, name: "Bayelsa" },
        { id: 7, name: "Benue" },
        { id: 8, name: "Borno" },
        { id: 9, name: "Cross River" },
        { id: 10, name: "Delta" },
        { id: 11, name: "Ebonyi" },
        { id: 12, name: "Edo" },
        { id: 13, name: "Ekiti" },
        { id: 14, name: "Enugu" },
        { id: 15, name: "FCT (Abuja)" },
        { id: 16, name: "Gombe" },
        { id: 17, name: "Imo" },
        { id: 18, name: "Jigawa" },
        { id: 19, name: "Kaduna" },
        { id: 20, name: "Kano" },
        { id: 21, name: "Katsina" },
        { id: 22, name: "Kebbi" },
        { id: 23, name: "Kogi" },
        { id: 24, name: "Kwara" },
        { id: 25, name: "Lagos" },
        { id: 26, name: "Nasarawa" },
        { id: 27, name: "Niger" },
        { id: 28, name: "Ogun" },
        { id: 29, name: "Ondo" },
        { id: 30, name: "Osun" },
        { id: 31, name: "Oyo" },
        { id: 32, name: "Plateau" },
        { id: 33, name: "Rivers" },
        { id: 34, name: "Sokoto" },
        { id: 35, name: "Taraba" },
        { id: 36, name: "Yobe" },
        { id: 37, name: "Zamfara" },
      ],
      selected: "Select Your Location",
      auctionDetails: {
        carMake: "",
        carLocation: "Select Your Location",
        initialPrice: "",
        date: "",
      },
      isLoading:false
    };
  },
  methods: {
  },
};
</script>
