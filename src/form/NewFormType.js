import { mdiDrag } from '@mdi/js';
import Icon from '@mdi/react';
import React from 'react'

const NewFormType = ({data, setProps}) => {

  const {
    id,
    type,
    question,
    options,
    isRequired
  } = data;


  const changeQuestion =(event) => {
    setProps(id, {id, type, options, question: event.target.value, isRequired})
  }

  const changeType =(event) => {
    setProps(id, {id, type:event.target.value, options, question, isRequired})
  }

  const changeRequired =(event) => {
    setProps(id, {id, type, options, question, isRequired: event.target.checked})
  }

  const renderOptions = () => {
    return (
    <div>Options</div>)
  }

  return (
    <div className="border">
      <Icon path={mdiDrag} size={1} color="grey" className="handle" />
      <label>Question</label>
      <input value={question} onChange={changeQuestion} />
      {(type === "short_ans" || type === "long_ans") && 
        <>
          <label>Is Required?</label>
          <input type="checkbox" checked={isRequired} onChange={changeRequired} />
        </>
      }
      <br/>
      <label>Type:</label>
      <select onChange={changeType}>
        <option value="short_ans" defaultValue>Short Answer</option>
        <option value="long_ans">Long Answer</option>
        <option value="checkbox">Multiple Choice</option>
      </select>
      {type !== "short_ans" && type !== "long_ans" && renderOptions()}
    </div>
  );
}

export default NewFormType;