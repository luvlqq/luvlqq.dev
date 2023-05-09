<svelte:head>

</svelte:head>

<div class="hero flex items-center justify-center">
  <div class="hero-content text-center">
    <div class="text-center">
      <h1 class="text-6xl font-bold outline-none">
        <p>IVAN LIALIUK</p>
      </h1>

      <p class="mt-5 text-5xl">
        BACKEND DEVELOPER
      </p>

      <div class="mt-10">
        <a class="text-2xl duration-500 mr-6 text-3xl mylink" href="/projects">Projects</a>
        <a class="text-2xl duration-500 mr-6 text-3xl mylink" href="/about">About</a>
      </div>
    </div>
  </div>
</div>


<style>
    .mylink {
        text-decoration: none;
        background-image: linear-gradient(currentColor, currentColor);
        background-position: 0% 100%;
        background-repeat: no-repeat;
        background-size: 0% 2px;
        transition: background-size .3s;
    }

    .mylink:hover {
        background-size: 100% 2px;
    }
</style>