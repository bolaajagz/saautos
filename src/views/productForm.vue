<template>
  <form class="container mx-auto py-10" @submit.prevent="submitForm">
    <h1 class="text-3xl py-8">Car Information</h1>
    <div class="grid md:grid-cols-2 md:gap-6">
      <div class="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="Car Make"
          id="Car Make"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-onyx peer"
          placeholder=" "
          v-model="vehicleDetails.carMake"
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
          v-model="vehicleDetails.year"
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
          v-model="vehicleDetails.vin"
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
          v-model="vehicleDetails.location"
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
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default {
  name: "Product Form",
  data() {
    return {
      vehicleDetails: {
        carMake: "Toyota",
        carModel: "Corolla",
        location: "lagos",
        year: "2014",
        currentBid: "20000000",
        phoneNumber: "0803-000-0000",
        images: [""],
        vin: "",
        uid: null,
      },
      selectedFile: [""],
      getVehicleInfo: [],
      isLoading: false,
    };
  },
  methods: {
    async submitForm() {
      const db = getFirestore();
      const storage = getStorage();
      this.vehicleDetails.uid = this.uid;
      this.isLoading = true;
      try {
        // Add vehicleDetails to Firestore Database
        const docRef = await addDoc(
          collection(db, "vehicleDetails"),
          this.vehicleDetails
        );

        console.log("Document added with ID: ", docRef.id);

        // Upload file to Firebase Storage if selectedFile exists
        // if (this.selectedFile) {
        //   const storageRef = ref(storage, `files/${this.selectedFile.name}`);
        //   await uploadBytes(storageRef, this.selectedFile);

        //   const downloadURL = await getDownloadURL(storageRef);
        //   console.log(downloadURL);

        //   // Store download URL in Firestore Database
        //   const vehicleDetailsRef = collection(db, "vehicleDetails");
        //   const querySnapshot = await getDocs(vehicleDetailsRef);

        //   querySnapshot.forEach(async (doc) => {
        //     const data = doc.data();
        //     if (data.vin === this.vehicleDetails.vin) {
        //       const vehicleDetailsDocRef = doc.ref;
        //       await updateDoc(vehicleDetailsDocRef, { images: downloadURL });
        //     }
        if (this.selectedFile && this.selectedFile.length > 0) {
          const urlList = [];

          for (const file of this.selectedFile) {
            const storageRef = ref(storage, `files/${file.name}`);
            await uploadBytes(storageRef, file);
            const downloadURL = await getDownloadURL(storageRef);
            urlList.push(downloadURL);
          }

          const vehicleDetailsRef = collection(db, "vehicleDetails");
          const querySnapshot = await getDocs(vehicleDetailsRef);

          querySnapshot.forEach(async (doc) => {
            const data = doc.data();
            if (data.vin === this.vehicleDetails.vin) {
              const vehicleDetailsDocRef = doc.ref;

              // Append all download URLs to the existing images array
              await updateDoc(vehicleDetailsDocRef, {
                images: [...data.images, ...urlList],
              });
            }
          });
          alert("File uploaded successfully");
          // Reset form
          this.vehicleDetails = {
            carMake: "",
            carModel: "",
            location: "",
            year: "",
            currentBid: "",
            phoneNumber: "",
            images: "",
            vin: "",
            uid: this.vehicleDetails.uid,
          };

          this.isLoading = false;
        } else {
          alert("No file selected for upload");
        }
        if (this.isChecked) {
          console.log("true");
        } else {
          console.log("false");
        }
      } catch (error) {
        console.error(
          "Error adding document or uploading file: " + error.message
        );
      }
    },

    uploadFile(e) {
      this.selectedFile = e.target.files;
      console.log("uploaded :", this.selectedFile);
    },

    // async getVehicle() {
    //   const db = getFirestore();

    //   const docRef = doc(db, "vehicleDetails", "aAkPFqKRyZMBgNVRFfwZ");
    //   const docSnap = await getDoc(docRef);
    //   if (docSnap.exists()) {
    //     console.log("Document data:", docSnap.data());
    //   } else {
    //     console.log("No such document!");
    //   }
    // },

    // async getVehicleDetailz() {
    //   const db = getFirestore();
    //   const querySnapshot = await getDocs(collection(db, "vehicleDetails"));
    //   querySnapshot.forEach((doc) => {
    //     // console.log("Document ID:", doc.id);
    //     // console.log("Document data:", doc.data());
    //     // this.getVehicleInfo = doc.data();
    //     // console.log(this.getVehicleInfo);
    //     this.getVehicleInfo.push({
    //       id: doc.id,
    //       data: doc.data(),
    //     });
    //   });
    // },

    splitCurrentBid() {
      let bidWithoutCommas = this.vehicleDetails.currentBid.replace(/,/g, "");
      if (bidWithoutCommas && /^\d+$/.test(bidWithoutCommas)) {
        let reversedBid = bidWithoutCommas.split("").reverse().join("");
        const pattern = /(\d{3})(?=\d)/g;
        let formattedBid = reversedBid.replace(pattern, "$1,");
        formattedBid = formattedBid.split("").reverse().join("");
        this.vehicleDetails.currentBid = formattedBid;
      }
    },
  },
  async created() {
    const auth = getAuth();
    // await this.getVehicle();
    // await this.getVehicleDetailz();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.uid = user.uid;
        console.log(this.uid);
      } else {
        console.log("User is signed out");
      }
    });
  },
};
</script>
