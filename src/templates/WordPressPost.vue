<template>
  <Layout>
      <template>
        {{title}}
      </template>
  </Layout>
</template>

<page-query>
query wordPressPage ($id: ID!) {
  wordPressPage(id: $id) {
     title
  }
}
</page-query>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.title
    }
  }
}
</script>

<style>
  ul.list {
    list-style: none;
    padding: 0;
  }
  ul.list li {
    display: inline;
    margin-right: 0.25em;
  }
  ul.list.tags li a {
    padding: 0.25em 0.5em;
    background-color: lightgray;
  }
  ul.list.categories li:after {
    content: ',';
    display: inline;
  }
  ul.list li:last-child:after {
    content: '';
  }
</style>
