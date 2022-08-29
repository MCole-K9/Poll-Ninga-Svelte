import type { Poll } from "src/lib/Types";
import { writable } from "svelte/store";

const PollStore = writable<Poll[]>([])

 export default PollStore;