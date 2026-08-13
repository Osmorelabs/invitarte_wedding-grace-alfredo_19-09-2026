<script setup lang="ts">
import { computed, ref } from 'vue'
import FoliageDecor from './FoliageDecor.vue'

const waNumber = '51914094578'
const name = ref('')

const message = computed(() => {
	const base =
		'Hola Grecia y Alfredo, confirmo mi asistencia a su boda el sábado 19 de septiembre de 2026.'
	return name.value.trim() ? `${base} Mi nombre es: ${name.value.trim()}.` : base
})

const waLink = computed(
	() =>
		`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message.value)}`,
)
</script>

<template>
	<section id="rsvp" class="relative bg-paper px-6 py-8 text-center text-olive-900 reveal-on-scroll">
		<!-- Bottom Left Botanical Ornament (Ornamenta 3) -->
		<FoliageDecor position="bottom-left" />
		<div class="mx-auto max-w-sm flex flex-col items-center">
			<!-- Phone Icon -->
			<div class="mb-3 text-olive-700">
				<svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
					<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
				</svg>
			</div>

			<!-- Title -->
			<h2 class="font-serif text-xs sm:text-sm tracking-[0.25em] uppercase text-olive-800 font-medium">
				CONFIRMACIÓN DE ASISTENCIA
			</h2>

			<!-- Description Text -->
			<p class="mt-3 font-serif text-xs leading-relaxed text-olive-700 font-light max-w-xs">
				Por favor confirma tu asistencia antes del 1 de Septiembre de 2026.
			</p>

			<!-- Optional Name Field & Dark Olive Pill Button -->
			<div class="mt-5 w-full max-w-xs space-y-3">
				<input
					v-model="name"
					type="text"
					placeholder="Escribe tu nombre (opcional)"
					class="w-full rounded-full border border-olive-300 bg-white/90 px-4 py-2.5 text-center text-xs text-olive-900 placeholder:text-olive-400 focus:border-olive-600 focus:outline-none shadow-xs"
				/>

				<a
					:href="waLink"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-olive-700 px-6 py-3 text-xs font-medium tracking-[0.25em] uppercase text-beige-50 shadow-xs transition-all hover:bg-olive-800 hover:shadow-md cursor-pointer"
				>
					ENVIAR MENSAJE
					<svg class="h-4 w-4 text-beige-200" viewBox="0 0 24 24" fill="currentColor">
						<path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.38a9.87 9.87 0 004.74 1.21h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm0 18.15h-.01a8.2 8.2 0 01-4.18-1.15l-.3-.18-3.11.81.83-3.03-.2-.31a8.2 8.2 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23z" />
					</svg>
				</a>
			</div>
		</div>
	</section>
</template>