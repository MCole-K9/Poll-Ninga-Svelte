export type Question = {
    question: string,
    answerA: string,
    answerB: string
}

export type Poll = {
    id: number
    question: Question
    voteA: number,
    voteB: number,

}