import { writable } from "svelte/store";

export const data = writable([
  { note: 1, isDone: false },
  { note: 2, isDone: false },
]);
