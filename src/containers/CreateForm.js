import { mdiPlus } from '@mdi/js';
import Icon from '@mdi/react';
import axios from 'axios';
import React, {  useState } from 'react'
import { ReactSortable } from "react-sortablejs";
import { Button, Col, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Label, Row } from 'reactstrap';
import NewFormType from '../form/NewFormType'

const CreateForm = () => {

  const [form, setForm] = useState([{
    id: 0,
    type: "short_ans",
  }]);

  const [project, setProject] = useState({
    projtit: "",
    projdesc: "",
    projpart: 1,
    projtype: "#1on1",
    projamount: 0
  });
  
  const publishForm = (event) => {
    event.preventDefault();
    var data = {
      ...project, 
      components: form
    }
    console.log(data)
    const headers = {
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin': '*'
    };
    axios.post(`http://userly.herokuapp.com/forms`, data, headers)
    .then(res => {
      console.log(res)
    })
  }

  const makeChanges = (id, data) => {
    let bForm = [...form]
    let i = 0, s = 0;
    bForm.forEach(element => {
      if(id === element.id) {
        s = i;
      }
      i++;
    });
    bForm[s] = data
    setForm(bForm)
  }

  const deleteForm = (id) => {
    let bForm = [...form]
    let i = 0, s = 0;
    bForm.forEach(element => {
      if(id === element.id) {
        s = i;
      }
      i++;
    });
    bForm.splice(s, 1);
    setForm(bForm)
  }

  const addForm = () => {
    setForm([...form, {id: form.length, type: "short_ans"}])
  }

  const handleProject = (event) => {
    setProject({...project, [event.target.name]: event.target.value})
  }

  return (
    <>
        <Form onSubmit={publishForm}>

      <div className="px-3">
        <FormGroup>
          <Label className="small mb-0">Project Title</Label>
          <Input type="text" name="projtit" required value={project.projtit} onChange={handleProject}  className="border-primary p-4" placeholder="Project Title" />
        </FormGroup>
        <FormGroup>
          <Label className="small mb-0">Project Description</Label>
          <Input type="textarea" name="projdesc" required value={project.projdesc} onChange={handleProject} className="border-primary p-4" placeholder="Project Description" />
        </FormGroup>
        <Row>
          <Col xs={12} md="auto" className="mb-2  mr-sm-2 mb-sm-0">
            <Label className="small mb-0">Project Type</Label>
            <Input type="select" required name="projtype" defaultValue={project.projtype} onChange={handleProject} className="border-primary pl-4">    
              <option value="#1on1">1on1 Interview</option>
              <option value="#FocusGroup">Focus Group</option>
              <option value="#MultiDay">Multi-Day Study</option>
              <option value="#UnmodTasks">Unmod Tasks</option>
            </Input>
          </Col>
          <Col xs={12} md="auto" className="mb-2 ml-auto mr-sm-2 mb-sm-0">
            <Label className="small mb-0">No. Of Participants</Label>
            <Input type="number" min="1" required name="projpart" value={project.projpart} onChange={handleProject}  className="border-primary px-4" placeholder="No. Of Participants" />
          </Col>
          <Col xs={12} md="auto" className="mb-2 ml-auto mr-sm-2 mb-sm-0">
            <Label className="small mb-0">Incentive Amount</Label>
            <InputGroup>
              <Input type="number" min="0" required name="projamount" value={project.projamount} onChange={handleProject}  className="border-primary pl-4" placeholder="Incentive Amount" />
              <InputGroupAddon  addonType="append">
                <InputGroupText className="bg-white border-primary text-primary">$ via UPI</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Col>
        </Row> 
        <h3 className="mt-5 text-primary head mb-0 text-uppercase">Questionnaire</h3>
        <p className="text-secondary mb-0 small" style={{opacity: "0.5"}}>Add your own custom fields to collect information from participants.</p>
      </div>
      <ReactSortable list={form} setList={setForm} handle=".handle" animation={100}>
        {form.map((data) => (
          <div className="p-3" key={data.id}><NewFormType data={data} setProps={makeChanges} deleteForm={deleteForm} /></div>
        ))}
      </ReactSortable>
      <div className="text-center">
        <Button onClick={addForm} outline color="red" className="d-flex align-items-center justify-content-center border-success mx-auto small text-success" size="sm"><Icon path={mdiPlus} size={1} /> Add a Question</Button>
      </div>
      <div className="text-right px-3 mt-3 mb-5">
        <Button outline type="submit" color="primary" size="lg">Publish</Button>
      </div>
      </Form>
    </>
  );
}

export default CreateForm;