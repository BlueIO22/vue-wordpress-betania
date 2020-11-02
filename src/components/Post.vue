<template>
  <div>
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
p >>> img {
  border: 1px solid black;
}

p >>> ul {
  display: inline;
  list-style: none;
}

p >>> ul li {
  display:inline;
}
</style>