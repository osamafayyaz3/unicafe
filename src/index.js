import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const Display = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}
 
const Result = (props) => {
  return (
    <div>
      {props.text} {props.number}
    </div>
  )
}

const App = () => {
  const heading = "Give feedback"
  const headingStat = "statistics"
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => {
    setGood(good + 1)
  }

  const badClick = () => {
    setBad(bad + 1)
  }

  const neutralClick = () => {
    setNeutral(neutral + 1)
  }

  return (
    <div>
      <Display text={heading}/>
      <Button handleClick={goodClick} text={'good'}/>
      <Button handleClick={badClick} text={'bad'}/>
      <Button handleClick={neutralClick} text={'neutral'}/>
      <Display text={headingStat}/>
      <Result text={'good'} number={good}/>
      <Result text={'bad'} number={bad}/>
      <Result text={'neutral'} number={neutral}/>
    </div>
  )
}


ReactDOM.render(<App/>, document.getElementById('root'))