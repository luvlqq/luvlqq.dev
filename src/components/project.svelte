<script lang="ts" xmlns="http://www.w3.org/1999/html">
	import { projects } from '../routes/projects/projects';
</script>

<div class="main">
	<div class="max-w-screen-md space-y-5 mx-auto space-y-16">
		<p class="text-center text-5xl font-bold outline-none">My projects</p>
		<div class="grid grid-cols-1 gap-4">
			{#each projects as project}
				<div class="card">
					<details class="text-left py-2 group [&_summary::-webkit-details-marker]:hidden">
						<summary class="flex items-center justify-between cursor-pointer">
							<div>
								<span class="font-bold text-3xl space-y-5 space-x-2 mylink">{project.name}</span>
							</div>
							<svg
								class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-500 group-open:-rotate-180"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
            </summary>
						<div class="text-2xl text-left">{project.description}</div>
						<div class="text-2xl text-[#5865F2] text-left">{project.stack.join(', ')}</div>
						{#if project.url}
							<a
								class="hover:text-[#5865F2] duration-500 font-bold px-3"
								target="_blank"
								rel="noreferrer"
								href={project.url}>[URL]</a
							>
						{/if}
            {#if project.github}
              <a
                class="hover:text-[#5865F2] duration-500 font-bold px-3 text-left"
                target="_blank"
                rel="noreferrer"
                href={project.github}>[GITHUB]</a
              >
            {/if}
					</details>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200&display=swap');

	.main {
		/*align-content: center;*/
		/*align-items: start;*/
		font-weight: 400;
		background: #f5f5f5;
		font-family: 'Josefin Sans', serif;
		min-height: 100vh;
	}
	.card {
		display: grid;
      text-align: center;
		padding-left: 1rem;
		color: black;
		/*background-color: black;*/
		/*border: 1px solid grey;*/
	}
	details > summary {
		padding: 5px;
		color: #333;
		cursor: pointer;
		list-style: none;
	}

	details > div {
		padding: 10px;
	}

  .mylink {
      text-decoration: none;
      background-image: linear-gradient(currentColor, currentColor);
      background-position: 0% 100%;
      background-repeat: no-repeat;
      background-size: 0% 1px;
      transition: background-size 0.3s;
  }

  .mylink:hover {
      background-size: 100% 1px;
  }
</style>
