<script setup lang="ts">
import FoliageDecor from './FoliageDecor.vue'
import footerPhoto from '../assets/photos/footer_photo_transparent.png'
</script>

<template>
	<section id="adults-only" class="relative bg-paper pt-8 pb-0 text-center text-olive-900 overflow-hidden reveal-on-scroll">
		<div class="relative z-10 px-6 sm:px-10 max-w-sm mx-auto">
			<!-- Foliage Divider & Closing Message -->
			<FoliageDecor position="divider" />
			<p class="mt-3 font-serif text-xs sm:text-sm tracking-[0.25em] uppercase text-olive-800 font-normal leading-relaxed">
				ESPERAMOS CELEBRAR CON USTEDES
			</p>
		</div>

		<!-- Bottom Photo -->
		<div class="mt-8 w-full">
			<img
				:src="footerPhoto.src"
				alt="Grecia y Alfredo celebrando"
				class="w-full object-cover shadow-sm"
			/>
		</div>
	</section>
</template>
