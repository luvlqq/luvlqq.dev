<script lang="ts">
import {projects} from "../routes/projects/projects";

console.log(projects);
</script>

<div class="main">
  <div class="max-w-screen-md space-y-5 mx-auto">
    <p class="text-center text-[#5865F2] text-3xl">The 🔒 sign means that the project is closed.</p>
  <div class="grid grid-cols-1 gap-4">
    {#each projects as project}
    <div class="card">{project.name} , {project.description}, {project.stack}</div>
    {/each}
  </div>
  </div>
</div>
<style>

    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200&display=swap');
    .main{
        display: grid;
        align-content: center;
        align-items: center;
        padding: 2.25rem;
        font-weight: 400;
        background: #F5F5F5;
        font-family: "Josefin Sans",serif;
        height: 100vh;
    }
    .card {
        padding-left: 1rem;
        color: white;
        background-color: black;
    }

</style>