<script setup lang="ts">
import Divider from './Divider.vue'

export interface DressItem {
	label: string
	class: string
}

const props = withDefaults(
	defineProps<{
		note?: string
		items?: DressItem[]
	}>(),
	{
		note: 'Formal · trajes y vestidos largos',
	},
)

const items = props.items ?? []
</script>

<template>
	<section id="dresscode" class="px-6 py-16 sm:py-20">
		<div class="mx-auto max-w-md text-center">
			<p class="font-script text-3xl text-olive-600">Sugerencia</p>
			<h2 class="mt-1 font-serif text-4xl text-olive-800">Código de vestimenta</h2>
			<Divider />

			<div class="flex flex-col gap-6 rounded-2xl border border-olive-300/50 bg-beige-100 px-6 py-8">
				<div class="flex items-center justify-center gap-3">
					<span
						v-for="item in items"
						:key="item.label"
						class="h-10 w-10 rounded-full border border-olive-300/40"
						:class="item.class"
						:title="item.label"
					></span>
				</div>
				<p class="text-sm font-light tracking-wide text-olive-700">{{ note }}</p>
			</div>
		</div>
	</section>
</template>
