import { mdiPlus } from '@mdi/js';
import Icon from '@mdi/react';
import React, { useEffect, useState } from 'react'
import { ReactSortable } from "react-sortablejs";
import NewFormType from './form/NewFormType'

const CreateFormTesting = () => {

  const [form, setForm] = useState([{
    id: 0,
    type: "short_ans",
    question: "New Question"
  }]);
  
  useEffect(()=> {
    console.log(form)
  }, [form])

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
    setForm([...form, {id: form.length, question: "New Question", type: "short_ans"}])
  }

  return (
    <>
      <h1>New Form</h1>
      <button onClick={addForm}><Icon path={mdiPlus} size={1} color="red" /></button>
      <ReactSortable list={form} setList={setForm} handle=".handle" animation={100}>
        {form.map((data) => (
          <div className="p-3" key={data.id}><NewFormType data={data} setProps={makeChanges} deleteForm={deleteForm} /></div>
        ))}
      </ReactSortable>
    </>
  );
}

export default CreateFormTesting;