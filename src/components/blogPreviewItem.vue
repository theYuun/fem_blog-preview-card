<script setup>
    import { ref, defineProps, computed, watch } from 'vue';

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

    const authorImageName = props.blogDetails.author.replace(' ', '');
    
    // I attempted to create a function that will return
    // the file based on differing extensions, but the
    // methods I found were not forthcoming.
    // const imageExtensions = ['webp', 'jpeg', 'jpg', 'png', 'svg', 'bmp'];
    
    // Computed refs to reactively update images when prop.blogDetails changes
    // One needs to prepend the vite.config.js > defineConfig > base
    // value to the path of a dynamic image using the
    // computed() function to make this work properly.
    const blogHeaderImagePath = computed( () => {
        const articleID = props.blogDetails.id.toString();
        return `/fem_blog-preview-card/public/images/${authorImageName}/articles/${articleID}/image-header.svg`;
    })
    const blogAuthorImagePath = computed(() => {
        return `/fem_blog-preview-card/public/images/${authorImageName}/image-author.webp`;
    })

    const getMonth = (() => {
        const monthFromData = props.blogDetails.date.getMonth();
        const monthNamesShortened = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        console.log(monthFromData + ': ' + monthNamesShortened[monthFromData]);
        return monthNamesShortened[monthFromData];
    })
</script>

<template>
  <div class="blogItem">
    <div class="blogImage">
        <img :src="blogHeaderImagePath" alt="">
    </div>
    <ul class="tags">
        <li v-for="tag in blogDetails.tags">
            <strong>{{ tag }}</strong>
        </li>
    </ul>
    <div class="date"><strong>Published {{ blogDetails.date.getDate() + ' ' + getMonth() + ' ' + blogDetails.date.getFullYear() /*blogDetails.date.toLocaleDateString('en-us')*/ }}</strong></div>
    <h1 class="name">{{ blogDetails.name }}</h1>
    <p class="description">{{ blogDetails.description }}</p>
    <div class="author">
        <img :src="blogAuthorImagePath" :alt="'Profile image for ' + props.blogDetails.author" >
        <strong>{{ blogDetails.author }}</strong>
    </div>
  </div>
</template>

<style>
.blogItem {
    background-color: #fff;
    border-radius: 20px;
    border: 1px solid var(--black);
    box-shadow: 8px 8px 0 0 var(--black);
    padding: 22px;
    max-width: 282px;
}

.blogImage {
    border-radius: 12px;
    overflow: hidden;
    height: 200px;
}
.blogImage img {
    margin-left: -28px;
    height: 202px;
}

.tags {
    font-size: 12px;
    margin-top: 26px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;
}
.tags li {
    padding: 5px 13px;
    background-color: var(--yellow);
    border-radius: 5px;
}

.date {
    margin-top: 14px;
    font-size: 12px;
}

.name {
    margin-top: 17px;
    font-size: 20px;
    letter-spacing: 0.1px;
}

.description {
    margin-top: 15px;
    font-size: 14px;
    letter-spacing: 0.1px;
    line-height: 21px;
}

.author {
    margin-top: 22px;
    display: flex;
    flex-direction: row;
    align-content: center;
    gap: 10px;
    font-size: 14px;
    letter-spacing: 0.1px;
}
.author img {
    margin: 2px;
    width: 31px;
}
.author strong {
    margin: auto 0;
    height: 16px;
}

@media only screen and (min-width: 375px) {
    
    .blogItem {
        max-width: 340px;
    }
    
    .blogImage img {
        margin-left: 0px;
    }

    .tags {
        font-size: 14px;
        letter-spacing: 0.2px;
        margin-top: 26px;
        display: flex;
        flex-direction: row;
        gap: 10px;
        flex-wrap: wrap;
    }

    .date {
        margin-top: 14px;
        font-size: 14px;
    }

    .name {
        margin-top: 18px;
        font-size: 25px;
        letter-spacing: -0.3px;
    }

    .description {
        margin-top: 18px;
        font-size: 16px;
        letter-spacing: 0.1px;
        line-height: 23px;
    }

    .author {
        margin-top: 22px;
        display: flex;
        flex-direction: row;
        align-content: center;
        gap: 10px;
        font-size: 14px;
        letter-spacing: 0.1px;
    }
    .author img {
        margin: 2px;
        width: 31px;
    }
    .author strong {
        margin: auto 0;
        height: 16px;
    }
}
</style>
