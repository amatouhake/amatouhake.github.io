<script lang="ts">
  import "normalize.css";
  import router from "page";
  import { href } from "./store";
  import Home from "./components/pages/Home.svelte";
  import About from "./components/pages/About.svelte";
  import NotFound from "./components/pages/NotFound.svelte";
  import type { SvelteComponent } from "svelte";

  const route = (path: string, page: typeof SvelteComponent) => {
    router(path, () => href.update(() => page));
  };

  route("/", Home);
  route("/about", About);
  route("*", NotFound);

  router();
</script>

<main>
  <svelte:component this={$href} />
</main>

<style lang="scss">
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
</style>
