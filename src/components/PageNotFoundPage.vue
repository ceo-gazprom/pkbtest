<template>

    <div class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Page not found!</strong> {{url}}
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

</template>
<script>
export default {
  data() {
    return {
      url: null
    };
  },
  mounted() {
    this.url = document.URL;
  }
}
</script>