import styled from 'styled-components';
import {useState, } from 'react'

import Input from './input';
import Button from './button';

const Form = styled.form`
flex: 1;
display: flex;
max-width: 900px;
padding: 20px;

@media (max-width: 500px) {
    flex-direction: column;
}
> input, button {
    margin: 10px;
}
`;

function NameEmailForm({buttonText, onSubmit}) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const handleSubmit = (e) => {
        e.prevent.default();
        onSubmit({ name, email});
        setName('');
        setEmail('');

    }
  return( 
  <Form onSubmit={handleSubmit} >
      <Input 
      placeholder="Seu nome"
      required
      value={name}
      onChange={({target})=> setName(target.value)}
      />
      <Input
      type="email" 
      placeholder="Seu email"
      required
      value={email}
      onChange={({target})=> setEmail(target.value)}
      />
      <Button> { buttonText } </Button>

  </Form>
  )
}
NameEmailForm.defaultProps = {
    buttonText: 'Criar',
    onSubmit: () => {},
    }

export default NameEmailForm;