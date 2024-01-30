<script setup>
    import { ref, defineProps, computed } from 'vue';

    const props = defineProps({
        blogDetails: {
            id: {
                type: Number,
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            date: {
                type: Date,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
            tags: {
                type: Array,
                required: true,
            },
            author: {
                type: String,
                required: true,
            }
        }
    })

    // Computed refs to reactively update images when prop.blogDetails changes
    // One needs to prepend the vite.config.js > defineConfig > base
    // value to the path of a dynamic image using the
    // computed() function to make this work properly.
    
    const blogHeaderImagePath = computed(() => {
        const author = props.blogDetails.author.replace(' ', '');
        const article = props.blogDetails.id.toString();
        return `/fem_blog-preview-card/src/assets/images/${author}/articles/${article}/image-header.svg`;
    })
    const blogAuthorImagePath = computed(() => {
        const authorImageName = props.blogDetails.author.replace(' ', '');
        return `/fem_blog-preview-card/src/assets/images/${authorImageName}/image-author.webp`;
    })
</script>

<template>
  <div class="blogItem">
    <img class="blogImage" :src="blogHeaderImagePath" alt="">
    <ul class="tags">
        <li v-for="tag in blogDetails.tags">
            <strong>{{ tag }}</strong>
        </li>
    </ul>
    <div class="date">Published {{ new Date().toLocaleDateString('en-us') /*blogDetails.date.toLocaleDateString('en-us')*/ }}</div>
    <h1 class="name">{{ blogDetails.name }}</h1>
    <p class="description">{{ blogDetails.description }}</p>
    <div class="author">
        <img :src="blogAuthorImagePath" :alt="'Profile image for ' + props.blogDetails.author" >
        <strong>{{ blogDetails.author }}</strong>
    </div>
  </div>
</template>

<style>

</style>
