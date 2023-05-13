<script lang="ts" xmlns="http://www.w3.org/1999/html">
	import { projects } from '../routes/projects/projects';
</script>

<div class="main">
	<div class="max-w-screen-md space-y-5 mx-auto">
		<p class="text-center text-[#5865F2] text-3xl">My actual projects</p>
		<div class="grid grid-cols-1 gap-4">
			{#each projects as project}
				<div class="card">
					<div class="projectName text-2xl text-center p-1"><span class="text-[#5865F2]">{project.name}</span></div>
					<div class="projectDescription">{project.description}</div>
					<div class="projectStack">{project.stack.join(', ')}</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200&display=swap');
	.main {
		display: grid;
		align-content: center;
		align-items: center;
		padding: 2.25rem;
		font-weight: 400;
		background: #f5f5f5;
		font-family: 'Josefin Sans', serif;
		height: 100vh;
	}
	.card {
		padding-left: 1rem;
		color: black;
		/*background-color: black;*/
		border: 1px solid #5865f2;
	}
	.projectName {

	}
	.projectDescription {
	}
	.projectStack {
	}
</style>
