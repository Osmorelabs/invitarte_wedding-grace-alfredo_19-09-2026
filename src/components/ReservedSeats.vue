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
	<section id="reserved-seats" class="relative bg-paper px-6 sm:px-10 py-6 text-olive-900 reveal-on-scroll">
		<div class="mx-auto max-w-sm">
			<div class="grid grid-cols-[48px_1fr] gap-4 sm:gap-6 items-start text-left">
				<!-- Wooden Chair Icon (Line Art) -->
				<div class="flex items-center justify-center text-olive-800 pt-1">
					<svg class="h-10 w-10 stroke-[1.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
						<!-- Backrest & Legs -->
						<path d="M6 3h12v7H6z" />
						<path d="M9 3v7M12 3v7M15 3v7" />
						<path d="M5 10h14v3H5z" />
						<path d="M6 13v8M18 13v8" />
						<path d="M6 17h12" />
					</svg>
				</div>

				<!-- Text & Seat Counter -->
				<div class="flex flex-col items-start">
					<h3 class="font-serif text-sm sm:text-base tracking-[0.2em] uppercase text-olive-800 font-semibold leading-tight">
						LUGARES RESERVADOS<br />PARA TI
					</h3>
					<div class="mt-3 flex items-center gap-3">
						<div class="flex h-9 w-9 items-center justify-center rounded-md border border-olive-500 bg-white font-serif text-lg font-bold text-olive-900 shadow-xs">
							{{ seats }}
						</div>
						<span class="font-serif text-xs tracking-[0.2em] uppercase text-olive-700 font-medium">
							PASES / LUGARES
						</span>
					</div>
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
