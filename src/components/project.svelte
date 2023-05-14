<script lang="ts" xmlns="http://www.w3.org/1999/html">
	import { projects } from '../routes/projects/projects';
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200&display=swap');

    .main {
        align-content: center;
        align-items: center;
        font-weight: 400;
        background: #f5f5f5;
        font-family: 'Josefin Sans', serif;
        min-height: 100vh;
        padding: 2.2em;
    }
    .card {
        display: grid;
        padding-left: 1rem;
        color: black;
        /*background-color: black;*/
        border: 1px solid grey;
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

    details[open] > summary {
    }
</style>


<div class="main">
	<div class="max-w-screen-md space-y-5 mx-auto">
		<p class="text-center text-4xl font-bold outline-none">MY ACTUAL PROJECTS</p>
		<div class="grid grid-cols-1 gap-4">

			{#each projects as project}
				<div class="card">
          <details>
          <summary>
					<div class="projectName">
						<span class="font-bold text-3xl space-y-5 space-x-2">{project.name}</span>
					</div>
          </summary>
					<div class="text-2xl">{project.description}</div>
					<div class="text-2xl text-[#5865F2]">{project.stack.join(', ')}</div>
					{#if project.url}
						<a
							class="hover:text-[#5865F2] duration-500 font-bold px-2"
							target="_blank"
							rel="noreferrer"
							href={project.url}>[URL]</a
						>
					{/if}
          </details>
				</div>
			{/each}
		</div>
	</div>
</div>


