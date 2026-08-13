<script setup lang="ts">
import ornamenta1 from '../assets/texture/ornamenta_1.png'
import ornamenta2 from '../assets/texture/ornamenta_2.png'
import ornamenta3 from '../assets/texture/ornamenta_3.png'

withDefaults(
	defineProps<{
		position?: 'top-left' | 'mid-right' | 'bottom-right' | 'parents-right' | 'divider'
	}>(),
	{
		position: 'top-left',
	},
)
</script>

<template>
	<!-- Top Left Botanical Branch (Ornamenta 1) -->
	<div
		v-if="position === 'top-left'"
		class="pointer-events-none absolute -top-2 -left-20 sm:-left-24 z-20 w-36 sm:w-44 mix-blend-multiply opacity-90 parallax-decor"
		data-speed="0.06"
	>
		<img
			:src="ornamenta1.src"
			alt="Eucalipto acuarela"
			class="w-full h-auto object-contain -rotate-[35deg] origin-top-left -translate-x-8 -translate-y-1"
		/>
	</div>

	<!-- Mid Right Botanical Branch (Ornamenta 2) -->
	<div
		v-else-if="position === 'mid-right' || position === 'parents-right'"
		class="pointer-events-none absolute -right-2 z-20 w-36 sm:w-44 mix-blend-multiply opacity-90 parallax-decor"
		:class="position === 'parents-right' ? 'top-1/4' : 'top-1/2 -translate-y-1/2'"
		data-speed="-0.04"
	>
		<img
			:src="ornamenta2.src"
			alt="Rama eucalipto acuarela"
			class="w-full h-auto object-contain"
		/>
	</div>

	<!-- Bottom Right Botanical Branch (Ornamenta 3) -->
	<div
		v-else-if="position === 'bottom-right'"
		class="pointer-events-none absolute -right-1 bottom-16 z-20 w-36 sm:w-44 mix-blend-multiply opacity-90 parallax-decor"
		data-speed="0.05"
	>
		<img
			:src="ornamenta3.src"
			alt="Eucalipto acuarela"
			class="w-full h-auto object-contain"
		/>
	</div>

	<!-- Small Leaf Flourish Divider -->
	<div
		v-else-if="position === 'divider'"
		class="my-4 flex items-center justify-center gap-2 text-olive-500 opacity-80"
	>
		<svg class="h-4 w-12 text-olive-600" viewBox="0 0 60 16" fill="currentColor">
			<path
				d="M30 8 C22 2 12 5 2 8 C12 11 22 14 30 8 Z"
				fill="#7a9164"
				fill-opacity="0.7"
			/>
			<path
				d="M30 8 C38 2 48 5 58 8 C48 11 38 14 30 8 Z"
				fill="#7a9164"
				fill-opacity="0.7"
			/>
			<circle cx="30" cy="8" r="2.5" fill="#444f2d" />
		</svg>
	</div>
</template>
