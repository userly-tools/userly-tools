import { mdiClose, mdiDrag, mdiPlus } from '@mdi/js';
import Icon from '@mdi/react';
import React from 'react'

const NewFormType = ({data, setProps, deleteForm}) => {

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

  const deleteQuestion = () => {
    deleteForm(id)
  }

  const addOption = () => {
    if(options){
      setProps(id, {id, type, options: [...options, "new option"], question, isRequired})
    } else {
      setProps(id, {id, type, options: ["new option"], question, isRequired})
    }
  }

  const changeOption = (event) => {
    let bOptions = [...options]
    bOptions[event.target.name] = event.target.value
    setProps(id, {id, type, options: bOptions, question, isRequired})
  }

  const deleteOption = (toDel) => {
    let bOptions = [...options]
    bOptions.splice(toDel, 1)
    setProps(id, {id, type, options: bOptions, question, isRequired})
  }

  const renderOptions = () => {
    return (
      <>
        <div>Options</div>
        <button onClick={addOption}><Icon path={mdiPlus} size={1} color="green" /></button>
        {options && options.map((data, index) => (
          <div key={index}>
            <input type="text" value={data} onChange={changeOption} name={index}  />
            <Icon path={mdiClose} size={1} color="red" onClick={() => {deleteOption(index)}} />
          </div>
        ))}
      </>
    )
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
      <Icon path={mdiClose} size={1} color="red" onClick={deleteQuestion} />
    </div>
  );
}

export default NewFormType;