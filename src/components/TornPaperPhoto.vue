<script setup lang="ts">
withDefaults(
	defineProps<{
		src: string
		alt?: string
		tornTop?: boolean
		tornBottom?: boolean
		paperColor?: string
		aspectRatio?: string
	}>(),
	{
		alt: 'Foto de novios',
		tornTop: true,
		tornBottom: true,
		paperColor: '#f5f2eb',
		aspectRatio: 'aspect-[3/4]',
	},
)
</script>

<template>
	<div class="relative w-full overflow-hidden">
		<!-- Main Photo -->
		<img
			:src="src"
			:alt="alt"
			:class="[aspectRatio, 'w-full object-cover shadow-sm']"
		/>

		<!-- Top Torn Paper Edge Overlay -->
		<div
			v-if="tornTop"
			class="pointer-events-none absolute top-0 left-0 right-0 z-10 w-full leading-none torn-edge-top"
		>
			<svg
				class="block w-full h-8 sm:h-12"
				viewBox="0 0 1000 50"
				preserveAspectRatio="none"
				fill="none"
			>
				<!-- Paper edge with organic jagged rip path -->
				<path
					d="M0,0 H1000 V28 C960,42 925,12 875,34 C825,48 780,16 730,36 C675,48 625,14 570,38 C520,18 475,46 420,24 C370,42 315,10 260,34 C205,48 150,18 90,40 L0,22 Z"
					:fill="paperColor"
				/>
				<!-- Inner torn paper shadow / fiber line -->
				<path
					d="M0,22 C90,40 150,18 205,48 C260,34 315,10 370,42 C420,24 475,46 570,38 C625,14 675,48 730,36 C780,16 825,48 875,34 C925,12 960,42 1000,28"
					stroke="rgba(0,0,0,0.12)"
					stroke-width="1.5"
					fill="none"
				/>
			</svg>
		</div>

		<!-- Bottom Torn Paper Edge Overlay -->
		<div
			v-if="tornBottom"
			class="pointer-events-none absolute bottom-0 left-0 right-0 z-10 w-full leading-none torn-edge-bottom"
		>
			<svg
				class="block w-full h-8 sm:h-12"
				viewBox="0 0 1000 50"
				preserveAspectRatio="none"
				fill="none"
			>
				<!-- Paper edge with organic jagged rip path -->
				<path
					d="M0,50 H1000 V22 C950,10 910,40 855,16 C800,42 755,12 700,32 C645,8 590,40 535,18 C480,44 430,12 375,34 C320,10 270,42 215,18 C155,42 100,12 0,30 Z"
					:fill="paperColor"
				/>
				<!-- Inner torn paper shadow / fiber line -->
				<path
					d="M0,30 C100,12 155,42 215,18 C270,42 320,10 375,34 C430,12 480,44 535,18 C590,40 645,8 700,32 C755,12 800,42 855,16 C910,40 950,10 1000,22"
					stroke="rgba(0,0,0,0.12)"
					stroke-width="1.5"
					fill="none"
				/>
			</svg>
		</div>
	</div>
</template>
