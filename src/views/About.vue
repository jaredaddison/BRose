<template>
<div id="input">
 <ul>
  <li>
<input v-model="dog.weight" type="number" placeholder="Weight" />kg
  </li><li>
<input v-model="dog.dehydration" type="number" placeholder="Dehydration"/>% bodyweight (5% Minor | 10% Moderate | 15% Severe)
</li><li>
<input v-model="dog.ongoingLoss" type="number" placeholder="Ongoin Loss"/>ml/hr of ongoing fluid loss
</li><li>
<input v-model="dog.bolusNumber" type="number" /> = Total Number of bolus' provided
</li>
</ul>
</div>
<div id="fluid">
<p>
 <ul>
<li> Surgical fluid rate is = {{ dog.surgicalRate }}ml/hr </li>
<li> A bolus for this patient is {{ dog.bolusVolume }}ml over 15minutes</li>
<li> The maintenance fluid rate is {{ dog.maintenanceRate }}ml/hr</li>
</ul>
</p>
</div>
</template>

<script setup>
	import dog from '@/logic/Fluids'
</script>

<style scoped></style>