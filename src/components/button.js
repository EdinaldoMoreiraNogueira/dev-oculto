import styled from 'styled-components';

const StyleButton = styled.button`
border: none;
cursor: pointer;
padding: 15px 30px;
font-size: 14px;
border-radius: 50px;
display: block;
margin: 10px 0;
background-color: ${({ theme }) => theme.colors.secondary};
`;

export default function Button(props) {
  return <StyleButton {...props} />;
}