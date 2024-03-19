<template>
  <form class="container mx-auto py-10">
    <h1 class="text-3xl py-8">Car Information</h1>
    <div class="grid md:grid-cols-2 md:gap-6">
      <div class="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="Car Make"
          id="Car Make"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-onyx peer"
          placeholder=" "
          v-model="carMake"
          required
        />
        <label
          for="Car Make"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-onyx peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Car Make</label
        >
      </div>
      <div class="relative z-0 w-full mb-5 group">
        <input
          type="number"
          name="year"
          id="year"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-onyx peer"
          placeholder=" "
          required
          v-model="year"
        />
        <label
          for="year"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-onyx peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Year</label
        >
      </div>
    </div>

    <div class="grid md:grid-cols-2 md:gap-6">
      <div class="relative z-0 w-full mb-5 group">
        <input
          type="number"
          name="VIN"
          id="Vin"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-onyx peer"
          placeholder=" "
          required
          v-model="vin"
        />
        <label
          for="VIN"
          class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-onyx peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >VIN</label
        >
      </div>
      <div class="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="location"
          id="location"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-onyx peer"
          placeholder=" "
          required
          v-model="location"
        />
        <label
          for="VIN"
          class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-onyx peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Location</label
        >
      </div>
    </div>

    <div class="grid md:grid-cols-2 md:gap-6">
      <div class="relative z-0 w-full mb-5 group">
        <input
          type="number"
          name="Current Bid"
          id="Current Bid"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-onyx peer"
          placeholder=""
          required
          v-model="currentBid"
          @input="splitCurrentBid"
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
          v-model="carModel"
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
          v-model="phoneNumber"
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
          class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-platinum  focus:outline-none "
          aria-describedby="Car Image"
          id="Car Image"
          type="file"
          ref="file"
          multiple="true"
          @change="uploadFile()"
        />
        <div
          class="mt-1 text-sm text-gray-500"
          id="Car Image"
        >
          Upload Front, Left, Right & Back of your car
        </div>
      </div>
    </div>
    <button
      type="submit"
      class="text-white bg-platinum-80 hover:bg-platinum-20 focus:ring-4 focus:outline-none focus:ring-platinum-30 font-medium rounded-lg text-sm px-5 py-2.5"
    >
      Submit
    </button>
  </form>
</template>

<script>
export default {
    name: "Product Form",
    data(){
        return {
            carMake: "",
            carModel: "",
            location: "",
            year: "",
            currentBid: "",
            phoneNumber: "",
            images: null,
            vin: "",
        }
    },
    methods: {
        uploadFile(){
            this.images = this.$refs.file.files[0]
            console.log("Form Data:", this.$data)
        },
        splitCurrentBid() {
      }
    }
    
}
</script>
