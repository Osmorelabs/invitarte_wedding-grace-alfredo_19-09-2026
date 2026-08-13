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
	<section id="rsvp" class="relative bg-paper px-6 sm:px-10 py-6 text-olive-900 reveal-on-scroll">
		<!-- Bottom Left Botanical Ornament (Ornamenta 3) -->
		<FoliageDecor position="bottom-left" />

		<div class="mx-auto max-w-sm">
			<div class="grid grid-cols-[48px_1fr] gap-4 sm:gap-6 items-start text-left">
				<!-- Circle Phone Icon (Line Art) -->
				<div class="flex items-center justify-center pt-1">
					<div class="flex h-11 w-11 items-center justify-center rounded-full border border-olive-700 text-olive-800">
						<svg class="h-5 w-5 stroke-[1.4]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
							<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
						</svg>
					</div>
				</div>

				<!-- Content -->
				<div class="flex flex-col items-start">
					<h3 class="font-serif text-sm sm:text-base tracking-[0.2em] uppercase text-olive-800 font-semibold leading-tight">
						CONFIRMACIÓN
					</h3>
					<p class="mt-2 font-serif text-xs leading-relaxed text-olive-700 font-normal">
						Por favor confirma tu asistencia antes del 1 de Septiembre de 2026.
					</p>

					<!-- Optional Name Field & Dark Olive Pill Button -->
					<div class="mt-4 w-full space-y-3">
						<input
							v-model="name"
							type="text"
							placeholder="Escribe tu nombre (opcional)"
							class="w-full rounded-md border border-olive-300 bg-white/90 px-3 py-2 text-xs text-olive-900 placeholder:text-olive-400 focus:border-olive-600 focus:outline-none shadow-xs"
						/>

						<div class="relative w-full">
							<a
								:href="waLink"
								target="_blank"
								rel="noopener noreferrer"
								class="flex w-full items-center justify-center gap-2 rounded-md bg-olive-800 px-3 py-2.5 text-xs font-semibold tracking-[0.25em] uppercase text-beige-50 shadow-sm transition-all hover:bg-olive-900 cursor-pointer"
							>
								ENVIAR MENSAJE
							</a>
							<!-- Click Pointer Hand Icon -->
							<div class="pointer-events-none absolute -bottom-2 -right-2 text-olive-900">
								<svg class="h-5 w-5 fill-white stroke-olive-900 stroke-[1.5]" viewBox="0 0 24 24">
									<path d="M18 11V6a2 2 0 00-4 0v5M14 10V4a2 2 0 00-4 0v6M10 10.5V2a2 2 0 00-4 0v9M6 13V9a2 2 0 00-4 0v8a7 7 0 0014 0v-4a2 2 0 00-4 0" />
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>