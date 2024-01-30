<script setup>
  import blogs from './data/blogs'
  import blogPreviewItem from './components/blogPreviewItem.vue';
</script>

<template>
  <div class="blogsContainer">
    <ul>
      <li v-for="blog in blogs">
        <blogPreviewItem :blogDetails="blog" />
      </li>
    </ul>

  </div>
</template>

<style>

</style>
