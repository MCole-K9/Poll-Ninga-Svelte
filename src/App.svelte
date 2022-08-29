<script lang="ts">
import Button from "./lib/components/Button.svelte";
import CreatePollForm from "./lib/components/CreatePollForm.svelte";
import Header from "./lib/components/Header.svelte";
import PollList from "./lib/components/PollList.svelte";
import Tabs from "./lib/components/Tabs.svelte"
import type { Poll, Question } from "./lib/Types";


//tabs

let items = ["Current Polls", "Add New Poll"]
let activeItem = items[0]



function changeTab(event: CustomEvent<{index:number}>){
  activeItem = items[event.detail.index]
}



</script>

<Header  />
<main>
  <Tabs {items} {activeItem} on:changeTab={changeTab} />
  {#if activeItem == items[0]}
      <PollList  />

    {:else if activeItem === items[1]}

     <CreatePollForm  on:added={()=>{activeItem = items[0];}}/>

  {/if}
</main>

<style>
  main{
    max-width: 960px;
    margin: 40px auto;
  }

</style>