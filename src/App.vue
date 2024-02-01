<script setup>
  import blogs from './data/blogs'
  import blogPreviewItem from './components/blogPreviewItem.vue';
</script>

<template>
  <div class="blogsContainer">
    <ul class="blogsContainerList">
      <li class="blogsContainerItem" v-for="blog in blogs">
        <blogPreviewItem :blogDetails="blog" />
      </li>
    </ul>

  </div>
</template>

<style>
.blogsContainer {
  margin: 24px;
  margin-top: 155px;
  display: flex;
  flex-direction: column;
}

.blogsContainerList {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

@media only screen and (min-width: 375px) {
  .blogsContainer {
    flex-direction: row;
    margin-top: 220px;
  }
  .blogsContainerList {
    margin: auto;
  }
}
</style>
