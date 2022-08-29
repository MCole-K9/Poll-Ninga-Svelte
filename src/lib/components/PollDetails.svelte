<script lang="ts">
import {tweened} from "svelte/motion"
import type { Poll } from "../Types";
import Button from "./Button.svelte";
import Card from "./Card.svelte";
import PollStore from "./stores/PollStore";
export let poll: Poll;


$: totalVotes = poll.voteA + poll.voteB;

$: percentA = Math.floor(poll.voteA / totalVotes * 100) || 0;
$: percentB = Math.floor(poll.voteB / totalVotes * 100) || 0;

//tweened percentage

const tweenedA = tweened(0);
const tweenedB = tweened(0);

$: tweenedA.set(percentA);

$: tweenedB.set(percentB);

function handleVote(option: string, pollId: number){

    PollStore.update((currentPolls)=>{

        currentPolls =  currentPolls.map((poll)=>{

            if (poll.id === pollId) {

                if (option == "A"){
                    poll.voteA ++;
                }else{
                    poll.voteB ++
                }
                    
            }
            return poll;

        })

        return currentPolls;
    })
    
}




function handleDelete(pollId: number) {
    $PollStore = $PollStore.filter((poll)=>{
      return pollId !== poll.id
    })
}
</script>

<Card>
    <div class="poll">
        <h3>{poll.question.question}</h3>
        <p>Total Votes: {totalVotes}</p>
        <div class="answer" on:click={()=>{handleVote("A", poll.id)}}>
            <div class="percent percent-a" style="width: {$tweenedA}% ;"></div>
            <span>{poll.question.answerA} ({poll.voteA})</span>
        </div>
        <div class="answer" on:click={()=>{handleVote("B", poll.id)}}>
            <div class="percent percent-b" style="width: {$tweenedB}% ;"></div>
            <span>{poll.question.answerB} ({poll.voteB})</span>
        </div>
        <div class="delete">
          <Button  props={{type: "primary", flat: true}} on:click={()=>{handleDelete(poll.id)}}>Delete</Button>
        </div>
    </div>
</Card>


<style>
    h3{
    margin: 0 auto;
    color: #555;
  }
  p{
    margin-top: 6px;
    font-size: 14px;
    color: #aaa;
    margin-bottom: 30px;
  }
  .answer{
    background: #fafafa;
    cursor: pointer;
    margin: 10px auto;
    position: relative;
  }
  .answer:hover{
    opacity: 0.6;
  }
  span{
    display: inline-block;
    padding: 10px 20px;
  }

  .percent{
    position: absolute;
    height: 100%;
    
  }
  .percent-a{
    background-color: rgba(217, 27, 66, 0.2);
  }

  .percent-b{
    background-color: rgba(70, 196, 150, 0.2);
  }
  .delete{
    margin: 10px 0 ;
    text-align: center;
  }
</style>