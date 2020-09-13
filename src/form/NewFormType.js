import {   mdiChevronDown, mdiChevronUp, mdiClose,  mdiDragHorizontal, mdiPlus } from '@mdi/js';
import Icon from '@mdi/react';
import React from 'react'
import { Button, Col, FormGroup, Input, Label, Row } from 'reactstrap';

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
      setProps(id, {id, type, options: [...options, ""], question, isRequired})
    } else {
      setProps(id, {id, type, options: [""], question, isRequired})
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
      <div className="mt-3">
        <Label className="small mb-0">Options</Label>
        {options && options.map((data, index) => (
          <Row className="mb-2" key={index}>
            <Col>
              <Input type="text" value={data} placeholder="Your option here" onChange={changeOption} name={index}  />
            </Col>
            <Col xs="auto" className="d-flex align-items-center justify-content-center px-0">
              <Icon path={mdiClose} size={1} color="red" onClick={() => {deleteOption(index)}} />
            </Col>
          </Row>
        ))}
        <div className="small my-1" >
          <Button onClick={addOption} outline color="red" style={{fontSize: '0.7rem'}} className="d-flex align-items-center border-success text-success" size="sm"><Icon path={mdiPlus} size={0.6} /> Add an Option</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded p-3" style={{border: "1px dashed rgb(93, 44, 255, 0.5)"}}>
      <Row>
        <Col md="auto" >
          <div className="d-flex flex-column align-items-center handle">
            <Icon path={mdiChevronUp} size={1.2} color="rgb(93, 44, 255, 0.8)" className="hoverPointer d-none d-md-block" />
            <Icon path={mdiDragHorizontal} size={1.2} color="rgb(93, 44, 255, 0.8)" className="hoverPointer" style={{transform: "translateY(-50%)"}} />
            <Icon path={mdiChevronDown} size={1.2} color="rgb(93, 44, 255, 0.8)" className="hoverPointer d-none d-md-block"style={{transform: "translateY(-100%)"}}  />
          </div>
        </Col>
        <Col>
          <FormGroup>
            <Label className="mb-0 small">Question</Label>
            <Input value={question} placeholder="Enter your question" onChange={changeQuestion} />
          </FormGroup>
          <Row>
            <Col xs={12} md="auto">
              <Label className="mb-0 small">Type</Label>
              <Input type="select" onChange={changeType} className="border-primary pl-4">    
                <option value="short_ans" defaultValue>Short Answer</option>
                <option value="long_ans">Long Answer</option>
                <option value="checkbox">Multiple Choice</option>
              </Input>
            </Col>
          </Row>
          {type !== "short_ans" && type !== "long_ans" && renderOptions()}
          {(type === "short_ans" || type === "long_ans") && 
            <div className="pl-4 mt-3">
              <Input type="checkbox" checked={isRequired} onChange={changeRequired} className="border-primary" /> <Label className="mb-0 small">Is Required?</Label>
            </div>}
        </Col>
        <Col md="auto" className="text-right">
          <Icon path={mdiClose} size={1.2} color="red"  onClick={deleteQuestion} className="hoverPointer" />
        </Col>
      </Row>
    </div>
  );
}

export default NewFormType;