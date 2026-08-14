<script setup lang="ts">
import FoliageDecor from './FoliageDecor.vue'
import headerPhoto from '../assets/photos/header_photo_transparent.png'

withDefaults(
	defineProps<{
		bride?: string
		groom?: string
		date?: string
		location?: string
	}>(),
	{
		bride: 'Grecia',
		groom: 'Alfredo',
		date: '19 DE SEPTIEMBRE DE 2026',
		location: 'Arequipa, Perú',
	},
)
</script>

<template>
	<section class="relative bg-paper pt-20 sm:pt-24 pb-8 text-center text-olive-900">
		<!-- Top Left Botanical Leaves Overlay (Ornamenta 1) -->
		<FoliageDecor position="top-left" />
		<!-- Top Right Botanical Leaves Overlay (Ornamenta 1) -->
		<FoliageDecor position="top-right" />
		<!-- Side Margin Botanical Leaves Overlay (Ornamenta 2 - Left Side) -->
		<FoliageDecor position="parents-left" />

		<div class="relative z-10 px-6 sm:px-10 reveal-on-scroll">
			<!-- Bible Quote -->
			<div class="mx-auto max-w-xs sm:max-w-sm mt-6 sm:mt-10">
				<p class="font-serif text-xs sm:text-sm tracking-[0.18em] uppercase text-olive-700 leading-relaxed font-medium">
					“TRES COSAS PERMANECERÁN PARA SIEMPRE — LA FE, LA ESPERANZA Y EL AMOR. Y LA MAYOR DE ELLAS ES EL AMOR.”
				</p>
				<p class="mt-2 font-serif text-xs sm:text-sm tracking-[0.2em] uppercase text-olive-500 font-semibold">
					1 CORINTIOS 13:13
				</p>
			</div>

			<!-- Monogram G | A -->
			<div class="mt-8 flex flex-col items-center justify-center">
				<div class="flex items-center justify-center gap-4 text-8xl sm:text-9xl font-serif text-olive-800 tracking-wider font-normal">
					<span>G</span>
					<span class="h-16 sm:h-20 w-px bg-olive-400 opacity-60"></span>
					<span>A</span>
				</div>
				<p class="mt-3 font-serif text-base tracking-[0.35em] uppercase text-olive-700 font-medium">
					NUESTRA BODA
				</p>
				<div class="mt-2 text-olive-500 text-base">♥</div>
			</div>
		</div>

		<!-- Hero Photo -->
		<div class="my-8 w-full reveal-on-scroll reveal-delay-1">
			<img
				:src="headerPhoto.src"
				alt="Grecia y Alfredo"
				class="w-full object-cover shadow-sm"
			/>
		</div>

		<div class="relative z-10 px-6 sm:px-10 reveal-on-scroll reveal-delay-2">
			<!-- Announcement Quote -->
			<div class="mx-auto max-w-sm">
				<p class="font-serif text-xs sm:text-sm tracking-[0.12em] uppercase leading-relaxed text-olive-800 font-normal">
					CON GRAN ALEGRÍA Y CORAZONES AGRADECIDOS, JUNTO CON NUESTROS PADRES, LOS INVITAMOS A COMPARTIR LA CELEBRACIÓN DE NUESTRO AMOR MIENTRAS NOS UNIMOS EN MATRIMONIO.
				</p>
				<div class="mt-4 text-olive-500 text-sm">♥</div>
			</div>

			<!-- Parents & Godparents Section -->
			<div class="mt-8 max-w-md mx-auto border-t border-b border-olive-300/40 py-6 flex flex-col gap-6">
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
					<div class="flex flex-col items-center justify-center">
						<p class="font-serif text-xs tracking-[0.25em] uppercase text-olive-500 font-semibold">
							PADRES DE LA NOVIA
						</p>
						<p class="mt-1.5 font-serif text-base text-olive-800 font-medium">
							Sr. Victor Mendez Chavez ✝
						</p>
						<p class="font-serif text-sm text-olive-700">
							&amp; Sra. Lucrecia Turpo Arapa
						</p>
					</div>
					<div class="flex flex-col items-center justify-center">
						<p class="font-serif text-xs tracking-[0.25em] uppercase text-olive-500 font-semibold">
							PADRES DEL NOVIO
						</p>
						<p class="mt-1.5 font-serif text-base text-olive-800 font-medium">
							Sr. Alfredo Calagua Zapata
						</p>
						<p class="font-serif text-sm text-olive-700">
							&amp; Sra. Angela Gual Bramón
						</p>
					</div>
				</div>

				<div class="pt-6 border-t border-olive-300/30 flex flex-col items-center justify-center">
					<p class="font-serif text-xs tracking-[0.25em] uppercase text-olive-500 font-semibold">
						PADRINOS
					</p>
					<p class="mt-1.5 font-serif text-base text-olive-800 font-medium">
						Sr. Plinio Juan Paredes Maydana
					</p>
					<p class="font-serif text-sm text-olive-700">
						&amp; Sra. Luz Rodriguez de Paredes
					</p>
				</div>
			</div>

			<!-- Calligraphy Names -->
			<div class="mt-10 flex flex-col items-center justify-center">
				<h1 class="font-script text-8xl sm:text-7xl text-olive-800 leading-none drop-shadow-sm">
					{{ bride }}
				</h1>
				<span class="font-script text-5xl text-olive-600 my-1">&amp;</span>
				<h1 class="font-script text-8xl sm:text-7xl text-olive-800 leading-none drop-shadow-sm">
					{{ groom }}
				</h1>
			</div>

			<p class="mt-5 font-serif text-xs tracking-[0.20em] uppercase text-olive-600 font-medium">
				TENEMOS EL HONOR DE INVITARLOS A NUESTRA BODA
			</p>

			<!-- Date Box -->
			<div class="mt-5 inline-flex items-center justify-center gap-3 sm:gap-4 border-t border-b border-olive-400/50 py-2 px-4 sm:px-5">
				<span class="font-serif text-xs sm:text-sm tracking-[0.20em] uppercase text-olive-700 font-medium">
					Sábado
				</span>
				<span class="font-serif text-3xl sm:text-4xl font-semibold text-olive-900 leading-none">
					19
				</span>
				<span class="font-serif text-xs sm:text-sm tracking-[0.20em] uppercase text-olive-700 font-medium">
					Septiembre 2026
				</span>
			</div>

			<!-- Botanical Leaf Flourish Accent -->
			<FoliageDecor position="divider" />
		</div>
	</section>
</template>