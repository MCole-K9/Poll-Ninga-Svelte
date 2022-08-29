<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type {Poll, Question} from "../Types";
    import Button from "./Button.svelte";
    import PollStore from "./stores/PollStore";


    let dispatch = createEventDispatcher<{added, help: {elliot: string}}>();


    

    let fields: Question = {
        question: "",
        answerA: "",
        answerB: "",
    }

    let errors: Question = {...fields}

    let valid = true

    function submitHandler(){

        if(fields.question.trim().length < 5){
            valid = false
            errors.question = "Question must be atleast 5 charactors"
        }else{
            errors.question = ""
            valid = true
        }

        if(fields.answerA.trim().length < 1){

            valid = false
            errors.answerA = "Answer A cannot be Empty"
            
            
        }else{
            errors.answerA = ""
            valid = true
        }

        if(fields.answerB.trim().length < 1){

            valid = false
            errors.answerB = "Answer B cannot be Empty"
        }else{
            errors.answerB = ""
            valid = true
        }

        console.log(valid);
    
        if(valid){

            let poll : Poll = {
                id: Math.random(),
                question: {...fields},
                voteA: 0,
                voteB: 0
            }

            PollStore.update((currentPolls)=>{
                return [poll, ...currentPolls]
            })


            dispatch("added")

            //errors should be empty at this point
            fields = errors

            
        }
        
    }
    

    
</script>


<form on:submit|preventDefault={submitHandler}>
    <div class="form-field">
        <label for="question">Poll Question</label>
        <input bind:value={fields.question} type="text" id="question">
        <span class="error">{errors.question}</span>
    </div>
    <div class="form-field">
        <label for="answer-a">Answer A</label>
        <input bind:value={fields.answerA} type="text" id="answer-a">
        <span class="error">{errors.answerA}</span>
    </div>
    <div class="form-field">
        <label for="answer-b">Answer B</label>
        <input bind:value={fields.answerB} type="text" id="answer-b">
        <span class="error">{errors.answerB}</span>
    </div>

    <Button props={{flat: false, inverse: true, type: "primary"}}>Add Poll</Button>
</form>

<style>

    form{
        width: 400px;
        margin: 0 auto;
        text-align: center ;

    }
    .form-field{
        margin: 18px auto;
    }
    input{
        width: 100%;
        border-radius: 6px;
        border: 1px solid;
        outline: none;
        padding: 5px;
    }
    label{
        margin: 10px auto;
        text-align: left;
    }
    .error{
        font-weight: bold;
        color: #d91b42;;
    }

</style>