<script setup lang="ts">
import FoliageDecor from './FoliageDecor.vue'
import greenTexture from '../assets/texture/green_paper_texture.webp'

const items = [
	{
		time: '09:00 AM',
		label: 'Bienvenida de invitados en iglesia',
		icon: 'welcome',
	},
	{
		time: '09:30 AM',
		label: 'Ceremonia religiosa',
		icon: 'church',
	},
	{
		time: '12:00 PM',
		label: 'Recepción de invitados',
		icon: 'reception',
	},
]
</script>

<template>
	<section id="itinerary" class="relative bg-paper px-6 py-10 text-center reveal-on-scroll">
		<!-- Right Side Foliage Branch (Ornamenta 2) -->
		<FoliageDecor position="mid-right" />
		<div class="mx-auto max-w-md">
			<h2 class="font-serif text-base sm:text-lg tracking-[0.3em] uppercase text-olive-800 font-medium">
				ITINERARIO DE ACTIVIDADES
			</h2>

			<!-- Green Texture Container -->
			<div
				class="relative mt-6 overflow-hidden rounded-3xl bg-green-texture bg-cover bg-center p-6 sm:p-8 shadow-md border border-olive-900/40 text-beige-100"
				:style="{ backgroundImage: `url(${greenTexture.src || greenTexture})` }"
			>
				<div class="relative z-10 flex flex-col gap-6">
					<div
						v-for="item in items"
						:key="item.time"
						class="flex items-center gap-4 text-left"
					>
						<!-- Activity Icon -->
						<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-beige-100 border border-white/20 shadow-xs backdrop-blur-xs">
							<!-- Welcome / People -->
							<svg v-if="item.icon === 'welcome'" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
								<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
								<circle cx="9" cy="7" r="4" />
								<path d="M23 21v-2a4 4 0 00-3-3.87" />
								<path d="M16 3.13a4 4 0 010 7.75" />
							</svg>

							<!-- Church -->
							<svg v-else-if="item.icon === 'church'" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
								<path d="M12 2v6m-3-3h6" />
								<path d="M4 22V10l8-5 8 5v12H4z" />
								<path d="M10 22v-5h4v5" />
							</svg>

							<!-- Reception / Toast / Glasses -->
							<svg v-else-if="item.icon === 'reception'" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
								<path d="M8 22h8m-4-8v8M5 3l7 8 7-8H5z" />
							</svg>
						</div>

						<!-- Time & Label -->
						<div class="flex items-center gap-3">
							<span class="font-serif text-sm sm:text-base font-semibold tracking-wider text-beige-100 shrink-0">
								{{ item.time }}
							</span>
							<span class="h-1.5 w-1.5 rounded-full bg-beige-300/80"></span>
							<span class="font-serif text-sm sm:text-base text-beige-50 font-normal">
								{{ item.label }}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
