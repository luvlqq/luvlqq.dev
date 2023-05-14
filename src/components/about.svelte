<script>
	import { Technologies } from '../routes/about/page';
	const email = 'yadjdiva@gmail.com';
</script>

<div class="main">
	<div class="flex flex-col space-y-16 max-w-4xl px-5 mx-auto">
		<div class="space-y-10">
			<div
				class="flex justify-between font-bold items-center flex-col space-y-2 sm:flex-row sm:space-y-0"
			>
				<h1 class="text-5xl outline-none text-center sm:flex sm:items-center sm:space-x-2">
					<span class="text-black">About</span>
				</h1>
			</div>
		</div>
		<p class="text-2xl">
			Hello! <span class="text-[#5865F2]">My name is Ivan</span>, I was born in 2002 in Belarus. I
			am study in <span class="text-[#5865F2]">Yanka Kupala State University of Grodno.</span> I
			started my journey of learning programming in 2019 when I got my hands on the book
			<span class="text-[#5865F2]">"Self-Taught Programmer".</span> This book was dedicated to
			Python, which at that time I didn't know at all. I quickly read the whole book and tried all
			the exercises in practice. In university, I started programming the backend part using the
			Django framework. However, in my third year of university, I got introduced to
			<span class="text-[#5865F2]">Node.js.</span>
			It was incredible. I was very much hooked on development specifically on Node.js. I actively began
			learning JS. After that, I started learning Node.js and Express.js. The next step was to learn
			TypeScript. It wasn't that difficult because besides Python and JS, I wrote on strictly typed languages.
			After all this, I met NestJS. After I wrote my first mini-project on Nest, I never went back to
			Express.
			<span class="text-[#5865F2]">Nest is the best Node.js framework for server development.</span>
			Now I am actively developing on it, as well as writing the client-side using Svelte.
		</p>
		<div class="space-y-10">
			<div
				class="flex justify-between font-bold items-center flex-col space-y-2 sm:flex-row sm:space-y-0"
			>
				<h1 class="text-5xl outline-none text-center sm:flex sm:items-center sm:space-x-2">
					<span class="text-black">Hobby</span>
				</h1>
			</div>
		</div>
		<p class="text-2xl">
			For 10 years of my childhood, <span class="text-[#5865F2]">I played hockey.</span> It was a
			very exciting time. After I stopped playing hockey, video games came into my life. Tom
			Clancy's Rainbow Six Siege captured my heart the most. Unforgettable memories. Now in my free
			time, I prefer to
			<span class="text-[#5865F2]"
				>watch recordings of meetups, listen to podcasts, watch technology videos on YouTube, or
				read a books.</span
			>
		</p>
		<div class="space-y-10">
			<div
				class="flex justify-between font-bold items-center flex-col space-y-2 sm:flex-row sm:space-y-0"
			>
				<h1 class="text-5xl outline-none text-center sm:flex sm:items-center sm:space-x-2">
					<span class="text-black">Technologies</span>
				</h1>
			</div>
		</div>
		<p class="text-2xl">
			<span class="text-[#5865F2]">{Technologies.join(', ')}.</span>
		</p>
		<div class="space-y-10">
			<div
				class="flex justify-between font-bold items-center flex-col space-y-2 sm:flex-row sm:space-y-0"
			>
				<h1 class="text-5xl outline-none text-center sm:flex sm:items-center sm:space-x-2">
					<span class="text-black">Links</span>
				</h1>
			</div>
		</div>
		<p class="text-2xl">yadjdiva@gmail.com</p>
		<p class="text-2xl">
			<a
				class="text-2xl duration-500 mr-6 text-3xl mylink"
				target="_blank"
				href="https://t.me/yvnglual">Telegram</a
			>
			<a
				class="text-2xl duration-500 mr-6 text-3xl mylink"
				target="_blank"
				href="https://github.com/luvlqq">GitHub</a
			>
		</p>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200&display=swap');

	.main {
		align-content: center;
		align-items: center;
		font-weight: 400;
		background: #f5f5f5;
		font-family: 'Josefin Sans', serif;
		min-height: 100vh;
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
