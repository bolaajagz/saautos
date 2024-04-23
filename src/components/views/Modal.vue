<template>
  <div class="fixed flex justify-center items-center z-10">
    <div class="flex flex-column">
      <header class="relative flex">
        <slot name="header"> Modal</slot>
        <button type="button" class="btn-close" @click="close">x</button>
      </header>

      <section class="modal-body">
        <slot name="body"> Body </slot>
      </section>

      <footer class="flex">
        <slot name="footer"> Footer </slot>
        <button type="button" class="btn-green" @click="close">
          Close Modal
        </button>
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
