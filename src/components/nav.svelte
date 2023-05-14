<div class="navbar text-2xl myBar">
	<div class="flex-1" />
	<div class="flex-none px-0.5">
		<a href="/" class="px-2 mylink">Home</a>
		<a href="/projects" class="px-2 mylink">Projects</a>
		<a href="/about" class="px-2 mylink">About me</a>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200&display=swap');
	:global(body) {
		background: #f5f5f5;
	}
	.myBar {
		font-family: 'Josefin Sans', serif;
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
