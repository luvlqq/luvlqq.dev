<script lang="ts">
	import '../app.css';
	import Footer from '../components/footer.svelte';
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';
  inject({ mode: dev ? 'development' : 'production' });
</script>

<slot />
<!--<Footer/>-->
