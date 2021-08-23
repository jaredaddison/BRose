<template>
	<div class="bg-white">
		<div class="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
			<div class="sm:flex sm:flex-col sm:align-center">
				<h1 class="text-5xl font-extrabold text-gray-900 sm:text-center">
					Pricing Bundles
				</h1>
				<p class="mt-5 text-xl text-gray-500 sm:text-center">
					Improving Standards of Care through Veterinary Bundles
				</p>
			</div>
			<div
				class="
					mt-12
					space-y-4
					sm:mt-16
					sm:space-y-0
					sm:grid sm:grid-cols-2
					sm:gap-6
					lg:max-w-4xl
					lg:mx-auto
					xl:max-w-none
					xl:mx-0
					xl:grid-cols-4
				"
			>
				<div
					v-for="bundle in bundles"
					:key="bundle.name"
					class="
						border border-gray-200
						rounded-lg
						shadow-sm
						divide-y divide-gray-200
					"
				>
					<div class="p-6">
						<h2 class="text-lg leading-6 font-medium text-gray-900">
							{{ bundle.name }}
						</h2>
						<p class="mt-4 text-sm text-gray-500">
							{{ bundle.description }}
						</p>
						<p class="mt-8">
							<span class="text-4xl font-extrabold text-gray-900">
								>$ {{ bundle.value }}
							</span>
							{{ " " }}
							<span class="text-base font-medium text-gray-500">
								value when charged individually
							</span>
						</p>
						<p
							class="
								mt-8
								block
								w-full
								bg-gray-800
								border border-gray-800
								rounded-md
								py-2
								text-lg
								font-semibold
								text-white text-center
								hover:bg-gray-900
							"
						>
							${{ bundle.cost }}
							<br />
							Bundle Price
						</p>
					</div>
					<div class="pt-6 pb-8 px-6">
						<h3
							class="text-xs font-medium text-gray-900 tracking-wide uppercase"
						>
							What's included
						</h3>
						<ul class="mt-6 space-y-4">
							<li
								v-for="item in bundle.items"
								:key="item"
								class="flex space-x-3"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									aria-hidden="true"
									role="img"
									width="24"
									height="24"
									preserveAspectRatio="xMidYMid meet"
									viewBox="0 0 24 24"
								>
									<g fill="none">
										<path
											d="M5 13l4 4L19 7"
											stroke="green"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</g>
								</svg>
								<span class="text-sm text-gray-500">{{ item }}</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	const bundles = [
		{
			name: "Minimum Database",
			cost: 350,
			value: 1000,
			description:
				"This bundle is run on all admitted patients, or on those patients where a minimum database is required either pre-consultation or as part of a consultation to help decide if a patient requires admission for further investigation.",
			items: [
				"Packed Cell Volume (PCV)",
				"Total Proteins (TSP)",
				"Blood Gas Analysis",
				"Lactate",
				"Electrolytes including ionised Calcium",
				"Urea",
				"Creatinine",
				"Bedside Ultrasound (A-FAST, T-FAST, Vet-BLUE)",
				"SpO2",
				"Remote Support"
			]
		}	
	]
</script>
