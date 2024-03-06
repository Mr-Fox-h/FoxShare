<script lang="ts" context="module">
	interface Item {
		type: 'file' | 'folder';
		name: string;
	}
</script>

<script lang="ts">
	import { ripple } from 'svelte-ripple-action';

	let items: Item[] = [
		{ type: 'folder', name: 'Folder' },
		{ type: 'file', name: 'File' },
		{ type: 'file', name: 'File' },
		{ type: 'folder', name: 'Folder' },
		{ type: 'file', name: 'File' },
		{ type: 'file', name: 'File' },
		{ type: 'folder', name: 'Folder' },
		{ type: 'file', name: 'File' },
		{ type: 'file', name: 'File' },
		{ type: 'folder', name: 'Folder' },
		{ type: 'file', name: 'File' },
		{ type: 'file', name: 'File' },
		{ type: 'folder', name: 'Folder' },
		{ type: 'file', name: 'File' },
		{ type: 'file', name: 'File' }
	];

	$: internalItems = items.sort((a, b) => (a.type === 'folder' && b.type === 'file' ? -1 : 1));
</script>

<div class="w-full h-[87%] pl-[35px] py-[10px] pr-[150px]">
	<div class="relative rounded-xl size-full overflow-hidden">
		<div
			class="bg-primary-40 absolute size-[908px] rounded-full -left-96 -bottom-96 blur-[200px]"
		></div>
		<div class="bg-glass-black relative border-2 border-primary-100 rounded-xl size-full">
			<div
				class="bg-background w-full h-[39px] rounded-t-xl flex items-center justify-between px-3"
			>
				<div class="flex items-center">
					<button class="size-3 flex items-center justify-center mx-1">
						<svg
							class="fill-primary-80 transition-colors hover:fill-primary-40"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 320 512"
							><path
								d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
							/></svg
						>
					</button>
					<button class="size-3 flex items-center justify-center mx-1">
						<svg
							class="fill-primary-80 transition-colors hover:fill-primary-40"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 320 512"
							><path
								d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
							/></svg
						>
					</button>
					<p class="text-etc-3 pl-3">~/address/file</p>
				</div>
				<div class="flex items-center">
					<button class="size-5 flex items-center justify-center mx-2">
						<svg
							class="fill-primary-100 transition-colors hover:fill-primary-40"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							><path
								d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
							/></svg
						>
					</button>
					<button class="size-5 flex items-center justify-center mx-2">
						<svg
							class="fill-primary-100 transition-colors hover:fill-primary-40"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							><path
								d="M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"
							/></svg
						>
					</button>
				</div>
			</div>
			<div class="flex flex-wrap mx-5 my-10">
				{#each internalItems as i}
					<button
						class="ml-5 mt-5 size-24 flex flex-col items-center justify-center rounded-lg"
						use:ripple
					>
						{#if i.type === 'folder'}
							<svg
								width="102"
								height="80"
								viewBox="0 0 102 80"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M15.7073 34.0895L0 61.1051V11.375C0 5.10098 5.08229 0 11.3333 0H32.1406C35.151 0 38.0375 1.19082 40.1625 3.32363L44.8552 8.03359C46.9802 10.1664 49.8667 11.3572 52.8771 11.3572H73.6667C79.9177 11.3572 85 16.4582 85 22.7322V28.4197H25.5C21.4625 28.4197 17.7437 30.5703 15.7073 34.0717V34.0895ZM20.5948 36.951C21.6219 35.1914 23.4813 34.125 25.5 34.125H96.3333C98.3698 34.125 100.229 35.2092 101.239 36.9865C102.248 38.7639 102.248 40.9322 101.221 42.6918L81.3875 76.8168C80.3781 78.5586 78.5188 79.625 76.5 79.625H5.66667C3.63021 79.625 1.77083 78.5408 0.761458 76.7635C-0.247917 74.9861 -0.247917 72.8178 0.779167 71.0582L20.6125 36.9332L20.5948 36.951Z"
									fill="#13A277"
								/>
							</svg>
						{:else if i.type === 'file'}
							<svg
								width="60"
								height="80"
								viewBox="0 0 60 80"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M0 10C0 4.48438 4.48438 0 10 0H35V20C35 22.7656 37.2344 25 40 25H60V70C60 75.5156 55.5156 80 50 80H10C4.48438 80 0 75.5156 0 70V10ZM60 20H40V0L60 20Z"
									fill="#13A277"
								/>
							</svg>
						{/if}
						<p class="text-etc-3">{i.name || 'unkown'}</p>
					</button>
				{/each}
			</div>
		</div>
	</div>
</div>
