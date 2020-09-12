import { mdiDrag } from '@mdi/js';
import Icon from '@mdi/react';
import React from 'react'

const NewFormType = ({data, setProps}) => {

  const {
    id,
    type,
    question,
    options
  } = data;


  const changeQuestion =(event) => {
    setProps(id, {id, type, options, question: event.target.value})
  }

  const changeType =(event) => {
    setProps(id, {id, type:event.target.value, options, question})
  }

  return (
    <div className="border">
      <Icon path={mdiDrag} size={1} color="grey" className="handle" />
      <label>Question</label>
      <input value={question} onChange={changeQuestion} />
      <label>Type:</label>
      <select onChange={changeType}>
        <option value="short_ans" defaultValue>Short Answer</option>
        <option value="long_ans">Long Answer</option>
      </select>
    </div>
  );
}

export default NewFormType;