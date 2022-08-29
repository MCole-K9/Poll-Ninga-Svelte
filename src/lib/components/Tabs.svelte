<script lang="ts">
    import {createEventDispatcher} from "svelte"

    export let items: string[];
    export let activeItem:string;

    let dispatch = createEventDispatcher<{
        changeTab: {index: number}
    }>();

</script>

<section id="tabs" class="tabs">
    <ul>
        {#each items as item , index }
            <li on:click={()=>{dispatch("changeTab", {index})}}>
               <div class:active={item == activeItem}>{item}</div> 
            </li>
        {/each}
    </ul>

</section>

<style>
    .tabs{
        margin-bottom: 40px;
    }
    ul{
        display: flex;
        justify-content: center;
        padding: 0;
        list-style-type: none;
    }

    li{
        margin: 0 16px;
        font-size: 18px;
        color: #555;
        cursor: pointer;
    }
    .active{
        color: #d91b42;
        border-bottom: 2px solid #d91b42;
        padding-bottom: 8px;
    }
</style>