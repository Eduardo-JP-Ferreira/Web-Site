import styled from 'styled-components';
import Header from '../components/Header';
import Carousel from '../components/Carousel';

export default function HomePage() {
  return (
    <HomeContainer>
      <Header />
      <PageUpperSection>
        <Carousel />
        <FraseContainer>
          <h1>ANDE SEMPRE NO ESTILO COM MAX IMPORTS!</h1>
        </FraseContainer>
      </PageUpperSection>
      <Page>{/* <Carousel /> */}</Page>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Page = styled.div`
  background-color: lightgray;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const PageUpperSection = styled.div`
  background-color: red;
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: row;
  margin-top: 70px;
`;

const FraseContainer = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: white;
    font-size: 50px;
    text-align: center;
    text-decoration: solid;
  }
`;
