<template>
	<main>
		<button
			type="button"
			class="
				inline-flex
				items-center
				px-6
				py-3
				border border-transparent
				text-base
				font-medium
				rounded-md
				shadow-sm
				text-white
				bg-indigo-600
				hover:bg-indigo-700
				focus:outline-none
				focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
			"
		>
			<a
				href="https://app.pitch.com/app/presentation/dc1b66ea-44df-4320-a37b-ccd53cbc6cfa/0d4a8066-ef8f-4ddd-9b7f-9b058caafdac"
				>Presentation</a
			>
		</button>
		<Bundles />
	</main>
</template>

<script setup>
	import Bundles from '@/components/Bundles.vue'
</script>
