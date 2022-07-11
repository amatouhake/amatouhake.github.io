<script lang="ts">
  export let href: string;
</script>

<span on:click={() => (window.location.href = href)}>
  <slot />
</span>
