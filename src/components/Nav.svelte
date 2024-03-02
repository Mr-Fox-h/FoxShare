<script lang="ts">
	import { ripple } from 'svelte-ripple-action';

	let fileEnable: boolean = true;
	let logEnable: boolean = false;

	const showFiles = () => {
		fileEnable = true;
		logEnable = false;
	};

	const showLog = () => {
		fileEnable = false;
		logEnable = true;
	};
</script>

<div
	class="bg-[#2A292E] opacity-[100%] w-28 h-full flex flex-col items-center justify-center fixed right-0 px-4 overflow-hidden"
>
	<div class="fixed top-20">
		<div class="flex flex-col items-center justify-center relative">
			<img src="Images/Logo.png" alt="logo" />
			<div class="bg-primary-40 blur-xl w-16 h-5 absolute -bottom-3 -z-10"></div>
		</div>
		<hr class="w-full border-primary-100 rounded-[10px] my-10" />
		<div class="flex flex-col items-center justify-center">
			<ul class=" mt-5">
				<li class="relative group my-5" data-enable={fileEnable}>
					<button
						on:click={showFiles}
						class="group-data-[enable=true]:bg-primary-100 size-[70px] rounded-3xl flex items-center justify-center transition-colors duration-300"
						use:ripple
					>
						<svg
							class="fill-primary-100 group-data-[enable=true]:fill-primary-40 size-[35px] transition-colors duration-300"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 576 512"
							><path
								d="M88.7 223.8L0 375.8V96C0 60.7 28.7 32 64 32H181.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H416c35.3 0 64 28.7 64 64v32H144c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224H544c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480H32c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z"
							/></svg
						>
					</button>
					<div
						class="bg-none group-data-[enable=true]:bg-primary-40 absolute top-1/2 -left-4 -translate-x-1/2 -translate-y-1/2 w-[9px] h-[100px] rounded-r-3xl transition-colors duration-300"
					></div>
				</li>
				<li class="relative group" data-enable={logEnable}>
					<button
						on:click={showLog}
						class="group-data-[enable=true]:bg-primary-100 size-[70px] rounded-3xl flex items-center justify-center transition-colors duration-300"
						use:ripple
					>
						<svg
							class="fill-primary-100 group-data-[enable=true]:fill-primary-40 size-[35px] transition-colors duration-300"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 576 512"
							><path
								d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
							/></svg
						>
					</button>
					<div
						class="bg-none group-data-[enable=true]:bg-primary-40 absolute top-1/2 -left-4 -translate-x-1/2 -translate-y-1/2 w-[9px] h-[100px] transition-colors duration-300 rounded-r-3xl"
					></div>
				</li>
			</ul>
		</div>
		<div class="flex flex-col items-center justify-center">
			<button
				class="fixed bottom-5 size-[70px] rounded-3xl flex items-center justify-center transition-all duration-300 hover:rotate-90"
			>
				<svg
					class="fill-primary-100 size-[35px]"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					><path
						d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
					/></svg
				>
			</button>
		</div>
	</div>
</div>
