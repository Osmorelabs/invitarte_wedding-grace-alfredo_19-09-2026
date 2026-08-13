<script setup lang="ts">
import Divider from './Divider.vue'

export interface LocationCard {
	venue: string
	address: string
	mapUrl: string
	embedSrc: string
}

const props = withDefaults(
	defineProps<{
		locations?: LocationCard[]
	}>(),
	{},
)

const locations = props.locations ?? []
</script>

<template>
	<section id="map" class="px-6 py-16 sm:py-20">
		<div class="mx-auto max-w-md text-center">
			<p class="font-script text-3xl text-olive-500">¿Dónde?</p>
			<h2 class="mt-1 font-serif text-4xl text-olive-800">Ubicación</h2>
			<Divider />

			<div class="flex flex-col gap-8">
				<div
					v-for="location in locations"
					:key="location.venue"
					class="overflow-hidden rounded-2xl border border-olive-200 bg-beige-100 shadow-sm"
				>
					<div class="relative">
						<iframe
							:src="location.embedSrc"
							class="h-64 w-full border-0"
							allowfullscreen=""
							loading="lazy"
							referrerpolicy="strict-origin-when-cross-origin"
						></iframe>
					</div>

					<div class="px-6 py-7">
						<p class="text-lg text-olive-800">{{ location.venue }}</p>
						<p class="mt-1 text-sm font-light text-olive-600">{{ location.address }}</p>
						<a
							:href="location.mapUrl"
							target="_blank"
							rel="noopener noreferrer"
							class="mt-6 inline-block rounded-full border border-olive-600 px-8 py-3 text-xs font-medium uppercase tracking-[0.25em] text-olive-700 transition-colors hover:bg-olive-600 hover:text-beige-50"
						>
							Abrir en Google Maps
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>