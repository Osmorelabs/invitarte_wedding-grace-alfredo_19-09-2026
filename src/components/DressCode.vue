<script setup lang="ts">
withDefaults(
	defineProps<{
		note?: string
	}>(),
	{
		note: 'Formal Elegante',
	},
)
</script>

<template>
	<section id="dress-code" class="relative bg-paper px-6 sm:px-10 py-6 text-olive-900 reveal-on-scroll">
		<div class="mx-auto max-w-sm">
			<div class="grid grid-cols-[48px_1fr] gap-4 sm:gap-6 items-start text-left">
				<!-- Suit Hanger Icon (Line Art) -->
				<div class="flex items-center justify-center text-olive-800 pt-1">
					<svg class="h-10 w-10 stroke-[1.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
						<path d="M12 7a2 2 0 10-2-2 2 2 0 002 2zm0 0v2.5L3.5 16A1.5 1.5 0 005 18h14a1.5 1.5 0 001.5-2L12 9.5" />
					</svg>
				</div>

				<!-- Content -->
				<div class="flex flex-col items-start">
					<h3 class="font-serif text-sm sm:text-base tracking-[0.2em] uppercase text-olive-800 font-semibold leading-tight">
						CÓDIGO DE VESTIMENTA
					</h3>
					<p class="mt-2 font-serif text-xs leading-relaxed text-olive-700 font-normal">
						{{ note }}
					</p>
				</div>
			</div>

			<!-- Divider Line with Centered Heart -->
			<div class="mt-8 flex items-center justify-center gap-4 text-olive-300">
				<span class="h-px flex-1 bg-olive-300/40"></span>
				<span class="text-olive-500 text-xs">♥</span>
				<span class="h-px flex-1 bg-olive-300/40"></span>
			</div>
		</div>
	</section>
</template>
