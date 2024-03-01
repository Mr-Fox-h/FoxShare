<script lang="ts">
	import '@assets/main.css';
	import BasicNav from '@cp/BasicNav.svelte';
	import { blur } from 'svelte/transition';

	export let data;
</script>

{#key data.url}
	<div
		in:blur={{ duration: 300, delay: 300 }}
		out:blur={{ duration: 300 }}
		class="w-screen h-screen"
	>
		<slot />
	</div>
{/key}
<BasicNav />
