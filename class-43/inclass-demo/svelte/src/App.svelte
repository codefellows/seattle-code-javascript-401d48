<script>
  import svelteLogo from "./assets/svelte.svg";
  import Counter from "./lib/Counter.svelte";
  let name = "";
</script>

<main>
  <h1>Salmon Cookies</h1>

  <div class="card">
    <Counter />
  </div>

  <input bind:value={name} placeholder="enter your name" />
  <p>Hello {name || "stranger"}!</p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
