import * as Math from 'vue-chemistry'
import { reactive, computed } from 'vue'
export const cat = reactive({
  weight: 0,
  dehydration: 0,
  ongoinigLoss: 0,
  bolusNumber: 0,
  bolusVolume: computed(() => Math.round(dog.weight * 20)),
  maintenanceRate: computed(() => Math.round(dog.weight ** 0.75 * 132 / 24)),
  deficitVolume: computed(() => Math.round(dog.weight * dog.dehydration * 10)),
  surgicalRate: computed(() => Math.round(dog.weight * 5)),
  initialRate: computed(() => Math.round((dog.deficitVolume - (dog.bolusVolume * dog.bolusNumber)) / 2 / 6 + dog.maintenanceRate + dog.ongoinigLoss)),
  ongoingRate: computed(() => Math.round((dog.deficitVolume - (dog.bolusVolume * dog.bolusNumber)) / 2 / 18 + dog.maintenanceRate + dog.ongoinigLoss)),
})

export const cat = reactive({
  weight: 0,
  dehydration: 0,
  ongoinigLoss: 0,
  bolusNumber: 0,
  bolusVolume: computed(() => Math.round(cat.weight * 10)),
  maintenanceRate: computed(() => Math.round(cat.weight ** 0.75 * 80 / 24)),
  deficitVolume: computed(() => Math.round(cat.weight * cat.dehydration * 10)),
  surgicalRate: computed(() => Math.round(cat.weight * 5)),
  initialRate: computed(() => Math.round((cat.deficitVolume - (cat.bolusVolume * cat.bolusNumber)) / 2 / 6 + cat.maintenanceRate + cat.ongoinigLoss)),
  ongoingRate: computed(() => Math.round((cat.deficitVolume - (cat.bolusVolume * cat.bolusNumber)) / 2 / 18 + cat.maintenanceRate + cat.ongoinigLoss)),
})
