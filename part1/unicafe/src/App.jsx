import { useState } from 'react'

const Headers = ({ text }) => (
  <h2>{text}</h2>
)

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = (props) => (
  <span>{props.text} {props.score} </span>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      <Headers text="Give Feedback" />
      <Button text="good" handleClick={increaseGood} />
      <Button text="neutral" handleClick={increaseNeutral} />
      <Button text="bad" handleClick={increaseBad} />
      <Headers text="Statistics" />
      <Statistics text="Good" score={good}/><br />
      <Statistics text="Neutral" score={neutral}/><br />
      <Statistics text="Bad" score={bad}/><br />
      <Statistics text="All" score={good + neutral + bad} /><br />
      <Statistics text="Average" score={(good - bad) / (good + neutral + bad)} /><br />
      <Statistics text="Positive" score= {good / (good + neutral + bad) * 100} /> % <br />
    </div>
  )
}

export default App