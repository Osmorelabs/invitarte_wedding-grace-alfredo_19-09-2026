<script setup lang="ts">
import ornamenta1 from '../assets/texture/ornamenta_1.png'
import ornamenta2 from '../assets/texture/ornamenta_2.png'
import ornamenta3 from '../assets/texture/ornamenta_3.png'

withDefaults(
	defineProps<{
		position?: 'top-left' | 'top-right' | 'mid-right' | 'bottom-right' | 'parents-right' | 'parents-left' | 'mid-left' | 'bottom-left' | 'divider'
	}>(),
	{
		position: 'top-left',
	},
)
</script>

<template>
	<!-- Top Botanical Branch (Ornamenta 1) -->
	<div
		v-if="position === 'top-left' || position === 'top-right'"
		class="pointer-events-none absolute -top-3 z-30 w-36 sm:w-44 mix-blend-multiply opacity-90 parallax-decor"
		:class="position === 'top-right' ? '-right-10 sm:-right-14' : '-left-10 sm:-left-14'"
		data-speed="0.06"
	>
		<img
			:src="ornamenta1.src"
			alt="Eucalipto acuarela inicio"
			class="w-full h-auto object-contain"
			:class="position === 'top-right' ? 'rotate-[45deg] origin-top-right translate-x-2 -translate-y-1 -scale-x-100' : '-rotate-[45deg] origin-top-left -translate-x-2 -translate-y-1'"
			style="filter: sepia(0.2) hue-rotate(8deg) saturate(0.9) opacity(0.88);"
		/>
	</div>

	<!-- Side Botanical Branch (Ornamenta 2) -->
	<div
		v-else-if="position === 'mid-right' || position === 'parents-right' || position === 'mid-left' || position === 'parents-left'"
		class="pointer-events-none absolute z-30 mix-blend-multiply opacity-90 parallax-decor"
		:class="[
			position === 'mid-right' ? '-right-32 sm:-right-44 top-[-12rem] sm:top-[-15rem] w-64 sm:w-84' :
			position === 'parents-left' ? '-left-32 sm:-left-44 top-[64%] w-64 sm:w-84' :
			(position.endsWith('-right') ? '-right-16 sm:-right-24' : '-left-16 sm:-left-24') + ' w-48 sm:w-60 ' + (position.startsWith('parents') ? 'top-[58%]' : 'top-1/2 -translate-y-1/2')
		]"
		data-speed="-0.04"
	>
		<img
			:src="ornamenta2.src"
			alt="Eucalipto costado 2"
			class="w-full h-auto object-contain origin-center"
			:class="[
				position === 'mid-right' ? '-rotate-[10deg]' :
				position === 'parents-left' ? '-scale-x-100 rotate-[10deg]' :
				(position.endsWith('-right') ? 'rotate-[2deg]' : '-scale-x-100 rotate-[2deg]')
			]"
			style="filter: sepia(0.3) hue-rotate(12deg) saturate(0.82) opacity(0.85);"
		/>
	</div>

	<!-- Bottom Botanical Branch (Ornamenta 3) -->
	<div
		v-else-if="position === 'bottom-right' || position === 'bottom-left'"
		class="pointer-events-none absolute top-1/2 -translate-y-1/2 z-30 w-48 sm:w-60 mix-blend-multiply opacity-90 parallax-decor"
		:class="position === 'bottom-right' ? '-right-12 sm:-right-16' : '-left-12 sm:-left-16'"
		data-speed="0.05"
	>
		<img
			:src="ornamenta3.src"
			alt="Eucalipto costado 3"
			class="w-full h-auto object-contain"
			:class="position === 'bottom-left' ? '-scale-x-100' : ''"
			style="filter: sepia(0.3) hue-rotate(12deg) saturate(0.82) opacity(0.85);"
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
