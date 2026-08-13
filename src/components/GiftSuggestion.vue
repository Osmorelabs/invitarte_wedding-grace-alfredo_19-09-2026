<script setup lang="ts">
import { ref } from 'vue'

const showModal = ref(false)
</script>

<template>
	<section id="gifts" class="bg-paper px-6 py-8 text-center text-olive-900 reveal-on-scroll">
		<div class="mx-auto max-w-sm flex flex-col items-center">
			<!-- Gift Box Icon -->
			<div class="mb-3 text-olive-700">
				<svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
					<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" />
				</svg>
			</div>

			<!-- Title -->
			<h2 class="font-serif text-xs sm:text-sm tracking-[0.25em] uppercase text-olive-800 font-medium">
				SUGERENCIA DE REGALOS
			</h2>

			<!-- Description Text -->
			<p class="mt-3 font-serif text-xs leading-relaxed text-olive-700 font-light max-w-xs">
				Su presencia es nuestro mejor regalo. Sin embargo, si desean hacernos un presente, una contribución en efectivo será de gran ayuda para nuestra nueva etapa juntos.
			</p>

			<!-- Gift Envelopes Button / Note -->
			<div class="mt-4 flex flex-col items-center">
				<p class="font-serif text-[10px] tracking-[0.25em] uppercase text-olive-600 font-medium">
					LLUVIA DE SOBRES
				</p>
				<button
					@click="showModal = true"
					type="button"
					class="mt-2 text-olive-700 transition-transform hover:scale-105 cursor-pointer"
					aria-label="Ver datos bancarios"
				>
					<svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
						<path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
					</svg>
				</button>
			</div>

			<!-- Heart Divider -->
			<div class="mt-8 text-olive-500 text-xs">
				♥
			</div>
		</div>

		<!-- Optional Bank Details Modal -->
		<div
			v-if="showModal"
			class="fixed inset-0 z-50 flex items-center justify-center bg-olive-900/60 p-4 backdrop-blur-xs"
			@click.self="showModal = false"
		>
			<div class="relative w-full max-w-xs rounded-2xl bg-paper p-6 text-center shadow-xl border border-olive-300">
				<button
					@click="showModal = false"
					class="absolute top-3 right-3 text-olive-500 hover:text-olive-800"
				>
					✕
				</button>
				<h3 class="font-serif text-lg text-olive-900 font-medium">Datos bancarios</h3>
				<p class="mt-1 text-xs text-olive-600">Lluvia de sobres</p>
				<div class="mt-4 space-y-3 text-left font-serif text-xs text-olive-800">
					<div class="rounded-lg bg-beige-50 p-3 border border-olive-200">
						<p class="font-semibold text-olive-900">BCP - Grecia Mendez</p>
						<p class="mt-1 select-all font-mono text-[11px]">215-98765432-0-19</p>
						<p class="text-[10px] text-olive-500">CCI: 002-215-0098765432019-12</p>
					</div>
					<div class="rounded-lg bg-beige-50 p-3 border border-olive-200">
						<p class="font-semibold text-olive-900">Yape / Plin</p>
						<p class="mt-1 select-all font-mono text-[11px]">914 094 578</p>
					</div>
				</div>
				<button
					@click="showModal = false"
					class="mt-5 w-full rounded-full bg-olive-700 py-2 text-xs font-medium uppercase tracking-wider text-white"
				>
					Cerrar
				</button>
			</div>
		</div>
	</section>
</template>
