import React, { useEffect, useState } from 'react'
import { ReactSortable } from "react-sortablejs";
import NewFormType from './form/NewFormType'

const CreateFormTesting = () => {

  const [form, setForm] = useState([{  id:0, name: "shrek" },
  {  id:1, name: "fiona" }]);
  
  useEffect(()=> {
    console.log(form)
  }, [form])

  return (
    <>
      <ReactSortable list={form} setList={setForm}>
        {form.map((data) => (
          <div key={data.id}><NewFormType data={data} /></div>
        ))}
      </ReactSortable>
    </>
  );
}

export default CreateFormTesting;