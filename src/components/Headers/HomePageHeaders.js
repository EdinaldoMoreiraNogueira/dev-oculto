import styled from 'styled-components';
import { useRouter } from 'next/router'
import ImageContainer from '../Container/ImageContainer';
import Logo from '../logo';
import NameEmailForm from '../nameEmailForm';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
min-height: 80vh;
color: ${({ theme })=> theme.colors.light}
padding-left: 40px;

`;

const FormDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
flex-shrink: 0;

`;

export default function HomePageHeaders (){
    const router = useRouter();

    const handleSubmit =  async ({name, email}) => {
    const{ NEXT_PUBLIC_API_URL } = process.env;
    const data = await fetch(`${NEXT_PUBLIC_API_URL}/secrets`, {
        method: 'POST',
        body: JSON.stringify({
            name,
            email,

        })
    }) 
    handleResponse(await data.json());
    }
    const handleResponse = ({success, id, adminKey }) => {
        if(success) {
            router.push(`/secrets/${id}?adminKey=${adminKey}`)
        }
    }
return (
    <ImageContainer>
       <Container>
       <Logo />
       <h2>A melhor brincadeira do Natal </h2>
       </Container>
       <FormDiv>
           <NameEmailForm onSubmit={handleSubmit} />
       </FormDiv>
    </ImageContainer>
)
}