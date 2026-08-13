<script setup lang="ts">
import Divider from './Divider.vue'

export interface FamilyGroup {
	role: string
	members: string[]
}

const props = withDefaults(
	defineProps<{
		groups?: FamilyGroup[]
	}>(),
	{},
)

const groups = props.groups ?? []
</script>

<template>
	<section id="family" class="px-6 py-16 sm:py-20">
		<div class="mx-auto max-w-md text-center">
			<p class="font-script text-3xl text-olive-600">Con amor</p>
			<h2 class="mt-1 font-serif text-4xl text-olive-800">Padres y padrinos</h2>
			<Divider />

			<div class="flex flex-col gap-6">
				<div
					v-for="group in groups"
					:key="group.role"
					class="rounded-2xl border border-olive-300/50 bg-beige-100 px-6 py-7"
				>
					<p class="text-[11px] font-medium uppercase tracking-[0.25em] text-olive-500">
						{{ group.role }}
					</p>
					<p
						v-for="member in group.members"
						:key="member"
						class="mt-3 font-serif text-xl text-olive-800"
					>
						{{ member }}
					</p>
				</div>
			</div>
		</div>
	</section>
</template>
