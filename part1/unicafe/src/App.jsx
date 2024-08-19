import { useState } from 'react'

const Headers = ({ text }) => (
  <h2>{text}</h2>
)

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({ good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>No feedback given</div>
    )
  }

  return (
    <div>
      <span> Good {good} </span><br />
      <span> Neutral {neutral} </span><br />
      <span> Bad {bad} </span><br />
      <span> All {good + neutral + bad} </span><br />
      <span> Average {(good - bad) / (good + neutral + bad)} </span><br />
      <span> Positive {good / (good + neutral + bad) * 100} </span> % <br />
    </div>
  )
}


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
      <Statistics good={good} neutral={neutral} bad={bad} /><br />
    </div>
  )
}

export default App