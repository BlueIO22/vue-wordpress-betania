<template>
  <div style="width: 100%">
    <h2 v-html="post.title" />
    <div v-html="post.excerpt" />
    <p v-html="post.content"></p>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
<style scoped>
p {
  width: 100%;
}
</style>