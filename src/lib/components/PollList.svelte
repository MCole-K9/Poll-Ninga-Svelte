<script lang="ts">
import {fade, scale, slide, fly, crossfade} from "svelte/transition"
import {flip} from "svelte/animate"
import PollDetails from "./PollDetails.svelte";
import PollStore from "./stores/PollStore";




</script>

<div class="poll-list">
    {#each $PollStore as poll (poll.id)}
      <div in:fly out:scale|local animate:flip={{duration: 500}}>
        <PollDetails  {poll} />
      </div>
      {:else}
        <p in:slide>No Polls yet.. Added poll to get Started</p>
    {/each} 
</div>

<style>
  .poll-list{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    margin: 0 auto;

  }
</style>