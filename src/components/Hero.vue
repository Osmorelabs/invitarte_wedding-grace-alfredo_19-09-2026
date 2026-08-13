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
	<section class="relative bg-paper pt-12 pb-8 text-center text-olive-900 overflow-hidden">
		<!-- Top Left Botanical Leaves Overlay -->
		<FoliageDecor position="top-left" />

		<div class="relative z-10 px-6 sm:px-10 reveal-on-scroll">
			<!-- Bible Quote -->
			<div class="mx-auto max-w-xs sm:max-w-sm">
				<p class="font-serif text-[11px] sm:text-xs tracking-[0.18em] uppercase text-olive-700 leading-relaxed">
					“TRES COSAS PERMANECERÁN PARA SIEMPRE — LA FE, LA ESPERANZA Y EL AMOR. Y LA MAYOR DE ELLAS ES EL AMOR.”
				</p>
				<p class="mt-1.5 font-serif text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-olive-500">
					1 CORINTIOS 13:13
				</p>
			</div>

			<!-- Monogram G | A -->
			<div class="mt-8 flex flex-col items-center justify-center">
				<div class="flex items-center justify-center gap-3 text-5xl sm:text-6xl font-serif text-olive-800 tracking-wider">
					<span>G</span>
					<span class="h-10 sm:h-12 w-px bg-olive-400 opacity-60"></span>
					<span>A</span>
				</div>
				<p class="mt-3 font-serif text-xs tracking-[0.35em] uppercase text-olive-700">
					NUESTRA BODA
				</p>
				<div class="mt-2 text-olive-500 text-xs">♥</div>
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
				<p class="font-serif text-xs sm:text-sm tracking-[0.15em] uppercase leading-relaxed text-olive-800 font-light">
					CON GRAN ALEGRÍA Y CORAZONES AGRADECIDOS, JUNTO CON NUESTROS PADRES, LOS INVITAMOS A COMPARTIR LA CELEBRACIÓN DE NUESTRO AMOR MIENTRAS NOS UNIMOS EN MATRIMONIO.
				</p>
				<div class="mt-4 text-olive-500 text-xs">♥</div>
			</div>

			<!-- Parents Section -->
			<div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-md mx-auto border-t border-b border-olive-300/40 py-6">
				<div class="flex flex-col items-center justify-center">
					<p class="font-serif text-[10px] tracking-[0.25em] uppercase text-olive-500 font-medium">
						PADRES DE LA NOVIA
					</p>
					<p class="mt-1.5 font-serif text-sm text-olive-800">
						SR. VÍCTOR MÉNDEZ CHÁVEZ
					</p>
					<p class="font-serif text-xs text-olive-700">
						&amp; SRA. LUCRECIA TURPO ARAPA
					</p>
				</div>
				<div class="flex flex-col items-center justify-center">
					<p class="font-serif text-[10px] tracking-[0.25em] uppercase text-olive-500 font-medium">
						PADRES DEL NOVIO
					</p>
					<p class="mt-1.5 font-serif text-sm text-olive-800">
						SR. ALFREDO CALAGUA ZAPATA
					</p>
					<p class="font-serif text-xs text-olive-700">
						&amp; SRA. ANGELA GUAL BRAMON
					</p>
				</div>
			</div>

			<!-- Calligraphy Names -->
			<div class="mt-10 flex flex-col items-center justify-center">
				<h1 class="font-script text-7xl sm:text-8xl text-olive-800 leading-none drop-shadow-sm">
					{{ bride }}
				</h1>
				<span class="font-script text-4xl text-olive-600 my-1">&amp;</span>
				<h1 class="font-script text-7xl sm:text-8xl text-olive-800 leading-none drop-shadow-sm">
					{{ groom }}
				</h1>
			</div>

			<p class="mt-6 font-serif text-xs tracking-[0.25em] uppercase text-olive-600">
				TENEMOS EL HONOR DE INVITARLOS A NUESTRA BODA
			</p>

			<!-- Date Box -->
			<div class="mt-6 inline-flex items-center justify-center gap-4 sm:gap-6 border-t border-b border-olive-400/50 py-3 px-6">
				<span class="font-serif text-xs tracking-[0.25em] uppercase text-olive-700">
					SÁBADO
				</span>
				<span class="font-serif text-4xl font-semibold text-olive-900 leading-none">
					19
				</span>
				<span class="font-serif text-xs tracking-[0.25em] uppercase text-olive-700">
					SEPTIEMBRE 2026
				</span>
			</div>

			<!-- Botanical Leaf Flourish Accent -->
			<FoliageDecor position="divider" />
		</div>
	</section>
</template>