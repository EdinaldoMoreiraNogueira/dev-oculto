import HomePageHeaders from '../src/components/Headers/HomePageHeaders';
import GiftContainer from '../src/components/Container/GiftContainer';
import Step from '../src/components/step';



export default function HomePage() {
  return (
      <>
          <HomePageHeaders/>
          <GiftContainer>
            <Step />
          </GiftContainer>
      </>
  )
}