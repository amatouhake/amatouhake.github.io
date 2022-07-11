import { writable } from 'svelte/store';
import type { SvelteComponent } from 'svelte';

export const href = writable<typeof SvelteComponent>();