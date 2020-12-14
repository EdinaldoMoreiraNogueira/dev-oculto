import styled from 'styled-components';

const Input = styled.input`
font-size: 15px;
padding: 20px;
color: ${({ theme })=> theme.colors.primary}
background-color: ${({ theme })=> theme.colors.light}
border: 0;
border-radius: 10px;
width: 88%;


&:focus {
    border: none;
    outline: none;
}

&::placeholder {
    color: ${({ theme })=> theme.colors.primary} 
}
`;

export default function InputComponent(props) {
  return <Input {...props} />;
}