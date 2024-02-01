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
.blogsContainer {
  width: calc(100% - 39px);
  height: 100vh;
  margin: 24px;
  margin-top: 155px;
  background-color: black;
}
.blogsContainer li {
  list-style-type: none;
}
</style>
