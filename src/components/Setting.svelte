<script lang="ts">
	import { clickOutside } from '@/utils/general';
	import type { ComponentType } from 'svelte';
	import scaleFade from '@/animations/scale_fade';
	import { fade, fly } from 'svelte/transition';
	import { ripple } from 'svelte-ripple-action';
	import { goto } from '$app/navigation';

	interface Item {
		id: number;
		text: string;
		href?: string;
		click?: () => void;
		icon?: ComponentType;
		lineBelow?: boolean;
		special?: boolean;
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
				class="sm:absolute sm:py-5 sm:w-[460px] border-primary-100 border-[1px] z-[1000] sm:rounded-xl fixed smMax:bottom-0 smMax:inset-x-0 overflow-hidden bg-background shadow-custom ltr:origin-top-left rtl:origin-top-right bottom-11 right-11 origin-bottom-right"
			>
				{#each items as item (item.id)}
					<button
						on:click={item.click ? item.click : () => goto(item.href || '')}
						data-special={item.special}
						class="group bg-background text-etc-3 !shadow-none w-full !p-3 capitalize text-sm flex items-center justify-start"
						use:ripple
					>
						<div class="w-5 h-5 mx-1">
							<svelte:component this={item.icon} />
						</div>

						<span
							class="mx-1 group-data-[special=true]:text-etc-1 group-data-[special=true]:text-lg"
							>{item.text}</span
						>
					</button>

					{#if item.lineBelow}
						<hr class="border-primary-100 mx-5" />
					{/if}
				{/each}
			</div>
		{/if}
	</div>
</div>
