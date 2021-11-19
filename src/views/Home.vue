<script setup>
	import MyBundles from '@/components/MyBundles.vue'
	import MyHeader from '@/components/MyHeader.vue'
	import MyFAQ from '@/components/MyFAQ.vue'
</script>

<template>
	<div class="max-w-7xl mx-auto sm:px-6 lg:px-8 border-black border-2">
		<MyHeader />
		<MyFAQ />
		<MyBundles />
	</div>
</template>