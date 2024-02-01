<script setup>
  import blogs from './data/blogs'
  import blogPreviewItem from './components/blogPreviewItem.vue';
</script>

<template>
  <div class="blogsContainer" aria-label="An app that has multiple articles about web development">
    <ul class="blogsContainerList" role="none">
      <li class="blogsContainerItem" v-for="blog in blogs" role="none">
        <blogPreviewItem :blogDetails="blog" aria-label="A blog article" />
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
