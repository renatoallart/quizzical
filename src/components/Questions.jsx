import React from 'react'

export const Questions = (props) => {
    const { question, answers } = props
    const test = answers.map((answer) => <span>{answer} </span>)
  return (
    <div>
        <h2>{question} </h2>
        <p>{test} </p>
    </div>
  )
}
