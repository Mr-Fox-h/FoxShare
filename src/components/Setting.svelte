<script lang="ts">
	import { clickOutside } from '@/utils/general';
	import type { ComponentType } from 'svelte';
	import scaleFade from '@/animations/scale_fade';
	import { fade, fly } from 'svelte/transition';
	import { ripple } from 'svelte-ripple-action';

	interface Item {
		id: number;
		text: string;
		href?: string;
		click?: () => void;
		icon?: ComponentType;
		lineBelow?: boolean;
	}

	let className = '';
	export let id: string = '';
	export let open = false;
	export let items: Item[] = [];
	export let distanceMenu: string = '8';
	export let transition: 'fly' | 'scale' = 'scale';
	export { className as class };

	let width = 0;

	$: transitionFnc = width < 640 ? fly : transition === 'scale' ? scaleFade : fly;
	$: params =
		width < 640
			? { duration: 500, y: '100%' }
			: transition === 'scale'
				? { duration: 100 }
				: { duration: 100, y: -10 };
</script>

<svelte:window bind:outerWidth={width} />
<div class={className}>
	<div class="relative inline-block">
		<!-- Dropdown toggle button -->
		<slot />

		<!-- Dropdown menu -->
		{#if open}
			<div
				class="fixed inset-0 z-[1000] backdrop-blur-sm sm:hidden"
				transition:fade={{ duration: 100 }}
			></div>
			<div
				{id}
				use:clickOutside
				transition:transitionFnc={params}
				style={`margin-top: ${distanceMenu}px`}
				on:click_outside={() => (open = false)}
				class="sm:absolute sm:py-2 sm:w-56 sm:rounded-md fixed smMax:bottom-0 smMax:inset-x-0 z-40 overflow-hidden bg-background shadow-custom ltr:origin-top-left rtl:origin-top-right bottom-full right-0 origin-bottom-right"
			>
				{#each items as item (item.id)}
					<button
						on:click={item.click}
						class="group bg-background text-etc-3 !shadow-none w-full !justify-start !rounded-none !p-3 capitalize text-sm data-[read=true]:hover:bg-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 data-[read=true]:dark:hover:bg-gray-900"
						use:ripple
					>
						<div class="w-5 h-5 mx-1">
							<svelte:component this={item.icon} />
						</div>

						<span class="mx-1">{item.text}</span>
					</button>

					{#if item.lineBelow}
						<hr class="border-primary-100 mx-5" />
					{/if}
				{/each}
			</div>
		{/if}
	</div>
</div>
