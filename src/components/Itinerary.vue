<script setup lang="ts">
import FoliageDecor from './FoliageDecor.vue'

const items = [
	{
		time: '09:30 AM',
		label: 'Ceremonia religiosa',
		icon: 'church',
	},
	{
		time: '11:30 AM',
		label: 'Cóctel de bienvenida',
		icon: 'cocktail',
	},
	{
		time: '12:00 PM',
		label: 'Entrada de los novios',
		icon: 'flowers',
	},
	{
		time: '01:00 PM',
		label: 'Almuerzo',
		icon: 'dinner',
	},
	{
		time: '03:00 PM',
		label: 'Fiesta & Baile',
		icon: 'disco',
	},
	{
		time: '09:00 PM',
		label: 'Despedida',
		icon: 'pin',
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

			<!-- Soft Watercolor Sage Container -->
			<div class="relative mt-6 overflow-hidden rounded-3xl bg-watercolor-sage p-6 sm:p-8 shadow-inner border border-sage-300/60">
				<div class="relative z-10 flex flex-col gap-6">
					<div
						v-for="(item, index) in items"
						:key="item.time"
						class="flex items-center gap-4 text-left"
					>
						<!-- Activity Icon -->
						<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/70 text-olive-700 shadow-xs">
							<!-- Church -->
							<svg v-if="item.icon === 'church'" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
								<path d="M12 2v6m-3-3h6" />
								<path d="M4 22V10l8-5 8 5v12H4z" />
								<path d="M10 22v-5h4v5" />
							</svg>

							<!-- Cocktail -->
							<svg v-else-if="item.icon === 'cocktail'" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
								<path d="M8 22h8m-4-8v8M5 3l7 8 7-8H5z" />
							</svg>

							<!-- Flowers / Bouquet -->
							<svg v-else-if="item.icon === 'flowers'" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
								<circle cx="12" cy="8" r="3" />
								<circle cx="8" cy="10" r="2.5" />
								<circle cx="16" cy="10" r="2.5" />
								<path d="M12 11v11" />
							</svg>

							<!-- Dinner -->
							<svg v-else-if="item.icon === 'dinner'" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
								<path d="M6 3v6a3 3 0 006 0V3M9 12v9" />
								<path d="M18 3v18M18 3c-1.5 0-3 1.5-3 4v4h3" />
							</svg>

							<!-- Disco / Party -->
							<svg v-else-if="item.icon === 'disco'" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
								<circle cx="12" cy="12" r="8" />
								<path d="M12 2v2m0 16v2M2 12h2m16 0h2" />
								<path d="M6.34 6.34l1.42 1.42m8.48 8.48l1.42 1.42" />
							</svg>

							<!-- Pin -->
							<svg v-else-if="item.icon === 'pin'" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
								<path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z" />
								<circle cx="12" cy="10" r="3" />
							</svg>
						</div>

						<!-- Time & Label -->
						<div class="flex items-center gap-3">
							<span class="font-serif text-sm font-semibold tracking-wider text-olive-800 shrink-0">
								{{ item.time }}
							</span>
							<span class="h-1.5 w-1.5 rounded-full bg-olive-600/70"></span>
							<span class="font-serif text-sm text-olive-900 font-light">
								{{ item.label }}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
