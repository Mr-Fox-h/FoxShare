<script lang="ts">
	import { slide } from 'svelte/transition';
	import { fade } from 'svelte/transition';

	let toggle: boolean = true;
	let mode: string[] = ['Client', 'Server'];

	const toggleFunc = () => (toggle = !toggle);
</script>

<section class="bg-background text-etc-3 size-full flex items-center justify-center">
	<div class="h-screen max-lg:hidden relative w-3/6 px-10 py-12">
		{#if toggle}
			<img
				transition:slide={{ duration: 500 }}
				src="Images/1.jpg"
				alt="client"
				class="size-full object-cover rounded-[50px]"
			/>
			<svg
				transition:fade={{ duration: 500 }}
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fill-[#E3EEEE] opacity-35"
				width="86"
				height="870"
				viewBox="0 0 86 870"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M85.858 35.6364H63.1307C62.8277 33.303 62.2064 31.197 61.267 29.3182C60.3277 27.4394 59.0852 25.8333 57.5398 24.5C55.9943 23.1667 54.161 22.1515 52.0398 21.4545C49.9489 20.7273 47.6307 20.3636 45.0852 20.3636C40.5701 20.3636 36.6761 21.4697 33.4034 23.6818C30.161 25.8939 27.661 29.0909 25.9034 33.2727C24.1761 37.4545 23.3125 42.5151 23.3125 48.4545C23.3125 54.6364 24.1913 59.8182 25.9489 64C27.7367 68.1515 30.2367 71.2879 33.4489 73.4091C36.6913 75.5 40.5246 76.5455 44.9489 76.5455C47.4337 76.5455 49.6913 76.2273 51.7216 75.5909C53.7822 74.9545 55.5852 74.0303 57.1307 72.8182C58.7064 71.5758 59.9943 70.0758 60.9943 68.3182C62.0246 66.5303 62.7367 64.5152 63.1307 62.2727L85.858 62.4091C85.464 66.5303 84.2671 70.5909 82.2671 74.5909C80.2974 78.5909 77.5852 82.2424 74.1307 85.5455C70.6761 88.8182 66.464 91.4242 61.4943 93.3636C56.5549 95.303 50.8883 96.2727 44.4943 96.2727C36.0701 96.2727 28.5246 94.4242 21.858 90.7273C15.2216 87 9.97917 81.5758 6.13068 74.4545C2.2822 67.3333 0.357955 58.6667 0.357955 48.4545C0.357955 38.2121 2.3125 29.5303 6.22159 22.4091C10.1307 15.2879 15.4186 9.87879 22.0852 6.18182C28.7519 2.48485 36.2216 0.63636 44.4943 0.63636C50.1307 0.63636 55.3428 1.42424 60.1307 3C64.9186 4.54545 69.1307 6.81818 72.767 9.81818C76.4034 12.7879 79.358 16.4394 81.6307 20.7727C83.9034 25.1061 85.3125 30.0606 85.858 35.6364ZM13.608 250L13.608 156.909H36.108L36.108 231.727H74.8352V250H13.608ZM54.233 311.909V405H31.733V311.909H54.233ZM10.5455 560L10.5455 466.909H75.4545V485.182H33.0455V504.273H72.1364V522.591H33.0455V541.727H75.4545V560H10.5455ZM82.5852 621.909V715H63.4943L26.4489 661.273H25.858L25.858 715H3.35795L3.35795 621.909H22.7216L59.358 675.545H60.1307V621.909H82.5852ZM3.6875 795.182L3.6875 776.909H82.3693V795.182H54.142L54.142 870H31.9602L31.9602 795.182H3.6875Z"
					style="mix-blend-mode:overlay"
				/>
			</svg>
		{:else}
			<img
				transition:slide={{ duration: 500 }}
				src="Images/2.jpg"
				alt="client"
				class="size-full object-cover rounded-[50px]"
			/>
			<svg
				transition:fade={{ duration: 500 }}
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fill-[#E3EEEE] opacity-35"
				width="93"
				height="870"
				viewBox="0 0 93 870"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M61.6136 29.8182C61.3106 26.4848 59.9621 23.8939 57.5682 22.0455C55.2045 20.1667 51.8258 19.2273 47.4318 19.2273C44.5227 19.2273 42.0985 19.6061 40.1591 20.3636C38.2197 21.1212 36.7652 22.1667 35.7955 23.5C34.8258 24.803 34.3258 26.303 34.2955 28C34.2348 29.3939 34.5076 30.6212 35.1136 31.6818C35.75 32.7424 36.6591 33.6818 37.8409 34.5C39.053 35.2879 40.5076 35.9848 42.2045 36.5909C43.9015 37.197 45.8106 37.7273 47.9318 38.1818L55.9318 40C60.5379 41 64.5985 42.3333 68.1136 44C71.6591 45.6667 74.6288 47.6515 77.0227 49.9545C79.447 52.2576 81.2803 54.9091 82.5227 57.9091C83.7652 60.9091 84.4015 64.2727 84.4318 68C84.4015 73.8788 82.9167 78.9242 79.9773 83.1364C77.0379 87.3485 72.8106 90.5758 67.2955 92.8182C61.8106 95.0606 55.1894 96.1818 47.4318 96.1818C39.6439 96.1818 32.8561 95.0152 27.0682 92.6818C21.2803 90.3485 16.7803 86.803 13.5682 82.0455C10.3561 77.2879 8.70455 71.2727 8.61364 64H30.1591C30.3409 67 31.1439 69.5 32.5682 71.5C33.9924 73.5 35.947 75.0152 38.4318 76.0455C40.947 77.0758 43.8561 77.5909 47.1591 77.5909C50.1894 77.5909 52.7652 77.1818 54.8864 76.3636C57.0379 75.5455 58.6894 74.4091 59.8409 72.9545C60.9924 71.5 61.5833 69.8333 61.6136 67.9545C61.5833 66.197 61.0379 64.697 59.9773 63.4545C58.9167 62.1818 57.2803 61.0909 55.0682 60.1818C52.8864 59.2424 50.0985 58.3788 46.7045 57.5909L36.9773 55.3182C28.9167 53.4697 22.5682 50.4848 17.9318 46.3636C13.2955 42.2121 10.9924 36.6061 11.0227 29.5455C10.9924 23.7879 12.5379 18.7424 15.6591 14.4091C18.7803 10.0758 23.0985 6.69697 28.6136 4.27273C34.1288 1.84848 40.4167 0.63636 47.4773 0.63636C54.6894 0.63636 60.947 1.86363 66.25 4.31818C71.5833 6.74242 75.7197 10.1515 78.6591 14.5455C81.5985 18.9394 83.0985 24.0303 83.1591 29.8182H61.6136ZM14.0455 250L14.0455 156.909H78.9545V175.182H36.5455V194.273H75.6364V212.591H36.5455V231.727H78.9545V250H14.0455ZM11.1705 405L11.1705 311.909H49.625C56.5947 311.909 62.6099 313.167 67.6705 315.682C72.7614 318.167 76.6856 321.742 79.4432 326.409C82.2008 331.045 83.5795 336.545 83.5795 342.909C83.5795 349.364 82.1705 354.848 79.3523 359.364C76.5341 363.848 72.5341 367.273 67.3523 369.636C62.1705 371.97 56.0341 373.136 48.9432 373.136H24.625V355.409H44.7614C48.1553 355.409 50.9886 354.97 53.2614 354.091C55.5644 353.182 57.3068 351.818 58.4886 350C59.6705 348.152 60.2614 345.788 60.2614 342.909C60.2614 340.03 59.6705 337.652 58.4886 335.773C57.3068 333.864 55.5644 332.439 53.2614 331.5C50.9583 330.53 48.125 330.045 44.7614 330.045H33.6705V405H11.1705ZM63.5795 362.455L86.7614 405H62.2159L39.4886 362.455H63.5795ZM25.3068 466.909L46.125 535.091H46.8977L67.7159 466.909H92.8977L61.4886 560H31.5341L0.125 466.909H25.3068ZM14.0455 715L14.0455 621.909H78.9545V640.182H36.5455V659.273H75.6364V677.591H36.5455V696.727H78.9545V715H14.0455ZM11.1705 870L11.1705 776.909H49.625C56.5947 776.909 62.6099 778.167 67.6705 780.682C72.7614 783.167 76.6856 786.742 79.4432 791.409C82.2008 796.045 83.5795 801.545 83.5795 807.909C83.5795 814.364 82.1705 819.848 79.3523 824.364C76.5341 828.848 72.5341 832.273 67.3523 834.636C62.1705 836.97 56.0341 838.136 48.9432 838.136H24.625L24.625 820.409H44.7614C48.1553 820.409 50.9886 819.97 53.2614 819.091C55.5644 818.182 57.3068 816.818 58.4886 815C59.6705 813.152 60.2614 810.788 60.2614 807.909C60.2614 805.03 59.6705 802.652 58.4886 800.773C57.3068 798.864 55.5644 797.439 53.2614 796.5C50.9583 795.53 48.125 795.045 44.7614 795.045H33.6705L33.6705 870H11.1705ZM63.5795 827.455L86.7614 870H62.2159L39.4886 827.455H63.5795Z"
					style="mix-blend-mode:overlay"
				/>
			</svg>
		{/if}
	</div>
	<div class="h-screen w-screen flex items-center justify-center">
		<div
			class="bg-[#29282D] max-h-[650px] max-w-[570px] border-primary-20 border-[1px] rounded-[10px] flex flex-col items-center justify-start p-5"
		>
			<div class="w-36 flex flex-row items-center justify-between relative mb-10">
				<button on:click={toggleFunc} class="cursor-mynormal">
					<svg
						class="fill-primary-60 size-6 transition-all hover:fill-primary-20"
						viewBox="0 0 320 512"
						><path
							d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
						/></svg
					>
				</button>
				{#if toggle}
					<h2 transition:slide={{ duration: 500 }} class="text-3xl absolute left-[20px] px-3">
						{mode[0]}
					</h2>
				{:else}
					<h2 transition:slide={{ duration: 500 }} class="text-3xl absolute left-[20px] px-3">
						{mode[1]}
					</h2>
				{/if}
				<button on:click={toggleFunc} class="cursor-mynormal">
					<svg
						class="fill-primary-60 size-6 transition-all hover:fill-primary-20"
						viewBox="0 0 320 512"
						><path
							d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
						/></svg
					>
				</button>
			</div>
			{#if toggle}
				<div
					transition:slide={{ duration: 300 }}
					class="min-w-full max-h-96 flex flex-col items-center"
				>
					<div class="w-full flex flex-row items-center justify-center my-2 px-7">
						<p class="mr-3">Server:</p>
						<input
							type="text"
							class="bg-background outline-none w-full h-8 border-primary-20 border-[1px] rounded-[10px] px-2"
						/>
					</div>
					<div class="w-full flex flex-row items-center justify-center my-2 px-7">
						<p class="mr-3">Port:</p>
						<input
							type="text"
							class="bg-background outline-none w-full h-8 border-primary-20 border-[1px] rounded-[10px] px-2"
						/>
					</div>
				</div>
			{:else}
				<div
					transition:slide={{ duration: 300 }}
					class="min-w-full max-h-96 flex flex-col items-center"
				></div>
			{/if}
			<div class="h-96 flex items-end justify-center">
				<button
					class="bg-primary-40 size-fit rounded-[10px] text-lg transition-all hover:bg-primary-20 cursor-mynormal my-3 py-1 px-8"
					>Start</button
				>
			</div>
			<div class="size-full flex flex-col items-center">
				<hr class="w-[95%] border-primary-20 rounded-[10px] mb-4" />
				<p>
					Est ea elit culpa labore officia qui dolore mollit in eu nostrud. Laborum in aliquip et
					enim ea aliqua reprehenderit id id anim aliquip. Magna anim est magna pariatur minim
					cupidatat. Ex quis id ad sit dolor labore tempor tempor irure esse cillum irure mollit.
					Irure dolor veniam ipsum ipsum elit ex qui tempor. Laborum id ut Lorem nostrud proident
					velit ullamco irure do laborum deserunt velit nisi. Irure laborum dolore cillum ad.
				</p>
			</div>
		</div>
	</div>
</section>
