<script lang="ts">
	import { ripple } from 'svelte-ripple-action';
	import 'svelte-ripple-action/ripple.css';
</script>

<div class="flex flex-row items-center justify-center space-x-2 fixed top-5 right-7">
	<button class="bg-primary-40 size-[13px] rounded-full transition-all hover:scale-125" use:ripple
	></button>
	<button class="bg-etc-2 size-[13px] rounded-full transition-all hover:scale-125" use:ripple
	></button>
	<button class="bg-etc-1 size-[13px] rounded-full transition-all hover:scale-125" use:ripple
	></button>
</div>
