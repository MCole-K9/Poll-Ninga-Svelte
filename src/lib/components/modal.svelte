<script lang="ts">
    export let message: string | undefined = undefined;
    export let showModal = false;
    export let isPromo = false
</script>

<section id="modal">
    {#if showModal}
        <div class="backdrop" class:promo={isPromo} on:click|self> 
            <div class="modal">
                <p>{message}</p>
            </div>
        </div>        
    {/if}


</section>

<style>
    .backdrop{
        width: 100%;
        height: 100%;
        position: fixed;
        background: rgba(0, 0, 0, 0.8);
    }

    .modal{
        padding: 10px;
        border-radius: 10px;
        max-width: 400px;
        margin: 10% auto;
        text-align: center;
        background-color: white;
    }
    .promo .modal{
        background-color: crimson;
        color: white ;
    }
</style>