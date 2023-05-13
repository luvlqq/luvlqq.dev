<script lang="ts">
  import { onMount } from "svelte";

  interface LynardAPI {
    success: boolean;
    data: {
      listening_to_spotify: boolean;
      spotify: { song: string; artist: string; track_id: string };
      kv: { cityName: string; cityMapURL: string };
    };
  }

  export let pageViews = 0;

  $: lynardResponse = <LynardAPI>{};
  $: songText = "Loading...";

  let cityData = { name: "Planet Earth", url: "https://maps.google.com" };

  async function getLynardInfo() {
    try {
      const lynardRequest = await fetch("https://api.lanyard.rest/v1/users/432085389948485633");

      lynardResponse = await lynardRequest.json();
    } catch {
      console.log('err');
    }

    if (lynardResponse?.success) {
      const { data } = lynardResponse;

      cityData.name = data.kv.cityName;
      cityData.url = data.kv.cityMapURL;

      if (!data.listening_to_spotify) {
        songText = "Not playing anything.";
      } else {
        const { song, artist, track_id: trackId } = data.spotify;
        const songURL = `https://open.spotify.com/track/${trackId}`;

        const songTitle = (text: string) => {
          const shortText = `${text.slice(0, 15).trimEnd()}...`;

          return text.length > 15 ? shortText : text;
        };

        songText = `<a href="${songURL}" target="_blank">${songTitle(song)} [${songTitle(artist)}]</a>`;
      }
    }
  }

  onMount(async () => {
    await getLynardInfo();

    setInterval(async () => await getLynardInfo(), 1000 * 10);
  });
</script>

<div class="w-full select-none">
  <div class="text-center mx-1 md:mx-5 pb-1 mt-5">
    Grodno, Belarus
    </div>
</div>
