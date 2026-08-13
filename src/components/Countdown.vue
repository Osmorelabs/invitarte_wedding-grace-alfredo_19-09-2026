<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const props = withDefaults(
	defineProps<{
		targetDate?: string
	}>(),
	{ targetDate: '2026-09-19T09:30:00-05:00' },
)

const now = ref(Date.now())
let timer: ReturnType<typeof setInterval> | undefined

const target = computed(() => new Date(props.targetDate).getTime())

const timeLeft = computed(() => {
	const diff = Math.max(0, target.value - now.value)
	return {
		days: Math.floor(diff / 86_400_000),
		hours: Math.floor((diff / 3_600_000) % 24),
		minutes: Math.floor((diff / 60_000) % 60),
		seconds: Math.floor((diff / 1_000) % 60),
	}
})

const units = computed(() => [
	{ label: 'DÍAS', value: timeLeft.value.days },
	{ label: 'HORAS', value: timeLeft.value.hours },
	{ label: 'MINUTOS', value: timeLeft.value.minutes },
	{ label: 'SEGUNDOS', value: timeLeft.value.seconds },
])

const pad = (n: number) => String(n).padStart(2, '0')

onMounted(() => {
	now.value = Date.now()
	timer = setInterval(() => (now.value = Date.now()), 1000)
})

onBeforeUnmount(() => {
	if (timer) clearInterval(timer)
})
</script>

<template>
	<section id="countdown" class="bg-paper px-6 py-8 text-center border-t border-b border-olive-300/30 reveal-on-scroll">
		<div class="mx-auto max-w-sm rounded-2xl border border-olive-300/50 bg-beige-50/80 px-6 py-8 shadow-sm">
			<p class="font-serif text-xs tracking-[0.3em] uppercase text-olive-600 font-medium">
				CUENTA REGRESIVA
			</p>
			<p class="mt-1 font-script text-3xl text-olive-800">
				Solo faltan...
			</p>

			<div class="mt-6 flex items-stretch justify-center gap-2 sm:gap-3">
				<div
					v-for="unit in units"
					:key="unit.label"
					class="flex flex-1 flex-col items-center justify-center rounded-xl border border-olive-200/80 bg-white/90 px-1 py-4 shadow-xs"
				>
					<span class="font-serif text-3xl sm:text-4xl font-semibold text-olive-900 tabular-nums">
						{{ pad(unit.value) }}
					</span>
					<span class="mt-1.5 text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.18em] text-olive-600">
						{{ unit.label }}
					</span>
				</div>
			</div>

			<div class="mt-4 text-olive-500 text-xs">♥</div>
		</div>
	</section>
</template>
