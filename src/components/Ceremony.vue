<script setup lang="ts">
export interface EventCard {
	title: string
	day?: string
	time: string
	place: string
	address: string
	mapUrl?: string
}

const props = withDefaults(
	defineProps<{
		events?: EventCard[]
	}>(),
	{
		events: () => [
			{
				title: 'CEREMONIA RELIGIOSA',
				time: '09:30 AM',
				place: 'Templo San Agustín',
				address: 'Arequipa, Perú',
				mapUrl: 'https://maps.app.goo.gl/GpHBGyBvR8TyPXqA9',
			},
			{
				title: 'RECEPCIÓN',
				time: '12:00 PM',
				place: 'La Huerta del Loncco',
				address: 'Arequipa, Perú',
				mapUrl: 'https://maps.app.goo.gl/hcjzUiT2fMjrT2MbA',
			},
		],
	},
)
</script>

<template>
	<section id="ceremony" class="bg-paper px-6 py-10 text-center text-olive-900 reveal-on-scroll">
		<div class="mx-auto max-w-sm">
			<div
				v-for="(event, index) in events"
				:key="event.title"
				class="flex flex-col items-center"
			>
				<!-- Time & Title -->
				<p class="font-serif text-sm font-semibold tracking-[0.25em] text-olive-700">
					{{ event.time }}
				</p>
				<h2 class="mt-1 font-serif text-xl sm:text-2xl font-normal tracking-[0.15em] uppercase text-olive-900">
					{{ event.title }}
				</h2>

				<!-- Place Name & Address -->
				<p class="mt-3 font-serif text-base text-olive-800 uppercase tracking-wide">
					{{ event.place }}
				</p>
				<p class="font-serif text-xs text-olive-600 font-light tracking-wide">
					{{ event.address }}
				</p>

				<!-- Dark Olive Pill Button: VER UBICACIÓN -->
				<a
					v-if="event.mapUrl"
					:href="event.mapUrl"
					target="_blank"
					rel="noopener noreferrer"
					class="mt-4 inline-flex items-center gap-2 rounded-full bg-olive-700 px-6 py-2.5 text-[11px] font-medium tracking-[0.25em] uppercase text-beige-50 shadow-xs transition-all hover:bg-olive-800 hover:shadow-md"
				>
					VER UBICACIÓN
					<svg class="h-3.5 w-3.5 text-beige-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
						<circle cx="12" cy="10" r="3" />
					</svg>
				</a>

				<!-- Heart Divider between events -->
				<div v-if="index < events.length - 1" class="my-8 text-olive-500 text-xs">
					♥
				</div>
			</div>
		</div>
	</section>
</template>
