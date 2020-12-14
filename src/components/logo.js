import styled from 'styled-components';

const H1 = styled.div`
font-size: 64px;
color: ${({ theme })=> theme.colors.light}
`;

export default function Logo(){
  return <H1>{'{Amigo} Oculto'}</H1>
}
