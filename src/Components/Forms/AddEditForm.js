import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function AddEditForm(props) {
  const[form, setValues] = useState({
    id: 0,
    life: '',
    title: '',
    medium: '',
  })

  const onChange = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const submitFormAdd = e => {
    e.preventDefault()
    fetch('http://localhost:3000/crud', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        life: form.life,
        title: form.title,
        medium: form.medium
      })
    })
      .then(response => response.json())
      .then(item => {
        if(Array.isArray(item)) {
          props.addItemToState(item[0])
          props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }

  const submitFormEdit = e => {
    e.preventDefault()
    fetch('http://localhost:3000/crud', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: form.id,
        life: form.life,
        title: form.title,
        medium: form.medium
      })
    })
      .then(response => response.json())
      .then(item => {
        if(Array.isArray(item)) {
          props.updateState(item[0])
          props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    if(props.item){
      const { id, life, title, medium } = props.item
      setValues({ id, life, title, medium })
    }
  }, false)

    return (
      <Form onSubmit={props.item ? submitFormEdit : submitFormAdd}>
        <FormGroup>
          <Label for="life">Life</Label>
          <Input type="text" name="life" id="life" onChange={onChange} value={form.life === null ? '' : form.life} />
        </FormGroup>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input type="text" name="title" id="title" onChange={onChange} value={form.title === null ? '' : form.title}  />
        </FormGroup>
        <FormGroup>
          <Label for="medium">Medium</Label>
          <Input type="text" name="medium" id="medium" onChange={onChange} value={form.medium === null ? '' : form.medium}  />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    )
}

export default AddEditForm;