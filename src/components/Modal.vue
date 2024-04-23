<template>
  <div
    class="absolute inset-x-0 inset-y-0 flex justify-center items-center z-10"
  >
    <div
      class="flex flex-col justify-between items-center gap-4 bg-white shadow-xl p-6 rounded-xl"
    >
      <header class="w-full flex items-center justify-between border-t-[#fff]">
        <slot name="header">Modal</slot>
        <button type="button" class="btn-close" @click="close">
          <i class="zmdi zmdi-close"></i>
        </button>
      </header>

      <section class="modal-body flex flex-col">
        <slot name="body">Body</slot>
      </section>

      <footer class="flex p-4">
        <slot name="footer"> Footer </slot>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
