<script setup lang="ts">
import photo from '../assets/photos/DSC_0208.JPG.webp'
</script>

<template>
	<img
		:src="photo.src"
		alt="Grecia y Alfredo"
		class="aspect-[3/4] w-full object-cover sm:aspect-[4/5]"
		loading="lazy"
	/>
</template>