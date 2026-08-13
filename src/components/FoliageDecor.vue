<script setup lang="ts">
withDefaults(
	defineProps<{
		position?: 'top-left' | 'mid-right' | 'bottom-left' | 'divider'
	}>(),
	{
		position: 'top-left',
	},
)
</script>

<template>
	<!-- Top Left Botanical Branch -->
	<div
		v-if="position === 'top-left'"
		class="pointer-events-none absolute -top-2 -left-2 z-20 w-44 sm:w-56 opacity-90 parallax-decor"
		data-speed="0.08"
	>
		<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M10 10 Q50 60 120 100 Q160 125 190 140"
				stroke="#6b7c59"
				stroke-width="2.5"
				stroke-linecap="round"
			/>
			<!-- Leaves along main stem -->
			<path
				d="M30 35 C15 15 5 40 25 45 C40 48 42 28 30 35 Z"
				fill="#8aa075"
				fill-opacity="0.85"
			/>
			<path
				d="M45 50 C65 30 75 55 55 60 C40 63 38 43 45 50 Z"
				fill="#7a9164"
				fill-opacity="0.85"
			/>
			<path
				d="M65 65 C45 50 35 75 55 80 C70 83 72 63 65 65 Z"
				fill="#9ab085"
				fill-opacity="0.8"
			/>
			<path
				d="M85 80 C105 60 115 85 95 90 C80 93 78 73 85 80 Z"
				fill="#6b7c59"
				fill-opacity="0.9"
			/>
			<path
				d="M110 95 C90 80 80 105 100 110 C115 113 117 93 110 95 Z"
				fill="#8aa075"
				fill-opacity="0.85"
			/>
			<path
				d="M135 110 C155 90 165 115 145 120 C130 123 128 103 135 110 Z"
				fill="#7a9164"
				fill-opacity="0.8"
			/>
			<path
				d="M160 125 C145 110 135 135 152 138 C165 140 168 120 160 125 Z"
				fill="#9ab085"
				fill-opacity="0.85"
			/>

			<!-- Secondary small branch -->
			<path
				d="M65 65 Q95 40 130 35"
				stroke="#6b7c59"
				stroke-width="1.8"
				stroke-linecap="round"
			/>
			<path
				d="M85 52 C75 35 90 30 95 42 C98 50 88 56 85 52 Z"
				fill="#8aa075"
				fill-opacity="0.8"
			/>
			<path
				d="M110 42 C105 25 120 22 122 34 C124 42 114 46 110 42 Z"
				fill="#9ab085"
				fill-opacity="0.75"
			/>
		</svg>
	</div>

	<!-- Mid Right Botanical Branch -->
	<div
		v-else-if="position === 'mid-right'"
		class="pointer-events-none absolute top-1/2 -right-4 z-20 w-40 sm:w-48 -translate-y-1/2 opacity-90"
	>
		<svg viewBox="0 0 160 220" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M150 10 Q100 80 50 150 Q20 180 10 210"
				stroke="#6b7c59"
				stroke-width="2.2"
				stroke-linecap="round"
			/>
			<path
				d="M130 40 C145 20 155 45 135 50 C120 53 118 33 130 40 Z"
				fill="#8aa075"
				fill-opacity="0.8"
			/>
			<path
				d="M110 65 C90 50 80 75 100 80 C115 83 117 63 110 65 Z"
				fill="#7a9164"
				fill-opacity="0.85"
			/>
			<path
				d="M85 100 C105 85 115 110 95 115 C80 118 78 98 85 100 Z"
				fill="#9ab085"
				fill-opacity="0.8"
			/>
			<path
				d="M65 130 C45 115 35 140 55 145 C70 148 72 128 65 130 Z"
				fill="#6b7c59"
				fill-opacity="0.9"
			/>
			<path
				d="M40 160 C60 145 70 170 50 175 C35 178 33 158 40 160 Z"
				fill="#8aa075"
				fill-opacity="0.8"
			/>
		</svg>
	</div>

	<!-- Bottom Left Botanical Branch -->
	<div
		v-else-if="position === 'bottom-left'"
		class="pointer-events-none absolute bottom-12 -left-4 z-20 w-44 sm:w-52 opacity-90"
	>
		<svg viewBox="0 0 180 200" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M10 190 Q50 130 110 80 Q145 50 170 30"
				stroke="#6b7c59"
				stroke-width="2.2"
				stroke-linecap="round"
			/>
			<path
				d="M30 160 C15 140 38 135 45 148 C50 156 38 165 30 160 Z"
				fill="#8aa075"
				fill-opacity="0.85"
			/>
			<path
				d="M60 130 C75 110 85 135 65 140 C50 143 48 123 60 130 Z"
				fill="#7a9164"
				fill-opacity="0.8"
			/>
			<path
				d="M85 100 C65 85 55 110 75 115 C90 118 92 98 85 100 Z"
				fill="#9ab085"
				fill-opacity="0.85"
			/>
			<path
				d="M120 75 C140 55 150 80 130 85 C115 88 113 68 120 75 Z"
				fill="#6b7c59"
				fill-opacity="0.85"
			/>
		</svg>
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
