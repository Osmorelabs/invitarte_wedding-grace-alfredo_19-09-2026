<script setup lang="ts">
withDefaults(
	defineProps<{
		seats?: number
	}>(),
	{
		seats: 2,
	},
)
</script>

<template>
	<section id="reserved-seats" class="bg-paper px-6 py-8 text-center text-olive-900 reveal-on-scroll">
		<div class="mx-auto max-w-sm flex flex-col items-center">
			<!-- Chair Icon -->
			<div class="mb-3 text-olive-700">
				<svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
					<path d="M7 3v9m10-9v9M5 12h14v4H5zM6 16v5M18 16v5" />
				</svg>
			</div>

			<!-- Title -->
			<h2 class="font-serif text-xs sm:text-sm tracking-[0.25em] uppercase text-olive-800 font-medium">
				LUGARES RESERVADOS PARA TI
			</h2>

			<!-- Seat Pass Box -->
			<div class="mt-4 flex items-center justify-center gap-3">
				<div class="flex h-12 w-12 items-center justify-center rounded-lg border border-olive-400 bg-white font-serif text-2xl font-semibold text-olive-900 shadow-xs">
					{{ seats }}
				</div>
				<span class="font-serif text-xs tracking-[0.2em] uppercase text-olive-700 font-medium">
					PASES / LUGARES
				</span>
			</div>

			<!-- Heart Divider -->
			<div class="mt-8 text-olive-500 text-xs">
				♥
			</div>
		</div>
	</section>
</template>
