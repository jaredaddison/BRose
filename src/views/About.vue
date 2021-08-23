<template>
<div v-if="MinimumDataBase">
<MinimumDatabase />
</div>
</template>

<script setup>
import MinimumDatabase from '@/components/MinimumDatabase.vue'
const MinimumDataBase = true
</script>

<style scoped></style>