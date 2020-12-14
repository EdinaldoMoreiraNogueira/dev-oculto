import styled from 'styled-components';

const StyleButton = styled.button`
font-size: 14px;
color: ${({ theme })=> theme.colors.light}
border: none;
cursor: pointer;
padding: 15px 30px;
display: block;
border-radius: 50px;
margin: 10px 0;
background-color: ${({ theme })=> theme.colors.secondary}
`;

export default function Button(props) {
  return <StyleButton {...props} />;
}