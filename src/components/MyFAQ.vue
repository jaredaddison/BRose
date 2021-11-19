<!-- This example requires Tailwind CSS v2.0+ -->
<template>
	<div class="bg-gray-50">
		<div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
			<div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
				<h2
					class="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl"
				>
					Frequently asked questions
				</h2>
				<dl class="mt-6 space-y-6 divide-y divide-gray-200">
					<Disclosure
						as="div"
						v-for="faq in faqs"
						:key="faq.question"
						class="pt-6"
						v-slot="{ open }"
					>
						<dt class="text-lg">
							<DisclosureButton
								class="
									text-left
									w-full
									flex
									justify-between
									items-start
									text-gray-400
								"
							>
								<span class="font-medium text-gray-900">
									{{ faq.question }}
								</span>
								<span class="ml-6 h-7 flex items-center">
									<ChevronDownIcon
										:class="[
											open ? '-rotate-180' : 'rotate-0',
											'h-6 w-6 transform',
										]"
										aria-hidden="true"
									/>
								</span>
							</DisclosureButton>
						</dt>
						<DisclosurePanel as="dd" class="mt-2 pr-12">
							<p class="text-base text-gray-500">
								{{ faq.answer }}
							</p>
						</DisclosurePanel>
					</Disclosure>
				</dl>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
	import { ChevronDownIcon } from '@heroicons/vue/outline'

	const faqs = [
		{
			question: "Why bundle veterinary care?",
			answer: "The focus needs to be on patient care and not funds. Once a level of care has been agreed to, than every test and treatment allocated within that bundle is available for the clinician to make the best decisions for care.",
		},
		{
			question: "What if the patient needs a higher level of care?",
			answer: "If a patient requires care that is not within the level of care agreed on, than a conversation needs to be had with the pet's family to reassign the level of care and associated costs need to be discussed.",
		},
		{
			question: "Is there any discretion",
			answer: "The senior vet on shift has the ability to make small discretions within the levels of care, however for the most part if a test or treatment is found in a higher level of care, that is the level of care the patient requires."
		},
	]
</script>