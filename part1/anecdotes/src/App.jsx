import { useState } from 'react'

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const Headers = ({ text }) => (
  <h2>{text}</h2>
)

const AnecdotesLine = ({ text }) => (
  <span>{text}</span>
)

const VotesLine = ({ votes }) => (
  <span>has {votes} votes</span>
)

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(getRandomInt(anecdotes.length))
  const [allVotes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const voteAnecdote = () => {
    const allVotesCopy = [...allVotes]
    allVotesCopy[selected] += 1
    setVotes(allVotesCopy)
  }

  const generateRandomAnecdote = () => setSelected(getRandomInt(anecdotes.length))

  const getMostVotedAnecdote = () => allVotes.indexOf(Math.max(... allVotes))

  let mostVotedAnecdote = getMostVotedAnecdote()

  return (
    <div>
      <Headers text="Anecdote of the day" />
      <AnecdotesLine text={anecdotes[selected]} /> <br />
      <VotesLine votes={allVotes[selected]} /> <br />
      <Button text="Vote" handleClick={voteAnecdote} />
      <Button text="Next Anecdote" handleClick={generateRandomAnecdote} />
      <Headers text="Anecdote with most votes" />
      <AnecdotesLine text={anecdotes[mostVotedAnecdote]} /> <br />
      <VotesLine votes={allVotes[mostVotedAnecdote]} />
    </div>

  )
}

export default App